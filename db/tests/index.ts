import { start } from 'repl';
import { IPAKitDB } from '../src';

(async () => {
	const kit = new IPAKitDB();
	await kit.init();
	start('IPAKitDB> ').context.kit = kit;
})();
