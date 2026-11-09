import React from "react";

function OrderPage({ setPage }) {
  return (
    <>
      <h1>Order Page</h1>

      <form>
        <input
          type="text"
          placeholder="Customer Name"
        />

        <br /><br />

        <select>
          <option>Pizza</option>
          <option>Burger</option>
          <option>Pasta</option>
          <option>Juice</option>
        </select>

        <br /><br />

        <button type="submit">
          Submit Order
        </button>
      </form>

      <br />

      <button onClick={() => setPage("menu")}>
        Menu Page
      </button>

      <button onClick={() => setPage("reservation")}>
        Reservation Page
      </button>
    </>
  );
}

export default OrderPage;