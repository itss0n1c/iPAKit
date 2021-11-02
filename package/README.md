# IPAKit

## Installation

```bash
% yarn add ipakit
```
<br/>

## Usage

```ts
import IPAKit from 'ipakit';

let kit = new IPAKit(); // See options below

async function search() {
	let res = response kit.search({
		name: "Apple Maps",
		bundle_id: "com.apple.Maps"
	})

	return [
		res.resultCount,
		res.results[0].author
	];

}
```

The result from running `search()` would be:
```json
[
	1,
	"Apple"
]
```
<br/>

## IPAKit Options
| option | type | default value |
| -------- | ----- | ---------- |
| provider | Provider[] | [] |
<br/>

## Provider
```ts
import {Provider} from 'ipakit';

let myProvider = new Provider({
	name: "myProvider",
	url: "https://api.example.com/ipas"
})

myProvider.run((query, provider) => {

})

export myProvider;
```
To use the provider, import and add `myProvider` to `IPAKit` constructor option like so:
```ts
import IPAKit from 'ipakit';
import {myProvider} from './myProvider';

let kit = new IPAKit({
	provider: [myProvider]
});
```
