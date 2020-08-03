<script>
  import {  data } from '../util/data'
  import { debounce } from '../util/util'

  let itemId = null
  let entry = undefined

  function getItem() {
    console.log('get time, ', itemId)
    entry = data.find(x => x.id === parseInt(itemId))
    console.log('entry', entry)
    itemId = null
  }
</script>

<input type="text" bind:value={itemId} on:keypress={debounce(getItem, 200)}>

{#if entry} 
  <div class="entry">{entry.name}</div>
{/if}

<style>
  .entry {
    font-size: 2.5rem;
    color: rgb(15, 15, 113);
  }
</style>