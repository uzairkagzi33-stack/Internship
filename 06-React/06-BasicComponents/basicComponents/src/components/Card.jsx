import React from 'react';

const Card = ({title,content}) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 max-w-sm w-full">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-600">{content}</p>

        </div>
    );
}

export default Card;
