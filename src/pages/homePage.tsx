import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import bannerMobile from "../assets/images/banner-mobile.webp";
import bannerDesktop from "../assets/images/banner-desk.webp";
import logoMarcaVerde from "../assets/images/icon-verde.png";
import logoMarcaAmarela from "../assets/images/icon-amarelo.png";
import mulherPlantando from "../assets/images/mulherPlantando.jpg"
import peixe from "../assets/images/peixe.webp"
import bgVideo from "../assets/images/bg-video.webp"
import Modal from "../components/modal";
import { products } from '../compartilhado/product';
import { NavLink } from 'react-router-dom';


export default function Home() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const section = document.getElementById(hash.replace('#', ''));
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]); 
    
    return (
        <>
            <img 
                src={bannerMobile}
                alt="banner Semeie o futuro com a Patense Agroecologia!" 
                className="w-full lg:hidden"
            />
            <img 
                src={bannerDesktop}
                alt="banner Semeie o futuro com a Patense Agroecologia!" 
                className="w-full hidden lg:block"
            />

            {/* SECTION SOBRE NÓS */}
            <section 
                id="sobre"
                className="container mx-auto py-14 md:py-20 px-5 md:px-10 xl:px-20 flex flex-col lg:flex-row gap-5"
            >
                <div className="w-full space-y-7 my-auto">
                    <div className="flex items-center gap-2">
                        <img 
                            src={logoMarcaVerde}
                            alt="Logo marca da empresa Patense Agroecologia" 
                            className="w-16"
                        />

                        <span className="text-lg md:text-xl underline sub-title">
                            Patense Agroecologia
                        </span>
                    </div>

                    <div className="space-y-3">
                        <h2 className="text-4xl md:text-5xl title">
                            Nossa História
                        </h2>
                        <p className="pl-4 border-l-4 border-[#f2a922] ">
                            A Patense Agroecologia nasceu da fusão das Start Ups Originalis Biotech e BioSea, que foram adquiridas pelo 
                            Grupo Patense em 2022. A empresa tem como propósito oferecer produtos e soluções ecologicamente corretos, com 
                            matéria-prima renovável e de primeira qualidade. Nossos produtos são feitos com tecnologia inovadora e segura para o 
                            meio ambiente, e apresentam alta viabilidade agronômica e econômica.
                        </p>
                    </div>
                    
                    <div className="space-y-3">
                        <h2 className="text-4xl md:text-5xl title">
                            Visão Ambiental
                        </h2>
                        <p className="pl-4 border-l-4 border-[#f2a922] ">
                            A Patense Agroecologia tem como objetivo dar destinação correta a toneladas de resíduos da indústria pesqueira 
                            (peixes e camarões), que causariam um grande problema ao meio ambiente, caso não fossem destinados adequadamente.
                            <br />
                            Além da destinação ambientalmente correta, valorizamos os resíduos com tecnologias inovadoras e fazemos seu 
                            aproveitamento integral, gerando diversos produtos de grande valor agregado.
                            <br />
                            Os tratamentos de efluentes são realizados de forma ambientalmente correta, com reúso seguro das águas servidas 
                            depois de tratadas na estação de tratamento da empresa.
                        </p>
                    </div>
                </div>

                <div className="mx-auto lg:ml-[100px] mt-20 my-auto w-fit lg:w-full relative ">
                    <img 
                        src={mulherPlantando}
                        alt="mulher plantando"
                        className="mx-auto w-[90%] sm:w-full rounded"
                    />
                    <img 
                        src={peixe}
                        alt="peixe nadando no mar"
                        className="w-[100px] sm:w-[150px] absolute top-[-50px] left-0 sm:left-[-100px] border-b-8 border-r-8  border-white"
                    />
                </div>
            </section>

            {/* SECTION VIDEO */}
            <section className="bg-[#134f09] ">
                <div className="container mx-auto py-14 md:py-20 px-5 md:px-10 xl:px-20 space-y-4">
                    <div className="flex justify-center gap-2">
                        <img 
                            src={logoMarcaAmarela}
                            alt="Logo marca Patense Agroecologia"
                            className="w-7"
                        />

                        <span className="text-xl md:text-2xl text-white text-center sub-title">
                            Patense Agroecologia
                        </span>

                        <img 
                            src={logoMarcaAmarela}
                            alt="Logo marca Patense Agroecologia"
                            className="w-7"
                        />
                    </div>

                    <h2 className="text-4xl md:text-5xl text-white text-center title">
                        Assista o video e entenda melhor
                    </h2>

                    <div className="mx-auto w-fit relative">
                        <img 
                            src={bgVideo}
                            alt="imagem de alguns produtos da Patense Agroecologia" 
                            className="mx-auto w-full max-w-4xl rounded"
                        />

                        <div className=" absolute inset-0 flex justify-center items-center">
                            <Modal 
                                buttonModal={
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-20 animate-bounce">
                                        <path strokeLinecap="round" className="text-white fill-white" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        <path strokeLinecap="round" className="text-white fill-[#39bf34] " strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                    </svg>
                                }

                                contentModal= {
                                    <div className="mx-auto w-full md:w-[90%] relative z-50">
                                        <iframe
                                            className="mx-auto w-full max-w-[900px] h-[180px] md:h-[380px] lg:h-[450px]  rounded-xl"
                                            src="https://www.youtube.com/embed/Yh1_G0gcZjA?si=T4JtuxP0rurUDEry"
                                            title="YouTube video player"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        />
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION BIOPOLIMEROS */}
            <section className="bg-plantação">
                <div className="w-full backdrop-brightness-50 ">
                    <div className="container mx-auto py-10 px-5 md:px-10 xl:px-20">
                        <div className="w-full md:max-w-3xl px-5 py-10 md:px-10 md:py-16 bg-stone-100 rounded ">
                            <h2 className="text-4xl md:text-5xl title mb-5 md:mb-10">
                                Biopolímeros de Origem Marinha
                            </h2>
                            <p>
                                Os produtos da Patense Agroecologia são uma nova opção para integrar manejos agrícolas de todas as 
                                culturas. Seja de forma isolada em cultivos orgânicos, seja aliado às atuais estratégias convencionais, 
                                nossos produtos proporcionam soluções mais sustentáveis e adequadas ao equilíbrio do meio-ambiente.
                            </p>

                            <p>
                                Nossas fórmulas foram desenvolvidas utilizando matérias-primas de fontes naturais renováveis, que são 
                                biocompatíveis, biodegradáveis e atóxicas, eliminando, assim, quaisquer riscos ambientais ou para a 
                                saúde humana.
                            </p>

                            <p>
                                Trata-se de uma combinação de substâncias orgânicas e biopolímeros, resultantes da hidrólise 
                                enzimática de peixes e crustáceos, sendo abundante em aminoácidos, ácidos orgânicos e elementos 
                                nutricionais. Esses compostos nutrem, atuam em sinergia com outros elementos presentes e 
                                estimulam o crescimento e resistência, tanto da microbiota dos solos quanto das plantas cultivadas, 
                                favorecendo a construção de um ambiente propício para uma produção agrícola sustentável, 
                                com qualidade e alta produtividade.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION PRODUTOS */}
            <section className="container mx-auto py-14 md:py-20 px-5 md:px-10 xl:px-20 space-y-5">
                <h2 className="text-4xl md:text-5xl title text-center">
                    Nossos Produtos
                </h2>
                <p>
                    A Patense Agroecologia nasceu com o objetivo de oferecer aos agricultores do Brasil produtos inovadores, 
                    seguros e viáveis em termos técnicos e econômicos. Com a utilização dos nossos produtos será possível 
                    construir um ambiente produtivo para as plantas e adverso para pragas e doenças. Tudo isso usando um manejo 
                    mais natural e inofensivo.
                </p>

                <Swiper
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 40,
                        },
                        1024: {
                          slidesPerView: 3,
                          spaceBetween: 60,
                        },
                      }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper pb-10 md:px-14"
                >
                    {
                        products.map((product, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='relative'>
                                        <img 
                                            src={product.image} 
                                            alt={`Imagem do produto ${product.name}`}
                                            className='w-full rounded'
                                        />

                                        <NavLink 
                                            to={`/produto/${product.name.toLowerCase().replace(/\s+/g, '').replace(/[áàâãä]/g, 'a').replace(/[éêë]/g, 'e').replace(/[íîï]/g, 'i').replace(/[óòôõö]/g, 'o').replace(/[úùûü]/g, 'u')}`}
                                            className='p-5 w-full absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-black rounded text-white hover:text-[#eece38] '
                                        >
                                            <span className='text-xl text-white  sub-title'>
                                                {product.name}
                                            </span>

                                            <button className='text-start'>
                                                Ver produto
                                            </button>
                                        </NavLink>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </section>
        </>
    )
}