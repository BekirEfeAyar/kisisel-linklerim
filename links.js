/* ==========================================================================
   AYARLAR — Sadece bu dosyayı düzenlemen yeterli.
   Site otomatik olarak buradaki bilgileri ekrana basar.
   ========================================================================== */

const SITE = {
  // --- Profil bilgileri ---
  ad: "Efe",
  unvan: "Kişisel Linklerim",
  bio: "Selam; ben Efe, Polluxun yapımcısı ^^",
  avatarUrl: "", // Boş bırakırsan baş harflerden avatar oluşur. (örn: "avatar.jpg")

  // --- Ana butonlar (profil kartının altındaki 2 buton) ---
  // tur: "primary" | "ghost"
  anaButonlar: [
    { metin: "Beni Takip Et", url: "https://www.instagram.com/efebekir_slm/", tur: "primary" },
    // E-posta adresi sadece tıklanınca görünür, sayfada yazmaz.
    { metin: "Bana Ulaş", url: "mailto:bekirefeayar101@gmail.com", tur: "ghost" },
  ],

  // --- Link kartaları ---
  // ikon: instagram | youtube | github | linkedin | twitter | tiktok |
  //       whatsapp | mail | web | link | spotify | behance | dribbble |
  //       telegram | discord | twitch | reddit | x | telefon | konum
  // vurgu: "pembe" | "mor" | "mavi" | "yesil" | "sari" | "kirmizi" | "turkuaz" | "turuncu"
  linkler: [
    {
      baslik: "Instagram",
      aciklama: "@efebekir_slm",
      url: "https://www.instagram.com/efebekir_slm/",
      ikon: "instagram",
      vurgu: "pembe",
    },
    {
      baslik: "GitHub",
      aciklama: "@BekirEfeAyar · Kodlarım ve projelerim",
      url: "https://github.com/BekirEfeAyar",
      ikon: "github",
      vurgu: "mor",
    },

    /* Yeni link eklemek için yukarıdaki bloğu kopyala yapıştır:
    {
      baslik: "YouTube",
      aciklama: "Videolarım",
      url: "https://youtube.com/@kanal",
      ikon: "youtube",
      vurgu: "kirmizi",
    },
    */
  ],

  // --- Alt kısımdaki küçük sosyal ikonlar ---
  // (istemiyorsan boş bırak: sosyal: [])
  sosyal: [
    { url: "https://www.instagram.com/efebekir_slm/", ikon: "instagram" },
    { url: "https://github.com/BekirEfeAyar", ikon: "github" },
  ],

  // --- Site altı bilgi ---
  telif: "© " + new Date().getFullYear() + " Efe · Tüm hakları saklıdır.",
};
