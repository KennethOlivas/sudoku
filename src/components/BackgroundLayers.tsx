export const BackgroundLayers = () => {
    return (
        <>
            <div className="absolute inset-0 noise-bg z-0 pointer-events-none" />
            <div className="absolute inset-0 vignette z-10 pointer-events-none opacity-60" />
            <div className="absolute inset-0 lighting-layer z-20 pointer-events-none mix-blend-screen" />
        </>
    );
};
