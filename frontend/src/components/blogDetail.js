import { useParams } from "react-router-dom";
import useApi from '../hooks/useApi'
import Blogcontent from "./blogContent";

const BlogDetail = () => {
    const {slug} = useParams();
    // console.log(slug)
    const {data: blog, apiStatus, apiError} = useApi(`http://127.0.0.1:8000/api/blog/${slug}/`)
    console.log(blog,apiError,apiStatus)
    return ( 
          <div>
            <div className="w-full">
                  <div className="flex items-center flex-col justify-center my-24 ml-auto mr-auto max-w-5xl w-full">
                  
          {apiError && <span className="text-center text-red-600 m-auto mt-4"> {apiError} </span>}
          {apiStatus && <span className="text-center text-gray-600 m-auto mt-4"> Loading... </span>}

          {blog && <Blogcontent blog={blog}/> }
                  
                </div>
              
            </div>
      </div>

      );
}
 
export default BlogDetail;