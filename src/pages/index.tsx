import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.scss';
import Head from '../components/head';
import dayjs from 'dayjs';

type Props = {
  desc?: string;
};

export default function Home({ desc }: Props) {
  const [about, setAbout] = useState('Loading...');
  const [lastupdate, setUpdate] = useState('Loading...');
  const [favorites, setFavorite] = useState('Loading...');
  const [interests, setInterests] = useState('Loading...');
  const [awards, setAwards] = useState('Loading...');
  const [speakers, setSpeakers] = useState('Loading...');
  useEffect(() => {
    fetch('/api/scrapbox')
      .then((r) => r.json())
      .then((j) => {
        setAbout(j.descriptions[4]);
        setUpdate(
          `最終更新: ${dayjs(
            j.descriptions[1].match(
              /\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])/
            )[0]
          ).format('YYYY/MM/DD')}`
        );
        const result: { [key: string]: Array<string> } = {
          favorite: [],
          interest: [],
          award: [],
          speaker: [],
        };
        let isFav: boolean = false;
        let isInt: boolean = false;
        let isAwd: boolean = false;
        let isSpk: boolean = false;
        for (const i of j.lines) {
          switch (i.text) {
            case '[*** <好きなもの(こと)>]':
              isFav = true;
              continue;
            case '[*** <興味>]':
              isInt = true;
              continue;
            case '[*** <受賞>]':
              isAwd = true;
              continue;
            case '[*** <登壇>]':
              isSpk = true;
              continue;
          }

          if (i.text === '') {
            isFav = false;
            isInt = false;
            isAwd = false;
            isSpk = false;
          }
          if (isFav) result.favorite.push(i.text);
          if (isInt) result.interest.push(i.text);
          if (isAwd) {
            if (i.text.startsWith('  ')) {
              result.award.push(`<ul><li>${i.text}</li></ul>`);
            } else {
              result.award.push(`<li>${i.text}</li>`);
            }
          }
          if (isSpk) result.speaker.push(i.text);
        }
        setFavorite(result.favorite.join(','));
        setInterests(result.interest.join(','));
        setAwards(result.award.join(','));
        setSpeakers(result.speaker.join(','));
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

      <div className={styles.container}>
        <section className={styles.section}>
          <h1>Award</h1>
          <ul>
            {awards.split(',').map((a) => {
              return <span key={a} dangerouslySetInnerHTML={{ __html: a }} />;
            })}
          </ul>
        </section>
      </div>

      <div className={styles.container}>
        <section className={styles.section}>
          <h1>Speaker</h1>
          <ul>
            {speakers.split(',').map((s) => {
              return (
                <li key={s}>
                  <p>{s}</p>
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
          <p>{lastupdate}</p>
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
