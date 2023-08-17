const triangleButton = document.getElementById('triangle-button');
const rectangleButton = document.getElementById('rectangle-button');
const parallelogramButton = document.getElementById('parallelogram-button');
const rhombusButton = document.getElementById('rhombus-button');
const pentagonButton = document.getElementById('pentagon-button');
const ellipseButton = document.getElementById('ellipse-button');

triangleButton.addEventListener('click', function(){

    const base = getInputValueById('triangle-base');
    const height = getInputValueById('triangle-height');
    const area = 0.5 * base * height;
    getElementInnerTextById('triangle-area',area);

    addtoCalculationEntry('Triangle:',area);
})

rectangleButton.addEventListener('click', function(){

    const width = getInputValueById('rectangle-width');
    const length = getInputValueById('rectangle-length');
    const area = width * length;
    getElementInnerTextById('rectangle-area',area);

    addtoCalculationEntry('Rectangle:',area);
})

parallelogramButton.addEventListener('click', function(){

    const base = getInputValueById('parallelogram-base');
    const height = getInputValueById('parallelogram-height');
    const area = base * height;
    getElementInnerTextById('parallelogram-area',area);

    addtoCalculationEntry('Parallelogram:',area);

})

rhombusButton.addEventListener('click', function(){

    const base = getInputValueById('rhombus-base');
    const height = getInputValueById('rhombus-height');
    const area = 0.5 * base * height;
    getElementInnerTextById('rhombus-area',area);

    addtoCalculationEntry('Rhombus:',area);

})
pentagonButton.addEventListener('click', function(){

    const pentagonPlace = getInputValueById('pentagon-place');
    const pentagonBase = getInputValueById('pentagon-base');
    const pentagonArea = 0.5 * pentagonPlace * pentagonBase;
    getElementInnerTextById('pentagon-area',pentagonArea);

    addtoCalculationEntry('Pentagon:',area);

})

ellipseButton.addEventListener('click', function(){

    const ellipseaaxix = getInputValueById('ellipse-a-axix');
    const ellipsebaxix = getInputValueById('ellipse-b-axix');
    const ellipseArea = 3.14 * ellipseaaxix * ellipsebaxix;
    const decimalellipse = ellipseArea.toFixed(2);
    getElementInnerTextById('ellipse-area',decimalellipse);

    addtoCalculationEntry('Ellipse:',area);

})



//reusable functionality
function getInputValueById(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}
function getElementInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText  = area;
}

function addtoCalculationEntry(areaType, area){
    
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    const li = document.createElement('li');
    const border = document.createElement('border');
    li.classList.add('my-4');
    li.innerHTML = `${count + 1}  ${areaType} ${area} cm <sup>2</sup> <button class="btn btn-success"> Convert </button>`;
    calculationEntry.appendChild(li);
}