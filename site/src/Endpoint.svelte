<script lang="ts">
import { onMount } from "svelte";
import { api, EndpointInfo, IPAKitRes, request } from "./commons";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'


	export let info: EndpointInfo;
	$: if(info) {
		init()
	}
	let queries: Record<string, string>;
	let url: string
	$: if (queries) {
		updateURL();
	}
	//let url: string;
	let mounted = false;

	let results: string;
	
	async function updateURL() {
		let uri = new URL(api);
		uri.pathname = info.path;
		for(let k of Object.keys(queries)) {
			if(queries[k] !== "") {
				uri.searchParams.append(k, queries[k])
			}
			
		}
		url = uri.toString();
		console.log(info, url);
		await loadRes();
	}

	
	async function init() {
		queries = info.default.query;
		await updateURL();
		mounted = true;
	}

	async function loadRes() {
		let query = {};
		for(let k of Object.keys(queries)) {
			if(queries[k] !== "") {
				query[k] = queries[k]
			}
		}
		let res = await request(info.path, "GET", query) as IPAKitRes<any>
		console.log(res.resultCount, queries)
		results = hljs.highlight("JSON", JSON.stringify(res, null, 4)).value;
		
		
	}

</script>

{#if mounted}
<main>
	<div class="endpoint">{url}</div>
	<div class="queries">
		{#each Object.keys(queries) as k}
			<div class="query input-field">
				<input type="text" placeholder={k} bind:value={queries[k]}  />
			</div>
		{/each}
	</div>
	<pre class="results"><code class="hljs language-typescript">{@html results}</code></pre>
</main>
{/if}

<style>
	main {
		margin-top: 1rem;
		padding:2rem;
		border-radius: 1rem;
		background: #fff;
		border: 1px solid rgba(100, 100, 100, 0.1)
	}

	.endpoint {
		background: #f5f5f5;
		border: 1px solid rgba(100, 100, 100, 0.1);
		padding: 0.5rem;
		border-radius: 0.5rem;
		font-size: 1rem;
		color: #555;
		cursor:not-allowed;
		-moz-user-select: none;
		-webkit-user-select: none;
	}

	.queries {
		margin-top: 1rem;
	}

	.queries > .query:not(:last-child) {
		margin-bottom: 1rem;
	}
	
	.results {
		padding: 1rem;
		background: #282c34;
		border: 1px solid rgba(100, 100, 100, 0.1);
		margin-top: 1rem;
		border-radius: 0.5rem;
		word-wrap: break-word;
		overflow-x: hidden;
	}

	.input-field input[type='text'] {
		   background: #fff;
		   border: 0;
		   padding: 0.6rem;
		   font-size: 0.8rem;
		   border-radius: 7px;
		   width: 100%;
	   		height: 100%;
		   color: #000;
		   -moz-appearance: none;
		   -webkit-appearance: none;
		   resize: none;
		   border: 1px solid rgba(100, 100, 100, 0.1);
	   }
   
	 .input-field input[type='text']:focus {
	   outline: none;
	 }  
	   
	   
	   .input-field {
		   display: flex;
		   align-items: center;
	   justify-content: space-between;
	   }
   
	 .input-field:not(:last-child) {
		   margin-bottom: 1rem;
	   }

	   @media (prefers-color-scheme: dark) {

		.endpoint {
			background: #222;
			color: #888;
		}
		   .input-field input[type='text'] {
			   background: #222;
			   color: #ccc;
		 box-shadow: unset;
		   }
	  
		   main {
			   background: #171717;

		   }
		  
	 }

	 @media only screen and (max-width: 820px) {
		main {
			padding:1rem;
		}

		.endpoint {
			font-size: 0.8rem;
		}

		.results {
			font-size: 0.5rem;
		}
	}
 
</style>
