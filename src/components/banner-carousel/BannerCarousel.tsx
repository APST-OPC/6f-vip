import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`banner-${index.toString()}`}
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
