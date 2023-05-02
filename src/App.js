import Form from "./Form";

import { useState, useEffect } from "react";


function App() {

  const [ items, setItems ] = useState([])
  const [ reqType, setReqType ] = useState('users')

  const API_URL = 'https://jsonplaceholder.typicode.com/'


  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`${API_URL}${reqType}`)
      const data = await response.json()
      console.log(data)
    }
    fetchItems()
  }, [reqType])


  return (
  <div className="App">
    <Form 
      reqType={reqType} 
      setReqType={setReqType}
    />
    </div>
  );
}

export default App;
