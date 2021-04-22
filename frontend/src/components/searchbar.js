import {useState} from 'react'
import searchHook from '../hooks/searchHook'
import Bloglist from './bloglist'

const SearchBar = () => {
    const {data: blogs, apiStatus, apiError} = searchHook(`http://127.0.0.1:8000/api/blog/list/`)

    // editData(null)
    
    let [query, editQuery] = useState('')
    if (blogs){
        let searchResult = blogs.filter(res => res.title.includes(query))
    console.log(searchResult)

    }
    const handleSearch = (e) => {
        e.preventDefault()
        let search = document.querySelector('#query').value
        editQuery(search)
        let searchResult = blogs.filter(res => res.title.includes(query))
        blogs = searchResult
        console.log(query)
    }

    return ( 
        <div>
            <div className="mb-10 w-full flex justify-center">
            <form onSubmit={handleSearch}>
            <input type="search" placeholder="Search Article" className="shadow-md focus:ring-2 focus:ring-blue-600 active:ring-blue-600 text-center border-solid py-2 px-4 text-gray-600" id="query" name="q" />
            <button className="py-2 px-4 ml-1 bg-blue-600 text-white rounded text-semibold">Search</button>
            </form>
            </div>
            <div className="m-auto w-full" >
            <div className="flex flex-col">
            {apiError && <span className="text-center text-red-600 m-auto mt-4"> {apiError} </span>}
            {apiStatus && <span className="text-center text-gray-600 m-auto mt-4"> Loading... </span>}
            </div>
            {/* {blogs && <h2 className="text-center text-xl"> You searched for: {query}</h2>} */}
            {blogs && <Bloglist blogs={blogs.filter( res => res.title.includes(query) )}/> }         
            </div> 
        </div>
     );
}
 
export default SearchBar;