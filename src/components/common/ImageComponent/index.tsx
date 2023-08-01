import Image from "next/image";

interface IProps {
  src: any;
  width?: number;
  height?: number;
  className?: string;
  figClassName?: string;
  alt?: string;
  blurEffect?: boolean;
  priority?: boolean;
  fill?: any;
}

const ImageComponent = ({
  src,
  width,
  height,
  className,
  figClassName,
  alt,
  blurEffect,
  priority,
  fill,
  ...rest
}: IProps) => {
  return (
    <>
      <figure
        className={`relative leading-0 ${figClassName ? figClassName : ""}`}
      >
        <Image
          src={src}
          fill={fill}
          width={width}
          height={height}
          className={className}
          placeholder={!blurEffect ? "empty" : "blur"}
          blurDataURL={`/_next/image?url=${src}&w=16&q=1`}
          alt={alt ? alt : "Image"}
          priority={priority}
          {...rest}
        />
      </figure>
    </>
  );
};

export default ImageComponent;