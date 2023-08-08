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
import LeagueTable, { loader as leagueTableLoader } from "./pages/LeagueTable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const availableLeagues = ["61", "39", "140", "78", "135"];

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
					{
						index: true,
						loader: ({ params }) => {
							if (!availableLeagues.includes(params.leagueId))
								return redirect("/");
							return redirect(`/league/${params.leagueId}/overview`);
						},
					},
					{ path: "overview", element: <LeagueOverview /> },
					{ path: "fixtures", element: <LeagueFixtures /> },
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
