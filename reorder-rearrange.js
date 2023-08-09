import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import  { useState } from 'react';

const DragAndDropList = () => {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);

  const handleDrag = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDrop = (e, targetIndex) => {
    const sourceIndex = e.dataTransfer.getData('index');
    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(sourceIndex, 1);
    updatedItems.splice(targetIndex, 0, movedItem);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Drag and Drop List</h1>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            draggable
            onDragStart={(e) => handleDrag(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleDrop(e, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDropList;
