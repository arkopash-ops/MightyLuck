import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  imgLeft: number;
  imgTop: number;
  imgWidth: number;
  imgHeight: number;
  imgRotate: string;
  descWeight?: string;
}

export default function FeatureCard({
  title,
  description,
  image,
  imgLeft,
  imgTop,
  imgWidth,
  imgHeight,
  imgRotate,
  descWeight = "font-medium",
}: FeatureCardProps) {
  return (
    <div className="relative w-[370px] h-[220px] flex-shrink-0 rounded-[12px] bg-[#0C1F56] overflow-hidden flex flex-col justify-center items-start p-6 gap-4 isolate">
      {/* Ellipse 7 - top left glow */}
      <div
        className="absolute w-[160px] h-[160px] rounded-full bg-[#1463FF] blur-[50px] z-0"
        style={{ left: -85, top: -80 }}
      />

      {/* Text content */}
      <div className="relative z-[2] w-[200px] flex flex-col gap-4">
        <h3 className="font-jost font-extrabold text-[24px] leading-[26px] tracking-[0.01em] text-white">
          {title}
        </h3>
        <p
          className={`font-manrope ${descWeight} text-[16px] leading-[140%] tracking-[0.02em] text-[#E8EDFB]`}
        >
          {description}
        </p>
      </div>

      {/* Card image */}
      <div
        className="absolute z-[2]"
        style={{
          left: imgLeft,
          top: imgTop,
          transform: imgRotate,
          width: imgWidth,
          height: imgHeight,
        }}
      >
        <Image
          src={image}
          alt={title}
          width={imgWidth}
          height={imgHeight}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Ellipse 9 - right glow */}
      <div
        className="absolute w-[200px] h-[200px] rounded-full bg-[#1463FF] blur-[50px] z-[1]"
        style={{ right: -65, top: 27 }}
      />
    </div>
  );
}
