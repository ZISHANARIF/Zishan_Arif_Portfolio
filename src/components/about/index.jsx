import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className=" text-[#6925d8] text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            I’m a digital alchemist blending creativity with code, on a quest to
            craft meaningful web experiences. With JavaScript as my elemental
            force and React.js and Node.js as my arcane tools, I build responsive,
            scalable, and immersive interfaces. Beyond the front-end,
            I’m venturing into the vast realm of data science—learning how to
            extract insights and predict patterns through Python, SQL, and Power BI.
            My journey is also anchored in sharp problem-solving skills, honed by
            solving 350+ DSA challenges that push logic and efficiency to their
            limits. Join me as I continue to merge design, development, and data
            into magical solutions that shape the digital future.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            20+ <sub className=" text-[#aaaeab] font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            350+{" "}
            <sub className="text-[#aaaeab]  font-semibold text-base">Problem solving on LeetCode and GFG.</sub>
          </p>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            15+{" "}
            <sub className="text-[#aaaeab] font-semibold text-base">Tech Stack Skills Proficiency.</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h3 className="font-semibold text-2xl sm:text-4xl text-left text-[#6925d8]">
            Experience
          </h3>
          <div className="w-full text-[#6925d8] text-base sm:text-lg font-semibold mt-1">
            <p className="mb-1">Lead Sure Media, Noida</p>
            <div className="flex justify-between items-center w-full">
              <span className="text-left">Web Developer & Designer (Onsite)</span>
              <span className="text-right">June 2025  - Present</span>
            </div>
          </div>
          <p className="text-sm sm:text-base text-left mt-2 font-light">
            <p> <span className="mr-5">⇨</span> Designed and developed full-stack websites with a focus on clean, responsive UI using HTML,</p><p className="ml-10"> CSS, JavaScript, and modern frameworks.</p>
            <p> <span className="mr-5">⇨</span> Converted design references into pixel-perfect layouts, ensuring 100% design accuracy across all</p><p className="ml-10"> devices and browsers</p>
            <p> <span className="mr-5">⇨</span> Standardized typography and color systems to ensure design consistency and smoother </p><p className="ml-10">developer handoff.</p>
            <p> <span className="mr-5">⇨</span> Built responsive, SEO-friendly pages with HTML, CSS, JS, Bootstrap, and React.js.</p>
            <p> <span className="mr-5">⇨</span> Contributed to backend development using mongoDB, PHP and SQL.</p>
            <p> <span className="mr-5">⇨</span> Removed redundant styles and scripts using AI tools, improving performance.</p>
            <p> <span className="mr-5">⇨</span> Participated in discussions with senior developers to share progress, gather feedback, and make </p> <p className="ml-10">improvements.</p>
          </p>

          <div className="w-full text-[#6925d8] text-base sm:text-lg font-semibold mt-1">
            <p className="mb-1">CollegePur, Ghaziabad</p>
            <div className="flex justify-between items-center w-full">
              <span className="text-left">Frontend Web Developer (Remote)</span>
              <span className="text-right">Feb 2025  - June 2025</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-left mt-2 font-light">
            <p> <span className="mr-5">⇨</span> Responsible for developing and maintaining responsive user interfaces, ensuring a consistent and </p><p className="ml-10"> optimized user experience across different devices and browsers.</p>
            <p> <span className="mr-5">⇨</span> Collaborated with cross-functional teams to integrate APIs and implement performance </p><p className="ml-10">enhancements  for smooth functionality.</p>
            <p> <span className="mr-5">⇨</span> Contributed to building scalable and reusable components using React.js, while maintaining</p><p className="ml-10">clean and maintainable code to support long-term project sustainability.</p>
            <p> <span className="mr-5">⇨</span> Reviewed peer code to ensure readability, optimization, and adherence to coding standards </p> <p className="ml-10">used Git for version control to enable efficient and seamless collaboration with team members.</p>
          </p>



        </ItemLayout>




        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,react,nodejs,express,mongodb,postgres,postman,html,css,tailwind,bootstrap,git,github,cpp,py,c,vite,vscode,ai,vercel`}
            alt="zishanarif's skills"
            loading="lazy"
          />
        </ItemLayout>




      </div>
    </section>
  );
};

export default AboutDetails;
