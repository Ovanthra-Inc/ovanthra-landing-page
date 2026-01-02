"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MeshGradient: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: event.clientX - rect.left,
                    y: event.clientY - rect.top,
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden z-0">
            <motion.div
                className="absolute w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_center,_rgba(255,125,69,0.3),_transparent_40%)]"
                animate={{
                    x: mousePosition.x - 500,
                    y: mousePosition.y - 500,
                    transition: { type: 'spring', stiffness: 100, damping: 20 },
                }}
            />
            <motion.div
                className="absolute w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(138,43,226,0.2),_transparent_40%)]"
                style={{ right: -200, bottom: -200 }}
                animate={{
                    x: -mousePosition.x / 4,
                    y: -mousePosition.y / 4,
                    transition: { type: 'spring', stiffness: 50, damping: 20 },
                }}
            />
        </div>
    );
};

export default MeshGradient;
