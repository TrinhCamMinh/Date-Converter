import Swap from './Swap';

const Navbar = () => {
    return (
        <div className='navbar bg-neutral text-neutral-content'>
            <div className='navbar-start'>
                <button className='btn btn-ghost text-xl uppercase font-bold'>date converter 🕓</button>
            </div>

            <div className='navbar-center'>
                <div className='flex gap-5'>
                    <div>
                        <span className='countdown font-mono text-4xl'>
                            <span>15</span>
                        </span>
                        days
                    </div>
                    <div>
                        <span className='countdown font-mono text-4xl'>
                            <span>10</span>
                        </span>
                        hours
                    </div>
                    <div>
                        <span className='countdown font-mono text-4xl'>
                            <span>24</span>
                        </span>
                        min
                    </div>
                    <div>
                        <span className='countdown font-mono text-4xl'>
                            <span>21</span>
                        </span>
                        sec
                    </div>
                </div>
            </div>

            <div className='navbar-end'>
                <Swap />
            </div>
        </div>
    );
};

export default Navbar;
