function HomeView() {
    return (
        <div className="home uk-container uk-container-small">
            <div className="uk-grid-divider uk-margin-xlarge-top" uk-grid="true">
                <div className="uk-width-1-2">
                    <h1 className="uk-heading-large">Cat Calc</h1>
                    <p className="uk-margin">
                        Do you need to re-assess pussy portion sizes? Have you been dumping food into your cat's
                        bowl and letting it choose how much it wants to eat and now it's fat? Is your feline
                        friend simply watching its figure? You are in the right place! Enter your cat's profile
                        and weight to calculate its ideal daily calories.
                    </p>
                </div>
                <div className="uk-width-1-2 uk-margin-auto-vertical">
                    <form className="uk-form-horizontal cat-form">
                        <div className="uk-margin">
                            <label className="uk-form-label" htmlFor="cat-types">Select a cat profile:</label>
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
                            <label className="uk-form-label" htmlFor="cat-weight">Enter your cat's weight:</label>
                            <div className="uk-form-controls">
                                <input className="uk-input uk-form-width-small" id="cat-weight" type="number"></input>
                            </div>
                        </div>
                    </form>
                    <button form="cat-form" className="uk-button uk-button-secondary">Calculate</button>
                </div>
            </div>
        </div>
    );
}

export default HomeView;