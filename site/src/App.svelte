<script lang="ts">
import type { EndpointInfo } from "./commons";

import Endpoint from "./Endpoint.svelte";


  let endpoints: EndpointInfo[] = [
	  {
		  path: "/search",
		  queries: ["name", "bundle_id"],
		  default: {
			  query: {
				  name: "Delta",
				  bundle_id: 'com.rileytestut.Delta'
			  }
		  }
	  }
  ]
</script>

<main>
  <section class="header">
	<div class="container">
		<div class="title">IPAKit</div>
		<div class="subtitle">A FOSS API for finding iOS Apps.</div>
		<div class="buttons">
			<a href="https://github.com/itss0n1c/IPAKit" rel="noopener" target="_blank" class="button bg-github color-white"><i class="fab fa-github"></i><span>View on Github</span></a>
		</div>
	</div>
  </section>
  <section class="api">
	  <div class="container">
		  <div class="title">API</div>
		  <div class="endpoints">
			  {#each endpoints as info}
				<Endpoint {info}></Endpoint>
			  {/each}
		  </div>
	  </div>
  </section>
  <section class="footer">
	<p>Made with <i class="fas fa-heart color-red"></i> and <i class="fas fa-code color-gray"></i> by <a href="https://s0n1c.ca" class="link color-blue" rel="noopener" target="_blank">S0n1c</a></p>
  </section>

	
</main>

<style global lang="scss">
	@import './styles/global.scss';
	@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
   
	 * {
	   font-family: Inter;
	 }
	html, body, main {
	   margin:0;
	   background: #fff;
	   color: #222;
	 }
	
   
	 .apps:not(:last-child) {
	   margin-bottom: 1rem;
	 }
   
	 .navigate i {
	   margin-right: 0.2rem;
	 }
	 
	 .navigate {
	   margin-bottom: 1rem;
	   color: $blue;
	 }

	 section {
		 padding: 3rem;
	 }
   
	section.header {
		background: #fafafa;
		display:flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid rgba(100, 100, 100, 0.1);
	}

	section.header .container {
		text-align:center;
	}

	section.header .title {
		font-size: 2rem;
		font-weight: 700;
	}

	section.header .subtitle {
		font-size: 1rem;
		font-weight: 500;
		opacity: 0.7;
	}

	section.header .buttons {
		margin-top: 1rem;
		display:flex;
		justify-content: center;
		align-items: center;
	}

	section.header .buttons .button > span {
		margin-left: 0.5rem;
	}

	
   
	section.api .title {
		font-size: 1.5rem;
		font-weight: 700;
	}

	section.footer {
		display:flex;
		justify-content: center;
		align-items: center;
		font-size: 1.5rem;
		opacity: 0.7;
	}
	
   
	 form {
	   margin-top: 1rem;
	 }
   
	 h1, h2, h3, h4, h5, h6 {
	   font-weight: 800 !important;
	   margin: 0 ;
	   padding:0;
	 }
   
	 .prepare {
	   margin-bottom: 2rem;
	 }
   
   
   
	 .recents > .title {
	   margin-top: 0.4rem;
	   margin-bottom: 1rem;
	 }
   
	
   
	 @media only screen and (max-width: 820px) {
		section:not(.header) {
			padding: 1rem;
		}
		
	}
   
	 @media (prefers-color-scheme: dark) {
		   .input-field input[type='url'] {
			   background: #333;
			   color: white;
		 box-shadow: unset;
		   }
	   html, body, main {
		 background: #111;
		 color: white;
	   }
   
	   .cell .version {
		 opacity: 0.4;
	   }

	   section.header {
		   background: #171717;
		   border-bottom: none;
	   }
	 }
   
   </style>
   