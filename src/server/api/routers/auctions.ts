/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const auctionsRouter = createTRPCRouter({
  fetchEndingSoon: publicProcedure.query(async ({ ctx }) => {
    let auctions = await ctx.db.auction.findMany({
      orderBy: {
        auctionEnd: "asc",
      },
    });
    auctions = await Promise.all(
      auctions.map(async (auction) => {
        if (auction.featured) {
          const photos = await ctx.db.photo.findMany({
            where: {
              auctionId: auction.id,
              type: "EXTERIOR",
            },
            take: 4,
          });
          return { ...auction, photos };
        }
        return auction;
      }),
    );

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

    return auctions.map((auction) => ({
      ...auction,
      photos: auction.photos.map((photo) => ({
        baseUrl: photo.baseUrl,
        id: photo.id,
        link: photo.link,
        width: photo.width,
        height: photo.height,
        type: photo.type,
      })),
    }));
  }),
});
