// components/Shimmer.tsx
import React from 'react';

const Shimmer = () => {
    return (
        <div className="relative overflow-hidden bg-gray-300 rounded-lg w-full h-20 mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
    );
};

export default Shimmer;
