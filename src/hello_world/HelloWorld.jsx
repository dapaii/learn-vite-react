export default function HelloWorld(){
    return(
        // di jsx ketika membuat elemen html harus di bungkus dengan satu elemen
        // jika tidak di bungkus maka akan error
        <div>
            <h1>HelloWorld</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil, ipsa culpa eius pariatur eveniet! Quidem excepturi doloribus alias aspernatur?</p>
        </div>
    )
}

// component hello world bisa dibuat seperti ini juga
// function HelloWorld(){

// }

// export default HelloWorld;