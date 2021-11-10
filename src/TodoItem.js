function TodoItem(props) {
    return <li>{props.description} <button onClick={props.onDone}>Done</button></li>
}

export default TodoItem;