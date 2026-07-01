// Test-only GrowthBookProvider. Components like Button call
// useFeatureIsOn(), which throws if rendered without a GrowthBookProvider
// ancestor. This uses a bare GrowthBook instance with no apiHost, so it
// never attempts a network request during tests - features simply resolve
// to their defaults (false).
import { GrowthBook, GrowthBookProvider } from "@growthbook/growthbook-react";

const testGrowthBook = new GrowthBook();

export const MockGrowthBookProvider: React.FunctionComponent<{
  children?: React.ReactNode;
}> = ({ children }) => (
  <GrowthBookProvider growthbook={testGrowthBook}>
    {children}
  </GrowthBookProvider>
);
