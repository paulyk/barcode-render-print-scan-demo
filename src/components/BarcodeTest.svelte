<script>
  import bwipjs from "bwip-js";

  let code = "";
  let canvas_code_39;
  let canvas_code_128;
  let dimensions = {
    height: 10,
    scale: 1
  };

  let code_options = ["code39", "code128"];

  $: options = {
    bcid: "code39", // Barcode type
    text: code, // Text to encode
    scale: dimensions.scale, // 2x scaling factor
    height: dimensions.height, // Bar height, in millimeters
    includetext: true, // Show human-readable text
    textxalign: "center", // Always good to set this
    padding: 3
  };

  function genBarcode() {
    try {
      options.bcid = "code39";
      bwipjs.toCanvas(canvas_code_39, options);
      canvas_code_39.toDataURL("image/png");

      options.bcid = "code128";
      bwipjs.toCanvas(canvas_code_128, options);
      canvas_code_128.toDataURL("image/png");
    } catch (e) {
      console.log(e);
    }
  }

  function onkeypress(e) {
    console.log(e.key, e.keyCode);
  }
</script>

<style>
  canvas {
    height: 10mm;
  }

  input {
    width: 300px;
  }

  .test {
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #777;
    width: 400px;
  }

  .wrap {
    display: flex;
    flex-flow: column;
    align-items: center;;
  }
</style>

<div>Barcode</div>

<input bind:value={code} placeholder="code" on:keypress={onkeypress} />
<button on:click={genBarcode} disabled={code.length == 0}>Generate</button>

<div class="wrap">
  <div class="test">
    <div>Code 39</div>
    <canvas bind:this={canvas_code_39} />
  </div>

  <div class="test">
    <div>Code 128</div>
    <canvas bind:this={canvas_code_128} />
  </div>
</div>
