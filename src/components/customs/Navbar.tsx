import Swap from './Swap';
import Count from './Count';

const Navbar = () => {
    return (
        <div className='navbar bg-base-100 drop-shadow-lg'>
            <div className='navbar-start'>
                <button className='btn btn-ghost text-xl uppercase font-bold'>date converter 🕓</button>
            </div>

            <div className='navbar-center'>
                <Count />
            </div>

            <div className='navbar-end'>
                <Swap />
            </div>
        </div>
    );
};

export default Navbar;
