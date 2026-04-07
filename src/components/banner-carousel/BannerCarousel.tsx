import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Image } from "@/components";
import { carouselHeaderList } from "./utils";

const BannerCarousel = () => {
  return (
    <Carousel
      plugins={[Autoplay({ delay: 3000 })]}
      opts={{ align: "start", loop: true, dragFree: false }}
      className="w-full"
    >
      <CarouselContent>
        {carouselHeaderList.map(({ image }, index) => (
          <CarouselItem key={index}>
            <Image
              src={image}
              size="full"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority="high"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export { BannerCarousel };
