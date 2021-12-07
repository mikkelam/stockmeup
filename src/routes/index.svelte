<script context="module">
	import prisma from '$lib/prisma';
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error}`
			}
		};
	}
</script>

<h1>Stockmeup</h1>
