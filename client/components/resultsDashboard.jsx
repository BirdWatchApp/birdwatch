/**
 * ************************************
 *
 * @module  ResultsDashboard
 * @author  LT & MK
 * @date
 * @description presentation component that displays all related results from bird search
 *
 * ************************************
 */

import React from 'react';
import { useState, useEffect } from 'react';
import Posts from './posts';

const ResultsDashboard = (props) => {

    const { data } = props;

    console.log('data in results dashboard', data);

    // const posts = [];
    // for (let i = 0; i < data.length; i++)


    return (
        <div>
            {posts}   
        </div>
    )
};

export default ResultsDashboard;