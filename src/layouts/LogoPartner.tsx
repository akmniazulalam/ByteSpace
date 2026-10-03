import Image from "next/image";
import React from "react";

const LogoPartner = () => {
  return (
    <section className="bg-sectionBg py-12 sm:py-14 md:py-16 lg:py-20.5">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 xl:px-0">
        <div className="grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-10 lg:grid-cols-5 lg:gap-x-10 lg:gap-y-0">
          {[
            "/Frame.png",
            "/Frame (1).png",
            "/Frame (2).png",
            "/Frame (3).png",
            "/Frame (4).png",
          ].map((src, index) => (
            <div key={src} className="flex w-full items-center justify-center">
              <Image
                src={src}
                width={167}
                height={41}
                alt={`Partner logo ${index + 1}`}
                className="h-10.25 w-41.75 max-w-32 object-contain sm:max-w-36 md:max-w-40 lg:max-w-41.75"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoPartner;
