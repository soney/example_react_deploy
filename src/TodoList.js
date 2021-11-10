import TodoItem from './TodoItem';
import {useState, useRef} from 'react';

function TodoList () {
    const inputEl = useRef(null);
    const [todoItems, setTodoItems] = useState(['item 1']);

    function removeTask(idx) {
        const newTodo = [...todoItems.slice(0, idx), ...todoItems.slice(idx+1)]
        setTodoItems(newTodo);
    }

    const elements = [];
    for(let i = 0; i<todoItems.length; i++) {
        const item = todoItems[i];
        const elem = <TodoItem onDone={() => removeTask(i)} key={i} description={item} />;
        elements.push(elem)
    }

    function addTodoItem() {
        const newTodoList = todoItems.concat(inputEl.current.value);
        inputEl.current.value = '';
        setTodoItems(newTodoList);
        inputEl.current.focus();
    }
    function onKeydown(event) {
        if(event.key === 'Enter') {
            addTodoItem();
        }
    }
    // or:
    // const elements = todolist.map((item) => <TodoItem description={item} /> );
    return <div> <ul>{elements}</ul>
    <input onKeyDown={onKeydown} ref={inputEl} type="text"></input>
    <button onClick={addTodoItem}>Add</button>
    </div>;
}

export default TodoList;