import React from "react";

export default function Header(props) {
    return (
        <div>
            <h1>Hello My Name is {props.name}</h1>
            <h1> My Surname is {props.surname}</h1>
            <h1> My PHONE Number is {props.number}</h1>
            <h1> My email.adress is {props.email}</h1>
        </div>
    )
}