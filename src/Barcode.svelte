<script>
  import { onMount } from 'svelte'
  import { genBarcode } from "./barcoder";

  let canvas;
  export let text;

  onMount(() => {
    genBarcode(canvas, text, "code128");
  })
</script>

<style>
  .wrap {
    padding: 1rem;
    border: 1px solid #999;
    border-radius: 8px;
  }

  canvas {
    height: 10mm;
    background: #eee;
  }
</style>

<div class="wrap">
  <span>{text}</span>
  <canvas bind:this={canvas} />
</div>
