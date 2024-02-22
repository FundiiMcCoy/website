"use client";

import React, { useState, useRef } from 'react'

import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";

/*--------------COMPONENTS------------------*/
import iTravel from '/public/images/itravel.jpg';
import WYBMag from '/public/images/wyb.jpg';
import Sarafina from '/public/images/sarafina.jpg';
import uHamboBook from '/public/images/uhambo.jpg';
import UKZN from '/public/images/ukzn.jpg';
import Bokomo from '/public/images/bokomo.jpg';
import Chichima from '/public/images/chichima.jpg';
import VillageB from '/public/images/village.jpg';
import SoClean from '/public/images/soclean.jpg';
import AFASA from '/public/images/afasa.jpg';
import Mamello from '/public/images/mamello.jpg';
import RBD from '/public/images/rbdesign.jpg';
import GemiSquare from '/public/images/gemisquare.jpg';
import BALM from '/public/images/balm.jpg';
import Umthombo from '/public/images/umthombo.jpg';




const ProjectsData = [

  {
    id: 1,
    key: 1,
    title: "i-Travel Group",
    description: "Crafting a sophisticated logo and brand identity for a premier travel agency set to redefine luxury travel experiences in Africa and beyond.",
    image: iTravel.src,
    tag: ["All", "Brand Identity"],
    previewUrl: "/",

  },
  {
    id: 2,
    key: 2,
    title: "Wear Your Brand Magazine",
    description: "Crafting visually compelling content and designing eye-catching covers for a South African business magazine.",
    image: WYBMag.src,
    tag: ["All", "Publication"],
    previewUrl: "/"

  },

  {
    id: 3,
    key: 3,
    title: "Dr Mbongeni Ngema's SARAFINA!",
    description: "Planning, designing, and curating engaging social media content to promote the Sarafina theatrical production in Durban.",
    image: Sarafina.src,
    tag: ["All", "Digital"],
    previewUrl: "/"

  },
  {
    id: 4,
    key: 4,
    title: "Uhambo Lwami",
    description: " Illustrating and designing a captivating children's book in isiZulu, from storyboarding to print setup.",
    image: uHamboBook.src,
    tag: ["All", "Publication"],
    previewUrl: "/"

  },
  {
    id: 5,
    key: 5,
    title: "University of KwaZulu-Natal",
    description: "Designing a comprehensive workbook for training on crowd control, providing essential tools and insights for effective management.",
    image: UKZN.src,
    tag: ["All", "Publication"],
    previewUrl: "/"

  },
  {
    id: 6,
    key: 6,
    title: "Bokomo Namibia",
    description: "Designing captivating social media content to enhance brand visibility and customer interaction for a leading FMCG client in Namibia.",
    image: Bokomo.src,
    tag: ["All", "Digital"],
    previewUrl: "/"

  },

  {
    id: 8,
    key: 8,
    title: "SoChem",
    description: "Conceptualizing visually stunning packaging for a washing detergent company in Zambia.",
    image: SoClean.src,
    tag: ["All", "Packaging"],
    previewUrl: "/"

  },
  {
    id: 9,
    key: 9,
    title: "Chichima IV Drip",
    description: "Designing a distinctive logo and brand identity for a mobile IV drip business, blending professionalism with convenience and wellness.",
    image: Chichima.src,
    tag: ["All", "Brand Identity", "Digital"],
    previewUrl: "/"

  },
  {
    id: 7,
    key: 7,
    title: "Umthombo Farming Project",
    description: "Develop a brand identity for Umthombo Farming Project, aimed at supplying fresh and low-cost fruits and vegetables conveniently during COVID-19.",
    image: Umthombo.src,
    tag: ["All", "Brand Identity", "Packaging"],
    previewUrl: "/"

  },
  {
    id: 10,
    key: 10,
    title: "Village Bread",
    description: "Utilizing advanced 3D rendering to conceptualize innovative packaging designs for a local South African bakery.",
    image: VillageB.src,
    tag: ["All", "Packaging"],
    previewUrl: "/"

  },
  {
    id: 13,
    key: 13,
    title: "RB DIY Interiors",
    description: "Establish a luxury brand identity for Real Black DIY Interiors, an interior design company in Umlazi, Durban. Develop collateral including letterhead and invoices for an established identity.",
    image: RBD.src,
    tag: ["All", "Brand Identity"],
    previewUrl: "/"
  },

  {
    id: 12,
    key: 12,
    title: "Gemisquare Bakeries",
    description: "Revamp the packaging design of bread for a local bakery located in Umlazi, Durban. The objective is to infuse the brand's tone while preserving a modern aesthetic.",
    image: GemiSquare.src,
    tag: ["All", "Packaging"],
    previewUrl: "/"
  },

  {
    id: 14,
    key: 14,
    title: "Mamello Cafe",
    description: "Create a brand identity for Mamello Cafe, a new restaurant in Montclair, Durban. Develop collateral including signage, menu design and social media for promotions.",
    image: Mamello.src,
    tag: ["All", "Brand Identity"],
    previewUrl: "/"
  },
  {
    id: 11,
    key: 11,
    title: "BALM Construction",
    description: "Develop a comprehensive brand identity for BALM Construction, a new modern construction company, including logo design, brand collateral, and art direction for photoshoots.",
    image: BALM.src,
    tag: ["All", "Brand Identity", "Digital"],
    previewUrl: "/"
  },
  {
    id: 15,
    key: 15,
    title: "African Farmer's Association",
    description: "Develop and execute a campaign for the national annual general meeting, including pre-event promotion, live event coverage on social media, and post-event PR support.",
    image: AFASA.src,
    tag: ["All", "Brand Identity", "Digital"],
    previewUrl: "/"
  },
]
export const Projects = () => {

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag));

  const CardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };


  return (
    <section id="projects" >
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects{" "}
      </h2>
      <div className="text-white flex flex-wrap p-8 justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        {[
          "All",
          "Brand Identity",
          "Digital",
          "Packaging",
          "Publication",
        ].map((tagName) => (
          <ProjectTag
            key={tagName}
            onClick={() => handleTagChange(tagName)}
            name={tagName}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <ul
        ref={ref}
        className="grid md:grid-cols-3 gap-8 md:gap-12 px-4 lg:px-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={CardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.5 }}
          >
            <ProjectCard
              key={project.key}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project.description}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
