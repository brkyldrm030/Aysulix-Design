import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Card from "./sections/Card";
import Logoticker from "./sections/Logoticker";
import About from "./sections/About";
import Advantages from "./sections/Advantages";
import Quality from "./sections/Quality";
import Footer from "./sections/Footer";

function App() {
  return (
    <>
      <div className="bg-black overflow-x-clip">
        <Navbar />
        <Header />
        <Card />
        <Logoticker />
        <About />
        <Advantages />
        <Quality />
        <Footer />
      </div>
    </>
  );
}

export default App;
