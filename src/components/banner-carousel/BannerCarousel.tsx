import Autoplay from "embla-carousel-autoplay";
import BannerImage1 from "@/assets/carousel/header_1.webp";
import BannerImage2 from "@/assets/carousel/header_2.webp";
import BannerImage3 from "@/assets/carousel/header_3.webp";
import BannerImage4 from "@/assets/carousel/header_4.webp";
import BannerImage5 from "@/assets/carousel/header_5.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselHeaderList {
  image: string;
}

const carouselHeaderList: CarouselHeaderList[] = [
  { image: BannerImage1 },
  { image: BannerImage2 },
  { image: BannerImage3 },
  { image: BannerImage4 },
  { image: BannerImage5 },
];

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
