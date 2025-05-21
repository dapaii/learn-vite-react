// Nested Component children jadi memungkinkan kita untuk memanggil component lain di dalam component, dan penulisannya juga memang harus
export default function Container({children}){
    return(
        <div>
            <h2>Muhamad Daffa</h2>
            {children}
            <footer>
                <p>2024 Ecowhite</p>
            </footer>
        </div>
    )
}