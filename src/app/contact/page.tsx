import Reveal from "@/components/reveal";

const page = () => {
  return (
    <div className="container max-w-[1480px] mx-auto px-2 lg:px-0  min-h-screen flex flex-col justify-center items-center">
      <Reveal>
        <p className=" text-8xl lg:text-9xl font-helvetica font-semibold">
          Want To Reach Out
        </p>
      </Reveal>
      <Reveal>
        <p className="font-helvetica text-2xl lg:text-5xl">
          gmusic002@gmail.com
        </p>
      </Reveal>
    </div>
  );
};

export default page;
