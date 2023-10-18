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


const BirdSearch = (props) => {
    const [text, setText] = useState('');

    const textboxInput = (e) => {
        console.log(e);
        setText(e.target.value);
    };


    const handleSubmit = async e => {
        e.preventDefault(); // Prevent the default form submission behavior
        // takes the user input from the text box and submits data to the backend
        const dropdownValue = document.getElementById('dropdown').value;
        // const inputValue = e.target.querySelector('input').value;
        try {
            console.log("Dropdown Value:", dropdownValue);
            console.log(text);
            // console.log("Input Value:", inputValue);
            // sends the data to the backend
            // const requestParams = JSON({
            //     dropdownValue: text,
            // });
            // console.log('This is request params', requestParams);

            const response = await fetch("/birds", {
                method: "GET",
                params: { dropdownValue: text },
                headers: {
                    "Content-type": "application/json",
                }
                // body: JSON.stringify({
                //     title: title,
                //     post: post
                // })
            });
            // await the response
            if (response.ok) {
                const data = await response.json();
                console.log(data);
            }
        }
        catch (err) {
            console.log(err);
        }

    };

    return (
        <div>
            <div className="search">
                <h2>Search For Birds</h2>
                <form onSubmit={handleSubmit}>
                    <select type="dropdown" id="dropdown" >
                        <option value="Location">Location</option>
                        <option value="Scientific Name">Scientific Name</option>
                        <option value="Common Name">Common Name</option>
                    </select> 
                    <input type="text" placeholder="Search By" 
                    onChange={e => textboxInput(e)} required/>
                    <button type="submit" id="search_button" className="button" 
                    >Search</button>
                </form>
            </div>
        </div>

    )
};
// onClick={e => handleSubmit(e)}

export default BirdSearch;