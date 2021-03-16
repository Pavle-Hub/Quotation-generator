const motivacijaNiz = [
	['Sve je dostizno', 'Bolje je boriti se i', 'Krenite korak po korak,'],
	['nemoguce postoji samo ', 'gubiti bitku ', 'ne morate videti citavo stubiste, '],
	["kod ludaka.", "nego nikada se ne izboriti.","samo napravite prvi korak."]
];


const slobodaNiz = [
	["Sloboda je ", 'Sloboda nije nista drugo ', 'Slobodni ste '],
	[ 'mogucnost zivljenja ', 'nego sansa ', 'ako vam je '],
	["kako zelis.", "da budes bolji.", 'savest cista.']
];

let motivacija = document.getElementById('motivacioni');
let slobodan = document.getElementById('slobodni');
function TipCitata() 
{
    if (document.getElementById('motivacioni').checked) 
    {
        return motivacija.value;
    } 
    else if (document.getElementById('slobodni').checked) 
    {
        return slobodan.value;
    }   
} 

let brojcitataid = document.getElementById('brojac-citata')
let broj = parseInt(brojcitataid.value)
brojcitataid.addEventListener('change', e => 
{
    broj = parseInt(e.target.value);
});

function nasumicnoStvaranjeCitata (tip) {
	
	return Math.floor(Math.random() * tip[0].length);
}
const DugmeZaCitate = document.querySelector('#stvaranje-citata');
const DugmeZaResetovanje = document.querySelector('#Izlazak');

DugmeZaResetovanje.addEventListener('click', () => {
    document.getElementById('citat').innerHTML = " ";
    var ele = document.getElementsByName("tag");
    for(var i=0;i<ele.length;i++)
      ele[i].checked = false;

          document.getElementById("brojac-citata").innerHTML= 
        `  
            <select>
              <option value="1" selected>1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
        `
        broj = 1;
});


DugmeZaCitate.addEventListener('click',  () => {
    document.getElementById('citat').innerHTML = " ";
    let brojac = TipCitata();
    let brojac1;
    if (brojac == "motivacija")
    {
         brojac1 = motivacijaNiz[0].length;
    }
    else if (brojac == "slobodan")
    {
        brojac1 = slobodaNiz[0].length;
    }
    let tip;
    if (brojac == "motivacija")
    {
        tip = motivacijaNiz;
    }
    if(brojac == "slobodan")
    {
        tip = slobodaNiz;
    }
    for(let i = 0; i < broj; i++)
    {
	document.getElementById('citat').innerHTML += "<h2>" + " \" " + tip[0][nasumicnoStvaranjeCitata(tip)] + tip[1][nasumicnoStvaranjeCitata(tip)] + tip[2][nasumicnoStvaranjeCitata(tip)] + " \" " + "</h2>";
    }
});