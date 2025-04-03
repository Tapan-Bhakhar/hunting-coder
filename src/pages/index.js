import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <style jsx>
        {`
        h2 {
          font-size: 41px;
        }
        h3 {
          font-size: 27px;
        }
        `}
      </style>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="kewords" content="nextjs, huntingcoder blog, Hunting Coder" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.mainnav}>
        <ul>
          <Link href="/"><li>Home</li></Link>
          <Link href="/about"><li>About</li></Link>
          <Link href="/blog"><li>Blog</li></Link>
          <Link href="/contact"><li>Contact</li></Link>
        </ul>
      </nav>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hunting Coder
        </h1>

        <div className={styles.imagewrap}>
          <Image className={styles.myImg} src="/homeImage.png" alt="HomePage" width={237} height={158} />
        </div>
        
        <p className={styles.description}>
          A blog for hunting coders by a hunting coder
        </p>

        <div className="blogs">
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>how to learn javascript in 2022</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat.</p>
            <h3>how to learn javascript in 2022</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat.</p>
            <h3>how to learn javascript in 2022</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor in tenetur blanditiis porro, quasi incidunt earum quam odio deserunt aperiam assumenda quaerat.</p>
          </div>
        </div>
      </main>

    </div>
  );
}
