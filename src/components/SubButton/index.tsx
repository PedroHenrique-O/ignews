import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

import { Puff } from "react-loading-icons";

interface SubButtonProps {
  priceId: string;
}
export function SubButton({ priceId }: SubButtonProps) {
  const { data: session, status } = useSession();
  const router = useRouter();

  async function handleSub() {
    if (!session) {
      signIn("github");
    }

    if (session?.activeSubscription) {
      router.push("/posts");

      return;
    }

    try {
      const response = await api.post("/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button onClick={handleSub} className={styles.subscribeButton}>
      {status === "loading" ? <Puff /> : "Inscreva-se agora!"}
    </button>
  );
}
