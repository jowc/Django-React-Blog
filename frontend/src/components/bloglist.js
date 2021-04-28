import {Link} from 'react-router-dom'

const Bloglist = ({blogs}) => {
    return ( 
        <div className="flex flex-wrap">
      {
      blogs.map( (blog) => (
          <div className="rounded-md flex m-0 space-x-4 w-full sm:w-1/2 md:w-4/12 xl:w-3/12" key={blog.id}>
          <div className="p-5">
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
                {blog.content.slice(0, 80)}<b>...</b>
                </div>
                <div className="flex justify-start m-3">
                  <div
                    className="border-blue-600 rounded-lg border-2 shadow-md font-medium pb-1 pl-4 pr-4 pt-1 text-right text-blue-600"
                    >
                      <Link to={`/blogdetail/${blog.slug}`}>Read More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
            ))
          }
    </div> 
     );
}
 
export default Bloglist;