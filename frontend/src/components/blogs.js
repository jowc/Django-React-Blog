import useApi from '../hooks/useApi';
// import dummyData from '../testjson'
import Bloglist from './bloglist';
import SearchBar from './searchbar';

function Blogs() {
  // const axios = require('axios');
  const {data: blogs, apiStatus, apiError} = useApi('http://127.0.0.1:8000/api/blog/list/')
  
  // console.log(blogs)
  return (
    <div className="my-28 ">
      < SearchBar blogs={blogs}/>
      <div className="m-auto w-full" >
        <div className="flex flex-col">
          {apiError && <span className="text-center text-red-600 m-auto mt-4"> {apiError} </span>}
          {apiStatus && <span className="text-center text-gray-600 m-auto mt-4"> Loading... </span>}
        </div>
      {blogs && <Bloglist blogs={blogs}/> }         
      </div> 
    </div>        
          )
}

export default Blogs;
