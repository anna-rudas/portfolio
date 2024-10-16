import React, { useEffect, useState } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./Contact.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import { linkedInLink, emailAddress } from "../../../data/constants";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import SecondaryLink from "../../buttons/SecondaryLink/SecondaryLink";
import SectionWrapper from "../../templates/SectionWrapper/SectionWrapper";

function Contact() {
  const [isSendButtonPressed, setIsSendButtonPressed] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

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
      setIsSendButtonPressed(true);
      setButtonText("Sending...");
      setTimeout(() => {
        setButtonText("Sent!");
      }, 700);
      setTimeout(() => {
        setButtonText("Send");
        setIsSendButtonPressed(false);
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
    <SectionWrapper sectionId="contact" sectionTitle="Contact">
      <p {...className(textStyles.sectionText, textStyles.normalText)}>
        Write to me here or send me an{" "}
        <SecondaryLink to={emailAddress}>email</SecondaryLink>. You can also
        contact me on <SecondaryLink to={linkedInLink}>LinkedIn</SecondaryLink>.
      </p>
      <div {...className(style.formContainer)}>
        <form
          method="post"
          {...className(shared.frame, shared.frameLeft)}
          name="contactForm"
          id="contactForm"
        >
          <input type="hidden" name="form-name" value="contactForm" />
          <div {...className(style.senderInfoContainer)}>
            <label
              {...className(
                style.senderInfoLabel,
                style.label,
                textStyles.inputLabelText
              )}
            >
              Name
              <input
                {...className(style.input, textStyles.inputText)}
                type="text"
                name="name"
                required
                maxLength={50}
              />
            </label>
            <label
              {...className(
                style.senderInfoLabel,
                style.label,
                textStyles.inputLabelText
              )}
            >
              Email
              <input
                {...className(style.input, textStyles.inputText)}
                type="email"
                name="email"
                required
                maxLength={50}
              />
            </label>
          </div>
          <label
            {...className(
              style.textLabel,
              style.label,
              textStyles.inputLabelText
            )}
          >
            Subject
            <input
              {...className(style.input, textStyles.inputText)}
              name="subject"
              required
              maxLength={100}
            ></input>
          </label>
          <label
            {...className(
              style.textLabel,
              style.label,
              textStyles.inputLabelText
            )}
          >
            Message
            <textarea
              {...className(style.textArea, style.input, textStyles.inputText)}
              name="message"
              cols="30"
              rows="10"
              maxLength={1000}
              required
            ></textarea>
          </label>
          <PrimaryButton
            isDarkButtonStyle={false}
            extraButtonStyle={`${style.btnSubmit} ${
              isSendButtonPressed && style.btnInProgress
            }`}
          >
            <div
              {...className(
                style.btnFill,
                isSendButtonPressed && style.btnFillProgress
              )}
            ></div>
            <div {...className(style.btnText)}>{buttonText}</div>
          </PrimaryButton>
        </form>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
