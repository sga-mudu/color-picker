const button = document.querySelector("button");
const colorInput = document.getElementById('colorInput'); 



const changeBackground = () => {
    const color = colorInput.value.trim();

    if(!color) {
        alert('Please enter a color!');
        return;
    }

    const testElement = document.createElement('div');
    testElement.style.color = color;

    if(testElement.style.color){
        document.body.style.background = color; 
    } else {
        alert('Invalid color! Please enter a valid color name or hex code.')
    }


};

button.addEventListener("click", changeBackground);




