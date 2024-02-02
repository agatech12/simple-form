import axios from 'axios'
import React, { useState, useEffect } from 'react';

const Axios = () => {
    useEffect(() => {
        const getRepo = async() => {
            try {
                const response = await axios.get('https://postal.damaral.my.id/api/send/message')
                console.log(response);
                const myRepo = response.data;
                setRepo(myRepo);
            } catch (erorr) {
                console.log(erorr)
            }
        };
        getRepo();
    }, []);
}