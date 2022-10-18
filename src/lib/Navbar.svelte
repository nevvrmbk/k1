<script>
	import Container from './Container.svelte';
</script>

<Container>
	<nav class="nav">
		<a href="/">Home</a>
		<a href="/">About</a>
		<a href="/">Contact</a>
	</nav>
</Container>

<style>
	.nav {
		justify-content: space-around;
        text-decoration: none;
	}
</style>
