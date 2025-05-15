
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
      <PageLayout
      heading="Welcome to my website"
      para="© 2023 My Website. All rights reserved."
      >
        <p>This is the content of my website.</p>
      </PageLayout>
        {/* Do not remove the main div */}
    </div>
  )
}

export default App
