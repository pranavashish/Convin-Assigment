import BucketView from "./components/BucketView";
import History from "./components/History";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout";
import Error from "./components/Error";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index path="/" element={<BucketView />} />
          <Route path="/history" element={<History />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
