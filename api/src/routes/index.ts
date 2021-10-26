import { Request, Router as app } from 'express';
import { IPAKit } from '..';

export interface ReqInst extends Request {
	inst: IPAKit
}

const router = app();


export default router;
