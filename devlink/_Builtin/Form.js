import React from "react";
import { loadScript } from "../utils";
export function FormWrapper({
  className = "",
  state: initialState = "normal",
  onSubmit,
  children,
  ...props
}) {
  const [state, setState] = React.useState(initialState);
  return React.createElement(
    "div",
    {
      className: className + " w-form",
      ...props,
    },
    React.Children.map(children, (child) => {
      if (child.type === FormForm) {
        return React.cloneElement(child, {
          ...child.props,
          // @ts-ignore
          onSubmit: (e) => {
            try {
              e.preventDefault();
              // If grecaptcha is defined, it means there is a ReCaptcha in the form
              if (window.grecaptcha) {
                // If the response is empty, it means the user didn't check the box
                if (!window.grecaptcha?.getResponse()) {
                  alert(`Please confirm you’re not a robot.`);
                  return;
                }
              }
              if (onSubmit) {
                onSubmit(e);
                setState("success");
              }
            } catch (err) {
              /**
               * Capture the error to correctly set the state, but rethrow it
               * in case another error handling method is used above up in
               * the tree (e.g. Error Boundaries)
               */
              setState("error");
              throw err;
            }
          },
          style: {
            display: state == "normal" || state == "error" ? "block" : "none",
          },
        });
      }
      if (child.type === FormSuccessMessage) {
        return React.cloneElement(child, {
          ...child.props,
          // @ts-ignore
          style: { display: state == "success" ? "block" : "none" },
        });
      }
      if (child.type === FormErrorMessage) {
        return React.cloneElement(child, {
          ...child.props,
          // @ts-ignore
          style: { display: state == "error" ? "block" : "none" },
        });
      }
      return child;
    })
  );
}
export function FormForm(props) {
  return React.createElement("form", props);
}
export function FormBlockLabel(props) {
  return React.createElement("label", props);
}
export function FormTextInput({ className = "", ...props }) {
  return React.createElement("input", {
    type: "text",
    className: className + " w-input",
    ...props,
  });
}
export function FormTextarea({ className = "", ...props }) {
  return React.createElement("input", {
    type: "textarea",
    className: className + " w-input",
    ...props,
  });
}
export function FormInlineLabel({ className = "", ...props }) {
  return React.createElement("span", {
    className: className + " w-form-label",
    ...props,
  });
}
export function FormCheckboxWrapper({ className = "", ...props }) {
  return React.createElement("label", {
    className: className + " w-checkbox",
    ...props,
  });
}
export function FormRadioWrapper({ className = "", ...props }) {
  return React.createElement("label", {
    className: className + " w-radio",
    ...props,
  });
}
export function FormCheckboxInput({
  className = "",
  checked = false,
  ...props
}) {
  const checkedProps = {};
  if (typeof checked === "boolean") {
    checkedProps["defaultChecked"] = checked;
  }
  return React.createElement("input", {
    type: "checkbox",
    className: className + " w-checkbox",
    ...checkedProps,
    ...props,
  });
}
export function FormRadioInput({ className = "", inputType, ...props }) {
  if (inputType === "custom") {
    // TODO: support FormCustomRadioInput
  }
  return React.createElement("input", {
    className: className + " w-radio-input",
    ...props,
  });
}
const MAX_FILE_SIZE_DEFAULT = 10485760;
const FileUploadContext = React.createContext({
  files: null,
  error: null,
  maxSize: MAX_FILE_SIZE_DEFAULT,
  setFiles: () => {},
  setError: () => {},
});
export function FormFileUploadWrapper({
  maxSize = MAX_FILE_SIZE_DEFAULT,
  ...props
}) {
  const [files, setFiles] = React.useState(null);
  const [error, setError] = React.useState(null);
  return React.createElement(
    FileUploadContext.Provider,
    {
      value: { files, setFiles, error, setError, maxSize },
    },
    React.createElement(_FormFileUploadWrapper, { ...props })
  );
}
export function _FormFileUploadWrapper({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-file-upload",
    ...props,
  });
}
export function FormFileUploadDefault({ className = "", ...props }) {
  const { files, error } = React.useContext(FileUploadContext);
  return React.createElement("div", {
    className: className + " w-file-upload-default",
    ...props,
    style: {
      ...props.style,
      display: !files || error ? "block" : "none",
    },
  });
}
export function FormFileUploadInput({ className = "", ...props }) {
  const { setFiles, setError, maxSize } = React.useContext(FileUploadContext);
  return React.createElement("input", {
    type: "file",
    className: className + " w-file-upload-input",
    ...props,
    onChange: (e) => {
      if (e.target.files) {
        if (e.target.files[0].size <= maxSize) {
          setError(null);
          setFiles(e.target.files);
        } else setError("SIZE_ERROR");
      }
    },
  });
}
export function FormFileUploadLabel({ className = "", ...props }) {
  return React.createElement("label", {
    className: className + " w-file-upload-label",
    ...props,
  });
}
export function FormFileUploadText({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-inline-block",
    ...props,
  });
}
export function FormFileUploadInfo({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-file-upload-info",
    ...props,
  });
}
export function FormFileUploadUploading({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-file-upload-uploading",
    style: { ...props.style, display: "none" },
    ...props,
  });
}
export function FormFileUploadUploadingBtn({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-file-upload-uploading-btn",
    ...props,
  });
}
export function FormFileUploadUploadingIcon({ className = "", ...props }) {
  return React.createElement(
    "svg",
    {
      className: className + " icon w-icon-file-upload-uploading",
      ...props,
    },
    <>
      <path
        fill="currentColor"
        opacity=".2"
        d="M15 30a15 15 0 1 1 0-30 15 15 0 0 1 0 30zm0-3a12 12 0 1 0 0-24 12 12 0 0 0 0 24z"
      ></path>
      <path
        fill="currentColor"
        opacity=".75"
        d="M0 15A15 15 0 0 1 15 0v3A12 12 0 0 0 3 15H0z"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          dur="0.6s"
          from="0 15 15"
          repeatCount="indefinite"
          to="360 15 15"
          type="rotate"
        ></animateTransform>
      </path>
    </>
  );
}
export function FormFileUploadSuccess({ className = "", ...props }) {
  const { files, error } = React.useContext(FileUploadContext);
  return React.createElement("div", {
    className: className + " w-file-upload-success",
    ...props,
    style: {
      ...props.style,
      display: !!files && !error ? "block" : "none",
    },
  });
}
export function FormFileUploadFile({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-file-upload-file",
    ...props,
  });
}
export function FormFileUploadFileName({ className = "", ...props }) {
  const { files } = React.useContext(FileUploadContext);
  return React.createElement(
    "div",
    {
      className: className + " w-file-upload-file-name",
      ...props,
    },
    files && files[0].name
  );
}
export function FormFileUploadRemoveLink({ className = "", ...props }) {
  const { setFiles } = React.useContext(FileUploadContext);
  return React.createElement("div", {
    className: className + " w-file-remove-link",
    ...props,
    onClick: () => {
      setFiles(null);
    },
  });
}
export function FormFileUploadError({ className = "", ...props }) {
  const { error } = React.useContext(FileUploadContext);
  return React.createElement("div", {
    className: className + " w-file-upload-error",
    ...props,
    style: {
      ...props.style,
      display: !!error ? "block" : "none",
    },
  });
}
export function FormFileUploadErrorMsg({ errors, className = "", ...props }) {
  const { error } = React.useContext(FileUploadContext);
  return React.createElement(
    "div",
    {
      className: className + " w-file-upload-error-msg",
      ...props,
    },
    errors[error ?? "GENERIC_ERROR"]
  );
}
export function FormButton({ className = "", value, ...props }) {
  return React.createElement("input", {
    type: "submit",
    value: value ?? "",
    className: className + " w-button",
    ...props,
  });
}
export function SearchForm(props) {
  return React.createElement("form", props);
}
export function SearchInput({ className = "", ...props }) {
  return React.createElement("input", {
    type: "text",
    className: className + " w-input",
    ...props,
  });
}
export function SearchButton({ value = "", className = "", ...props }) {
  return React.createElement("input", {
    type: "submit",
    value,
    className: className + " w-button",
    ...props,
  });
}
export function FormSuccessMessage({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-form-done",
    ...props,
  });
}
export function FormErrorMessage({ className = "", ...props }) {
  return React.createElement("div", {
    className: className + " w-form-fail",
    ...props,
  });
}
function hasValue(str) {
  if (typeof str !== "string") return false;
  //   is &nbsp
  return str.replace(/^[s ]+|[s ]+$/g, "").length > 0;
}
export function FormSelect({ options, className = "", ...props }) {
  return React.createElement(
    "select",
    { className: className + " w-select", ...props },
    options.map(({ v, t }, index) =>
      React.createElement(
        "option",
        { key: index, value: hasValue(v) ? v : "" },
        hasValue(t) ? t : ""
      )
    )
  );
}
export function FormReCaptcha({
  siteKey = "",
  theme = "light",
  size = "normal",
}) {
  React.useEffect(() => {
    loadScript("https://www.google.com/recaptcha/api.js", {
      cacheRegex: /(http|https):\/\/(www)?.+\/recaptcha/,
    });
  }, []);
  return (
    <div
      className="g-recaptcha"
      data-sitekey={siteKey}
      data-theme={theme}
      data-size={size}
    />
  );
}
