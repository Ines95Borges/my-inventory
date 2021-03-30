import React, {useRef} from 'react';
import {BsPlusSquareFill, BsSearch} from 'react-icons/bs';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';


const SectionList = (props) => {
  const inputItemName = useRef(null);

  const {
    setInputSearch,
    sections,
    setSections,
    inputDatalist,
    selectedId
  } = props;

  const inputSearchHandler = (e) => {
    setInputSearch(e.target.value);
  }

  function handleSetItem(){
    const itemName = inputItemName.current.value;
    if(inputDatalist) {
      const newSections = [...sections];
      const index = newSections.findIndex(s => s.id === selectedId);
      newSections[index].list.push({id: uuidv4(), text: itemName, quantity: 1});
      console.log(newSections);
      setSections(newSections);
      console.log(sections);
      inputItemName.current.value="";
    }
  }

  return(
    <div className="container">
      <div className="new-item-container">
        <input 
          onChange={inputSearchHandler} 
          type="text" 
          name="new-item-input" 
          id="new-item-input" 
          placeholder="New item"
          ref={inputItemName}
        />
        <BsPlusSquareFill 
          onClick={() => handleSetItem()} 
          id="plus-section-item" 
          size={35}
        />
      </div>
      <div className="search-container">
        <input 
          type="text" 
          name="search-input" 
          id="search-input" 
          placeholder="Search item"
        />
        <BsSearch id="search-section-item" size={35}/>
      </div>
      {sections.map(section => (
        section.list.map(item => (
          <Item 
            key={item.id} 
            item={item} 
            sections={sections} 
            setSections={setSections} 
            inputDatalist={inputDatalist} 
            setSections={setSections}
          />
        ))
      ))}
    </div>
  )
}

export default SectionList;