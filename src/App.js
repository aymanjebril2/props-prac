import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Book from "./componets/Book";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      {Data.map((cur) => {
        return <Book {...cur} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
