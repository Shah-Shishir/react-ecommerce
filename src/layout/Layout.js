import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

import "./Layout.scss";

export const Layout = (props) => (
  <>
    <Header />
    {props.children}
    <Footer />
  </>
);
