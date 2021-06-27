import React, { Component } from 'react';
import data from "../../services/data";
import GlassButton from './components/GlassButton';
import Model from './components/Model';

class Home extends Component {
    state = {
        glass: {
            src: ""
        }
    }
    glassData = data;
    handleSelectGlass = (item) => {
        this.setState({
            glass: {
                src: item.url,
                alt:item.name
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
                    <Model glass={this.state.glass}/>
                    <div className="row p-2 border m-0 bg-white">
                        {
                            this.glassData.map((item, key) => (
                                <GlassButton item={item} key={key} handleSelectGlass={() => {
                                    this.handleSelectGlass(item)
                                }} />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;