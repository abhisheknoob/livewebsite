import React, { useState } from 'react';

function App() {
  const [inputList, setinputList] = useState('');
  const [item, setitem] = useState([]);

  const additem = (event) => {
    setinputList(event.target.value);
  };

  const moveData = () => {
    setitem((olddata) => {
      return [...olddata, inputList];
    });
    setinputList('');
  };

  const deleteValue = (index) => {
    setitem((olddata) => {
      return olddata.filter((value, i) => i !== index);
    });
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>to do list</h1>
          <br />
          <div className='todo'>
            <input
              type='text'
              placeholder='Add items'
              onChange={additem}
              value={inputList}
            />
            <button onClick={moveData}>+</button>
            <button onClick={()=>{
              setitem([])
            }}>delete all</button>
          </div>
          <ul>
            {item.map((val, index) => {
              return (
                <li key={index}>
                  {val}
                  <button onClick={() => deleteValue(index)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;


