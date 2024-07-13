import { Outlet } from "react-router-dom";
import Container from "./components/ui/Container";
import Navbar from "./components/ui/Navbar/Navbar";
import Footer from "./components/ui/Footer/Footer";

const App = () => {
  return (
    <div>
      <Container>
      {/* navbar div  */}
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
    </Container>
    <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
