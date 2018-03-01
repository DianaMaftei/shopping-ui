import React from 'react';
import styles from "./ShoppingList.css";

const shoppingListItem = "shoppingListItem";

const ShoppingList = (items, visibilityFilter, onClickItem) => (
  <div className={styles.ShoppingList + ' ' + styles[visibilityFilter]}>
    {
      items.map((item, index) => <div key={index}
                                     className={styles[item.checked?'checked':'unchecked']}
                                     id={item.id}
                                     onClick={() => onClickItem(item)}>{item.text}</div>)
    }
  </div>
);

export default ShoppingList;
