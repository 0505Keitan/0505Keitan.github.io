import Head from 'next/head';

type Props = {
  description?: string;
};

export default function Meta({ description }: Props) {
  return (
    <Head>
      <meta property='description' content={description} />
      <meta property='og:title' content='0505Keitan' />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='0505Keitan_v7.jpg' />
    </Head>
  );
}
