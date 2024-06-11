import Tuni from './mainnavigation';
import { Outlet } from 'react-router-dom';

function Rootlay() {
    return (
        <>
            
            <Tuni />
            <Outlet />
        </ >
    )
}

export default Rootlay
