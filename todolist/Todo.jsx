export default function Todo({ text, isCompleted, isDeleted = false }) {
  // jika isDeleted true maka tidak akan di render
  // conditional rendering
  if (isDeleted) {
    return null;
  } else if (isCompleted) {
    return (
      <li>
        {/* jika complate maka text akan dicoret */}
        <del>{text}</del>
      </li>
    );
  } else {
    return <li>{text}</li>;
  }
}
