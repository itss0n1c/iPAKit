import { SearchQuery } from 'ipakit';
import { Request, Router as app } from 'express';
import { IPAKitAPI } from '..';
import { manifest } from 'manifest';

export interface ReqInst extends Request {
	inst: IPAKitAPI
	query: Partial<SearchQuery>
}

const router = app();

router.get('/icon/:bundle_id', async (req: ReqInst, res) => {
	const { bundle_id } = req.params;
	const results = await req.inst.db.search({
		bundle_id });
	if (!results.length) {
		return res.sendStatus(404);
	}
	const data = results[0];
	if (data.icon instanceof Uint8Array) {
		return res.set('Content-Type', 'image/png').send(Buffer.from(data.icon.buffer));
	}
	return res.sendStatus(404);
});

router.get('/search', async (req: ReqInst, res) => {
	const { name, bundle_id } = req.query;
	const data = await req.inst.db.search({ name,
		bundle_id });
	const results = data.map(r => {
		if (r.icon instanceof Uint8Array) {
			return { ...r,
				icon: `${manifest.config.api.url}/icon/${r.bundle_id}` };
		}
		return r;
	});
	return res.json({ resultCount: results.length,
		results });
});

export default router;
