import React from "react"
import UserInfo, { UserButton } from './UserInfo'

export default class Header extends React.Component {
    render() {

        return (
            <nav>
                    <a href="#">Home</a>
                    <a href="#" className="current">Products</a>
                    <a href="#">Stores</a>
                    <a href="#">Customers</a>
                    <UserButton />
                </nav>
        )
    }

}
