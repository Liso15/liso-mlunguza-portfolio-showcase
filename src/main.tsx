
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from './App.tsx'
import './index.css'

const queryClient = new QueryClient();

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Root element not found");

createRoot(rootElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
