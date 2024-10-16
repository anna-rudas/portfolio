export const className = (...classNames) => {
  return {
    className: classNames.filter(Boolean).join(" "),
  };
};

export function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}
