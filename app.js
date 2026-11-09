/**
 * Dr. K. Mathiyazhagan — Academic Research Profile
 * Client-side Data & Interactivity
 */

const ACADEMIC_DATA = {
  publications: [
    {
      y: 2026,
      t: "Resource use optimisation for public sector infrastructure projects: An empirical examination of digital twin adoption",
      a: "Singh, R.K., Kaliyan, M., Cao, D., Saikouk, T.",
      j: "Technological Forecasting and Social Change, 227, 124625",
      badge: "ABDC A · IF 13.3",
      tier: "A",
      topic: "Supply Chain",
      doi: "https://doi.org/10.1016/j.techfore.2024.124625"
    },
    {
      y: 2026,
      t: "Role of generative AI towards sustainable procurement",
      a: "Modgil, S., Singh, R.K., Mathiyazhagan, K., Żywiołek, J.",
      j: "The International Journal of Logistics Management, 37(2), 476–499",
      badge: "ABDC A · IF 7.2",
      tier: "A",
      topic: "Sustainability",
      doi: "https://doi.org/10.1108/IJLM-05-2023-0185"
    },
    {
      y: 2026,
      t: "Adoption of circular economy practices in supply chains to enhance firm performance: industrial symbiosis and ecological modernization theory perspective",
      a: "Dadsena, K.K., Rathore, P., Mathiyazhagan, K., Jayaraman, R., Saha, E.",
      j: "The International Journal of Logistics Management, 1–31",
      badge: "ABDC A · IF 7.2",
      tier: "A",
      topic: "Circular Economy",
      doi: "https://doi.org/10.1108/IJLM-10-2023-0428"
    },
    {
      y: 2025,
      t: "Exploring sustainable energy consumption practices: An extended environmental value-belief-norm framework using SEM analysis",
      a: "Kumar, V., Kaur, A., Cao, D., Sindhwani, R., Mathiyazhagan, K., Lin, B.",
      j: "Energy Economics (Elsevier), 145, 108408",
      badge: "ABDC A* · IF 13.6",
      tier: "A*",
      topic: "Sustainability",
      doi: "https://doi.org/10.1016/j.eneco.2024.108408"
    },
    {
      y: 2025,
      t: "Deployment of Industry 4.0 technologies to achieve a circular economy in agri-food supply chains: A thorough analysis of enablers",
      a: "Zhao, G., Ye, C., Zubairu, N., Mathiyazhagan, K., Zhou, X.",
      j: "Journal of Environmental Management, 373, 123856",
      badge: "ABDC A · IF 8.3",
      tier: "A",
      topic: "Circular Economy",
      doi: "https://doi.org/10.1016/j.jenvman.2024.123856"
    },
    {
      y: 2025,
      t: "Green drives: Understanding how environmental propensity, range and technological anxiety shape electric vehicle adoption intentions",
      a: "Kumar, V., Kaushik, A.K., Noravesh, F., Sindhwani, R., Mathiyazhagan, K.",
      j: "Technological Forecasting and Social Change, 210, 123859",
      badge: "ABDC A · IF 12.9",
      tier: "A",
      topic: "Sustainability",
      doi: "https://doi.org/10.1016/j.techfore.2024.123859"
    },
    {
      y: 2024,
      t: "Where there is a will there is a way: A strategy analysis for electric vehicles sales in India",
      a: "Vimal, K.E.K., Goel, P., Sharma, N., Mathiyazhagan, K., Luthra, S.",
      j: "Transportation Research Part E: Logistics and Transportation Review, 185, 103506",
      badge: "ABDC A* · IF 8.3",
      tier: "A*",
      topic: "Sustainability",
      doi: "https://doi.org/10.1016/j.tre.2024.103506"
    },
    {
      y: 2024,
      t: "Food supply chain resilience in the digital era: a bibliometric analysis and development of conceptual framework",
      a: "Sutar, P.S., Kolte, G., Yamini, S., Mathiyazhagan, K.",
      j: "Journal of Business & Industrial Marketing, 39(9), 1863–1893",
      badge: "ABDC A · IF 3.6",
      tier: "A",
      topic: "Supply Chain",
      doi: "https://doi.org/10.1108/JBIM-07-2023-0402"
    },
    {
      y: 2024,
      t: "Integrating flexibility and sustainability in supply chains: a practice-based view on leadership, knowledge and digital quality management practices",
      a: "Singh, R.K., Mathiyazhagan, K.",
      j: "The International Journal of Logistics Management, 35(6), 1961–1980",
      badge: "ABDC A · IF 7.2",
      tier: "A",
      topic: "Supply Chain",
      doi: "https://doi.org/10.1108/IJLM-07-2023-0294"
    },
    {
      y: 2024,
      t: "Green Open Innovation and Circular Economy: investigating the role of Big Data Management and Sustainable Supply Chain",
      a: "Singh, R.K., Mathiyazhagan, K., Scuotto, V., Pironti, M.",
      j: "IEEE Transactions on Engineering Management, 71, 10842-10854",
      badge: "ABDC A · IF 4.6",
      tier: "A",
      topic: "Circular Economy",
      doi: "https://doi.org/10.1109/TEM.2024.3364920"
    },
    {
      y: 2024,
      t: "Enabling industry 4.0: Assessing technologies and prioritization framework for agile manufacturing in India",
      a: "Prajapati, D.K., Mathiyazhagan, K., Agarwal, V., Khorana, S., Gunasekaran, A.",
      j: "Journal of Cleaner Production, 447, 141488",
      badge: "ABDC A · IF 11.07",
      tier: "A",
      topic: "Industry 4.0",
      doi: "https://doi.org/10.1016/j.jclepro.2024.141488"
    },
    {
      y: 2023,
      t: "Linking supply chain resilience with knowledge management for achieving supply chain performance",
      a: "Mukherjee, S., Nagariya, R., Mathiyazhagan, K., Scuotto, V.",
      j: "Journal of Knowledge Management, 28(4), 971–993",
      badge: "ABDC A · IF 7.0",
      tier: "A",
      topic: "Supply Chain",
      doi: "https://doi.org/10.1108/JKM-03-2023-0205"
    },
    {
      y: 2021,
      t: "Barriers to the Adoption of Blockchain Technology in Business Supply Chains: A Total Interpretive Structural Modelling (TISM) approach",
      a: "Mathivathanan, D., Mathiyazhagan, K., Rana, N.P., Khorana, S., Dwivedi, Y.K.",
      j: "International Journal of Production Research, 59(11), 3338–3359",
      badge: "ABDC A · IF 9.08 · Top-Cited Award",
      tier: "A",
      topic: "Supply Chain",
      doi: "https://doi.org/10.1080/00207543.2020.1768881"
    },
    {
      y: 2014,
      t: "Barriers analysis for Green Supply Chain Management implementation in Indian Industries Using Analytic Hierarchy Process",
      a: "Govindan, K., Mathiyazhagan, K., Devika, K., Haq, A.N.",
      j: "International Journal of Production Economics (Elsevier), 147, 555–568",
      badge: "ABDC A · IF 11.25 · Citation of Excellence Award",
      tier: "A",
      topic: "Sustainability",
      doi: "https://doi.org/10.1016/j.ijpe.2013.08.018"
    }
  ],

  internationalVisits: [
    {
      inst: "University of Economics in Katowice",
      country: "Poland",
      role: "Visiting Research Collaborator & Keynote Speaker",
      period: "Nov 2025",
      funding: "GZM Metropolitan Science & Education Support Fund, Poland"
    },
    {
      inst: "Ton Duc Thang University & Van Lang University",
      country: "Vietnam",
      role: "Keynote & Research Workshop Host",
      period: "July 2025 & Nov 2024",
      funding: "Fully Sponsored International Invitation"
    },
    {
      inst: "Excelia Business School (Paris & La Rochelle)",
      country: "France",
      role: "Visiting Faculty (Master's Degree Teaching) & Joint Project",
      period: "Jan 2025",
      funding: "Sponsored by Excelia Business School"
    },
    {
      inst: "University of Salerno",
      country: "Italy",
      role: "Research Workshop (Elevate Your Research: Editor Insights)",
      period: "Oct 2024",
      funding: "Sponsored Host Institute"
    },
    {
      inst: "Polish Academy of Sciences (MEERI PAS)",
      country: "Poland",
      role: "Keynote Speaker on Water & Sewage Circular Economy",
      period: "April 2024",
      funding: "Iceland Liechtenstein Norway Grants"
    },
    {
      inst: "Beijing University of Chemical Technology (BUCT)",
      country: "China",
      role: "Research Seminars & Editor Lecture Series",
      period: "Dec 2023 & July 2024",
      funding: "Sponsored Host Invitation"
    },
    {
      inst: "Nottingham Trent University",
      country: "United Kingdom",
      role: "Collaborative International Research Workshop Organiser",
      period: "Sept 2023",
      funding: "Nottingham Business School"
    },
    {
      inst: "Tor Vergata University of Rome",
      country: "Italy",
      role: "Visiting Faculty (Continuing Collaborative Appointment)",
      period: "June 2020 – Present",
      funding: "Department of Management and Law"
    },
    {
      inst: "University of Southern Denmark",
      country: "Denmark",
      role: "Visiting Post Doc / Research Scholar",
      period: "2012, 2016–2017",
      funding: "Danish Ministry of Science & Innovation Network Grant"
    }
  ],

  scholarVisits: [
    {
      name: "Mr. Gouthamraj M. P.",
      dest: "Excelia Business School, La Rochelle, France",
      dates: "20 May – 7 June 2024",
      sponsor: "Fully Sponsored by Excelia Business School (Ranked #6 in France, #34 Globally)",
      focus: "Sustainable and circular food supply chains research"
    },
    {
      name: "Mr. Thavaprakash A.",
      dest: "School of Economics and Management, Beijing University of Chemical Technology, China",
      dates: "28 April – 25 May 2024",
      sponsor: "Host Research Group Invitation (BUCT, QS 721-730)",
      focus: "Sustainable supply chain management and digital technology adoption"
    }
  ],

  editorialRoles: [
    {
      name: "Journal of Knowledge Management",
      role: "Managing Regional Real Impact Editor (Asia) & Assoc. Editor",
      publisher: "Emerald Publishing",
      if: "9.5",
      tags: ["ABDC A", "SSCI", "Q1"]
    },
    {
      name: "International Journal of Logistics Management",
      role: "Associate Editor",
      publisher: "Emerald Publishing",
      if: "6.4",
      tags: ["ABDC A", "SSCI", "Q1"]
    },
    {
      name: "Journal of Intellectual Capital",
      role: "Associate Editor",
      publisher: "Emerald Publishing",
      if: "6.8",
      tags: ["ABDC B", "SSCI", "Q1"]
    },
    {
      name: "Environment, Development and Sustainability",
      role: "Associate Editor",
      publisher: "Springer Nature",
      if: "4.7",
      tags: ["SCIE", "Scopus", "Q2"]
    }
  ],

  grants: [
    {
      agency: "West Bengal Pollution Control Board (WBPCB)",
      amount: "₹9.60 Lakhs",
      title: "ESG Excellence: A Comprehensive Study to Benchmarking Best Practices and Engaging Value Chain Projects",
      status: "In Progress",
      collab: "Awarded to Dr. Soni Agarwal (IIM Nagpur) & Dr. K. Mathiyazhagan"
    },
    {
      agency: "Indian Council of Social Science Research (ICSSR)",
      amount: "₹9.04 Lakhs",
      title: "Identification of overlaps between existing Compliance requirements for Companies with Business Responsibility and Sustainability Reporting (BRSR)",
      status: "In Progress",
      collab: "Awarded to Dr. Soni Agarwal (IIM Nagpur) & Dr. K. Mathiyazhagan"
    },
    {
      agency: "AICTE ATAL Faculty Development Grants",
      amount: "₹10.50 Lakhs",
      title: "Three Sanctioned Programmes (₹3.5L each): Six Sigma in Quality Management, Circular Economy & Business Models for SDGs, and Digital Technologies for Circular Economy",
      status: "Completed",
      collab: "Coordinator: Dr. K. Mathiyazhagan (TSM Madurai)"
    }
  ],

  books: [
    {
      title: "Humanizing Circular Supply Chain Management",
      editors: "K. Mathiyazhagan, V. Agarwal, S. Malhotra, V. Scuotto",
      publisher: "Springer Nature (2025)",
      badge: "Forthcoming"
    },
    {
      title: "Sustainable Operations of Logistics and Supply Chain Management",
      editors: "K. Mathiyazhagan, K. K. Dadsena, R. K. Singh, A. Kishore, A. Appolloni",
      publisher: "Scrivener Publishing LLC / Wiley (2025, 400 pages)",
      badge: "In Press"
    },
    {
      title: "Strategic Blueprints for AI-Driven Marketing in the Digital Era",
      editors: "R. Dulloo, A. Kurian, M. Bolesnikov, I. Struweg, K. Mathiyazhagan",
      publisher: "IGI Global (2025, 850 pages)",
      badge: "Reference"
    },
    {
      title: "Impact of Industry 4.0 on Supply Chain Sustainability",
      editors: "K. Mathiyazhagan, A. Kishore, B. Behdani, H. Thanki",
      publisher: "Emerald Publishing (2024)",
      badge: "Published"
    }
  ]
};

