import Image from "next/image";

interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
  rotate?: string;
}

export default function FeatureCard({
  title,
  description,
  image,
  rotate = "rotate-0",
}: FeatureCardProps) {
  return (
    <div className="relative w-[370px] h-[220px] overflow-hidden rounded-2xl bg-[#0C1F56] px-6 py-6">
      {/* ellipse 7 */}
      <div className="absolute w-[160px] h-[160px] -left-[85px] -top-[80px] bg-[#1463FF] blur-[50px]" />

      {/* ellipse 9 */}
      <div className="absolute w-[200px] h-[200px] -right-[65px] top-[30px] bg-[#1463FF] blur-[50px]" />

      {/* Content */}
      <div className="relative z-10 w-[200px]">
        <h3 className="text-white text-[24px] leading-[26px] font-extrabold font-jost tracking-[0.01em]">
          {title}
        </h3>

        <p className="mt-4 text-[#E8EDFB] text-[16px] leading-[140%] font-medium font-manrope tracking-[0.02em]">
          {description}
        </p>
      </div>

      {/* Right Image */}
      <div className={`absolute right-[-20px] bottom-0 z-20 ${rotate}`}>
        <Image
          src={image}
          alt={title}
          width={220}
          height={160}
          className="object-contain"
        />
      </div>
    </div>
  );
}
