"use client";

import React ,{useState} from 'react'

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  const handleAddComment =()=>{
    if (newComment.trim() === "") return;
    setComments([...comments, newComment]);
    setNewComment("");

  }
  return (
    <>
    <div className='p-[20px] w-[80%] mx-auto '>
    <h1 className='text-[25px] font-serif'>Comments Section</h1>

    <input 
    type="text"
    value={newComment}
    onChange={(e) => setNewComment(e.target.value)}
    placeholder='Write a comment...'
    className='w-[80%] p-[10px] my-5 '
    
   />
    <br />

    <button onClick={handleAddComment} className='p-[10px] my-5 text-[white] bg-black rounded-md'>
    Add Comment
    </button>

    <div>
    <h3 className='font-serif'>All Comments:</h3>
    <ul className='list-none'>
    {comments.map((comment, index) => (
            <li key={index} className="py-[10px] px-0 border-b-[1px] border-[#ddd]">
              {comment}
            </li>
    ))}
    </ul>
    </div>
    </div>
    </>
  )
}

export default CommentsSection