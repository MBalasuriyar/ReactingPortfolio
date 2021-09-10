import React from "react";
import React from 'react';
import '../App.css';
import workout from './images/workout.jpg';
import animeFinder from './images/animeFinder.jpg';
import budget from './images/budget.jpg';
import medication from './images/medication-candles.jpg';

function Portfolio() {
  return (
    <main className='work'>
      <h1 class="lg-heading">My <span class="text-secondary">Work</span></h1>
      <h2 class="sm-heading">Here are some of my deployed projects...</h2>
      <div class="projects">
        <div class="item">
          <a href="https://github.com/MBalasuriyar/Find-an-Anime-For-You" target="_blank" rel="noreferrer">
            <img src={animeFinder} alt="sports betting" class="school-project"/>
          </a>  
          <h2>Find-an-Anime-For-You</h2>
            <p>
            Find-an-Anime-For-You <span class="group1">(Group Project 1)</span> finds a random anime and gif for anime fans to discover new series. 
            </p>
            <div class="centered"><a class="proj-link" href="https://github.com/MBalasuriyar/Find-an-Anime-For-You" target="_blank" rel="noreferrer">Find-an-Anime-For-You</a><a class="github" href="https://github.com/MBalasuriyar/Find-an-Anime-For-You" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></div>
        </div>
        <div class="item">
          <a href="https://tranquil-beyond-43999.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={workout} alt="sports betting" class="school-project"/>
          </a>  
          <h2>21st Century Workout</h2>
            <p>
              21st Century Workout is an application that allows you to create a workout plan based on 7 different categories. It allows you to track your progress against the created schedule.
            </p>
            <div class="centered"><a class="proj-link" href="https://tranquil-beyond-43999.herokuapp.com/" target="_blank" rel="noreferrer">21st Century</a><a class="github" href="https://github.com/MBalasuriyar/21stCenturyFitness" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></div>
        </div>
        <div class="item">
          <a href="https://github.com/MBalasuriyar/BudgetTracking" target="_blank" rel="noreferrer">
            <img src={budget} alt="sports betting" class="school-project"/>
          </a>  
          <h2>BudgetTracking</h2>
          <p>
            This is an application that allows you to enter transaction values while offline. 
          </p>
          <div class="centered"><a class="proj-link" href="https://github.com/MBalasuriyar/BudgetTracking" target="_blank" rel="noreferrer">Weather</a><a class="github" href="https://github.com/MBalasuriyar/budget-api" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></div>
        </div>
      </div>

      <h2 class="sm-heading">Featured Personal Project</h2>
      <div class="projects">
        <div class="item">
          <a href="#!">
            <img src={medication} alt="medication" id="main-image" />
          </a>
        </div>
        <p>
         Medication Tracker.
          <br></br><br></br>
          The beginings of an app that will allow medical professionals to more easily log their patient's treatment
          </p>
         <p>
          The current version is focused on displaying data on a patient for Staff use
          <br></br><br></br>
         Increase treatment efficancy and potentailly save lives.
        </p>
      </div>

     
    </main>
  )
}

export default Portfolio