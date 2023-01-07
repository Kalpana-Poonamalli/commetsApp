// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachComment, changeLike, isDeleteButtonClick} = props
  const {id, date, name, comment, isLiked, backgroundColor} = eachComment

  const onLikeButtonClicks = () => {
    changeLike(id)
  }

  const isDelete = () => {
    isDeleteButtonClick(id)
  }

  const LikedImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const LikeClassName = isLiked ? 'liked' : 'not-liked'

  return (
    <li className="item-container">
      <div className="">
        <p className={`profile ${backgroundColor}`}>{name[0].toUpperCase()}</p>
      </div>
      <div className="div-container">
        <div className="c">
          <p className="profile-name">{name}</p>
          <p className="date">{formatDistanceToNow(date)} ago</p>
        </div>
        <div>
          <p className="item-para">{comment}</p>
        </div>
        <div className="flexing">
          <div className="like-container">
            <img src={LikedImage} alt="Like" className="like-img" />
            <button
              type="button"
              className={LikeClassName}
              onClick={onLikeButtonClicks}
            >
              Like
            </button>
          </div>
          <button
            type="button"
            className="delete1"
            onClick={isDelete}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              className="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
