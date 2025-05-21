export default function HelloWorld(){
    return(
        // di jsx ketika membuat elemen html harus di bungkus dengan satu elemen
        // jika tidak di bungkus maka akan error
        <div>
            <HeaderHelloWorld/>
            <ParagraphHelloWorld/>
        </div>
    )
}

// multiple component START
function HeaderHelloWorld() {
    return(
        <>
            <h1>Hello World</h1>
        </>
    )
}

function ParagraphHelloWorld(){
    return(
        <>
            <p>Belajar React pemula</p>
        </>
    )
}
// multiple component END

// component hello world bisa dibuat seperti ini juga
// function HelloWorld(){

// }

// export default HelloWorld;