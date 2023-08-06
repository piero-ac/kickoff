import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import League from "./pages/League";
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/league/:leagueId", element: <League /> },
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
