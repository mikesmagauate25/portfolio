import Reveal from "./reveal";

const contents = [
  {
    id: 1,
    title: "HTML",
    description:
      "Proficiency in writing and editing HTML code to create and structure web pages.",
  },
  {
    id: 2,
    title: "Data Entry and Management",
    description:
      "Creating simple graphics, social media posts, or visual content using graphic design tools.",
  },
  {
    id: 3,
    title: "Basic Graphic Design",
    description:
      "Creating simple graphics, social media posts, or visual content using graphic design tools.",
  },
  {
    id: 4,
    title: "CSS",
    description:
      "Ability to style HTML elements using Cascading Style Sheets (CSS) to enhance the visual presentation of web pages.",
  },
  {
    id: 5,
    title: "Research Assistance",
    description:
      "Conducting online research, gathering relevant information, and summarizing findings to support decision-making processes.",
  },
  {
    id: 6,
    title: "Online Marketing Support",
    description:
      "Assisting with email marketing campaigns, keyword research, and basic search engine optimization strategies.",
  },
  {
    id: 7,
    title: "JavaScript",
    description:
      "Knowledge of JavaScript programming language to add interactivity and dynamic functionality to web pages.",
  },
  {
    id: 8,
    title: "Website Management",
    description:
      "Updating website content, managing plugins, and performing basic maintenance tasks on content management systems.",
  },
];

const SkillSection = () => {
  return (
    <section className="container max-w-[1480px] h-auto mx-auto px-2 lg:px-0 flex flex-col justify-center items-start gap-10 ">
      <div className=" mt-20">
        <Reveal>
          <p className="font-helvetica font-bold text-6xl lg:text-9xl text-[#373737]">
            Competence Collection
          </p>
        </Reveal>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-10 mb-14 mt-20 ">
        {contents.map((content) => (
          <Reveal key={content.id}>
            <div className="border-b-2 border-gray-700 p-2 ">
              <h2 className="font-helvetica font-semibold text-2xl">
                {content.title}
              </h2>
              <p className="pt-3 font-helvetica">{content.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
