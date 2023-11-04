import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Container, Snackbar } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { send } from "emailjs-com";
import CloseIcon from "@mui/icons-material/Close";

function Contact() {
  const [toSend, setToSend] = useState({
    name: "",
    message: "",
    email: "",
  });

  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    event?.cancelable;

    setOpen(false);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    send("service_cw6pjx6", "template_i11l1qh", toSend, "oSxb6tqql28Klhug7")
      .then((response) => {
        console.log(response);
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Email Sent"
          action={<CloseIcon />}
        />;
      })
      .catch((err) => {
        console.log(err);
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message="Error sending email"
          action={<CloseIcon />}
        />;
      });
  };

  const handleChange = (e: any) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Container
        maxWidth="md"
        sx={{ backgroundColor: "transparent", flexDirection: "column" }}
      >
        <h3 className="m-3">Wanna talk? Send me a message!</h3>
        <form
          className="grid grid-rows-1 grid-flow-rows gap-2"
          onSubmit={onSubmit}
        >
          <div className="grid grid-cols-2 gap-2 mb-2">
            <TextField
              id="name"
              name="name"
              label="Name"
              variant="outlined"
              type="text"
              value={toSend.name}
              onChange={handleChange}
              required
            />
            <TextField
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              type="email"
              value={toSend.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="grid grid-cols-1">
            <TextField
              id="message"
              name="message"
              label="Message Me!"
              value={toSend.message}
              onChange={handleChange}
              multiline
              rows={4}
            />
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
