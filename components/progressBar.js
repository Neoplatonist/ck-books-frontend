import React from 'react';
import PropTypes from 'prop-types';

function ProgressBar({ progress, borderColor, bgColor, fillColor }) {
  if (progress < 0) {
    progress = 0;
  }

  if (progress > 100) {
    progress = 100;
  }

  progress = String(progress);

  return (
    <div className={["w-full border rounded-full h-2.5", borderColor, bgColor].join(' ')}>
      <div className={["h-2 rounded-full", fillColor].join(' ')} style={{ width: progress + "%", transition: "width 0.7s ease-out" }}></div>
    </div >
  );
}

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
  fillColor: PropTypes.string
};

ProgressBar.defaultProps = {
  progress: 0,
  borderColor: 'border-core2',
  bgColor: 'bg-lightest-grey',
  fillColor: 'bg-core2',
};

export default ProgressBar;
