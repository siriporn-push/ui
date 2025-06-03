import React, { useState } from 'react'; 
import './App.css';
import TagInput from './components/TagInput';

function App() {
    const [tags, setTags] = useState<string[]>([]);
  return (
    <>
      <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tag Input Demo</h1>
      <TagInput
        value={tags}
        onChange={setTags}
        separator=","  
        maxTags={10}
        placeholder="Type and press Enter or comma"
      />
      {/* <p className="mt-4 text-sm text-gray-600">Tags: {JSON.stringify(tags)}</p> */}
    </div>
    </>
  );
}

export default App;
