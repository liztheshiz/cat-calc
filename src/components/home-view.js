import React, { useState, useEffect } from "react";

function HomeView() {
    const [catType, setCatType] = useState('typical-spayed');
    const [catWeight, setCatWeight] = useState(0);
    const [portionSize, setPortionSize] = useState(0);
    const [stepTwoVisible, setStepTwoVisible] = useState(false);

    useEffect(() => {
        const blurbElement = document.getElementById('cat-blurb');
        const homeElement = document.getElementById('home');
        const gridElement = document.getElementById('home-grid');
        const gridItems = document.querySelectorAll('.home-grid__item');
        const inputElements = document.querySelectorAll('.input-element');
        const titleElement = document.getElementById('cat-app-title');
        const calcButton = document.getElementById('calc-button');
        const resultElement = document.getElementById('result-blurb');

        const handleResize = () => {
            if (window.innerWidth < 639) {
                // smaller than s screens
                gridElement.classList.remove('uk-margin-xlarge-top');
                gridElement.classList.add('uk-margin-medium-top');
                blurbElement.classList.add('uk-text-small');
                resultElement.classList.add('uk-text-small');
                inputElements.forEach((inputElement) => inputElement.classList.add('uk-form-small'));
                titleElement.classList.remove('uk-heading-2xlarge');
                titleElement.classList.add('uk-heading-xlarge');
            } else {
                gridElement.classList.add('uk-margin-xlarge-top');
                gridElement.classList.remove('uk-margin-medium-top');
                blurbElement.classList.remove('uk-text-small');
                resultElement.classList.remove('uk-text-small');
                inputElements.forEach((inputElement) => inputElement.classList.remove('uk-form-small'));
                titleElement.classList.add('uk-heading-2xlarge');
                titleElement.classList.remove('uk-heading-xlarge');
            }

            if (window.innerWidth < 959) {
                // smaller than m screens
                calcButton.classList.add('uk-margin-small-top');
                calcButton.classList.remove('margin-left-200');
                if (window.innerWidth >= 639) {
                    homeElement.classList.remove('uk-container-small');
                    gridElement.classList.add('uk-width-xlarge-custom');
                    gridElement.classList.add('uk-align-center');
                    gridItems.forEach((item) => item.classList.add('uk-padding-remove-left'));
                } else {
                    homeElement.classList.add('uk-container-small');
                    gridElement.classList.remove('uk-width-xlarge-custom');
                    gridElement.classList.remove('uk-align-center');
                    gridItems.forEach((item) => item.classList.remove('uk-padding-remove-left'));
                }
            } else {
                calcButton.classList.remove('uk-margin-small-top');
                calcButton.classList.add('margin-left-200');
                homeElement.classList.add('uk-container-small');
                gridElement.classList.remove('uk-width-xlarge-custom');
                gridElement.classList.remove('uk-align-center');
                gridItems.forEach((item) => item.classList.remove('uk-padding-remove-left'));
            }

            if (window.innerWidth < 1199) {
                // smaller than l screens
                if (window.innerWidth >= 959) {
                    titleElement.classList.add('uk-margin-large-top');
                    calcButton.classList.remove('uk-margin-small-top');
                } else {
                    titleElement.classList.remove('uk-margin-large-top');
                    calcButton.classList.add('uk-margin-small-top');
                }
            } else {
                titleElement.classList.remove('uk-margin-large-top');
                calcButton.classList.add('uk-margin-small-top');
            }

            if (window.innerWidth < 1599) {
                // smaller than xl screens
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const getPortionSize = () => {
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
            <div id="home" className="home uk-container uk-container-small uk-margin-remove-left uk-margin-remove-right uk-margin-auto-left@s uk-margin-auto-right@s">
                <div className="uk-grid-divider" uk-grid="true" id="home-grid">
                    <div className="uk-width-1-1 uk-width-2-5@m uk-width-1-2@l home-grid__item">
                        <div className="uk-align-right@m uk-width-medium@s uk-width-large@l">
                            <h1 id="cat-app-title" className="uk-margin-remove-bottom">Cat Calc</h1>
                        </div>
                    </div>
                    <div className="uk-width-1-1 uk-width-3-5@m uk-width-1-2@l home-grid__item">
                        <p id="cat-blurb" className="uk-margin uk-width-large@m">
                            Do you need to re-assess pussy portion sizes? Have you been dumping food into your cat's
                            bowl and letting them choose how much they want to eat and now they're fat? Is your feline
                            friend simply watching their figure? You are in the right place! Enter your cat's profile
                            and weight to calculate their ideal daily calories.
                        </p>
                        <form id="cat-form" className="uk-form-horizontal">
                            <div className="uk-margin">
                                <label className="uk-form-label" htmlFor="cat-type">Select a cat profile:</label>
                                <div className="uk-form-controls uk-margin-remove-left">
                                    <select className="uk-select uk-form-width-medium input-element" name="cat-type" id="cat-type" onChange={evt => setCatType(evt.target.value)}>
                                        <option value="typical-spayed">Typical, spayed/neutered</option>
                                        <option value="typical-intact">Typial, intact</option>
                                        <option value="typical-gain-prone">Typical, weight-gain prone</option>
                                        <option value="overweight">Overweight</option>
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
                        <button id="calc-button" className="uk-button uk-button-secondary" onClick={handleCalculate}>Calculate</button>
                    </div>
                </div>
            </div>
            <div id="result-blurb" className="uk-margin-xlarge-top uk-container uk-width-xlarge-custom">
                {stepTwoVisible && <>
                    <p className="uk-text-center@s">Based on your cat's body type and weight, their ideal portion size is around</p>
                    <p className="uk-text-bold uk-text-large uk-text-center uk-align-center uk-margin-remove-top uk-border-rounded border-default uk-width-medium">{parseInt(portionSize)} kcal/day</p>
                    <p className="uk-align-center uk-margin-remove-left uk-margin-remove-right">
                        Please keep in mind that factors such as age, size, activity level, and health conditions will also affect the ideal amount of calories
                        that your cat should consume per day. An individual cat's needs can vary <span className="uk-text-bold">as much as 50%</span> in either
                        direction from the average.
                    </p>
                </>}
            </div>
        </>
    );
}

export default HomeView;