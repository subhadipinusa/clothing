import {Outlet, Link} from 'react-router-dom'
import { Fragment } from 'react'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.scss'

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
        <div> 
            <Link className='logo-container' to = "/">
                <CrwnLogo className='logo'/>
            </Link>
        </div>
        <div className='nav-links-container'>
            <Link className='nav-links-container' to = "/hello">
                <h1>SHOP</h1>
            </Link>
            <Link className='nav-links-container' to = "/signIn">
                <h1>SignIn</h1>
            </Link>
        </div>

        </div>
         
          <Outlet/>
      </Fragment>
    );
  }

  export default Navigation
