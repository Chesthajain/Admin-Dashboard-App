import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense,lazy } from "react";
import Loader from "./components/Loader";

const Dashboard = lazy(() => import("./pages/dashboard"));
const Products = lazy(() => import("./pages/products"));
const Transaction= lazy(() => import("./pages/transaction"));
const Customer = lazy(() => import("./pages/customer"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/transaction" element={<Transaction />} />
        <Route path="/admin/customer" element={<Customer />} />
      </Routes>
      </Suspense>
    </Router>
  )
}

export default App;