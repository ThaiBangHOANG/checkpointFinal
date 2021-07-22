import Title from "../Components/AboutContactTitle";
import ImageSection from "../Components/AboutSection";
import SkillsSection from "../Components/AboutSkillsSection";

function AboutPage() {
  return (
    <div>
      <Title title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Title title={"My Skills"} span={"My Skills"} />
      <div className="skills-container">
        <SkillsSection skill={"Javascript"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"React.js"} progress={"75%"} width={"75%"} />
        <SkillsSection skill={"Node.js"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"C"} progress={"85%"} width={"85%"} />
        <SkillsSection skill={"C++"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Matlab"} progress={"85%"} width={"85%"} />
        <SkillsSection skill={"CSS"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"HTML"} progress={"95%"} width={"95%"} />
        <SkillsSection skill={"MySQL"} progress={"75%"} width={"75%"} />
        <SkillsSection skill={"Bootstrap"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Method Agile"} progress={"85%"} width={"85%"} />
        <SkillsSection skill={"Git"} progress={"95%"} width={"95%"} />
        <SkillsSection skill={"Github"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"SASS"} progress={"85%"} width={"85%"} />
        <SkillsSection skill={"Dokku"} progress={"75%"} width={"75%"} />
      </div>
    </div>
  );
}

export default AboutPage;
