'use client';
import { useCallback } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import type { Container, Engine } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = async (container?: Container) => {
        // console.log(container);
    };

    return (
        <ParticlesProvider init={particlesInit}>
            <Particles
                id="tsparticles"
                particlesLoaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: true,
                    zIndex: -1,
                },
                background: {
                    color: {
                        value: "transparent",
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#00e5ff", // Bright cyan for dots
                    },
                    links: {
                        color: "#00d8ff", // Cyan for links
                        distance: 150,
                        enable: true,
                        opacity: 0.1, // Very subtle lines
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: false,
                        speed: 1, // Smooth, slow movement
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            width: 800,
                            height: 800
                        },
                        value: 80, // Good density for network effect
                    },
                    opacity: {
                        value: 0.2, // Very faint dots
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 1, max: 2 },
                    },
                },
                detectRetina: true,
                style: {
                    position: "fixed",
                    zIndex: "-1",
                    top: "0",
                    left: "0",
                    width: "100%",
                    height: "100%"
                }
            }}
            />
        </ParticlesProvider>
    );
}
