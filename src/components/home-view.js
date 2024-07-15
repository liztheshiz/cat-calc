import React, { useState, useEffect } from "react";

function HomeView() {
    const [catWeight, setCatWeight] = useState(0);
    const [portionSize, setPortionSize] = useState(0);
    const [stepTwoVisible, setStepTwoVisible] = useState(false);

    useEffect(() => {
        const blurbElement = document.getElementById('cat-blurb');
        const gridElement = document.getElementById('home-grid');
        const inputElements = document.querySelectorAll('.input-element');
        const titleElement = document.getElementById('cat-app-title');

        const handleResize = () => {
            if (window.innerWidth < 639) {
                // smaller than s screens
                gridElement.classList.remove('uk-margin-xlarge-top');
                gridElement.classList.add('uk-margin-medium-top');
                blurbElement.classList.add('uk-text-small');
                inputElements.forEach((inputElement) => inputElement.classList.add('uk-form-small'));
                titleElement.classList.remove('uk-heading-2xlarge');
                titleElement.classList.add('uk-heading-xlarge');
            } else {
                gridElement.classList.add('uk-margin-xlarge-top');
                gridElement.classList.remove('uk-margin-medium-top');
                blurbElement.classList.remove('uk-text-small');
                inputElements.forEach((inputElement) => inputElement.classList.remove('uk-form-small'));
                titleElement.classList.add('uk-heading-2xlarge');
                titleElement.classList.remove('uk-heading-xlarge');
            }

            if (window.innerWidth < 959) {
                // smaller than m screens
            }

            if (window.innerWidth < 1199) {
                // smaller than l screens
            }

            if (window.innerWidth < 1599) {
                // smaller than xl screens
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getPortionSize = () => {
        const catType = document.getElementById("cat-types").value;

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
                <div className="uk-grid-divider uk-margin-xlarge-top" uk-grid="true" id="home-grid">
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-2-5@m uk-width-1-2@l">
                        <h1 id="cat-app-title" className="uk-heading-2xlarge">Cat Calc</h1>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@s uk-width-1-2@l">
                        <p id="cat-blurb" className="uk-margin">
                            Do you need to re-assess pussy portion sizes? Have you been dumping food into your cat's
                            bowl and letting it choose how much it wants to eat and now it's fat? Is your feline
                            friend simply watching its figure? You are in the right place! Enter your cat's profile
                            and weight to calculate its ideal daily calories.
                        </p>
                        <form id="cat-form" className="uk-form-horizontal">
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="cat-types">Select a cat profile:</label>
                                <div className="uk-form-controls uk-margin-remove-left">
                                    <select className="uk-select uk-form-width-medium input-element" name="cat-types" id="cat-types">
                                        <option value="typical-spayed">Typical, spayed/neutered</option>
                                        <option value="typical-intact">Typial, intact</option>
                                        <option value="typical-gain-prone">Typical, weight-gain prone</option>
                                        <option value="overweight">Overweight, in need of weight loss</option>
                                    </select>
                                </div>
                            </div>
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="cat-weight">Enter your cat's weight:</label>
                                <div className="uk-form-controls uk-margin-remove-left">
                                    <input className="uk-input uk-form-width-small input-element" id="cat-weight" type="number" onChange={evt => setCatWeight(evt.target.value)}></input>
                                </div>
                            </div>
                        </form>
                        <button id="calc-button" className="uk-button uk-button-secondary uk-margin-top" onClick={handleCalculate}>Calculate</button>
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