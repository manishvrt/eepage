import Gain from "@/components/Gain/Gain";
import Growth from "@/components/Growth/Growth";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import RightFit from "@/components/RightFit/RightFit";
import Unlock from "@/components/Unlock/Unlock";
import Image from "next/image";

export default function Home() {
  return (
    <>
    {/* <Navbar/> */}
    <Hero/>
    <Unlock/>
    <RightFit/>
    <Growth/>
    <Gain/>
    </>
  );
}
