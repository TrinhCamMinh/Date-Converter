import Logo from '@/assets/logo.png';
import { FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='footer bg-base-300 text-base-content font-bold items-center p-4'>
            <aside className='grid-flow-col items-center text-balance'>
                <img src={Logo} alt='Logo' loading='lazy' width={70} height={70} className='rounded' />
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <a href='https://minhct.netlify.app/' target='_blank' rel='noopener noreferrer' className='underline decoration-sky-500 underline-offset-2 decoration-wavy uppercase font-bold'>Trinh Cam Minh</a> </p>
            </aside>
            <nav className='grid-flow-col gap-4 md:place-self-center justify-self-center md:justify-self-end'>
                <a href='https://github.com/TrinhCamMinh/Date-Converter' target='_blank' rel='noopener noreferrer'>
                    <FaGithub className='w-6 h-6' />
                </a>
                <a href='https://www.linkedin.com/in/tr%E1%BB%8Bnh-c%E1%BA%A9m-minh-34b369274/' target='_blank' rel='noopener noreferrer'>
                    <FaLinkedin className='w-6 h-6' />
                </a>
                <a href='https://discordapp.com/users/569435570736988164' target='_blank' rel='noopener noreferrer'>
                    <FaDiscord className='w-6 h-6' />
                </a>
            </nav>
        </footer>
    );
};

export default Footer;
