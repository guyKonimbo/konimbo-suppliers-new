import React from 'react';

const initialList = [
  { id: 'a', name: 'Learn React' },
  { id: 'b', name: 'Learn Firebase' },
  { id: 'c', name: 'Learn GraphQL' },
  { id: 'e', name: 'Learn React' },
  { id: 'bt', name: 'Learn Firebase' },
  { id: 'c1', name: 'Learn GraphQL' }
];

const ListWithRemoveItem = (prop) => {
  const [list, setList] = React.useState(initialList);

  const handleClick = id => {
    setList(list.filter(item => item.id !== id));
  };

  return (
  
   <label className={prop.classLabel}>
    {prop.label}
     <div className="suppliers_ulWrapper">
    <ul className={prop.classUl}>
      {list.map(item => (
        <li key={item.id}>
          <label>{item.name}</label>
          <button type="button" onClick={() => handleClick(item.id)}></button>
        </li>
      ))}
    </ul>
     </div>
    </label>
   
  );
};

export default ListWithRemoveItem;