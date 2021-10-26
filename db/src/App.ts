import BaseStore from './BaseStore';

export class App {}

export class Apps extends BaseStore<string, App> {
	async init(): Promise<void> {
		// WIP
	}
}
