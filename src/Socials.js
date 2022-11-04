import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Socials() {
  const socialsUrl = [
    { name: "Twitter", url: "https://twitter.com/enigmajess" },
    {
      name: "instagram", url: "https://www.instagram.com/enigma_jess/?next=%2Fenigmajess%2F",
    },
    { name: "tiktok", url: "https://www.tiktok.com/@jessicajones590?lang=en" },
    { name: "linkedin", url: "https://www.linkedin.com/in/jessica-neumann-998305192/" },
  ];

  let socialIcons = socialsUrl.map(function (icons, index) {
    return (
      <div key={index}>
        <SocialIcon url={icons.url} fgColor= "#94AA94"bgColor="#FFFFFF" />
      </div>
    );
  });

  
  return (
    <div>
        {socialIcons}
    </div>
  )
}
