const drivers = {
    verstappen: {
        name: "Max Verstappen",
        team: "Red Bull",
        bio: "Current champion contender, aggressive driving style.",
        photo: "drivers/mv2024.avif"
    },
    hamilton: {
        name: "Lewis Hamilton",
        team: "Ferrari",
        bio: "7-time world champion, strong racecraft and consistency.",
        photo: "drivers/lh44.avif"
    },
    leclerc: {
        name: "Charles Leclerc",
        team: "Ferrari",
        bio: "Talented young driver, known for his qualifying pace. The only one to able to dance with Verstappen.",
        photo: "drivers/cl16.avif"
    },
    norris: {
        name: "Lando Norris",
        team: "McLaren",
        bio: "Rising star, known for his speed and humor.",
        photo: "ln4.avif"
    },
    piastri: {
        name: "Oscar Piastri",
        team: "McLaren",
        bio: "Young talent, impressive rookie season.",
        photo: "drivers/op81.avif"
    },
    russell: {
        name: "George Russell",
        team: "Mercedes",
        bio: "Consistent performer, strong technical feedback.",
        photo: "drivers/gr63.avif"
    },
    alonso: {
        name: "Fernando Alonso",
        team: "Aston Martin",
        bio: "Veteran driver, two-time world champion with a wealth of experience.",
        photo: "drivers/fa14.avif"
    },
    gasly: {
        name: "Pierre Gasly",
        team: "Alpine",
        bio: "Known for his resilience and ability to extract performance from the car. Win in 2020 at Monza was a highlight.",
        photo: "drivers/pg10.avif"
    },
    ocon: {
        name: "Esteban Ocon",
        team: "Haas",
        bio: "Solid and dependable driver, known for his racecraft. Random win in 2021 was a surprise to all.",
        photo: "drivers/eo31.avif"
    },
    sainz: {
        name: "Carlos Sainz",
        team: "Williams",
        bio: "Smooth operator, consistently scores points for the team.",
        photo: "drivers/cs55.avif"
    },
    albon: {
        name: "Alexander Albon",
        team: "Williams",
        bio: "Loyal and hardworking driver, showing steady improvement.",
        photo: "drivers/aa23.avif"
    },
    stroll: {
        name: "Lance Stroll",
        team: "Aston Martin",
        bio: "Prone to crashes, but has shown flashes of speed.",
        photo: "drivers/ls18.avif"
    },
    lindblad: {
        name: "Arvid Lindblad",
        team: "VCARB",
        bio: "Rookie, Young talent, known for his potential and adaptability.",
        photo: "drivers/al41.avif"
    },
    lawson: {
        name: "Liam Lawson",
        team: "VCARB",
        bio: "Aggressive driver, eager to prove himself in F1.",
        photo: "drivers/ll30.avif"
    },
    antonelli: {
        name: "Andrea Kimi Antonelli",
        team: "Mercedes",
        bio: "Young talent, known for his potential and adaptability.",
        photo: "drivers/aa12.avif"
    },
    hulkenberg: {
        name: "Nico Hülkenberg",
        team: "Audi",   
        bio: "Veteran driver, known for his experience and consistency. Got a first podium in Britain 2025.",
        photo: "drivers/nh24.avif"
    },
    bortoleto: {
        name: "Gabriel Bortoleto",
        team: "Audi",
        bio: "Young talent, known for his potential and adaptability. Champion of F2 2024.",
        photo: "drivers/gb5.avif"
    },
    hadjar: {
        name: "Isack Hadjar",
        team: "Red Bull",
        bio: "Promising young driver, showing great potential in his rookie season.",
        photo: "drivers/ih6.avif"
    },
    bearman: {
        name: "Oliver Bearman",
        team: "Haas",
        bio: "Young talent, known for his potential and adaptability. Got a surprise P4 in Mexico 2025.",
        photo: "drivers/ob87.avif"
    },
    bottas: {
        name: "Valtteri Bottas",
        team: "Caddilac",
        bio: "Experienced driver, known for his consistency and teamwork.",
        photo: "drivers/vb77.avif"
    },
    perez: {
        name: "Sergio Perez",
        team: "Caddilac",
        bio: "Skilled driver, known for his tire management and defensive driving.",
        photo: "drivers/sp11.avif"
    },
    colapinto: {
        name: "Franco Colapinto",
        team: "Alpine",
        bio: "Franco Colapinto, young GOAT from Argentina.",
        photo: "drivers/fc43.avif"
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const data = drivers[id];

if (!data) {
    document.getElementById("name").textContent = "Driver not found";
}
else {
    document.title = data.name;
    document.getElementById("name").textContent = data.name;
    document.getElementById("team").textContent = `Team: ${data.team}`;
    document.getElementById("bio").textContent = data.bio;

    const img = document.getElementById("photo");
    img.src = data.photo;
    img.alt = data.name;
}
