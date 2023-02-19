import * as React from 'react';
import { useState } from 'react';

function Test() {
  const [num, setNum] = useState(0);
  const [data, setData] = useState([]);

  const myName = ['apple', 'banana', 'orange'];
  const handleClick = () => {
    // example update to data array on button click
    setNum(num + 1);
    setData([...data, myName[num]]);
  };

  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add Item</button>
    </div>
  );
}

export default Test;
