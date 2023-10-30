import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
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
        <Header />
          <Outlet />
        <Footer />
 
      </div>
    </QueryClientProvider>
  );
}

export default App;

