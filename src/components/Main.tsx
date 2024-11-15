import Image from 'next/image';
import Caracol from '@/assets/caracol.svg';
import Expolog from '@/assets/expolog.svg';
import Ja from '@/assets/ja.svg';

export function Main() {
    return (
        <>
        <div className=" w-full  mx-auto bg-primary flex justify-center"  >
            <div className="md:w-3/4">
                <div className=' text-white text-center' >
                    <div className="flex flex-col items-center gap-2 leading-none p-36">
                    <h3 className="text-[28px] font-">Lorem Ipsum</h3>
                    <h1 className="text-[75px] font-extralight">Lorem <span className="font-extrabold">Ipsum </span></h1>
                    <h2 className="font-light text-[30px] max-w-[400px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h2>
                </div>
                <section className="flex flex-col md:flex-row justify-center  items-center p-12 ">
    
                    <div className="border border-gray-300 rounded-bl-lg w-[422px] h-96 p-8 text-start ">
                    <h2 className="text-sm font-normal mb-2">Entrega Rápida</h2>
                        <p className="max-w-[240px] text-lg ">Oferecemos serviços de entrega rápida e eficiente para atender suas necessidades.</p>
                    </div>

                    
                    <div className="border border-gray-300  w-[422px] h-96 p-8  text-start ">
                        <h2 className="text-sm font-normal mb-2">Sustentabilidade</h2>
                        <p className="max-w-[240px] text-lg ">Comprometidos com práticas ecológicas para um futuro melhor.</p>
                    </div>

                    
                    <div className="border border-gray-300 rounded-tr-lg w-[422px] h-96 p-8 text-start ">
                    <h2 className="text-sm font-normal mb-2">Segurança</h2>
                        <p className="max-w-[240px] text-lg ">Garantimos total segurança e confiança em todos os nossos serviços.</p>
                    </div>
                </section>
                <section className="flex justify-between p-12 items-center">
                    <div className="w-[529px] h-96 bg-secondary rounded-lg"></div>
                    <div className="text-start"> 
                        <h2 className="text-sm font-light mb-2">Sustentabilidade</h2>
                        <h1 className="text-3xl font-normal mb-2"> Lorem Ipsum</h1>
                        <p className="max-w-[300px] text-lg ">Comprometidos com práticas ecológicas para um futuro melhor.</p> 
                    </div>
                </section>
                
            
                </div>
            
            </div>
        </div>
        <div className=" w-full  mx-auto bg-secondary flex justify-center" >
            <div className="md:w-3/4">
                <section className="flex justify-between p-12 items-center">
                <div className="text-start text-primary"> 
                        <h2 className="text-sm font-light mb-2">Sustentabilidade</h2>
                        <h1 className="text-3xl font-normal mb-2"> Lorem Ipsum</h1>
                        <p className="max-w-[300px] text-lg ">Comprometidos com práticas ecológicas para um futuro melhor.</p> 
                    </div>
                    <div className="w-[529px] h-96 bg-primary rounded-lg"></div>
                </section>
                <section className='flex flex-row gap-20 justify-center p-12'>
                    <Image
                        src={Caracol}
                        alt="Caracol"
                        width={200}
                    />
                      <Image
                        src={Expolog}
                        alt="Expolog"
                        width={200}
                    />
                      <Image
                        src={Ja}
                        alt="Ja"
                        width={200}
                    />
                </section>
                <section className='p-12'>
                    <div className='w-full bg-white h-[350px] rounded-lg shadow-xl text-primary text-center '>
                        <div className='flex flex-col items-center gap-2 leading-none p-16'>
                            <h1 className='text-3xl'>What is <span className='font-extrabold'>Lorem</span> Ipsum?</h1>
                            <p className='max-w-[400px] text-xs'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>   
                            <div className='flex flex-row gap-4'>
                                <input className='border-2 border-primary p-1 focus:outline-none focus:ring-0 rounded-lg h-10 w-[500px]' type="text" placeholder='Digite seu Email' />
                                <button className='bg-primary text-white w-32 rounded-lg p-2'>Enviar</button>
                                
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
      
     </>
        
    );
} 