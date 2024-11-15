import Image from 'next/image';
import Logo from '@/assets/logo.svg';
export function Header() {
  return (
    <header className='w-full flex h-20 items-center bg-primary'>
    
        <div className='w-full md:w-4/5  mx-auto flex justify-between items-center' >
            
            <Image
            src={Logo}
            alt="Logo"
            width={100}
            />
            
             <nav>
                <ul className='flex gap-5 '>
                <li>
                    <a href='#' className='text-white'>Início</a>
                </li>
                <li>
                    <a href='#' className='text-white'>About</a>
                </li>
                <li>
                    <a href='#' className='text-white'>Services</a>
                </li>
                <li>
                    <a href='#' className='text-white'>Contact</a>
                </li>
                </ul>
            </nav>
        </div>
       
    
    </header>
  );
}