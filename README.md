# Kişisel Linklerim

**Canlı adres:** https://devilmaycrysario.github.io/kisisel-linklerim/

Kişisel linklerini ve hesaplarını gösteren tek sayfalık site.
Kurulum, sunucu, hesap yönetimi — hiçbir şey gerekmiyor.

## Dosyalar

| Dosya | Ne işe yarar |
|---|---|
| `links.js` | **Sen sadece bunu düzenle.** İsim, bio, linkler, ikonlar, renkler. |
| `index.html` | Sayfanın iskeleti. |
| `style.css` | Tasarım (renkler, animasyonlar). |
| `app.js` | `links.js` içindeki bilgileri ekrana basar. |

## Nasıl düzenlerim?

1. `links.js` dosyasını Not Defteri veya VS Code ile aç.
2. Değiştirmek istediğin yazıyı düzelt, kaydet.
3. Tarayıcıda `F5` yap. Site güncellenmiş olur.

## Siteyi açmak

`index.html` dosyasına **çift tıkla**. Hepsi bu.

## Örnek düzenlemeler

### İsim, unvan ve açıklama

```js
ad: "Murat",
unvan: "Tasarımcı & Geliştirici",
bio: "Kendi işimi kurduğumdan beri tasarlıyorum ve kodluyorum.",
```

### Profil fotoğrafı eklemek

Fotoğrafı site klasörüne koy, sonra:

```js
avatarUrl: "avatar.jpg",
```

Fotoğraf yoksa otomatik olarak ismin baş harflerinden avatar yapılır.

### Link eklemek / çıkarmak

`linkler` listesine kopyala yapıştır:

```js
{
  baslik: "Twitch",            // kartta görünen isim
  aciklama: "Canlı yayınlarım", // altındaki küçük yazı
  url: "https://twitch.tv/sen", // tıklanınca açılacak adres
  ikon: "twatch",               // aşağıdaki listeden bir ikon adı
  vurgu: "mor",                 // kartın rengi
},
```

Listeden bir kaydı silmek için o `{ ... }` bloğunu (ve üstündeki virgülü) kaldır.

### Kullanılabilir ikon adları

```
instagram   youtube    github     linkedin   twitter / x
tiktok      whatsapp   telegram   discord    twitch
reddit      mail       telefon    konum      web
spotify     behance    dribbble   link
```

### Kullanılabilir renkler (`vurgu`)

```
pembe   mor   mavi   yesil   sari   kirmizi   turkuaz   turuncu
```

### WhatsApp / telefon / e-posta

```js
{ baslik: "WhatsApp", url: "https://wa.me905XXXXXXXXX", ikon: "whatsapp", vurgu: "yesil" }
{ baslik: "Telefon",  url: "tel:+905XXXXXXXXX",      ikon: "telefon",  vurgu: "mavi" }
{ baslik: "E-posta",  url: "mailto:sen@mail.com",     ikon: "mail",     vurgu: "sari" }
```

> WhatsApp: `https://wa.me/90XXXXXXXXXX` (ülke kodu 90, sonra 10 hane, başında `+` yok).

### Alttaki küçük sosyal ikonlar

```js
sosyal: [
  { url: "https://instagram.com/sen", ikon: "instagram" },
  { url: "https://github.com/sen", ikon: "github" },
],
```

İstemiyorsan boş bırak: `sosyal: []`

## İnternete nasıl koyarım?

> Bu site zaten yayında: **https://devilmaycrysario.github.io/kisisel-linklerim/**
> Depo: https://github.com/DevilMayCrySario/kisisel-linklerim
>
> Aşağıdaki adımlar sadece ilk kez kurulurken yapıldı. Sonradan değişiklik yapmak için
> masaüstündeki klasörde şu iki komut yeterli:
>
> ```bash
> git add .
> git commit -m "degisiklik"
> git push
> ```
>
> Yükleme yapıldıktan sonra site 1-2 dakika içinde kendiliğinden güncellenir.
> Elle gündermek de gerekirse: https://github.com/DevilMayCrySario/kisisel-linklerim → Settings → Pages → **Deploy from a branch** → **Save**

### İlk kurulum (zaten yapıldı, tekrarlamak gerekmiyor)

### 1. GitHub Pages

1. https://github.com adresine gir, ücretsiz hesap aç.
2. Sağ üstte **+ → New repository** → ad yaz (örn. `kisisel-linklerim`).
3. **Public** seç → **Create repository**.
4. Bu klasörde terminal aç ve şunları yaz:

```bash
git init
git add .
git commit -m "ilk yukleme"
git branch -M main
git remote add origin https://github.com/KULLANICIADIN/kisisel-linklerim.git
git push -u origin main
```

5. Repo sayfasında **Settings → Pages** → Source: **main / (root)** → **Save**.
6. Birkaç dakika sonra siten `https://kullaniciadin.github.io/kisisel-linklerim/` adresinde açılır.

### 2. Netlify (sürükle bırak)

1. https://app.netlify.com/drop adresine gir.
2. `index.html`'e sağ tıkla → **Copy** / **Kopyala**.
3. Sayfaya yapıştır. Site hazır, adresini hemen alırsın.

## Tavsiyeler

- Kendi alan adın varsa (örn. `murat.com`) DNS ayarını yukarıdaki adrese yönlendirmen yeterli.
- Siteyi paylaştığında görünecek önizleme görselini `index.html` içindeki `og:` satırlarından değiştirebilirsin.
- Tasarımı değiştirmek istersen `style.css` üstündeki `--grad-1 / --grad-2 / --grad-3` renkleri ana renkleridir.
