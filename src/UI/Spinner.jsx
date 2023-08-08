import Spinner from "react-bootstrap/Spinner";

export default function LoadingSpinner() {
	return (
		<div className="text-center my-3">
			<Spinner animation="border" role="status" variant="success">
				<span className="visually-hidden">Loading...</span>
			</Spinner>
		</div>
	);
}
