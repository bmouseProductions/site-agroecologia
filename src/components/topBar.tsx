import facebook from '../assets/images/social-icons/facebook.svg'
import instagram from '../assets/images/social-icons/instagram.svg'
import youtube from '../assets/images/social-icons/youtube.svg'
import linkedin from '../assets/images/social-icons/linkedin.svg'

export default function TopBar() {
    return (
        <div className="px-5 xl:px-10 bg-[#39bf34] ">
            <div className='py-2 mx-auto w-full max-w-[1300px] flex justify-between'>
                <div className="w-fit hidden md:flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                        <path strokeLinecap="round" className=' text-white' strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>

                    <a 
                        href="mailto:vendas@patense.com.br"
                        target="_blank"
                        className=' text-white'
                    >
                        vendas@patense.com.br
                    </a>
                </div>


                <div className="w-full md:w-fit flex items-center justify-end gap-2">
                    <div className="hidden md:block w-0.5 h-4 bg-white"/>
                    <a 
                        href="https://www.facebook.com/profile.php?id=100095037258839" 
                        target="_blank"
                    >
                        <img 
                            src={facebook}
                            alt="icone facebok"
                            className='w-5'
                        />
                    </a>

                    <a 
                        href="https://www.facebook.com/profile.php?id=100095037258839" 
                        target="_blank"
                    >
                        <img 
                            src={instagram}
                            alt="icone facebok" 
                            className='w-5'
                        />
                    </a>

                    <a 
                        href="https://www.facebook.com/profile.php?id=100095037258839" 
                        target="_blank"
                    >
                        <img 
                            src={youtube}
                            alt="icone facebok" 
                            className='w-5'
                        />
                    </a>

                    <a 
                        href="https://www.facebook.com/profile.php?id=100095037258839" 
                        target="_blank"
                    >
                        <img 
                            src={linkedin}
                            alt="icone facebok" 
                            className='w-5'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}