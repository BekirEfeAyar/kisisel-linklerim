/* ==========================================================================
   Sayfayı SITE ayarlarından üretir. Burayı normalde düzenlemene gerek yok.
   ========================================================================== */

/* --- İkon kütüphanesi (SVG) --- */
const IKONLAR = {
  instagram:
    '<path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.3 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.3-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0 5.1a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4m0 7.7a3 3 0 1 1 0-6 3 3 0 0 1 0 6m5.9-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0"/>',
  youtube:
    '<path d="M23 12s0-3.8-.5-5.6a2.9 2.9 0 0 0-2-2C18.6 3.9 12 3.9 12 3.9s-6.6 0-8.5.5a2.9 2.9 0 0 0-2 2C1 8.2 1 12 1 12s0 3.8.5 5.6a2.9 2.9 0 0 0 2 2c1.9.5 8.5.5 8.5.5s6.6 0 8.5-.5a2.9 2.9 0 0 0 2-2C23 15.8 23 12 23 12M9.8 15.4V8.6l5.8 3.4z"/>',
  github:
    '<path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.9 10.9c.6.1.8-.2.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.3.9.1-.7.4-1.2.7-1.5-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.4-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11 11 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.7.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5"/>',
  linkedin:
    '<path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1a3.8 3.8 0 0 1 3.4-1.9c3.6 0 4.3 2.4 4.3 5.4zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2m1.8 13.1H3.5V9h3.6zM22.2 0H1.8C.8 0 0 .8 0 1.7v20.6C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.7V1.7c0-1-.8-1.7-1.8-1.7"/>',
  twitter:
    '<path d="M18.2 2.2h3.3l-7.3 8.3 8.6 11.3h-6.7l-5.3-6.9-6 6.9H1.5l7.8-8.9L1 2.2h6.9l4.8 6.3zm-1.2 17.6h1.8L7.1 4.3H5.1z"/>',
  x: '<path d="M18.2 2.2h3.3l-7.3 8.3 8.6 11.3h-6.7l-5.3-6.9-6 6.9H1.5l7.8-8.9L1 2.2h6.9l4.8 6.3zm-1.2 17.6h1.8L7.1 4.3H5.1z"/>',
  tiktok:
    '<path d="M16.6 2h-3.2v13.4a2.6 2.6 0 1 1-2.2-2.6v-3.3a5.9 5.9 0 1 0 5.4 5.9V8.9a7 7 0 0 0 4 1.3V7a4.1 4.1 0 0 1-4-4.1z"/>',
  whatsapp:
    '<path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2m5.8 14.2c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.5-5.1-4.7-.2-.2-1.2-1.6-1.2-3s.7-2.1 1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.1.3.6 1 1.3 1.7.9.8 1.6 1.1 1.9 1.2.3.1.4.1.6-.1l.8-1c.2-.2.4-.2.6-.1l2 1c.2.1.4.2.4.3.1.2.1.8-.1 1.5"/>',
  telegram:
    '<path d="M23 4.4 19.7 20c-.2 1.1-.9 1.4-1.8.9l-4.9-3.6-2.4 2.3c-.3.3-.5.5-1 .5l.4-5 9.1-8.2c.4-.3-.1-.5-.6-.2L6.2 13.6l-4.8-1.5c-1-.3-1-1 .2-1.5l18.8-7.3c.9-.3 1.6.2 1.4 1.4"/>',
  discord:
    '<path d="M20.3 4.5A19 19 0 0 0 15.6 3l-.2.4a14 14 0 0 1 3.4 1.3 15 15 0 0 0-12.9.4A14 14 0 0 1 9.3 3.4L9 3a19 19 0 0 0-4.7 1.5C1.5 9 .9 13.4 1.2 17.7A19 19 0 0 0 6.9 20l.9-1.5a12 12 0 0 1-1.8-.9l.4-.3a13.6 13.6 0 0 0 11.2 0l.4.3a12 12 0 0 1-1.8.9l.9 1.5a19 19 0 0 0 5.7-2.3c.4-5-.8-9.4-2.5-13.2M8.7 15.3c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3m6.6 0c-1.1 0-2-1-2-2.3s.9-2.3 2-2.3 2 1 2 2.3-.9 2.3-2 2.3"/>',
  twitch:
    '<path d="M4.3 0 1 3.9v16.7h5.1V24h3.1l3.1-3.4h4.3L23 14V0zm16.3 12.8-3.4 3.4h-4.9L8.9 19.5V16.2H5.7V1.4h14.9zM16.4 5.2h-2.1v5.5h2.1zm-5.3 0H8.9v5.5h2.2z"/>',
  reddit:
    '<path d="M24 11.8a2.4 2.4 0 0 0-4.1-1.7 12.9 12.9 0 0 0-6.9-2.6l1.2-5.4 3.8.8a1.7 1.7 0 1 0 .2-1.2L13.7.4a.6.6 0 0 0-.7.5l-1.4 6.3a13 13 0 0 0-7 2.6 2.4 2.4 0 1 0-2.6 4.1A5 5 0 0 0 2 15.4c0 4.4 4.5 8 10 8s10-3.6 10-8a5 5 0 0 0-.6-2.3 2.4 2.4 0 0 0 2.6-1.3M7 13.6a1.7 1.7 0 1 1 3.4 0 1.7 1.7 0 0 1-3.4 0m9.3 5.1a10 10 0 0 1-5.3 1.3 10 10 0 0 1-5.3-1.3.6.6 0 0 1 .8-.8 8.6 8.6 0 0 0 9 0 .6.6 0 0 1 .8.8M17 13.6a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4"/>',
  mail: '<path d="M0 4v16h24V4zm21 1.5-9 6-9-6zM2 6.8l10 6.7 10-6.7V19H2z"/>',
  telefon:
    '<path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.2 11.5 11.5 0 0 0 3.6.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.5 11.5 0 0 0 .6 3.6 1 1 0 0 1-.3 1z"/>',
  konum:
    '<path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7m0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5"/>',
  web: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m6.9 6h-3a15 15 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8M12 4c.8 1.1 1.5 2.4 1.9 4h-3.8A14 14 0 0 1 12 4M4.3 14a8 8 0 0 1 0-4h3.4a16 16 0 0 0 0 4zm.8 2h3a15 15 0 0 0 1.4 3.6A8 8 0 0 1 5.1 16m3-8h-3a8 8 0 0 1 4.4-3.6A15 15 0 0 0 8.1 8M12 20a14 14 0 0 1-1.9-4h3.8A14 14 0 0 1 12 20m2.5-2a15 15 0 0 0 1.4-3.6h3a8 8 0 0 1-4.4 3.6m1.8-5a16 16 0 0 0 0-4h3.4a8 8 0 0 1 0 4z"/>',
  link: '<path d="M3.9 12a3.1 3.1 0 0 1 3.1-3.1h4V7H7a5 5 0 0 0 0 10h4v-1.9H7A3.1 3.1 0 0 1 3.9 12M8 13h8v-2H8zm9-6h-4v1.9h4a3.1 3.1 0 0 1 0 6.2h-4V17h4a5 5 0 0 0 0-10"/>',
  spotify:
    '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20m4.6 14.4a.6.6 0 0 1-.9.2c-2.4-1.5-5.5-1.8-9.1-1a.6.6 0 0 1-.3-1.2c3.9-.9 7.3-.5 10 1.1.3.2.4.6.3.9m1.2-2.8a.8.8 0 0 1-1.1.2c-2.8-1.7-7-2.2-10.2-1.2a.8.8 0 0 1-.5-1.5c3.7-1.1 8.3-.6 11.5 1.4.4.2.5.7.3 1.1m.1-2.9C14.7 8.3 9.4 8.1 6.2 9a1 1 0 1 1-.6-1.9c3.7-1.1 9.6-.9 13.2 1.5a1 1 0 1 1-1 1.8"/>',
  behance:
    '<path d="M7.9 5.5a3.2 3.2 0 0 1 3 3.2 3 3 0 0 1-1.9 2.8 3.4 3.4 0 0 1 2.4 3.3c0 2.6-2.1 4.2-5.1 4.2H1V5.5zm-.8 5.2h1.6c1.1 0 1.8-.6 1.8-1.6S9.8 7.5 8.7 7.5H7.1zm0 5.6h1.9c1.2 0 2-.7 2-1.8s-.8-1.8-2-1.8H7.1zM16 5.6h6v1.2h-6zm-1.1 6.2a3.5 3.5 0 0 1 3.5-3.5 3.5 3.5 0 0 1 3.5 3.5 3 3 0 0 1-.1.6h-5.8a2.4 2.4 0 0 0 4.7.8h1.1a3.5 3.5 0 0 1-6.4 1.7 3.4 3.4 0 0 1-.5-2.1m4.5-2.5a2.2 2.2 0 0 0-2.2 2.1h4.4a2.2 2.2 0 0 0-2.2-2.1"/>',
  dribbble:
    '<path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m7.9 5.5a10 10 0 0 1 2.4 6.1c-.3-.1-3.2-.6-6.1-.3l-.7-1.6c3.7-1.5 4.3-3.7 4.4-4.2M12 1.8a10 10 0 0 1 7.9 3.7c-.1.4-.6 2.4-4.1 3.7A40 40 0 0 0 10.3 1.9 10 10 0 0 1 12 1.8M8.4 2.4a52 52 0 0 1 5.4 7.2 33 33 0 0 1-8.4 1.2A10 10 0 0 1 8.4 2.4M1.7 12v-.3a35 35 0 0 0 9.4-1.3c.2.3.4.7.5 1a36 36 0 0 0-6.2 8.3A10 10 0 0 1 1.7 12m10.3 10.2a10 10 0 0 1-4.4-1c1.3-2.3 3.3-5.1 5.9-7.6a41 41 0 0 1 3.2 9.4 10 10 0 0 1-4.7-.8m5.9-1.6a43 43 0 0 0-3-9.1c2.7-.4 5.1.3 5.4.4a10 10 0 0 1-2.4 8.7"/>',
};

