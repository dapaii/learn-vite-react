import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";
import TodoList from "../../todolist/TodoList";

// createRoom dibuat untuk memanggil component yang akan dimunculkan
createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* component ini bisa digunakan berkali kali jadi reusable */}
        <Container>
            <HelloWorld />
            <TodoList />
        </Container>
    </StrictMode>
)