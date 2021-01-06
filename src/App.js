import Header from "./componets/Header";
import Footer from "./componets/Footer";
import Book from "./componets/Book";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Book
        title="The Power Of Now "
        img="https://images-na.ssl-images-amazon.com/images/I/71mEBbXOMxL.jpg"
        descrtpion="Lorem ipsum dolor sit amet, pro nostrud lucilius sensibus eu, zril laudem at quo. Elit virtute iracundia no has, ad vis suavitate gloriatur vituperata. Alia voluptaria ei sit, vidit abhorreant signiferumque ex vix. Ex vim probatus recteque. Regione complectitur no est, ridens nostro at vel.

Et usu mazim quando libris. Vim mazim fabellas ne, feugiat officiis mediocrem usu te. Cu alii quas vis, ius cu rationibus mnesarchum. Amet laboramus percipitur eum te, vocent offendit sapientem his id. Ut soleat omnesque vim, at mei electram adolescens adipiscing."
      />
      <Book
        title="The Alchemist "
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Av9bO-lYVPCwh9Bz4rT7YB6rH-Qni_9n1-mulvQlmiGAWmo4&usqp=CAc"
        descrtpion="Lorem ipsum dolor sit amet, pro nostrud lucilius sensibus eu, zril laudem at quo. Elit virtute iracundia no has, ad vis suavitate gloriatur vituperata. Alia voluptaria ei sit, vidit abhorreant signiferumque ex vix. Ex vim probatus recteque. Regione complectitur no est, ridens nostro at vel.

Et usu mazim quando libris. Vim mazim fabellas ne, feugiat officiis mediocrem usu te. Cu alii quas vis, ius cu rationibus mnesarchum. Amet laboramus percipitur eum te, vocent offendit sapientem his id. Ut soleat omnesque vim, at mei electram adolescens adipiscing."
      />
      <Footer />
    </div>
  );
}

export default App;
