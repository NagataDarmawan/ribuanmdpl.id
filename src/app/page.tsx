import { HeroSection } from "@/section/Hero";
import { Package } from "lucide-react";
import { PackagesSection } from "@/section/Packages";
import { FeaturesSection } from "@/section/Faetures";
import { HowItWorks } from "@/section/HowItWorks";
import { Gallery} from "@/section/Gallery";
import { FAQ } from "@/section/FAQ";
import { Testimonials } from "@/section/Testimonials";
import { CTA } from "@/section/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-main)] text-white overflow-x-hidden flex flex-col">
      <HeroSection />
      <PackagesSection />
      <FeaturesSection />
      <HowItWorks />
      <Gallery/>
      <Testimonials/>
      <FAQ/>
      <CTA/>
    </main>
  );
}