
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    document.documentElement.classList.toggle('light-theme');

    const isLight = document.body.classList.contains('light-theme');
    themeToggle.textContent = isLight ? 'Dark Mode' : 'Light Mode';
});


// Modal functionality
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('article img').forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Counter for button clicks
const watchButton = document.getElementById('watch-button');
let clickCount = 0;
watchButton.addEventListener('click', () => {
    clickCount++;
    watchButton.textContent = `Watch Live Races (${clickCount})`;
});

// Driver search filter
const driverSearch = document.getElementById('driver-search');
const driverCards = document.querySelectorAll('#drivers .card-tile');

if (driverSearch) {
  driverSearch.addEventListener('input', () => {
    const query = driverSearch.value.toLowerCase().trim();

    driverCards.forEach(card => {
      const name = (card.dataset.driver || '').toLowerCase();
      card.style.display = name.includes(query) ? '' : 'none';
    });
  });
}

const tabButtons = document.querySelectorAll('.tab-btn');
const driversTable = document.getElementById('drivers-table');
const teamsTable = document.getElementById('teams-table');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        tabButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const tab = btn.dataset.tab;
        if (tab === 'drivers') {
            driversTable.classList.remove('hidden');
            teamsTable.classList.add('hidden');
        } else {
            teamsTable.classList.remove('hidden');
            driversTable.classList.add('hidden');
        }
    });
});

const toggleAllBtn = document.getElementById('toggle-all');

let showAll = false;

function setTab(tabName) {
    tabButtons.forEach(b => b.classList.remove('active'));

    if (tabName === 'drivers') {
        document.querySelector('.tab-btn[data-tab="drivers"]').classList.add('active');
        driversTable.classList.remove('hidden');
        teamsTable.classList.add('hidden');
    } else {
        document.querySelector('.tab-btn[data-tab="teams"]').classList.add('active');
        teamsTable.classList.remove('hidden');
        driversTable.classList.add('hidden');
    }
}

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        setTab(btn.dataset.tab);
    });
});

if (toggleAllBtn) {
    toggleAllBtn.addEventListener('click', () => {
        showAll = !showAll;

        driversTable.classList.toggle('show-all', showAll);
        teamsTable.classList.toggle('show-all', showAll);

        toggleAllBtn.textContent = showAll ? 'Show top 5' : 'Show all';
    });
}
const teamSearch = document.getElementById('team-search');
const teamCards = document.querySelectorAll('#teams .card-link');

