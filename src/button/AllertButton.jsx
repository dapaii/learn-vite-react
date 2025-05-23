export default function AllertButton({text, message}){
  function handleClick(){
    alert(message);
  }
  
  return(
    <button onClick={handleClick}>{text}</button>
  )
}