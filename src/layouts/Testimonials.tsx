import { Heading } from "@/components/Heading";
import Paragraph from "@/components/Paragraph";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-[#FAFAFA] py-14 sm:py-16 lg:py-18.5">
      <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-0">
        <div className="space-y-12 sm:space-y-14 lg:space-y-18">
          {/* Section Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:gap-11">
            <Heading className="max-w-144.25 font-poppins font-semibold text-black">
              Discover What Our Community Is Saying
            </Heading>

            <Paragraph className="max-w-145 text-[#4f4f4f]">
              At ByteSpace, our vibrant community of learners and creators is at
              the heart of what we do. Hear directly from those who have
              experienced the transformative journey of learning and creating on
              our platform. Explore testimonials that reflect the diverse
              perspectives of enthusiastic learners and accomplished creators.
            </Paragraph>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-10">
            {/* Testimonial 1 */}
            <article className="flex h-full flex-col rounded-3xl bg-white p-5 sm:p-6">
              <div className="space-y-6">
                <Image
                  src="/Ellipse.png"
                  height={80}
                  width={80}
                  alt="Sarah M."
                  className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
                />

                <div>
                  <h6 className="font-poppins text-lg font-semibold leading-[120%] text-black sm:text-[20px]">
                    Sarah M.
                  </h6>

                  <Paragraph className="text-secondary">
                    Enthusiastic Learner
                  </Paragraph>
                </div>
              </div>

              <Paragraph className="mt-6 text-[#4f4f4f]">
                "ByteSpace has transformed my approach to learning. The diverse
                range of courses and the quality of content provided by creators
                have exceeded my expectations. The platform truly fosters a
                sense of community and lifelong learning."
              </Paragraph>
            </article>

            {/* Testimonial 2 */}
            <article className="flex h-full flex-col rounded-3xl bg-white p-5 sm:p-6">
              <div className="space-y-6">
                <Image
                  src="/Ellipse (20).png"
                  height={80}
                  width={80}
                  alt="James L."
                  className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
                />

                <div>
                  <h6 className="font-poppins text-lg font-semibold leading-[120%] text-black sm:text-[20px]">
                    James L.
                  </h6>

                  <Paragraph className="text-secondary">
                    Lifelong Learner
                  </Paragraph>
                </div>
              </div>

              <Paragraph className="mt-6 text-[#4f4f4f]">
                "I've tried several online learning platforms, and ByteSpace
                stands out for its vibrant community and the variety of courses
                available. The easy navigation and engaging content make it a
                go-to platform for continuous skill development."
              </Paragraph>
            </article>

            {/* Testimonial 3 */}
            <article className="flex h-full flex-col rounded-3xl bg-white p-5 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="space-y-6">
                <Image
                  src="/Ellipse(21).png"
                  height={80}
                  width={80}
                  alt="Alex B."
                  className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
                />

                <div>
                  <h6 className="font-poppins text-lg font-semibold leading-[120%] text-black sm:text-[20px]">
                    Alex B.
                  </h6>

                  <Paragraph className="text-secondary">
                    Inspired Creator
                  </Paragraph>
                </div>
              </div>

              <Paragraph className="mt-6 text-[#4f4f4f]">
                "As a creator, ByteSpace has been a game-changer for me. The
                Course Editor is user-friendly, and the support from the
                community is incredible. It's fulfilling to see my courses
                making a positive impact on learners globally."
              </Paragraph>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
