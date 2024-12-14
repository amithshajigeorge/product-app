import React from 'react'; 
import { Outlet } from 'react-router-dom'; 
import Navbar from '../component/Navbar';

function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {}
            <div style={{ backgroundColor: '#545a2c', padding: '10px' }}>
                <Navbar />
            </div>

            {}
            <div 
                style={{
                    flex: 1, 
                    backgroundColor: '#9ab973', 
                    padding: '20px', 
                    overflow: 'auto',
                }}
            >
                <Outlet />
            </div>
        </div>
    );
}

export default Home;