<script context="module">
	import Content from '$lib/Content.svelte';
	import prisma from '$lib/prisma';
	export async function load({ error, status, fetch }) {
		const resp = await fetch('/api/store.json');
		const json = await resp.json();
		return {
			props: {
				stores: json
			}
		};
	}
</script>

<script lang="ts">
	export let stores;
	console.log(stores);
	
</script>

<Content>
	<h1>Stockmeup</h1>
</Content>
