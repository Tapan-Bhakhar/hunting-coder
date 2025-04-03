import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/BlogPost.module.css";

// Step 1: Find the file corresponding to the slug
// Step 2: Read the file and display the content
const Slug = (props) => {
  const [blog, setBlog] = useState(props.myBlog);
  //   const router = useRouter();

  // useEffect(() => {
  //   if (!router.isReady) return; // wait for the router to be ready
  //   const { slug } = router.query; 

  //   fetch(`http://localhost:3005/api/getblog?slug=${slug}`).then((a) => {
  //     return a.json()
  //       .then((parsed) => {
  //         setBlog(parsed);
  //       })
  //   })
  // }, [router.isReady]); // useEffect will run when the router is ready


  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr />
        <div>
          {blog && blog.content} {/* blog hoga tohi ye populate hoga */}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.query;

  let data = await fetch(`http://localhost:3005/api/getblog?slug=${slug}`)
  let myBlog = await data.json();
  return {
    props: { myBlog }, // will be passed to the page component as props 
  }
}

export default Slug;
