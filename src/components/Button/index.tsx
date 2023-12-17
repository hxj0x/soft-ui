import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;
export const Button = (props: ButtonProps) => {
  return (
    <button
      className="w-full h-full text-blue-400 border p-2 rounded"
      {...props}
    />
  );
};

export const ButtonGroup = () => {
  return <div>ButtonGroup</div>;
};
