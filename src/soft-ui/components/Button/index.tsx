import { cn } from "@/soft-ui/utils/tailwind-utils";
import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"button">;
export const Button = (props: ButtonProps) => {
    return (
        <button
            className={cn("h-full w-full rounded border p-2 text-blue-400", "text-white")}
            {...props}
        />
    );
};

export const ButtonGroup = () => {
    return <div>ButtonGroup</div>;
};
