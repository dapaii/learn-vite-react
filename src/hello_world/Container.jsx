// Nested Component children jadi memungkinkan kita untuk memanggil component lain di dalam component, dan penulisannya juga memang harus children pada parameter
// periksa di src/main.jsx kita akan memanggil component Container
export default function Container({ children }) {
  return (
    <div>
      <h2>Muhamad Daffa</h2>
      {/* Nested Component START */}
      {children}
      <footer>
        <p>2024 Ecowhite</p>
      </footer>
    </div>
  );
}
