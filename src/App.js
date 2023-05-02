import Form from "./Form";
import List from "./List";

import { useState, useEffect } from "react";


function App() {

  const [ items, setItems ] = useState([])
  const [ reqType, setReqType ] = useState('users')

  const API_URL = 'https://jsonplaceholder.typicode.com/'


  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${API_URL}${reqType}`)
      const data = await response.json()
      setItems(data)
    }
    fetchItems()
  }, [reqType])


  return (
  <div>
    <Form 
      reqType={reqType} 
      setReqType={setReqType}
      />
    <List 
      items={items} 
      setItems={setItems}
      />
    </div>
  );
}

export default App;
