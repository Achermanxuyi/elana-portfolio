'use client';

import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface Props {
    className?: string;
    order?: number
    width?: number
    height?: number
    x: number
    y: number
    children: React.ReactNode
}

export default function Card({
    children,
    width,
    height,
    x, 
    y,
    className
}: Props) {
    return (
        <motion.div
            className={cn('card', className)}
            initial={{
                opacity: 0,
                scale: 0.6,
                left: x,
                top: y,
                width,
                height
            }}
            animate={{
                opacity: 1,
                scale: 1,
                left: x,
                top: y,
                width,
                height
            }}
            transition={{
                duration: 0.4,
                ease: 'easeOut'
            }}>
            {children}      
            </motion.div>
    )
}