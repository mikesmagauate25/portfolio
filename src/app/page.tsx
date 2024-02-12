import Reveal from "@/components/reveal";
import SkillSection from "@/components/skillsection";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <section className="container max-w-[1480px] mx-auto px-2 lg:px-0  min-h-screen flex flex-col justify-center items-start">
        <Reveal>
          <h1
            id="headline"
            className="font-helvetica font-bold text-8xl lg:text-9xl text-[#373737]"
          >
            Hi, I`m Mikes Maguate
          </h1>
        </Reveal>
        <Reveal>
          <h2
            id="sub_header"
            className="font-helvetica font-medium text-2xl lg:text-4xl text-[#373737] lg:max-w-xl mt-5 "
          >
            Efficient Virtual Assistant Ready to Elevate Your Productivity and
            Streamline Your Business Operations
          </h2>
        </Reveal>
      </section>
      <div className="w-full max-w-[1580px] mx-auto min-h-[30px] lg:min-h-[50px] bg-black">
        <Marquee autoFill>
          <p className="text-white font-helvetica font-black mt-0 lg:mt-2 ">
            Virtual Assistant @ Youre Service ‎ ‎ ‎‎ ‎ ‎
          </p>
        </Marquee>
      </div>
      <SkillSection />
    </>
  );
};

export default Home;
