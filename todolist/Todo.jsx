export default function Todo({ text, isCompleted, isDeleted = false }) {
  // jika isDeleted true maka tidak akan di render
  // conditional rendering
  if (isDeleted) {
    return null;
  }else{
    // update menggunakan LogicalAnd Operator
    return(
      <li>
        {text} {isCompleted && '✅'}
      </li>
    )
  }
}