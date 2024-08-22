import { ReactNode } from "react";
import { TStyleUtils } from "../style-utils";
export declare const Text: ({ ...props }: TStyleUtils & {
    children: ReactNode | ReactNode[];
} & {
    lineHeight?: number;
}) => import("react/jsx-runtime").JSX.Element;
export * from "./styles";
