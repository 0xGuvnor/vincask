import Container from "../Container";
import Heading from "../Heading";
import CompanyCard from "./CompanyCard";

const companyInfos = [
  {
    name: "Seng Lee Tobacco Factory Pte Ltd",
    website: "http://senglee.com",
    image: "/senglee.png",
    description:
      "Seng Lee, founded in Malaysia and later relocated to Singapore, initially produced shag tobacco and distributed it in Singapore. They manufactured their own cigarette brands for export to Indonesia but faced interruptions due to political conflicts in the mid-1960s. During the same period, they became exclusive distributors for popular US cigarette brands in Singapore. Although they used to source local tobacco for production, they no longer make cheroots. However, Seng Lee still holds a significant market share for shag tobacco through an extensive retail network in Singapore. To address rising business costs, they have decided to move some of their operations out of Singapore.",
  },
  {
    name: "Grande Vida Pte Ltd",
    website: "http://grandevida.com.sg",
    image: "/grandevida.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nam voluptatem repellat ad perferendis minus sint, nostrum, placeat ex magni animi? Odit, aperiam corrupti suscipit cum alias fugit! Consequuntur qui hic sequi pariatur, possimus placeat deserunt ducimus eius quis totam quasi sint ab temporibus dolorem saepe quo maxime debitis fugiat sed, perferendis molestiae cupiditate dolores obcaecati! Odit quos, neque deserunt inventore adipisci rem quam soluta pariatur ratione deleniti cupiditate laborum voluptatum laudantium beatae unde sequi. Aspernatur delectus eveniet dolor aliquam tempora, veritatis sit ipsum eaque quos totam non maiores harum assumenda quidem quo ipsam autem temporibus cupiditate quam ex! Nostrum?",
  },
];

const AffiliatedCompanies = () => {
  return (
    <Container>
      <Heading
        title="Affiliated Companies"
        subtitle="Vincask is a wholly owned subsidiary of Seng Lee Tobacco Factory Pte Ltd & a sister company to Grande Vida Pte Ltd."
      />

      <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-2">
        {companyInfos.map((companyInfo) => (
          <CompanyCard
            key={companyInfo.name}
            name={companyInfo.name}
            website={companyInfo.website}
            image={companyInfo.image}
            description={companyInfo.description}
          />
        ))}
      </div>
    </Container>
  );
};
export default AffiliatedCompanies;
