import {useHistory} from 'react-router-dom'

const Blogcontent = ({blog}) => {
  let history = useHistory()

  const handleDelete = () => {
    fetch(`http://127.0.0.1:8000/api/blog/delete/${blog.slug}`, {
      method: 'DELETE',
    })
    .then(console.log('Post deleted'))
    .then(history.push('/')).catch(err => console.log(err))
  }

    return ( 
        <article className="mx-4 sm:mx-8">
            
            <img
                    className="flex items-center h-80 sm:h-200 justify-center object-cover object-center w-full rounded"
                    src={`http://127.0.0.1:8000${blog.image}/`}
                  />
                  <h1 className="font-sans text-xl font-semibold tracking-tight mb-0 ml-0 mr-0 mt-8">
                    {blog.title}
                  </h1>
                  <div className="mt-5 text-gray-700 text-justify">
                    {blog.description}
                  </div>
                  <div className="flex items-end justify-end my-6 w-full">
                    <button className="border-2 rounded py-2 px-6 mt-4 bg-red-600 text-white" onClick={handleDelete}> Delete </button>
                  </div>
                  <div className="py-6 px-4 bg-gray-50 rounded mt-12">
                    <form className="flex items-start flex-col w-full">
                      <label>Write your comment:</label>
                      <textarea
                        className="bg-white border-gray-200 rounded shadow tracking-tighter py-2 px-3 resize-none text-gray-700 w-full mt-4"
                      cols="5" rows="5"></textarea>
                      <button className="border-2 rounded py-2 px-6 mt-4">Comment</button>
                    </form>
                  </div>

                  </article>
     );
}
 
export default Blogcontent;