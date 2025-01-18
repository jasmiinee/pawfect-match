import React from 'react';
import "../index.css";
import updateBreed from '../breeds';

export default function Page6() {

    const handleNext = () => {
        window.location.href = "/7";
    };

    return (
        <div>
            <h2>
                You find yourself in a dense forest with new sights and smells.
                <br/>
                What do you focus on?
            </h2>
            <div className={"button-container"}>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["cocker spaniel", "golden retriever"]);
                }}>
                    Follow the sound of running water—it seems peaceful.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["beagle", "pomeranian"]);
                }}>
                    Chase a squirrel you just spotted.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["dachshund", "poodle"]);
                }}>
                    Carefully sniff every tree and track the scent trail.
                </button>
                <button onClick={() => {
                    handleNext();
                    updateBreed( ["doberman", "german shephard"]);
                }}>
                    Look for signs of other animals or humans nearby.
                </button>
            </div>
        </div>
        
    );
}