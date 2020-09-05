import React from "react";

import Illustration from "./illustration.svg";
import Stay from "./stay.svg";
import Hand from "./hand.svg";
import Face from "./face.svg";
import Distance from "./distance.svg";
import Mask from "./mask.svg";

import "./Protection.css";

const Protection = () => {
  return (
    <div
      className="row mx-1 mx-md-3 mx-lg-5 my-5 py-5 px-2 px-md-3 px-lg-5"
      id="protection"
    >
      <div className="col-xl-6 col-lg-6 col-md-6 d-md-block d-none text-center my-3">
        <img src={Illustration} alt="illustration" className="mx-auto" />
      </div>
      <div className="col-xl-6 col-lg-6 col-md-6 col-12 px-0 my-3">
        <h1 className="my-3">How can I protect myself from Covid-19?</h1>
        <p className="symptom-text">
          Coronavirus disease spreads primarily through contact with an infected
          person when they cough or sneeze. It also spreads when a person
          touches a surface or object that has the virus on it, then touches
          their eyes, nose, or mouth.
        </p>

        <h6>
          What should <span className="text-success">I do?</span>
        </h6>

        <div className="row justify-content-around px-2">
          <div className="protection-item">
            <img src={Mask} alt="face-illustration" />
            <p className="mt-2">Wear a facemask</p>
          </div>
          <div className="protection-item">
            <img src={Face} alt="face-illustration" />
            <p className="mt-2">Don't touch your face</p>
          </div>
          <div className="protection-item">
            <img src={Hand} alt="face-illustration" />
            <p className="mt-2">Avoid hand contact</p>
          </div>
          <div className="protection-item">
            <img src={Distance} alt="face-illustration" />
            <p className="mt-2">Keep safe distance</p>
          </div>
          <div className="protection-item">
            <img src={Stay} alt="face-illustration" />
            <p className="mt-2">Stay at home if you can</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Protection;
