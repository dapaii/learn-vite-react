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
    // JsOnJSX START
    const text = "Hello World"
    return(
        <>
            {/* atau bisa tambahkan uppercase */}
            <h1>{text.toUpperCase()}</h1>
        </>
    // JsOnJSX END
    )
}

function ParagraphHelloWorld(){
    const text = "Belajar react pemula"
    return(
        <>
            <p>{text.toLowerCase()}</p>
        </>
    )
}
// multiple component END

// component hello world bisa dibuat seperti ini juga
// function HelloWorld(){

// }

// export default HelloWorld;