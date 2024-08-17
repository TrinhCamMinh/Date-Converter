import Navbar from '@/components/customs/Navbar';
import Footer from '@/components/customs/Footer';

import { Features } from '@/components/routes';
import { Converter } from '@/components/routes';
import Guide from '@/components/customs/Guide';

function App() {
    return (
        <>
            <Navbar />

            <main className='container grid grid-cols-2 gap-8'>
                <Converter className='col-span-2'/>
                <Features className='col-span-2'/>
            </main>

            <Guide />
            <Footer />
        </>
    );
}

export default App;
