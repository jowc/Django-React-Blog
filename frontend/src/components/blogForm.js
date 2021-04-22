const BlogForm = () => {
    /*        
     "image": "/media/images/pexels-pixabay-235805_C3rp14l.jpg",
    */

    let postData = {
        slug : 'testing-post',
        media : null,
        title : 'Testing Post',
        description : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil similique placeat a consequuntur',
        category : 'Business',
        publish_date : null,
        User : 1,
    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch('http://127.0.0.1:8000/api/blog-create/', {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify(postData)
        })
        .then(data => console.log('successful',data))
        .catch(err => console.log(err.message))
    }




    return ( 
        <div className="max-w-2xl my-24 flex flex-col m-auto justify-items-center align-items-center">
            <div className="mt-4 shadow p-12 max-w-screen-sm border-red-900 border-2">
                <header className="text-center text-2xl">Add New Blog</header>
                <form className="border-2 border-red-900 my-4" onSubmit={handleSubmit} encType="multipart/form-​data">
                    <div>
                        <label>Title</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default BlogForm;