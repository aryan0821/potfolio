import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
// import { loadFull } from 'tsparticles'
import React, { useCallback, useMemo } from 'react'


const ParticleComponent = () => {
    const options = useMemo(() => {
        return {
            fullScreen: {
                enable: true,
                zIndex: 0,
            },
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: "bubble",
                    },
                },
                modes: {
                    bubble: {
                        color: "#a2d0fa",
                        distance: 200,
                        opacity: 1,
                        size: 10,
                    }
                },
            },
            particles: {
                number: {
                    value: 40,
                },
                links: {
                    enable: true,
                    distance: 200,
                    color: '#a2d0fa',
                    opacity: 0.5,
                },
                move: {
                    enable: true,
                    speed: { min: 0.5, max: 2 },
                    bounce: true,
                },
                opacity: {
                    value: { min: 0.1  , max: 0.3 },
                },
                size: {
                    value: { min: 2, max: 5 },
                },
            },
        };
    }, []);

    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    return <Particles init={particlesInit} options={options} />
};

export default ParticleComponent;