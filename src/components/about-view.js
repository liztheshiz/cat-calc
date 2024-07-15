import React, { useState } from "react";

function AboutView() {
    return (
        <>
            <div className="uk-container uk-container-small uk-margin-large-top">
                <h1 className="uk-heading-medium uk-margin-medium-bottom">About This Website</h1>
                <p>
                    The data used to calculate portion sizes can be found in <a target="_blank" href="https://be.chewy.com/how-much-should-i-feed-my-cat/">this Chewy
                        article</a> about determining how much to feed your cat, which I suggest as supplementary reading in addition to the estimate generated by
                    Cat Calc.
                    <br></br><br></br>
                    To calculate a calorie count for any given cat weight, a formula was reverse-engineered for each of the four cat body types by entering the
                    cal/lb/day value corresponding with each of the lb values in the Chewy table into the very handy formula generator at <a target="_blank"
                        href="https://www.dcode.fr/function-equation-finder">Function Equation Finder</a>.
                    <br></br><br></br>
                    This website was built using <a target="_blank" href="https://react.dev/">React</a> and <a target="_blank" href="https://getuikit.com/">UIKit</a>.
                </p>
                <h2 className="uk-margin-small-bottom">About Liz Stone</h2>
                <p>
                    Liz Stone is a web and software developer with a passion for beatuiful, functional applications, and cats. She is currently employed as a
                    software developer and data analyst, but enjoys creating small apps in her spare time. You can find her other work at her <a target="_blank"
                        href="https://liztheshiz.github.io/portfolio-website/">portfolio site</a>.
                </p>
            </div>
        </>
    );
}

export default AboutView;