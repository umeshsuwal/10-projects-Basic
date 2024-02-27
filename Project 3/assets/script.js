const redSlider = document.getElementById("redSlider");
const greenSlider = document.getElementById("greenSlider");
const blueSlider = document.getElementById("blueSlider");

const redValueSpan = document.getElementById("redValue");
const greenValueSpan = document.getElementById("greenValue");
const blueValueSpan = document.getElementById("blueValue");

const colorBox = document.getElementById("color-box");
const copyBtn = document.getElementById("copyBtn");
const inputTypeRGBvalue = document.getElementById("inputType");

redSlider.addEventListener('input',updateColor);
greenSlider.addEventListener('input',updateColor);
blueSlider.addEventListener('input',updateColor);
copyBtn.addEventListener('click',copyRGBvalue);

function updateColor(){

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    console.log(redValue,greenValue,blueValue);

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`
    console.log(rgbColor);

    colorBox.style.backgroundColor = rgbColor;

    redValueSpan.textContent = redValue;
    greenValueSpan.textContent = greenValue;
    blueValueSpan.textContent = blueValue;

    inputTypeRGBvalue.textContent = rgbColor;

}

updateColor();

function copyRGBvalue(){

    const redValue = redSlider.value;
    const greenValue = greenSlider.value;
    const blueValue = blueSlider.value;

    const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`

    navigator.clipboard.writeText(rgbColor)
    .then(function() {
      alert("Text copied to clipboard: " + rgbColor);
    })
    .catch(function(error) {
      alert("Failed to copy text: " + error);
    });

}
