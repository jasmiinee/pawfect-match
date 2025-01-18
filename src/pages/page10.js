import React from "react";
import lost from './images/page10.png';
import "../index.css";
import updateBreed from "../breeds";

export default function Page10() {
  const handleNext = () => {
    window.location.href = "/11";
  };

  return (
    <div>
        <h2>
            You realize you’ve wandered far from home. 
            <br/>
            How do you respond?
        </h2>
        <img src={lost} className={"image-container"}/>
        <div className={"button-container"}>
            <button onClick={() => {
                handleNext();
                updateBreed( ["collie", "german_shepherd"]);
            }}>
              Stay calm and try to retrace your steps.
            </button>
            <button onClick={() => {
                handleNext();
                updateBreed( ["golden_retriever", "collie"]);
            }}>
              Bark loudly to call for help.
            </button>
            <button onClick={() => {
                handleNext();
                updateBreed( ["beagle", "dachshund"]);
            }}>
              Follow a familiar scent trail.
            </button>
            <button onClick={() => {
                handleNext();
                updateBreed( ["bulldog", "doberman"]);
            }}>
              Stick with the group and look for landmarks together.
            </button>
        </div>
    </div>
    
  );
}
