import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Snackbar } from "@mui/material";
import {
  ContactButton,
  ContactInputMessage,
  ContactInput,
  ContactTitle,
  ContactForm,
  Desc,
  Title,
  Container,
  Wrapper,
} from "./ContactStyle";

const Contact = () => {
  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_tox7kqs",
        "template_nv7k7mj",
        form.current,
        "SybVGsYS52j2TfLbi"
      )
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          N'hésitez pas à me contacter pour toutes questions complémentaires ou
          opportunités !
        </Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Contactez-moi 🚀</ContactTitle>
          <ContactInput placeholder="Email" name="from_email" />
          <ContactInput placeholder="Nom" name="from_name" />
          <ContactInput placeholder="Sujet" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Envoyer" />
        </ContactForm>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  );
};

export default Contact;
