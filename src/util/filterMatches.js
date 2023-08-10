export function filterMatchesByDate(data, targetDate) {
	const filteredMatches = [];

	for (let match of data) {
		if (match.dateForMatching === targetDate) {
			filteredMatches.push(match);
		}
	}

	return filteredMatches;
}
