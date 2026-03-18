const txt = document.querySelector('input');
const btn = document.querySelector('button');
const div = document.querySelector('div');
const body = document.body;

let counter = 0;

btn.addEventListener('click', function(){
    let e = txt.value;

    counter += 1;

    const li = document.createElement('li');
    li.textContent = `${counter}` + "." + `${e}` + " ";
    const error_txt = document.createTextNode("Escreva algo!");
    const button = document.createElement('button');
    button.textContent = 'Delete';

    if (e === "") {
        console.log("Nada aqui");
    }
    else {
        li.appendChild(button);
        div.appendChild(li);
        body.appendChild(div);
    }
    txt.value = "";

    button.onclick = function(){
        counter = 0;
        counter += 1;
        li.remove();
    }
})