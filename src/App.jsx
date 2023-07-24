import { BrowserRouter, Route, Routes } from "react-router-dom"
import ProductGallery from "./pages/ProductGallery"
import Home from "./pages/Home"
import Navbar from "./components/NavBar"
import Cart from "./pages/cart"
import { Provider } from "react-redux"
import { store } from "./store/store"
import "./App.css"


function App() {

  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <div className="navbar">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product" element={
            <>
            <ProductGallery />
            </>
          }/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      
      </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
