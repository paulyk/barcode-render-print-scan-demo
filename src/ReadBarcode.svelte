<script>
  import { debounce } from './util'
  let items = [{ id: '12345678', value: 'shugah'}, { id: 'MALI5678', value: 'Dudah' }]
  let itemId = null;

  let entry = null

  function lookupEntry() {
    entry = items.find(x => x.id === itemId.toString())
    itemId = null
  }

</script>

<style>
  .page {
    border: 1px solid #777;
    padding: 2rem;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
  }

  .entry {
    padding: 1rem;
    font-size: 2rem;
  }
</style>

<div class="page">
  <h2>Scan</h2>
  <input type="text" on:keypress={debounce(lookupEntry, 300)} bind:value={itemId}>

  {#if entry} 

    <div class="entry">{entry.value}</div>
  {/if}
</div>