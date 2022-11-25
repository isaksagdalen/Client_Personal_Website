import { Route, Routes } from "react-router-dom";
import Home from "./routes/home/home.component";
import ISTDP from "./routes/istdp/istdp.component";
import Behandling from "./routes/behandling/behandling.component";
import Veiledning from "./routes/veiledning/veiledning.component";
import BestillTime from "./routes/bestillTime/bestillTime.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/psykologisk-veiledning" element={<Veiledning />} />
      <Route path="/psykologisk-behandling" element={<Behandling />} />
      <Route path="/istdp" element={<ISTDP />} />
      <Route path="/bestill" element={<BestillTime />} />
    </Routes>
  );
}

export default App;
