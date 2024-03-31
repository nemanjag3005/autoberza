import Auction from "~/components/Auctions/Auction";
import { api } from "~/trpc/server";

export default async function AuctionPage() {
  return (
    <main className="bg-background">
      {" "}
      <Auction />{" "}
    </main>
  );
}
