let counter = 0;
// This component is used to display a row in the table

export default function Row({text}){
  counter++;
  return(
    <tr>
      <td>{counter}</td>
      <td>{text}</td>
    </tr>
  )
}