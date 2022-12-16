import {  NavLink } from 'react-router-dom'
import  classes from './MainHeader.module.css'

const MainHeader = () => {
   return(
    <header className={classes.header}>
        <nav>
            <ul>
                <NavLink activeClassName={classes.active} to="/welcome"><li>Welcome</li></NavLink>
                <NavLink activeClassName={classes.active} to="/products"><li>Products</li></NavLink>
            </ul>
        </nav>
    </header>
   )
}

export default MainHeader