import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Contenu from "./components/Contenu/contenu";
function App() {
    return (
        <div className="App">
            <Navbar />
            <Contenu />
            <Footer />
        </div>
    );
}

export default App;
