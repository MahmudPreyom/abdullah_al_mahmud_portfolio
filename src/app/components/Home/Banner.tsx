"use client";

import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Download, UserPlus } from "lucide-react";
import profile from "../../../assets/Adobe Express - file (15).png";
import middle from "../../../assets/middlepng.png";
import { ThemeToggle } from "../shared/ThemeToggle";

const Banner = () => {
  return (
    // <div className="md:bg-[url('https://i.ibb.co.com/6RSXZRzG/Clip-path-group.png')] bg-cover md:bg-center overflow-hidden bg-no-repeat relative transition-colors duration-300">
    <div className="banner-bg overflow-hidden relative transition-colors duration-300">
      <div className="container mx-auto">
        {/* Theme Toggle */}
        <div className="flex md:ml-40 md:justify-center p-5 md:p-0 mt-0 md:mt-20">
          <ThemeToggle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Column */}
          <div className="md:px-16 px-5 py-4 flex flex-col justify-center">
            <p className="text-muted-foreground text-4xl mb-5">Hello, I am</p>
            <h1 className="text-5xl md:text-6xl font-semibold mb-8 text-foreground">
              Abdullah Al Mahmud
            </h1>
            <h2 className="text-muted-foreground text-2xl md:text-4xl font-medium mb-5">
              A{" "}
              <span className="font-bold italic text-primary">
                <Typewriter
                  words={[
                    "Full Stack Web Developer",
                    " MERN Web Developer",
                    " Frontend Developer",
                    " Backend Developer",
                    // " Website Designer",
                    " Passionate for Coding",
                  ]}
                  loop={100}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p className="text-muted-foreground">
              As a Full Stack Developer, I specialize in building modern,
              scalable web applications using the MERN stack. I have a strong
              foundation in both front-end and back-end development, ensuring
              seamless user experiences and efficient performance. Passionate
              about coding and problem-solving, I continuously explore new
              technologies to enhance my skills and deliver high-quality
              solutions.
            </p>

            <div className="flex gap-3 mt-8">
              <Link
                href="https://drive.google.com/file/d/1shJnX_qSC94UeeBa6WNrajBbjg5DRrxZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground py-2 px-6 rounded-lg hover:bg-primary/90 transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Resume
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground py-2 px-6 rounded-lg hover:bg-primary/90 transition flex items-center gap-2"
              >
                <UserPlus className="w-4 h-4" /> Hire Me
              </Link>
            </div>
          </div>

          {/* Right Column */}
          {/* <div className="flex justify-center"> */}
          <div className="md:ml-auto flex justify-center">
            <Image
              src={profile}
              alt="Abdullah Al Mahmud"
              style={{ width: "auto", maxHeight: "630px" }}
              className="md:ml-60 rounded-full"
              priority
            />
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="banner-bg-center hidden md:block">
        <Image src={middle} alt="middle design" priority />
      </div>
    </div>
  );
};

export default Banner;
