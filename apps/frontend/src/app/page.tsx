import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedArticles from '@/components/home/FeaturedArticles';
import Newsletter from '@/components/home/Newsletter';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Categories />
      <FeaturedArticles />
      <Newsletter />
      <Footer />
    </>
  );
}
