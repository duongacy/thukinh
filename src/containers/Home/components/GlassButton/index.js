import React from "react";

const GlassButton = (props) => {
    return (
        <div className="col-4 p-2 d-flex justify-content-center">
            <button className="home__glass-btn"
                style={{
                    backgroundImage: `url("${props.item.btnUrl}")`
                }}
                onClick={props.handleSelectGlass}
            >
            </button>
        </div>);
}

export default GlassButton;

