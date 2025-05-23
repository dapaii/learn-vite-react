import Todo from "./Todo.jsx";

export default function TodoList() {
  return (
    <ul>
      {/* masukan contional dengan props yang tersedia di todolist */}
      {/* isDeleted akan menghapus / menghilangkan text */}
      <Todo text="Learn React" isCompleted={false} isDeleted={true} />
      <Todo text="Learn JavaScript" isCompleted={true} />
      <Todo text="Learn CSS" isCompleted={false} />
      <Todo text="Learn HTML" isCompleted={true} />
    </ul>
  );
}
