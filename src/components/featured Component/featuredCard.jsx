import React from 'react';
import { HoverEffect} from '../ui/card-hover-effect'
import  EllipsisGreen  from '../../assets/images/EllipseGreen.png';
import EllipsisBlue    from '../../assets/images/EllipseBlue.png'
import EllipsisOrange  from '../../assets/images/EllipseOrange.png'
export const projects = [
    {
      title: "An Exclusive Gold Savings Scheme Payment App",
      description:
        "A technology company that builds economic infrastructure for the internet.",
      link: "https://stripe.com",
      className:'bg-[#EDFFF2E5] ',
      img:EllipsisGreen
    },
    {
      title: "All-Round Inventory Management Assistant",
      description:
        "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
      link: "https://netflix.com",
      className:'bg-[#FFF6E2E5] ',
      img:EllipsisOrange
    },
    {
      title: "Give Your Fine Jewellery A Sleek Online Platform!",
      description:
      "A multinational technology company that specializes in Internet-related services and products.",
      link: "https://google.com",
      className:'bg-[#DFF3FFAB] ',
      img:EllipsisBlue
  
    },
  
  ];
const FeaturedCard = () => {
    return (
        <div className="bg-slate-50">
        <div className="flex flex-col justify-center items-center pt-7 font-medium text-center">
          <h3>FEATURED APPS</h3>
          <h1 className="mt-2">AURUMM for Your Jewellery Business</h1>
        </div>
        <HoverEffect items={projects} />
      </div>
      
    );
}

export default FeaturedCard;
