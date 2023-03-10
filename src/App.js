import {Route, Routes} from 'react-router-dom';
// import logo from './logo.svg';
import { Index } from './pages/home/index';
import { Uploaded } from './pages/upload/uploaded';

// import './App.css';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route  path = "/" element = {<><Index/></>}/>
        <Route  path = "/uploaded" element = {<> <Uploaded/> </>}/>
        {/* <Route  path = "/" element = {<> <Car/> <Terms/> </>}/>
        <Route  path = "/terms" element = {<><Terms/> <Footer/> </> }/>
        <Route  path = "/about" element = {<><About/> <Footer/> </> }/>
        <Route  path = "/eventos" element = {<> <Eventos/> <Footer/> </> }/>
        <Route  path = "/tienda" element = {<><Tienda/> <Footer/> </>}/>
        <Route  path = "/carrito" element = {<><CarritoCompras/> <Paypal/> <Footer/></>}/> */}

      </Routes>
    </div>
  )
}
