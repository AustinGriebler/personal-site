import { PortfolioCard } from "@/components";
import { Container } from "@mui/material";

const Portfolio = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ backgroundColor: "transparent", flexDirection: "column" }}
      >
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 items-center justify-center gap-4 [&amp;>div]:w-full p-8">
          <PortfolioCard
            imageLink="../../public/familypicture.jpg"
            projectName="luuke"
            projectCompany="Personal Project"
            projectLink="/"
            languages={["React", "Other", "Things"]}
          />
          <PortfolioCard
            imageLink="../../public/bananaboxes.png"
            projectName="Banana Box"
            projectCompany="Bullseye Media"
            projectLink="https://bananaboxes.com"
            languages={["PHP", "WordPress", "JavaScript"]}
          />
          <PortfolioCard
            imageLink="../../public/onesta.png"
            projectName="Onesta"
            projectCompany="Bullseye Media"
            projectLink="https://onestahaircare.com"
            languages={["PHP", "WordPress", "JavaScript"]}
          />
          <PortfolioCard
            imageLink="../../public/blarutan.png"
            projectName="B'Larutan"
            projectCompany="Bullseye Media"
            projectLink="https://blarutan.com"
            languages={["PHP", "WordPress", "JavaScript"]}
          />
          <PortfolioCard
            imageLink="../../public/dustys.png"
            projectName="Dusty's Car Wash"
            projectCompany="Bullseye Media"
            projectLink="https://dustyswash.com"
            languages={["PHP", "WordPress", "JavaScript"]}
          />
          <PortfolioCard
            imageLink="../../public/talentspark.png"
            projectName="Talent Spark"
            projectCompany="Bullseye Media"
            projectLink="https://talentspark.com"
            languages={["PHP", "WordPress", "JavaScript"]}
          />
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
