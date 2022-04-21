import React, { useState } from 'react';

function StateTest() {
  const [page, setpage] = useState(0);

  const previousPageHandler = (event) => {
    console.log('previous page');
    setpage(page => page - 1);
  };

  const nextPageHandler = (event) => {
    console.log('next page');
    setpage(page => page + 1);
  };

  console.log({ page });

  return (
    <div>Test <br />

      {page}

      <br />

      <button onClick={previousPageHandler}>Previous</button>
      <br />
      <button onClick={nextPageHandler}>Next</button>
    </div>
  );
}

export default StateTest;
