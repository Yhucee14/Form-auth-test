import Dashboard from './components/Dashboard'
import Auth from './components/auth';
import './App.css'; 

import { useUserContext } from "./context/userContext"

const App = () => {
    const {loading, error, user} = useUserContext();

    return (
    <div className='xx:min-h-full px-6 py-[30%] sm:px-[15rem] sm:py-[12%] min-h-full bg-black max-h-full'>
        <div className='bg-transparent'>
        {error && <p>{error}</p>}
        {loading ? <h2>Loading...</h2> : <> {user ? <Dashboard /> : <Auth />} </>}
        </div>
       
    </div>


    )
}

export default App