import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuardPage from "./components/guard-page";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import OrdersPage from "./pages/orders";

export default function App() {
  return (
    <BrowserRouter className="sans-serif">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/orders" element={<GuardPage target={<OrdersPage />} />} />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   <h1>Hello CodeSandbox</h1>
    //   <h2>Start editing to see some magic happen!</h2>
    // </div>
  );
}
