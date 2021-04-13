import { useState, useEffect } from 'react';
// import dummyData from '../testjson'
import Bloglist from './bloglist';
import SearchBar from './searchbar';

function Blogs() {
  const axios = require('axios');
  let [blogs, editblogs]= useState( null )
  let [Name, setName] = useState('Joe')
  let [apiStatus, setStatus] = useState(true)
  let [apiError, setApiError] = useState(null)

  useEffect(()=> {
    fetch('http://127.0.0.1:8000/api/blog/list/?format=json')
            .then(res=> {
              // console.log(res.json())
              return res.json()

          })
          .then(res=>{
              editblogs(res)
              setStatus(false)
              setApiError(false)
          })
          .catch( e => {
            // console.log(e.message);
            setStatus(false)
            // throw "Server error"
            setApiError(e.message)
          })
          .then( ()=> {
            // always executed
          });
  }, [])
  // Post request code here
  /*
  axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  */
  // console.log(blogs)
  return (
    <div className="my-28 ">
      < SearchBar blogs={blogs} user={Name}/>
      <div className="m-auto w-full" >
      {apiError && <span className="text-center text-red-600 m-auto mt-4"> {apiError} </span>}
      {apiStatus && <span className="text-center text-red-600 m-auto mt-4"> Loading... </span>}
      {blogs && <Bloglist blogs={blogs}/> }         
      </div> 
    </div>        
          )
}

export default Blogs;
