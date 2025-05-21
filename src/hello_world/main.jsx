import { createRoot } from "react-dom/client";
import HelloWorld from "./HelloWorld";
import { StrictMode } from "react";
import Container from "./Container";

// createRoom dibuat untuk memanggil component yang akan dimunculkan
createRoot(document.getElementById("root")).render(
    <StrictMode>
        {/* component ini bisa digunakan berkali kali jadi reusable */}
        <Container>
            <HelloWorld />
        </Container>
    </StrictMode>
)