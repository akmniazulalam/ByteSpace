import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";

const JoinCreator = () => {
  return (
    <section className="bg-secondary bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-size-[128px_128px] py-14 sm:py-16 md:py-20 lg:py-21 relative overflow-hidden">
      <div className="relative z-30 mx-auto max-w-241 space-y-7 px-4 text-center sm:space-y-8 sm:px-6 lg:space-y-10 lg:px-8 xl:px-0">
        {/* Heading */}
        <Heading className="mx-auto max-w-177.5 font-poppins text-sectionBg">
          Unlock Your Potential as a Creator with ByteSpace
        </Heading>

        {/* Description */}
        <Paragraph className="mx-auto max-w-241 text-sectionBg">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </Paragraph>

        {/* CTA */}
        <Button className="mx-auto w-fit min-w-35">Join as Creator</Button>
      </div>
      <div className="absolute inset-0 creator" aria-hidden="true">
        <Image
          src={"/ornament-spring-left.png"}
          height={350}
          width={350}
          alt="spring_left"
          aria-hidden="true"
          className="spring_left lg:w-65 lg:h-65 xl:w-87.5 xl:h-87.5"
        />
        <Image
          src={"/ornament-spring-left-middle.png"}
          height={175}
          width={175}
          alt="spring_left_middle"
          aria-hidden="true"
          className="spring_left_middle"
        />
        <Image
          src={"/cone.png"}
          height={188}
          width={188}
          alt="cone"
          aria-hidden="true"
          className="cone"
        />
        <Image
          src={"/ornament-ring.png"}
          height={342}
          width={342}
          alt="ring"
          aria-hidden="true"
          className="ring lg:w-70 lg:h-70 xl:h-85.5 xl:w-85.5"
        />
        <Image
          src={"/ornament-cylinder.png"}
          height={370}
          width={370}
          alt="cylinder"
          aria-hidden="true"
          className="cylinder lg:w-75 lg:h-75 xl:w-92.5 xl:h-92.5"
        />
        <Image
          src={"/ornament-triangle.png"}
          height={188}
          width={188}
          alt="triangle"
          aria-hidden="true"
          className="triangle"
        />
        <Image
          src={"/ornament-right-bottom-spring.png"}
          height={330}
          width={330}
          alt="right_spring"
          aria-hidden="true"
          className="right_spring lg:w-70 lg:h-70 xl:h-82.5 xl:w-82.5"
        />
      </div>
    </section>
  );
};

export default JoinCreator;