/* --- Kart renkleri --- */
const VURGULAR = {
  pembe: ["#ec4899", "#f472b6"],
  mor: ["#a855f7", "#6366f1"],
  mavi: ["#3b82f6", "#06b6d4"],
  yesil: ["#22c55e", "#14b8a6"],
  sari: ["#f59e0b", "#f97316"],
  kirmizi: ["#ef4444", "#f97316"],
  turkuaz: ["#06b6d4", "#3b82f6"],
  turuncu: ["#fb923c", "#f43f5e"],
};

const OK_SVG =
  '<svg viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>';

/* --- Yardımcılar --- */
const $ = (id) => document.getElementById(id);

function ikon(ad) {
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${IKONLAR[ad] || IKONLAR.link}</svg>`;
}

function vurguAyarla(el, ad) {
  const [a, b] = VURGULAR[ad] || VURGULAR.mor;
  el.style.setProperty("--accent-1", a);
  el.style.setProperty("--accent-2", b);
}

function harfler(ad) {
  return ad
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join("")
    .toLocaleUpperCase("tr");
}

function disMi(url) {
  return !/^(mailto:|tel:|#)/i.test(url);
}

function toast(mesaj) {
  const t = $("toast");
  t.textContent = mesaj;
  t.classList.add("gor");
  clearTimeout(toast.zaman);
  toast.zaman = setTimeout(() => t.classList.remove("gor"), 2200);
}

/* --- Sayfayı kur --- */
function ciz() {
  // Sekme / paylaşım başlığı
  document.title = `${SITE.ad} · ${SITE.unvan}`;

  // Avatar
  $("avatar").innerHTML = SITE.avatarUrl
    ? `<img src="${SITE.avatarUrl}" alt="${SITE.ad}" />`
    : harfler(SITE.ad || "K");

  $("ad").textContent = SITE.ad;
  $("unvan").textContent = SITE.unvan;
  $("bio").textContent = SITE.bio;
  $("telif").textContent = SITE.telif;

  // Ana butonlar
  $("actions").innerHTML = (SITE.anaButonlar || [])
    .map(
      (b) =>
        `<a class="btn ${b.tur || "ghost"}" href="${b.url}"${
          disMi(b.url) ? ' target="_blank" rel="noopener noreferrer"' : ""
        }>${b.metin}</a>`
    )
    .join("");

  // Link kartaları
  $("links").innerHTML = (SITE.linkler || [])
    .map((l) => {
      const el = document.createElement("a");
      el.className = "link";
      el.href = l.url;
      if (disMi(l.url)) el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.innerHTML = `
        <span class="link-ikon">${ikon(l.ikon)}</span>
        <span class="link-bilgi">
          <strong>${l.baslik}</strong>
          <span>${l.aciklama || ""}</span>
        </span>
        <span class="link-ok">${OK_SVG}</span>`;
      vurguAyarla(el, l.vurgu);
      return el.outerHTML;
    })
    .join("");

  // Alt sosyal ikonlar
  $("sosyal").innerHTML = (SITE.sosyal || [])
    .map(
      (s) =>
        `<a href="${s.url}" target="_blank" rel="noopener noreferrer" title="${s.ikon}" aria-label="${s.ikon}">${ikon(
          s.ikon
        )}</a>`
    )
    .join("");
}

/* --- Paylaş / kopyala --- */
$("paylas").addEventListener("click", async () => {
  const veri = { title: document.title, text: SITE.bio, url: location.href };
  if (navigator.share) {
    try {
      await navigator.share(veri);
      return;
    } catch (_) {
      /* kullanıcı vazgeçti */
    }
  }
  await kopyala(veri.url);
  toast("Bağlantı kopyalandı");
});

$("kopyala").addEventListener("click", async () => {
  await kopyala(location.href);
  toast("Sayfa adresi kopyalandı");
});

async function kopyala(metin) {
  try {
    await navigator.clipboard.writeText(metin);
  } catch (_) {
    const alan = document.createElement("textarea");
    alan.value = metin;
    alan.style.position = "fixed";
    alan.style.opacity = "0";
    document.body.appendChild(alan);
    alan.select();
    document.execCommand("copy");
    alan.remove();
  }
}

ciz();
