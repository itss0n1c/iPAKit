import express from 'express';
import router, { ReqInst } from './routes';
import { IPAKit } from 'ipakit';
import { config } from 'dotenv';
import cors from 'cors';
config();

export class IPAKitAPI {
	app = express();
	port = typeof process.env.PORT !== 'undefined' ? parseInt(process.env.PORT) : 3000;
	db: IPAKit
	constructor() {
		this.init();
	}

	async init(): Promise<void> {
		this.db = new IPAKit();

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

new IPAKitAPI();
