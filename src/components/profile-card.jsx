import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import ButtonLink from "./link-btn";
import profileImage from "../assets/software-engineer-portfolio-scaled.jpg";
import "./profile-card.css";

const ProfileCard = () => {
  const [status, setStatus] = useState("online");

  const linkTreeData = [
    { text: "GitHub", url: "https://github.com", icon: <FaGithub /> },
    { text: "LinkedIn", url: "https://linkedin.com", icon: <FaLinkedin /> },
    { text: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
    { text: "Instagram", url: "https://instagram.com", icon: <FaInstagram /> }
  ];

  const toggleStatus = () => {
    setStatus(status === "online" ? "offline" : "online");
  };

  return (
    <div className="profile-card">
      <div className="profile-image-container">
        <img
          src={profileImage}
          alt="Jessica Randall"
          className="profile-image"
        />
        <div
          className={`status-dot ${status}`}
          onClick={toggleStatus}
          title={`Click to switch to ${status === "online" ? "offline" : "online"}`}
        ></div>
      </div>
      <div className="profile-header">
        <h2 className="profile-name">Jessica Randall</h2>
        <span className={`status-text ${status}`} onClick={toggleStatus}>
          {status === "online" ? "🟢 Online" : "🔴 Offline"}
        </span>
      </div>
      <p className="profile-location">London, United Kingdom</p>
      <p className="profile-bio">"Front-end developer and React lover."</p>

      {linkTreeData.map((link, index) => (
        <ButtonLink key={index} text={link.text} url={link.url} icon={link.icon} />
      ))}
    </div>
  );
};

export default ProfileCard;
