const citati = [
	["Tajna slobode ", 'Nije bitno ko ', 'Svako ko ', 'Vreme '],
	['pociva ', 'zapocinje igru ', 'razmislja ', 'je '],
	["u hrabrosti.", "vec ko je zavrsava.","je moji prijatelj.", "novac."]
];


function nasumicnoStvaranjeCitata () {
	
return Math.floor(Math.random() * citati[0].length);
}
const DugmeZaCitate = document.querySelector('#stvaranje-citata');

DugmeZaCitate.addEventListener('click',  () => {
document.getElementById('citat').innerHTML = "<h2>" + " \" " + citati[0][nasumicnoStvaranjeCitata()] + citati[1][nasumicnoStvaranjeCitata()] + citati[2][nasumicnoStvaranjeCitata()] + " \" " + "</h2>";
});