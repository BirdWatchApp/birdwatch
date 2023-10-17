/**
 * ************************************
 *
 * @module  birdSearch
 * @author
 * @date
 * @description presentation component that displays takes user input for bird search
 *
 * ************************************
 */

import React from "react";

const BirdSearch = (props) => {



    return (
        <div>
            <div className="search">
                <h2>Search For Birds</h2>
                <form>
                    <select type="dropdown" id="dropdown" >
                        <option value="Location">Location</option>
                        <option value="Scientific Name">Scientific Name</option>
                        <option value="Common Name">Common Name</option>
                    </select> 
                    <input type="text" placeholder="Search By" required/>
                    <button id="search_button" className="button">Search</button>
                </form>
            </div>
        </div>

    )
};

export default BirdSearch;