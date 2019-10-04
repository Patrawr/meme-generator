import React, { Component } from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state={
            topText: "",
            bottomText: "",
            randImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.fetchImage = this.fetchImage.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
        this.fetchImage()
    }

    fetchImage() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
        
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleChange(event) {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <form className="meme-form">
                    <input type="text" 
                           name="topText" 
                           placeholder="Top Line Text" 
                           value={this.state.topText}
                           onChange={this.handleChange}
                    ></input>
                    <input type="text" 
                           name="bottomText" 
                           placeholder="Bottom Line Text" 
                           value={this.state.bottomText}
                           onChange={this.handleChange}
                           >
                           </input>

                    <button>Generate Meme</button>
                </form>
            </div>

        )
    }
}

export default MemeGenerator
