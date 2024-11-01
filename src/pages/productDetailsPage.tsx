import { NavLink } from "react-router-dom";
import banner from '../assets/images/bg-plantacao.webp'
import { useEffect } from "react";

interface Product {
    name: string;
    image: string;
    decription: string;
}

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailProps) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <section className="relative h-[200px] md:h-[300px]">
                <img 
                    src={banner} 
                    alt="imagem de pessoas cuidando de uma plantação" 
                    className='relative z-10 h-full w-full object-cover brightness-50' 
                />

                <div className='absolute top-1/3 z-20 container mx-auto px-5 md:px-10 xl:px-20'>
                    <h1 className='text-4xl md:text-5xl xl:text-6xl text-white title'>
                        Produtos
                    </h1>

                    <div className='flex gap-2'>
                        <NavLink to="/" className="text-white">
                            Home
                        </NavLink>
                        <span className="text-white">{">"}</span>
                        <NavLink to="/produtos" className="text-white">
                            Produtos
                        </NavLink>
                        <span className="text-white">{">"}</span>
                        <span className="text-white cursor-pointer">
                            {product.name}
                        </span>
                    </div>
                </div>
            </section>
            
            <section className="container mx-auto py-14 md:py-20 px-5 md:px-10 xl:px-20 flex flex-col lg:flex-row justify-around gap-7">
                <div className="w-full lg:w-1/2 flex flex-row justify-center">
                    <img 
                        src={product.image} 
                        alt={`Imagem do produto ${product.name}`}
                        className="w-full lg:max-w-[400px] rounded"
                    />
                </div>

                <div className="w-full lg:w-1/2 space-y-5">
                    <h2 className="text-3xl font-black sub-title ">
                        {product.name}
                    </h2>

                    <p
                        dangerouslySetInnerHTML={{ __html: product.decription }} 
                        className="ul-description"
                    />
                </div>
            </section>
        </>
    )
}