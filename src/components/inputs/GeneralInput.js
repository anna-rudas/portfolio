import React, { useState, useEffect } from "react";
import { className } from "../../utilities/helpers";
import * as style from "./GeneralInput.module.css";
import * as textStyles from "../../assets/styles/text-styles.module.css";
import { useField } from "formik";

function GeneralInput({
  placeholder,
  config,
  isInputDisabled,
  isTextArea = false,
}) {
  const [field, meta] = useField(config);
  const [error, setError] = useState(meta.touched && meta.error);

  useEffect(() => {
    setError(meta.touched && meta.error);
  }, [meta]);

  return (
    <div {...className(style.generalInputContainer)}>
      <div {...className(style.generalInputContent)}>
        <label
          {...className(textStyles.inputLabelText, error && style.labelError)}
          htmlFor={config.name}
        >
          {placeholder}
        </label>
        {isTextArea ? (
          <textarea
            {...className(
              style.input,
              style.textArea,
              textStyles.inputText,
              error && style.inputError
            )}
            disabled={isInputDisabled}
            id={config.name}
            {...field}
            type="text"
          />
        ) : (
          <input
            {...className(
              style.input,
              textStyles.inputText,
              error && style.inputError
            )}
            disabled={isInputDisabled}
            id={config.name}
            {...field}
            type="text"
          />
        )}
      </div>
      {error ? (
        <div {...className(style.validationErrorText, textStyles.smallText)}>
          {meta.error}
        </div>
      ) : null}
    </div>
  );
}

export default GeneralInput;
