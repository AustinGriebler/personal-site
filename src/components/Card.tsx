export interface CardProps {
  imageLink: string;
  projectName: string;
  projectCompany: string;
  projectLink: string;
}

const PortfolioCard = (prop: CardProps): JSX.Element => {
  return (
    <>
      <a href={prop.projectLink} className="h-full" target="_blank">
        <div className="rounded-xl border bg-card text-card-foreground shadow bg-gradient-to-tr from-slate-950 to-slate-800 h-full overflow-hidden">
          <div className="flex flex-col items-center pb-6 space-y-1">
            <div className="h-[200px]">
              <img
                src={prop.imageLink}
                className="border border-none rounded h-full object-cover"
              />
            </div>
            <div className="p-4">
              <div className="text-3xl">{prop.projectName}</div>
              <div className="text-xl">{prop.projectCompany}</div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default PortfolioCard;
