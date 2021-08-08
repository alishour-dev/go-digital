import React, { useState } from 'react'
import { navigate } from 'gatsby-link'
import "../styles/contact.scss"
import Headline from './Headline'
import phone from "../images/phone.svg"
import guy from "../images/guy.svg"
import { FcIdea } from "react-icons/fc";


function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }

const Contact = () => {

    const [state, setState] = useState();

    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({
            'form-name': form.getAttribute('name'),
            ...state,
          }),
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch((error) => alert(error))
      }

    return (

        <div className="contact" id="contact">
            <Headline 
                title={'Got an idea?'}
                icon={<FcIdea className="headline-icon"/>}
                info={'Let’s help you grow and boost your sales!'}
            />
            <div className="contact-container">
                <div className="left-info">
                    <img src={guy} alt="contact information" />
                </div>
                <div className="form-container">
                    <img src={phone} alt="form structure" className="phone"/>
                    <form 
                        className="form" 
                        onSubmit={handleSubmit} 
                        name="contact" 
                        method="post" 
                        action="/thanks/" 
                        data-netlify="true" 
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="contact" value="contact" />
                        <p className="hidden">
                            <label id="contact-form-bot-label"
                                >Don't fill this out if you're human: <input name="bot-field" aria-labelledby="contact-form-bot-label"
                            /></label>
                        </p>
                        <div className="row">
                            <input type="text" name="name" onChange={handleChange} placeholder="Full name"/>
                        </div>
                        <div className="row">
                            <input type="email" name="email" onChange={handleChange} placeholder="Email"/>
                        </div>
                        <div className="row">
                            <label>
                                Interested in:
                                <select name="option" onChange={handleChange}>
                                    <option name="instagram" value="instagram">Instagram Campaign</option>
                                    <option name="facebook" value="facebook">Facebook Campaign</option>
                                    <option name="billboards" value="billboards">Billborads</option>
                                    <option name="package" value="package">Full Package</option>
                                    <option name="other" value="other">Other</option>
                                </select>
                            </label>
                        </div>
                        <div className="row">
                            <textarea name="message" onChange={handleChange} placeholder="Message"/>
                        </div>
                        <div className="row custom-row">
                            <input type="submit" />
                        </div>
                    </form>
                </div>
            </div>
            </div>
    )
}

export default Contact
