import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";
import { stripe } from "../../../services/stripe";

export default async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  // Buscar o usuário no banco do FaunaDB
  //salvar data dos dados da sub no fauna
  console.log("SubscriptionId", customerId);

  console.log("SubscriptionId", subscriptionId);

  const userRef = await fauna.query(
    q.Select(
      "ref",
      q.Get(q.Match(q.Index("user_by_customer_stripe_id"), customerId))
    )
  );

  const subscription = await stripe.subscriptions.retrieve(subscriptionId);

  const subscriptionData = {
    id: subscription.id,
    userId: userRef,
    status: subscription.status,
    price_id: subscription.items.data[0].price.id,
  };
  console.log("UseRef :", userRef);
  console.log("Subscription:", subscription);

  await fauna.query(
    q.Create(q.Collection("subscriptions"), { data: subscriptionData })
  );
  console.log("subscriptionData: ", subscriptionData);
}
