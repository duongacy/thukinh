const Model = (props) => {
    return (
        <div className="d-flex justify-content-center gap-3">
            <div className="home__card-model">
                <img className="home__model-img" src="./glassesImage/model.jpg" />
            </div>
            <div className="home__card-model">
                <img className="home__model-img" src="./glassesImage/model.jpg" />
                <img className="home__glass-img"  {...props.glass} />
            </div>
        </div>
    );
}

export default Model;