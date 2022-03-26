const todos = [];

function createToDo() {
    const textInput = document.querySelector('input#content[type="text"]');
    const textContent = textInput.value.trim();

    if (todos.includes(textContent)) return alert(
        'Przypomnienie o podanej treści już istnieje.'
    )

    const li = document.createElement('li');
    li.textContent = textContent;
    li.addEventListener('click', (e) => removeToDo(e.target))

    document.querySelector('ul#todo-list').appendChild(li);
    todos.push(textContent);
}

function removeToDo(element) {
    document.querySelector('ul#todo-list').removeChild(element);

    todos.splice(todos.indexOf(element.textContent), 1)
}

function removeAllTodos() {
    if (!todos.length) return alert(
        'Nie posiadasz przypomnień.'
    )
    
    todos.splice(0, todos.length);

    const ul = document.querySelector('ul#todo-list');

    while (ul.lastElementChild)
    ul.removeChild(ul.lastElementChild)
}