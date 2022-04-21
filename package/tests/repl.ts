import { start } from 'repl';
import { IPAKit } from '../src';

(async () => {
	const kit = new IPAKit();
	const search = async (bundle_id: string) => {
		const result = await kit.search({ bundle_id });
		console.log(result);
	};
	start('kit> ').context.kit = search;
})();
