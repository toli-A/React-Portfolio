import { Outlet } from "react-router"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import './styles/app.css'

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
