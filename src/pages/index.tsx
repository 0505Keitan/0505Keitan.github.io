import React from 'react';
import styles from '../styles/Home.module.scss';
import Head from '../components/head';

type Props = {
  desc?: string;
};

export default function Home({ desc }: Props) {
  const [about, setAbout] = React.useState('Loading...');
  const [favorites, setFavorite] = React.useState('Loading...');
  const [interests, setInterests] = React.useState('Loading...');
  React.useEffect(() => {
    fetch('/api/scrapbox')
      .then((r) => r.json())
      .then((j) => {
        setAbout(j.descriptions[4]);
        const result: { [key: string]: Array<string> } = {
          favorite: [],
          interest: [],
        };
        let isFav: boolean = false;
        let isInt: boolean = false;
        for (const i of j.lines) {
          switch (i.text) {
            case '[*** <好きなもの(こと)>]':
              isFav = true;
              continue;
            case '[*** <興味>]':
              isInt = true;
              continue;
          }

          if (i.text === '') {
            isFav = false;
            isInt = false;
          }
          if (isFav) result.favorite.push(i.text);
          if (isInt) result.interest.push(i.text);
        }
        setFavorite(result.favorite.join(','));
        setInterests(result.interest.join(','));
      });
  }, []);
  return (
    <div>
      <Head description={desc} />

      <main className={styles.main}>
        <section>
          <img src='/0505Keitan_v7.jpg' />
          <p className={styles.name}>0505Keitan</p>
          <p className={styles.bio}>
            WEB ENGINEER / MOVIE CREATOR / UNIVERSITY STUDENT
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
            {favorites.split(',').map((f) => {
              return (
                <li key={f}>
                  <p>{f}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <h1>Interest</h1>
          <ul>
            {interests.split(',').map((i) => {
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
        <div className={styles.footer_left}>
          <span>0505Keitan</span>
          <p>
            このサイトは&nbsp;
            <a href='https://scrapbox.io/0505Keitan/index'>Scrapbox</a>
            &nbsp;からデータを取得しています。
          </p>
        </div>
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

export async function getStaticProps() {
  const json = await fetch(
    'https://scrapbox.io/api/pages/0505Keitan/index'
  ).then((r) => r.json());
  const desc = json.descriptions[4];
  return {
    props: {
      desc,
    },
  };
}
