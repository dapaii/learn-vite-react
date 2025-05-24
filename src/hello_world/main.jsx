import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoList from "../../todolist/TodoList";
import Table from "../../table/Table";
import AllertButton from "../button/AllertButton";
import MyButton from "../button/MyButton";
import Toolbar from "../button/Toolbar";
import SearchForm from "../form/SearchForm";
import SayHelloForm from "../form/sayHelloForm";

// createRoom dibuat untuk memanggil component yang akan dimunculkan
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* component ini bisa digunakan berkali kali jadi reusable */}
    <Container>
      <HelloWorld />
      <TodoList />
      <Table />
      <AllertButton text="click me" message="you click me" />
      <MyButton text="Smash me" onSmash={() => alert("you smash me")}/>
      <MyButton text="kick me" onSmash={() => alert("you kick me")}/>

        <Toolbar onClick={(e) => {
          // kenapa kita menggunakan e.stopPropagation() karena kita tidak ingin event ini diteruskan ke parent element(jadi tidak 2x memunculkan alert)
          e.stopPropagation();
          alert("Toolbar clicked");
        }}/>

        <SearchForm/>

        <SayHelloForm/>
    </Container>
  </StrictMode>
);
