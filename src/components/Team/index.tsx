import Container from "../Container";
import Heading from "../Heading";
import TeamProfile from "./TeamProfile";

const team = [
  {
    name: "Michaela Scott",
    title: "Co-founder / CEO",
    description:
      "With over a decade of experience in the liquor industry, I lead Vincask with a deep understanding of the Irish whiskey market and a passion for delivering exceptional products and experiences to our customers.",
  },
  {
    name: "Dwight Schrute",
    title: "Co-founder / CTO",
    description:
      "As the CTO of Vincask, I bring a wealth of technical expertise to our team, ensuring that our online platform and redemption process are seamless, secure, and innovative.",
  },
];

interface Props {
  teamImages: string[];
}

const Team = ({ teamImages }: Props) => {
  return (
    <div className="bg-base-200">
      <Container id="team">
        <Heading
          title="Our Team"
          subtitle="Vincask was founded by a group of whisky enthusiasts with a passion for Irish whisky and a vision to bring the finest and rarest bottles to customers worldwide."
        />

        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {teamImages.map((image, id) => (
            <TeamProfile
              key={id}
              name={team[id].name}
              title={team[id].title}
              src={image}
              description={team[id].description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
export default Team;
