import React from "react";
import Navbar from '../components/navbar/navbar'
import Banner from "../components/Header/Header";
import Body from "../components/body/body";
import FeaturedCard from "../components/featured Component/featuredCard";
import Services from "../components/services/services";
import AuServices from "../components/AuServices/AuServices";
import Card from "../components/card/card";
import star from "../assets/star.svg";
import relationship from "../assets/Relationship.svg";
import Technical from "../assets/Technical.svg";
import stayHead from "../assets/stayHead.svg";
import ClientCard from "../components/ourCient-Card/client-Card";




const helpCard = [
  {
    title: "All-Round Assistance",
    description:
      "Crafted for excellence, AURUMM is a premium end-to-end software suite that is designed for jewellery stores of all sizes.",
    imageUrl: star,
  },
  {
    title: "Relationship Management",
    description:
      "Stay tuned with your customers and vendors to keep their data safe and sound - with AURUMM, anything is possible!",
    imageUrl: relationship,
  },
  {
    title: "Technical Support",
    description:
      "Our dedicated team of professionals are available anytime throughout the year to resolve all your queries!",
    imageUrl: Technical,
  },
  {
    title: "Stay Ahead",
    description:
      "We're always keeping up with the latest trends and updating our platforms - so you'll always have the edge over your competitors!",
    imageUrl: stayHead,
  },
];

const Home = () => {
  return (
    <React.Fragment className="bg-slate-50">
      
      <Banner />
      <Body />
      <FeaturedCard />
      <Services />
      <AuServices />

      <div className="flex flex-col justify-center items-center font-bold mt-5 text-center pb-7">
        <h3 className="text-lg">WE'RE HERE TO HELP</h3>
        <h1 className="text-3xl font-bold mt-3">
          This is The Future of Jewellery Store Management
        </h1>

        <div className="card flex mt-5 px-7">
          {helpCard.map((data) => (
            <div className="ms-3">
              <Card
                description={data.description}
                imageUrl={data.imageUrl}
                title={data.title}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex flex-col justify-center items-center font-bold mt-5 text-center pb-7 ">
      <h3 className="text-lg">OUR CLIENTS</h3>
      <h1 className="text-3xl font-bold mt-3">Brands That Trust Us!</h1>
          <ClientCard/>
      </div>

    </React.Fragment>
  );
};

export default Home;
