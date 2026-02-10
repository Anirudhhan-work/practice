import Card from "./components/Card";
import type { Details } from "./types/types";

const App = () => {
  const cardData: Details[] = [
    {
      logo: "https://pngimg.com/uploads/amazon/amazon_PNG27.png",
      CompanyName: "Amazon",
      designation: "Senior UI/UX Designer",
      features: ["Part-Time", "Senior Level"],
      fee: 120,
      location: "Mumbai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      CompanyName: "Google",
      designation: "Graphic Designer",
      features: ["Part-Time", "Flexible Schedule"],
      fee: 150,
      location: "Kochi, India",
    },
    {
      logo: "https://cdn.dribbble.com/assets/icon-shot.png",
      CompanyName: "Dribbble",
      designation: "Senior Motion Designer",
      features: ["Contract", "Remote"],
      fee: 85,
      location: "Chennai, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      CompanyName: "Figma",
      designation: "UX Designer",
      features: ["Full-Time", "In office"],
      fee: 200,
      location: "Bangalore, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
      CompanyName: "Airbnb",
      designation: "Junior UI/UX Designer",
      features: ["Contract", "Remote"],
      fee: 100,
      location: "Delhi, India",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      CompanyName: "Apple",
      designation: "Graphic Designer",
      features: ["Full-Time", "Flexible Schedule"],
      fee: 85,
      location: "Kerala, India",
    },
  ];
  return (
    <div className="min-h-screen w-screen flex justify-center items-center">
      <div className="grid grid-cols-3 gap-10 w-fit">
        {cardData.map((data) => (
          <Card
            logo={data.logo}
            CompanyName={data.CompanyName}
            designation={data.designation}
            features={data.features}
            fee={data.fee}
            location={data.location}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
