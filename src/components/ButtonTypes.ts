import type { ButtonHTMLAttributes } from "react";

export type ButtonProps =  {
    loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;