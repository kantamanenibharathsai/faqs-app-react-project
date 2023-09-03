// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isAnswerDisplayed: false}

  onClickDisplayOrHideAnswer = () => {
    this.setState(prevState => ({
      isAnswerDisplayed: !prevState.isAnswerDisplayed,
    }))
  }

  render() {
    const {eachFaqItem} = this.props
    const {questionText, answerText} = eachFaqItem

    const {isAnswerDisplayed} = this.state
    const iconUrl = isAnswerDisplayed
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isAnswerDisplayed ? 'minus' : 'plus'

    return (
      <li className="list-item">
        <div className="question-btn-container">
          <h1 className="question">{questionText}</h1>
          <button
            type="button"
            className="button"
            onClick={this.onClickDisplayOrHideAnswer}
          >
            <img src={iconUrl} alt={altText} className="icon" />
          </button>
        </div>
        {isAnswerDisplayed && (
          <div>
            <hr className="horizontal-line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
