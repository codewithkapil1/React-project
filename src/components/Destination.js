import React from "react";
import Pokhara from "../assests/pokhara.jpg";
import Pokhara1 from "../assests/photo4jpg.jpg";
import Pokhara2 from "../assests/Marpha-mustang.jpg";
import Pokhara3 from "../assests/mrp.jpg";
import Pokhara4 from "../assests/muktinath1.jpg";
import Pokhara5 from "../assests/muktinath2.jpg";
import Pokhara6 from "../assests/18.jpg";
import Pokhara7 from "../assests/15.jpg";
import "./DestinationStyles.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <div className="title">
        <h1>Popular Destinations</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame.</p>
      </div>
      <DestinationData
        className="first-des"
        heading="Pokhara"
        text=" Pokhara’s tranquil beauty has been the subject of inspiration for
      many travel writers. Its pristine air, spectacular backdrop of snowy
      peaks, blue lakes and surrounding greenery make it ‘the jewel in the
      Himalaya’, a place of remarkable natural disposition. With the
      magnificent Annapurna range forming the backdrop and the serenity of
      the Cluster of 9 Lakes with three major ones - Phewa, Rupa and
      Begnas – Pokhara is a great destination for a weekend getaway as
      well as a long relaxing holiday. Pokhara Valley, gateway to the
      Annapurna region where many a trekker finds his Shangri-la, sits
      high on the list of ‘must visit’ places in Nepal."
        img1={Pokhara}
        img2={Pokhara1}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Marpha Gau"
        text=" Marpha is one of the most famous village of Panch Gaun (Five village) region in Mustang district lying on Annapurna Circuit Trek rout of Nepal. It is famous for its picturesque appearance and most importantly for its apple orchards and apple products. It lies in the Trans – Himalayan rain shadow zone and therefore stays more or less untouched by raging monsoon of lower ranges. The village is mostly inhabited by Thakalis (Mawatan) representing four district clans: Lalchan(Ruby), Hirachan (Diamond), Jwarchan (Jewel) and Pannachan (Emerald). Its economy is strongly dependent upon agriculture, livestock, tourism and labor in foreign countries."
        img1={Pokhara2}
        img2={Pokhara3}
      />
      <DestinationData
        className="first-des"
        heading="Muktinath Temple"
        text=" The temple of Muktinath is in the trans-Himalayan locale of Nepal at the foot of the snow-covered ranges at an altitude of 3,800 m. The site is sacred to both Hindus and Buddhists.Mukti Kshetra, or where the temple of Muktinath is situated, is mentioned in the Hindu Scriptures such as the Ramayana, Barah Purana and Skanda Purana. The place partly owes its fame to the fossil stones, called shaligram - considered holy by Hindus - found along the Kali Gandaki River. The fossil stones are said to represent Lord Vishnu in stone form. There is a black shaligram in the temple."
        img1={Pokhara4}
        img2={Pokhara5}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Upper Mustang"
        text=" The Upper Mustang trek in to the remote Trans-Himalayan Region of this semi-independent Tibetan Kingdom offers an adventurous 14 day itinerary with spectacular trekking through striking semi-arid desert with colourful rock formations, deep ravines and snow-capped peaks surrounding you. The history, culture, myth and legend blends perfectly with the stunning scenery."
        img1={Pokhara6}
        img2={Pokhara7}
      />
    </div>
  );
};

export default Destination;
