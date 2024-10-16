import React from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./About.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import { skillTags, linkedInLink, emailAddress } from "../../../data/constants";
import aboutImg from "../../../assets/images/about-me.jpg";
import SecondaryLink from "../../buttons/SecondaryLink/SecondaryLink";
import SectionWrapper from "../../templates/SectionWrapper/SectionWrapper";
import InfoTags from "../../templates/InfoTags/InfoTags";

function About() {
  return (
    <SectionWrapper sectionId="about" sectionTitle="About me">
      <p {...className(textStyles.sectionText, textStyles.normalText)}>
        In 2022 I have completed my Bachelor of Science, majoring in Electrical
        Engineering. While in university not only did I study natural science,
        but also gained an understanding of the principles of OOP, as well as
        had numerous classes focused on learning programming languages like C,
        C++, SQL and Matlab.
        <br /> All of this helped me discover my passion for software
        development and gave me a foundation of knowledge that I could build on
        to create websites like the ones you can see in the{" "}
        <SecondaryLink to="#projects">Projects</SecondaryLink> section. Check
        them out!
        <br />
        I&apos;m open to job opportunities where I can learn and contribute. If
        you have a good opportunity that matches my skills and experience then
        don&apos;t hesitate to contact me on{" "}
        <SecondaryLink to={linkedInLink}>LinkedIn</SecondaryLink> or write me an{" "}
        <SecondaryLink to={emailAddress}>email</SecondaryLink>.
      </p>
      <div {...className(style.skillsContainer)}>
        <div {...className(style.imageContainer)}>
          <img
            {...className(style.aboutImage, shared.frame, shared.frameRight)}
            src={aboutImg}
            alt=""
          />
        </div>
        <div {...className(style.skillsTextContent)}>
          <div>
            <h3 {...className(textStyles.subtitleText)}>My Skills</h3>
            <p {...className(textStyles.normalText)}>
              I am constantly working to add to my list of skills, as I am the
              happiest when creating, exploring or learning something new.
              <br />
              I&apos;m not afraid of challenging myself; progress comes from
              failing and learning from your mistakes.
            </p>
          </div>
          <InfoTags tagList={skillTags} />
        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;
