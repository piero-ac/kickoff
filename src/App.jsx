import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import LeagueLayout from "./pages/LeagueLayout";
import LeagueOverview from "./pages/LeagueOverview";
import LeagueFixtures from "./pages/LeagueFixtures";
import LeagueTable from "./pages/LeagueTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "league", loader: () => redirect("/") },
			{
				path: "league/:leagueId",
				element: <LeagueLayout />,
				children: [
					{ index: true, element: <LeagueOverview /> },
					{ path: "overview", element: <LeagueOverview /> },
					{ path: "fixtures", element: <LeagueFixtures /> },
					{ path: "table", element: <LeagueTable /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
