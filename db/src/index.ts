import { Provider, RawApp, SearchQuery } from './Provider';
import appstore from './sources/AppStore';
import ipacandy from './sources/IPACandy';

export interface App extends RawApp {
	provider: Provider
}

export class IPAKitDB {
	providers: Provider[]

	async init(): Promise<void> {
		this.providers = [ ipacandy, appstore ];
	}

	async search(q: Partial<SearchQuery>): Promise<App[]> {
		let found: App[] = [];
		for (const provider of this.providers) {
			let apps: App[];
			try {
				apps = await provider.handle(q);
			} catch (e) {
				console.error(e);
				continue;
			}
			found = [ ...found, ...apps ];
		}
		console.log(found);
		return found;
	}
}
