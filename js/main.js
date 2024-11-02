var selectedColor = null;
var selectedElement = null;

function init() {
    console.log('Initializing document...');
    createColorBoxes();
    if (color.length > 0) selectColor(color[0]);
    elements.forEach(e => {
        document.getElementById(e).addEventListener('click', (event) => {
            event.stopPropagation(); // Evita que el clic en el elemento deseleccione todo
            selectElement(e);
        });
    });

    // Evento para deseleccionar al hacer clic en el fondo
    document.getElementById("content").addEventListener("click", () => {
        deselectElement();
    });
}


function createColorBoxes(){
    color.forEach(c => {
        var box = document.createElement('div');
        box.className = 'color-box';
        box.id = 'color-box-' + c.name;
        box.style.backgroundColor = c.hex;

        box.addEventListener('click', () => {
            selectColor(c);
        });
        document.getElementById('palette').appendChild(box);
    });
}

function selectColor(color){
    selectedColor = color;
    document.getElementById('selected-color').style.backgroundColor = selectedColor.hex;
    document.getElementById('label-selected-color-name').textContent = selectedColor.name;
    document.getElementById('label-selected-color-rgb').textContent = selectedColor.rgb;
    document.getElementById('label-selected-color-hex').textContent = selectedColor.hex;

    if(selectedElement != null){
        document.getElementById(selectedElement).style.fill = selectedColor.hex;
    }

    console.log(selectedColor);
}

function selectElement(element){
    if(selectedElement != null){
        document.getElementById(selectedElement).setAttribute('class','blank-element');
    }

    selectedElement = element;
    document.getElementById('label-selected-element').textContent = element;
    document.getElementById(element).setAttribute('class','selected-element');
    console.log(selectedElement);
}

function deselectElement(){
    if(selectedElement != null){
        document.getElementById(selectedElement).classList.remove('selected-element');
        document.getElementById(selectedElement).classList.add('blank-element');
        selectedElement = null;
        document.getElementById('label-selected-element').textContent = ''; // Opcional: limpiar el label
    }
}
