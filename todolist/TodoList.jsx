import Todo from "./Todo.jsx";

export default function TodoList() {
  const data = [
    {
      // add komponent id for component key
      id: 1,
      text: "Learn React",
      isCOmpleted: false
    },
      {
        id: 2,
        text: "Learn JavasScript",
        isCompleted: true
      },
      {
        id: 3,
        text: "Learn CSS",
        isCompleted: false,
      },
      {
        id: 4,
        text: "Learn HTML",
        isCompleted: true
      },
      {
        id: 5,
        text: "Learn NodeJS",
        isCompleted: true
      }
  ]

  const todos = data.map((todo) => <Todo key={todo.id} {...todo}/>)
    return (
      <ul>
        {/* collection components */}
        {/* update component for component key */}
        {data.map((todo) => (
          <Todo key={todo.id} {...todo}/>
        ))}
      </ul>
    );
}