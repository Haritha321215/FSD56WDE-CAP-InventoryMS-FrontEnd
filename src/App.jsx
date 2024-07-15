
import Body from "./components/Body";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

function App() {
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="row">
        <Header />
      </div>

      {/* Body */}
      <div className="row">
        <Body />
      </div>

      {/* Footer */}
      <div className="row">
        <Footer />
      </div>
    </div>
  );
}

export default App;
