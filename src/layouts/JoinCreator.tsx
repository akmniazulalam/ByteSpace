import Button from "@/components/Button";
import { Heading } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import React from "react";

const JoinCreator = () => {
  return (
    <section className="bg-secondary bg-[linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] bg-size-[128px_128px] py-14 sm:py-16 md:py-20 lg:py-21">
      <div className="mx-auto max-w-241 space-y-7 px-4 text-center sm:space-y-8 sm:px-6 lg:space-y-10 lg:px-8 xl:px-0">
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
    </section>
  );
};

export default JoinCreator;
