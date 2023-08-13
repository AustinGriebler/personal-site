import { Chip } from "@mui/material";

export interface CardProps {
  imageLink: string;
  projectName: string;
  projectCompany: string;
  projectLink: string;
  languages: string[];
}

const PortfolioCard = (prop: CardProps): JSX.Element => {
  return (
    <>
      <a href={prop.projectLink} className="h-full">
        <div className="rounded-xl border bg-card text-card-foreground shadow bg-gradient-to-tr from-slate-950 to-slate-800 h-full">
          <div className="flex flex-col items-center p-6 space-y-1">
            <div className="h-[200px]">
              <img
                src={prop.imageLink}
                className="border border-none rounded h-full object-none object-center"
              />
            </div>
            <div className="pt-4">
              <div className="text-3xl">{prop.projectName}</div>
              <div className="text-xl">{prop.projectCompany}</div>
              <div className="flex flex-row flex-wrap justify-center items-center gap-2 pt-2">
                {prop.languages.map((language) => (
                  <Chip
                    key={language}
                    label={language}
                    size="small"
                    sx={{
                      backgroundColor: "white",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default PortfolioCard;
