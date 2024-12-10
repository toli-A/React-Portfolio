import { Outlet } from "react-router"
import Header from "./components/header"
import Footer from "./components/footer"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App
