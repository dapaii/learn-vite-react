export default function AllertButton({text, message}){
  function handleClick(e){
    // event object e.target
    console.log(e.target);
    alert(message);
  }
  
  return(
    <button onClick={handleClick}>{text}</button>
  )
}