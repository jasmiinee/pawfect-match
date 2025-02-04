import React from "react";
import food from './images/page14.png';
import "../index.css";
import updateBreed from "../breeds";
import { useNavigate } from 'react-router-dom';

export default function Page14() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleNext = () => {
      navigate('/15'); // Navigate to the "/1" route
  };

  return (
    <div>
      <h2>
        It’s dinner time, and your human serves your favorite meal.
        <br />
        What's your reaction?
      </h2>
      <img src={food} className={"image-container"}/>
      <div className={"button-container"}>
        <button onClick={() => {
            handleNext();
            updateBreed( ["german_shephard", "bulldog"]);
        }}>
          Wait patiently until they say it’s okay to eat.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["golden_retriever", "pomeranian"]);
        }}>
          Dive right in—you’ve been waiting for this!
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["dachshund", "cocker_spaniel"]);
        }}>
          Sniff it carefully before starting.
        </button>
        <button onClick={() => {
            handleNext();
            updateBreed( ["beagle", "collie"]);
        }}>
          Share a piece with another dog or human first.
        </button>
      </div>
    </div>
  );
}
