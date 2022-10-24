import React from "react";
import { className } from "../../helpers";
import style from "./Contact.module.css";
import shared from "../shared.module.css";
import { linkedInLink, emailAddress } from "../../constants";

function Contact() {
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
          {"Linkedin"}
        </a>
        .
      </p>
      <div {...className(style.formCon)}>
        <form {...className(style.form, shared.frame, shared.frameLeft)}>
          <div {...className(style.senderInfo)}>
            <label {...className(style.senderInfoLabel, style.label)}>
              Name
              <input {...className(style.input)} type="text" name="name" />
            </label>
            <label {...className(style.senderInfoLabel, style.label)}>
              Email
              <input {...className(style.input)} type="email" name="email" />
            </label>
          </div>
          <label {...className(style.textLabel, style.label)}>
            Subject
            <input {...className(style.input)} name="subject"></input>
          </label>
          <label {...className(style.textLabel, style.label)}>
            Message
            <textarea
              {...className(style.textArea, style.input)}
              name="message"
              cols="30"
              rows="10"
            ></textarea>
          </label>
          <button {...className(shared.btn, style.btnSubmit)}>Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
