import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import Data from "./travel";

function App() {
  const cards = Data.map(item => {
    return (
      <Card
        key={item.id}
        
        //3rd method
        {...item}
        
        //2nd method
        //item={item}


        //1st method
        // {...item}
        // img={item.imageUrl}
        // title={item.title}
        // location={item.location}
        // startDate={item.startDate}
        // endDate={item.endDate}
        // description={item.description}
        // googleMapsUrl={item.googleMapsUrl}
      />
    )
  })
  return (
    <div className="container">
      <Banner/>
      {cards}
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));