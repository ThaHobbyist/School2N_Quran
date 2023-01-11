const api = "http://api.alquran.cloud/v1/quran/";

export async function getQuran() {
	let quran = {};
	await fetch(api + "quran-simple")
		.then((res) => {
			quran = res;
		})
		.catch((e) => {
			console.log("Error: ", e);
		});

	return quran;
}
