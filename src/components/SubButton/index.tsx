import { signIn, useSession } from "next-auth/react";
import { api } from "../../services/api";
import { getStripeJs } from "../../services/stripe-js";
import styles from "./styles.module.scss";

interface SubButtonProps {
  priceId: string;
}
export function SubButton({ priceId }: SubButtonProps) {
  const { data: session } = useSession();

  async function handleSub() {
    if (!session) {
      signIn("github");
    }
    //criar checkout session
    try {
      const response = await api.post("/auth/subscribe");

      const { sessionId } = response.data;

      const stripe = await getStripeJs();

      await stripe.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <button onClick={handleSub} className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
