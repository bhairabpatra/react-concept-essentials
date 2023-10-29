import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Prodcuts from "./components/products/Products";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Prodcuts />
      </div>
    </QueryClientProvider>
  );
}

export default App;
