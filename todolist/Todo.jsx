export default function Todo({text, isCompleted}){
    // conditional rendering
    if(isCompleted){
        return (
            <li>
                {/* jika complate maka text akan dicoret */}
                <del>{text}</del>
            </li>
        )
    }else{
        return(
            <li>
                {text}
            </li>
        )
    }
}