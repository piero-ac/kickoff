export function getDate() {
	const currentDate = new Date();

	const year = currentDate.getFullYear();
	const month = String(currentDate.getMonth() + 1).padStart(2, "0");
	const day = String(currentDate.getDate()).padStart(2, "0");

	const formattedDate = `${year}-${month}-${day}`;
	return formattedDate;
}

export function formatDateToDDMMM(date) {
	const dateObj = new Date(date);

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const day = dateObj.getDate();
	const month = months[dateObj.getMonth()];

	return `${day} ${month}`;
}
