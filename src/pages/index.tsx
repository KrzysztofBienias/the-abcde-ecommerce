import type { GetServerSideProps, NextPage } from 'next';
import Header from '../components/header';
import HomeContent from '../components/homeContent';
import HeroImage from '../components/heroImage';
import ProductsPreview from '../components/productsPreview';
import Footer from '../components/footer';
import type { ProductT } from '../types';

interface HomeI {
    products: ProductT[];
}

const Home: NextPage<HomeI> = ({ products }) => {
    return (
        <div className="mx-auto max-w-screen-2xl font-montserrat">
            <Header />
            <main>
                <HeroImage />
                <HomeContent />
                <ProductsPreview products={products} />
            </main>
            <Footer />
        </div>
    );
};

export const getStaticProps: GetServerSideProps = async () => {
    const products = await fetch('https://my-ecommerce-api-modern.herokuapp.com/items').then((res) => res.json());

    return {
        props: {
            products,
        },
    };
};

export default Home;
