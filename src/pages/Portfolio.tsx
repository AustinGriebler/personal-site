import PortfolioCard from "@/components/Card";
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
            imageLink="/src/assets/duck.jpg"
            projectName="luuke"
            projectCompany="Personal Project"
            projectLink="/"
            languages={["React", "Other", "Things"]}
          />
          <PortfolioCard
            imageLink="/src/assets/bananabox.png"
            projectName="Banana Box"
            projectCompany="Bullseye Media"
            projectLink="/"
            languages={["PHP", "WordPress", "JavaScript"]}
          />
          <PortfolioCard
            imageLink="/src/assets/duck.jpg"
            projectName="Onesta"
            projectCompany="Bullseye Media"
            projectLink="/"
            languages={["PHP", "WordPress", "JavaScript"]}
          />
          <PortfolioCard
            imageLink="/src/assets/duck.jpg"
            projectName="B'Larutan"
            projectCompany="Bullseye Media"
            projectLink="/"
            languages={["PHP", "WordPress", "JavaScript"]}
          />
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
