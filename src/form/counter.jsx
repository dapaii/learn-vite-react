import { useState } from "react";

export default function Counter(){
  const [counter, setCounter] = useState(0)
  // useState adalah hook yang digunakan untuk membuat state pada functional component
  // useState mengembalikan array yang berisi 2 elemen, elemen pertama adalah nilai state, elemen kedua adalah fungsi untuk mengubah nilai state
  // useState(0) artinya nilai awal dari state counter adalah 0
  return(
    <div>
      <button onClick={() => {setCounter(counter + 1); console.log(counter)}}>Increment
      </button>
      <h1>Counter : {counter}</h1>
    </div>
  )
}