import Form from "@/components/form";
import Reveal from "@/components/reveal";

const page = () => {
  return (
    <div className="container max-w-[1480px] mx-auto  px-2 lg:px-0  min-h-screen flex flex-col justify-center items-center">
      <Reveal>
        <p className="mt-20 text-7xl lg:text-9xl font-helvetica font-bold text-center">
          Need My Assistance? lets do it!
        </p>
      </Reveal>
      <Reveal>
        <Form />
      </Reveal>
    </div>
  );
};

export default page;
