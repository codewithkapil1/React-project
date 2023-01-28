import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assests/1.jpg";
import Trip2 from "../assests/10.jpg";
import Trip3 from "../assests/11.jpg";

import React from "react";

const Trip = () => {
  return (
    <div className="trip">
      <div className="title">
      <h1>Recent Trip</h1>
      <p>You can discover Unique destination using Google Maps.</p>
      </div>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Everest"
          text="The Upper Mustang trek in to the remote Trans-Himalayan Region of this semi-independent Tibetan Kingdom offers an adventurous 14 day itinerary with spectacular trekking through striking semi-arid desert with colourful rock formations, deep ravines and snow-capped peaks surrounding you. The history, culture, myth and legend blends perfectly with the stunning scenery."
        />
        <TripData
          image={Trip2}
          heading="Trip in Everest"
          text="The Upper Mustang trek in to the remote Trans-Himalayan Region of this semi-independent Tibetan Kingdom offers an adventurous 14 day itinerary with spectacular trekking through striking semi-arid desert with colourful rock formations, deep ravines and snow-capped peaks surrounding you. The history, culture, myth and legend blends perfectly with the stunning scenery."
        />
        <TripData
          image={Trip3}
          heading="Trip in Everest"
          text="The Upper Mustang trek in to the remote Trans-Himalayan Region of this semi-independent Tibetan Kingdom offers an adventurous 14 day itinerary with spectacular trekking through striking semi-arid desert with colourful rock formations, deep ravines and snow-capped peaks surrounding you. The history, culture, myth and legend blends perfectly with the stunning scenery."
        />
      </div>
    </div>
  );
};

export default Trip;
