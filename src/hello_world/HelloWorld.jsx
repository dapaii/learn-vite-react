// jika ingin menggunakan style di jsx menggunakan css tinggal import dan panggil className
import './HelloWorld.css';
export default function HelloWorld(){
        // misal props ini sudah ada seperti ini
        const props = {
            props: "Spread syntax to learn react"
        }
    return(    
        // di jsx ketika membuat elemen html harus di bungkus dengan satu elemen
        // jika tidak di bungkus maka akan error
        <div>
            {/* kita mengirim props text-"Hello world" karena sudah ada props ini maka "tidak ada props" tidak dipakai */}
            <HeaderHelloWorld text="Hello World"/>
            {/* menggunakan props spread */}
            <ParagraphHelloWorld {...props}/>
        </div>
    )
}

// multiple component START
// pada parameter kita akan menambahkan props yang dikirimkan ke component, tidak wajib namanya props. Tidak wajib juga diisi

// kita tambahkan destructuring untuk mempermudah pengambilan props pada parameter => (props) => ({text = "Hello World"}) sifatnya sementara saja jika tidak ada props yang dikirimkan maka akan menggunakan default value "tidak ada props"

function HeaderHelloWorld({text = "tidak ada props"}){
    // JsOnJSX START
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
            {/* menambahkan style title pada css kedalam tag h1 */}
            <h1 className='title'>{text.toUpperCase()}</h1>
        </>
    // JsOnJSX END
    )
}

function ParagraphHelloWorld({text = "tidak ada props"}){
    // perbedaan implementasi pada style untuk object yang dipanggil
    const style = {
        color: "blue",
        backgroundColor: "yellow"
    }
    return(
        <>
        {/* menambahkan style content css pada tag p */}
            <p className='content' style={style}>{text.toLowerCase()}</p>
        </>
    )
}
// multiple component END

// component hello world bisa dibuat seperti ini juga
// function HelloWorld(){

// }

// export default HelloWorld;