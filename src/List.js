import React from 'react'
import LineItem from './LineItem'

const List = ({ items, setItems }) => {
  return (
    <ul>
        {items.map((item) => 
            <LineItem 
                key={item.id} 
                item={item}
                />
    )}
    </ul>
  )
}

export default List