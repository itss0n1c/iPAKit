import express from 'express';
import router, { ReqInst } from './routes';
import { IPAKitDB } from 'db';

export class IPAKit {
	app = express();
	port = 3000;
	db: IPAKitDB
	constructor() {
		this.init();
	}

	async init(): Promise<void> {
		this.db = new IPAKitDB();
		await this.db.init();

		this.app.use((req: ReqInst, res, next) => {
			req.inst = this;
			return next();
		});
		this.app.use('/', router);

		this.app.listen(this.port, () => {
			console.log(`Live at port ${this.port}`);
		});
	}
}
