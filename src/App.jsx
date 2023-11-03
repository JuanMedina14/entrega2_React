import './App.css'

import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './context/CartContext'


const App = () => {
    

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={ <ItemListContainer welcome={'Bienvenidos a la Tienda'}/>} />
            <Route path='category/:categoryId' element={<ItemListContainer welcome={'Productos Filtrados'}/>} />
            <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
