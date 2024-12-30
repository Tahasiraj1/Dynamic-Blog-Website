'use client'

import { useState } from 'react'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Comments() {
  const [comments, setComments] = useState<string[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, newComment])
      setNewComment('')
    }
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <ul className="mb-4">
        {comments.map((comment, index) => (
          <li key={index} className="mb-2 p-2 rounded">
            {comment}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <Textarea
          className="w-full p-2 border rounded mb-2"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          rows={3}
        />
        <Button
          variant="expandIcon"
          iconPlacement='right'
          Icon={IoIosArrowRoundForward}
          type="submit"
          className="bg-primary text-primary-foreground px-4 py-2 rounded-full"
        >
          Add Comment
        </Button>
      </form>
    </div>
  )
}


