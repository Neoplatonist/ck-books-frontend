import ProgressBar from '@/components/progressBar';
import React from 'react';

function Test() {
  return (
    <div>Test

      <div style={{ width: "50vw" }}>
        <ProgressBar
          progress={10}
        />
      </div>
    </div>
  );
}

export default Test;
