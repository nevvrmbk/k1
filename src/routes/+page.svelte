<script lang="ts">
	import Container from '$lib/Container.svelte';
	import Form from '$lib/Form.svelte';

	let uuid: string = crypto.randomUUID();
	export let data: any;
</script>

<Container>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
	{#if data.value}
	<p>{ data.value }</p>
	{/if}
</Container>

<Container>
	<h2>UUID</h2>
	<p>{uuid}</p>
</Container>

<Container>
	<h2>IP</h2>
	<p>{data.ip}</p>
</Container>

<Container>
	<Form />
</Container>
