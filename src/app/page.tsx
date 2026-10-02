import Categories from "@/layouts/Categories";
import DiscoverSkills from "@/layouts/DiscoverSkills";
import Footer from "@/layouts/Footer";
import Growth from "@/layouts/Growth";
import Header from "@/layouts/Header";
import Hero from "@/layouts/Hero";
import JoinCreator from "@/layouts/JoinCreator";
import LogoPartner from "@/layouts/LogoPartner";
import Testimonials from "@/layouts/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <LogoPartner />
        <DiscoverSkills />
        <Categories />
        <Growth />
        <JoinCreator />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
