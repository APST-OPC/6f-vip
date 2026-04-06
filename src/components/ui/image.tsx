import type { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const imageVariants = cva("object-cover object-center", {
  variants: {
    variant: {
      default: "object-cover object-center",
    },
    size: {
      default: "w-full h-full",
      sm: "size-5",
      md: "size-6 md:size-8",
      lg: "size-9 md:size-9",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ImageType = ComponentProps<"img"> & VariantProps<typeof imageVariants>;

const Image = (props: ImageType) => {
  const { variant, size, className, alt = "image", ...rest } = props;
  const classVariant = imageVariants({ variant, size, className });
  return <img className={classVariant} alt={alt} {...rest} />;
};

export { Image };
