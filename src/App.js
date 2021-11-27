import React from "react";
import Header from "./components/Header/Header";
import RootContent from "./components/Content/RootContent";
const App = () => {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <RootContent />
      {/* <Footer /> */}
    </React.Fragment>
  );
};
export default App;
