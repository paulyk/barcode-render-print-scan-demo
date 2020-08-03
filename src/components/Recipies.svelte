<script>
  import Barcode from './Barcode.svelte'
  import { data as items } from '../util/data'


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

