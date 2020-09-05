import React from "react";

import Illustration from "./illustration.svg";

import "./Symptoms.css";
const Symptoms = () => {
  return (
    <div className="row mx-5 my-5 pt-3" id="symptoms">
      <div className="col-xl-7 col-lg-7 col-md-7 col-12 px-0">
        <span className="symptom-red">Corona Virus Symptoms</span>
        <h1 className="my-3">What are the symptoms?</h1>
        <p className="symptom-text">
          People may be sick with the virus for 1 to 14 days before developing
          symptoms. The most common symptoms of coronavirus disease (COVID-19)
          are fever, tiredness, and dry cough. Most people (about 80%) recover
          from the disease without needing special treatment. More rarely, the
          disease can be serious and even fatal. Older people, and people with
          other medical conditions (such as asthma, diabetes, or heart disease),
          may be more vulnerable to becoming severely ill.
        </p>

        <div className="sypmtom-item">
          <h6>Most Common Symptoms</h6>
          <span className="text-info">
            <i className="fas fa-check-circle"></i> Dry Cough
          </span>
          <span className="text-info">
            <i className="fas fa-check-circle"></i> Tiredness
          </span>
          <span className="text-info">
            <i className="fas fa-check-circle"></i> Fever
          </span>
        </div>

        <div className="sypmtom-item">
          <h6>Less Common Symptoms</h6>
          <span className="text-success">
            <i className="fas fa-check-circle"></i> Ache and Pains
          </span>
          <span className="text-success">
            <i className="fas fa-check-circle"></i> Sore Throat
          </span>
          <span className="text-success">
            <i className="fas fa-check-circle"></i> Diarrhoea
          </span>
          <span className="text-success">
            <i className="fas fa-check-circle"></i> Conjunctivitis
          </span>
          <span className="text-success">
            <i className="fas fa-check-circle"></i> Headache
          </span>
          <span className="text-success">
            <i className="fas fa-check-circle"></i> Loss of taste or smell
          </span>
          <span className="text-success">
            <i className="fas fa-check-circle"></i> A rash on skin or
            discolouration of fingers or toes
          </span>
        </div>

        <div className="sypmtom-item">
          <h6>Serious Symptoms</h6>
          <span className="text-danger">
            <i className="fas fa-check-circle"></i> Difficulty breathing or
            shortness of breath
          </span>
          <span className="text-danger">
            <i className="fas fa-check-circle"></i> Chest pain or pressure
          </span>
          <span className="text-danger">
            <i className="fas fa-check-circle"></i> Loss of speech or movement
          </span>
        </div>
      </div>
      <div className="col-xl-5 col-lg-5 col-md-5 d-md-block d-none text-center">
        <img src={Illustration} alt="illustration" className="mx-auto" />
      </div>
    </div>
  );
};

export default Symptoms;
