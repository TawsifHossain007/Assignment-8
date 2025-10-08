import React from 'react';
import Banner from '../../Banner/Banner';
import HomeApps from '../../Components/HomeApps/HomeApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const apps = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            
            <HomeApps key={apps.id} apps={apps.appsData}></HomeApps>
        </div>
    );
};

export default Home;