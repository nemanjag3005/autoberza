/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const carsRouter = createTRPCRouter({
  searchCars: publicProcedure
    .input(
      z.object({
        query: z.string().min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { query } = input;
      const carMakes = await ctx.db.carMake.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: "insensitive" } },
            {
              models: {
                some: { name: { contains: query, mode: "insensitive" } },
              },
            },
          ],
        },
        include: {
          models: true,
        },
      });

      return carMakes;
    }),
  getMakeWithModels: publicProcedure
    .input(
      z.object({
        makeName: z.string().min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { makeName } = input;
      const carMake = await ctx.db.carMake.findFirst({
        where: {
          name: {
            equals: makeName,
            mode: "insensitive",
          },
        },
        include: {
          models: true, // Include all related models
        },
      });

      return carMake;
    }),

  getModelWithMake: publicProcedure
    .input(
      z.object({
        makeName: z.string().min(1),
        modelName: z.string().min(1),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { makeName, modelName } = input;
      const carModel = await ctx.db.carModel.findFirst({
        where: {
          AND: [
            {
              name: {
                equals: modelName,
                mode: "insensitive",
              },
            },
            {
              make: {
                name: {
                  equals: makeName,
                  mode: "insensitive",
                },
              },
            },
          ],
        },
        include: {
          make: true, // Include the parent make
        },
      });

      return carModel;
    }),
});
