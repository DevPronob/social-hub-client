import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children}:ContainerProps) => {
    return <div className={`container mx-auto max-w-7xl pt-16 px-6 flex-grow`}>{children}</div>;
};

export default Container;