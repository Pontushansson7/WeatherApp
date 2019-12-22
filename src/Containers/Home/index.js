import React, { Component } from 'react';
import '../../App.css';
import '../Home/home.css';
class Home extends Component {
    render() {
      return (
        <div>
          <h3>
           Välkommen till Pontus Hansson webbsida för att visa apier!</h3>
          <h4>Vad kan du göra här?</h4>
          <p>
            Bortsett från att stirra dig blind på startsidans vackra yttre så kan du som användare
            även använda två olika apier för att hämta information.
          </p>
          <div className="line"></div>
          <h4>Message API</h4>
          <p>
            Här kan du via inmatning av nummer se information om ett meddelande från ett hemligt
            system.. (Finder..schhhh)
          </p>
          <div className="line"></div>
          <h4>Weather API</h4>
          <p>
            Här kan du via inmatning av latitude och longitude se väderinformation på en specifik
            plats på jordkulan. Andledningen till att dessa parametrar används är för att jag helt
            enkelt har tröttnat på att göra det enkelt för dig som användare. Google is your friend... hihihi
          </p>
          <div className="line"></div>
          <h4>Information om sidans uppbyggnad</h4>
          <p>
            Denna hemsida är byggd i react och har helt sjuka funktioner. Hemsidan är byggd på ett
            väldigt smidigt sätt som underlättar för utvecklaren att arbeta vidare med applikationen.
            MEN... nog om hemsidan, ströga gärna runt och utforska sidan via den helt fabulösa
            navbaren. Ha de gött, haaaaj.
          </p>
          <div className="line"></div>
        </div>
      );
    }
  }

  export default Home;