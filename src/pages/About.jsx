import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { education, experiences, skillGroups } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='page-shell'>
      <div className='max-container'>
      <h1 className='head-text text-[#f0e6c8]'>
        Hello, I'm{" "}
        <span className='gold-gradient_text font-semibold drop-shadow'>
          {" "}
          Sunil
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-[#a89060]'>
        <p>
          AI/ML developer specializing in applied computer vision with a strong
          Django/FastAPI backend foundation. Built and production-deployed a
          template-independent OMR engine (~70K lines, OpenCV) reaching 98.92%
          accuracy with 400+ automated tests and a frozen regression baseline.
          Currently building a FastAPI + local-LLM RAG system from first
          principles; deepening ML fundamentals via Scaler's Advanced AI/ML
          program (ending 2027).
        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text text-[#f0e6c8]'>My Skills</h3>

        <div className='mt-8 flex flex-col gap-12'>
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h4 className='text-xl font-poppins font-semibold text-[#f0e6c8]'>
                {group.title}
              </h4>

              {group.icons && (
                <div className='mt-6 flex flex-wrap gap-12'>
                  {group.icons.map((skill) => (
                    <div
                      className='block-container w-20 h-20'
                      key={skill.name}
                    >
                      <div className='btn-back rounded-xl btn-back-gold' />
                      <div className='btn-front rounded-xl flex justify-center items-center'>
                        <img
                          src={skill.imageUrl}
                          alt={skill.name}
                          className='w-1/2 h-1/2 object-contain'
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {group.chips && (
                <div className='mt-6 flex flex-wrap gap-3'>
                  {group.chips.map((chip) => (
                    <span
                      key={chip}
                      className={`rounded-full px-5 py-2.5 text-sm font-medium glass-gold ${
                        group.highlight
                          ? "text-[#c9a84c] border-[#c9a84c]/60"
                          : "text-[#c9a84c]"
                      }`}
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text text-[#f0e6c8]'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-[#a89060]'>
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full text-white font-poppins font-semibold text-sm'>
                    {experience.monogram}
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-[#f0e6c8] text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/70 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}

            {education.map((entry, index) => (
              <VerticalTimelineElement
                key={entry.school}
                date={entry.date}
                iconStyle={{
                  background: entry.iconBg,
                  border: entry.highlight ? "2px solid #c9a84c" : "none",
                }}
                icon={
                  <div className='flex justify-center items-center w-full h-full text-2xl'>
                    {entry.monogram}
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: entry.highlight ? "#c9a84c" : entry.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-[#f0e6c8] text-xl font-poppins font-semibold'>
                    {entry.degree}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {entry.school}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {entry.points.map((point, index) => (
                    <li
                      key={`education-point-${index}`}
                      className='text-black-500/70 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-[#c9a84c]/20' />

      <CTA />
      </div>
    </section>
  );
};

export default About;
