import React from 'react';
import Banner from '../components/Banner/Banner';
import Card from '../components/Card/Card';

function Home() {
    return (
        <main>
            <Banner></Banner>
            <div>
                <ul>
                    <Card></Card>
                </ul>
            </div>
        </main>
    );
};

export default Home;