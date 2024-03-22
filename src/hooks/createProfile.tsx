"use client";
import { api } from "~/trpc/react";

export const createProfile = () => {
  const { mutate } = api.profiles.create.useMutation({
    onSuccess: () => {
      console.log("success");
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      console.log(errorMessage);
      console.log("error");
      return {
        error: errorMessage,
      };
    },
  });
  return mutate();
};

export async function createProfileAsync() {
  try {
    // Here we are directly using the trpc client to invoke the mutation
    const result = api.profiles.create.useMutation({
      onSuccess: () => {
        console.log("success");
      },
      onError: (e) => {
        const errorMessage = e.data?.zodError?.fieldErrors.content;
        console.log(errorMessage);
        console.log("error");
        return {
          error: errorMessage,
        };
      },
    });
    console.log("Profile created successfully", result);
    return result;
  } catch (error) {
    console.error("Failed to create profile", error);
    throw error;
  }
}
