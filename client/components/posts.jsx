/**
 * ************************************
 *
 * @module  Posts
 * @author  LT & MK
 * @date
 * @description presentation component that displays a singluar result from the bird search
 *
 * ************************************
 */

import React from 'react';
import { useState, useEffect } from 'react';

const Posts = (props) => {

    return (
        <div className='post'>
            <img src='https://i.ytimg.com/vi/ccByAVGIoCY/mqdefault.jpg'></img>
            <div className='labels'>
                <label>Common Name</label> <br></br>
                <label>Scientific Name</label> <br></br>
                <label>Birdgenda</label>
            </div>
        </div>
    );
};

export default Posts;