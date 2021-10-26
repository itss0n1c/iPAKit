import { Pool, PoolClient } from 'pg';

export class Db {
	inst: Pool
	pool: PoolClient
	constructor() {
		Object.defineProperty(this, 'inst', {
			value: new Pool({
				user: 'ipakit',
				host: 'localhost',
				database: 'ipakit',
				password: process.env.DB_PASS,
				port: 5432
			}),
			configurable: true,
			writable: true
		});
	}

	async init(): Promise<this> {
		return this;
	}
}
