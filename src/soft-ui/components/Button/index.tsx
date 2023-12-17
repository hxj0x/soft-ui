import { cn } from "@/soft-ui/utils/tailwind-utils";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;
export const Button = (props: ButtonProps) => {
  return (
    <button
      className={cn(
        "w-full h-full text-blue-400 border p-2 rounded",
        "text-white"
      )}
      {...props}
    />
  );
};

export const ButtonGroup = () => {
  return <div>ButtonGroup</div>;
};
