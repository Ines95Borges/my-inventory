import React, {useState, useEffect} from 'react';
import './App.css';
import Section from './components/Section';
import SectionList from './components/SectionList';

function App() {
  const [sections, setSections] = useState([]);
  const [inputSection, setInputSection] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [inputDatalist, setInputDatalist] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [selectedSection, setSelectedSection] = useState(null);

  useEffect(() => {
    if(selectedSection) setSelectedId(selectedSection[0].id);
  }, [selectedSection]);

  return (
    <div className="App">
      <header>
        <div className="title">
          <h1><input type="text" placeholder="Your name"/> inventory</h1>
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
        />
        <SectionList 
          inputSearch={inputSearch} 
          setInputSearch={setInputSearch} 
          sections={sections}
          setSections={setSections}
          inputDatalist={inputDatalist}
          selectedId={selectedId}
        />
      </main>
    </div>
  );
}

export default App;
