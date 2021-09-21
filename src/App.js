import Footer from "./Footer/Footer";
import Carousel from "./Header/Carousel";
import { CarouselData } from "./Header/CarouselData";
import Header from "./Header/Header";
import HeaderSearch from "./Header/HeaderSearch";
import Internships from "./HomeBody/Internships";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderSearch />
      <Carousel slides={CarouselData} />
      <Internships />
      <Footer />
    </div>
  );
}

export default App;
