// https://react-icons.github.io/react-icons/
import { FaGithub, FaLink, FaTwitter } from "react-icons/fa";
import React from 'react'

const SocialLinks = ({ githubUrl, link, twitter }) => {
  const twitterLink = `https://twitter.com/${twitter}`;

  if (link === "" && twitter === null) {
    return (
      <>
        <div className="social-links">
          <a href={githubUrl} rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </>
    );
  }

  if (link !== "" && twitter === null) {
    return (
      <>
        <div className="social-links">
          <a className="mr-5" href={githubUrl} rel="noreferrer">
            <FaGithub />
          </a>

          <a href={link} rel="noreferrer">
            <FaLink />
          </a>
        </div>
      </>
    );
  }

  if (link === "" && twitter !== null) {
    return (
      <>
        <div className="social-links">
          <a className="mr-5" href={githubUrl} rel="noreferrer">
            <FaGithub />
          </a>

          <a href={twitterLink} rel="noreferrer">
            <FaTwitter />
          </a>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="social-links">
        <a href={githubUrl} rel="noreferrer">
          <FaGithub />
        </a>

        <a className="mx-5" href={link} rel="noreferrer">
          <FaLink />
        </a>

        <a href={twitterLink} rel="noreferrer">
          <FaTwitter />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;
