import { GrowthBook } from "@growthbook/growthbook-react";

export const growthbook = new GrowthBook({
  apiHost: "https://cdn.growthbook.io",
  clientKey: "sdk-fnsqEwtOEOgQ3B8",
  enableDevMode: true,
  // Load flags once. Streaming keeps a connection open in every consuming app
  // and stops Chromatic from ever seeing an idle network.
  subscribeToChanges: false,
  trackingCallback: (experiment, result) => {
    // TODO: Use your real analytics tracking system
    console.log("Viewed Experiment", {
      experimentId: experiment.key,
      variationId: result.key,
    });
  },
});
