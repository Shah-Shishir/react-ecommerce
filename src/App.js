import { Route, Switch } from "react-router-dom";

import { Layout } from "./layout/Layout";
import { Products } from "./components/Products";

import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <Layout>
        <Switch>
          <Route path="/">
            <Products />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>
      </Layout>
    </CartProvider>
  );
};

export default App;
