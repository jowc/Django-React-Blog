import {useState} from 'react'

const Postcomment = () => {
    const [comment, setComment] = useState(null)
    const [user, setUser] = useState(null)

    const handleComment = e => {
        e.preventDefault()
    
        const post_comment = {comment, user}
        console.log(post_comment)
      }

    return ( 
        <form className="flex items-start flex-col w-full" onSubmit={handleComment}>
                      <label>Write your comment:</label>
                      <textarea
                        className="bg-white border-gray-200 rounded shadow tracking-tighter py-2 px-3 resize-none text-gray-700 w-full mt-4"
                      cols="5" rows="5" onChange={e => setComment(e.target.value)}></textarea>
                      <button className="border-2 rounded py-2 px-6 mt-4">Comment</button>
        </form>
     );
}
 
export default Postcomment;