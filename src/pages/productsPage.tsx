import { NavLink } from 'react-router-dom';
import banner from '../assets/images/bg-plantacao.webp'
import { products } from '../compartilhado/product';

export default function ProductsPage() {
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
                        <span className="text-white cursor-pointer">
                            Produtos
                        </span>
                    </div>
                </div>
            </section>

            <section className='container mx-auto py-14 md:py-20 px-5 md:px-10 xl:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {products.map((product, index) => (
                    <div key={index} className=' px-5 py-7 bg-[#f8f6ef] shadow-lg border rounded-lg'>
                        <img src={product.image} alt={`Imagem do produto ${product.name}`} className='rounded' />
                        
                        <h3 className='mt-3 text-2xl sub-title text-center'>
                            {product.name}
                        </h3>

                        <div className='w-full flex justify-center'>
                            <NavLink 
                                to={`/produto/${product.name.toLowerCase().replace(/\s+/g, '').replace(/[áàâãä]/g, 'a').replace(/[éêë]/g, 'e').replace(/[íîï]/g, 'i').replace(/[óòôõö]/g, 'o').replace(/[úùûü]/g, 'u')}`} 
                                className='w-fit mt-2 mx-auto py-2 px-3.5 hover:text-white font-semibold bg-[#f2a922] hover:bg-[#1c7521] border transition-all'
                            >
                                Saiba mais
                            </NavLink>
                        </div>
                    </div>
                ))}
            </section>
        </>
    );
}