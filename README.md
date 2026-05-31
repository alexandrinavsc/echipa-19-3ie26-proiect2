# CapeGo — Discover Cape Town

CapeGo este un site de prezentare turistică pentru descoperirea tururilor, peisajelor, culturii și experiențelor de călătorie din Cape Town, Africa de Sud.

---

## Tehnologii folosite

- **React** + **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Strapi** (backend CMS pentru tururi)
- **Netlify** (deployment)

---

## Structura proiectului

    src/
    ├── components/
    │   ├── Navbar.jsx       — Navigație + dark/light mode + hamburger mobile
    │   ├── Footer.jsx       — Footer cu 3 coloane + social links
    │   └── TourCard.jsx     — Card pentru tururi
    ├── context/
    │   └── ThemeContext.jsx — Context global pentru dark/light mode
    ├── pages/
    │   ├── Home.jsx         — Pagina principală
    │   ├── About.jsx        — Despre CapeGo + FAQ
    │   ├── Tours.jsx        — Lista tururi din Strapi
    │   ├── TourDetail.jsx   — Detalii tur
    │   ├── Gallery.jsx      — Galerie foto + slider
    │   └── Contact.jsx      — Formular contact
    └── services/
        └── strapi.js        — Conexiune API Strapi

---

## Cum rulezi proiectul

    cd echipa-19-3ie26-proiect2
    npm install
    npm run dev

Deschide browserul la http://localhost:5173

---

## Contribuții

| Membru | Contribuție |
|--------|-------------|
| **Alexandrina** | Home.jsx, Tours.jsx, TourCard.jsx, conectare Strapi, deploy Netlify |
| **Ecaterina** | About.jsx, Gallery.jsx |
| **Alexia** | Contact.jsx, hamburger mobile menu în Navbar.jsx |
| **Tijana** | Dark/Light mode, Footer improvements, README.md |

---

## Funcționalități implementate

### Dark / Light Mode — Tijana Subin
- Buton de toggle în navbar, vizibil pe toate paginile
- Detectează automat preferința sistemului
- Preferința se salvează în localStorage
- Implementat prin React Context API (ThemeContext)
- Tranziție smooth între teme

### Footer îmbunătățit — Tijana Subin
- 3 coloane: Brand + Social Links, Quick Links, Contact
- Linkuri funcționale (tel, email)
- Orar de funcționare
- Bottom bar cu Privacy Policy și Terms of Service
- Responsive pe mobile

### Hamburger Mobile Menu — Alexia Neagoe
- Meniu mobil animat în Navbar
- Se închide automat la schimbarea rutei
- Blochează scroll-ul când e deschis

### Galerie foto — Ecaterina Grebincea
- Slider cu imagini din Cape Town
- Grid galerie responsive
- Animații de tranziție

### Pagina About — Ecaterina Grebincea
- Secțiune hero cu imagine
- Povestea CapeGo
- Statistici animate
- FAQ accordion

### Tururi + Strapi + Netlify — Alexandrina Vesca
- Tours.jsx — listă tururi preluate din Strapi CMS
- TourCard.jsx — card reutilizabil pentru fiecare tur
- Conectare API Strapi pentru date dinamice
- Deploy pe Netlify

### Pagina Home — Alexandrina Vesca
- Hero section
- Secțiune "Why CapeGo?"
- Linkuri către tururi
