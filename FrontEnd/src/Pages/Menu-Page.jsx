import React from "react";

function MenuPage({ setPage }) {
  return (
    <>
      <h1>Menu Page</h1>

      <h2>Restaurant Menu</h2>

      <ul>
        <li>Pizza - $15</li>
        <li>Burger - $12</li>
        <li>Pasta - $14</li>
        <li>Juice - $4</li>
      </ul>

      <button onClick={() => setPage("order")}>
        Place Order
      </button>

      <button onClick={() => setPage("reservation")}>
        Reserve Table
      </button>
    </>
  );
}

export default MenuPage;