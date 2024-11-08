import React, {}from 'react';
import Image from "next/image"
import type { Blog } from "@/app/blogData"
import style from './blogPreview.module.css'

export default function BlogPreview(props: Blog) {
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
