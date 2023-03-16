import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

  return (
    <>
      <div class="block">
        <h1>Make It Count</h1>
        Your goal: implement a page showing <strong>3 counters</strong>
        <br />
        <ul>
          <li>every counter has a + and a - button</li>
          <li>
            for every counter, clicking on + will increase the count number on
            that single counter
          </li>
          <li>
            for every counter, clicking on - will decrease the count number on
            that single counter
          </li>
          <li>
            the page will have 2 extra buttons "decrease all" and "increase all"
          </li>
          <li>
            clicking on "increase all" will increase the count of one unit on
            all the counters
          </li>
          <li>
            clicking on "decrease all" will decrease the count of one unit on
            all the counters
          </li>
        </ul>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/docs/state-and-lifecycle.html"
        >
          Help
        </a>
      </div>

      <div class="block">
        {/* <em>Put your counters here</em> */}
        <h2>COUNTER 1</h2>
        <button
          onClick={() => {
            setCounter1(counter1 - 1);
          }}
        >
          -
        </button>
        <p>{counter1}</p>
        <button
          onClick={() => {
            setCounter1(counter1 + 1);
          }}
        >
          +
        </button>

        <h2>COUNTER 2</h2>
        <button
          onClick={() => {
            setCounter2(counter2 - 1);
          }}
        >
          -
        </button>
        <p>{counter2}</p>
        <button
          onClick={() => {
            setCounter2(counter2 + 1);
          }}
        >
          +
        </button>

        <h2>COUNTER 3</h2>
        <button
          onClick={() => {
            setCounter3(counter3 - 1);
          }}
        >
          -
        </button>
        <p>{counter3}</p>
        <button
          onClick={() => {
            setCounter3(counter3 + 1);
          }}
        >
          +
        </button>

        <h2>ALL</h2>
        <button
          onClick={() => {
            setCounter1(counter1 - 1);
            setCounter2(counter2 - 1);
            setCounter3(counter3 - 1);
          }}
        >
          Decrease all
        </button>

        <button
          onClick={() => {
            setCounter1(counter1 + 1);
            setCounter2(counter2 + 1);
            setCounter3(counter3 + 1);
          }}
        >
          Increase all
        </button>
      </div>
    </>
  );
}
