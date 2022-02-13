import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Meta from '../components/meta';

export default function Home() {
  const [about, setAbout] = React.useState('Loading...');
  const [favorite, setFavorite] = React.useState('Loading...');
  React.useEffect(() => {
    fetch('/api/scrapbox')
      .then((r) => r.json())
      .then((j) => {
        setAbout(j.descriptions[4]);
        setFavorite(j.lines[8].text);
      });
  }, []);
  return (
    <div>
      <Head>
        <title>0505Keitan</title>
        <link rel='icon' href='/favicon.ico' />
        <Meta description={about} />
      </Head>

      <main className={styles.main}>
        <section>
          <img src='/0505Keitan_v7.jpg' />
          <p className={styles.name}>0505Keitan</p>
          <p className={styles.bio}>
            WEB ENGINEER / CREATOR / UNIVERSITY STUDENT
          </p>
        </section>
      </main>

      <div className={styles.container}>
        <section className={styles.section}>
          <h1>Profile</h1>
          <p className={styles.about}>{about}</p>
          <p className={styles.more}>
            <a href='https://scrapbox.io/0505Keitan/index'>more about →</a>
          </p>
        </section>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <h1>Favorite</h1>
          <ul>
            {favorite.split(',').map((i) => {
              return (
                <li key={i}>
                  <p>{i}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <footer className={styles.footer}>
        <span>0505Keitan</span>
        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            <li>
              <a href='https://twitter.com/0505Keitan'>Twitter</a>
            </li>
            <li>
              <a href='https://github.com/0505Keitan'>GitHub</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

/*
const url = '';
export async function getStaticProps() {
  const json = await fetch(url).then((r) => r.json());
  console.log(json);
  const a = json.b;
  return {
    props: {
      a,
    },
  };
}
*/
