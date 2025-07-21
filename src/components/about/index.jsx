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

     
<ItemLayout className="col-span-full lg:col-span-8 row-span-2 flex-col items-start">
  <h3 className="font-semibold text-2xl sm:text-4xl text-left text-[#6925d8]">
    Experience
  </h3>

  {/* Lead Sure Media */}
  <div className="w-full text-[#6925d8] text-base sm:text-lg font-semibold mt-1">
    <p className="mb-1">Lead Sure Media, Noida</p>
    <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full">
      <span>Web Developer & Designer (Onsite)</span>
      <span className="sm:text-right mt-1 sm:mt-0">June 2025 - Present</span>
    </div>
  </div>

  <ul className="text-sm sm:text-base text-left mt-2 font-light space-y-2">
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Designed and developed full-stack websites with a focus on clean, responsive UI
        using HTML, CSS, JavaScript, and modern frameworks.
      </span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Converted design references into pixel-perfect layouts, ensuring design accuracy across
        all devices and browsers.
      </span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Standardized typography and color systems for design consistency and smoother developer handoff.
      </span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Built responsive, SEO-friendly pages with HTML, CSS, JS, Bootstrap, and React.js.
      </span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Contributed to backend development using MongoDB, PHP and SQL.
      </span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Removed redundant styles and scripts using AI tools, improving performance.
      </span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Participated in discussions with senior developers to share progress, gather feedback, and improve features.
      </span>
    </li>
  </ul>

  {/* CollegePur */}
  <div className="w-full text-[#6925d8] text-base sm:text-lg font-semibold mt-4">
    <p className="mb-1">CollegePur, Ghaziabad</p>
    <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full">
      <span>Frontend Web Developer (Remote)</span>
      <span className="sm:text-right mt-1 sm:mt-0">Feb 2025 - June 2025</span>
    </div>
  </div>

  <ul className="text-sm sm:text-base text-left mt-2 font-light space-y-2">
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Developed and maintained responsive user interfaces, ensuring consistent UX across devices and browsers.
      </span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Collaborated with cross-functional teams to integrate APIs and implement performance enhancements.
      </span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Built scalable and reusable components using React.js, maintaining clean and maintainable code.
      </span>
    </li>
    <li className="flex items-start">
      <span className="mr-2">⇨</span>
      <span>
        Reviewed peer code to ensure optimization and used Git for version control, enabling seamless collaboration.
      </span>
    </li>
  </ul>
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
