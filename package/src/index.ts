import { Provider, RawApp, SearchQuery } from './Provider';
import appstore from './sources/AppStore';
import BuiltIn from './sources/BuiltIn';
import ipacandy from './sources/IPACandy';

export { Provider, RawApp, SearchQuery };

export interface App extends RawApp {
	provider: Provider
}

export interface IPAKitOptions {
	providers: Provider[]
}

export default class IPAKit {
	providers = [ ipacandy, appstore, BuiltIn ]

	constructor(opts?: Partial<IPAKitOptions>) {
		if (typeof opts === 'undefined') {
			opts = {};
		}
		if (typeof opts.providers === 'undefined') {
			opts.providers = [];
		}
		for (const provider of opts.providers) {
			this.providers.push(provider);
		}
	}


	async search(q: Partial<SearchQuery>): Promise<App[]> {
		let found: App[] = [];
		for (const provider of this.providers) {
			let apps: App[];
			try {
				apps = await provider.handle(q);
			} catch (e) {
				// console.error(e);
				continue;
			}
			found = [ ...found, ...apps ];
		}
		if (typeof q.bundle_id !== 'undefined') {
			if (typeof q.name !== 'undefined') {
				found = found.filter(a => a.bundle_id === q.bundle_id && a.name.toLowerCase().includes(q.name.toLowerCase()));
			} else {
				// console.log(q.bundle_id, found);
				found = found.filter(a => a.bundle_id.toLowerCase() === q.bundle_id.toLowerCase());
			}
		}

		// console.log(found);
		return found;
	}
}
export { IPAKit };
