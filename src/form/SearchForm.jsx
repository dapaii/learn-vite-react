export default function SearchForm(){
 return(
   <form>
      <input type="text" />
      <button onClick={(e) => {
        // event object e.target jadi datanya tidak akan di submit / di dalam form tidak akan hilang
        e.preventDefault();
        alert("you search")
      }}>Search</button>
   </form>
 )
}