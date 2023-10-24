// CommentBox.js
import React, { useState } from 'react';
import './CommentBox.css';
import { useDispatch } from 'react-redux';
import {addCommentToReel} from "../../actions/reelAction";
const CommentBox = ({ onClose, comments,reelId }) => {


  const [comment, setComment] = useState('');
  const [name, setUsername] = useState(''); // You can get the username from the user's session or input

  const dispatch = useDispatch();

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = () => {
    if (comment.trim() !== '' && name.trim() !== '') {
      // Call the action to add the comment
      dispatch(addCommentToReel(reelId, { name, comment }));
      setComment('');
    }
  };

  return (
    <div className="comment-box">
      <div className="comment-header">
        <span>Write a comment</span>
        <button onClick={onClose}>Close</button>
      </div>
      <textarea
        placeholder="Write your comment here..."
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <input
        type="text"
        placeholder="Your username"
        value={name}
        onChange={handleUsernameChange}
      />
      <button onClick={handleSubmit}>Submit</button>
      <div className="previous-comments">
        <h3>Previous Comments:</h3>
        <ul>
          {comments.map((prevComment, index) => (
            <li key={index}>
              <strong>{prevComment.name}:</strong> {prevComment.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentBox;
