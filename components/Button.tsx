import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  color?: string;
  bgColor?: "gray" | "pred" | "purple";
  disabled?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FC<Props> = ({
  className,
  children,
  color,
  bgColor,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`bg-${bgColor || "pred"} pr-5 pl-5 pt-3 pb-3 text-${
        color || "white"
      } rounded-lg border-${
        bgColor || "pred"
      }-light border-2 focus:outline-none ${
        disabled ? "bg-gray-800" : ""
      } ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
