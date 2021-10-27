import { AuthProvider } from "./auth";
import { ReactNode } from "react";

interface ProvidersProp {
  children: ReactNode;
}

function Providers({ children }: ProvidersProp) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default Providers;
