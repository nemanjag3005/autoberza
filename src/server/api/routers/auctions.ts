/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const auctionsRouter = createTRPCRouter({
  fetchEndingSoon: publicProcedure.query(async ({ ctx }) => {
    const auctions = await ctx.db.auction.findMany({
      orderBy: {
        auctionEnd: "asc",
      },
      include: {
        photos: true,
      },
    });

    return auctions;
  }),
  fetchAllExceptOne: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const auctions = await ctx.db.auction.findMany({
        where: {
          NOT: {
            id: input.id,
          },
        },
        include: {
          photos: true, // Include all photos associated with each auction
        },
      });

      return auctions;
    }),
  fetchAuction: publicProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const auction = await ctx.db.auction.findUnique({
        where: {
          id: input.id,
        },
        include: {
          photos: true, // Include all photos associated with the auction
          model: {
            include: {
              make: true, // Include the model associated with the auction
            },
          },
        },
      });

      return auction;
    }),
  fetchFeatured: publicProcedure.query(async ({ ctx }) => {
    const auctions = await ctx.db.auction.findMany({
      where: {
        featured: true,
      },
      include: {
        photos: true,
      },
    });

    return auctions;
  }),
});
