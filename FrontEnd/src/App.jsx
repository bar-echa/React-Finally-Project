import react from "react";
import { createContext, useContext, useState } from "react";

import MenuPage from "./Pages/Menu-Page";
import Reservation from "./Pages/Reservation";
import OrderPage from "./Pages/Order-page";


function App(){
  return(

    <>
    <MenuPage/>
    <OrderPage/>
    <Reservation/>
    </>
  )
}
export default App;