//internal components
import ImageWrapper from "@components/image_wrapper";
import Badge from "@components/badges";
//lib
import { InView } from "react-intersection-observer";

//utils
import { skills } from "./utils";

function SkillsSection({ ...props }) {
  const CustomBadgeText = ({ ...props }) => (
    <span>Skills &middot; Experiences</span>
  );

  return (
    <div className="skills-section flex flex-col mb-[14rem]" id="skills">
      <div className="flex flex-col items-center">
        <Badge
          icon="👨‍💻"
          text={<CustomBadgeText />}
          tailwindStyles="mb-[2.4rem]"
        />
        <p className="text-[4.2rem] font-extrabold leading-[5.6rem] mb-[10rem]">
          Technology & Skills
        </p>
        <div className="skills-section__skills-container ">
          <div className="skills-section__primary-skills mb-[6rem]">
            <p className="text-[2.4rem] leading-[2.8rem] text-customGrey mb-[4rem] text-center">
              Technologies I use everyday
            </p>

            <div className="skills-section__primary-skills-image-container flex flex-wrap gap-y-[2.8rem] gap-x-[3.2rem] justify-center ">
              {skills
                .filter((skill) => skill?.primary)
                .map((skill, index) => {
                  return (
                    <InView
                      threshold={0.5}
                      onChange={(inView, entry) => {
                        entry.target.classList.toggle(
                          "slide-up",
                          entry.isIntersecting
                        );
                      }}
                      key={index}
                    >
                      {({ ref }) => (
                        <div
                          className="grid place-items-center skill-image-wrapper opacity-0 translate-x-[100%] duration-300 transition-all"
                          ref={ref}
                          title={skill.name}
                        >
                          <ImageWrapper
                            icon={skill.img}
                            key={index}
                            tailwindStyles="max-w-[6.4rem]"
                          />
                        </div>
                      )}
                    </InView>
                  );
                })}
            </div>
          </div>
          <div className="skills-section__secondary-skills">
            <p className="text-[2.4rem] leading-[2.8rem] text-customGrey mb-[4rem] text-center">
              Technologies I do not use everyday
            </p>
            <div className="skills-section__secondary-skills-image-container flex flex-wrap gap-y-[2.8rem] gap-x-[3.2rem] justify-center">
              {skills
                .filter((skill) => !skill?.primary)
                .map((skill, index) => {
                  return (
                    <InView
                      threshold={0.5}
                      onChange={(inView, entry) => {
                        entry.target.classList.toggle(
                          "slide-up",
                          entry.isIntersecting
                        );
                      }}
                      key={index}
                    >
                      {({ ref }) => (
                        <div
                          className="skill-image-wrapper transition-all duration-150 opacity-0 translate-x-[-50%]"
                          ref={ref}
                        >
                          <ImageWrapper
                            icon={skill.img}
                            key={index}
                            tailwindStyles="max-w-[6.4rem]"
                          />
                        </div>
                      )}
                    </InView>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
