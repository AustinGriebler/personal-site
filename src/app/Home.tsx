import { Button, Avatar, Container } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function Home() {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{ backgroundColor: "transparent", flexDirection: "column" }}
      >
        <div className="flex justify-center flex-col items-center">
          <Avatar
            alt="Austin Griebler"
            src="/src/assets/familypicture.jpg"
            sx={{ width: 200, height: 200, my: "2rem" }}
          />
          <h1 className="text-6xl">Hey! 👋 I'm Austin Griebler</h1>
          <p className="m-4 text-lg">
            I'm a technically advanced professional with substantial experience
            in front end development and software engineering. I'm an active
            problem-solver and troubleshooter, resolving complex issues via
            innovative solutions.
          </p>
          <Button
            type="button"
            variant="outlined"
            endIcon={<DownloadIcon />}
            sx={{
              my: 1,
              color: "white",
              display: "flex",
              fontFamily: "Dosis",
            }}
            href="/src/assets/Austin-Griebler-Resume.pdf"
            download="Austin_Griebler_Resume.pdf"
          >
            {" "}
            Download Resume
          </Button>
        </div>
      </Container>
    </>
  );
}

export default Home;
