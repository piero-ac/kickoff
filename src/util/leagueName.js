const map = {
	39: "Premier League",
	140: "La Liga",
	135: "Serie A",
	78: "Bundesliga",
	61: "Ligue 1",
};
export function getLeagueName(id) {
	return map[id];
}
