import Todo from './Todo.jsx';

export default function TodoList(){
    return(
        <ul>
            <Todo text="Learn React" isCompleted={false}/>
            <Todo text="Learn JavaScript" isCompleted={true}/>
            <Todo text="Learn CSS" isCompleted={false}/>
            <Todo text="Learn HTML" isCompleted={true}/>
        </ul>
    )
}