if (teamSearch) {
    teamSearch.addEventListener('input', () => {
        const query = teamSearch.value.toLowerCase().trim();

        teamCards.forEach(card => {
            const name = (card.dataset.team || '').toLowerCase();
            card.style.display = name.includes(query) ? '' : 'none';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {

    const items = [
        {
            id: "hamilton",
            name: "Lewis Hamilton",
            desc: "Legendary British driver with unmatched championship pedigree, now in a challenging phase with Ferrari.",
            img: "drivers/lh44.avif",
            category: "driver",
            rating: 88
        },
        {
            id: "verstappen",
            name: "Max Verstappen",
            desc: "Dominant Dutch driver, multiple World Champion with relentless pace and racecraft 'Simply Lovely'",
            img: "drivers/mv2024.avif",
            category: "driver",
            rating: 97
        },
        {
            id: "russell",
            name: "Osama Bin Russell",
            desc: "'He just turned into me!' Al Merqaedes' greatest agent",
            img: "drivers/gr63.avif",
            category: "driver",
            rating: 91
        },
        {
            id: "antonelli",
            name: "Kimi Talibonelli",
            desc: "Young student of Osama Bin Russell. Al Merqaedes' secret weapon.",
            img: "drivers/aa12.avif",
            category: "driver",
            rating: 85
        },
        {
            id: "leclerc",
            name: "Charles Leclerc",
            desc: "Talented Monegasque racer with strong qualifying pace, multiple podiums, and solid championship performance.",
            img: "drivers/cl16.avif",
            category: "driver",
            rating: 95
        },
        {
            id: "norris",
            name: "Lando Norris",
            desc: "Reigning world champion with smooth aggression and elite racecraft.",
            img: "ln4.avif",
            category: "driver",
            rating: 92
        },
        {
            id: "sainz",
            name: "Carlos Sainz Jr.",
            desc: "Smooth Operator, Strategic and adaptable driver excelling across varied conditions.",
            img: "drivers/cs55.avif",
            category: "driver",
            rating: 88
        },
        {
            id: "albon",
            name: "Alexander Albon",
            desc: "Loyal and composed racer with strong tyre management.",
            img: "drivers/aa23.avif",
            category: "driver",
            rating: 84
        },
        {
            id: "lawson",
            name: "Liam Lawson",
            desc: "Talented and hungry racer with raw speed and growing consistency.",
            img: "drivers/ll30.avif",
            category: "driver",
            rating: 82
        },
        {
            id: "arvid",
            name: "Arvid Lindblad",
            desc: "Rookie with rapid adaptation and emerging competitive edge.",
            img: "drivers/al41.avif",
            category: "driver",
            rating: 78
        },
        {
            id: "stroll",
            name: "Lance Stroll",
            desc: "Dependable racer with solid pace and strong outings in tough conditions.",
            img: "drivers/ls18.avif",
            category: "driver",
            rating: 82
        },
        {
            id: "gasly",
            name: "Pierre Gasly",
            desc: "Talented and hungry racer with raw speed and growing consistency. Win in 2020 at Monza was a highlight.",
            img: "drivers/pg10.avif",
            category: "driver",
            rating: 86
        },
        {
            id: "colapinto",
            name: "Franco Colapinto",
            desc: "Franco Colapinto, young GOAT from Argentina",
            img: "drivers/fc43.avif",
            category: "driver",
            rating: 79
        },
        {
            id: "perez",
            name: "Sergio Perez",
            desc: "Experienced tyre management ace with strategic strength. Mexican minister of defense.",
            img: "drivers/sp11.avif",
            category: "driver",
            rating: 88
        },
        {
            id: "bottas",
            name: "Batteri Voltas",
            desc: "Uno formula Valtteri Bottas, Seasoned and consistent driver with strong race pace.",
            img: "drivers/vb77.avif",
            category: "driver",
            rating: 87
        },
        {
            id: "ocon",
            name: "Esteban Ocon",
            desc: "Disciplined racer with solid defensive skills and race control.",
            img: "drivers/eo31.avif",
            category: "driver",
            rating: 82
        },
        {
            id: "bearman",
            name: "Oliver Bearman",
            desc: "Promising youngster with aggressive pace and ambition. Got a surprise P4 in Mexico 2025.",
            img: "drivers/ob87.avif",
            category: "driver",
            rating: 83
        },
        {
            id: "hulkenberg",
            name: "Nico Hülkenberg",
            desc: "Veteran competitor with calm execution and strong technical feedback. First podium in Britain 2025.",
            img: "drivers/nh24.avif",
            category: "driver",
            rating: 83
        },
        {
            id: "bortoleto",
            name: "Gabriel Bortoleto",
            desc: "Champion of F2 2024. Young talent, known for his potential and adaptability.",
            img: "drivers/gb5.avif",
            category: "driver",
            rating: 80
        },
        {
            id: "alonso",
            name: "Fernando Alonso",
            desc: "Veteran master with exceptional racecraft and tactical strength.",
            img: "drivers/fa14.avif",
            category: "driver",
            rating: 88
        },
        {
            id: "vettel",
            name: "Sebastian Vettel",
            desc: "Four-time world champion. Red Bull era dominance.",
            img: "drivers/sv5.avif",
            category: "legend",
            rating: 95
        },
        {
            id: "schumacher",
            name: "Michael Schumacher",
            desc: "Seven-time world champion. Legendary driver with unmatched dominance.",
            img: "drivers/ms.avif",
            category: "legend",
            rating: 98
        },
        {
            id: "senna",
            name: "Ayrton Senna",
            desc: "Three-time world champion. Legendary driver with unmatched dominance.",
            img: "drivers/as.avif",
            category: "legend",
            rating: 97
        },
        {
            id: "prost",
            name: "Alain Prost",
            desc: "Four-time world champion. The Professor of Formula 1.",
            img: "drivers/ap.avif",
            category: "legend",
            rating: 96
        },
        {
            id: "hakkinen",
            name: "Mika Hakkinen",
            desc: "Two-time world champion. The Flying Finn.",
            img: "drivers/mh.avif",
            category: "legend",
            rating: 94
        },
        {
            id: "lauda",
            name: "Niki Lauda",
            desc: "Three-time world champion. Legendary driver with unmatched dominance.",
            img: "drivers/nl.avif",
            category: "legend",
            rating: 96
        },
        {
            id: "fangio",
            name: "Juan Manuel Fangio",
            desc: "Five-time world champion. Legendary driver with unmatched dominance.",
            img: "drivers/jf17.avif",
            category: "legend",
            rating: 97
        },
        {
            id: "ricciardo",
            name: "Daniel Ricciardo",
            desc: "Charismatic driver known for his overtaking skills and racecraft.",
            img: "drivers/dr3.avif",
            category: "legend",
            rating: 89
        },
        {
            id: "rosberg",
            name: "Britney Spears",
            desc: "2016 World Champion. Consistent and strategic driver.",
            img: "drivers/nr6.avif",
            category: "legend",
            rating: 92
        },
        {
            id: "kimi",
            name: "Kimi Räikkönen",
            desc: "2007 World Champion. The Iceman, known for his cool demeanor and speed.",
            img: "drivers/kr7.avif",
            category: "legend",
            rating: 94
        },
        {
            id: "ferrari",
            name: "Ferrari",
            desc: "Historic team with huge fanbase and strong strategy.",
            img: "logos/ferrari.png",
            category: "team",
            rating: 87
        },
        {
            id: "redbull",
            name: "Red Bull",
            desc: "Top speed and strong race pace.",
            img: "logos/redbull.png",
            category: "team",
            rating: 90
        },
        {
            id: "mercedes",
            name: "Al Merqaedes",
            desc: "The greatest terror team in the history of motorsport.",
            img: "mercedes.avif",
            category: "team",
            rating: 92
        },
        {
            id: "McLaren",
            name: "McLaren",
            desc: "Innovative team with a rich history and strong development.",
            img: "logos/mclaren.png",
            category: "team",
            rating: 95
        },
        {
            id: "Williams",
            name: "Williams",
            desc: "Resilient team with a legacy of success and strong engineering.",
            img: "logos/williams.png",
            category: "team",
            rating: 87
        },
        {
            id: "vcarb",
            name: "Visa Cash App Racing Bulls",
            desc: "Team with young talent and aggressive strategies.",
            img: "logos/rb.png",
            category: "team",
            rating: 85
        },
        {
            id: "astonmartin",
            name: "Aston Martin",
            desc: "High potential with Newey as team principal.",
            img: "logos/astonmartin.png",
            category: "team",
            rating: 84
        },
        {
            id: "haas",
            name: "Haas",
            desc: "American team with a focus on steady development and consistency.",
            img: "logos/haas.png",
            category: "team",
            rating: 83
        },
        {
            id: "Audi",
            name: "Audi",
            desc: "Strong newcomer with significant resources and expertise.",
            img: "logos/audi.png",
            category: "team",
            rating: 85
        },
        {
            id: "alpine",
            name: "Alpine",
            desc: "French team with a history of solid performances and technical prowess.W",
            img: "logos/alpine.png",
            category: "team",
            rating: 80
        },
        {
            id: "bahrain",
            name: "Bahrain International Circuit",
            desc: "Desert circuit with heavy braking zones and high tyre degradation.",
            img: "tracks/bahrain.avif",
            category: "track",
            rating: 85
        },
        {
            id: "jeddah",
            name: "Jeddah Corniche Circuit",
            desc: "Ultra-fast street circuit with flowing corners and minimal run-off.",
            img: "tracks/jeddah.avif",
            category: "track",
            rating: 88
        },
        {
            id: "australia",
            name: "Albert Park Circuit",
            desc: "Semi-street track combining high speed with technical sections.",
            img: "tracks/australia.avif",
            category: "track",
            rating: 87
        },
        {
            id: "japan",
            name: "Suzuka Circuit",
            desc: "Classic figure-eight circuit demanding precision and rhythm.",
            img: "tracks/japan.avif",
            category: "track",
            rating: 95
        },
        {
            id: "china",
            name: "Shanghai International Circuit",
            desc: "Technical layout with long corners and a massive back straight.",
            img: "tracks/china.avif",
            category: "track",
            rating: 86
        },
        {
            id: "miami",
            name: "Miami International Autodrome",
            desc: "Street-style circuit with slow corners and tricky traction zones.",
            img: "tracks/miami.avif",
            category: "track",
            rating: 80
        },
        {
            id: "monaco",
            name: "Circuit de Monaco",
            desc: "Iconic street circuit where precision matters more than speed.",
            img: "tracks/monaco.avif",
            category: "track",
            rating: 82
        },
        {
            id: "canada",
            name: "Circuit Gilles-Villeneuve",
            desc: "Stop-and-go track famous for heavy braking and the Wall of Champions.",
            img: "tracks/canada.avif",
            category: "track",
            rating: 88
        },
        {
            id: "spain-madrid",
            name: "Madring",
            desc: "Modern hybrid circuit combining street sections with fast permanent corners.",
            img: "tracks/spain.avif",
            category: "track",
            rating: 86
        },
        {
            id: "austria",
            name: "Red Bull Ring",
            desc: "Short, fast lap with steep climbs and hard braking points.",
            img: "tracks/austria.avif",
            category: "track",
            rating: 84
        },
        {
            id: "greatbritain",
            name: "Silverstone Circuit",
            desc: "High-speed classic with long, flowing corners.",
            img: "tracks/silverstone.avif",
            category: "track",
            rating: 94
        },
        {
            id: "hungary",
            name: "Hungaroring",
            desc: "Tight and twisty circuit with limited overtaking opportunities.",
            img: "tracks/hungary.avif",
            category: "track",
            rating: 80
        },
        {
            id: "belgium",
            name: "Circuit de Spa-Francorchamps",
            desc: "Long, fast circuit with elevation changes and unpredictable weather.",
            img: "tracks/spa.avif",
            category: "track",
            rating: 96
        },
        {
            id: "netherlands",
            name: "Circuit Zandvoort",
            desc: "Narrow track with steep banking and challenging overtakes.",
            img: "tracks/zandvoort.avif",
            category: "track",
            rating: 86
        },
        {
            id: "italy",
            name: "Autodromo Nazionale Monza",
            desc: "Temple of Speed with long straights and low downforce setups.",
            img: "tracks/monza.avif",
            category: "track",
            rating: 92
        },
        {
            id: "azerbaijan",
            name: "Baku City Circuit",
            desc: "Street circuit mixing tight sections and long flat-out straights.",
            img: "tracks/baku.avif",
            category: "track",
            rating: 87
        },
        {
            id: "singapore",
            name: "Marina Bay Street Circuit",
            desc: "Night street circuit with extreme heat and physical demands.",
            img: "tracks/singapore.avif",
            category: "track",
            rating: 83
        },
        {
            id: "usa",
            name: "Circuit of the Americas",
            desc: "Modern circuit inspired by classic tracks with varied corners.",
            img: "tracks/usa.avif",
            category: "track",
            rating: 91
        },
        {
            id: "mexico",
            name: "Autódromo Hermanos Rodríguez",
            desc: "High-altitude circuit affecting engines and cooling.",
            img: "tracks/mexico.avif",
            category: "track",
            rating: 85
        },
        {
            id: "brazil",
            name: "Autódromo José Carlos Pace",
            desc: "Short lap with elevation changes and unpredictable races.",
            img: "tracks/interlagos.avif",
            category: "track",
            rating: 93
        },
        {
            id: "lasvegas",
            name: "Las Vegas Strip Circuit",
            desc: "High-speed night street circuit with long straights and neon lights.",
            img: "tracks/lasvegas.avif",
            category: "track",
            rating: 84
        },
        {
            id: "qatar",
            name: "Lusail International Circuit",
            desc: "Fast, flowing circuit focused on cornering stability.",
            img: "tracks/lusail.avif",
            category: "track",
            rating: 82
        },
        {
            id: "abudhabi",
            name: "Yas Marina Circuit",
            desc: "Modern circuit combining slow corners and long straights.",
            img: "tracks/yasmarina.avif",
            category: "track",
            rating: 83
        },
        {
            id: "imola",
            name: "Autodromo Enzo e Dino Ferrari",
            desc: "Classic circuit with tight corners and high-speed straights.",
            img: "tracks/imola.avif",
            category: "track",
            legacy: true,
            rating: 83
        },
        {
            id: "portimao",
            name: "Autódromo Internacional do Algarve",
            desc: "Fast, flowing circuit with blind crests, elevation changes, and rollercoaster corners.",
            img: "tracks/portimao.avif",
            category: "track",
            legacy: true,
            rating: 88
        },
        {
            id: "hockenheim",
            name: "Hockenheimring",
            desc: "Shorter stop-and-go circuit with limited character compared to the old layout.",
            img: "tracks/hockenheim.avif",
            category: "track",
            legacy: true,
            rating: 80
        },
        {
            id: "istanbul",
            name: "Istanbul Park",
            desc: "Technical layout famous for high-speed multi-apex Turn 8.",
            img: "tracks/turkey.avif",
            category: "track",
            legacy: true,
            rating: 92
        },
        {
            id: "France",
            name: "Circuit Paul Ricard",
            desc: "High-speed track focused on tyre management and stability through fast corners.",
            img: "tracks/france.avif",
            category: "track",
            legacy: true,
            rating: 81
        },
    ];

    const grid = document.getElementById('catalog-grid');
    const filter = document.getElementById('cat-filter');
    const sortBy = document.getElementById('sort-by');
    const search = document.getElementById('search');

    const modal = document.getElementById('catalog-modal');
    const modalClose = document.getElementById('modal-close');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalMeta = document.getElementById('modal-meta');

    function render(list) {
        if (!grid) return;

        grid.innerHTML = "";

        list.forEach(item => {
            const card = document.createElement('div');
            card.className = "catalog-card";

            card.innerHTML = `
                <img class="catalog-thumb" src="${item.img}" alt="${item.name}">
                <div class="catalog-body">
                    <h3 class="catalog-title">${item.name}</h3>
                    <p class="catalog-text">${item.desc}</p>
                    <div class="catalog-row">
                        <div class="badges">
                            <span class="badge category-badge ${item.category.toLowerCase()}">${item.category.toUpperCase()}</span>

                            ${item.legacy
                                ? '<span class="badge category-badge legend">LEGACY</span>' : ''
                            }

                            <span class="badge rating-badge" data-rating="${item.rating}">
                                ${item.rating}
                            </span>
                        </div>

                        <button class="details-btn" type="button">Details</button>
                    </div>
                </div>
            `;

            card.querySelector('.details-btn').addEventListener('click', () => {
                openModal(item);
            });

            grid.appendChild(card);
            card.querySelectorAll('.rating-badge').forEach(badge => {
                const r = Number(badge.dataset.rating);

                badge.classList.remove(
                    'rating-low',
                    'rating-mid',
                    'rating-good',
                    'rating-verygood',
                    'rating-elite'
                );

                if (r <= 80) badge.classList.add('rating-low');
                else if (r <= 84) badge.classList.add('rating-mid');
                else if (r <= 88) badge.classList.add('rating-good');
                else if (r <= 92) badge.classList.add('rating-verygood');
                else badge.classList.add('rating-elite');
            });
        });
        
    }

    function openModal(item) {
        modalImage.src = item.img;
        modalImage.alt = item.name;

        /* contain for teams & tracks */
        modalImage.classList.toggle(
            'contain',
            item.category === 'team' || item.category === 'track'
        );

        modalTitle.textContent = item.name;
        modalDesc.textContent = item.desc;

        if (modalMeta) {
            modalMeta.textContent =
                `Category: ${item.category.toUpperCase()} • Rating: ${item.rating}`;
        }

        modal.classList.add('open');
    }

    function closeModal() {
        modal.classList.remove('open');
    }

    function apply() {
        let list = [...items];

        if (filter && filter.value !== "all") {
            list = list.filter(x => x.category === filter.value);
        }

        const q = search ? search.value.toLowerCase().trim() : "";
        if (q) {
            list = list.filter(x =>
                x.name.toLowerCase().includes(q) ||
                x.desc.toLowerCase().includes(q)
            );
        }

        const s = sortBy ? sortBy.value : "name-asc";
        if (s === "name-asc") {
            list.sort((a, b) => a.name.localeCompare(b.name));
        }   else if (s === "name-desc") {
            list.sort((a, b) => b.name.localeCompare(a.name));
        }   else if (s === "rating-desc") {
            list.sort((a, b) => b.rating - a.rating);
        }

        render(list);
    }


    if (filter) filter.addEventListener('change', apply);
    if (sortBy) sortBy.addEventListener('change', apply);
    if (search) search.addEventListener('input', apply);

    if (modalClose) modalClose.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('open')) {
            closeModal();
        }
    });

    apply();
});