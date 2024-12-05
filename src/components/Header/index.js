import'./header.css';
import { Link, Links } from 'react-router-dom'


function Header(){
    return(
        <header>
           <Link className='logo' to = '/'>Prime Flix</Link>




        </header>
    )
}

export default Header;