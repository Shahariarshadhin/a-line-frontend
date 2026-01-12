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
    </div>
  );
};

export default HomeContainer;
