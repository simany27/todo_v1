const root = document.getElementById('root');
const h1 = document.createElement('h1');
h1.append(document.createTextNode('To Do:'));
const p = document.createTextNode('Add New Item:');
const input = document.createElement('input');
input.setAttribute('type','text');
const button = document.createElement('button');
button.append(document.createTextNode('Add New Item'));
root.append(h1, p, input, button);

button.addEventListener('click', addItem);

function addItem(event){
    const ol = document.createElement('ol');
    ol.setAttribute('id','ol');
    root.append(ol);
    const text = input.value;
    const li = document.createElement('li');
    const content = document.createTextNode(text);
    const buttonX = document.createElement('button');
    buttonX.append('X');
    li.append(content, buttonX);
    document.getElementById('ol').append(li);
    input.value = '';
    buttonX.addEventListener('click', del);
}

function del(event){
    event.target.parentElement.remove();
}