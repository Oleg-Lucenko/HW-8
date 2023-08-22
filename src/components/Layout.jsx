
import {Outlet, NavLink } from 'react-router-dom';
import './layout.css';



const Layout = () => {

    return (
        <>
        <nav>
            <NavLink to='/Users'   className={({isActive}) => isActive ? "active" : ""}>Users</NavLink>
            <NavLink to='/'   className={({isActive}) => isActive ? "active" : ""}>Posts</NavLink>
            <NavLink to='/Todos'   className={({isActive}) => isActive ? "active" : ""}>Todos</NavLink>
        </nav>

        <Outlet/>
        </>
    )
}


export default Layout;