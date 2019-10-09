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
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit(event) {
        event.preventDefault();
        let randomIndex = Math.floor(Math.random() * this.state.allMemeImgs.length)
        this.setState(
            {randImage: this.state.allMemeImgs[randomIndex].url}
        )
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} 
                      className="meme-form">
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
                <div className="meme"> 
                    <img src={this.state.randImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>

        )
    }
}

export default MemeGenerator
