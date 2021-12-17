import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./homes.module.scss";
// import avatar from "../../public/images/avatar.svg";
import avatar2 from "../../public/images/undraw_book_reading_kx-9-s.svg";
import { SubButton } from "../components/SubButton";
import { stripe } from "../services/stripe";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | IG News</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>🖐 Olá, bem-vindo!</span>
          <h1>
            Notícias do mundo <br />
            da <span>Tecnologia</span>.
          </h1>
          <p>
            Tenha acesso a todas as publicações <br />
            <span>por {product.amount} mensais</span>
          </p>
          <SubButton priceId={product.priceId} />
        </section>
        <Image width={500} height={300} src={avatar2} alt="girl" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1K6oHXEeQHH0kUvItvA9wjvl");
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
