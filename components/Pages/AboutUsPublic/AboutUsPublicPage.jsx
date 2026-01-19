import HeroSection from "./AboutHeroSection";
import ApproachSection from "./ApproachSection";
import Newsletter from "./Newsletter";
import ProcessSection from "./ProcessSection";
import VisionSection from "./VisionSection";

export default function AboutPagePublic() {
  return (
    <main>
      <HeroSection />
      <VisionSection />
      <ApproachSection />
      <ProcessSection />
      <Newsletter />
    </main>
  );
}
