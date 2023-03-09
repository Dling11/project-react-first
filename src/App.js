import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import About from "./pages/About"
import SharedLayout from "./pages/SharedLayout"
import Footer from "./pages/Footer"
function App() {
  return (
    <section className="main">
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
    <Footer />
    </section>
  );
}

export default App;
