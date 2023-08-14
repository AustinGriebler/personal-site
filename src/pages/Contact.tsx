import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function Contact() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5173/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
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
          onClick={handleSubmit}
        >
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
            {status}
          </Button>
        </form>
      </Container>
    </>
  );
}

export default Contact;
