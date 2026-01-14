import Hero from "@/app/components/home/hero"
import ProductGrid from "@/app/components/home/product-grid"
import Ofertas from "@/app/components/home/ofertas"
import PopularProducts from "@/app/components/home/popular-products"
import Circularity from "@/app/components/home/circularity"
import EcoNews from "@/app/components/home/eco-news"
import Footer from "@/app/components/footer/footer"

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductGrid />
      <div id="ofertas">
        <Ofertas />
      </div>
      <div id="populares">
        <PopularProducts />
      </div>
      <div id="circularidad">
        <Circularity />
      </div>
      <div id="eco-news">
        <EcoNews />
      </div>
      <Footer />
    </main>
  )
}