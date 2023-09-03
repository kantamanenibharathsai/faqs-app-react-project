// Write your code here.
import React from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends React.Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="faqs-container">
        <div className="card-container">
          <h1 className="faq-heading">FAQs</h1>
          <ul className="unordered-list-container">
            {faqsList.map(eachFaqItem => (
              <FaqItem eachFaqItem={eachFaqItem} key={eachFaqItem.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
