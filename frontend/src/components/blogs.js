import { useState } from 'react';
import dummyData from '../testjson'

function Blogs() {
  const axios = require('axios');
  let [blogs, editblogs]= useState(
    dummyData
  )
  // axios.get('http://127.0.0.1:8000/api/blog/list/?format=json')
  //         .then((response) => {
  //           console.log(response)
  //           return editblogs(response.data)
  //       })
  //       .catch( (error) => {
  //         // handle error
  //         console.log(error);
  //       })
  //       .then( ()=> {
  //         // always executed
  //       });
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
  console.log(blogs)
  return (
    <div className="mb-28 ml-0 mr-0 mt-28 w-full blog-content">
    <div className="mb-0 ml-auto mr-auto mt-0 max-w-5xl w-full" >
    {
    blogs.map( (blog) => (
        <div className="rounded-md flex m-0 space-x-4 w-full" key={blog.id}>
        <div className="w-full sm:w-6/12 xl:w-4/12 p-5">
          <img
            className="rounded-bl-none rounded-br-none rounded-tl-md rounded-tr-md shadow-lg h-48 object-cover w-full center-center"
            src={'http://127.0.0.1:8000' + blog.image}
            alt=""
          />
          <div className="bg-blue-600 p-4">
            <h1 className="font-sans text-lg font-semibold tracking-tight text-left text-white">
              {blog.title}
            </h1>
          </div>
          <div className="flex flex-row w-full">
            <div className="bg-warmGray-100 rounded-md shadow-sm pb-5 pl-1 pr-1 pt-1 w-full">
              <h1 className="font-sans text-xl font-semibold tracking-tight m-4 text-left">
              {blog.category}
              </h1>
              <div className="m-4 text-left">
              {blog.description.slice(0, 80)}<b>...</b>
              </div>
              <div className="flex justify-start m-3">
                <button
                  className="border-blue-600 rounded-lg border-2 shadow-md font-medium pb-1 pl-4 pr-4 pt-1 text-right text-blue-600"
                  href="#"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
          ))
        }          

    </div> 
    </div>        
          )
}

export default Blogs;
