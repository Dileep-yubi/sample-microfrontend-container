import React, { Suspense, useState } from "react";

const RemoteApp = React.lazy(() => import("Remote/App"));

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <button onClick={() => setShowLogin(true)}>Workflow</button>
      {/* {!showLogin && (
      )} */}
      <Suspense fallback={<div>loading...</div>}>
        {showLogin && <RemoteApp testing={true} />}
      </Suspense>
    </>
  );
}

export default App;
