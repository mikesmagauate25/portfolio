import Reveal from "@/components/reveal";
import Image from "next/image";

const page = () => {
  return (
    <section className="container max-w-[1480px] mx-auto  min-h-screen flex flex-col lg:flex-row gap-10 px-2 lg:px-0 mb-5">
      <div className="flex-1 flex flex-col items-start justify-center">
        <Reveal>
          <h1 className="font-helvetica text-7xl pt-10 lg:pt-0 lg:text-9xl font-semibold">
            ABOUT
          </h1>
        </Reveal>
        <Reveal>
          <p className="font-helvetica font-normal text-sm lg:text-lg">
            Welcome! I&apos;m Mikes, your dedicated virtual assistant here to
            lighten your workload and elevate your business to new heights. With
            a passion for organization, efficiency, and problem-solving, I
            thrive in providing top-notch administrative support tailored to
            your unique needs. My journey as a virtual assistant is fueled by a
            commitment to excellence and a relentless pursuit of client
            satisfaction. I understand the value of clear communication,
            attention to detail, and delivering results that exceed
            expectations. When you work with me, you&apos;re not just getting a
            virtual assistant &mdash; you&apos;re gaining a strategic partner
            dedicated to helping you achieve your goals. Let&apos;s collaborate,
            innovate, and streamline your business processes together.
            Let&apos;s make your vision a reality. Reach out today and
            let&apos;s embark on this exciting journey together!
          </p>
        </Reveal>
      </div>
      <div className="flex-1  flex justify-end">
        <Reveal>
          <Image
            src="/main.jpeg"
            alt="main"
            width={500}
            height={900}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </Reveal>
      </div>
    </section>
  );
};

export default page;
