import React from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/BlogPost.module.css";

const Slug = () => {
    const router = useRouter();
    const { slug } = router.query; 

  return (
    <div className={styles.container}>
       <main className={styles.main}>
      <h1>Title of the page {slug} sas</h1>
      <hr />
      <div>
       lorem80
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat.
      </div>
      </main>
    </div>
  )
}

export default Slug;
