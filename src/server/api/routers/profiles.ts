/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const profileRouter = createTRPCRouter({
  create: privateProcedure.mutation(async ({ ctx }) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const user = await ctx.db.profile.create({
      data: {
        id: ctx.user.id,
        email: ctx.user.email!,
        username: ctx.user.user_metadata.username!,
      },
    });

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return user;
  }),
  checkUsername: publicProcedure
    .input(
      z.object({
        username: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      // Query the profiles table for an existing username
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
      const profile = await ctx.db.profile.findUnique({
        where: {
          username: input.username,
        },
      });

      // If a profile exists, return an object indicating the username is taken
      if (profile) {
        return { available: false };
      }

      // If no profile exists, the username is available
      return { available: true };
    }),
});
