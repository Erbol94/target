import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import Heading from '../components/Heading';
import Lyaout from '../components/Layout';
import Socials from '../components/Socials';
import { socials } from './api/data/socials';

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/social/`);
  const data = await response.json();

  if (!data) {
      return {
          notFound: true,
      };
  }

  return {
      props: { socials: data },
  };
};


export default function Home({socials}) {
  return (
      <div className={styles.container}>
        <Heading text="Index page"/>
        <Socials socials={socials} />
      </div>
  )
}
