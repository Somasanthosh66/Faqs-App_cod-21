// Write your code here.

import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="sub-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-list">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
