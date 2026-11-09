import React from "react";

function Reservation({ setPage }) {
  return (
    <>
      <h1>Reservation Page</h1>

      <form>
        <input
          type="text"
          placeholder="Customer Name"
        />

        <br /><br />

        <input type="date" />

        <br /><br />

        <input type="time" />

        <br /><br />

        <button type="submit">
          Book Table
        </button>
      </form>

      <br />

      <button onClick={() => setPage("menu")}>
        Menu Page
      </button>

      <button onClick={() => setPage("order")}>
        Order Page
      </button>
    </>
  );
}

export default Reservation;