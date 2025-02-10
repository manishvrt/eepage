import FAQ from "@/components/FAQ";
import Footer from "@/components/Footrex";
import Gain from "@/components/Gain/Gain";
import Growth from "@/components/Growth/Growth";
import Heros from "@/components/Heros";
import Hero from "@/components/Hero";
import Meet from "@/components/Meet/Meet";
import Navbar from "@/components/Navbar";
import Program from "@/components/ProgramDetail/Program";
import RightFit from "@/components/RightFit/RightFit";
import Testimonial from "@/components/Testimonials/Testimonial";
import Unlock from "@/components/Unlock/Unlock";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <Heros/>
    <Unlock/>
    <RightFit/>
    <Growth/>
    <Gain/>
    <Meet/>
    <Testimonial/>
    <Program/>
    <FAQ/>
    {/* <Footer/> */}
    </>
  );
}
