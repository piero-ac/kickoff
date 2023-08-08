import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./pages/RootLayout";
import LeagueLayout from "./pages/LeagueLayout";
import LeagueOverview from "./pages/LeagueOverview";
import LeagueFixtures, {
	loader as leagueFixturesLoader,
} from "./pages/LeagueFixtures";
import LeagueTable, { loader as leagueTableLoader } from "./pages/LeagueTable";
import ErrorPage from "./pages/Error";
import { errorLoader } from "./util/errorLoader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "league", loader: () => redirect("/") },
			{
				path: "league/:leagueId",
				element: <LeagueLayout />,
				children: [
					{
						index: true,
						loader: ({ params }) => errorLoader(params.leagueId),
					},
					{ path: "overview", element: <LeagueOverview /> },
					{
						path: "fixtures",
						element: <LeagueFixtures />,
						loader: leagueFixturesLoader,
					},
					{
						path: "table",
						element: <LeagueTable />,
						loader: leagueTableLoader,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
