import FullLogo from "@/assets/FullLogo.webp";
import { Image } from "@/components/ui";
const LandingFooter = () => {
  return (
    <footer className="flex w-full h-15 justify-center items-center gap-2 bottom-0">
      <Image src={FullLogo} alt="full-logo" className="md:w-75 w-55 h-6 md:h-8" />
    </footer>
  );
};

export { LandingFooter };
