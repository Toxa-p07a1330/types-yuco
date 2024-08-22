/**
 * A wrapper function for IonIcon component in case FederatedTypesPlugin cant proceed styled(IonIcon). Modify Wrapper instead.
 * Add params manually if needed (React.ComponentProps<typeof IonIcon> doesn`t work)
 * @return {JSX.Element} A JSX element containing IonIcon component
 */
export declare const IonIconWrapper: ({ src, size, onClick }: {
    color?: string | undefined;
    flipRtl?: boolean | undefined;
    icon?: string | undefined;
    ios?: string | undefined;
    lazy?: boolean | undefined;
    md?: string | undefined;
    mode?: "ios" | "md" | undefined;
    name?: string | undefined;
    size?: string | undefined;
    src?: string | undefined;
    onClick?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
