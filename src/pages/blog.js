import React from 'react';
// import styles from '../styles/Blog.module.css';
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect the files from blogdata directory
// Step 2: Iterate through the files and cisplay them in the blog page
const Blog = () => {
  return (
    <main className={styles.main}>
    <div className={styles.container}>
      <div >
        <Link href={'/blogpost/learn-javascript'}>
        <h3 className={styles.blogItemh3}>how to learn javascript in 2022</h3></Link>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat.</p>
        <h3 className={styles.blogItemh3}>how to learn javascript in 2022</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat.</p>
        <h3 className={styles.blogItemh3}>how to learn javascript in 2022</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat.</p>
      </div>
    </div>
    </main>
  )
}

export default Blog;
