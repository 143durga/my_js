/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Rice Leaf Disease Classification 🎉",
    description:
      "Utilizing machine learning and deep learning techniques, this web application accurately identifies and categorizes diseases affecting rice plants based on leaf images. It empowers farmers with early detection capabilities, aiding in timely interventions for crop protection and food security.",
    url: "https://github.com/143durga/Rice-Leaf-Disease-Classification",
  },
  {
    title: "Web Development for Beginners",
    description:
      "A tribute page honoring a notable figure, designed with HTMLto showcase their achievements and legacy..",
    url: "https://github.com/143durga/tribute",
  },
  {
    title: "My Page ",
    description:
      "Created from Canva's Portfolio. Includes my experience and design abilities.",
    url: "https://www.canva.com/design/DAGIkYSWgUI/bP_e3InEeTz3xW-tX6sPmA/view?utm_content=DAGIkYSWgUI&utm_campaign=designshare&utm_medium=link&utm_source=editor.",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
