import express from 'express';
import router, { ReqInst } from './routes';
import { IPAKitDB } from 'db';
import { config } from 'dotenv';
import cors from 'cors';
config();

export class IPAKit {
	app = express();
	port = typeof process.env.PORT !== 'undefined' ? parseInt(process.env.PORT) : 3000;
	db: IPAKitDB
	constructor() {
		this.init();
	}

	async init(): Promise<void> {
		this.db = new IPAKitDB();
		await this.db.init();

		this.app.use(cors());
		this.app.use((req: ReqInst, res, next) => {
			req.inst = this;
			return next();
		});
		this.app.set('json spaces', 4);
		this.app.use('/', router);

		this.app.listen(this.port, () => {
			console.log(`Live at port ${this.port}`);
		});
	}
}

new IPAKit();
