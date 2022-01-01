import fetch from 'node-fetch';
import { join } from 'path';
import { URL } from 'url';
import { App } from '.';
export interface SearchQuery {
	name: string
	bundle_id: string
}

export interface RawApp {
	name: string
	bundle_id: string
	icon: string | Uint8Array
	author: string
}

export interface ProviderConstructor {
	name: string
	url?: string
}

// eslint-disable-next-line no-unused-vars
export type ProviderRes<T> = (q: Partial<SearchQuery>, prov: T) => Promise<Partial<RawApp>[]> | Partial<RawApp>[];

export interface ResponseTypes<T = any> {
	json: T,
	text: string,
	buffer: Buffer
}

export class Provider implements ProviderConstructor {
	name: string
	url: string
	private search: ProviderRes<this>

	constructor(opts: ProviderConstructor) {
		this.name = opts.name;
		this.url = opts.url;
	}

	urlWithPath(path: string, query: Record<string, string> = {}, uri?: string): string {
		const url = new URL(typeof uri !== 'undefined' ? uri : this.url);
		for (const k of Object.keys(query)) {
			url.searchParams.append(k, query[k]);
		}
		url.pathname = join(url.pathname, path);
		// console.log(url.toString());
		return url.toString();
	}

	async request<T extends keyof ResponseTypes, U extends ResponseTypes[T]>(path: string, type: T, query: Record<string, string> = {}, url?: string): Promise<U> {
		const res = await fetch(this.urlWithPath(path, query, url));
		if (!res.ok) {
			throw res;
		}
		switch (type) {
			case 'json':
				return res.json();
			case 'text':
				return res.text() as Promise<U>;
			case 'buffer':
				return res.buffer() as Promise<U>;
		}
	}

	async run(cb: ProviderRes<this>): Promise<void> {
		Object.defineProperty(this, 'search', {
			value: cb,
			configurable: true,
			writable: true
		});
	}

	async handle(q: Partial<SearchQuery>): Promise<App[]> {
		const app = await this.search(q, this);
		return app.map(a => ({ ...a as RawApp,
			provider: this }));
	}
}
