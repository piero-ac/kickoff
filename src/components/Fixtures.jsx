/* eslint-disable react/prop-types */
import FixtureRow from "./FixtureRow";
import Container from "react-bootstrap/Container";

export default function Fixtures({ fixtures, message }) {
	return (
		<Container fluid>
			{fixtures.matches.length > 0 &&
				fixtures.matches.map((match, index) => {
					return <FixtureRow key={index} match={match} />;
				})}
			{fixtures.matches.length === 0 && (
				<p className="text-light text-center">
					{message || "No fixtures available yet."}
				</p>
			)}
		</Container>
	);
}
