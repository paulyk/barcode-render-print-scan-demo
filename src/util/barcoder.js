import bwipjs from 'bwip-js'

const options = {
  bcid: "code128", // Barcode type
  text: "", // Text to encode
  scale: 2, // 2x scaling factor
  height: 20, // Bar height, in millimeters
  includetext: true, // Show human-readable text
  textxalign: "center", // Always good to set this
  padding: 0
};


export function genBarcode(canvas, text, symbology) {
  try {
    if (symbology) {
      options.bcid = symbology
    }
    options.text = text.toString()
    bwipjs.toCanvas(canvas, options);
    canvas.toDataURL("image/png");

  } catch (e) {
    console.log(e);
  }
}