import React, { useEffect, useState } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./Contact.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import { linkedInLink, emailAddress } from "../../../data/constants";

function Contact() {
  const [isBtnPressed, setIsBtnPressed] = useState(false);
  const [btnText, setBtnText] = useState("Send");

  useEffect(() => {
    const handleSubmit = (event) => {
      event.preventDefault();

      const myForm = event.target;
      const formData = new FormData(myForm);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
      document.getElementById("contactForm").reset();
      setIsBtnPressed(true);
      setBtnText("Sending...");
      setTimeout(() => {
        setBtnText("Sent!");
      }, 700);
      setTimeout(() => {
        setBtnText("Send");
        setIsBtnPressed(false);
      }, 1400);
    };

    const [firstForm, ...restForms] = Array.from(
      document.querySelectorAll("form")
    );

    firstForm.addEventListener("submit", handleSubmit);
    restForms.forEach((currentForm) => {
      currentForm.addEventListener("submit", (event) => event.preventDefault());
    });
  }, []);

  return (
    <div {...className(shared.section)} id="contact">
      <h2 {...className(shared.title, shared.titlePrimary)}>Contact</h2>
      <p {...className(shared.sectionText, shared.paragraph)}>
        Write to me here or send me an{" "}
        <a {...className(shared.links)} href={emailAddress}>
          {"email"}
        </a>
        . You can also contact me on{" "}
        <a
          {...className(shared.links)}
          target="_blank"
          rel="noreferrer"
          href={linkedInLink}
        >
          {"LinkedIn"}
        </a>
        .
      </p>
      <div {...className(style.formCon)}>
        <form
          method="post"
          {...className(style.form, shared.frame, shared.frameLeft)}
          name="contactForm"
          id="contactForm"
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <div {...className(style.senderInfo)}>
            <label {...className(style.senderInfoLabel, style.label)}>
              Name
              <input
                {...className(style.input)}
                type="text"
                name="name"
                required
                maxLength={50}
              />
            </label>
            <label {...className(style.senderInfoLabel, style.label)}>
              Email
              <input
                {...className(style.input)}
                type="email"
                name="email"
                required
                maxLength={50}
              />
            </label>
          </div>
          <label {...className(style.textLabel, style.label)}>
            Subject
            <input
              {...className(style.input)}
              name="subject"
              required
              maxLength={100}
            ></input>
          </label>
          <label {...className(style.textLabel, style.label)}>
            Message
            <textarea
              {...className(style.textArea, style.input)}
              name="message"
              cols="30"
              rows="10"
              maxLength={1000}
              required
            ></textarea>
          </label>
          <button
            type="submit"
            {...className(
              shared.btn,
              style.btnSubmit,
              isBtnPressed && style.btnInProgress
            )}
          >
            <div
              {...className(
                style.btnFill,
                isBtnPressed && style.btnFillProgress
              )}
            ></div>
            <div {...className(style.btnText)}>{btnText}</div>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
