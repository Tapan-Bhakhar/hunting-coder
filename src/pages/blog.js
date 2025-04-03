import React, { useEffect, useState } from 'react';
// import styles from '../styles/Blog.module.css';
import styles from "@/styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect the files from blogdata directory
// Step 2: Iterate through the files and cisplay them in the blog page
const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    console.log("use effect runnibg");
    fetch('http://localhost:3005/api/blogs').then((a) => {
      return a.json()
        .then((parsed) => {
          console.log(parsed);
          setBlogs(parsed);
        })
    })
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>
                <p className={styles.blogItemp}>{blogItem.content.substr(0, 121)}...</p>
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

export default Blog;
