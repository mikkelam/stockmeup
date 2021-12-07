<script lang="ts">
	const themes = [
		{ emoji: '🌝', name: 'light' },
		{ emoji: '🌚', name: 'dark' },
		{ emoji: '🧁', name: 'cupcake' },
		{ emoji: '🐝', name: 'bumblebee' },
		{ emoji: '✳️', name: 'emerald' },
		{ emoji: '🏢', name: 'corporate' },
		{ emoji: '🌃', name: 'synthwave' },
		{ emoji: '👴', name: 'retro' },
		{ emoji: '🤖', name: 'cyberpunk' },
		{ emoji: '🌸', name: 'valentine' },
		{ emoji: '🎃', name: 'halloween' },
		{ emoji: '🌷', name: 'garden' },
		{ emoji: '🌲', name: 'forest' },
		{ emoji: '🐟', name: 'aqua' },
		{ emoji: '👓', name: 'lofi' },
		{ emoji: '🖍', name: 'pastel' },
		{ emoji: '🧚‍♀️', name: 'fantasy' },
		{ emoji: '📝', name: 'wireframe' },
		{ emoji: '🏴', name: 'black' },
		{ emoji: '💎', name: 'luxury' },
		{ emoji: '🧛‍♂️', name: 'dracula' },
		{ emoji: '🖨', name: 'cmyk' }
	];
</script>

<div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
	<div class="flex-none px-2 mx-2">
		<span class="font-bold"> StockMeUp 🛒</span>
	</div>
	<div class="flex-1 px-2 mx-2">
		<div class="items-stretch hidden lg:flex">
			<a href="/" class="btn btn-ghost btn-sm rounded-btn">Home</a>
			<a class="btn btn-ghost btn-sm rounded-btn">Pages</a>
		</div>
	</div>
	<div class="flex-none">
		<div title="Change Theme" class="dropdown dropdown-end">
			<div tabindex="0" class="m-1 normal-case btn-ghost btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current md:mr-2"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
					/></svg
				> <span class="hidden md:inline"> Change Theme </span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1792 1792"
					class="inline-block w-4 h-4 ml-1 fill-current"
					><path
						d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"
					/></svg
				>
			</div>
			<div
				class="mt-16 overflow-y-auto shadow-2xl top-px dropdown-content h-96 w-52 rounded-b-box bg-base-200 text-base-content"
			>
				<ul class="p-4 menu compact">
					<!-- svelte-ignore a11y-missing-attribute -->
					{#each themes as theme}
						<li>
							<a tabindex="0" data-set-theme={theme.name} data-act-class="active"
								>{theme.name}{theme.emoji}</a
							>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-6 h-6 stroke-current"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/>
			</svg>
		</button>
	</div>
</div>
