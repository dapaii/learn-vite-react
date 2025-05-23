import Todo from "./Todo.jsx";

export default function TodoList() {
  const data = [
    {
      text: "Learn React",
      isCOmpleted: false
    },
      {
        text: "Learn JavasScript",
        isCompleted: true
      },
      {
        text: "Learn CSS",
        isCompleted: false,
      },
      {
        text: "Learn HTML",
        isCompleted: true
      }
  ]

  const todos = data.map((todo) => <Todo {...todo}/>)
    
    return (
      <ul>
        {/* collection components */}
        {todos}
      </ul>
    );
}