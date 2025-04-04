import React, { useEffect, useState } from 'react';
// import styles from '../styles/Blog.module.css';
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import * as fs from 'fs';

// Step 1: Collect the files from blogdata directory
// Step 2: Iterate through the files and cisplay them in the blog page
const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>
              <p className={styles.blogItemp}>{blogItem.metadesc.substr(0, 121)}...</p>
              <Link href={`/blogpost/${blogItem.slug}`}><button className={styles.btn}>Read More</button></Link>
            </div>
          )
        })}
        <div>

          {/* <h3 className={styles.blogItemh3}>how to learn javascript in 2022</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat.</p> */}

        </div>
      </main >
    </div >
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let myFile;
  let allBlogs = [];

  for (let i = 0; i < data.length; i++) {
    const item = data[i];
    // console.log(item);
    myFile = await fs.promises.readFile((`blogdata/${item}`), "utf-8");
    // console.log(myFile);
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: { allBlogs }, // will be passed to the page component as props 
  }
}

export default Blog;
