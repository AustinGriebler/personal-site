import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterMenu = () => {
  return (
    <>
      <div className="flex justify-center items-center gap-2 my-2">
        <a
          href="https://github.com/AustinGriebler"
          className="flex rounded-full bg-slate-900 p-2 relative footer-icons"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/austin-griebler-838834123/"
          className="flex rounded-full bg-slate-900 p-2 relative footer-icons"
        >
          <LinkedInIcon />
        </a>
      </div>
    </>
  );
};

export default FooterMenu;
