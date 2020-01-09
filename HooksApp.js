import React, { useState, useEffect } from "react";

function HooksApp() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("rgb(0,0,0)");

  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function double() {
    setCount(prevCount => prevCount * 2);
  }

  function halve() {
    setCount(prevCount => prevCount / 2);
  }

  function zero() {
    setCount(0);
  }

  useEffect(() => {
    function r() {
      return Math.floor(Math.random() * 255);
    }
    const newColor = "rgb(" + r() + "," + r() + "," + r() + ")";
    setColor(newColor);
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }} className="text-center">
        {count}
      </h1>
      <div className="row justify-content-center">
        <button className="btn btn-primary" onClick={increment}>
          Increment!
        </button>
      </div>
      <div style={{ marginTop: 10 }} className="row justify-content-center">
        <button className="btn btn-danger" onClick={decrement}>
          Decrement!
        </button>
      </div>
      <div style={{ marginTop: 10 }} className="row justify-content-center">
        <button className="btn btn-success" onClick={double}>
          Double!
        </button>
      </div>
      <div style={{ marginTop: 10 }} className="row justify-content-center">
        <button className="btn btn-warning" onClick={halve}>
          Halve!
        </button>
      </div>
      <div style={{ marginTop: 10 }} className="row justify-content-center">
        <button className="btn btn-secondary" onClick={zero}>
          Zero!
        </button>
      </div>
    </div>
  );
}

export default HooksApp;
