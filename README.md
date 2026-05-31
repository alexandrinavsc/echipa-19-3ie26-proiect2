---

## Cum rulezi proiectul

```bash
cd echipa-19-3ie26-proiect2
npm install
npm run dev
```

Deschide browserul la `http://localhost:5173`

---

## Contribuții

| Membru | Contribuție |
|--------|-------------|
| **Alexandrina** | Home.jsx, Tours.jsx, TourCard.jsx, conectare Strapi, deploy Netlify |
| **Katea** | About.jsx, Gallery.jsx |
| **Alexia** | Contact.jsx, hamburger mobile menu în Navbar.jsx |
| **Tijana** | Dark/Light mode, Footer improvements, README.md |

---

## Funcționalități implementate

### Dark / Light Mode — Tijana
- Buton de toggle în navbar, vizibil pe toate paginile
- Detectează automat preferința sistemului
- Preferința se salvează în `localStorage`
- Implementat prin React Context API (`ThemeContext`)
- Tranziție smooth între teme

### Footer îmbunătățit — Tijana
- 3 coloane: Brand + Social Links, Quick Links, Contact
- Linkuri funcționale (tel, email)
- Orar de funcționare
- Bottom bar cu Privacy Policy și Terms of Service
- Responsive pe mobile

### Hamburger Mobile Menu — Alexia
- Meniu mobil animat în Navbar
- Se închide automat la schimbarea rutei
- Blochează scroll-ul când e deschis

### Galerie foto — Katea
- Slider cu imagini din Cape Town
- Grid galerie responsive
- Animații de tranziție

### Pagina About — Katea
- Secțiune hero cu imagine
- Povestea CapeGo
- Statistici animate
- FAQ accordion

### Pagina Home — Alexandrina
- Hero section
- Secțiune "Why CapeGo?"
- Linkuri către tururi

### Tururi + Strapi + Netlify — Alexandrina
- Tours.jsx — listă tururi preluate din Strapi CMS
- TourCard.jsx — card reutilizabil pentru fiecare tur
- Conectare API Strapi pentru date dinamice
- Deploy pe Netlify
- 
