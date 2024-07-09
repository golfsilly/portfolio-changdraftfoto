"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Type from "./Type";
import { cn } from "@/lib/utils";
import { anton, poppins } from "@/config/fonts";
import Tilt from "react-parallax-tilt";
import AOS from "aos";

export default function Home1() {
  
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <section>
      <div className="relative" id="home">
        <div className="flex flex-col md:flex-row py-10">
          <div
            data-aos="zoom-in"
            data-aos-duration="2500"
            data-aos-delay="200"
            className="w-full py-4 md:py-7 lg:py-24"
          >
            <h1
              className={cn(
                "font-bold !pl-12 pb-4 text-green-400/90 text-4xl p-10 text-left font-poppins",
                poppins.variable
              )}
            >
              Hi !{" "}
              <span
                className="inline-block animate-pulse"
                role="img"
                aria-labelledby="wave"
              >
                👋🏻
              </span>
            </h1>

            <h1 className="text-4xl font-normal !pl-11">
              {"I'M "}
              <strong className="text-green-400/95">Samutcha Khondon</strong>
            </h1>

            <div
              className={cn(
                "text-green-400 text-4xl font-bold p-10 text-left font-anton",
                anton.variable
              )}
            >
              <Type />
            </div>
          </div>

          <div
            className="flex flex-col justify-center items-center px-7 py-7"
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.9}
              glarePosition="all"
              glareBorderRadius="20px"
            >
              <Image
                src={"/images/changdraft-profile.jpg"}
                width={750}
                height={450}
                alt="avatar"
                className="rounded-full bg-transparent"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
}
