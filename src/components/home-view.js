import React, { useState, useEffect } from "react";

function HomeView() {
    const [width, setWidth] = useState(window.innerWidth);
    const [catWeight, setCatWeight] = useState(0);
    const [portionSize, setPortionSize] = useState(0);
    const [stepTwoVisible, setStepTwoVisible] = useState(false);

    const blurbElement = document.getElementById('cat-blurb');

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);

            if (window.innerWidth < 1599) {
                // smaller than xl screens
            } else if (window.innerWidth < 1199) {
                // smaller than l screens
            } else if (window.innerWidth < 959) {
                // smaller than m screens
                blurbElement.classList.add('uk-text-small')
            } else if (window.innerWidth < 639) {
                // smaller than s screens
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getPortionSize = () => {
        const catType = document.getElementById("cat-types").value;
        console.log(catType);
        console.log(catWeight);
        if (catType == "typical-spayed") {
            return (267.653 - 226.342 * catWeight ** 0.0279704) * catWeight;
        } else if (catType == "typical-intact") {
            return (272.181 - 224.12 * catWeight ** 0.0322764) * catWeight;
        } else if (catType == "typical-gain-prone") {
            return (217.056 - 182.63 * catWeight ** 0.028633) * catWeight;
        } else if (catType == "overweight") {
            return (160.762 - 133.164 * catWeight ** 0.0314387) * catWeight;
        }
    };

    const handleCalculate = () => {
        setPortionSize(getPortionSize());
        setStepTwoVisible(true);
    };

    return (
        <>
            <div className="home uk-container uk-container-small uk-margin-remove-left uk-margin-remove-right uk-margin-auto-left@s uk-margin-auto-right@s">
                <p>{width}</p>
                <div className="uk-grid-divider uk-margin-xlarge-top" uk-grid="true">
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-2-5@m uk-width-1-2@l">
                        <h1 className="uk-heading-2xlarge cat-app-title">Cat Calc</h1>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@l">
                        <p id="cat-blurb" className="uk-margin responsive-text">
                            Do you need to re-assess pussy portion sizes? Have you been dumping food into your cat's
                            bowl and letting it choose how much it wants to eat and now it's fat? Is your feline
                            friend simply watching its figure? You are in the right place! Enter your cat's profile
                            and weight to calculate its ideal daily calories.
                        </p>
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
                                    <input className="uk-input uk-form-width-small" id="cat-weight" type="number" onChange={evt => setCatWeight(evt.target.value)}></input>
                                </div>
                            </div>
                        </form>
                        <button form="cat-form" className="uk-button uk-button-secondary" onClick={handleCalculate}>Calculate</button>
                    </div>
                </div>
            </div>
            {stepTwoVisible && <div className="uk-container uk-container-small">
                <p>Your cat's ideal portion size is around <span className="uk-text-bold">{parseInt(portionSize)} kcal/day</span></p>
            </div>}
        </>
    );
}

export default HomeView;