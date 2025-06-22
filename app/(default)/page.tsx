export const metadata = {
  title: "Lowki - Real Connections for Real Students",
  description:
    "Combat digital isolation with authentic video conversations. Connect with fellow students anonymously, share experiences, and build meaningful relationships within your campus community.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <div id="how-it-works">
        <Workflows />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="cta">
        <Cta />
      </div>
    </>
  );
}
