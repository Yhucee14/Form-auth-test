
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className='flex flex-row justify-between w-full mb-10 pt-4'>
                <h1 className=' text-2xl font-extrabold purple_gradient'>Home</h1>

                <div className='flex flex-row'>
                    <ul className='flex flex-row'>
                        <li className='flex flex-row'>
                            <Link to={'/login'}>Login</Link>
                        </li>

                        <li>
                            <Link to={'/signup'}>Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Nav