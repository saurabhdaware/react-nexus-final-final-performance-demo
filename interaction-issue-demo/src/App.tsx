import React from "react";
import { BladeProvider } from "@razorpay/blade/components";
import { bladeTheme } from "@razorpay/blade/tokens";
import { Dashboard } from "./DashboardLayout/Dashboard";

import { Routes, Route } from 'react-router-dom';
import { routes } from '../routes';

const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
    <BladeProvider themeTokens={bladeTheme} colorScheme="light">
      {isLoading ? null : (
        <Dashboard>
          <Routes>
            {routes.map((props) => <Route key={props.path} {...props} />)}
          </Routes>
        </Dashboard>
      )}
   </BladeProvider>
    </>
  );
};

export default App;