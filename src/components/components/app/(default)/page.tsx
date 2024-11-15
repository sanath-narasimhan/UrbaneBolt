export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Stats from "@/components/stats";
import Contact from "@/components/contact";
import HeroTwo from "@/components/hero2";
import Process from "@/components/process";
export default function Home() {
  return (
    <>
      <Hero />
      <HeroTwo />
      <FeaturesPlanet />
      <Process />
      
      <Stats />
      <Contact />
    </>
  );
}
