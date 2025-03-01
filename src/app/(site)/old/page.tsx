import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import SingleBlog from "@/components/Blog/SingleBlog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import SectionTitle from "@/components/Common/SectionTitle";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { getPosts } from "@/sanity/sanity-utils";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Startup Pro",
  description: "This is Home for Startup Pro",
  // other metadata
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Contact />
    </>
  );
}
