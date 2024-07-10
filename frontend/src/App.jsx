import { RouterProvider } from "react-router-dom";
import ProviderLayout from "./ProviderLayout";
import { Router } from "./router";
import "./App.css";
import "@mantine/core/styles.css";

const App = () => {
  const currentUser = { email: 'john123@gmail.com' }; // Example current user data
  const router = Router(currentUser);

  return (
    <ProviderLayout>
      <RouterProvider router={router} />
    </ProviderLayout>
  );
};

export default App;