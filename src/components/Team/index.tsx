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
    <div className="flex flex-col gap-4 px-12 py-6 md:gap-8 md:p-12">
      <div className="space-y-2 md:space-y-4">
        <h1 className="text-3xl md:text-6xl">Our Team</h1>
        <h3 className="text-sm md:text-base md:max-w-3xl">
          Vincask was founded by a group of whisky enthusiasts with a passion
          for Irish whisky and a vision to bring the finest and rarest bottles
          to customers worldwide.
        </h3>
      </div>

      <div className="flex flex-col gap-4 md:justify-between md:flex-row">
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
    </div>
  );
};
export default Team;
