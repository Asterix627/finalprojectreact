import React from 'react';

const TentangKamiFrangment = ({ title, content }) => {
  return (
    <div>
      <p className="text-2xl font-bold text-black mt-8 mb-4">{title}</p>
      <div className="bg-gray-100 p-8">
      <div className="text-sm pl-4">
        <ul className="list-disc">
          {content.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
}

export default TentangKamiFrangment;