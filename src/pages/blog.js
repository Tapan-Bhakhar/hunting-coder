import React, { useEffect, useState } from 'react';
import styles from "@/styles/Blog.module.css";
import Link from "next/link";
import * as fs from 'fs';
import InfiniteScroll from 'react-infinite-scroll-component';

// Step 1: Collect the files from blogdata directory
// Step 2: Iterate through the files and cisplay them in the blog page
const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3005/api/blogs?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();
    setBlogs(data)
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>


        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allcount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
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
        </InfiniteScroll>


        {/* {blogs.map((blogItem) => {
          return (
            <div key={blogItem.slug}>
              <Link href={`/blogpost/${blogItem.slug}`}>
                <h3 className={styles.blogItemh3}>{blogItem.title}</h3></Link>
              <p className={styles.blogItemp}>{blogItem.metadesc.substr(0, 121)}...</p>
              <Link href={`/blogpost/${blogItem.slug}`}><button className={styles.btn}>Read More</button></Link>
            </div>
          )
        })} */}

          {/* <h3 className={styles.blogItemh3}>how to learn javascript in 2022</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat.</p> */}

      </main >
    </div >
  )
}

export async function getStaticProps(context) {
  let data = await fs.promises.readdir("blogdata");
  let allcount = data.length;
  let myFile;
  let allBlogs = [];

  for (let i = 0; i < 2; i++) {
    const item = data[i];
    // console.log(item);
    myFile = await fs.promises.readFile((`blogdata/${item}`), "utf-8");
    // console.log(myFile);
    allBlogs.push(JSON.parse(myFile));
  }
  return {
    props: { allBlogs, allcount }, // will be passed to the page component as props 
  }
}

export default Blog;
