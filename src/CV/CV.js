import React from 'react';
import resume from '../images/jen-z-resume.pdf';

const CV = () => {
  return (
    <div>
      <iframe title="resume" width="99.8%" height="770px" src={resume}></iframe>
    </div>
  );
};

export default CV;