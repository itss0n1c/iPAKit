import { readFile } from 'fs/promises';
import { join } from 'path';
import { Provider } from '../Provider';

const BuiltIn = new Provider({
	name: 'Built-In iOS Apps'
});

BuiltIn.run(async (q) => {
	const file = join(__filename, '../../..', 'iOS.json');
	const data: {
		name: string,
		bundle_id: string
	}[] = JSON.parse(await readFile(file, { encoding: 'utf-8' }));

	const find = data.filter(obj => {
		let nameMatches = false;
		let bundleIDMatches = false;
		if (typeof q.name !== 'undefined') {
			nameMatches = obj.name.toLowerCase().includes(q.name.toLowerCase());
		}
		if (typeof q.bundle_id !== 'undefined') {
			bundleIDMatches = obj.bundle_id.toLowerCase() === q.bundle_id.toLowerCase();
		}
		return nameMatches || bundleIDMatches;
	});
	return find.map(a => ({
		name: a.name,
		bundle_id: a.bundle_id,
		author: 'Apple'
	}));
});

export default BuiltIn;
