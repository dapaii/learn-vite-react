export default function AllertButton({text}){
  function handleClick(){
    alert("button clicked")
  }

  return(
    <button onClick={handleClick}>{text}</button>
  )
}