import React from 'react'

const CommentCard = ({comment}) => {
  return (
    <div className='outline rounded-lg p-4 bg-white shadow-lg flex flex-col gap-2'>
       <p className='text-lg font-bold capitalize'>{comment.user.firstName} {comment.user.lastName}:</p>
       <p className='text-md max-w-lg capitalize'>{comment.comment}</p>
    </div>
  )
}

export default CommentCard
