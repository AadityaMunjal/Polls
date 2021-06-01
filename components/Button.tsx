import React from "react";

const buttonSchemas = {
  pred: "bg-pred border-pred-light border-2",
  purple: "bg-purple border-purple-light border-2",
  gray: "bg-gray border-0",
};

interface Props {
  className?: string;
  children: React.ReactNode;
  color?: keyof typeof buttonSchemas;
  disabled?: boolean;
  onClick?: () => void;
}

const CustomButton: React.FC<Props> = ({
  className,
  children,
  color,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={`${buttonSchemas[color]} 
      rounded-lg px-5 py-3 focus:outline-none
      ${className}`}
      onClick={!disabled ? onClick : () => {}}
    >
      <span>{children}</span>
    </button>
  );
};

export default CustomButton;
