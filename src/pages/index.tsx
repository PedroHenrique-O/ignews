import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "./homes.module.scss";
import avatar from "../../public/images/avatar.svg";
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
          <span>🖐 Hey, welcome</span>
          <h1>
            News about <br />
            the <span>React</span> world.
          </h1>
          <p>
            Get acess to all publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubButton priceId={product.priceId} />
        </section>
        <Image src={avatar} alt="girl" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1K6oHXEeQHH0kUvItvA9wjvl");
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 horas
  };
};
