// ==========================================
// MancingYuk! v3.0 - Admin + Peta + Multi-Role + Widget Partner
// ==========================================

// Reset corrupt storage
try {
    const keys = ['my_user','my_tickets','my_notifs','my_events','my_posts','owner_bookings','my_catches','chat_history','my_spots','my_admin','registered_users','my_achievements'];
    keys.forEach(k => { const v = localStorage.getItem(k); if (v) JSON.parse(v); });
} catch (e) { console.warn('Storage corrupt, reset'); localStorage.clear(); }

// ==========================================
// HELPER GAMBAR
// ==========================================
const IMG = {
    spots: {
        1: { local: "assets/spots/spot-1-pak-budi.jpg", fallback: "https://images.unsplash.com/photo-1594913251120-2c9c8a6b4e9f?auto=format&fit=crop&w=800&q=80" },
        2: { local: "assets/spots/spot-2-sejahtera.jpg", fallback: "https://images.unsplash.com/photo-1582234472918-8331c77883c8?auto=format&fit=crop&w=800&q=80" },
        3: { local: "assets/spots/spot-3-waduk.jpg", fallback: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=800&q=80" },
        4: { local: "assets/spots/spot-4-mania-center.jpg", fallback: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" },
        5: { local: "assets/spots/spot-5-ikan-hias.jpg", fallback: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80" },
        6: { local: "assets/spots/spot-6-citarum.jpg", fallback: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=800&q=80" }
    },
    events: {
        1: { local: "assets/events/event-1-lele.jpg", fallback: "https://images.unsplash.com/photo-1594913251120-2c9c8a6b4e9f?auto=format&fit=crop&w=800&q=80" },
        2: { local: "assets/events/event-2-gurame.jpg", fallback: "https://images.unsplash.com/photo-1582234472918-8331c77883c8?auto=format&fit=crop&w=800&q=80" },
        3: { local: "assets/events/event-3-fun.jpg", fallback: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" },
        4: { local: "assets/events/event-4-charity.jpg", fallback: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=800&q=80" }
    },
    community: {
        1: { local: "assets/community/post-1-rizky.jpg", fallback: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" },
        2: { local: "assets/community/post-2-andi.jpg", fallback: "https://images.unsplash.com/photo-1582234472918-8331c77883c8?auto=format&fit=crop&w=800&q=80" },
        3: { local: "assets/community/post-3-siti.jpg", fallback: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=800&q=80" }
    },
    fish: {
        "Lele": { local: "assets/fish/fish-lele.jpg", fallback: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=400&q=80" },
        "Nila": { local: "assets/fish/fish-nila.jpg", fallback: "https://images.unsplash.com/photo-1534938665420-4193effeacc4?auto=format&fit=crop&w=400&q=80" },
        "Gurame": { local: "assets/fish/fish-gurame.jpg", fallback: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=400&q=80" },
        "Mas": { local: "assets/fish/fish-mas.jpg", fallback: "https://images.unsplash.com/photo-1534938665420-4193effeacc4?auto=format&fit=crop&w=400&q=80" },
        "Bawal": { local: "assets/fish/fish-bawal.jpg", fallback: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=400&q=80" },
        "Patin": { local: "assets/fish/fish-patin.jpg", fallback: "https://images.unsplash.com/photo-1534938665420-4193effeacc4?auto=format&fit=crop&w=400&q=80" }
    },
    tips: {
        1: { local: "assets/tips/tips-1-lele.jpg", fallback: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" },
        2: { local: "assets/tips/tips-2-umpan.jpg", fallback: "https://images.unsplash.com/photo-1582234472918-8331c77883c8?auto=format&fit=crop&w=800&q=80" },
        3: { local: "assets/tips/tips-3-casting.jpg", fallback: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=800&q=80" },
        4: { local: "assets/tips/tips-4-joran.jpg", fallback: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80" }
    },
    recipes: {
        1: { local: "assets/recipes/recipe-1-pecel.jpg", fallback: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80" },
        2: { local: "assets/recipes/recipe-2-gurame.jpg", fallback: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=800&q=80" },
        3: { local: "assets/recipes/recipe-3-nila.jpg", fallback: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80" }
    },
    merch: {
        1: { local: "assets/merch/merch-kaos.png", fallback: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=400&q=80" },
        2: { local: "assets/merch/merch-topi.png", fallback: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80" },
        3: { local: "assets/merch/merch-tumbler.png", fallback: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80" }
    },
    avatars: {
        default: { local: "assets/avatars/avatar-default.png", fallback: "https://i.pravatar.cc/150?u=default" },
        rizky: { local: "assets/avatars/avatar-rizky.jpg", fallback: "https://i.pravatar.cc/150?u=rizky" },
        andi: { local: "assets/avatars/avatar-andi.jpg", fallback: "https://i.pravatar.cc/150?u=andi" },
        siti: { local: "assets/avatars/avatar-siti.jpg", fallback: "https://i.pravatar.cc/150?u=siti" },
        owner: { local: "assets/avatars/avatar-owner.jpg", fallback: "https://i.pravatar.cc/150?u=owner" },
        admin: { local: "assets/avatars/avatar-admin.jpg", fallback: "https://i.pravatar.cc/150?u=admin" },
        "leaderboard-1": { local: "assets/avatars/avatar-leaderboard-1.jpg", fallback: "https://i.pravatar.cc/150?u=juragan1" },
        "leaderboard-2": { local: "assets/avatars/avatar-leaderboard-2.jpg", fallback: "https://i.pravatar.cc/150?u=master2" },
        "leaderboard-3": { local: "assets/avatars/avatar-leaderboard-3.jpg", fallback: "https://i.pravatar.cc/150?u=haji3" }
    },
    payments: {
        gopay: { local: "assets/payments/logo-gopay.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Gopay_logo.svg/2560px-Gopay_logo.svg.png" },
        ovo: { local: "assets/payments/logo-ovo.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/OVO_logo.svg/2560px-OVO_logo.svg.png" },
        bca: { local: "assets/payments/logo-bca.png", fallback: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png" }
    }
};

function imgTag(src, fallback, alt, className) {
    return '<img src="' + src + '" data-fallback="' + fallback + '" alt="' + (alt || '') + '" class="' + (className || '') + '" onerror="handleImgError(this)">';
}
window.handleImgError = function(img) {
    if (img.dataset.fallback && img.src !== img.dataset.fallback) {
        img.src = img.dataset.fallback;
    } else {
        img.src = "https://via.placeholder.com/400x200?text=No+Image";
    }
};
function getImgLocal(cat, key) { const i = IMG[cat] && IMG[cat][key]; return i ? i.local : ''; }
function getImgFallback(cat, key) { const i = IMG[cat] && IMG[cat][key]; return i ? i.fallback : 'https://via.placeholder.com/400x200'; }

// ==========================================
// DATA SPOT dengan KOORDINAT
// ==========================================
const DEFAULT_SPOTS = [
    { id: 1, name: "Pemancingan Pak Budi", location: "Lele, Nila, Mas", city: "Jakarta Selatan", price: 50000, rating: 4.7, reviews: 120, slots: 20, image: getImgLocal('spots',1), imageFallback: getImgFallback('spots',1), facilities: ["Saung","Parkir Luas","Kantin","Sewa Alat","Toilet"], description: "Pemancingan nyaman dengan suasana pedesaan.", owner: "Pak Budi", ownerId: "owner1", premium: true, distance: 2.3, open: "06:00 - 22:00", lat: -6.2615, lng: 106.8106 },
    { id: 2, name: "Kolam Mancing Sejahtera", location: "Gurame, Patin", city: "Depok", price: 75000, rating: 4.5, reviews: 85, slots: 15, image: getImgLocal('spots',2), imageFallback: getImgFallback('spots',2), facilities: ["AC Room","Mushola","WiFi","Resto"], description: "Pemancingan premium dengan fasilitas lengkap.", owner: "Haji Sejahtera", ownerId: "owner2", premium: true, distance: 8.5, open: "07:00 - 21:00", lat: -6.4025, lng: 106.7942 },
    { id: 3, name: "Spot Alam Liar (Waduk)", location: "Bawal, Nila", city: "Bogor", price: 30000, rating: 4.8, reviews: 200, slots: 0, image: getImgLocal('spots',3), imageFallback: getImgFallback('spots',3), facilities: ["Camping Ground","Toilet"], description: "Mancing di alam terbuka langsung di waduk.", owner: "Kelompok Tani Waduk", ownerId: "owner3", premium: false, distance: 25.0, open: "24 Jam", lat: -6.5950, lng: 106.8166 },
    { id: 4, name: "Mancing Mania Center", location: "Mas, Tombro", city: "Tangerang", price: 60000, rating: 4.6, reviews: 150, slots: 25, image: getImgLocal('spots',4), imageFallback: getImgFallback('spots',4), facilities: ["Panggung","Sewa Alat","Kantin"], description: "Pemancingan malam dengan lampu sorot.", owner: "Bang Jago", ownerId: "owner4", premium: false, distance: 15.8, open: "16:00 - 04:00", lat: -6.1783, lng: 106.6319 },
    { id: 5, name: "Pemancingan Ikan Hias", location: "Koi, Arwana", city: "Bandung", price: 100000, rating: 4.9, reviews: 60, slots: 10, image: getImgLocal('spots',5), imageFallback: getImgFallback('spots',5), facilities: ["Kolam Kaca","AC","Pemandu"], description: "Pengalaman mancing eksklusif untuk ikan hias.", owner: "Dedi Koi", ownerId: "owner5", premium: true, distance: 120, open: "08:00 - 20:00", lat: -6.9175, lng: 107.6191 },
    { id: 6, name: "Sungai Citarum Fishing", location: "Baung, Mujair", city: "Karawang", price: 25000, rating: 4.3, reviews: 45, slots: 30, image: getImgLocal('spots',6), imageFallback: getImgFallback('spots',6), facilities: ["Area Piknik","Mushola"], description: "Mancing di tepi sungai dengan pemandangan indah.", owner: "Kang Ujang", ownerId: "owner6", premium: false, distance: 45, open: "05:00 - 18:00", lat: -6.3015, lng: 107.3061 }
];

// ==========================================
// TOKO PARTNER dengan PRODUK
// ==========================================
const PARTNERS = [
    { id: 1, name: "Toko Pancing Jaya", category: "Alat Pancing", discount: "Diskon 15%", logo: "🎣", desc: "Alat pancing lengkap", phone: "0812-1111-1111", products: [
        { id: 101, name: "Joran Carbon 2.7m", price: 350000, image: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?auto=format&fit=crop&w=400&q=80", rating: 4.8, stock: 15 },
        { id: 102, name: "Reel Spinning 3000", price: 280000, image: "https://images.unsplash.com/photo-1583179315721-a8e2c4e2d0c6?auto=format&fit=crop&w=400&q=80", rating: 4.7, stock: 20 },
        { id: 103, name: "Senar PE 0.8mm", price: 85000, image: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?auto=format&fit=crop&w=400&q=80", rating: 4.6, stock: 50 }
    ]},
    { id: 2, name: "Fishing Gear Pro", category: "Alat Premium", discount: "Cashback 10%", logo: "🪝", desc: "Brand premium", phone: "0812-2222-2222", products: [
        { id: 201, name: "Joran Premium Shimano", price: 1250000, image: "https://images.unsplash.com/photo-1583179315721-a8e2c4e2d0c6?auto=format&fit=crop&w=400&q=80", rating: 4.9, stock: 5 },
        { id: 202, name: "Reel Daiwa 4000X", price: 850000, image: "https://images.unsplash.com/photo-1587248720327-8eb72564be1e?auto=format&fit=crop&w=400&q=80", rating: 4.8, stock: 8 }
    ]},
    { id: 3, name: "Umpan Segar Store", category: "Umpan", discount: "Gratis Ongkir", logo: "🪱", desc: "Umpan segar harian", phone: "0812-3333-3333", products: [
        { id: 301, name: "Umpan Pelet Premium 1kg", price: 45000, image: "https://images.unsplash.com/photo-1625001074074-90efc99c1be6?auto=format&fit=crop&w=400&q=80", rating: 4.7, stock: 100 },
        { id: 302, name: "Umpan Cacing Segar", price: 25000, image: "https://images.unsplash.com/photo-1625001074074-90efc99c1be6?auto=format&fit=crop&w=400&q=80", rating: 4.5, stock: 50 },
        { id: 303, name: "Essence Lele 100ml", price: 35000, image: "https://images.unsplash.com/photo-1625001074074-90efc99c1be6?auto=format&fit=crop&w=400&q=80", rating: 4.8, stock: 75 }
    ]},
    { id: 4, name: "Fishing Apparel", category: "Pakaian", discount: "Diskon 20%", logo: "👕", desc: "Pakaian pemancing", phone: "0812-4444-4444", products: [
        { id: 401, name: "Kaos Anti-UV Fishing", price: 175000, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=400&q=80", rating: 4.6, stock: 30 },
        { id: 402, name: "Topi Bucket Fishing", price: 95000, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80", rating: 4.7, stock: 25 },
        { id: 403, name: "Rompi Pancing Waterproof", price: 325000, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=400&q=80", rating: 4.9, stock: 12 }
    ]}
];

// ==========================================
// DATA LAINNYA
// ==========================================
const EVENTS_DATA = [
    { id: 1, title: "Turnamen Mancing Lele", spotId: 1, date: "15 Nov 2024", time: "06:00 - 12:00", fee: 50000, prize: "Rp 5.000.000", participants: 45, maxParticipants: 100, status: "upcoming", image: getImgLocal('events',1), imageFallback: getImgFallback('events',1), desc: "Turnamen mancing lele dengan hadiah utama Rp 5 juta." },
    { id: 2, title: "Lomba Mancing Gurame", spotId: 2, date: "20 Nov 2024", time: "07:00 - 14:00", fee: 75000, prize: "Rp 3.000.000", participants: 28, maxParticipants: 50, status: "upcoming", image: getImgLocal('events',2), imageFallback: getImgFallback('events',2), desc: "Lomba mancing gurame jumbo." },
    { id: 3, title: "Fun Fishing Bersama", spotId: 4, date: "05 Nov 2024", time: "16:00 - 22:00", fee: 40000, prize: "Sertifikat + Merch", participants: 60, maxParticipants: 60, status: "ongoing", image: getImgLocal('events',3), imageFallback: getImgFallback('events',3), desc: "Acara mancing santai bersama komunitas." },
    { id: 4, title: "Mancing Charity 2024", spotId: 3, date: "10 Okt 2024", time: "08:00 - 15:00", fee: 35000, prize: "Donasi Sosial", participants: 80, maxParticipants: 80, status: "past", image: getImgLocal('events',4), imageFallback: getImgFallback('events',4), desc: "Acara mancing amal untuk panti asuhan." }
];

const COMMUNITY_POSTS = [
    { id: 1, user: "Rizky Pemancing", avatar: IMG.avatars.rizky.local, avatarFallback: IMG.avatars.rizky.fallback, time: "2 jam lalu", image: getImgLocal('community',1), imageFallback: getImgFallback('community',1), caption: "Strike 5 kali di Pemancingan Pak Budi! 🎣", likes: 45, comments: 12, spot: "Pemancingan Pak Budi", liked: false },
    { id: 2, user: "Andi Fishing", avatar: IMG.avatars.andi.local, avatarFallback: IMG.avatars.andi.fallback, time: "5 jam lalu", image: getImgLocal('community',2), imageFallback: getImgFallback('community',2), caption: "Gurame 3kg dari Kolam Sejahtera! 🐟", likes: 78, comments: 25, spot: "Kolam Mancing Sejahtera", liked: true },
    { id: 3, user: "Siti Angler", avatar: IMG.avatars.siti.local, avatarFallback: IMG.avatars.siti.fallback, time: "1 hari lalu", image: getImgLocal('community',3), imageFallback: getImgFallback('community',3), caption: "Suasana sore di Sungai Citarum 🌅", likes: 120, comments: 34, spot: "Sungai Citarum Fishing", liked: false }
];

const FISH_SPECIES = [
    { name: "Lele", latin: "Clarias", image: getImgLocal('fish','Lele'), imageFallback: getImgFallback('fish','Lele'), desc: "Ikan air tawar populer, mudah dipelihara.", habitat: "Kolam, sungai", bait: "Pelet, cacing, usus ayam", bestTime: "Pagi & malam", weight: "0.5 - 5 kg" },
    { name: "Nila", latin: "Oreochromis niloticus", image: getImgLocal('fish','Nila'), imageFallback: getImgFallback('fish','Nila'), desc: "Ikan nila memiliki daging tebal dan gurih.", habitat: "Kolam, waduk", bait: "Pelet, lumut, roti", bestTime: "Pagi hari", weight: "0.3 - 2 kg" },
    { name: "Gurame", latin: "Osphronemus goramy", image: getImgLocal('fish','Gurame'), imageFallback: getImgFallback('fish','Gurame'), desc: "Ikan gurame terkenal dengan dagingnya yang lembut.", habitat: "Kolam berlumpur", bait: "Daun talas, pelet, lumut", bestTime: "Sore hari", weight: "1 - 8 kg" },
    { name: "Mas", latin: "Cyprinus carpio", image: getImgLocal('fish','Mas'), imageFallback: getImgFallback('fish','Mas'), desc: "Ikan mas banyak dibudidayakan di Indonesia.", habitat: "Kolam, sungai", bait: "Pelet, jagung, roti", bestTime: "Pagi & sore", weight: "0.5 - 10 kg" },
    { name: "Bawal", latin: "Colossoma macropomum", image: getImgLocal('fish','Bawal'), imageFallback: getImgFallback('fish','Bawal'), desc: "Ikan bawal memiliki gigi tajam dan tenaga kuat.", habitat: "Waduk, sungai besar", bait: "Buah, pelet besar", bestTime: "Siang hari", weight: "2 - 20 kg" },
    { name: "Patin", latin: "Pangasius", image: getImgLocal('fish','Patin'), imageFallback: getImgFallback('fish','Patin'), desc: "Ikan patin berbadan licin tanpa sisik.", habitat: "Sungai besar", bait: "Pelet, ikan kecil", bestTime: "Malam hari", weight: "1 - 15 kg" }
];

const TIPS_DATA = [
    { id: 1, title: "5 Tips Mancing Lele Agar Strike", category: "Teknik", readTime: "3 menit", image: getImgLocal('tips',1), imageFallback: getImgFallback('tips',1), content: "1. Gunakan umpan yang beraroma kuat\n2. Waktu terbaik adalah malam hari\n3. Gunakan joran yang lentur\n4. Pilih lokasi yang banyak gelembung\n5. Sabar dan konsisten" },
    { id: 2, title: "Memilih Umpan Sesuai Jenis Ikan", category: "Umpan", readTime: "5 menit", image: getImgLocal('tips',2), imageFallback: getImgFallback('tips',2), content: "Setiap ikan memiliki preferensi umpan yang berbeda:\n\n• Lele: umpan beraroma kuat (usus ayam)\n• Nila: pelet halus\n• Gurame: daun talas\n• Mas: jagung manis" },
    { id: 3, title: "Teknik Casting untuk Pemula", category: "Teknik", readTime: "7 menit", image: getImgLocal('tips',3), imageFallback: getImgFallback('tips',3), content: "Casting adalah teknik melempar umpan ke titik tertentu.\n\n1. Pegang joran dengan benar\n2. Buka bail reel\n3. Ayunkan joran ke belakang\n4. Lepas saat di depan\n5. Latihan terus menerus" },
    { id: 4, title: "Cara Merawat Joran agar Awet", category: "Perawatan", readTime: "4 menit", image: getImgLocal('tips',4), imageFallback: getImgFallback('tips',4), content: "1. Bilas dengan air tawar setelah dipakai\n2. Keringkan dengan kain lembut\n3. Simpan di tempat kering\n4. Hindari paparan sinar matahari langsung\n5. Periksa ring guide secara rutin" }
];

const RECIPES_DATA = [
    { id: 1, name: "Pecel Lele Crispy", time: "30 menit", level: "Mudah", image: getImgLocal('recipes',1), imageFallback: getImgFallback('recipes',1), ingredients: ["Lele segar 1 kg","Bumbu kuning","Tepung bumbu","Sambal khas","Lalapan"], steps: ["Bersihkan lele, lumuri jeruk nipis","Rendam bumbu kuning 15 menit","Balur tepung bumbu","Goreng hingga golden brown","Sajikan dengan sambal & lalapan"] },
    { id: 2, name: "Gurame Bakar Madu", time: "45 menit", level: "Sedang", image: getImgLocal('recipes',2), imageFallback: getImgFallback('recipes',2), ingredients: ["Gurame 1 kg","Madu 3 sdm","Kecap manis","Bawang putih","Jahe"], steps: ["Bersihkan gurame, kerat-kerat","Rendam bumbu 30 menit","Bakar di atas bara","Olesi madu & kecap","Bakar hingga matang"] },
    { id: 3, name: "Nila Goreng Sambal Matah", time: "25 menit", level: "Mudah", image: getImgLocal('recipes',3), imageFallback: getImgFallback('recipes',3), ingredients: ["Nila 500 gram","Sambal matah","Jeruk limau","Minyak panas"], steps: ["Bersihkan nila","Goreng hingga kering","Buat sambal matah","Siram minyak panas","Sajikan"] }
];

const ACHIEVEMENTS = [
    { id: "first_booking", name: "First Cast", desc: "Booking spot pertama kali", icon: "🎣", points: 100, unlocked: false },
    { id: "five_bookings", name: "Rising Angler", desc: "Booking 5 spot berbeda", icon: "🌊", points: 500, unlocked: false },
    { id: "catch_10", name: "Catch Master", desc: "Catat 10 tangkapan", icon: "🐟", points: 300, unlocked: false },
    { id: "big_catch", name: "Big One!", desc: "Tangkap ikan 5kg+", icon: "🏆", points: 400, unlocked: false },
    { id: "review_3", name: "Reviewer", desc: "Beri 3 review spot", icon: "⭐", points: 150, unlocked: false },
    { id: "event_join", name: "Competitor", desc: "Ikut 1 turnamen", icon: "🏁", points: 200, unlocked: false },
    { id: "social_butterfly", name: "Social Butterfly", desc: "Post 3 cerita komunitas", icon: "🦋", points: 250, unlocked: false },
    { id: "loyal_customer", name: "Loyal Customer", desc: "Kumpulkan 5000 poin", icon: "💎", points: 1000, unlocked: false }
];

const LEADERBOARD = [
    { rank: 1, name: "Juragan Lele", avatar: IMG.avatars["leaderboard-1"].local, avatarFallback: IMG.avatars["leaderboard-1"].fallback, points: 15420, catches: 245, medal: "🥇" },
    { rank: 2, name: "Master Gurame", avatar: IMG.avatars["leaderboard-2"].local, avatarFallback: IMG.avatars["leaderboard-2"].fallback, points: 12850, catches: 189, medal: "🥈" },
    { rank: 3, name: "Haji Fishing", avatar: IMG.avatars["leaderboard-3"].local, avatarFallback: IMG.avatars["leaderboard-3"].fallback, points: 11200, catches: 156, medal: "🥉" },
    { rank: 4, name: "Rizky Pemancing", avatar: IMG.avatars.rizky.local, avatarFallback: IMG.avatars.rizky.fallback, points: 1250, catches: 12, medal: "" },
    { rank: 5, name: "Andi Fishing", avatar: IMG.avatars.andi.local, avatarFallback: IMG.avatars.andi.fallback, points: 980, catches: 8, medal: "" },
    { rank: 6, name: "Siti Angler", avatar: IMG.avatars.siti.local, avatarFallback: IMG.avatars.siti.fallback, points: 750, catches: 5, medal: "" }
];

const MERCHANDISE = [
    { id: 1, name: "Kaos MancingYuk!", price: 85000, image: getImgLocal('merch',1), imageFallback: getImgFallback('merch',1), stock: 50 },
    { id: 2, name: "Topi MancingYuk!", price: 65000, image: getImgLocal('merch',2), imageFallback: getImgFallback('merch',2), stock: 30 },
    { id: 3, name: "Tumbler Fishing", price: 95000, image: getImgLocal('merch',3), imageFallback: getImgFallback('merch',3), stock: 20 }
];

const WEATHER_FORECAST = {
    today: { temp: 28, condition: "Cerah Berawan", icon: "⛅", humidity: 72, wind: "8 km/h", score: 85 },
    tomorrow: { temp: 27, condition: "Hujan Ringan", icon: "🌦️", humidity: 80, wind: "12 km/h", score: 60 },
    day3: { temp: 30, condition: "Cerah", icon: "☀️", humidity: 65, wind: "5 km/h", score: 92 }
};

// ==========================================
// STATE
// ==========================================
function safeLoad(key, fallback) {
    try { const r = localStorage.getItem(key); if (!r) return fallback; return JSON.parse(r) || fallback; }
    catch (e) { return fallback; }
}

let spots = safeLoad('my_spots', JSON.parse(JSON.stringify(DEFAULT_SPOTS)));
let eventsData = JSON.parse(JSON.stringify(EVENTS_DATA));
let communityPosts = JSON.parse(JSON.stringify(COMMUNITY_POSTS));
let achievements = safeLoad('my_achievements', JSON.parse(JSON.stringify(ACHIEVEMENTS)));
let currentUser = safeLoad('my_user', null);
let userTickets = safeLoad('my_tickets', []);
let notifications = safeLoad('my_notifs', [
    { id: 1, title: "Promo Spesial!", msg: "Diskon 10% untuk booking grup minggu ini", time: "2 jam lalu", read: false },
    { id: 2, title: "Spot Baru!", msg: "Pemancingan Ikan Hias kini tersedia", time: "3 hari lalu", read: false }
]);
let userEvents = safeLoad('my_events', []);
let myPosts = safeLoad('my_posts', []);
let ownerBookings = safeLoad('owner_bookings', [
    { id: "B-001", customer: "Andi", spot: "Pemancingan Pak Budi", date: "15 Nov", qty: 2, total: 100000, status: "Confirmed" },
    { id: "B-002", customer: "Siti", spot: "Pemancingan Pak Budi", date: "16 Nov", qty: 3, total: 150000, status: "Confirmed" },
    { id: "B-003", customer: "Budi", spot: "Pemancingan Pak Budi", date: "17 Nov", qty: 1, total: 50000, status: "Pending" }
]);
let userCatches = safeLoad('my_catches', []);
let chatHistory = safeLoad('chat_history', {});
let isDarkMode = safeLoad('dark_mode', false);
let onboardingDone = safeLoad('onboarding_done', false);
let registeredUsers = safeLoad('registered_users', [
    { name: "Rizky Pemancing", email: "rizky@email.com", type: "pemancing", joinDate: "Januari 2024" },
    { name: "Pak Budi", email: "budi@owner.com", type: "owner", joinDate: "Januari 2024" },
    { name: "Haji Sejahtera", email: "sejahtera@owner.com", type: "owner", joinDate: "Februari 2024" }
]);

let selectedSpot = null;
let bookingData = {};
let tempRating = 5;
let currentSearchQuery = '';
let currentCategory = 'all';
let currentSort = 'rating';
let currentEventTab = 'upcoming';
let reviewIndex = -1;
let currentChatOwner = null;
let currentOnboardingStep = 0;
let currentAdminTab = 'dashboard';
let leafletMap = null;
let mapMarkers = [];

function save() {
    try {
        if (currentUser) localStorage.setItem('my_user', JSON.stringify(currentUser));
        else localStorage.removeItem('my_user');
        localStorage.setItem('my_tickets', JSON.stringify(userTickets));
        localStorage.setItem('my_notifs', JSON.stringify(notifications));
        localStorage.setItem('my_events', JSON.stringify(userEvents));
        localStorage.setItem('my_posts', JSON.stringify(myPosts));
        localStorage.setItem('owner_bookings', JSON.stringify(ownerBookings));
        localStorage.setItem('my_catches', JSON.stringify(userCatches));
        localStorage.setItem('chat_history', JSON.stringify(chatHistory));
        localStorage.setItem('dark_mode', JSON.stringify(isDarkMode));
        localStorage.setItem('onboarding_done', JSON.stringify(onboardingDone));
        localStorage.setItem('my_spots', JSON.stringify(spots));
        localStorage.setItem('my_achievements', JSON.stringify(achievements));
        localStorage.setItem('registered_users', JSON.stringify(registeredUsers));
    } catch (e) { console.warn('Save error', e); }
}

// ==========================================
// TOAST
// ==========================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast ' + type;
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    toast.innerHTML = '<span class="font-bold">' + icon + '</span><span>' + message + '</span>';
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.transition = 'opacity 0.3s, transform 0.3s';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ==========================================
// DARK MODE
// ==========================================
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.getElementById('darkBtn').textContent = isDarkMode ? '☀️' : '🌙';
    save();
    showToast(isDarkMode ? 'Dark mode aktif' : 'Light mode aktif', 'info');
}

// ==========================================
// ONBOARDING
// ==========================================
function renderOnboarding() {
    const slides = [
        { icon: "🎣", title: "Selamat Datang di MancingYuk!", desc: "Platform untuk membuat lebih banyak orang mancing. Cari spot, ajak teman, booking, mancing!", bg: "from-primary to-blue-400" },
        { icon: "🗺️", title: "Temukan Spot Terbaik", desc: "Ribuan spot mancing di seluruh Indonesia. Filter sesuai lokasi, jenis ikan, dan harga.", bg: "from-secondary to-green-400" },
        { icon: "👥", title: "Bergabung Komunitas", desc: "Ikut turnamen, bagikan cerita, dan cari teman mancing baru. Ekosistem mancing makin besar!", bg: "from-accent to-yellow-400" }
    ];
    const s = slides[currentOnboardingStep];
    const isLast = currentOnboardingStep === slides.length - 1;
    document.getElementById('onboardingContent').innerHTML = `
        <div class="flex-1 bg-gradient-to-br ${s.bg} flex flex-col items-center justify-center text-white p-8 text-center">
            <div class="text-8xl mb-8 float-anim">${s.icon}</div>
            <h2 class="text-3xl font-bold mb-4">${s.title}</h2>
            <p class="text-base opacity-90 leading-relaxed">${s.desc}</p>
        </div>
        <div class="p-6 bg-white">
            <div class="flex justify-center gap-2 mb-6">
                ${slides.map((_, i) => `<div class="h-2 rounded-full transition-all ${i === currentOnboardingStep ? 'w-8 bg-primary' : 'w-2 bg-gray-300'}"></div>`).join('')}
            </div>
            <div class="flex gap-3">
                ${!isLast ? '<button onclick="skipOnboarding()" class="flex-1 py-3 text-gray-500 font-bold">Lewati</button>' : ''}
                <button onclick="nextOnboarding()" class="flex-1 bg-primary text-white py-3.5 rounded-xl font-bold shadow-lg">${isLast ? 'Mulai Sekarang!' : 'Lanjut →'}</button>
            </div>
        </div>
    `;
}
function nextOnboarding() { if (currentOnboardingStep < 2) { currentOnboardingStep++; renderOnboarding(); } else finishOnboarding(); }
function skipOnboarding() { finishOnboarding(); }
function finishOnboarding() {
    onboardingDone = true; save();
    document.getElementById('onboardingModal').classList.add('hidden');
    document.getElementById('onboardingModal').classList.remove('flex');
    if (!currentUser) openAuth(); else switchTab('home');
}

// ==========================================
// AUTH dengan 3 ROLE
// ==========================================
function toggleAuth(type) {
    const bL = document.getElementById('btn-login'), bS = document.getElementById('btn-signup');
    const fL = document.getElementById('loginForm'), fS = document.getElementById('signupForm');
    if (type === 'login') {
        bL.className = "flex-1 py-2 text-sm font-semibold bg-white text-primary rounded-lg shadow-sm";
        bS.className = "flex-1 py-2 text-sm font-semibold text-gray-500 rounded-lg";
        fL.classList.remove('hidden'); fS.classList.add('hidden');
    } else {
        bS.className = "flex-1 py-2 text-sm font-semibold bg-white text-primary rounded-lg shadow-sm";
        bL.className = "flex-1 py-2 text-sm font-semibold text-gray-500 rounded-lg";
        fS.classList.remove('hidden'); fL.classList.add('hidden');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const role = document.getElementById('loginRole') ? document.getElementById('loginRole').value : 'pemancing';
    
    if (role === 'admin') {
        if (email !== 'admin@mancingyuk.com') {
            showToast('Gunakan email admin@mancingyuk.com', 'error');
            return;
        }
        currentUser = {
            name: "Admin MancingYuk",
            email: "admin@mancingyuk.com",
            avatar: IMG.avatars.admin.local,
            avatarFallback: IMG.avatars.admin.fallback,
            level: "Super Admin", points: 0,
            bio: "Pengelola aplikasi MancingYuk!",
            joinDate: "Januari 2024", type: "admin"
        };
    } else if (role === 'owner') {
        currentUser = {
            name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Owner",
            email: email,
            avatar: IMG.avatars.owner.local,
            avatarFallback: IMG.avatars.owner.fallback,
            level: "Pemilik Pemancingan", points: 0,
            bio: "Pemilik pemancingan",
            joinDate: "Januari 2024", type: "owner"
        };
    } else {
        const stored = safeLoad('registered_user', null);
        if (stored && stored.email === email) currentUser = stored;
        else {
            currentUser = {
                name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Pemancing",
                email: email,
                avatar: IMG.avatars.rizky.local,
                avatarFallback: IMG.avatars.rizky.fallback,
                level: "Pemancing Aktif", points: 1250,
                bio: "Pecinta mancing sejati 🎣",
                joinDate: "Januari 2024", type: "pemancing"
            };
        }
    }
    save();
    document.getElementById('authModal').classList.add('hidden');
    document.getElementById('authModal').classList.remove('flex');
    showToast('Selamat datang, ' + currentUser.name + '!');
    updateRoleUI();
    switchTab(currentUser.type === 'admin' ? 'admin-dashboard' : 'home');
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const type = document.getElementById('signupType').value;
    currentUser = {
        name, email, type,
        avatar: type === 'owner' ? IMG.avatars.owner.local : IMG.avatars.default.local,
        avatarFallback: type === 'owner' ? IMG.avatars.owner.fallback : IMG.avatars.default.fallback,
        level: type === 'owner' ? "Pemilik Pemancingan" : "Pemancing Baru",
        points: 100, bio: "Baru bergabung di MancingYuk!",
        joinDate: new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }),
        type: type
    };
    if (!registeredUsers.find(u => u.email === email)) {
        registeredUsers.push({ name, email, type, joinDate: currentUser.joinDate });
    }
    save();
    document.getElementById('authModal').classList.add('hidden');
    document.getElementById('authModal').classList.remove('flex');
    showToast('Akun berhasil dibuat!');
    updateRoleUI();
    switchTab('home');
}

function logout() {
    if (!confirm('Yakin ingin keluar?')) return;
    currentUser = null; save();
    document.getElementById('bottomNav').classList.remove('hidden');
    document.getElementById('adminNav').classList.add('hidden');
    document.getElementById('roleBadge').classList.add('hidden');
    openAuth();
    showToast('Anda telah keluar', 'info');
}

function adminLogout() {
    if (!confirm('Keluar dari mode admin?')) return;
    currentUser = null; save();
    document.getElementById('bottomNav').classList.remove('hidden');
    document.getElementById('adminNav').classList.add('hidden');
    document.getElementById('roleBadge').classList.add('hidden');
    openAuth();
    showToast('Anda telah keluar dari admin', 'info');
}

function openAuth() {
    const m = document.getElementById('authModal');
    m.classList.remove('hidden'); m.classList.add('flex');
}

function updateRoleUI() {
    const badge = document.getElementById('roleBadge');
    const bottomNav = document.getElementById('bottomNav');
    const adminNav = document.getElementById('adminNav');
    
    if (!currentUser) {
        badge.classList.add('hidden');
        bottomNav.classList.remove('hidden');
        adminNav.classList.add('hidden');
        return;
    }
    
    badge.classList.remove('hidden');
    if (currentUser.type === 'admin') {
        badge.textContent = '👑 ADMIN';
        badge.className = 'text-[9px] px-2 py-0.5 rounded-full font-bold bg-red-100 text-red-700';
        bottomNav.classList.add('hidden');
        adminNav.classList.remove('hidden');
    } else if (currentUser.type === 'owner') {
        badge.textContent = '🏪 OWNER';
        badge.className = 'text-[9px] px-2 py-0.5 rounded-full font-bold bg-purple-100 text-purple-700';
        bottomNav.classList.remove('hidden');
        adminNav.classList.add('hidden');
    } else {
        badge.textContent = '🎣 PEMANCING';
        badge.className = 'text-[9px] px-2 py-0.5 rounded-full font-bold bg-blue-100 text-primary';
        bottomNav.classList.remove('hidden');
        adminNav.classList.add('hidden');
    }
}

// ==========================================
// TAB SWITCHER
// ==========================================
function switchTab(tabName) {
    try {
        ['home','explore','events','community','profile'].forEach(tab => {
            const btn = document.getElementById('nav-' + tab);
            if (!btn) return;
            btn.className = "flex flex-col items-center text-gray-400";
            const svg = btn.querySelector('svg');
            if (svg) { svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor'); }
        });
        ['dashboard','spots','users','bookings'].forEach(tab => {
            const btn = document.getElementById('anav-' + tab);
            if (!btn) return;
            btn.className = "flex flex-col items-center text-gray-400";
            const svg = btn.querySelector('svg');
            if (svg) { svg.setAttribute('fill', 'none'); svg.setAttribute('stroke', 'currentColor'); }
        });
        
        const content = document.getElementById('app-content');
        if (!content) return;
        
        if (tabName.startsWith('admin-')) {
            const subtab = tabName.replace('admin-','');
            const activeBtn = document.getElementById('anav-' + subtab);
            if (activeBtn) {
                activeBtn.className = "flex flex-col items-center text-primary";
                const svg = activeBtn.querySelector('svg');
                if (svg) { svg.setAttribute('fill', 'currentColor'); svg.removeAttribute('stroke'); }
            }
            if (tabName === 'admin-dashboard') renderAdminDashboard(content);
            else if (tabName === 'admin-spots') renderAdminSpots(content);
            else if (tabName === 'admin-users') renderAdminUsers(content);
            else if (tabName === 'admin-bookings') renderAdminBookings(content);
            content.scrollTop = 0;
            return;
        }
        
        const activeBtn = document.getElementById('nav-' + tabName);
        if (activeBtn) {
            activeBtn.className = "flex flex-col items-center text-primary";
            const svg = activeBtn.querySelector('svg');
            if (svg) { svg.setAttribute('fill', 'currentColor'); svg.removeAttribute('stroke'); }
        }
        if (tabName === 'home') renderHome(content);
        else if (tabName === 'explore') renderExplore(content);
        else if (tabName === 'events') renderEvents(content);
        else if (tabName === 'community') renderCommunity(content);
        else if (tabName === 'profile') renderProfile(content);
        content.scrollTop = 0;
    } catch (err) {
        console.error('switchTab error:', err);
        document.getElementById('app-content').innerHTML = '<div class="p-5 text-red-500 text-sm">Error: ' + err.message + '</div>';
    }
}

// ==========================================
// HOME (dengan Widget Toko Partner)
// ==========================================
function renderHome(container) {
    try {
        const premiumSpots = spots.filter(s => s.premium).slice(0, 3);
        let premiumHtml = '';
        premiumSpots.forEach(s => {
            premiumHtml += '<div onclick="openDetail(' + s.id + ')" class="min-w-[200px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">';
            premiumHtml += '<div class="relative h-28">';
            premiumHtml += imgTag(s.image, s.imageFallback, s.name, "w-full h-full object-cover");
            premiumHtml += '<div class="absolute top-2 left-2 bg-yellow-400 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">⭐ PREMIUM</div>';
            premiumHtml += '<div class="absolute bottom-2 right-2 bg-white bg-opacity-90 px-2 py-0.5 rounded text-[10px] font-bold">★ ' + s.rating + '</div>';
            premiumHtml += '</div>';
            premiumHtml += '<div class="p-3"><h3 class="text-xs font-bold text-dark truncate">' + s.name + '</h3>';
            premiumHtml += '<p class="text-[10px] text-gray-500 mb-1">' + s.city + ' • ' + s.distance + ' km</p>';
            premiumHtml += '<p class="text-sm font-bold text-primary">Rp ' + s.price.toLocaleString('id-ID') + '</p></div></div>';
        });

        // Widget Toko Partner dengan produk
        let partnerProductsHtml = '';
        PARTNERS.slice(0, 3).forEach(partner => {
            partner.products.slice(0, 2).forEach(prod => {
                partnerProductsHtml += `
                    <div onclick="showPartnerDetail(${partner.id})" class="min-w-[170px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer">
                        <div class="relative h-24">
                            <img src="${prod.image}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/200'">
                            <div class="absolute top-1.5 left-1.5 bg-green-500 text-white text-[8px] font-bold px-1.5 py-0.5 rounded-full">${partner.discount}</div>
                        </div>
                        <div class="p-2.5">
                            <p class="text-[9px] text-gray-500">${partner.name}</p>
                            <h4 class="text-[11px] font-bold text-dark truncate">${prod.name}</h4>
                            <div class="flex justify-between items-center mt-1">
                                <p class="text-xs font-bold text-primary">Rp ${prod.price.toLocaleString('id-ID')}</p>
                                <span class="text-[9px] text-yellow-500">★ ${prod.rating}</span>
                            </div>
                        </div>
                    </div>
                `;
            });
        });

        const steps = [
            { n: 1, t: "Cari Tempat", d: "Lihat lokasi & harga" },
            { n: 2, t: "Booking", d: "Pilih tanggal & bayar" },
            { n: 3, t: "Mancing", d: "Nikmati pengalaman" },
            { n: 4, t: "Review", d: "Beri ulasan & ajak" }
        ];
        let howHtml = '';
        steps.forEach(s => {
            howHtml += '<div class="min-w-[130px] bg-white p-3 rounded-2xl shadow-sm border border-gray-100">';
            howHtml += '<div class="w-8 h-8 bg-blue-100 text-primary rounded-full flex items-center justify-center font-bold text-sm mb-2">' + s.n + '</div>';
            howHtml += '<h4 class="font-semibold text-xs text-dark">' + s.t + '</h4>';
            howHtml += '<p class="text-[10px] text-gray-500 mt-1 leading-tight">' + s.d + '</p></div>';
        });

        const w = WEATHER_FORECAST.today;
        const greeting = getGreeting();

        container.innerHTML = `
            <div class="px-5 pt-4 pb-3 bg-white rounded-b-3xl shadow-sm">
                <div class="flex justify-between items-start mb-3">
                    <div>
                        <p class="text-xs text-gray-500">${greeting} 👋</p>
                        <h2 class="text-lg font-bold text-dark">${currentUser ? currentUser.name.split(' ')[0] : 'Pemancing'}</h2>
                    </div>
                    <div class="bg-blue-50 px-3 py-2 rounded-xl flex items-center gap-2">
                        <span class="text-xl">${w.icon}</span>
                        <div><p class="text-xs font-bold text-dark">${w.temp}°C</p><p class="text-[9px] text-gray-500">${w.condition}</p></div>
                    </div>
                </div>
                <div class="flex items-center bg-gray-100 rounded-2xl p-1 border border-gray-200">
                    <svg class="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input type="text" id="searchInput" placeholder="Cari spot, jenis ikan..." value="${currentSearchQuery}" class="w-full px-3 py-3 bg-transparent text-sm focus:outline-none" oninput="handleSearch(this.value)">
                    ${currentSearchQuery ? '<button onclick="clearSearch()" class="text-gray-400 pr-2">✕</button>' : ''}
                </div>
            </div>

            <div class="px-5 mt-4">
                <div class="bg-gradient-to-r from-primary to-blue-400 rounded-2xl p-4 text-white flex justify-between items-center shadow-lg relative overflow-hidden">
                    <div class="relative z-10 w-2/3">
                        <h3 class="font-bold text-base">Ajak Teman Mancing!</h3>
                        <p class="text-xs text-blue-100 mt-1">Diskon 10% untuk booking grup.</p>
                        <button onclick="inviteFriend()" class="mt-2 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full">Ajak Sekarang</button>
                    </div>
                    <svg class="w-20 h-20 text-white opacity-20 absolute -right-4 -bottom-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                </div>
            </div>

            <div class="grid grid-cols-4 gap-2 px-5 mt-4">
                <button onclick="switchTab('explore')" class="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl mb-1">🎣</div>
                    <span class="text-[9px] font-medium text-dark">Spot</span>
                </button>
                <button onclick="openMap()" class="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl mb-1">🗺️</div>
                    <span class="text-[9px] font-medium text-dark">Peta</span>
                </button>
                <button onclick="openFishGuide()" class="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl mb-1">🐟</div>
                    <span class="text-[9px] font-medium text-dark">Ikan</span>
                </button>
                <button onclick="openCatchLog()" class="bg-white p-2 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                    <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-xl mb-1">📖</div>
                    <span class="text-[9px] font-medium text-dark">Catatan</span>
                </button>
            </div>

            <!-- Widget Toko Partner -->
            <div class="mt-6">
                <div class="flex justify-between items-center px-5 mb-3">
                    <h2 class="font-bold text-dark">🛒 Toko Partner</h2>
                    <button onclick="showAllPartners()" class="text-xs text-primary font-semibold">Lihat Semua</button>
                </div>
                <div class="flex overflow-x-auto space-x-3 px-5 pb-2 hide-scrollbar">${partnerProductsHtml}</div>
            </div>

            <div class="px-5 mt-4">
                <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-4 text-white shadow-lg">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-[10px] uppercase opacity-80 font-bold">Skor Mancing Hari Ini</p>
                            <p class="text-3xl font-bold mt-1">${w.score}/100</p>
                            <p class="text-xs opacity-90 mt-1">${w.score >= 80 ? '🔥 Waktu terbaik mancing!' : w.score >= 60 ? '👍 Kondisi cukup baik' : '⚠️ Kurang ideal'}</p>
                        </div>
                        <div class="text-right text-xs space-y-1"><p>💧 ${w.humidity}%</p><p>💨 ${w.wind}</p></div>
                    </div>
                    <div class="flex gap-2 mt-3 overflow-x-auto hide-scrollbar">
                        ${['today','tomorrow','day3'].map((k, i) => {
                            const f = WEATHER_FORECAST[k];
                            const label = i === 0 ? 'Hari Ini' : i === 1 ? 'Besok' : 'Lusa';
                            return '<div class="bg-white bg-opacity-20 rounded-lg p-2 text-center min-w-[70px]"><p class="text-[9px]">' + label + '</p><p class="text-lg">' + f.icon + '</p><p class="text-xs font-bold">' + f.temp + '°</p></div>';
                        }).join('')}
                    </div>
                </div>
            </div>

            <div class="px-5 mt-6">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="font-bold text-dark">🏆 Top Anglers</h2>
                    <button onclick="openLeaderboard()" class="text-xs text-primary font-semibold">Lihat Semua</button>
                </div>
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-3">
                    ${LEADERBOARD.slice(0, 3).map(l => `
                        <div class="flex items-center py-2 border-b border-gray-100 last:border-0">
                            <span class="text-2xl w-8">${l.medal}</span>
                            ${imgTag(l.avatar, l.avatarFallback, l.name, "w-9 h-9 rounded-full object-cover mx-2")}
                            <div class="flex-1"><p class="text-xs font-bold text-dark">${l.name}</p><p class="text-[10px] text-gray-500">${l.catches} tangkapan</p></div>
                            <p class="text-xs font-bold text-primary">${l.points.toLocaleString()}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="mt-6">
                <div class="flex justify-between items-center px-5 mb-3">
                    <h2 class="font-bold text-dark">⭐ Spot Premium</h2>
                    <button onclick="switchTab('explore')" class="text-xs text-primary font-semibold">Lihat Semua</button>
                </div>
                <div class="flex overflow-x-auto space-x-3 px-5 pb-2 hide-scrollbar">${premiumHtml}</div>
            </div>

            <div class="mt-6">
                <div class="px-5 mb-3"><h2 class="font-bold text-dark">Bagaimana Cara Kerjanya?</h2></div>
                <div class="flex overflow-x-auto space-x-3 px-5 pb-2 hide-scrollbar">${howHtml}</div>
            </div>

            <div class="px-5 mt-6">
                <div class="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-4 text-white shadow-lg">
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-[10px] font-bold uppercase opacity-80">Event Terdekat</p>
                            <h3 class="font-bold text-base mt-1">Turnamen Mancing Lele</h3>
                            <p class="text-xs opacity-90 mt-1">15 Nov • Hadiah Rp 5 Juta</p>
                        </div>
                        <button onclick="switchTab('events')" class="bg-white text-purple-600 text-xs font-bold px-3 py-2 rounded-full">Lihat</button>
                    </div>
                </div>
            </div>

            <div class="mt-6 px-5 pb-4">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="font-bold text-dark">Spot Populer</h2>
                    <button onclick="switchTab('explore')" class="text-xs text-primary font-semibold">Lihat Semua</button>
                </div>
                <div id="spotContainer" class="space-y-4"></div>
            </div>
        `;
        renderSpots(getFilteredSpots().slice(0, 4));
    } catch (err) {
        console.error('renderHome error:', err);
        container.innerHTML = '<div class="p-5 text-red-500 text-sm">Error: ' + err.message + '</div>';
    }
}

function getGreeting() {
    const h = new Date().getHours();
    if (h < 11) return "Selamat pagi";
    if (h < 15) return "Selamat siang";
    if (h < 19) return "Selamat sore";
    return "Selamat malam";
}
function handleSearch(val) { currentSearchQuery = val; const c = document.getElementById('spotContainer'); if (c) renderSpots(getFilteredSpots()); }
function clearSearch() { currentSearchQuery = ''; renderHome(document.getElementById('app-content')); }

function getFilteredSpots() {
    let filtered = spots.filter(s => {
        const mQ = !currentSearchQuery || s.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) || s.location.toLowerCase().includes(currentSearchQuery.toLowerCase()) || s.city.toLowerCase().includes(currentSearchQuery.toLowerCase());
        const mC = currentCategory === 'all' || s.location.toLowerCase().includes(currentCategory.toLowerCase());
        return mQ && mC;
    });
    if (currentSort === 'rating') filtered.sort((a, b) => b.rating - a.rating);
    else if (currentSort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (currentSort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (currentSort === 'premium') filtered.sort((a, b) => (b.premium ? 1 : 0) - (a.premium ? 1 : 0));
    else if (currentSort === 'distance') filtered.sort((a, b) => a.distance - b.distance);
    return filtered;
}

// ==========================================
// SPOT CARDS (dengan tombol peta)
// ==========================================
function renderSpots(data) {
    const container = document.getElementById('spotContainer');
    if (!container) return;
    if (data.length === 0) {
        container.innerHTML = '<div class="text-center py-10"><p class="text-gray-400 text-sm">Tidak ada spot ditemukan</p></div>';
        return;
    }
    let html = '';
    data.forEach(spot => {
        const status = spot.slots > 0
            ? '<span class="bg-green-100 text-green-700 px-2 py-1 rounded-md text-[10px] font-bold">Slot: ' + spot.slots + '</span>'
            : '<span class="bg-red-100 text-red-700 px-2 py-1 rounded-md text-[10px] font-bold">Slot Penuh</span>';
        html += '<div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">';
        html += '<div class="relative h-40">';
        html += imgTag(spot.image, spot.imageFallback, spot.name, "w-full h-full object-cover");
        html += '<div class="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-lg text-xs font-bold text-gray-800 flex items-center space-x-1"><span class="text-yellow-500">★</span><span>' + spot.rating + '</span><span class="text-gray-400 font-normal">(' + spot.reviews + ')</span></div>';
        html += '<div class="absolute bottom-3 left-3">' + status + '</div>';
        if (spot.premium) html += '<div class="absolute top-3 left-3 bg-yellow-400 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">⭐</div>';
        html += '<div class="absolute bottom-3 right-3 bg-black bg-opacity-60 text-white text-[10px] px-2 py-0.5 rounded-full">📍 ' + spot.distance + ' km</div>';
        html += '</div>';
        html += '<div class="p-4">';
        html += '<h3 class="text-base font-bold text-dark mb-1">' + spot.name + '</h3>';
        html += '<p class="text-xs text-gray-500 mb-4">📍 ' + spot.city + ' • ' + spot.location + '</p>';
        html += '<div class="flex justify-between items-center">';
        html += '<div><p class="text-[10px] text-gray-400">Harga / Orang</p>';
        html += '<p class="text-lg font-bold text-primary">Rp ' + spot.price.toLocaleString('id-ID') + '</p></div>';
        html += '<div class="flex gap-1.5">';
        html += '<button onclick="openSpotMap(' + spot.id + ')" class="bg-green-100 text-green-700 p-2.5 rounded-xl text-sm font-semibold">📍</button>';
        html += '<button onclick="openDetail(' + spot.id + ')" class="bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-semibold">Detail</button>';
        html += '</div></div></div></div>';
    });
    container.innerHTML = html;
}

// ==========================================
// EXPLORE
// ==========================================
function renderExplore(container) {
    try {
        const cats = ['all', 'Lele', 'Nila', 'Gurame', 'Bawal', 'Mas'];
        const sorts = [
            { v: 'rating', l: '⭐ Rating' },
            { v: 'distance', l: '📍 Terdekat' },
            { v: 'price-low', l: '💰 Termurah' },
            { v: 'price-high', l: '💎 Termahal' },
            { v: 'premium', l: '⭐ Premium' }
        ];
        let catsHtml = '', sortsHtml = '';
        cats.forEach(c => {
            catsHtml += '<button onclick="filterCategory(\'' + c + '\')" class="' + (currentCategory === c ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600') + ' px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap">' + (c === 'all' ? 'Semua' : c) + '</button>';
        });
        sorts.forEach(s => {
            sortsHtml += '<button onclick="setSort(\'' + s.v + '\')" class="' + (currentSort === s.v ? 'bg-dark text-white' : 'bg-gray-100 text-gray-600') + ' px-3 py-1.5 rounded-full text-[10px] font-semibold whitespace-nowrap">' + s.l + '</button>';
        });
        container.innerHTML = `
            <div class="px-5 pt-4 pb-3 bg-white">
                <div class="flex justify-between items-center mb-3">
                    <h2 class="text-lg font-bold">Explore Spot</h2>
                    <button onclick="openMap()" class="bg-green-500 text-white text-xs font-bold px-3 py-2 rounded-full flex items-center gap-1">
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
                        Peta
                    </button>
                </div>
                <div class="flex items-center bg-gray-100 rounded-2xl p-1 border border-gray-200 mb-3">
                    <svg class="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input type="text" placeholder="Cari..." value="${currentSearchQuery}" class="w-full px-3 py-3 bg-transparent text-sm focus:outline-none" oninput="handleSearch(this.value)">
                </div>
                <div class="flex space-x-2 overflow-x-auto hide-scrollbar mb-2">${catsHtml}</div>
                <div class="flex space-x-2 overflow-x-auto hide-scrollbar">${sortsHtml}</div>
            </div>
            <div class="px-5 mt-4 pb-4">
                <p class="text-xs text-gray-500 mb-3" id="resultCount"></p>
                <div id="spotContainer" class="space-y-4"></div>
            </div>
        `;
        const filtered = getFilteredSpots();
        const el = document.getElementById('resultCount');
        if (el) el.textContent = filtered.length + ' spot ditemukan';
        renderSpots(filtered);
    } catch (err) {
        console.error('renderExplore error:', err);
        container.innerHTML = '<div class="p-5 text-red-500 text-sm">Error: ' + err.message + '</div>';
    }
}

function filterCategory(cat) {
    currentCategory = cat;
    if (document.getElementById('nav-explore').classList.contains('text-primary')) renderExplore(document.getElementById('app-content'));
    else renderHome(document.getElementById('app-content'));
}
function setSort(sort) { currentSort = sort; renderExplore(document.getElementById('app-content')); }

// ==========================================
// MAP (Leaflet)
// ==========================================
function openMap(spotId) {
    spotId = spotId || null;
    const modal = document.getElementById('mapModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.getElementById('mapTitle').textContent = spotId ? 'Lokasi Spot' : 'Peta Spot Mancing';
    
    if (leafletMap) {
        leafletMap.remove();
        leafletMap = null;
        mapMarkers = [];
    }
    
    setTimeout(() => {
        let center = [-6.2088, 106.8456];
        let zoom = 10;
        if (spotId) {
            const s = spots.find(x => x.id === spotId);
            if (s && s.lat) { center = [s.lat, s.lng]; zoom = 14; }
        } else {
            const validSpots = spots.filter(s => s.lat && s.lng);
            if (validSpots.length > 0) {
                const lats = validSpots.map(s => s.lat);
                const lngs = validSpots.map(s => s.lng);
                center = [(Math.min(...lats) + Math.max(...lats)) / 2, (Math.min(...lngs) + Math.max(...lngs)) / 2];
                zoom = 9;
            }
        }
        
        leafletMap = L.map('mapContainer').setView(center, zoom);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap',
            maxZoom: 19
        }).addTo(leafletMap);
        
        const toShow = spotId ? spots.filter(s => s.id === spotId) : spots;
        toShow.forEach(s => {
            if (s.lat && s.lng) {
                const marker = L.marker([s.lat, s.lng]).addTo(leafletMap);
                marker.bindPopup(`
                    <div style="min-width:180px;font-family:Poppins,sans-serif">
                        <b style="color:#0ea5e9">${s.name}</b><br>
                        <small>📍 ${s.city}</small><br>
                        <small>💰 Rp ${s.price.toLocaleString('id-ID')}/orang</small><br>
                        <small>⭐ ${s.rating} (${s.reviews} review)</small>
                    </div>
                `);
                if (spotId) marker.openPopup();
                mapMarkers.push(marker);
            }
        });
        
        setTimeout(() => leafletMap.invalidateSize(), 200);
    }, 150);
}

function openSpotMap(spotId) { openMap(spotId); }

function closeMap() {
    const modal = document.getElementById('mapModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    if (leafletMap) { leafletMap.remove(); leafletMap = null; mapMarkers = []; }
}

// ==========================================
// PARTNER DETAIL
// ==========================================
function showAllPartners() {
    const modal = document.getElementById('partnerModal');
    let html = '<div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>';
    html += '<div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold">🛒 Semua Toko Partner</h3>';
    html += '<button onclick="closePartner()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>';
    html += '<div class="space-y-4">';
    PARTNERS.forEach(p => {
        html += '<div onclick="showPartnerDetail(' + p.id + ')" class="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm cursor-pointer">';
        html += '<div class="flex items-center mb-3"><div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mr-3">' + p.logo + '</div>';
        html += '<div class="flex-1"><h4 class="font-bold text-sm">' + p.name + '</h4>';
        html += '<p class="text-[10px] text-gray-500">' + p.desc + ' • ' + p.products.length + ' produk</p>';
        html += '<span class="inline-block mt-1 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-bold">' + p.discount + '</span></div></div>';
        html += '<div class="flex gap-2 overflow-x-auto hide-scrollbar">';
        p.products.slice(0, 3).forEach(prod => {
            html += '<div class="min-w-[90px] bg-gray-50 rounded-xl p-2 text-center">';
            html += '<img src="' + prod.image + '" class="w-full h-16 object-cover rounded-lg mb-1" onerror="this.src=\'https://via.placeholder.com/100\'">';
            html += '<p class="text-[9px] font-bold truncate">' + prod.name + '</p>';
            html += '<p class="text-[10px] text-primary font-bold">Rp ' + prod.price.toLocaleString('id-ID') + '</p>';
            html += '</div>';
        });
        html += '</div></div>';
    });
    html += '</div>';
    document.getElementById('partnerContent').innerHTML = html;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}

function showPartnerDetail(partnerId) {
    const p = PARTNERS.find(x => x.id === partnerId);
    if (!p) return;
    const modal = document.getElementById('partnerModal');
    let html = '<div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>';
    html += '<div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold flex-1">' + p.name + '</h3>';
    html += '<button onclick="closePartner()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>';
    html += '<div class="bg-blue-50 border border-blue-100 rounded-2xl p-4 mb-4 flex items-center">';
    html += '<div class="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-3xl mr-3">' + p.logo + '</div>';
    html += '<div class="flex-1"><p class="text-xs text-gray-500">' + p.category + '</p><p class="text-sm font-bold">' + p.desc + '</p>';
    html += '<p class="text-[10px] text-gray-500 mt-1">📞 ' + p.phone + '</p></div></div>';
    html += '<div class="bg-green-50 border border-green-200 rounded-xl p-3 mb-4"><p class="text-xs font-bold text-green-700">🎉 Promo: ' + p.discount + '</p></div>';
    html += '<h4 class="font-bold text-sm mb-3">Produk Tersedia</h4>';
    html += '<div class="space-y-3">';
    p.products.forEach(prod => {
        html += '<div class="bg-white border border-gray-100 rounded-2xl p-3 flex items-center">';
        html += '<img src="' + prod.image + '" class="w-16 h-16 object-cover rounded-xl mr-3" onerror="this.src=\'https://via.placeholder.com/100\'">';
        html += '<div class="flex-1"><h5 class="text-xs font-bold">' + prod.name + '</h5>';
        html += '<p class="text-[10px] text-gray-500">Stok: ' + prod.stock + ' • ★ ' + prod.rating + '</p>';
        html += '<p class="text-sm font-bold text-primary mt-1">Rp ' + prod.price.toLocaleString('id-ID') + '</p></div>';
        html += '<button onclick="buyPartnerProduct(' + p.id + ',' + prod.id + ')" class="bg-primary text-white text-[10px] font-bold px-3 py-2 rounded-lg">Beli</button>';
        html += '</div>';
    });
    html += '</div>';
    document.getElementById('partnerContent').innerHTML = html;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}

function buyPartnerProduct(partnerId, prodId) {
    const p = PARTNERS.find(x => x.id === partnerId);
    if (!p) return;
    const prod = p.products.find(x => x.id === prodId);
    if (!prod) return;
    if (prod.stock <= 0) return showToast('Stok habis', 'error');
    prod.stock--;
    showToast(prod.name + ' ditambahkan ke keranjang!');
    showPartnerDetail(partnerId);
}

function closePartner() {
    const m = document.getElementById('partnerModal');
    m.classList.remove('show');
    setTimeout(() => m.classList.add('hidden'), 300);
}

// ==========================================
// TICKETS PAGE (Full Page)
// ==========================================
function openTicketsPage() {
    const page = document.getElementById('ticketsPage');
    page.classList.remove('hidden');
    page.classList.add('flex');
    renderTicketsPage();
}

function closeTicketsPage() {
    const page = document.getElementById('ticketsPage');
    page.classList.add('hidden');
    page.classList.remove('flex');
}

function renderTicketsPage() {
    const container = document.getElementById('ticketsPageContent');
    if (!container) return;
    
    if (!currentUser) {
        container.innerHTML = '<div class="text-center py-10"><p class="text-gray-500 mb-4">Login untuk melihat tiket</p><button onclick="closeTicketsPage();openAuth()" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold">Login</button></div>';
        return;
    }
    
    if (userTickets.length === 0) {
        container.innerHTML = '<div class="flex flex-col items-center pt-10"><div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-3xl">🎫</div><p class="text-gray-400 text-sm mb-4">Belum ada tiket</p><button onclick="closeTicketsPage();switchTab(\'explore\')" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm">Cari Spot</button></div>';
        return;
    }
    
    let html = '<p class="text-xs text-gray-500 mb-3">' + userTickets.length + ' tiket ditemukan</p>';
    userTickets.forEach((t, i) => {
        const statusColor = t.status === 'Selesai' ? 'green' : t.status === 'Dibatalkan' ? 'red' : 'blue';
        let actionBtn = '';
        if (t.status === 'Selesai' && !t.reviewed) actionBtn = '<button onclick="closeTicketsPage();openReviewFor(' + i + ')" class="flex-1 bg-accent text-white py-2 rounded-xl text-xs font-bold">Review</button>';
        else if (t.status === 'Aktif') actionBtn = '<button onclick="cancelTicket(' + i + ');renderTicketsPage()" class="flex-1 bg-red-100 text-red-600 py-2 rounded-xl text-xs font-bold">Batalkan</button>';
        else if (t.reviewed) actionBtn = '<button class="flex-1 bg-green-100 text-green-600 py-2 rounded-xl text-xs font-bold" disabled>✓ Reviewed</button>';
        
        html += '<div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4">';
        html += '<div class="flex justify-between items-center border-b pb-3 mb-3"><span class="font-bold text-primary text-sm">' + t.spotName + '</span><span class="bg-' + statusColor + '-100 text-' + statusColor + '-700 text-[10px] px-2 py-1 rounded font-bold">' + t.status + '</span></div>';
        html += '<div class="flex justify-between text-xs text-gray-500 mb-1"><span>ID</span><span class="font-semibold text-dark">' + t.id + '</span></div>';
        html += '<div class="flex justify-between text-xs text-gray-500 mb-1"><span>Tanggal</span><span class="font-semibold text-dark">' + t.date + '</span></div>';
        html += '<div class="flex justify-between text-xs text-gray-500 mb-1"><span>Jumlah</span><span class="font-semibold text-dark">' + t.qty + ' Orang</span></div>';
        html += '<div class="flex justify-between text-xs text-gray-500 mt-3 pt-3 border-t"><span>Total</span><span class="font-bold text-primary">Rp ' + t.total.toLocaleString('id-ID') + '</span></div>';
        html += '<div class="flex gap-2 mt-4"><button onclick="openTicketDetail(' + i + ')" class="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl text-xs font-bold">E-Tiket</button>' + actionBtn + '</div></div>';
    });
    container.innerHTML = html;
}

// ==========================================
// EVENTS
// ==========================================
function renderEvents(container) {
    try {
        const tabs = [
            { v: 'upcoming', l: 'Akan Datang' },
            { v: 'ongoing', l: 'Berlangsung' },
            { v: 'past', l: 'Selesai' }
        ];
        const filtered = eventsData.filter(e => e.status === currentEventTab);
        let tabsHtml = '';
        tabs.forEach(t => {
            tabsHtml += '<button onclick="switchEventTab(\'' + t.v + '\')" class="flex-1 py-2 text-xs font-semibold ' + (currentEventTab === t.v ? 'bg-white text-primary rounded-lg shadow-sm' : 'text-gray-500') + '">' + t.l + '</button>';
        });
        let eventsHtml = '';
        if (filtered.length === 0) eventsHtml = '<p class="text-center text-gray-400 text-sm py-10">Tidak ada event</p>';
        else filtered.forEach(e => {
            const statusClass = e.status === 'upcoming' ? 'bg-blue-500' : e.status === 'ongoing' ? 'bg-green-500' : 'bg-gray-500';
            const statusLabel = e.status === 'upcoming' ? 'Akan Datang' : e.status === 'ongoing' ? 'Berlangsung' : 'Selesai';
            const progress = (e.participants / e.maxParticipants * 100).toFixed(0);
            let btnHtml = '';
            if (e.status === 'upcoming' && e.participants < e.maxParticipants) btnHtml = '<button onclick="registerEvent(' + e.id + ')" class="flex-1 bg-primary text-white py-2 rounded-xl text-xs font-bold">Daftar</button>';
            else if (e.status === 'upcoming') btnHtml = '<button class="flex-1 bg-red-100 text-red-500 py-2 rounded-xl text-xs font-bold" disabled>Penuh</button>';
            else btnHtml = '<button class="flex-1 bg-gray-100 text-gray-400 py-2 rounded-xl text-xs font-bold" disabled>Selesai</button>';
            eventsHtml += '<div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">';
            eventsHtml += '<div class="relative h-36">';
            eventsHtml += imgTag(e.image, e.imageFallback, e.title, "w-full h-full object-cover");
            eventsHtml += '<div class="absolute top-3 left-3 ' + statusClass + ' text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">' + statusLabel + '</div></div>';
            eventsHtml += '<div class="p-4"><h3 class="font-bold text-dark mb-1">' + e.title + '</h3>';
            eventsHtml += '<p class="text-xs text-gray-500 mb-1">📅 ' + e.date + ' • ' + e.time + '</p>';
            eventsHtml += '<p class="text-xs text-gray-500 mb-3">🏆 ' + e.prize + '</p>';
            eventsHtml += '<div class="flex justify-between items-center mb-3"><div class="flex-1"><div class="bg-gray-200 rounded-full h-1.5 overflow-hidden"><div class="bg-primary h-full" style="width:' + progress + '%"></div></div><p class="text-[10px] text-gray-500 mt-1">' + e.participants + '/' + e.maxParticipants + '</p></div>';
            eventsHtml += '<div class="ml-3 text-right"><p class="text-[10px] text-gray-400">Tiket</p><p class="text-sm font-bold text-primary">Rp ' + e.fee.toLocaleString('id-ID') + '</p></div></div>';
            eventsHtml += '<div class="flex gap-2"><button onclick="openEventDetail(' + e.id + ')" class="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl text-xs font-bold">Detail</button>' + btnHtml + '</div></div></div>';
        });
        container.innerHTML = '<div class="px-5 pt-4 pb-3 bg-white"><h2 class="text-lg font-bold mb-3">Events & Turnamen</h2><div class="flex bg-gray-100 p-1 rounded-xl">' + tabsHtml + '</div></div><div class="px-5 mt-4 pb-4 space-y-4">' + eventsHtml + '</div>';
    } catch (err) {
        console.error('renderEvents error:', err);
        container.innerHTML = '<div class="p-5 text-red-500 text-sm">Error: ' + err.message + '</div>';
    }
}
function switchEventTab(tab) { currentEventTab = tab; renderEvents(document.getElementById('app-content')); }

function openEventDetail(id) {
    const e = eventsData.find(ev => ev.id === id);
    if (!e) return;
    const modal = document.getElementById('eventModal');
    const btnHtml = e.status === 'upcoming' && e.participants < e.maxParticipants ? '<button onclick="registerEvent(' + e.id + ')" class="w-full bg-primary text-white py-3.5 rounded-xl font-bold mb-3">Daftar Sekarang</button>' : '';
    document.getElementById('eventContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold text-dark flex-1">${e.title}</h3>
            <button onclick="closeEventDetail()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        ${imgTag(e.image, e.imageFallback, e.title, "w-full h-44 object-cover rounded-2xl mb-4")}
        <p class="text-sm text-gray-600 mb-4">${e.desc}</p>
        <div class="bg-gray-50 p-4 rounded-2xl mb-4 space-y-2 text-sm">
            <div class="flex justify-between"><span class="text-gray-500">📅</span><span class="font-semibold">${e.date}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">⏰</span><span class="font-semibold">${e.time}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">🏆</span><span class="font-semibold text-accent">${e.prize}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">💰</span><span class="font-semibold text-primary">Rp ${e.fee.toLocaleString('id-ID')}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">👥</span><span class="font-semibold">${e.participants}/${e.maxParticipants}</span></div>
        </div>
        ${btnHtml}
        <button onclick="shareEvent(${e.id})" class="w-full bg-accent text-white py-3.5 rounded-xl font-bold">Bagikan</button>
    `;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}
function closeEventDetail() {
    const m = document.getElementById('eventModal');
    m.classList.remove('show');
    setTimeout(() => m.classList.add('hidden'), 300);
}
function registerEvent(id) {
    if (!currentUser) { closeEventDetail(); return openAuth(); }
    const e = eventsData.find(ev => ev.id === id);
    if (!e) return;
    if (userEvents.includes(id)) return showToast('Sudah terdaftar', 'info');
    if (e.participants >= e.maxParticipants) return showToast('Event penuh', 'error');
    e.participants++;
    userEvents.push(id);
    notifications.unshift({ id: Date.now(), title: "Pendaftaran Event", msg: "Anda terdaftar di " + e.title, time: "Baru saja", read: false });
    if (currentUser) currentUser.points += 500;
    checkAchievements();
    save(); updateNotifBadge();
    showToast('Berhasil daftar ' + e.title + '! +500 poin');
    closeEventDetail();
    renderEvents(document.getElementById('app-content'));
}
function shareEvent(id) {
    const e = eventsData.find(ev => ev.id === id);
    if (!e) return;
    const text = 'Ayo ikut ' + e.title + ' di MancingYuk! 🏆\n' + e.date + '\nHadiah: ' + e.prize;
    if (navigator.share) navigator.share({ title: e.title, text }).catch(() => fallbackCopy(text));
    else fallbackCopy(text);
}

// ==========================================
// COMMUNITY
// ==========================================
function renderCommunity(container) {
    try {
        if (!currentUser) {
            container.innerHTML = '<div class="flex flex-col items-center justify-center h-full pt-20 px-8 text-center"><div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-3xl">👥</div><p class="text-gray-500 mb-4 text-sm">Login untuk bergabung</p><button onclick="openAuth()" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold">Login</button></div>';
            return;
        }
        const allPosts = [...myPosts, ...communityPosts];
        let postsHtml = '';
        allPosts.forEach(p => {
            postsHtml += '<div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">';
            postsHtml += '<div class="flex items-center p-3">';
            postsHtml += imgTag(p.avatar, p.avatarFallback || IMG.avatars.default.fallback, p.user, "w-10 h-10 rounded-full object-cover");
            postsHtml += '<div class="ml-3 flex-1"><p class="text-sm font-bold text-dark">' + p.user + '</p>';
            postsHtml += '<p class="text-[10px] text-gray-400">' + p.time + (p.spot ? ' • 📍 ' + p.spot : '') + '</p></div>';
            postsHtml += '<button onclick="sharePost(' + p.id + ')" class="text-gray-400 p-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg></button></div>';
            postsHtml += imgTag(p.image, p.imageFallback, p.caption, "w-full h-56 object-cover");
            postsHtml += '<div class="p-4"><p class="text-sm text-gray-700 leading-relaxed mb-3">' + p.caption + '</p>';
            postsHtml += '<div class="flex items-center gap-4 pt-3 border-t">';
            postsHtml += '<button onclick="toggleLike(' + p.id + ')" class="flex items-center gap-1 text-sm ' + (p.liked ? 'text-red-500' : 'text-gray-500') + '">';
            postsHtml += '<svg class="w-5 h-5" fill="' + (p.liked ? 'currentColor' : 'none') + '" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>';
            postsHtml += '<span class="text-xs font-bold">' + p.likes + '</span></button>';
            postsHtml += '<button onclick="showToast(\'Komentar segera hadir\',\'info\')" class="flex items-center gap-1 text-gray-500 text-sm">';
            postsHtml += '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>';
            postsHtml += '<span class="text-xs font-bold">' + p.comments + '</span></button></div></div></div>';
        });
        container.innerHTML = '<div class="px-5 pt-4 pb-3 bg-white flex justify-between items-center"><div><h2 class="text-lg font-bold">Komunitas</h2><p class="text-xs text-gray-500 mt-0.5">' + allPosts.length + ' postingan</p></div><button onclick="openPostModal()" class="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold">+ Post</button></div><div class="px-5 mt-4 space-y-4 pb-4">' + postsHtml + '</div>';
    } catch (err) {
        console.error('renderCommunity error:', err);
        container.innerHTML = '<div class="p-5 text-red-500 text-sm">Error: ' + err.message + '</div>';
    }
}
function toggleLike(id) {
    const allPosts = [...myPosts, ...communityPosts];
    const p = allPosts.find(x => x.id === id);
    if (!p) return;
    p.liked = !p.liked; p.likes += p.liked ? 1 : -1;
    save(); renderCommunity(document.getElementById('app-content'));
}
function sharePost(id) {
    const allPosts = [...myPosts, ...communityPosts];
    const p = allPosts.find(x => x.id === id);
    if (!p) return;
    const text = p.user + ': ' + p.caption + '\n\nLihat di MancingYuk!';
    if (navigator.share) navigator.share({ title: 'MancingYuk!', text }).catch(() => fallbackCopy(text));
    else fallbackCopy(text);
}
function openPostModal() {
    const sel = document.getElementById('postSpot');
    sel.innerHTML = '<option value="">Pilih Spot (Opsional)</option>' + spots.map(s => '<option value="' + s.name + '">' + s.name + '</option>').join('');
    document.getElementById('postImage').value = '';
    document.getElementById('postCaption').value = '';
    document.getElementById('postModal').classList.remove('hidden');
    document.getElementById('postModal').classList.add('flex');
}
function closePostModal() {
    document.getElementById('postModal').classList.add('hidden');
    document.getElementById('postModal').classList.remove('flex');
}
function submitPost() {
    const img = document.getElementById('postImage').value.trim() || getImgLocal('community',1);
    const imgFallback = document.getElementById('postImage').value.trim() || getImgFallback('community',1);
    const caption = document.getElementById('postCaption').value.trim();
    const spot = document.getElementById('postSpot').value;
    if (!caption) return showToast('Cerita tidak boleh kosong', 'error');
    myPosts.unshift({ id: Date.now(), user: currentUser.name, avatar: currentUser.avatar, avatarFallback: currentUser.avatarFallback, time: "Baru saja", image: img, imageFallback: imgFallback, caption, likes: 0, comments: 0, spot, liked: false });
    checkAchievements(); save();
    closePostModal();
    showToast('Postingan dibagikan!');
    renderCommunity(document.getElementById('app-content'));
}

// ==========================================
// PROFILE
// ==========================================
function renderProfile(container) {
    try {
        if (!currentUser) {
            container.innerHTML = '<div class="flex flex-col items-center justify-center h-full pt-20 px-8 text-center"><div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-3xl">👤</div><p class="text-gray-500 mb-4 text-sm">Login untuk melihat profil</p><button onclick="openAuth()" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold">Login</button></div>';
            return;
        }
        const totalSpent = userTickets.filter(t => t.status !== 'Dibatalkan').reduce((s, t) => s + t.total, 0);
        const totalTrips = userTickets.filter(t => t.status === 'Selesai').length;
        const totalCatches = userCatches.length;
        const totalWeight = userCatches.reduce((s, c) => s + c.weight, 0);
        const unlockedAch = achievements.filter(a => a.unlocked).length;
        const tier = currentUser.points >= 5000 ? { name: "Gold", color: "text-yellow-600", bg: "bg-yellow-100" } :
                     currentUser.points >= 2000 ? { name: "Silver", color: "text-gray-600", bg: "bg-gray-200" } :
                     { name: "Bronze", color: "text-orange-700", bg: "bg-orange-100" };
        const ownerBtn = currentUser.type === 'owner'
            ? '<button onclick="openOwnerDashboard()" class="w-full bg-gradient-to-r from-secondary to-green-400 text-white py-4 rounded-2xl font-bold shadow-lg mb-4 flex items-center justify-center gap-2">🏪 Dashboard Pemilik</button>'
            : '';
        const userAvatar = currentUser.avatar || IMG.avatars.default.local;
        const userAvatarFb = currentUser.avatarFallback || IMG.avatars.default.fallback;

        container.innerHTML = `
            <div class="px-5 pt-6 pb-4">
                <div class="flex items-center space-x-4 mb-4">
                    ${imgTag(userAvatar, userAvatarFb, currentUser.name, "w-16 h-16 rounded-full object-cover border-2 border-primary")}
                    <div class="flex-1">
                        <h2 class="text-lg font-bold text-dark">${currentUser.name}</h2>
                        <p class="text-xs text-gray-500">${currentUser.email}</p>
                        <div class="flex gap-1 mt-1">
                            <span class="bg-blue-100 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">${currentUser.level}</span>
                            <span class="${tier.bg} ${tier.color} text-[10px] px-2 py-0.5 rounded-full font-bold">${tier.name}</span>
                        </div>
                    </div>
                </div>
                <div onclick="openLoyalty()" class="bg-gradient-to-r from-primary to-blue-400 rounded-2xl p-4 text-white shadow-lg mb-4 cursor-pointer">
                    <div class="flex justify-between items-center">
                        <div><p class="text-xs text-blue-100">Poin MancingYuk</p><p class="text-2xl font-bold">${currentUser.points.toLocaleString('id-ID')}</p></div>
                        <div class="text-right"><p class="text-[10px] text-blue-100">Achievements</p><p class="text-lg font-bold">${unlockedAch}/${achievements.length}</p></div>
                    </div>
                    <div class="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-white border-opacity-20 text-center">
                        <div><p class="text-[9px] text-blue-100">Trip</p><p class="font-bold text-sm">${totalTrips}x</p></div>
                        <div><p class="text-[9px] text-blue-100">Tangkapan</p><p class="font-bold text-sm">${totalCatches}</p></div>
                        <div><p class="text-[9px] text-blue-100">Total Berat</p><p class="font-bold text-sm">${totalWeight.toFixed(1)}kg</p></div>
                    </div>
                </div>
                <div class="grid grid-cols-3 gap-2 mb-4">
                    <button onclick="openCatchLog()" class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl mb-1">📖</div>
                        <span class="text-[10px] font-medium text-dark">Catatan</span>
                    </button>
                    <button onclick="openAchievements()" class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl mb-1">🏅</div>
                        <span class="text-[10px] font-medium text-dark">Badge</span>
                    </button>
                    <button onclick="openLeaderboard()" class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                        <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl mb-1">🏆</div>
                        <span class="text-[10px] font-medium text-dark">Ranking</span>
                    </button>
                </div>
                <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
                    <p class="text-xs text-gray-500 mb-1">Bio</p>
                    <p class="text-sm text-dark">${currentUser.bio || 'Belum ada bio'}</p>
                    <p class="text-[10px] text-gray-400 mt-2">Bergabung sejak ${currentUser.joinDate}</p>
                </div>
                ${ownerBtn}
                <h3 class="font-bold text-dark mb-3">Konten & Edukasi</h3>
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 mb-4">
                    <button onclick="openFishGuide()" class="w-full flex items-center justify-between p-4"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">🐟</div><span class="text-sm font-medium">Panduan Ikan</span></div><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                    <button onclick="openTips()" class="w-full flex items-center justify-between p-4"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">💡</div><span class="text-sm font-medium">Tips & Trik</span></div><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                    <button onclick="openRecipes()" class="w-full flex items-center justify-between p-4"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">🍳</div><span class="text-sm font-medium">Resep Masakan</span></div><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                </div>
                <h3 class="font-bold text-dark mb-3">Akun & Pengaturan</h3>
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 mb-4">
                    <button onclick="openTicketsPage()" class="w-full flex items-center justify-between p-4"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">🎫</div><span class="text-sm font-medium">Tiket Saya</span></div><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                    <button onclick="openEditProfile()" class="w-full flex items-center justify-between p-4"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">👤</div><span class="text-sm font-medium">Edit Profil</span></div><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                    <button onclick="openPassword()" class="w-full flex items-center justify-between p-4"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">🔒</div><span class="text-sm font-medium">Ubah Password</span></div><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                    <button onclick="showHistory()" class="w-full flex items-center justify-between p-4"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">📜</div><span class="text-sm font-medium">Riwayat Transaksi</span></div><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                </div>
                <h3 class="font-bold text-dark mb-3">Lainnya</h3>
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 mb-4">
                    <button onclick="showAllPartners()" class="w-full flex items-center justify-between p-4"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">🛒</div><span class="text-sm font-medium">Toko Partner</span></div><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                    <button onclick="showMerch()" class="w-full flex items-center justify-between p-4"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">👕</div><span class="text-sm font-medium">Merchandise</span></div><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                    <button onclick="openAbout()" class="w-full flex items-center justify-between p-4"><div class="flex items-center space-x-3"><div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">ℹ️</div><span class="text-sm font-medium">Visi & Misi</span></div><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></button>
                </div>
                <button onclick="logout()" class="w-full bg-red-50 text-red-600 py-3.5 rounded-xl font-bold border border-red-100 mb-6">Keluar Akun</button>
                <div class="text-center pb-4">
                    <p class="text-xs text-gray-400">MancingYuk! v3.0.0</p>
                    <p class="text-[10px] text-gray-300 mt-1">Lebih Banyak Spot. Lebih Banyak Teman. Lebih Banyak Cerita.</p>
                </div>
            </div>
        `;
    } catch (err) {
        console.error('renderProfile error:', err);
        container.innerHTML = '<div class="p-5 text-red-500 text-sm">Error: ' + err.message + '</div>';
    }
}

// ==========================================
// FISH GUIDE, TIPS, RECIPES, CATCH LOG, ACHIEVEMENTS, LEADERBOARD
// (Sama seperti sebelumnya, tidak berubah)
// ==========================================
function openFishGuide() {
    const modal = document.getElementById('notifModal');
    let html = '<div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>';
    html += '<div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold">🐟 Panduan Ikan</h3>';
    html += '<button onclick="closeNotif()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>';
    html += '<div class="grid grid-cols-2 gap-3">';
    FISH_SPECIES.forEach((f, i) => {
        html += '<div onclick="openFishDetail(' + i + ')" class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm cursor-pointer">';
        html += imgTag(f.image, f.imageFallback, f.name, "w-full h-24 object-cover");
        html += '<div class="p-3"><h4 class="text-xs font-bold">' + f.name + '</h4>';
        html += '<p class="text-[9px] text-gray-500 italic">' + f.latin + '</p>';
        html += '<p class="text-[9px] text-gray-400 mt-1">' + f.weight + '</p></div></div>';
    });
    html += '</div>';
    document.getElementById('notifContent').innerHTML = html;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}
function openFishDetail(i) {
    const f = FISH_SPECIES[i];
    if (!f) return;
    const modal = document.getElementById('notifModal');
    document.getElementById('notifContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold">${f.name}</h3>
        <button onclick="openFishGuide()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button></div>
        ${imgTag(f.image, f.imageFallback, f.name, "w-full h-40 object-cover rounded-2xl mb-4")}
        <p class="text-xs italic text-gray-500 mb-2">${f.latin}</p>
        <p class="text-sm text-gray-700 mb-4">${f.desc}</p>
        <div class="bg-blue-50 p-4 rounded-2xl space-y-2 text-xs mb-4">
            <div class="flex justify-between"><span class="text-gray-500">🏞️ Habitat</span><span class="font-semibold text-dark">${f.habitat}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">🪱 Umpan</span><span class="font-semibold text-dark">${f.bait}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">⏰ Waktu</span><span class="font-semibold text-dark">${f.bestTime}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">⚖️ Berat</span><span class="font-semibold text-dark">${f.weight}</span></div>
        </div>
        <button onclick="openFishGuide()" class="w-full bg-primary text-white py-3 rounded-xl font-bold">Kembali</button>
    `;
}
function openTips() {
    const modal = document.getElementById('notifModal');
    let html = '<div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>';
    html += '<div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold">💡 Tips Mancing</h3>';
    html += '<button onclick="closeNotif()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>';
    html += '<div class="space-y-3">';
    TIPS_DATA.forEach((t, i) => {
        html += '<div onclick="openTipDetail(' + i + ')" class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm cursor-pointer">';
        html += '<div class="flex">' + imgTag(t.image, t.imageFallback, t.title, "w-20 h-20 object-cover");
        html += '<div class="p-3 flex-1"><span class="inline-block bg-blue-100 text-primary text-[9px] px-2 py-0.5 rounded font-bold mb-1">' + t.category + '</span>';
        html += '<h4 class="text-xs font-bold">' + t.title + '</h4>';
        html += '<p class="text-[10px] text-gray-500 mt-1">📖 ' + t.readTime + '</p></div></div></div>';
    });
    html += '</div>';
    document.getElementById('notifContent').innerHTML = html;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}
function openTipDetail(i) {
    const t = TIPS_DATA[i];
    if (!t) return;
    const modal = document.getElementById('notifModal');
    document.getElementById('notifContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold flex-1">${t.title}</h3>
        <button onclick="openTips()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button></div>
        ${imgTag(t.image, t.imageFallback, t.title, "w-full h-40 object-cover rounded-2xl mb-4")}
        <div class="flex gap-2 mb-4"><span class="bg-blue-100 text-primary text-[10px] px-2 py-1 rounded font-bold">${t.category}</span><span class="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded font-bold">📖 ${t.readTime}</span></div>
        <p class="text-sm text-gray-700 leading-relaxed whitespace-pre-line mb-4">${t.content}</p>
        <button onclick="openTips()" class="w-full bg-primary text-white py-3 rounded-xl font-bold">Kembali</button>
    `;
}
function openRecipes() {
    const modal = document.getElementById('notifModal');
    let html = '<div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>';
    html += '<div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold">🍳 Resep Masakan</h3>';
    html += '<button onclick="closeNotif()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>';
    html += '<div class="space-y-3">';
    RECIPES_DATA.forEach((r, i) => {
        html += '<div onclick="openRecipeDetail(' + i + ')" class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm cursor-pointer">';
        html += imgTag(r.image, r.imageFallback, r.name, "w-full h-32 object-cover");
        html += '<div class="p-3"><h4 class="text-sm font-bold">' + r.name + '</h4>';
        html += '<div class="flex gap-3 mt-1 text-[10px] text-gray-500"><span>⏱️ ' + r.time + '</span><span>📊 ' + r.level + '</span></div></div></div>';
    });
    html += '</div>';
    document.getElementById('notifContent').innerHTML = html;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}
function openRecipeDetail(i) {
    const r = RECIPES_DATA[i];
    if (!r) return;
    const modal = document.getElementById('notifModal');
    const ingHtml = r.ingredients.map(x => '<li>' + x + '</li>').join('');
    const stepHtml = r.steps.map((x, idx) => '<div class="flex gap-3 mb-2"><span class="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">' + (idx + 1) + '</span><p class="text-xs text-gray-700 pt-1">' + x + '</p></div>').join('');
    document.getElementById('notifContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold flex-1">${r.name}</h3>
        <button onclick="openRecipes()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg></button></div>
        ${imgTag(r.image, r.imageFallback, r.name, "w-full h-40 object-cover rounded-2xl mb-4")}
        <div class="flex gap-2 mb-4"><span class="bg-blue-100 text-primary text-[10px] px-2 py-1 rounded font-bold">⏱️ ${r.time}</span><span class="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded font-bold">📊 ${r.level}</span></div>
        <h4 class="font-bold text-sm mb-2">🧂 Bahan-bahan</h4>
        <ul class="text-xs text-gray-600 space-y-1 list-disc pl-5 mb-4">${ingHtml}</ul>
        <h4 class="font-bold text-sm mb-2">👨‍🍳 Cara Membuat</h4>
        <div class="mb-4">${stepHtml}</div>
        <button onclick="openRecipes()" class="w-full bg-primary text-white py-3 rounded-xl font-bold">Kembali</button>
    `;
}
function openCatchLog() {
    if (!currentUser) return openAuth();
    const modal = document.getElementById('catchLogModal');
    const totalWeight = userCatches.reduce((s, c) => s + c.weight, 0);
    const biggest = userCatches.length > 0 ? Math.max(...userCatches.map(c => c.weight)) : 0;
    const fishCount = {};
    userCatches.forEach(c => { fishCount[c.fish] = (fishCount[c.fish] || 0) + 1; });
    let statsHtml = '';
    Object.keys(fishCount).forEach(fish => {
        statsHtml += '<div class="bg-white rounded-xl p-2 text-center"><p class="text-[10px] text-gray-500">' + fish + '</p><p class="text-base font-bold text-primary">' + fishCount[fish] + '</p></div>';
    });
    let catchesHtml = '';
    if (userCatches.length === 0) catchesHtml = '<p class="text-center text-gray-400 text-sm py-10">Belum ada catatan tangkapan</p>';
    else userCatches.forEach(c => {
        catchesHtml += '<div class="bg-white border border-gray-100 rounded-2xl p-3 mb-2 flex items-center">';
        catchesHtml += '<div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl mr-3">🐟</div>';
        catchesHtml += '<div class="flex-1"><p class="text-sm font-bold text-dark">' + c.fish + ' <span class="text-primary">' + c.weight + ' kg</span></p>';
        catchesHtml += '<p class="text-[10px] text-gray-500">📍 ' + c.spot + ' • ' + c.date + '</p>';
        if (c.note) catchesHtml += '<p class="text-[10px] text-gray-400 italic">"' + c.note + '"</p>';
        catchesHtml += '</div></div>';
    });
    document.getElementById('catchLogContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold">📖 Catatan Tangkapan</h3>
        <button onclick="closeCatchLog()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>
        <div class="grid grid-cols-3 gap-2 mb-4">
            <div class="bg-blue-50 rounded-xl p-3 text-center"><p class="text-[10px] text-gray-500">Total</p><p class="text-lg font-bold text-primary">${userCatches.length}</p></div>
            <div class="bg-green-50 rounded-xl p-3 text-center"><p class="text-[10px] text-gray-500">Berat</p><p class="text-lg font-bold text-secondary">${totalWeight.toFixed(1)}kg</p></div>
            <div class="bg-yellow-50 rounded-xl p-3 text-center"><p class="text-[10px] text-gray-500">Terbesar</p><p class="text-lg font-bold text-accent">${biggest}kg</p></div>
        </div>
        ${statsHtml ? '<div class="grid grid-cols-4 gap-2 mb-4">' + statsHtml + '</div>' : ''}
        <button onclick="openAddCatch()" class="w-full bg-secondary text-white py-3 rounded-xl font-bold mb-4">+ Catat Tangkapan Baru</button>
        <div>${catchesHtml}</div>
    `;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}
function closeCatchLog() {
    const m = document.getElementById('catchLogModal');
    m.classList.remove('show');
    setTimeout(() => m.classList.add('hidden'), 300);
}
function openAddCatch() {
    const sel = document.getElementById('catchSpot');
    sel.innerHTML = spots.map(s => '<option value="' + s.name + '">' + s.name + '</option>').join('');
    document.getElementById('addCatchModal').classList.remove('hidden');
    document.getElementById('addCatchModal').classList.add('flex');
}
function closeAddCatch() {
    document.getElementById('addCatchModal').classList.add('hidden');
    document.getElementById('addCatchModal').classList.remove('flex');
}
function saveCatch() {
    const fish = document.getElementById('catchFish').value;
    const weight = parseFloat(document.getElementById('catchWeight').value);
    const spot = document.getElementById('catchSpot').value;
    const note = document.getElementById('catchNote').value;
    if (!weight || weight <= 0) return showToast('Berat tidak valid', 'error');
    userCatches.unshift({ id: Date.now(), fish, weight, spot, date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }), note });
    if (currentUser) currentUser.points += 100;
    checkAchievements(); save();
    closeAddCatch();
    showToast('Tangkapan dicatat! +100 poin');
    openCatchLog();
}
function openAchievements() {
    if (!currentUser) return openAuth();
    const modal = document.getElementById('notifModal');
    let html = '<div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>';
    html += '<div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold">🏅 Achievements</h3>';
    html += '<button onclick="closeNotif()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>';
    html += '<div class="bg-blue-50 rounded-2xl p-3 mb-4 text-center"><p class="text-xs text-gray-500">Unlocked</p><p class="text-2xl font-bold text-primary">' + achievements.filter(a => a.unlocked).length + '/' + achievements.length + '</p></div>';
    html += '<div class="grid grid-cols-2 gap-3">';
    achievements.forEach(a => {
        html += '<div class="p-3 rounded-2xl border ' + (a.unlocked ? 'bg-yellow-50 border-yellow-200' : 'bg-gray-50 border-gray-100 opacity-60') + '">';
        html += '<div class="text-3xl mb-2">' + a.icon + '</div>';
        html += '<p class="text-xs font-bold text-dark">' + a.name + '</p>';
        html += '<p class="text-[10px] text-gray-500 mt-1">' + a.desc + '</p>';
        html += '<p class="text-[10px] font-bold mt-2 ' + (a.unlocked ? 'text-green-600' : 'text-gray-400') + '">' + (a.unlocked ? '✓ +' + a.points + ' poin' : '🔒 Belum terbuka') + '</p></div>';
    });
    html += '</div>';
    document.getElementById('notifContent').innerHTML = html;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}
function checkAchievements() {
    if (!currentUser) return;
    let changed = false;
    if (!achievements[0].unlocked && userTickets.length > 0) { achievements[0].unlocked = true; currentUser.points += achievements[0].points; changed = true; }
    if (!achievements[1].unlocked && userTickets.length >= 5) { achievements[1].unlocked = true; currentUser.points += achievements[1].points; changed = true; }
    if (!achievements[2].unlocked && userCatches.length >= 10) { achievements[2].unlocked = true; currentUser.points += achievements[2].points; changed = true; }
    if (!achievements[3].unlocked && userCatches.some(c => c.weight >= 5)) { achievements[3].unlocked = true; currentUser.points += achievements[3].points; changed = true; }
    if (!achievements[4].unlocked && userTickets.filter(t => t.reviewed).length >= 3) { achievements[4].unlocked = true; currentUser.points += achievements[4].points; changed = true; }
    if (!achievements[5].unlocked && userEvents.length >= 1) { achievements[5].unlocked = true; currentUser.points += achievements[5].points; changed = true; }
    if (!achievements[6].unlocked && myPosts.length >= 3) { achievements[6].unlocked = true; currentUser.points += achievements[6].points; changed = true; }
    if (!achievements[7].unlocked && currentUser.points >= 5000) { achievements[7].unlocked = true; currentUser.points += achievements[7].points; changed = true; }
    if (changed) save();
}
function openLeaderboard() {
    const modal = document.getElementById('notifModal');
    const board = [...LEADERBOARD];
    if (currentUser) {
        const me = board.find(b => b.name === currentUser.name);
        if (me) me.points = currentUser.points;
        board.sort((a, b) => b.points - a.points);
        board.forEach((b, i) => b.rank = i + 1);
    }
    let html = '<div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>';
    html += '<div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold">🏆 Papan Peringkat</h3>';
    html += '<button onclick="closeNotif()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>';
    html += '<div class="space-y-2">';
    board.forEach(b => {
        const isMe = currentUser && b.name === currentUser.name;
        const medal = b.rank === 1 ? '🥇' : b.rank === 2 ? '🥈' : b.rank === 3 ? '🥉' : b.rank;
        html += '<div class="flex items-center p-3 rounded-xl ' + (isMe ? 'bg-blue-50 border border-primary' : 'bg-white border border-gray-100') + '">';
        html += '<span class="text-lg w-8 text-center font-bold">' + medal + '</span>';
        html += imgTag(b.avatar, b.avatarFallback, b.name, "w-10 h-10 rounded-full object-cover mx-2");
        html += '<div class="flex-1"><p class="text-xs font-bold text-dark">' + b.name + (isMe ? ' (Anda)' : '') + '</p>';
        html += '<p class="text-[10px] text-gray-500">' + b.catches + ' tangkapan</p></div>';
        html += '<p class="text-sm font-bold text-primary">' + b.points.toLocaleString('id-ID') + '</p></div>';
    });
    html += '</div>';
    document.getElementById('notifContent').innerHTML = html;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}
function renderTickets(container) {
    if (!currentUser) {
        container.innerHTML = '<div class="flex flex-col items-center justify-center h-full pt-20 px-8 text-center"><div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-3xl">🎫</div><p class="text-gray-500 mb-4 text-sm">Login untuk melihat tiket</p><button onclick="openAuth()" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold">Login</button></div>';
        return;
    }
    openTicketsPage();
}
function openTicketDetail(index) {
    const t = userTickets[index];
    if (!t) return;
    const m = document.getElementById('ticketDetailModal');
    document.getElementById('ticketDetailContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold">E-Tiket</h3>
        <button onclick="closeTicketDetail()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>
        ${imgTag(t.image, t.imageFallback || getImgFallback('spots',1), t.spotName, "w-full h-40 object-cover rounded-2xl mb-4")}
        <div class="bg-white border-2 border-dashed border-primary rounded-2xl p-5 mb-4">
            <p class="text-xs text-gray-500 mb-1">ID Tiket</p>
            <p class="text-lg font-bold text-dark mb-3">${t.id}</p>
            <div class="space-y-2 text-sm">
                <div class="flex justify-between"><span class="text-gray-500">Spot</span><span class="font-semibold">${t.spotName}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">Tanggal</span><span class="font-semibold">${t.date}</span></div>
                <div class="flex justify-between"><span class="text-gray-500">Jumlah</span><span class="font-semibold">${t.qty} Orang</span></div>
                <div class="flex justify-between border-t pt-2"><span class="text-gray-500">Total</span><span class="font-bold text-primary">Rp ${t.total.toLocaleString('id-ID')}</span></div>
            </div>
            <div class="mt-5 pt-4 border-t-2 border-dashed flex flex-col items-center">
                <div class="w-32 h-32 bg-gray-100 rounded-xl flex items-center justify-center mb-2">
                    <svg class="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm10-2h4v2h-2v2h2v2h-4v-2h-2v2h-2v-4h2v-2h2v-2h2v2h2v2h-2v2h-2v-2h-2v-2z"/></svg>
                </div>
                <p class="text-[10px] text-gray-400">Tunjukkan QR ini ke pengelola</p>
            </div>
        </div>
        <button onclick="shareTicket(${index})" class="w-full bg-accent text-white py-3 rounded-xl font-bold mb-2">Bagikan</button>
        <button onclick="closeTicketDetail()" class="w-full bg-gray-200 text-gray-700 py-3 rounded-xl font-bold">Tutup</button>
    `;
    m.classList.remove('hidden');
    setTimeout(() => m.classList.add('show'), 10);
}
function closeTicketDetail() {
    const m = document.getElementById('ticketDetailModal');
    m.classList.remove('show');
    setTimeout(() => m.classList.add('hidden'), 300);
}
function shareTicket(i) {
    const t = userTickets[i];
    if (!t) return;
    const text = 'E-Tiket MancingYuk!\n' + t.spotName + '\n' + t.date + '\nID: ' + t.id;
    if (navigator.share) navigator.share({ title: 'E-Tiket', text }).catch(() => fallbackCopy(text));
    else fallbackCopy(text);
}
function cancelTicket(index) {
    if (!confirm('Yakin membatalkan tiket ini?')) return;
    userTickets[index].status = 'Dibatalkan';
    save();
    showToast('Tiket dibatalkan', 'info');
    if (!document.getElementById('ticketsPage').classList.contains('hidden')) renderTicketsPage();
    else renderTickets(document.getElementById('app-content'));
}

// ==========================================
// DETAIL SPOT
// ==========================================
function openDetail(id) {
    if (!currentUser) return openAuth();
    selectedSpot = spots.find(s => s.id === id);
    if (!selectedSpot) return;
    const modal = document.getElementById('detailModal');
    const today = new Date().toISOString().split('T')[0];
    const platformFee = selectedSpot.price * 0.08;
    const ownerRevenue = selectedSpot.price - platformFee;
    const facilitiesHtml = selectedSpot.facilities.map(f => '<span class="bg-gray-100 text-gray-600 text-[10px] px-3 py-1 rounded-full whitespace-nowrap">' + f + '</span>').join('');
    const premiumBadge = selectedSpot.premium ? '<div class="inline-block bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-full mb-2">⭐ PREMIUM</div>' : '';
    const disabled = selectedSpot.slots === 0;
    const imgFb = selectedSpot.imageFallback || getImgFallback('spots',1);

    document.getElementById('detailContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        ${premiumBadge}
        <div class="flex justify-between items-start mb-4">
            <div>
                <h3 class="text-xl font-bold text-dark">${selectedSpot.name}</h3>
                <p class="text-xs text-gray-500 mt-1">📍 ${selectedSpot.city} • ${selectedSpot.location}</p>
                <p class="text-xs text-gray-500">👤 ${selectedSpot.owner} • 🕒 ${selectedSpot.open}</p>
            </div>
            <button onclick="closeDetail()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        ${imgTag(selectedSpot.image, imgFb, selectedSpot.name, "w-full h-48 object-cover rounded-2xl mb-4")}
        <button onclick="closeDetail();openSpotMap(${selectedSpot.id})" class="w-full bg-green-50 text-green-700 py-3 rounded-xl font-bold text-sm mb-4 flex items-center justify-center gap-2">📍 Lihat Lokasi di Peta</button>
        <div class="flex space-x-2 mb-4 overflow-x-auto hide-scrollbar">${facilitiesHtml}</div>
        <p class="text-xs text-gray-500 leading-relaxed mb-4">${selectedSpot.description}</p>
        <button onclick="openChat(${selectedSpot.id}, '${selectedSpot.owner}')" class="w-full bg-green-50 text-green-700 py-3 rounded-xl font-bold text-sm mb-4 flex items-center justify-center gap-2">💬 Chat dengan ${selectedSpot.owner}</button>
        <div class="bg-blue-50 p-4 rounded-2xl mb-6 border border-blue-100">
            <h4 class="font-bold text-primary text-sm mb-2">Transparansi Harga</h4>
            <div class="flex justify-between text-xs text-gray-600 mb-1"><span>Harga Tiket</span><span class="font-semibold">Rp ${selectedSpot.price.toLocaleString('id-ID')}</span></div>
            <div class="flex justify-between text-xs text-gray-600 mb-1"><span>Biaya Layanan (8%)</span><span class="font-semibold">Rp ${platformFee.toLocaleString('id-ID')}</span></div>
            <div class="border-t border-blue-200 mt-2 pt-2 flex justify-between text-sm font-bold text-dark"><span>Diterima Pemilik</span><span>Rp ${ownerRevenue.toLocaleString('id-ID')}</span></div>
        </div>
        <div class="mb-4"><label class="block text-xs font-medium text-gray-500 mb-2">Tanggal</label>
        <input type="date" id="bookingDate" min="${today}" value="${today}" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary"></div>
        <div class="mb-4"><label class="block text-xs font-medium text-gray-500 mb-2">Jumlah Orang</label>
        <input type="number" id="qtyInput" min="1" max="10" value="2" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary" oninput="updateTotal()"></div>
        <div class="bg-gray-50 p-4 rounded-xl flex justify-between items-center mb-6">
            <span class="text-sm font-medium text-gray-600">Total</span>
            <p id="totalPrice" class="text-xl font-bold text-primary">Rp ${(selectedSpot.price * 2).toLocaleString('id-ID')}</p>
        </div>
        <button onclick="openCheckout()" ${disabled ? 'disabled' : ''} class="w-full ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary'} text-white py-3.5 rounded-xl font-bold mb-3">${disabled ? 'Slot Penuh' : 'Lanjut ke Pembayaran'}</button>
        <div class="flex gap-2">
            <button onclick="inviteFriend()" class="flex-1 bg-accent text-white py-3 rounded-xl font-bold text-sm">Ajak Teman</button>
            <button onclick="shareSpot(${selectedSpot.id})" class="flex-1 bg-dark text-white py-3 rounded-xl font-bold text-sm">Bagikan</button>
        </div>
    `;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}
function closeDetail() {
    const m = document.getElementById('detailModal');
    m.classList.remove('show');
    setTimeout(() => m.classList.add('hidden'), 300);
}
function updateTotal() {
    if (!selectedSpot) return;
    const qty = parseInt(document.getElementById('qtyInput').value) || 1;
    document.getElementById('totalPrice').innerText = 'Rp ' + (selectedSpot.price * qty).toLocaleString('id-ID');
}
function shareSpot(id) {
    const s = spots.find(x => x.id === id);
    if (!s) return;
    const text = 'Cek spot mancing: ' + s.name + '\n📍 ' + s.city + '\n💰 Rp ' + s.price.toLocaleString('id-ID') + '/orang\n⭐ ' + s.rating;
    if (navigator.share) navigator.share({ title: s.name, text }).catch(() => fallbackCopy(text));
    else fallbackCopy(text);
}
function openChat(spotId, ownerName) {
    currentChatOwner = ownerName;
    document.getElementById('chatTitle').innerText = ownerName;
    const avatarEl = document.getElementById('chatAvatar');
    avatarEl.src = IMG.avatars.owner.local;
    avatarEl.dataset.fallback = IMG.avatars.owner.fallback;
    avatarEl.onerror = function() { handleImgError(this); };
    const msgs = chatHistory[ownerName] || [{ from: 'them', text: 'Halo! Ada yang bisa dibantu?', time: '10:00' }];
    chatHistory[ownerName] = msgs;
    renderChatMessages();
    document.getElementById('chatModal').classList.remove('hidden');
    document.getElementById('chatModal').classList.add('flex');
    save();
}
function renderChatMessages() {
    const msgs = chatHistory[currentChatOwner] || [];
    let html = '';
    msgs.forEach(m => {
        const isMe = m.from === 'me';
        html += '<div class="flex ' + (isMe ? 'justify-end' : 'justify-start') + ' chat-in">';
        html += '<div class="max-w-[75%] ' + (isMe ? 'bg-primary text-white' : 'bg-white text-dark') + ' rounded-2xl px-4 py-2 shadow-sm">';
        html += '<p class="text-sm">' + m.text + '</p>';
        html += '<p class="text-[9px] mt-1 ' + (isMe ? 'text-blue-100' : 'text-gray-400') + '">' + m.time + '</p>';
        html += '</div></div>';
    });
    const c = document.getElementById('chatMessages');
    c.innerHTML = html;
    c.scrollTop = c.scrollHeight;
}
function sendChat() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;
    const msgs = chatHistory[currentChatOwner] || [];
    const now = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
    msgs.push({ from: 'me', text, time: now });
    input.value = '';
    chatHistory[currentChatOwner] = msgs;
    save(); renderChatMessages();
    setTimeout(() => {
        const replies = ['Baik, siap!', 'Terima kasih infonya 🙏', 'Boleh, silakan datang ya!', 'Oke, saya catat.', 'Baik kak, ditunggu!'];
        const reply = replies[Math.floor(Math.random() * replies.length)];
        msgs.push({ from: 'them', text: reply, time: now });
        save(); renderChatMessages();
    }, 1000);
}
function closeChat() {
    document.getElementById('chatModal').classList.add('hidden');
    document.getElementById('chatModal').classList.remove('flex');
}
function openCheckout() {
    const date = document.getElementById('bookingDate').value;
    const qty = parseInt(document.getElementById('qtyInput').value);
    if (!date) return showToast('Pilih tanggal dulu', 'error');
    if (qty < 1) return showToast('Minimal 1 orang', 'error');
    bookingData = { spot: selectedSpot, date, qty, total: selectedSpot.price * qty, pointsUsed: 0, finalTotal: selectedSpot.price * qty };
    const fmtDate = new Date(date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
    document.getElementById('checkoutDetails').innerHTML = `
        <div class="flex justify-between mb-1"><span>Spot</span><span class="font-semibold text-dark">${selectedSpot.name}</span></div>
        <div class="flex justify-between mb-1"><span>Tanggal</span><span class="font-semibold text-dark">${fmtDate}</span></div>
        <div class="flex justify-between mb-1"><span>Jumlah</span><span class="font-semibold text-dark">${qty} Orang</span></div>
        <div class="flex justify-between border-t pt-2 mt-2"><span>Subtotal</span><span class="font-bold text-primary">Rp ${bookingData.total.toLocaleString('id-ID')}</span></div>
    `;
    document.getElementById('pointsAvail').innerText = currentUser.points.toLocaleString('id-ID') + ' Poin';
    document.getElementById('usePoints').checked = false;
    document.getElementById('checkoutTotal').innerText = 'Rp ' + bookingData.total.toLocaleString('id-ID');
    closeDetail();
    document.getElementById('checkoutModal').classList.remove('hidden');
    document.getElementById('checkoutModal').classList.add('flex');
}
function updateCheckoutTotal() {
    if (!bookingData.total) return;
    const usePts = document.getElementById('usePoints').checked;
    let total = bookingData.total;
    let used = 0;
    if (usePts && currentUser.points >= 100) {
        const maxPts = Math.min(currentUser.points, Math.floor(total / 10000) * 100);
        used = maxPts;
        total -= (maxPts / 100) * 10000;
    }
    bookingData.pointsUsed = used;
    bookingData.finalTotal = total;
    document.getElementById('checkoutTotal').innerText = 'Rp ' + total.toLocaleString('id-ID');
}
function closeCheckout() {
    document.getElementById('checkoutModal').classList.add('hidden');
    document.getElementById('checkoutModal').classList.remove('flex');
}
function processPayment() {
    const btn = document.getElementById('payBtn');
    btn.innerHTML = 'Memproses...';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = 'Bayar Sekarang';
        btn.disabled = false;
        closeCheckout();
        const finalTotal = bookingData.finalTotal || bookingData.total;
        const fmtDate = new Date(bookingData.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
        const newTicket = {
            id: 'TKT-' + String(Date.now()).slice(-6),
            spotName: bookingData.spot.name, spotId: bookingData.spot.id,
            date: fmtDate, qty: bookingData.qty, total: finalTotal,
            status: "Aktif", image: bookingData.spot.image,
            imageFallback: bookingData.spot.imageFallback, reviewed: false
        };
        userTickets.unshift(newTicket);
        const spotRef = spots.find(s => s.id === bookingData.spot.id);
        if (spotRef) spotRef.slots = Math.max(0, spotRef.slots - bookingData.qty);
        if (currentUser) {
            if (bookingData.pointsUsed > 0) currentUser.points -= bookingData.pointsUsed;
            currentUser.points += Math.floor(bookingData.total / 1000);
        }
        notifications.unshift({ id: Date.now(), title: "Booking Berhasil", msg: "Tiket " + bookingData.spot.name + " aktif", time: "Baru saja", read: false });
        ownerBookings.unshift({ id: 'B-' + Date.now(), customer: currentUser.name, spot: bookingData.spot.name, date: fmtDate, qty: bookingData.qty, total: finalTotal, status: "Pending" });
        checkAchievements(); save(); updateNotifBadge();
        document.getElementById('ticketDetails').innerHTML = `
            <div class="flex justify-between mb-1"><span>ID</span><span class="font-semibold text-dark">${newTicket.id}</span></div>
            <div class="flex justify-between mb-1"><span>Spot</span><span class="font-semibold text-dark">${newTicket.spotName}</span></div>
            <div class="flex justify-between mb-1"><span>Tanggal</span><span class="font-semibold text-dark">${newTicket.date}</span></div>
            <div class="flex justify-between mb-1"><span>Jumlah</span><span class="font-semibold text-dark">${newTicket.qty} Orang</span></div>
            <div class="flex justify-between border-t pt-2 mt-2"><span>Total</span><span class="font-bold text-primary">Rp ${newTicket.total.toLocaleString('id-ID')}</span></div>
            <div class="mt-4 pt-4 border-t text-center">
                <div class="w-24 h-24 bg-gray-100 rounded-xl mx-auto flex items-center justify-center">
                    <svg class="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h6v6H3V3zm2 2v2h2V5H5zm8-2h6v6h-6V3zm2 2v2h2V5h-2zM3 15h6v6H3v-6zm2 2v2h2v-2H5zm10-2h4v2h-2v2h2v2h-4v-2h-2v2h-2v-4h2v-2h2v-2h2v2h2v2h-2v2h-2v-2h-2v-2z"/></svg>
                </div>
                <p class="text-[10px] text-gray-400 mt-2">QR Code</p>
            </div>
        `;
        document.getElementById('successModal').classList.remove('hidden');
        document.getElementById('successModal').classList.add('flex');
    }, 1200);
}
function closeSuccess(toHome) {
    document.getElementById('successModal').classList.add('hidden');
    document.getElementById('successModal').classList.remove('flex');
    if (toHome) switchTab('home');
    else openTicketsPage();
}
function openReviewFor(index) {
    reviewIndex = index; tempRating = 5; updateStars();
    document.getElementById('reviewText').value = '';
    document.getElementById('reviewModal').classList.remove('hidden');
    document.getElementById('reviewModal').classList.add('flex');
}
function closeReview() {
    document.getElementById('reviewModal').classList.add('hidden');
    document.getElementById('reviewModal').classList.remove('flex');
}
function setRating(n) { tempRating = n; updateStars(); }
function updateStars() {
    document.querySelectorAll('#starRating button').forEach((btn, i) => btn.style.color = i < tempRating ? '#f59e0b' : '#d1d5db');
}
function submitReview() {
    if (!currentUser) { closeReview(); return openAuth(); }
    if (reviewIndex >= 0) {
        userTickets[reviewIndex].reviewed = true;
        const s = spots.find(sp => sp.id === userTickets[reviewIndex].spotId);
        if (s) { s.rating = parseFloat(((s.rating * s.reviews + tempRating) / (s.reviews + 1)).toFixed(1)); s.reviews += 1; }
        if (currentUser) currentUser.points += 50;
    }
    checkAchievements(); save(); closeReview();
    showToast('Review ' + tempRating + '★ terkirim! +50 poin');
    renderTicketsPage();
}
function openNotifications() {
    if (!currentUser) return openAuth();
    const modal = document.getElementById('notifModal');
    let notifHtml = '';
    if (notifications.length === 0) notifHtml = '<p class="text-center text-gray-400 text-sm py-10">Tidak ada notifikasi</p>';
    else notifications.forEach(n => {
        notifHtml += '<div class="p-3 rounded-xl border ' + (n.read ? 'border-gray-100 bg-white' : 'border-blue-100 bg-blue-50') + '">';
        notifHtml += '<div class="flex justify-between items-start mb-1"><h4 class="font-bold text-sm ' + (n.read ? 'text-dark' : 'text-primary') + '">' + n.title + '</h4>';
        if (!n.read) notifHtml += '<span class="w-2 h-2 bg-primary rounded-full"></span>';
        notifHtml += '</div><p class="text-xs text-gray-600">' + n.msg + '</p>';
        notifHtml += '<p class="text-[10px] text-gray-400 mt-1">' + n.time + '</p></div>';
    });
    document.getElementById('notifContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">Notifikasi</h3>
            <div class="flex gap-2">
                <button onclick="markAllRead()" class="text-xs text-primary font-semibold">Tandai Semua</button>
                <button onclick="closeNotif()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
            </div>
        </div>
        <div class="space-y-3">${notifHtml}</div>
    `;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}
function markAllRead() {
    notifications.forEach(n => n.read = true);
    save(); updateNotifBadge(); openNotifications();
    showToast('Semua dibaca', 'info');
}
function updateNotifBadge() {
    const unread = notifications.filter(n => !n.read).length;
    const b = document.getElementById('notifBadge');
    if (!b) return;
    if (unread > 0) { b.textContent = unread; b.style.display = 'flex'; }
    else b.style.display = 'none';
}
function closeNotif() {
    const m = document.getElementById('notifModal');
    m.classList.remove('show');
    setTimeout(() => m.classList.add('hidden'), 300);
}
function openEditProfile() {
    document.getElementById('editName').value = currentUser.name;
    document.getElementById('editEmail').value = currentUser.email;
    document.getElementById('editBio').value = currentUser.bio || '';
    document.getElementById('editProfileModal').classList.remove('hidden');
    document.getElementById('editProfileModal').classList.add('flex');
}
function closeEditProfile() {
    document.getElementById('editProfileModal').classList.add('hidden');
    document.getElementById('editProfileModal').classList.remove('flex');
}
function saveProfile() {
    currentUser.name = document.getElementById('editName').value;
    currentUser.email = document.getElementById('editEmail').value;
    currentUser.bio = document.getElementById('editBio').value;
    save(); closeEditProfile();
    showToast('Profil diperbarui');
    renderProfile(document.getElementById('app-content'));
}
function openPassword() {
    document.getElementById('oldPass').value = '';
    document.getElementById('newPass').value = '';
    document.getElementById('passwordModal').classList.remove('hidden');
    document.getElementById('passwordModal').classList.add('flex');
}
function closePassword() {
    document.getElementById('passwordModal').classList.add('hidden');
    document.getElementById('passwordModal').classList.remove('flex');
}
function savePassword() {
    const o = document.getElementById('oldPass').value, n = document.getElementById('newPass').value;
    if (!o || !n) return showToast('Semua field harus diisi', 'error');
    if (n.length < 6) return showToast('Minimal 6 karakter', 'error');
    closePassword();
    showToast('Password diubah');
}
function showHistory() {
    const total = userTickets.length;
    const spent = userTickets.filter(t => t.status !== 'Dibatalkan').reduce((s, t) => s + t.total, 0);
    alert('📜 Riwayat\n\nTotal Transaksi: ' + total + '\nTotal Belanja: Rp ' + spent.toLocaleString('id-ID') + '\nPoin: ' + currentUser.points.toLocaleString('id-ID'));
}
function openLoyalty() {
    const tiers = [
        { name: "Bronze", min: 0, max: 1999, benefit: "Bonus 100 poin per booking", color: "text-orange-700" },
        { name: "Silver", min: 2000, max: 4999, benefit: "Diskon 5% setiap booking", color: "text-gray-700" },
        { name: "Gold", min: 5000, max: 999999, benefit: "Diskon 10% + Priority booking", color: "text-yellow-700" }
    ];
    let tiersHtml = '';
    tiers.forEach(t => {
        const isCurrent = currentUser.points >= t.min && currentUser.points <= t.max;
        tiersHtml += '<div class="p-3 rounded-xl border ' + (isCurrent ? 'border-primary bg-blue-50' : 'border-gray-100') + '">';
        tiersHtml += '<div class="flex justify-between items-center"><span class="text-sm font-bold ' + t.color + '">' + t.name + '</span><span class="text-[10px] text-gray-500">' + t.min.toLocaleString() + '+</span></div>';
        tiersHtml += '<p class="text-[10px] text-gray-500 mt-1">' + t.benefit + '</p></div>';
    });
    document.getElementById('loyaltyContent').innerHTML = `
        <div class="text-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-3xl">🏆</div>
            <p class="text-3xl font-bold text-primary">${currentUser.points.toLocaleString('id-ID')}</p>
            <p class="text-xs text-gray-500">Total Poin</p>
        </div>
        <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-4">
            <p class="text-xs font-bold mb-1">💡 Cara Pakai Poin</p>
            <p class="text-xs text-gray-600">100 poin = Rp 10.000 diskon</p>
        </div>
        <h4 class="font-bold text-sm mb-2">Cara Dapat Poin</h4>
        <ul class="text-xs text-gray-600 space-y-1 mb-4 list-disc pl-5">
            <li>Booking: +50 poin per Rp 50.000</li>
            <li>Review: +50 poin</li>
            <li>Ajak teman: +200 poin</li>
            <li>Ikut event: +500 poin</li>
            <li>Catat tangkapan: +100 poin</li>
        </ul>
        <h4 class="font-bold text-sm mb-2">Tier Membership</h4>
        <div class="space-y-2">${tiersHtml}</div>
    `;
    document.getElementById('loyaltyModal').classList.remove('hidden');
    document.getElementById('loyaltyModal').classList.add('flex');
}
function closeLoyalty() {
    document.getElementById('loyaltyModal').classList.add('hidden');
    document.getElementById('loyaltyModal').classList.remove('flex');
}
function showMerch() {
    let html = '<div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>';
    html += '<div class="flex justify-between items-center mb-4"><h3 class="text-lg font-bold">Merchandise</h3>';
    html += '<button onclick="closeNotif()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>';
    html += '<div class="grid grid-cols-2 gap-3">';
    MERCHANDISE.forEach(m => {
        html += '<div class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">';
        html += imgTag(m.image, m.imageFallback, m.name, "w-full h-32 object-cover");
        html += '<div class="p-3"><h4 class="text-xs font-bold mb-1">' + m.name + '</h4>';
        html += '<p class="text-sm font-bold text-primary mb-2">Rp ' + m.price.toLocaleString('id-ID') + '</p>';
        html += '<p class="text-[10px] text-gray-400 mb-2">Stok: ' + m.stock + '</p>';
        html += '<button onclick="buyMerch(' + m.id + ')" class="w-full bg-primary text-white py-1.5 rounded-lg text-xs font-bold">Beli</button>';
        html += '</div></div>';
    });
    html += '</div>';
    document.getElementById('notifContent').innerHTML = html;
    document.getElementById('notifModal').classList.remove('hidden');
    setTimeout(() => document.getElementById('notifModal').classList.add('show'), 10);
}
function buyMerch(id) {
    const m = MERCHANDISE.find(x => x.id === id);
    if (!m) return;
    if (m.stock <= 0) return showToast('Stok habis', 'error');
    m.stock--;
    showToast(m.name + ' ditambahkan ke keranjang!');
    showMerch();
}

// ==========================================
// OWNER DASHBOARD (dengan tombol Tambah Spot)
// ==========================================
function openOwnerDashboard() {
    const mySpots = spots.filter(s => s.ownerId === "owner1");
    const mySpot = mySpots[0] || spots[0];
    const revenue = ownerBookings.filter(b => b.status === 'Confirmed').reduce((s, b) => s + b.total, 0);
    const platformFee = revenue * 0.08;
    const netRevenue = revenue - platformFee;
    const confirmed = ownerBookings.filter(b => b.status === 'Confirmed').length;
    const pending = ownerBookings.filter(b => b.status === 'Pending').length;
    
    let bookingsHtml = '';
    ownerBookings.forEach((b, i) => {
        const statusCls = b.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
        const btn = b.status === 'Pending' ? '<button onclick="confirmBooking(' + i + ')" class="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded">Konfirmasi</button>' : '';
        bookingsHtml += '<div class="bg-white border border-gray-100 rounded-xl p-3">';
        bookingsHtml += '<div class="flex justify-between items-center mb-1"><p class="text-xs font-bold">' + b.customer + '</p><span class="text-[9px] ' + statusCls + ' px-2 py-0.5 rounded font-bold">' + b.status + '</span></div>';
        bookingsHtml += '<p class="text-[10px] text-gray-500">' + b.date + ' • ' + b.qty + ' orang</p>';
        bookingsHtml += '<div class="flex justify-between items-center mt-2"><p class="text-xs font-bold text-primary">Rp ' + b.total.toLocaleString('id-ID') + '</p>' + btn + '</div></div>';
    });
    
    let mySpotsHtml = '';
    mySpots.forEach(s => {
        mySpotsHtml += '<div class="bg-white border border-gray-100 rounded-xl p-3 flex items-center mb-2">';
        mySpotsHtml += imgTag(s.image, s.imageFallback, s.name, "w-12 h-12 object-cover rounded-lg mr-3");
        mySpotsHtml += '<div class="flex-1"><p class="text-xs font-bold">' + s.name + '</p>';
        mySpotsHtml += '<p class="text-[10px] text-gray-500">' + s.city + ' • Rp ' + s.price.toLocaleString('id-ID') + '</p></div>';
        mySpotsHtml += '<button onclick="managePrice(' + s.id + ')" class="text-primary text-xs">✏️</button>';
        mySpotsHtml += '</div>';
    });

    document.getElementById('ownerSpotContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">Dashboard Pemilik</h3>
            <button onclick="closeOwner()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        <div class="bg-dark rounded-2xl p-4 text-white mb-4">
            <p class="text-xs text-gray-300">Kelola: ${mySpots.length} spot</p>
            <div class="grid grid-cols-2 gap-3 mt-3">
                <div class="bg-white bg-opacity-10 p-3 rounded-xl"><p class="text-[10px] text-gray-300">Pendapatan</p><p class="text-base font-bold text-green-400">Rp ${netRevenue.toLocaleString('id-ID')}</p></div>
                <div class="bg-white bg-opacity-10 p-3 rounded-xl"><p class="text-[10px] text-gray-300">Booking</p><p class="text-base font-bold text-accent">${ownerBookings.length}</p></div>
                <div class="bg-white bg-opacity-10 p-3 rounded-xl"><p class="text-[10px] text-gray-300">Confirmed</p><p class="text-base font-bold">${confirmed}</p></div>
                <div class="bg-white bg-opacity-10 p-3 rounded-xl"><p class="text-[10px] text-gray-300">Pending</p><p class="text-base font-bold text-yellow-300">${pending}</p></div>
            </div>
        </div>
        
        <button onclick="openAddSpot()" class="w-full bg-gradient-to-r from-secondary to-green-400 text-white py-3 rounded-xl font-bold shadow-lg mb-4 flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            Tambah Spot Pemancingan Baru
        </button>
        
        <h4 class="font-bold text-sm mb-2">Spot Saya</h4>
        <div class="mb-4">${mySpotsHtml || '<p class="text-xs text-gray-400 text-center py-3">Belum ada spot</p>'}</div>
        
        <h4 class="font-bold text-sm mb-2">Pengelolaan</h4>
        <div class="space-y-2 mb-4">
            <button onclick="managePrice(${mySpot.id})" class="w-full bg-white border border-gray-100 p-3 rounded-xl flex items-center justify-between text-left">
                <div class="flex items-center gap-3"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">💰</div><div><p class="text-xs font-bold">Atur Harga</p><p class="text-[10px] text-gray-500">Rp ${mySpot.price.toLocaleString('id-ID')}</p></div></div><span class="text-gray-400">›</span>
            </button>
            <button onclick="togglePremium(${mySpot.id})" class="w-full bg-white border border-gray-100 p-3 rounded-xl flex items-center justify-between text-left">
                <div class="flex items-center gap-3"><div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">⭐</div><div><p class="text-xs font-bold">Premium Listing</p><p class="text-[10px] text-gray-500">${mySpot.premium ? 'Aktif' : 'Rp 100rb/bulan'}</p></div></div>
                <div class="w-10 h-5 ${mySpot.premium ? 'bg-primary' : 'bg-gray-300'} rounded-full relative"><div class="w-4 h-4 bg-white rounded-full absolute top-0.5 ${mySpot.premium ? 'right-0.5' : 'left-0.5'}"></div></div>
            </button>
            <button onclick="showStats()" class="w-full bg-white border border-gray-100 p-3 rounded-xl flex items-center justify-between text-left">
                <div class="flex items-center gap-3"><div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">📊</div><div><p class="text-xs font-bold">Statistik</p><p class="text-[10px] text-gray-500">Laporan</p></div></div><span class="text-gray-400">›</span>
            </button>
            <button onclick="showPromo()" class="w-full bg-white border border-gray-100 p-3 rounded-xl flex items-center justify-between text-left">
                <div class="flex items-center gap-3"><div class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">🎁</div><div><p class="text-xs font-bold">Promosi</p><p class="text-[10px] text-gray-500">Buat promo</p></div></div><span class="text-gray-400">›</span>
            </button>
        </div>
        <h4 class="font-bold text-sm mb-2">Booking Terbaru</h4>
        <div class="space-y-2">${bookingsHtml}</div>
    `;
    document.getElementById('ownerSpotModal').classList.remove('hidden');
    setTimeout(() => document.getElementById('ownerSpotModal').classList.add('show'), 10);
}
function closeOwner() {
    const m = document.getElementById('ownerSpotModal');
    m.classList.remove('show');
    setTimeout(() => m.classList.add('hidden'), 300);
}
function confirmBooking(i) {
    ownerBookings[i].status = 'Confirmed';
    save(); showToast('Booking ' + ownerBookings[i].customer + ' dikonfirmasi');
    closeOwner();
    setTimeout(() => openOwnerDashboard(), 400);
}
function managePrice(spotId) {
    const s = spots.find(x => x.id === spotId);
    if (!s) return;
    const newPrice = prompt('Harga saat ini: Rp ' + s.price.toLocaleString('id-ID') + '\nHarga baru:', s.price);
    if (newPrice && !isNaN(newPrice) && parseInt(newPrice) > 0) {
        s.price = parseInt(newPrice);
        showToast('Harga diubah!');
        save();
        closeOwner();
        setTimeout(() => openOwnerDashboard(), 400);
    }
}
function togglePremium(spotId) {
    const s = spots.find(x => x.id === spotId);
    if (!s) return;
    s.premium = !s.premium;
    save();
    showToast(s.premium ? 'Premium aktif!' : 'Premium nonaktif', s.premium ? 'success' : 'info');
    closeOwner();
    setTimeout(() => openOwnerDashboard(), 400);
}
function showStats() {
    const revenue = ownerBookings.filter(b => b.status === 'Confirmed').reduce((s, b) => s + b.total, 0);
    alert('📊 Statistik\n\nTotal Booking: ' + ownerBookings.length + '\nPendapatan Kotor: Rp ' + revenue.toLocaleString('id-ID') + '\nKomisi (8%): Rp ' + (revenue * 0.08).toLocaleString('id-ID') + '\nBersih: Rp ' + (revenue * 0.92).toLocaleString('id-ID'));
}
function showPromo() {
    const promo = prompt('Buat promo baru:');
    if (promo) showToast('Promo "' + promo + '" dibuat!');
}

// ==========================================
// ADD SPOT (Owner)
// ==========================================
function openAddSpot() {
    closeOwner();
    const content = document.getElementById('addSpotContent');
    content.innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">Tambah Spot Baru</h3>
            <button onclick="closeAddSpot()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        <div class="mb-3">
            <label class="block text-xs font-medium text-gray-500 mb-1">Nama Spot</label>
            <input type="text" id="newSpotName" placeholder="Contoh: Pemancingan Barokah" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-3">
            <label class="block text-xs font-medium text-gray-500 mb-1">Kota</label>
            <input type="text" id="newSpotCity" placeholder="Contoh: Bekasi" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-3">
            <label class="block text-xs font-medium text-gray-500 mb-1">Jenis Ikan (pisahkan dengan koma)</label>
            <input type="text" id="newSpotFish" placeholder="Lele, Nila, Gurame" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-3">
            <label class="block text-xs font-medium text-gray-500 mb-1">Harga per Orang</label>
            <input type="number" id="newSpotPrice" placeholder="50000" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-3">
            <label class="block text-xs font-medium text-gray-500 mb-1">Jumlah Slot</label>
            <input type="number" id="newSpotSlots" placeholder="20" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-3">
            <label class="block text-xs font-medium text-gray-500 mb-1">Jam Operasional</label>
            <input type="text" id="newSpotOpen" placeholder="06:00 - 22:00" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-3">
            <label class="block text-xs font-medium text-gray-500 mb-1">Fasilitas (pisahkan dengan koma)</label>
            <input type="text" id="newSpotFacilities" placeholder="Saung, Parkir, Kantin" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="mb-3">
            <label class="block text-xs font-medium text-gray-500 mb-1">Deskripsi</label>
            <textarea id="newSpotDesc" rows="2" placeholder="Deskripsi singkat" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary"></textarea>
        </div>
        <div class="grid grid-cols-2 gap-2 mb-3">
            <div>
                <label class="block text-xs font-medium text-gray-500 mb-1">Latitude</label>
                <input type="number" id="newSpotLat" step="0.0001" value="-6.2000" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary">
            </div>
            <div>
                <label class="block text-xs font-medium text-gray-500 mb-1">Longitude</label>
                <input type="number" id="newSpotLng" step="0.0001" value="106.8166" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary">
            </div>
        </div>
        <div class="mb-5">
            <label class="block text-xs font-medium text-gray-500 mb-1">Gambar URL (opsional)</label>
            <input type="text" id="newSpotImage" placeholder="https://..." class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-primary">
        </div>
        <div class="flex space-x-2">
            <button onclick="closeAddSpot()" class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold">Batal</button>
            <button onclick="saveNewSpot()" class="flex-1 bg-secondary text-white py-3 rounded-xl font-bold">Simpan Spot</button>
        </div>
    `;
    const modal = document.getElementById('addSpotModal');
    modal.classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('addSpotContent').style.transform = 'translateY(0)';
    }, 10);
}
function closeAddSpot() {
    const modal = document.getElementById('addSpotModal');
    const content = document.getElementById('addSpotContent');
    content.style.transform = 'translateY(100%)';
    setTimeout(() => {
        modal.classList.add('hidden');
        content.style.transform = '';
    }, 300);
}
function saveNewSpot() {
    const name = document.getElementById('newSpotName').value.trim();
    const city = document.getElementById('newSpotCity').value.trim();
    const fish = document.getElementById('newSpotFish').value.trim() || 'Lele';
    const price = parseInt(document.getElementById('newSpotPrice').value);
    const slots = parseInt(document.getElementById('newSpotSlots').value) || 20;
    const open = document.getElementById('newSpotOpen').value.trim() || '06:00 - 22:00';
    const facilities = document.getElementById('newSpotFacilities').value.split(',').map(x => x.trim()).filter(x => x);
    const desc = document.getElementById('newSpotDesc').value.trim() || 'Pemancingan baru di MancingYuk!';
    const lat = parseFloat(document.getElementById('newSpotLat').value) || -6.2;
    const lng = parseFloat(document.getElementById('newSpotLng').value) || 106.8166;
    const img = document.getElementById('newSpotImage').value.trim();
    
    if (!name || !city || !price) {
        showToast('Nama, kota, dan harga wajib diisi', 'error');
        return;
    }
    
    const newId = Math.max(...spots.map(s => s.id)) + 1;
    const newSpot = {
        id: newId, name, location: fish, city, price,
        rating: 5.0, reviews: 0, slots,
        image: img || getImgLocal('spots', ((newId - 1) % 6) + 1),
        imageFallback: img || getImgFallback('spots', ((newId - 1) % 6) + 1),
        facilities: facilities.length > 0 ? facilities : ["Parkir", "Toilet"],
        description: desc, owner: currentUser ? currentUser.name : "Owner",
        ownerId: "owner1", premium: false, distance: 5.0, open,
        lat, lng
    };
    spots.push(newSpot);
    save();
    closeAddSpot();
    showToast('Spot "' + name + '" berhasil ditambahkan!');
    setTimeout(() => openOwnerDashboard(), 400);
}

// ==========================================
// ADMIN DASHBOARD
// ==========================================
function renderAdminDashboard(container) {
    const totalRevenue = ownerBookings.filter(b => b.status === 'Confirmed').reduce((s, b) => s + b.total, 0);
    const platformRevenue = totalRevenue * 0.08;
    const totalUsers = registeredUsers.length;
    const totalSpots = spots.length;
    const totalBookings = ownerBookings.length;
    const totalOwners = registeredUsers.filter(u => u.type === 'owner').length;
    const totalPemancing = registeredUsers.filter(u => u.type === 'pemancing').length;
    
    container.innerHTML = `
        <div class="px-5 pt-4 pb-4 bg-dark text-white rounded-b-3xl">
            <div class="flex items-center gap-3 mb-3">
                <div class="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-2xl">👑</div>
                <div>
                    <p class="text-xs text-gray-400">Selamat datang,</p>
                    <h2 class="text-lg font-bold">${currentUser ? currentUser.name : 'Admin'}</h2>
                </div>
            </div>
            <p class="text-xs text-gray-400">Kelola seluruh platform MancingYuk!</p>
        </div>

        <div class="px-5 mt-4">
            <h3 class="font-bold text-dark mb-3">📊 Statistik Platform</h3>
            <div class="grid grid-cols-2 gap-3">
                <div class="bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-4 text-white shadow-lg">
                    <p class="text-[10px] opacity-80">Total Pendapatan</p>
                    <p class="text-xl font-bold mt-1">Rp ${platformRevenue.toLocaleString('id-ID')}</p>
                    <p class="text-[9px] opacity-80 mt-1">Komisi 8% dari platform</p>
                </div>
                <div class="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-4 text-white shadow-lg">
                    <p class="text-[10px] opacity-80">Transaksi Bruto</p>
                    <p class="text-xl font-bold mt-1">Rp ${totalRevenue.toLocaleString('id-ID')}</p>
                    <p class="text-[9px] opacity-80 mt-1">${totalBookings} booking</p>
                </div>
            </div>
            <div class="grid grid-cols-3 gap-2 mt-3">
                <div class="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm">
                    <p class="text-[10px] text-gray-500">Users</p>
                    <p class="text-lg font-bold text-primary">${totalUsers}</p>
                </div>
                <div class="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm">
                    <p class="text-[10px] text-gray-500">Spots</p>
                    <p class="text-lg font-bold text-secondary">${totalSpots}</p>
                </div>
                <div class="bg-white rounded-xl p-3 text-center border border-gray-100 shadow-sm">
                    <p class="text-[10px] text-gray-500">Owners</p>
                    <p class="text-lg font-bold text-accent">${totalOwners}</p>
                </div>
            </div>
        </div>

        <div class="px-5 mt-4">
            <h3 class="font-bold text-dark mb-3">📈 Aktivitas</h3>
            <div class="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
                <div class="p-3 flex justify-between">
                    <span class="text-xs text-gray-600">Total Pemancing</span>
                    <span class="text-xs font-bold text-dark">${totalPemancing}</span>
                </div>
                <div class="p-3 flex justify-between">
                    <span class="text-xs text-gray-600">Booking Pending</span>
                    <span class="text-xs font-bold text-yellow-600">${ownerBookings.filter(b => b.status === 'Pending').length}</span>
                </div>
                <div class="p-3 flex justify-between">
                    <span class="text-xs text-gray-600">Booking Confirmed</span>
                    <span class="text-xs font-bold text-green-600">${ownerBookings.filter(b => b.status === 'Confirmed').length}</span>
                </div>
                <div class="p-3 flex justify-between">
                    <span class="text-xs text-gray-600">Tiket Aktif</span>
                    <span class="text-xs font-bold text-blue-600">${userTickets.filter(t => t.status === 'Aktif').length}</span>
                </div>
            </div>
        </div>

        <div class="px-5 mt-4 pb-4">
            <h3 class="font-bold text-dark mb-3">⚡ Aksi Cepat</h3>
            <div class="grid grid-cols-2 gap-2">
                <button onclick="switchTab('admin-spots')" class="bg-white border border-gray-100 p-3 rounded-xl flex items-center gap-2 text-left shadow-sm">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">📍</div>
                    <div><p class="text-xs font-bold">Kelola Spot</p><p class="text-[9px] text-gray-500">${totalSpots} spot</p></div>
                </button>
                <button onclick="switchTab('admin-users')" class="bg-white border border-gray-100 p-3 rounded-xl flex items-center gap-2 text-left shadow-sm">
                    <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">👥</div>
                    <div><p class="text-xs font-bold">Kelola Users</p><p class="text-[9px] text-gray-500">${totalUsers} user</p></div>
                </button>
                <button onclick="switchTab('admin-bookings')" class="bg-white border border-gray-100 p-3 rounded-xl flex items-center gap-2 text-left shadow-sm">
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">📋</div>
                    <div><p class="text-xs font-bold">Booking</p><p class="text-[9px] text-gray-500">${totalBookings} transaksi</p></div>
                </button>
                <button onclick="openAbout()" class="bg-white border border-gray-100 p-3 rounded-xl flex items-center gap-2 text-left shadow-sm">
                    <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">ℹ️</div>
                    <div><p class="text-xs font-bold">Visi Misi</p><p class="text-[9px] text-gray-500">Tentang app</p></div>
                </button>
            </div>
        </div>
    `;
}

function renderAdminSpots(container) {
    let spotsHtml = '';
    spots.forEach(s => {
        spotsHtml += '<div class="bg-white border border-gray-100 rounded-2xl p-3 mb-3 shadow-sm">';
        spotsHtml += '<div class="flex gap-3">';
        spotsHtml += imgTag(s.image, s.imageFallback, s.name, "w-16 h-16 object-cover rounded-xl");
        spotsHtml += '<div class="flex-1 min-w-0">';
        spotsHtml += '<div class="flex items-center gap-1"><h4 class="text-sm font-bold text-dark truncate">' + s.name + '</h4>';
        if (s.premium) spotsHtml += '<span class="text-[9px] bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded font-bold">⭐</span>';
        spotsHtml += '</div>';
        spotsHtml += '<p class="text-[10px] text-gray-500">📍 ' + s.city + '</p>';
        spotsHtml += '<p class="text-[10px] text-gray-500">👤 ' + s.owner + '</p>';
        spotsHtml += '<p class="text-xs font-bold text-primary mt-1">Rp ' + s.price.toLocaleString('id-ID') + ' • ' + s.slots + ' slot</p>';
        spotsHtml += '</div></div>';
        spotsHtml += '<div class="flex gap-2 mt-3">';
        spotsHtml += '<button onclick="adminEditSpot(' + s.id + ')" class="flex-1 bg-blue-100 text-primary py-2 rounded-lg text-[10px] font-bold">Edit</button>';
        spotsHtml += '<button onclick="adminTogglePremium(' + s.id + ')" class="flex-1 bg-yellow-100 text-yellow-700 py-2 rounded-lg text-[10px] font-bold">' + (s.premium ? 'Un-Premium' : 'Premium') + '</button>';
        spotsHtml += '<button onclick="adminDeleteSpot(' + s.id + ')" class="flex-1 bg-red-100 text-red-600 py-2 rounded-lg text-[10px] font-bold">Hapus</button>';
        spotsHtml += '</div></div>';
    });
    
    container.innerHTML = `
        <div class="px-5 pt-4 pb-3 bg-white">
            <div class="flex justify-between items-center">
                <h2 class="text-lg font-bold">Kelola Spot</h2>
                <span class="text-xs text-gray-500">${spots.length} spot</span>
            </div>
        </div>
        <div class="px-5 mt-4 pb-4">${spotsHtml}</div>
    `;
}

function adminEditSpot(id) {
    const s = spots.find(x => x.id === id);
    if (!s) return;
    const newPrice = prompt('Edit harga spot "' + s.name + '":\nHarga saat ini: Rp ' + s.price.toLocaleString('id-ID'), s.price);
    if (newPrice && !isNaN(newPrice) && parseInt(newPrice) > 0) {
        s.price = parseInt(newPrice);
        save(); showToast('Harga diubah!');
        renderAdminSpots(document.getElementById('app-content'));
    }
}
function adminTogglePremium(id) {
    const s = spots.find(x => x.id === id);
    if (!s) return;
    s.premium = !s.premium;
    save();
    showToast(s.premium ? 'Premium aktif' : 'Premium nonaktif');
    renderAdminSpots(document.getElementById('app-content'));
}
function adminDeleteSpot(id) {
    if (!confirm('Yakin hapus spot ini?')) return;
    spots = spots.filter(s => s.id !== id);
    save();
    showToast('Spot dihapus', 'info');
    renderAdminSpots(document.getElementById('app-content'));
}

function renderAdminUsers(container) {
    let usersHtml = '';
    registeredUsers.forEach(u => {
        const typeColor = u.type === 'owner' ? 'purple' : u.type === 'admin' ? 'red' : 'blue';
        const typeLabel = u.type === 'owner' ? '🏪 Owner' : u.type === 'admin' ? '👑 Admin' : '🎣 Pemancing';
        usersHtml += '<div class="bg-white border border-gray-100 rounded-2xl p-3 mb-2 flex items-center shadow-sm">';
        usersHtml += '<img src="https://i.pravatar.cc/100?u=' + u.email + '" class="w-10 h-10 rounded-full mr-3" onerror="this.src=\'https://i.pravatar.cc/100\'">';
        usersHtml += '<div class="flex-1 min-w-0">';
        usersHtml += '<p class="text-xs font-bold text-dark truncate">' + u.name + '</p>';
        usersHtml += '<p class="text-[10px] text-gray-500 truncate">' + u.email + '</p>';
        usersHtml += '<div class="flex gap-1 mt-1"><span class="bg-' + typeColor + '-100 text-' + typeColor + '-700 text-[9px] px-1.5 py-0.5 rounded font-bold">' + typeLabel + '</span>';
        usersHtml += '<span class="text-[9px] text-gray-400">' + u.joinDate + '</span></div>';
        usersHtml += '</div></div>';
    });
    
    container.innerHTML = `
        <div class="px-5 pt-4 pb-3 bg-white">
            <div class="flex justify-between items-center">
                <h2 class="text-lg font-bold">Kelola Users</h2>
                <span class="text-xs text-gray-500">${registeredUsers.length} user</span>
            </div>
        </div>
        <div class="px-5 mt-4 pb-4">${usersHtml}</div>
    `;
}

function renderAdminBookings(container) {
    const total = ownerBookings.reduce((s, b) => s + b.total, 0);
    const platform = total * 0.08;
    
    let bookingsHtml = '';
    ownerBookings.forEach(b => {
        const statusCls = b.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
        bookingsHtml += '<div class="bg-white border border-gray-100 rounded-2xl p-3 mb-2 shadow-sm">';
        bookingsHtml += '<div class="flex justify-between items-center mb-1"><p class="text-xs font-bold text-dark">' + b.customer + '</p>';
        bookingsHtml += '<span class="text-[9px] ' + statusCls + ' px-2 py-0.5 rounded font-bold">' + b.status + '</span></div>';
        bookingsHtml += '<p class="text-[10px] text-gray-500">📍 ' + b.spot + '</p>';
        bookingsHtml += '<p class="text-[10px] text-gray-500">📅 ' + b.date + ' • ' + b.qty + ' orang</p>';
        bookingsHtml += '<div class="flex justify-between items-center mt-2 pt-2 border-t">';
        bookingsHtml += '<p class="text-xs font-bold text-primary">Rp ' + b.total.toLocaleString('id-ID') + '</p>';
        bookingsHtml += '<p class="text-[9px] text-gray-400">Komisi: Rp ' + (b.total * 0.08).toLocaleString('id-ID') + '</p>';
        bookingsHtml += '</div></div>';
    });
    
    container.innerHTML = `
        <div class="px-5 pt-4 pb-3 bg-white">
            <h2 class="text-lg font-bold mb-3">Kelola Booking</h2>
            <div class="grid grid-cols-2 gap-2">
                <div class="bg-blue-50 rounded-xl p-3">
                    <p class="text-[10px] text-gray-500">Total Transaksi</p>
                    <p class="text-base font-bold text-primary">Rp ${total.toLocaleString('id-ID')}</p>
                </div>
                <div class="bg-green-50 rounded-xl p-3">
                    <p class="text-[10px] text-gray-500">Komisi Platform</p>
                    <p class="text-base font-bold text-secondary">Rp ${platform.toLocaleString('id-ID')}</p>
                </div>
            </div>
        </div>
        <div class="px-5 mt-4 pb-4">${bookingsHtml || '<p class="text-center text-gray-400 text-sm py-10">Belum ada booking</p>'}</div>
    `;
}

// ==========================================
// ABOUT
// ==========================================
function openAbout() {
    document.getElementById('aboutModal').classList.remove('hidden');
    document.getElementById('aboutModal').classList.add('flex');
}
function closeAbout() {
    document.getElementById('aboutModal').classList.add('hidden');
    document.getElementById('aboutModal').classList.remove('flex');
}

// ==========================================
// INVITE
// ==========================================
function inviteFriend() {
    if (!currentUser) return openAuth();
    currentUser.points = (currentUser.points || 0) + 200;
    checkAchievements(); save();
    const text = 'Ayo mancing bareng di MancingYuk! 🎣\nhttps://mancingyuk.app/invite/' + (currentUser.name || 'user').replace(/\s/g, '').toLowerCase();
    if (navigator.share) navigator.share({ title: 'MancingYuk!', text }).catch(() => fallbackCopy(text));
    else fallbackCopy(text);
    showToast('Link terkirim! +200 poin');
}

function fallbackCopy(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast('Link tersalin!')).catch(() => showToast('Link: mancingyuk.app/invite', 'info'));
    } else showToast('Link: mancingyuk.app/invite', 'info');
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('MancingYuk! v3.0 loaded dengan Admin, Peta, Toko Partner, Multi-Role');
    try {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
            document.getElementById('darkBtn').textContent = '☀️';
        }
        updateNotifBadge();
        if (!onboardingDone) {
            document.getElementById('onboardingModal').classList.remove('hidden');
            document.getElementById('onboardingModal').classList.add('flex');
            renderOnboarding();
        } else if (!currentUser) {
            openAuth();
        } else {
            updateRoleUI();
            switchTab(currentUser.type === 'admin' ? 'admin-dashboard' : 'home');
        }
    } catch (err) {
        console.error('Init error:', err);
        document.getElementById('app-content').innerHTML = '<div class="p-5 text-red-500 text-sm">Init Error: ' + err.message + '</div>';
    }
});