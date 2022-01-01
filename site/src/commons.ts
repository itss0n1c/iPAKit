import manifest from '../../manifest.json';
export { manifest };

export const api = manifest.api.url;

export interface IPAKitRes<T> {
	resultCount: number
	results: T
}

export async function request<T>(path: string, method: 'GET' | 'POST' = 'GET', query: Record<string, any> = {}): Promise<T> {
	const url = new URL(api);
	url.pathname = path;
	for (const k of Object.keys(query)) {
		url.searchParams.append(k, query[k]);
	}
	const res = await fetch(url.toString(), { method });
	if (!res.ok) {
		throw res;
	}
	return res.json();
}

export interface EndpointDefault {
	query: Record<string, string>
}
export interface EndpointInfo {
	path: string
	queries: string[]
	default: EndpointDefault
}
