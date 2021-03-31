import React, {useState, useEffect} from 'react';
import './App.css';
import Section from './components/Section';
import SectionList from './components/SectionList';

function App() {
  const [inputName, setInputName] = useState("");
  const [sections, setSections] = useState([]);
  const [inputSection, setInputSection] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [inputDatalist, setInputDatalist] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedSection, setSelectedSection] = useState([]);

  const saveLocalSections = () => {
    localStorage.setItem("sections", JSON.stringify(sections));
  }

  const saveLocalName = () => {
    localStorage.setItem("inventoryName", JSON.stringify(inputName));
  }

  const getLocalSections = () => {
    if(localStorage.getItem("sections") === null){
      localStorage.setItem("sections", JSON.stringify([]));
    }else{
      let localSections = JSON.parse(localStorage.getItem("sections"));
      console.log(localSections);
      setSections(localSections);
    }
  }

  const getLocalName = () => {
    if(localStorage.getItem("inventoryName") === null){
      localStorage.setItem("inventoryName", JSON.stringify(""));
    }else{
      let localName = JSON.parse(localStorage.getItem("inventoryName"));
      setSections(localName);
    }
  }

  useEffect(() => {
    getLocalSections();
    getLocalName();
  }, []);

  useEffect(() => {
    saveLocalSections();
  }, [sections]);

  useEffect(() => {
    saveLocalName();
  }, [inputName]);

  useEffect(() => {
    if(selectedSection[0]) {
      const isSectionNameSelected = sections.some(section => section.name === selectedSection[0].name);
      if(isSectionNameSelected) setSelectedId(selectedSection[0].id)
    }
  }, [selectedSection]);



  return (
    <div className="App">
      <header>
        <div className="title">
          <h1><input 
            type="text" 
            placeholder="Your name"
            onChange={(e) => setInputName(e.target.value)}
          /> inventory</h1>
        </div>
      </header>
      <main>
        <Section 
          setInputSection={setInputSection} 
          setSections={setSections} 
          sections={sections} // Array of all the sections and its items
          inputSection={inputSection} // The input that adds a new section
          setInputDatalist={setInputDatalist} //The function to set the input datalist
          setSelectedId={setSelectedId} // The function to set the section id
          setSelectedSection={setSelectedSection}
          selectedSection={selectedSection}
        />
        <SectionList 
          inputSearch={inputSearch} 
          setInputSearch={setInputSearch} 
          sections={sections}
          setSections={setSections}
          inputDatalist={inputDatalist}
          selectedId={selectedId}
          selectedSection={selectedSection}
        />
      </main>
    </div>
  );
}

export default App;
