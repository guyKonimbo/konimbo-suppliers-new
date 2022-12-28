import logo from './logo.svg';
import React from 'react';
import './App.css';
import Select from './Select';
import ListWithRemoveItem from './ulComponent';

const App = () => {
  const options = [
    { label: 'Fruit', value: 'fruit' },
    { label: 'Vegetable', value: 'vegetable' },
    { label: 'Meat', value: 'meat' },
  ];

  const [value, setValue] = React.useState('fruit');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className='suppliers_wrapper'>
    <h1 className='suppliers__headline'>משיכת מוצרים</h1>
    <label className='suppliers__checkbox'>
        אפשר הוספת מוצרים       
        <input type="checkbox"></input>
        <span class="checkbox-blog-switch">
        </span>
    </label>
      <Select
        label="בחרו קטגוריה לשיוך המוצרים אצלכם בחנות"
        classLabel="suppliers__label"
        options={options} 
        value={value}
        onChange={handleChange}
      />
      <ListWithRemoveItem label="קישורי מוצרים" classLabel="suppliers__label" classUl="suppliers__ul"/> 
      <button type="button" className='suppliers__button' >משיכת מוצרים</button>   
      <p>We eat {value}!</p>
    </div>
  );
};

export default App;