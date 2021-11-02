import { Provider, RawApp } from '../Provider';

const appstore = new Provider({
	name: 'AppStore',
	url: 'https://itunes.apple.com'
});

interface AppStoreRes {
	resultCount: number,
	results: {
		appletvScreenshotUrls: string[]
		screenshotUrls: string[]
		ipadScreenshotUrls: string[]
		artworkUrl512: string
		artistViewUrl: string,
		artworkUrl60: string,
		artworkUrl100: string,
		features: string[]
		supportedDevices: string[]
		advisories: string[]
		isGameCenterEnabled: boolean
		kind: string
		minimumOSVersion: string
		languageCodesISO2A: string[]
		fileSizeBytes: string
		formattedPrice: string
		averageUserRatingForCurrentVersion: number,
		userRatingCountForCurrentVersion: number,
		trackContentRating: string
		trackCensoredName: string
		trackViewUrl: string
		contentAdvisoryRating: string
		averageUserRating: number,
		bundleId: string
		trackId: number,
		trackName: string
		releaseDate: string
		primaryGenreName: string
		genreIds: string[],
		isVppDeviceBasedLicensingEnabled: boolean,
		sellerName: string
		currentVersionReleaseDate: string
		releaseNotes: string
		primaryGenreId: number,
		currency: string
		description: string,
		artistId: number,
		artistName: string
		genres: string[],
		price: number,
		version: string
		wrapperType: string
		userRatingCount: number
	}[]
}

const handleRes = (bundleIdRes: AppStoreRes, nameRes: AppStoreRes): RawApp[] => {
	const ids = typeof bundleIdRes !== 'undefined' ? bundleIdRes.results : [];
	const names = typeof nameRes !== 'undefined' ? nameRes.results : [];
	if (ids.length > 0) {
		const res = ids[0];
		if (names.length > 0) {
			const find = names.find(a => a.bundleId === res.bundleId);
			if (typeof find !== 'undefined') {
				return [ {
					name: find.trackCensoredName,
					bundle_id: find.bundleId,
					icon: find.artworkUrl512,
					author: find.artistName
				} ];
			}
			throw 404;
		} else {
			const find = ids[0];
			return [
				{
					name: find.trackCensoredName,
					bundle_id: find.bundleId,
					icon: find.artworkUrl512,
					author: find.artistName
				}
			];
		}
	}
	if (names.length > 0) {
		return names.map(app => ({
			name: app.trackCensoredName,
			bundle_id: app.bundleId,
			icon: app.artworkUrl512,
			author: app.artistName
		}));
	}
	throw 404;
};

appstore.run(async (q, prov) => {
	const searchKeys = Object.keys(q);
	if (searchKeys.length === 0) {
		throw 406;
	}

	let bundleIdRes: AppStoreRes;
	let nameRes: AppStoreRes;
	if (typeof q.bundle_id !== 'undefined') {
		bundleIdRes = await prov.request('/lookup', 'json', {
			bundleId: q.bundle_id
		});
	}
	if (typeof q.name !== 'undefined') {
		nameRes = await prov.request('/search', 'json', {
			term: q.name,
			media: 'software'
		});
	}
	// console.log(bundleIdRes);
	const idscount = typeof bundleIdRes !== 'undefined' ? bundleIdRes.resultCount : 0;
	const namescount = typeof nameRes !== 'undefined' ? nameRes.resultCount : 0;
	if (idscount === 0 && namescount === 0) {
		throw 404;
	}
	return handleRes(bundleIdRes, nameRes);
});

export default appstore;