// UI Interactions
document.addEventListener('DOMContentLoaded', () => {
  initHeroMedia();
  initPublications();
  initVisits();
  initEditorialAndGrants();
  initInteractions();
});

// Clean Hero Video / Image cycling with zero 404 probing
function initHeroMedia() {
  const container = document.getElementById('heroMediaMount');
  if (!container) return;

  const mediaFiles = ['hero-1.mp4', 'hero-4.mp4', 'hero-5.mp4', 'hero-6.mp4', 'hero-7.mp4'];
  let currentIndex = 0;

  const video = document.createElement('video');
  video.autoplay = true;
  video.muted = true;
  video.loop = false;
  video.playsInline = true;
  video.src = mediaFiles[currentIndex];

  video.addEventListener('ended', () => {
    currentIndex = (currentIndex + 1) % mediaFiles.length;
    video.src = mediaFiles[currentIndex];
    video.play().catch(() => {});
  });

  video.addEventListener('error', () => {
    // If video fails, fallback gracefully to portrait image
    container.innerHTML = `<img src="portrait.jpg" alt="Dr. K. Mathiyazhagan" style="width:100%;height:100%;object-fit:cover;object-position:50% 18%;">`;
  });

  container.appendChild(video);
}

// Render and filter publications
function initPublications() {
  const listEl = document.getElementById('pubList');
  const searchInput = document.getElementById('pubSearch');
  const filterBtns = document.querySelectorAll('.pub-filter-btn');

  let activeTier = 'ALL';
  let searchTerm = '';

  function render() {
    let filtered = ACADEMIC_DATA.publications.filter(p => {
      const matchTier = activeTier === 'ALL' || p.tier === activeTier;
      const matchSearch = !searchTerm || 
        p.t.toLowerCase().includes(searchTerm) || 
        p.a.toLowerCase().includes(searchTerm) || 
        p.j.toLowerCase().includes(searchTerm);
      return matchTier && matchSearch;
    });

    if (filtered.length === 0) {
      listEl.innerHTML = `<div style="padding: 32px; text-align:center; color: var(--ink-muted);">No publications found matching your search.</div>`;
      return;
    }

    listEl.innerHTML = filtered.map(pub => `
      <article class="pub-card">
        <div>
          <span class="pub-year-badge">${pub.y}</span>
          <h4 class="pub-title">${pub.t}</h4>
          <p class="pub-authors">${pub.a}</p>
          <p class="pub-journal">${pub.j}</p>
        </div>
        <div class="pub-meta-side">
          <span class="tier-badge ${pub.tier === 'A*' ? 'top' : ''}">${pub.badge}</span>
          <div style="display: flex; gap: 8px; align-items: center;">
            <button class="btn-cite" onclick="copyBibtex('${pub.t.replace(/'/g, "\\'")}', '${pub.a.replace(/'/g, "\\'")}', '${pub.j.replace(/'/g, "\\'")}', ${pub.y})">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
              Cite
            </button>
            ${pub.doi ? `<a href="${pub.doi}" target="_blank" rel="noopener" class="btn-cite" style="color:var(--ink-secondary);">DOI ↗</a>` : ''}
          </div>
        </div>
      </article>
    `).join('');
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeTier = btn.dataset.tier;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.toLowerCase().trim();
      render();
    });
  }

  render();
}

