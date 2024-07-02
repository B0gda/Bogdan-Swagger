import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Roles from "./Roles/Roles";
import Divider from "./common/Divider";
import DescriptionBlock from "./description/DescriptionBlock";
import TokenDisplay from "./TokenDisplay/TokenDisplay";
import { AppContainer } from "./App.styles";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <main>
          <DescriptionBlock />
          <Divider />
          <Roles />
          <Divider />
          <TokenDisplay />
        </main>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
