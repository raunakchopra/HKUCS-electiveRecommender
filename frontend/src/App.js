import { useState } from 'react'
import axios from 'axios'

const getCourses = (keyword) => {
  const data = axios.get('', {
    params: {
      keyword: keyword
    }
  })
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.log(err)
  })
}

function App() {
  const [keyword, setKeyword] = useState("")
  const [courses, setCourses] = useState([])

  const callAPI = () => {
    setCourses(getCourses(keyword))
  }

  return (
    <div> 
      <input 
        type="text" 
        value={keyword}
        onChange={() => setKeyword(keyword)}
      >
      </input>
      <button onClick={() => }>Submit</button>     
    </div>
  );
}

export default App;
