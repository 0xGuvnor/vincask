import Container from "../Container";
import Heading from "../Heading";
import TeamProfile from "./TeamProfile";

const team = [
  {
    name: "Michaela Scott",
    title: "Co-founder / CEO",
    src: "/team/founder1.jpg",
    description:
      "With over a decade of experience in the liquor industry, I lead Vincask with a deep understanding of the Irish whiskey market and a passion for delivering exceptional products and experiences to our customers.",
  },
  {
    name: "Dwight Schrute",
    title: "Co-founder / CTO",
    src: "/team/founder2.jpeg",
    description:
      "As the CTO of Vincask, I bring a wealth of technical expertise to our team, ensuring that our online platform and redemption process are seamless, secure, and innovative.",
  },
];

const Team = () => {
  return (
    <div className="bg-[#582B11]">
      <Container id="team">
        <Heading
          title="Our Team"
          subtitle="Vincask was founded by a group of whisky enthusiasts with a passion for Irish whisky and a vision to bring the finest and rarest bottles to customers worldwide."
        />

        <div className="flex flex-col gap-10 md:justify-between md:flex-row">
          {team.map((teamMember, id) => (
            <TeamProfile
              key={id}
              name={teamMember.name}
              title={teamMember.title}
              src={teamMember.src}
              description={teamMember.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
export default Team;
