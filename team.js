// Theme toggle (same logic as on index)
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        themeToggle.textContent = isLight ? 'Dark Mode' : 'Light Mode';
    });
}

const teams = {
    redbull: {
        name: "Red Bull",
        logo: "logos/redbull.png",
        desc: "Top speed and strong race pace.",
        base: "Milton Keynes, UK",
        engine: "Red Bull - Ford"
    },
    ferrari: {
        name: "Ferrari",
        logo: "logos/ferrari.png",
        desc: "Historic team with ahh strategy and delusional fans.",
        base: "Maranello, Italy",
        engine: "Ferrari"
    },
    mercedes: {
        name: "Mercedes",
        logo: "logos/mercedes.png",
        desc: "Technical excellence and consistency.",
        base: "Brackley, UK",
        engine: "Mercedes"
    },
    mclaren: {
        name: "McLaren",
        logo: "logos/mclaren.png",
        desc: "Very fast upgrades and strong drivers.",
        base: "Woking, UK",
        engine: "Mercedes"
    },
    astonmartin: {
        name: "Aston Martin",
        logo: "logos/astonmartin.png",
        desc: "High potential, aiming for podiums.",
        base: "Silverstone, UK",
        engine: "Honda RBPT"
    },
    alpine: {
        name: "Alpine",
        logo: "logos/alpine.png",
        desc: "Midfield battles every weekend.",
        base: "Enstone, UK",
        engine: "Mercedes"
    },
    williams: {
        name: "Williams",
        logo: "logos/williams.png",
        desc: "Legendary team building up again.",
        base: "Grove, UK",
        engine: "Mercedes"
    },
    rb: {
        name: "RB",
        logo: "logos/rb.png",
        desc: "Young talent and aggressive strategy.",
        base: "Faenza, Italy",
        engine: "Red Bull - Ford"
    },
    haas: {
        name: "Haas",
        logo: "logos/haas.png",
        desc: "Fighting hard in the midfield.",
        base: "Kannapolis, USA",
        engine: "Ferrari"
    },
    audi: {
        name: "Audi",
        logo: "logos/audi.png",
        desc: "First season and development focus.",
        base: "Hinwil, Switzerland",
        engine: "Audi"
    },
    cadillac: {
        name: "Cadillac",
        logo: "logos/cadillac.png",
        desc: "New entry with strong financial backing.",
        base: "Fishers, Indiana, USA",
        engine: "Ferrari"
    }
};

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const data = teams[id];

const nameEl = document.getElementById('team-name');
const logoEl = document.getElementById('team-logo');
const descEl = document.getElementById('team-desc');
const baseEl = document.getElementById('team-base');
const engineEl = document.getElementById('team-engine');

if (!data) {
    document.title = "Team not found";
    nameEl.textContent = "Team not found";
} else {
    document.title = data.name;
    nameEl.textContent = data.name;
    logoEl.src = data.logo;
    logoEl.alt = data.name + " logo";
    descEl.textContent = data.desc;
    baseEl.textContent = data.base;
    engineEl.textContent = data.engine;
}
