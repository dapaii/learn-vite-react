import Row from "./Row";

// This component is used to display a table
export default function Table(){
  return(
    <table border="1">
      <tbody>
        <Row text="satu"/>
        <Row text="dua"/>
        <Row text="tiga"/>
      </tbody>
    </table>
  )
}