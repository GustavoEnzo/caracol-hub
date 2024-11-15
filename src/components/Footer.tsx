import Image from 'next/image';
import Logo from '@/assets/logo.svg';
export function Footer() {
  return (
    <footer className=" w-full  mx-auto text-white bg-primary flex justify-center" >
    <div className="md:w-3/4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between p-12 items-center">
    <div className="flex flex-col gap-5 items-start mb-4 md:mb-0">
      
      <Image
        src={Logo}
        alt="Logo"
        width={100}
      />
      
    
    <ul className="flex flex-col justify-center gap-6 mb-4 md:mb-0">
      <li><a href="#" className="hover:text-gray-300">Home</a></li>
      <li><a href="#" className="hover:text-gray-300">Sobre</a></li>
      <li><a href="#" className="hover:text-gray-300">Serviços</a></li>
      <li><a href="#" className="hover:text-gray-300">Contato</a></li>
    </ul>
    </div>
    <div className="text-center md:text-right">
      <p>&copy; 2024 Caracol Hub</p>
      <p className="text-gray-400">caracolhub@gmail.com | (98) 98411-9427</p>
    </div>
  </div>
    </div>
</footer>
  );
}