import { CompanyInfo } from "@/types";
import Container from "../Container";
import Heading from "../Heading";
import CompanyCard from "./CompanyCard";

interface Props {
  companyInfos: CompanyInfo[];
}

const AffiliatedCompanies = ({ companyInfos }: Props) => {
  return (
    <Container>
      <Heading
        title="Affiliated Companies"
        subtitle="Vincask is a wholly owned subsidiary of Seng Lee Tobacco Factory Pte Ltd & a sister company to Grande Vida Pte Ltd."
      />

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16">
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
