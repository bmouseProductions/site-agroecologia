import {BrowserRouter as Router ,Routes, Route, } from "react-router-dom";
import Home from '../pages/homePage'
import ErrorPage from '../pages/errorPage';

import BackToTop from '../components/backToTop';
import Header from '../components/header';
import TopBar from '../components/topBar';
import { Footer } from "../components/footer";
import ProductsPage from "../pages/productsPage";
import { products } from "../compartilhado/product";
import ProductDetails from "../pages/productDetailsPage";

export default function AppRouter(){
    return(
        <Router>
            <TopBar />
            <Header />
            <main className=''>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/produtos" element={<ProductsPage />}/>
                    {products.map((product, index) =>(
                        <Route 
                            key={index} 
                            path={`/produto/${product.name.toLowerCase().replace(/\s+|[áàâãäéêëíîïóòôõöúùûü]/g, '')}`} 
                            element={<ProductDetails product={product} />} 
                        />
                    ))}
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
                <BackToTop/>
            </main>
            <Footer />
        </Router>
    )
}