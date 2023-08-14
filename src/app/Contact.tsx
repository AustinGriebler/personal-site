import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  return (
    <>
      <Container
        maxWidth="md"
        sx={{ backgroundColor: "transparent", flexDirection: "column" }}
      >
        <h3 className="m-3">Wanna talk? Send me a message!</h3>
        <form className="grid grid-rows-1 grid-flow-rows gap-2">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              type="text"
              required
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              type="email"
              required
            />
          </div>
          <div className="grid grid-cols-1">
            <TextField id="message" label="Message Me!" multiline rows={4} />
          </div>
          <Button
            type="submit"
            variant="outlined"
            endIcon={<SendIcon />}
            sx={{
              my: 1,
              color: "white",
              display: "flex",
              fontFamily: "Dosis",
            }}
          >
            {" "}
            Submit
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Contact;
