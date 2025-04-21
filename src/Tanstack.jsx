import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Tanstack({ children }) {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools
          buttonPosition="bottom-left"
          position="left"
          initialIsOpen={false}
        />
      </QueryClientProvider>
    </>
  );
}

export default Tanstack;
