import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
    children: React.ReactElement;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return React.cloneElement(children, {
        className: cn(children.props.className, "text-3xl lg:text-5xl lg:leading-tight font-bold")
    });
};

export default SectionTitle;