import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component {
  state = {commentsList: [], name: '', comment: ''}

  onNameChange = event => {
    this.setState({name: event.target.value})
    console.log(event.target.value)
  }

  onCommentChange = event => {
    this.setState({comment: event.target.value})
    console.log(event.target.value)
  }

  onButtonClick = event => {
    event.preventDefault()
    const {name, comment} = this.state

    const intialBackground =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newList = {
      id: uuidv4(),
      date: new Date(),
      name,
      comment,
      isLiked: false,
      backgroundColor: intialBackground,
    }
    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newList],
      name: '',
      comment: '',
    }))
  }

  changeLike = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  isDeleteButtonClick = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.filter(
        eachComment => eachComment.id !== id,
      ),
    }))
  }

  render() {
    const {commentsList, name, comment} = this.state
    return (
      <div className="c-container">
        <div className="input-container">
          <div className="left">
            <h1 className="c-heading">Comments</h1>
            <p className="c-para">Say something about 4.0 Technologies</p>
            <form className="form">
              <input
                type="text"
                className="name"
                placeholder="Your Name"
                value={name}
                onChange={this.onNameChange}
              />
              <br />
              <textarea
                className="text"
                placeholder="Your Comment"
                value={comment}
                onChange={this.onCommentChange}
              />
              <br />
              <button
                type="button"
                className="button"
                onClick={this.onButtonClick}
              >
                Add Comment
              </button>
            </form>
          </div>
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="img"
            />
          </div>
        </div>
        <div>
          <hr className="hr" />
        </div>
        <div className="comments-container">
          <div className="count-comments">
            <p className="count">{commentsList.length}</p>
            <p className="comment">Comments</p>
          </div>
          <ul className="comment-card-container">
            {commentsList.map(eachComment => (
              <CommentItem
                eachComment={eachComment}
                key={eachComment.id}
                changeLike={this.changeLike}
                isDeleteButtonClick={this.isDeleteButtonClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
