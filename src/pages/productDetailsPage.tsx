
interface Product {
    name: string;
    image: string;
    decription: string;
}

interface ProductDetailProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailProps) {
    return (
        <>
            <section className="container mx-auto py-14 md:py-20 px-5 md:px-10 xl:px-20 flex flex-col lg:flex-row justify-around gap-7">
                <div className="w-full lg:w-1/2 flex flex-row justify-center">
                    <img 
                        src={product.image} 
                        alt={`Imagem do produto ${product.name}`}
                        className="w-full lg:max-w-[400px]"
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