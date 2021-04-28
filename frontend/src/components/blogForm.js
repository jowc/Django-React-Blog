import { useRef, useState } from "react"
import { useHistory } from "react-router"

const BlogForm = () => {
    let history = useHistory()

     const [title, editTitle] = useState('')
     const [media, editMedia] = useState('')
     const ref = useRef()
     const [content, editContent] = useState('')
     const [category, editCategory] = useState('Tech')

    let postData = {
        image : media,
        title : title,
        content : content,
        category : category,
        author : 1,
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(postData)

        fetch('http://127.0.0.1:8000/api/blog-create/', {
            method: 'POST',
            headers: {'Content-Type': "multipart/form-data"},
            body: JSON.stringify(postData)
        })
        .then(
            data => console.log('successful',data)
        )
        .then(history.push('/'))
        .catch(err => console.log(err.message))
    }




    return ( 
        <div className="max-w-2xl my-24 flex flex-col m-auto justify-items-center align-items-center p-2">
            <div className="mt-4 shadow p-6 sm:p-12 max-w-screen-sm rounded-md shadow-md">
                <header className="text-center text-2xl">Add New Blog</header>
                <form className="" onSubmit={handleSubmit} encType="multipart/form-​data" className="flex flex-col space-y-4">
                    <div className="w-full flex flex-col mt-4">
                        <label>Title</label>
                        <input type="text" className=" bg-blue-100 mt-2 shadow rounded p-2 focus:outline-none focus:ring focus:border-blue-600" onChange={e => editTitle(e.target.value)}/>
                    </div>
                    <div className="w-full flex flex-col">
                        <label>Image</label>
                        <input type="file" accept="image/png, image/jpeg" className="mt-2  bg-blue-100 shadow rounded p-2 focus:outline-none focus:ring focus:border-blue-600" 
                         onChange={() => editMedia(ref.current.files[0])}
                         ref={ref}
                        />
                    </div>
                    <div className="w-full flex flex-col ">
                        <label>Content</label>
                        <textarea className="w-full h-32 mt-2 p-3 bg-blue-100 shadow rounded focus:outline-none focus:ring focus:ring-inset focus:border-blue-600" onChange={e => editContent(e.target.value)}></textarea>
                    </div>
                    <div className="w-full flex flex-col ">
                        <label>Category</label>
                        <select className="mt-2 shadow rounded p-2  focus:outline-none focus:ring focus:ring-inset focus:border-blue-600"
                        value={category} onChange={e => editCategory(e.target.value)}
                        >
                            <option value="Business" className="option-none hover:bg-blue-500">Business</option>
                            <option value="Tech" className="hover:bg-blue-500">Tech</option>
                            <option value="UI/UX" className="hover:bg-blue-500">UI/UX</option>
                        </select>
                    </div>
                    <div className="w-full flex flex-col my-4 align-center">
                        <button type="submit" className="mt-4 py-3 shadow-md bg-blue-600 text-white hover:bg-blue-700 rounded-md focus:outline-none focus:ring focus:ring-inset focus:border-blue-600">Submit</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default BlogForm;