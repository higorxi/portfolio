import React from 'react';
import '../component/style/PoliceSiren.css' 

const PoliceSiren: React.FC = () => {
  return (
    <div className="police-siren">
      <div className="light red"></div>
      <div className="light blue"></div>
    </div>
  );
};

export default PoliceSiren;
