import {Link} from 'react-router-dom'

function Tuni (){
    return(
        <header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/class'>form</Link></li>
                </ul>
            </nav>
        
        </ header>
    )
}

export default Tuni
