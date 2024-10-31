import iconFacebook from '../assets/images/social-icons/facebook.svg'
import iconInstagram from '../assets/images/social-icons/instagram.svg'
import iconLinkedin from '../assets/images/social-icons/linkedin.svg'
import iconYoutube from '../assets/images/social-icons/youtube.svg'

export function Footer() {
    return (
        <footer className='bg-[#1c7521] space-y-4'>
            <div className='container mx-auto pt-14 md:pt-20 px-5 md:px-10 xl:px-20 space-y-3'>
                {/* SOCIAL ICONS */}
                <div className='w-full flex justify-center gap-3'>
                    <a 
                        href='https://www.facebook.com/profile.php?id=100095037258839' target='_blank'
                        className="w-8 h-8 flex justify-center items-center rounded bg-[#3b5998] "
                    >
                        <img src={iconFacebook} alt="facebook" className='w-5'/>
                    </a>

                    <a 
                        href='https://www.instagram.com/patenseagroecologia/' target='_blank'
                        className="w-8 h-8 flex justify-center items-center rounded bg-[#ac2bac] "
                    >
                        <img src={iconInstagram} alt="facebook" className='w-5'/>
                    </a>

                    <a 
                        href='https://br.linkedin.com/company/grupopatense' target='_blank'
                        className="w-8 h-8 flex justify-center items-center rounded bg-[#0082ca] "
                    >
                        <img src={iconLinkedin} alt="facebook" className='w-5'/>
                    </a>

                    <a 
                        href='https://www.youtube.com/@PatenseAgroecologia' target='_blank'
                        className="w-8 h-8 flex justify-center items-center rounded bg-[#ff0000]"
                    >
                        <img src={iconYoutube} alt="facebook" className='w-5'/>
                    </a>
                </div>

                {/* SOCIAL ICONS */}
                <h3 className='text-4xl md:text-5xl md:text-center text-white title'>
                    Entre em contato conosco:
                </h3>
                <div className='flex flex-col md:flex-row justify-around'>
                    <div className='space-y-2'>
                        <span className='text-2xl text-white sub-title'>
                            Endereço:
                        </span>
                        <div className='flex gap-2 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" className='text-white' strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" className='text-white' strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <a 
                                href="https://maps.app.goo.gl/URKNbzvVRL1UoTJa6" 
                                target="_blank" 
                            >
                                Rua. Dr. Marcolino, 79 - Centro <br />CEP 38700-160
                            </a>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <span className='text-2xl text-white sub-title'>
                            Contato:
                        </span>
                        <div className='flex gap-2 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" className='text-white' strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>

                            <a 
                                href="tel:+553438181800"
                                target="_blank" 
                            >
                                +55 (34) 3818-1800
                            </a>
                        </div>

                        <div className='flex gap-2 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" className='text-white' strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>

                            <a 
                                href="mailto:vendas@patense.com.br"
                                target="_blank" 
                            >
                                vendas@patense.com.br
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-3 flex flex-col md:flex-row justify-around items-center bg-[#2c2c2c] text-white'>
                <span className='text-center text-white'>
                    © 2024 Patense Agroecologia
                </span>

                <a href="https://bmouseproductions.com" target="_blank">
                    Desenvolvido por: Bmouse Productions
                </a>
            </div>
        </footer>
    )
}