// Render International Visits and Scholar Mentorship
function initVisits() {
  const visitBody = document.getElementById('visitTableBody');
  const mentorshipList = document.getElementById('mentorshipList');

  if (visitBody) {
    visitBody.innerHTML = ACADEMIC_DATA.internationalVisits.map(v => `
      <tr>
        <td>
          <div class="visit-inst">${v.inst}</div>
          <div style="font-size:13px; color:var(--ink-muted);">${v.country}</div>
        </td>
        <td>
          <div>${v.role}</div>
          <div class="visit-funding">${v.funding}</div>
        </td>
        <td style="white-space:nowrap; font-weight:600; color:var(--ink-secondary); font-size:13px;">${v.period}</td>
      </tr>
    `).join('');
  }

  if (mentorshipList) {
    mentorshipList.innerHTML = ACADEMIC_DATA.scholarVisits.map(s => `
      <div class="mentorship-item">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <b>${s.name}</b>
          <span style="font-size:12px; font-weight:600; color:var(--accent-primary);">${s.dates}</span>
        </div>
        <span style="font-weight:550; color:var(--ink-primary);">${s.dest}</span>
        <span style="font-size:12.5px; color:var(--ink-muted);">${s.sponsor}</span>
        <span style="font-size:12px; color:var(--ink-secondary); font-style:italic;">Focus: ${s.focus}</span>
      </div>
    `).join('');
  }
}

