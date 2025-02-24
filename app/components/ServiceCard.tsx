import React from "react";

interface ServiceCardProps {
  title: string;
  price: string;
  isMiddle?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  price,
  isMiddle = false,
}) => {
  const getPlaceholderText = (title: string) => {
    switch (title) {
      case "Catalyst Package":
        return "Ignite your digital presence";
      case "Stallion Package":
        return "Gallop ahead of the competition";
      case "Empire Package":
        return "Rule your digital domain";
      default:
        return "Elevate your online experience";
    }
  };

  return (
    <div
      className={`bg-black bg-opacity-30 border border-[#152020] rounded-[11px] p-[30px] flex flex-col items-center justify-between ${
        isMiddle ? "w-80 h-72" : "w-72 h-64"
      } transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/50 animate-pulse-glow`}
    >
      <h3 className="text-2xl font-bold mb-3 text-white/90 opacity-72 font-exemplar-pro">
        {title}
      </h3>
      <p className="text-lg italic text-white/70 opacity-72 font-dank-mono text-center mb-5">
        {getPlaceholderText(title)}
      </p>
      <p className="text-3xl font-bold text-[#223D3D] opacity-72 font-exemplar-pro">
        {price}
      </p>
    </div>
  );
};

export default ServiceCard;
