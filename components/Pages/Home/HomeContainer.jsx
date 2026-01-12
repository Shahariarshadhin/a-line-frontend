import AwardsSection from "./AwardsSection";
import Contact from "./Contact";
import FeaturedClients from "./FeaturedClients";
import FeaturesSection from "./FeaturesSection";
import HeroBanner from "./HeroBanner";
import NewsSection from "./NewsSection";
import ProjectShowCase from "./ProjectShowcase";
import StatsSection from "./StatsSection";

const HomeContainer = () => {
  return (
    <div>
      <HeroBanner />
      <FeaturesSection />
      <ProjectShowCase />
      <NewsSection />
      <StatsSection />
      <FeaturedClients />
      <AwardsSection />
      <Contact />
    </div>
  );
};

export default HomeContainer;
