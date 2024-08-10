const buscarInput = document.querySelector("#pesquisa")
const form = document.querySelector("#form")
const bonecosDiv = document.querySelector("#bonecosDiv")

const campeoes = [
    {nomeBeta: "Pituxa", nomeLol: "Tristana", foto:"./fotoCampeoes/tristana.png"},
    {nomeBeta: "Pitico", nomeLol:"Kennen", foto:"./fotoCampeoes/kennen.png"},
    {nomeBeta:"Pitoco",nomeLol:"Poppy",foto:"./fotoCampeoes/poppy.png"},
    {nomeBeta:"Pitchulinha",nomeLol:"Rumble",foto:"./fotoCampeoes/rumble.png"},
    {nomeBeta:"Luana",nomeLol:"Diana",foto:"./fotoCampeoes/diana.png"},
    {nomeBeta:"Solange",nomeLol:"Leona",foto:"./fotoCampeoes/leona.png"},
    {nomeBeta:"Sargento Online",nomeLol:"Xin Zhao",foto:"./fotoCampeoes/xin zhao.png"},
    {nomeBeta:"Amiga Online",nomeLol:"Sejuani",foto:"./fotoCampeoes/sejuani.png"},
    {nomeBeta:"Fernanda",nomeLol:"Aphelios",foto:"./fotoCampeoes/aphelios.png"},
    {nomeBeta:"Nemo Gay",nomeLol:"Nami",foto:"./fotoCampeoes/nami.png"},
    {nomeBeta:"Lulamolusky",nomeLol:"Illaoi",foto:"./fotoCampeoes/illaoi.png"},
    {nomeBeta:"Piquitim",nomeLol:"Corki",foto:"./fotoCampeoes/corki.png"},
    {nomeBeta:"Senhor Pequeno",nomeLol:"Kled",foto:"./fotoCampeoes/kled.png"},
    {nomeBeta:"Apenas Um Centimetro",nomeLol:"Heimerdinger",foto:"./fotoCampeoes/heimerdinger.png"},
    {nomeBeta:"Tarsan De Samambaia",nomeLol:"Gnar",foto:"./fotoCampeoes/gnar.png"},
    {nomeBeta:"Mister Lady",nomeLol:"Swain",foto:"./fotoCampeoes/swain.png"},
    {nomeBeta:"Ruivinho Sincero",nomeLol:"Gragas",foto:"./fotoCampeoes/gragas.png"},
    {nomeBeta:"Boquinha Bo",nomeLol:"Tahm Kench",foto:"./fotoCampeoes/tahm kench.png"},
    {nomeBeta:"Fátima",nomeLol:"Ezreal",foto:"./fotoCampeoes/ezreal.png"},
    {nomeBeta:"Gostei Postei",nomeLol:"Taliyah",foto:"./fotoCampeoes/taliyah.png"},
    {nomeBeta:"Nilvo",nomeLol:"Yasuo",foto:"./fotoCampeoes/yasuo.png"},
    {nomeBeta:"Nalvo",nomeLol:"Yone",foto:"./fotoCampeoes/yone.png"},
    {nomeBeta:"Marcos",nomeLol:"Vex",foto:"./fotoCampeoes/vex.png"},
    {nomeBeta:"Peixinho Tuti",nomeLol:"Fizz",foto:"./fotoCampeoes/fizz.png"},
    {nomeBeta:"A Vaquinha Roxa",nomeLol:"Amumu",foto:"./fotoCampeoes/amumu.png"},
    {nomeBeta:"Discografia Da Normani",nomeLol:"Veigar",foto:"./fotoCampeoes/veigar.png"},
    {nomeBeta:"Vitória",nomeLol:"Vi",foto:"./fotoCampeoes/vi.png"},
    {nomeBeta:"Victória",nomeLol:"Viktor",foto:"./fotoCampeoes/viktor.png"},
    {nomeBeta:"Vi'tória",nomeLol:"Vel'Koz",foto:"./fotoCampeoes/vel'koz.png"},
    {nomeBeta:"Galo Rogério Gaspar",nomeLol:"Xayah",foto:"./fotoCampeoes/xayah.png"},
    {nomeBeta:"Penas Assombrados",nomeLol:"Rakan",foto:"./fotoCampeoes/rakan.png"},
    {nomeBeta:"Mozim",nomeLol:"Twisted Fate",foto:"./fotoCampeoes/twisted fate.png"},
    {nomeBeta:"Mozao",nomeLol:"Graves",foto:"./fotoCampeoes/graves.png"},
    {nomeBeta:"Lucilde",nomeLol:"Lucian",foto:"./fotoCampeoes/lucian.png"},
    {nomeBeta:"Vinas",nomeLol:"Vayne",foto:"./fotoCampeoes/vayne.png"},
    {nomeBeta:"Basinga",nomeLol:"Lux",foto:"./fotoCampeoes/lux.png"},
    {nomeBeta:"Mister Tampinha",nomeLol:"Teemo",foto:"./fotoCampeoes/teemo.png"},
    {nomeBeta:"Márcio",nomeLol:"Sona",foto:"./fotoCampeoes/sona.png"},
    {nomeBeta:"Chimpanze Engraçado So As Melhores",nomeLol:"Wukong",foto:"./fotoCampeoes/wukong.png"},
    {nomeBeta:"Cachorro",nomeLol:"Kog'Maw",foto:"./fotoCampeoes/kog'maw.png"},
    {nomeBeta:"Senhorita",nomeLol:"Master Yi",foto:"./fotoCampeoes/master yi.png"},
    {nomeBeta:"Miroldo",nomeLol:"Morgana",foto:"./fotoCampeoes/morgana.png"},
    {nomeBeta:"Baby Little",nomeLol:"Annie",foto:"./fotoCampeoes/annie.png"},
    {nomeBeta:"Sabrina Kechy",nomeLol:"Lillia",foto:"./fotoCampeoes/lillia.png"},
    {nomeBeta:"Ayrton",nomeLol:"Senna",foto:"./fotoCampeoes/senna.png"},
    {nomeBeta:"Cachorro Online",nomeLol:"Nasus",foto:"./fotoCampeoes/nasus.png"},
    {nomeBeta:"Querida Online",nomeLol:"Evelynn",foto:"./fotoCampeoes/evelynn.png"},
    {nomeBeta:"Michelly",nomeLol:"Ziggs",foto:"./fotoCampeoes/ziggs.png"},
    {nomeBeta:"Queila",nomeLol:"Kayle",foto:"./fotoCampeoes/kayle.png"},
    {nomeBeta:"Zuleide",nomeLol:"Zilean",foto:"./fotoCampeoes/zilean.png"},
    {nomeBeta:"Smurfy",nomeLol:"Ryze",foto:"./fotoCampeoes/ryze.png"},
    {nomeBeta:"Smurfety",nomeLol:"Lissandra",foto:"./fotoCampeoes/lissandra.png"},
    {nomeBeta:"Shekira",nomeLol:"Seraphine",foto:"./fotoCampeoes/seraphine.png"},
    {nomeBeta:"Me Chopa",nomeLol:"Skarner",foto:"./fotoCampeoes/skarner.png"},
    {nomeBeta:"Tangolomango",nomeLol:"Jax",foto:"./fotoCampeoes/jax.png"},
    {nomeBeta:"Senhor Whatsap",nomeLol:"Zac",foto:"./fotoCampeoes/zac.png"},
    {nomeBeta:"Renato",nomeLol:"Renekton",foto:"./fotoCampeoes/renekton.png"},
    {nomeBeta:"Lucas",nomeLol:"Lulu",foto:"./fotoCampeoes/lulu.png"},
    {nomeBeta:"A Branquela",nomeLol:"Le Blanc",foto:"./fotoCampeoes/le blanc.png"},
    {nomeBeta:"Isso",nomeLol:"Malphite",foto:"./fotoCampeoes/malphite.png"},
    {nomeBeta:"Senhor Franguinho",nomeLol:"Fiddlesticks",foto:"./fotoCampeoes/fiddlesticks.png"},
    {nomeBeta:"Lari Manu",nomeLol:"Malzahar",foto:"./fotoCampeoes/malzahar.png"},
    {nomeBeta:"Bardo",nomeLol:"Bardo",foto:"./fotoCampeoes/bardo.png"},
    {nomeBeta:"Tom e Jerry",nomeLol:"Kindred",foto:"./fotoCampeoes/kindred.png"},
    {nomeBeta:"Akhado Nao E Roubado",nomeLol:"Akshan",foto:"./fotoCampeoes/akshan.png"},
    {nomeBeta:"Monetes",nomeLol:"Taric",foto:"./fotoCampeoes/taric.png"},
    {nomeBeta:"Mulher Almondega",nomeLol:"Ahri",foto:"./fotoCampeoes/ahri.png"},
    {nomeBeta:"Evidencias Coxinha",nomeLol:"Sett",foto:"./fotoCampeoes/sett.png"},
    {nomeBeta:"Tidinha",nomeLol:"Zoe",foto:"./fotoCampeoes/zoe.png"},
    {nomeBeta:"Gaybol",nomeLol:"Garen",foto:"./fotoCampeoes/garen.png"},
    {nomeBeta:"Dulce",nomeLol:"Ivern",foto:"./fotoCampeoes/ivern.png"},
    {nomeBeta:"Miguinho",nomeLol:"Yuumi",foto:"./fotoCampeoes/yuumi.png"},
    {nomeBeta:"Geraldo",nomeLol:"Miss Fortune",foto:"./fotoCampeoes/miss fortune.png"},
    {nomeBeta:"Lol Engraçada",nomeLol:"Jinx",foto:"./fotoCampeoes/jinx.png"},
    {nomeBeta:"Lol Engraçado",nomeLol:"Kayn",foto:"./fotoCampeoes/kayn.png"},
    {nomeBeta:"Mister Querido",nomeLol:"Shen",foto:"./fotoCampeoes/shen.png"},
    {nomeBeta:"Agradável",nomeLol:"Zed",foto:"./fotoCampeoes/zed.png"},
    {nomeBeta:"Monetes",nomeLol:"Taric",foto:"./fotoCampeoes/taric.png"},
    {nomeBeta:"Cristina Clandestina",nomeLol:"Kalista",foto:"./fotoCampeoes/kalista.png"},
    {nomeBeta:"Principe Show",nomeLol:"Hecarim",foto:"./fotoCampeoes/hecarim.png"},
    {nomeBeta:"Andrew Garfield Melhor Aranha",nomeLol:"Elise",foto:"./fotoCampeoes/elise.png"},
    {nomeBeta:"Querido Amigo",nomeLol:"Nocturne",foto:"./fotoCampeoes/nocturne.png"},
    {nomeBeta:"Gasparsinho",nomeLol:"Karthus",foto:"./fotoCampeoes/karthus.png"},
    {nomeBeta:"Rosa Criminosa",nomeLol:"Zyra",foto:"./fotoCampeoes/zyra.png"},
    {nomeBeta:"Gepeto",nomeLol:"Gangplank",foto:"./fotoCampeoes/gangplank.png"},
    {nomeBeta:"Lol Sem Graça",nomeLol:"Talon",foto:"./fotoCampeoes/talon.png"},
    {nomeBeta:"Lol Desgraçada",nomeLol:"Katarina",foto:"./fotoCampeoes/katarina.png"},
    {nomeBeta:"Cassino",nomeLol:"Cassiopeia",foto:"./fotoCampeoes/cassiopeia.png"},
    {nomeBeta:"Nicoly",nomeLol:"Neeko",foto:"./fotoCampeoes/neeko.png"},
    {nomeBeta:"Mulher Honesta",nomeLol:"Yorick",foto:"./fotoCampeoes/yorick.png"},
    {nomeBeta:"Linda Orquidea",nomeLol:"Maokai",foto:"./fotoCampeoes/maokai.png"},
    {nomeBeta:"Esqueleto Online",nomeLol:"Thresh",foto:"./fotoCampeoes/thresh.png"},
    {nomeBeta:"Ao Vivo Online",nomeLol:"Viego",foto:"./fotoCampeoes/viego.png"},
    {nomeBeta:"Lukinha Du Corte",nomeLol:"Gwen",foto:"./fotoCampeoes/gwen.jpg"},
    {nomeBeta:"Online Maligno",nomeLol:"Cho'Gath",foto:"./fotoCampeoes/cho'gath.png"},
    {nomeBeta:"Pica",nomeLol:"Pyke",foto:"./fotoCampeoes/pyke.png"},
    {nomeBeta:"Funny Lol",nomeLol:"Sylas",foto:"./fotoCampeoes/sylas.png"},
    {nomeBeta:"Lol Funny",nomeLol:"Shaco",foto:"./fotoCampeoes/shaco.png"},
    {nomeBeta:"Lol Of Legends",nomeLol:"Draven",foto:"./fotoCampeoes/draven.png"},
    {nomeBeta:"Xota monstra",nomeLol:"Rek'Sai",foto:"./fotoCampeoes/rek'sai.png"},
    {nomeBeta:"Pai E Filha",nomeLol:"Nunu e Willump",foto:"./fotoCampeoes/nunu.png"},
    {nomeBeta:"Sasha Velout Engraçada",nomeLol:"Singed",foto:"./fotoCampeoes/singed.png"},
    {nomeBeta:"Tiquinho",nomeLol:"Twitch",foto:"./fotoCampeoes/twitch.png"},
    {nomeBeta:"Dr. World",nomeLol:"Dr. Mundo",foto:"./fotoCampeoes/dr. mundo.png"},
    {nomeBeta:"Floquinho",nomeLol:"Volibear",foto:"./fotoCampeoes/volibear.png"},
    {nomeBeta:"Mister Online",nomeLol:"Tryndamere",foto:"./fotoCampeoes/tryndamere.png"},
    {nomeBeta:"Lady Online",nomeLol:"Ashe",foto:"./fotoCampeoes/ashe.png"},
    {nomeBeta:"Joyce",nomeLol:"Jayce",foto:"./fotoCampeoes/jayce.png"},
    {nomeBeta:"Natalia",nomeLol:"Nautilus",foto:"./fotoCampeoes/nautilus.png"},
    {nomeBeta:"Velha",nomeLol:"Camille",foto:"./fotoCampeoes/camille.png"},
    {nomeBeta:"Velho",nomeLol:"Renata Glasc",foto:"./fotoCampeoes/renata.png"},
    {nomeBeta:"Marley",nomeLol:"Warwick",foto:"./fotoCampeoes/warwick.png"},
    {nomeBeta:"Sincera Online",nomeLol:"Soraka",foto:"./fotoCampeoes/soraka.png"},
    {nomeBeta:"Nelson",nomeLol:"Samira",foto:"./fotoCampeoes/samira.png"},
    {nomeBeta:"Julietty",nomeLol:"Sion",foto:"./fotoCampeoes/sion.png"},
    {nomeBeta:"A Topeira",nomeLol:"Rammus",foto:"./fotoCampeoes/rammus.png"},
    {nomeBeta:"Corpos Reais",nomeLol:"Sivir",foto:"./fotoCampeoes/sivir.png"},
    {nomeBeta:"Pimposo",nomeLol:"Ornn",foto:"./fotoCampeoes/ornn.png"},
    {nomeBeta:"Numanice Ao Vivo",nomeLol:"Nidalee",foto:"./fotoCampeoes/nidalee.png"},
    {nomeBeta:"Mayra Cardy",nomeLol:"Alistar",foto:"./fotoCampeoes/alistar.png"},
    {nomeBeta:"Erica Generica",nomeLol:"Zeri",foto:"./fotoCampeoes/zeri.png"},
    {nomeBeta:"Bu'Ceth",nomeLol:"Bel'Veth",foto:"./fotoCampeoes/bel'veth.png"},
]

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const valor = buscarInput.value.trim().toLowerCase()
   
    bonecosDiv.innerHTML = ""
    let encontrouCampeao = false

    campeoes.forEach((campeaoDaVez) => {
        const prioridades = [campeaoDaVez.nomeBeta.trim().toLowerCase(), campeaoDaVez.nomeLol.trim().toLowerCase()]
        if (prioridades.includes(valor)) {
            const boneco = document.createElement("div")
            boneco.innerHTML = `
                <h2>${campeaoDaVez.nomeBeta}</h2>
                <p><strong>${campeaoDaVez.nomeLol}</strong></p>
                <img src="${campeaoDaVez.foto}">
            `
            bonecosDiv.appendChild(boneco)
            encontrouCampeao = true
        }
    })

    if (!encontrouCampeao) {
        alert("Campeão não lançado no beta.")
        bonecosDiv.innerHTML = `<img src="FotoCompleta.jpg"> `
    }

    buscarInput.value = ""
})
