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
        photos: {
          where: {
            type: "EXTERIOR", // Assuming 'EXTERIOR' is the correct value for exterior photos
          },
          take: 4, // Limit to the first 4 photos
        },
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
        photos: {
          where: {
            type: "EXTERIOR", // Assuming 'EXTERIOR' is the correct value for exterior photos
          },
          take: 5, // Limit to the first 4 photos
        },
      },
    });

    return auctions;
  }),
});
