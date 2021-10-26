import { Apps } from './App';
import { Db } from './Db';

export class IPAKitDB {
	db: Db
	apps: Apps

	async init(): Promise<void> {
		this.db = new Db();
		await this.db.init();
		this.apps = new Apps();
		await this.apps.init();
	}
}
