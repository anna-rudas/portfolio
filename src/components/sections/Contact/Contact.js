import React, { useState } from "react";
import { className } from "../../../utilities/helpers";
import * as style from "./Contact.module.css";
import * as shared from "../../../assets/styles/shared.module.css";
import * as textStyles from "../../../assets/styles/text-styles.module.css";
import { linkedInLink, emailAddress } from "../../../data/constants";
import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import SecondaryLink from "../../buttons/SecondaryLink/SecondaryLink";
import SectionWrapper from "../../templates/SectionWrapper/SectionWrapper";
import { Formik, Form } from "formik";
import { contactFormSchema } from "../../../utilities/validationSchemas";
import GeneralInput from "../../inputs/GeneralInput";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

  const handleSubmit = (formValues) => {
    setIsLoading(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeURI({ "form-name": "contact-form", ...formValues }),
    })
      .then(() => {
        setButtonText("Sent!");
        setTimeout(() => {
          setButtonText("Send");
        }, 1000);
      })
      .catch((error) => {
        setButtonText("Error :(");
        setTimeout(() => {
          setButtonText("Send");
        }, 1000);
        console.error(error);
      })
      .finally(setIsLoading(false));
  };

  return (
    <SectionWrapper sectionId="contact" sectionTitle="Contact">
      <p {...className(textStyles.sectionText, textStyles.normalText)}>
        Write to me here or send me an{" "}
        <SecondaryLink to={emailAddress}>email</SecondaryLink>. You can also
        contact me on <SecondaryLink to={linkedInLink}>LinkedIn</SecondaryLink>.
      </p>
      <div {...className(style.formContainer)}>
        <Formik
          initialValues={{ name: "", email: "", subject: "", message: "" }}
          validationSchema={contactFormSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          <Form
            noValidate
            {...className(shared.frame, shared.frameLeft, style.formContent)}
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div {...className(style.senderInfoContainer)}>
              <GeneralInput
                config={{ name: "name" }}
                placeholder="Name"
                isInputDisabled={isLoading}
              />
              <GeneralInput
                config={{ name: "email" }}
                placeholder="Email"
                isInputDisabled={isLoading}
              />
            </div>
            <GeneralInput
              config={{ name: "subject" }}
              placeholder="Subject"
              isInputDisabled={isLoading}
            />
            <GeneralInput
              config={{ name: "message" }}
              placeholder="Message"
              isInputDisabled={isLoading}
              isTextArea={true}
            />
            <PrimaryButton
              isButtonDisabled={isLoading}
              isDarkButtonStyle={false}
              extraButtonStyle={style.formSubmitButton}
            >
              {buttonText}
            </PrimaryButton>
          </Form>
        </Formik>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
