import React from 'react';
import { Details } from '../Details/Details';
import { Loaction } from '../Details/Loaction';
import { OurGoal } from '../Details/OurGoal';
import { Statics } from '../Details/Statics';
import { Header } from '../Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Details></Details>
            <OurGoal></OurGoal>
            <Loaction></Loaction>
            <Statics></Statics>
        </div>
    );
};

export default Home;