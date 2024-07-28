import Navbar from '@/components/customs/Navbar';
import Footer from '@/components/customs/Footer';

function App() {
    return (
        <>
            <Navbar />

            <main className='container w-fit'>
                <h1>This is main content</h1>
            </main>

            <Footer />
        </>
    );
}

export default App;
