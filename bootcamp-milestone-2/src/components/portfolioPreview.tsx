import React, {}from 'react';
import Image from "next/image"
import type { Project } from "@/app/portfolioData"
import style from './portfolioPreview.module.css'

export default function BlogPreview(props: Project) {
  return (
    <div>
      <h3> {props.title} </h3>
      <div>
        <Image src="./imageLinkHere" alt="img" width={500} height={500} ></Image>
        <p>{props.description}</p>
		<p>{props.date}</p>
      </div>
	  </div>
  );
}