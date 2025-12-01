import { useEffect, useState } from 'react';

interface Particle {
    id: number;
    left: string;
    top: string;
    delay: string;
    duration: string;
    size: number;
}

export const BackgroundLayers = () => {
    const [particles, setParticles] = useState<Particle[]>([]);

    useEffect(() => {
        // Generate random particles/stars
        const newParticles: Particle[] = [];
        for (let i = 0; i < 50; i++) {
            newParticles.push({
                id: i,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                delay: `${Math.random() * 3}s`,
                duration: `${3 + Math.random() * 4}s`,
                size: Math.random() > 0.7 ? 3 : 2,
            });
        }
        setParticles(newParticles);
    }, []);

    return (
        <>
            {/* Main gradient background */}
            <div className="absolute inset-0 gradient-bg z-0" />

            {/* Texture overlay */}
            <div className="absolute inset-0 texture-overlay z-5 pointer-events-none opacity-50" />

            {/* Particle field */}
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
                {particles.map((particle) => (
                    <div
                        key={particle.id}
                        className="particle"
                        style={{
                            left: particle.left,
                            top: particle.top,
                            width: `${particle.size}px`,
                            height: `${particle.size}px`,
                            animationDelay: particle.delay,
                            animationDuration: particle.duration,
                        }}
                    />
                ))}
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 vignette z-15 pointer-events-none" />

            {/* Warm ambient glow */}
            <div className="absolute inset-0 warm-glow z-20 pointer-events-none mix-blend-soft-light" />
        </>
    );
};
