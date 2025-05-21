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
        {/* terlihat seperti double kurawal tapi sebenarnya tidak, kurawal tetap 1 tetapi yang satunya lagi itu object untuk style di jsx menggunakan css */}
            <h1 style={
                {
                    color: "red",
                    backgroundColor: "aqua"
                }
            }>{text}</h1>
            {/* atau bisa tambahkan uppercase */}
            <h1>{text.toUpperCase()}</h1>
        </>
    // JsOnJSX END
    )
}

function ParagraphHelloWorld(){
    const text = "Belajar react pemula"
    // perbedaan implementasi pada style untuk object yang dipanggil
    const style = {
        color: "blue",
        backgroundColor: "yellow"
    }

    return(
        <>
            <p style={style}>{text.toLowerCase()}</p>
        </>
    )
}
// multiple component END

// component hello world bisa dibuat seperti ini juga
// function HelloWorld(){

// }

// export default HelloWorld;