import { useEffect, useState } from 'react';


const Team = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }
        , [])


    return (
        <div className='mt-6'>
            <h1 className='text-center text-4xl text-orange-500'>useState & useEffect Practice</h1>
            <h1 className='text-center text-4xl font-semibold text-blue-300'>Products</h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products.map((product) => (
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={product.id}>
                             <a className="block relative h-48 rounded overflow-hidden" >
                             <img alt="ecommerce" className="object-cover object-center w-50 h-full block mx-auto" src={product.image} />
                         </a>
                         <div className="mt-4">
                             <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{product.category}</h3>
                             <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                             <p className="mt-1 font-medium">price: {product.price}</p>
                         </div>
                        </div>
                        ))}
                           


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Team;