import React, { useState } from 'react';
import css from './/Filter.module.css';

const Filter = ({ onChange }) => {
const [value, setValue] = useState('');

const handleChange = (event) => {
setValue(event.target.value);
onChange(event.target.value);
};

return (
<label>
<p className={css.label__text}>filter</p>
<input
     className={css.label__input}
     type="text"
     value={value}
     onChange={handleChange}
   />
</label>
);
};

export default Filter;