function Home() {
    return (
        <div className="uk-container uk-container-large">
            <h1>Cat Calc</h1>
            <form className="uk-form-horizontal uk-margin-large">
                <div className="uk-margin">
                    <label className="uk-form-label" for="cat-types">Select a cat profile:</label>
                    <div className="uk-form-controls">
                        <select className="uk-select uk-form-width-large" name="cat-types" id="cat-types">
                            <option value="typical-spayed">Typical, spayed/neutered</option>
                            <option value="typical-intact">Typial, intact</option>
                            <option value="typical-gain-prone">Typical, weight-gain prone</option>
                            <option value="overweight">Overweight, in need of weight loss</option>
                        </select>
                    </div>
                </div>
                <div className="uk-margin">
                    <label className="uk-form-label" for="cat-weight">Enter your cat's weight:</label>
                    <input className="uk-input uk-form-width-small" id="cat-weight" type="number"></input>
                </div>
            </form>
        </div>
    );
}

export default Home;