/**
 * ************************************
 *
 * @module  BirdSearch
 * @author  LT & MK
 * @date
 * @description presentation component that displays takes user input for bird search
 *
 * ************************************
 */

import React from "react";
import { useState } from "react";
import ResultsDashboard from "./resultsDashboard";

const BirdSearch = (props) => {
  const [text, setText] = useState("");
  const [showBirdSearch, setShowBirdSearch] = useState(true);

  const textboxInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // takes the user input from the text box and submits data to the backend
    const dropdownValue = document.getElementById("dropdown").value;
    // const inputValue = e.target.querySelector('input').value;
    try {
      setShowBirdSearch(false);
      console.log(dropdownValue);
      console.log(text);
      const response = await fetch("/birds/getBird", {
        method: "POST",
        body: JSON.stringify({ [dropdownValue]: text }),
        headers: {
          "Content-type": "application/json",
        },
      });
      // await the response
      if (response.ok) {
        const data = await response.json();
        console.log("data", data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {showBirdSearch && (
        <div className="search">
          <h2>Search For Birds</h2>
          <form onSubmit={handleSubmit}>
            <select type="dropdown" id="dropdown">
              <option value="locname">Location</option>
              <option value="comname">Common Name</option>
            </select>
            <input
              type="text"
              placeholder="Search By"
              onChange={(e) => textboxInput(e)}
              required
            />
            <button type="submit" id="search_button" className="button">
              Search
            </button>
          </form>
        </div>
      )}
      {/* {!showBirdSearch && <ResultsDashboard props={data}/> } */}
    </div>
  );
};
// onClick={e => handleSubmit(e)}

export default BirdSearch;
