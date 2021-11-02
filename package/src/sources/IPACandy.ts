import { Provider } from '../Provider';

const ipacandy = new Provider({
	name: 'IPACandy',
	url: 'https://api.ipacandy.com'
});

interface IPACandyApp {
	name: string
	rawdesc: string
	icon: string
	author: string
	bundleid: string
}

interface IPACandyRes<T = IPACandyApp[]> {
	status: boolean
	data?: T
	error?: T
}

ipacandy.run(async (q, prov) => {
	const searchkeys = Object.keys(q);
	if (searchkeys.length === 0) {
		throw 406;
	}
	const res = await prov.request('/apps', 'json') as IPACandyRes;
	if (!res.status) {
		throw 500;
	}
	const apps = res.data;
	// console.log(apps);
	const find = apps.filter(obj => {
		let nameMatches = false;
		let bundleIDMatches = false;
		if (typeof q.name !== 'undefined') {
			nameMatches = obj.name.toLowerCase().includes(q.name.toLowerCase());
		}
		if (typeof q.bundle_id !== 'undefined') {
			bundleIDMatches = obj.bundleid === q.bundle_id;
		}
		return nameMatches || bundleIDMatches;
	});
	return find.map(a => ({
		name: a.name,
		bundle_id: a.bundleid,
		icon: a.icon,
		author: a.author
	}));
});

export default ipacandy;
