import { App, IPAKit, SearchQuery } from '../src';
import { Command, Nuru } from 'nuru';


const kit = new IPAKit();

const search = new Command({
	name: 'search',
	description: 'search for an app'
});

search.run(async (client, args) => {
	const q = args.join(' ');
	let type: 'name' | 'bundle_id' = 'name';
	if ((/\S+\.\S+\.\S+/g).test(q)) {
		type = 'bundle_id';
	}
	const data: Partial<SearchQuery> = {};
	data[type] = q;
	let results: App[];
	try {
		results = await kit.search(data);
	} catch (e) {
		console.log(e);
		throw e;
	}
	return JSON.stringify(results, null, 4);
});

new Nuru().init({
	name: 'IPAKit',
	commands: [ search ]
});
