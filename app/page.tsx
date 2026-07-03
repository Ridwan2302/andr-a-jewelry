import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustMarquee from "@/components/TrustMarquee";
import Collections from "@/components/Collections";
import Boutique from "@/components/Boutique";
import Histoire from "@/components/Histoire";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <Hero />
      <TrustMarquee />
      <Collections />
      <Boutique />
      <Histoire />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
