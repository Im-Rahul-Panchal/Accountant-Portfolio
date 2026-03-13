import { useEffect } from "react";
import Home from "./pages/Home";
import useLenis from "./hooks/useLenis";
import Loader from "./components/common/Loader";
import { useStore } from "./store/useStore";

function App() {
  useLenis();
  const { loading, setLoading } = useStore();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, [setLoading]);

  if (loading) return <Loader />;

  return (
    <div className="bg-[#0f172a] text-white dark">
      <Home />
    </div>
  );
}

export default App;
