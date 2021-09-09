import React from "react";
import React from 'react';
import '../App.css';
import workout from './images/workout.jpg';
import sportsbetting from './images/sportsbetting.jpg';
import weather from './images/weather.jpg';
import workday from './images/workdayscheduler.jpg';
import solacecandles from './images/solace-candles.jpg';
import solaceprofile from './images/solace-profile.jpg';
import indacut from './images/indacut.jpg';
import rawluxe from './images/rawluxe.jpg';
import poshdesigns from './images/poshdesigns.jpg';

function WorkSection() {
  return (
    <main className='work'>
      <h1 class="lg-heading">My <span class="text-secondary">Work</span></h1>
      <h2 class="sm-heading">Here are some of my deployed projects...</h2>
      <div class="projects">
        <div class="item">
          <a href="https://greggd1991.github.io/SportsBets/" target="_blank" rel="noreferrer">
            <img src={sportsbetting} alt="sports betting" class="school-project"/>
          </a>  
          <h2>Statbadger</h2>
            <p>
              Statbadger <span class="group1">(Group Project 1)</span> is a sports betting simulator application. You can view the games of the day as well as place bets on the outcome.
            </p>
            <div class="centered"><a class="proj-link" href="https://greggd1991.github.io/SportsBets/" target="_blank" rel="noreferrer">Statbadger</a><a class="github" href="https://github.com/greggd1991/SportsBets" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></div>
        </div>
        <div class="item">
          <a href="https://tranquil-beyond-43999.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src={workout} alt="sports betting" class="school-project"/>
          </a>  
          <h2>21st Century Workout</h2>
            <p>
              21st Century Workout is an application that allows you to create a workout plan based on 7 different categories. It allows you to track your progress against the created schedule.
            </p>
            <div class="centered"><a class="proj-link" href="https://tranquil-beyond-43999.herokuapp.com/" target="_blank" rel="noreferrer">21st Century</a><a class="github" href="https://github.com/malmason/21stCenturyFitness" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></div>
        </div>
        <div class="item">
          <a href="https://malmason.github.io/weather-api/" target="_blank" rel="noreferrer">
            <img src={weather} alt="sports betting" class="school-project"/>
          </a>  
          <h2>Weather Dashboard</h2>
          <p>
            Weather dashboard is an application that allows you to enter in a city and state to get the current weather conditions along with a 5-day forecast. 
          </p>
          <div class="centered"><a class="proj-link" href="https://malmason.github.io/weather-api/" target="_blank" rel="noreferrer">Weather</a><a class="github" href="https://github.com/malmason/weather-api" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></div>
        </div>
        <div class="item">
          <a href="https://malmason.github.io/workday-scheduler/" target="_blank" rel="noreferrer">
            <img src={workday} alt="sports betting" class="school-project"/>
          </a>  
          <h2>Workday Scheduler</h2>
            <p>
              Workday Scheduler is a calendar application that accepts appointments in different time blocks for the current day and stores them locally.
            </p>
            <div class="centered"><a class="proj-link" href="https://malmason.github.io/workday-scheduler/" target="_blank" rel="noreferrer">Scheduler</a><a class="github" href="https://github.com/malmason/workday-scheduler" target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a></div>
        </div>
      </div>

      <h2 class="sm-heading">Featured Personal Project</h2>
      <div class="projects">
        <div class="item">
          <a href="#!">
            <img src={solacecandles} alt="solace umore candles" id="main-image" />
          </a>
        </div>
        <p>
          Solace Umore LLC candles are a product of patience and love.
          <br></br><br></br>
          Our vision is to create a sense of complete comfort to guide you on a journey to a place of 
          tranquility.
          </p>
         <p>
          These genuine handmade candles are 100% soy.
          <br></br><br></br>
          Soy wax is known to produce high quality scents 
          that will entice and illuminate your senses with a captive aroma.
        </p>
      </div>

      <h2 class="sm-heading">Here are some descriptions of my upcoming projects...</h2>
    
    <div class="projects">
      <div class="item">
        <a href="#!">
          <img src={solaceprofile} alt="solace umore candles" />
        </a>
        <h2>Solace Umore</h2>
        <p>“Your life becomes a masterpiece when you learn to master peace.” (Mayur Shejul) </p>
        <p>Solace 
          Umore LLC candles are a product of patience and love. Our vision is to create a sense of 
          complete comfort to guide you on a journey to a place of tranquility.</p> 
          <p>These genuine 
          handmade candles are 100% soy. Soy wax is known to produce high quality scents that will 
          entice and illuminate your senses with a captive aroma.</p>
      </div>
      <div class="item">
        <a href="#!">
          <img src={indacut} alt="In Da Cut Party Rentals" />
        </a>
        <h2>In Da Cut</h2>
        <p>"Your one stop shop for all events."</p>
        <p>In Da Cut is a party rental room Located at 715 Lakewood Rd. Waterbury, CT. 
        </p>
        <p>For birthdays, anniversaries, meetings, corporate events, exhibitions, bridal showers,
          or any event you may need. 
        </p>
        <p>We have our own in-house decorators ("Posh Designs"), our own DJ and 2 rooms for small or large
          events. 
        </p>
      </div>
      <div class="item">
        <a href="#!">
          <img src={rawluxe} alt="Raw Luxe Candles" />
        </a>
        <h2>Raw Luxe</h2>
        <p>"Creating vibes one candle at a time."
        </p>
        <p>Hi! Welcome to my shop! :) My name is Natasha and I'm from sunny San Diego. I started candle 
          making as a hobby and to make some great gifts. But it became so much more, very quickly!
        </p>
        <p>I realized candle making is a lot like cooking. I loved the freedom of creating something that 
          can be enjoyed by all.
        </p>
      </div>
      <div class="item">
          <a href="#!">
            <img src={poshdesigns} alt="Posh Designs" />
          </a>
          <h2>Posh Designs</h2>
          <p>Let us take away the stress of decorating your next event. Posh designs specializes in events of all types. 
          </p>
          <p>Whether it's a birthday party, graduation, or your wedding, we will take care of all of the details so you can enjoy your special day. 
          </p>
      </div>  
      </div>
    </main>
  )
}

export default WorkSection