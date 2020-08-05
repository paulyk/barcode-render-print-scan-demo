<script>
  import Barcode from './Barcode.svelte'
  import { getRecpes } from '../util/receipeService'
import { onMount } from 'svelte';


  let items = []

  onMount(async () => {
    items = await getRecpes()
  })

</script>
 
 <style>
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template: 1fr 1fr;
    grid-gap: 1rem;
    grid-row: auto;
  }
 </style>

<div class="list">
  {#each items.reverse() as item }
    <Barcode text={item.id} />
  {/each}
</div>

