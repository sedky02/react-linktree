import "./link-btn.css";

const ButtonLink = ({ text, url, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="button-link"
    >
      <span className="button-icon">{icon}</span>
      {text}
    </a>
  );
};

export default ButtonLink;
