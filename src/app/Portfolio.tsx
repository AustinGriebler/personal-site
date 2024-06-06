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
            imageLink="../../bananaboxes.png"
            projectName="Banana Box"
            projectCompany="Bullseye Media"
            projectLink="https://bananaboxes.com"
          />
          <PortfolioCard
            imageLink="../../onesta.png"
            projectName="Onesta"
            projectCompany="Bullseye Media"
            projectLink="https://onestahaircare.com"
          />
          <PortfolioCard
            imageLink="../../blarutan.png"
            projectName="B'Larutan"
            projectCompany="Bullseye Media"
            projectLink="https://blarutan.com"
          />
          <PortfolioCard
            imageLink="../../dustys.png"
            projectName="Dusty's Car Wash"
            projectCompany="Bullseye Media"
            projectLink="https://dustyswash.com"
          />
          <PortfolioCard
            imageLink="../../talentspark.png"
            projectName="Talent Spark"
            projectCompany="Bullseye Media"
            projectLink="https://talentspark.com"
          />
        </div>
      </Container>
    </>
  );
};

export default Portfolio;
