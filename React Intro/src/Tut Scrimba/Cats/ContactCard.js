import React from "react"


function ContactCard(props) {

    console.log(props) //to check the props

    return (
        <div className="contact-card">
        <img src={props.contact.imgUrl}/>
        <p className="phone">{props.contact.phone}</p>
        <p className="email">{props.contact.email}</p>
        </div>
    )
}

export default ContactCard

