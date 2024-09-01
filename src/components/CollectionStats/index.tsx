import { useEffect, useState } from "react";
import CollectionStat from "./CollectionStat";
import { motion } from "framer-motion";
import { collectionStatsVariants } from "@/utils/motionVariants";
import { openSeaUrl } from "@/constants/urls";

type CollectionStats = {
  total: {
    volume: number;
    sales: number;
    average_price: number;
    num_owners: number;
    market_cap: number;
    floor_price: number;
    floor_price_symbol: string;
  };
  intervals: [
    {
      interval: "one_day" | "seven_day" | "thirty_day";
      volume: number;
      volume_diff: number;
      volume_change: number;
      sales: number;
      sales_diff: number;
      average_price: number;
    },
  ];
};

const CollectionStats = () => {
  const [stats, setStats] = useState<CollectionStats>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/collection-stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ collection: "boredapeyachtclub" }),
      });
      setStats(await res.json());
      setIsLoading(false);
    })();
  }, []);

  return (
    <a
      href={openSeaUrl.mainnet}
      rel="noreferrer"
      target="_blank"
      className="rounded-md p-2 transition-colors duration-300 ease-in-out hover:bg-neutral md:-translate-x-2"
    >
      <motion.ul
        variants={collectionStatsVariants}
        initial="hidden"
        className="flex gap-5 md:gap-10"
      >
        <CollectionStat
          label="Total volume"
          value={
            stats?.total
              ? `${Math.floor(stats.total.volume).toLocaleString()} ETH`
              : ""
          }
          isLoading={isLoading}
        />
        <CollectionStat
          label="Floor price"
          value={
            stats?.total
              ? `${stats.total.floor_price} ${stats.total.floor_price_symbol}`
              : ""
          }
          isLoading={isLoading}
        />
        <CollectionStat
          label="Owners"
          value={
            stats?.total ? `${stats.total.num_owners.toLocaleString()}` : ""
          }
          isLoading={isLoading}
        />
      </motion.ul>
    </a>
  );
};
export default CollectionStats;
