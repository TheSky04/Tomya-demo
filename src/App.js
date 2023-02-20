import "./App.css";
import Header from "./components/Header";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
import Advanced from "./components/Advanced";
import Footer from "./components/Footer";
import Fixed from "./components/Fixed";

function App() {
  return (
    <>
      <Header />
      <main>
        <LeftSection />
        <RightSection />
      </main>
      <Advanced />
      <Footer />
      <Fixed />
    </>
  );
}

export default App;