// Render Editorial Boards, Grants & Books
function initEditorialAndGrants() {
  const editorialEl = document.getElementById('editorialGrid');
  const grantsEl = document.getElementById('grantsGrid');
  const booksEl = document.getElementById('booksGrid');

  if (editorialEl) {
    editorialEl.innerHTML = ACADEMIC_DATA.editorialRoles.map(ed => `
      <div class="journal-card">
        <div>
          <div class="journal-if"><small>Impact Factor</small>${ed.if}</div>
          <h4 class="journal-name" style="margin-top:12px;">${ed.name}</h4>
          <p style="font-size:13px; color:var(--accent-primary); font-weight:550; margin-top:4px;">${ed.role}</p>
          <p style="font-size:12.5px; color:var(--ink-muted);">${ed.publisher}</p>
        </div>
        <div class="journal-tags">
          ${ed.tags.map(t => `<span class="tag-sm">${t}</span>`).join('')}
        </div>
      </div>
    `).join('');
  }

  if (grantsEl) {
    grantsEl.innerHTML = ACADEMIC_DATA.grants.map(g => `
      <div class="grant-card">
        <div>
          <span class="grant-agency">${g.agency}</span>
          <div class="grant-amount" style="margin: 8px 0 12px;">${g.amount}</div>
          <p class="grant-title">${g.title}</p>
        </div>
        <div>
          <p class="grant-collab">${g.collab}</p>
          <span class="tag-sm" style="margin-top:8px; display:inline-block; background:var(--accent-light); color:var(--accent-primary); font-weight:600;">${g.status}</span>
        </div>
      </div>
    `).join('');
  }

  if (booksEl) {
    booksEl.innerHTML = ACADEMIC_DATA.books.map(b => `
      <div class="grant-card" style="padding:20px;">
        <span class="tag-sm" style="width:fit-content; background:var(--bg-subtle); color:var(--accent-primary);">${b.badge}</span>
        <h4 style="font-size:16px; margin: 10px 0 6px;">${b.title}</h4>
        <p style="font-size:13px; color:var(--ink-secondary);">${b.editors}</p>
        <p style="font-size:12.5px; color:var(--ink-muted); font-style:italic; margin-top:8px;">${b.publisher}</p>
      </div>
    `).join('');
  }
}

// Global UI Helper Functions
function initInteractions() {
  // Mobile Nav Toggle
  const toggleBtn = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
    // Close nav on click
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => navMenu.classList.remove('mobile-open'));
    });
  }

  // Back to Top button
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backBtn.classList.add('visible');
      } else {
        backBtn.classList.remove('visible');
      }
    });
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

function copyEmail(email) {
  navigator.clipboard.writeText(email).then(() => {
    showToast(`Copied ${email} to clipboard`);
  }).catch(() => {
    showToast(email);
  });
}

function copyBibtex(title, authors, journal, year) {
  const bib = `@article{mathiyazhagan${year},\n  title={${title}},\n  author={${authors}},\n  journal={${journal}},\n  year={${year}}\n}`;
  navigator.clipboard.writeText(bib).then(() => {
    showToast('BibTeX citation copied to clipboard');
  }).catch(() => {
    showToast('Citation copied');
  });
}
