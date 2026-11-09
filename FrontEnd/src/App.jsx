import react from "react";
import { createContext, useContext, useState } from "react";

import MenuPage from "./Pages/Menu-Page";
import Reservation from "./Pages/Reservation";
import OrderPage from "./Pages/Order-page";





function App() {
  const [page, setPage] = useState("menu");

  return (
    <div>
      {page === "menu" && <MenuPage setPage={setPage} />}
      {page === "order" && <OrderPage setPage={setPage} />}
      {page === "reservation" && <Reservation setPage={setPage} />}
    </div>
  );
}

export default App;