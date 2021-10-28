import { SearchQuery } from 'db/dist/Provider';
import { Request, Router as app } from 'express';
import { IPAKit } from '..';

export interface ReqInst extends Request {
	inst: IPAKit
	query: Partial<SearchQuery>
}

const router = app();

router.get('/search', async (req: ReqInst, res) => {
	const { name, bundle_id } = req.query;
	const results = await req.inst.db.search({ name,
		bundle_id });
	return res.json({ resultCount: results.length,
		results });
});

export default router;
