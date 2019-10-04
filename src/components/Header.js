import React, { Component } from "react"

class Header extends Component {
    constructor() {
        super()
        this.state={

        }
    }

    render() {
        return (
            <header>
                <img
                    src="https://miro.medium.com/max/800/1*tRpyt-ZEoUwnvzB6EIY-fA.png"
                    alt="trollface" 
                />
                <p>Meme Generator</p>
            </header>
        )
    }
}

export default Header