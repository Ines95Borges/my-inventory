import React from 'react';
import {TiTimesOutline} from 'react-icons/ti';
import {AiFillMinusCircle, AiFillPlusCircle} from 'react-icons/ai';


const Item = ({item, sections, inputDatalist, setSections}) => {
  const deleteItem = () => {
    const newSections = [...sections];
    const newSection = newSections.filter(section => section.name === inputDatalist)
    console.log(newSection);
    const filteredList = newSection[0].list.filter(i => i.id !== item.id);
    newSection[0].list = filteredList;

    const index = newSections.findIndex(section => section.name === inputDatalist);
    console.log(index);
  }

  return(
    <>
      <TiTimesOutline 
        id="delete-item" 
        size={25}
        onClick={deleteItem}
      />
      <p id="item-text">{item.text}</p>
      <div className="amount">
        <AiFillMinusCircle 
          id="minus-amount" 
          size={25}
        />
        <p className="amount-text">{item.quantity}</p>
        <AiFillPlusCircle 
          id="plus-amount" 
          size={25}
        />
      </div>
    </>
  )
}

export default Item;