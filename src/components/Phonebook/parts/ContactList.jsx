import React from "react";
import css from './/ContactList.module.css'

const ContactList = ({ contactsAray, onDelete }) => {
return (
<ul>
{contactsAray.map(({ id, name, number }) => (
<ContactItem
key={id}
name={name}
number={number}
onDelete={() => onDelete(id)}
/>
))}
</ul>
);
};

const ContactItem = ({ name, number, onDelete }) => {
return (
<li className={css.list__item}>
{name}: {number}
<button
     className={css.list__btnDelete}
     type="button"
     onClick={onDelete}
   >
delete
</button>
</li>
);
};

export default ContactList;