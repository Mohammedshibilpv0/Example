import React from "react";
import Client1 from '../../assets/images/client2.375a298f.png'
import Client2 from '../../assets/images/client3.bb1326d9.png'
import Client3 from '../../assets/images/client4.ae1b0ded.png'
import Client4 from '../../assets/images/client5.e84cda3c.png'
import { InfiniteMovingCards } from "../ui/infinity-card";



const testimonials = [
    {
      imageUrl:Client1
    },
    {
      imageUrl:Client2
    },
    {
      imageUrl:Client3
    },
    {
      imageUrl:Client4
    }
  ];
  
const ClientCard = () => {
  return (  
      <div className="h-[20rem]">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
    </div>
  );
};

export default ClientCard;
