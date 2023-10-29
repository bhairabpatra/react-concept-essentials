import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Prodcuts from "./components/products/Products";
import User from "./components/user/User";
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
      <div className="App container">
        <Prodcuts />
        <User />
      </div>
    </QueryClientProvider>
  );
}

export default App;
