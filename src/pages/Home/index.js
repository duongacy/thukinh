import React, { Component } from 'react'
import data from "./data";
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            glass: {
                src: ""
            }
        }
    }
    glassData = data;
    handleSelectGlass = (src) => {
        this.setState({
            glass: {
                src: src
            }
        })
    }
    render() {
        return (
            <div className="homepage" style={{ backgroundImage: "url(./glassesImage/background.jpg)" }}>
                <div className="homepage__overlay-title">
                    try glasses app online
                </div>
                <div className="container">
                    <div className="d-flex justify-content-center gap-3">
                        <div className="home__card-model">
                            <img className="home__model-img" src="./glassesImage/model.jpg" />
                        </div>
                        <div className="home__card-model">
                            <img className="home__model-img" src="./glassesImage/model.jpg" />
                            <img className="home__glass-img" {...this.state.glass} alt="" />
                        </div>
                    </div>
                    <div className="row p-2 border m-0 bg-white">
                        {
                            this.glassData.map(item => (
                                <div className="col-4 p-2">
                                    <button className="home__glass-btn" style={{ backgroundImage: `url("${item.btnUrl}")` }}
                                        onClick={() => {
                                            this.handleSelectGlass(item.url)
                                        }}
                                    >
                                    </button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;