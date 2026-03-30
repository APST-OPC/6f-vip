import WebBackground from "@/assets/web_background.webp";
import { LandingFooter } from "@/components/landing-footer";
import {
  BannerCarousel,
  LandingHeader,
  LineList,
  RedirectButtonList,
} from "@/components";

const BackgroundImage = () => {
  return (
    <img
      src={WebBackground}
      alt="Web Background"
      className="object-center object-cover h-full w-full absolute z-0"
      fetchPriority="high"
      loading="eager"
    />
  );
};

const App = () => {
  return (
    <div className="h-screen relative max-w-lg mx-auto">
      <BackgroundImage />
      <div className="h-full relative">
        <LandingHeader />
        <main className="space-y-3 pb-30 h-[92%] overflow-y-auto">
          <BannerCarousel />
          <LineList />
          <RedirectButtonList />
          <LandingFooter />
        </main>
      </div>
    </div>
  );
};

export default App;
