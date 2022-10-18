<script lang="ts">
    let item: string = '';
    let items: string[] = [];
</script>

<form on:submit|trusted|preventDefault={() => {
    if (item && item != '' || item != ' ') {
        items = [item, ...items];
        item = '';
    }
}}>
    <input type="text" name="item" id="item" bind:value={ item } />
    <button type="submit">Add</button>
</form>

<output>
    {#each items as item}
    <p>{ item }</p>
    {:else}
    <p>No items found!</p>
    {/each}
</output>
