<script lang="ts">
	import Form from "$lib/Form.svelte";

	let uuid: string = crypto.randomUUID();
	export let data: any;
</script>

<section>
	<h1>Welcome to SvelteKit</h1>
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
</section>

<section>
	<h2>UUID</h2>
	<p>{uuid}</p>
</section>

<section>
	<h2>IP</h2>
	<p>{ data.ip }</p>
</section>

<Form />
