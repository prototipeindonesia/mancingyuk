// ==========================================
// DATA
// ==========================================
const spots = [
    { id: 1, name: "Pemancingan Pak Budi", location: "Lele, Nila, Mas", city: "Jakarta Selatan", price: 50000, rating: 4.7, reviews: 120, slots: 20, image: "https://images.unsplash.com/photo-1594913251120-2c9c8a6b4e9f?auto=format&fit=crop&w=800&q=80", facilities: ["Saung", "Parkir Luas", "Kantin", "Sewa Alat", "Toilet Bersih"], description: "Pemancingan nyaman dengan suasana pedesaan. Cocok untuk keluarga dan pemancing pemula. Kolam terawat, ikan padat.", owner: "Pak Budi", premium: true, ownerId: "owner1" },
    { id: 2, name: "Kolam Mancing Sejahtera", location: "Gurame, Patin", city: "Depok", price: 75000, rating: 4.5, reviews: 85, slots: 15, image: "https://images.unsplash.com/photo-1582234472918-8331c77883c8?auto=format&fit=crop&w=800&q=80", facilities: ["AC Room", "Mushola", "WiFi", "Resto", "Kolam VIP"], description: "Pemancingan premium dengan fasilitas lengkap. Nikmati sensasi mancing gurame dan patin ukuran jumbo.", owner: "Haji Sejahtera", premium: true, ownerId: "owner2" },
    { id: 3, name: "Spot Alam Liar (Waduk)", location: "Bawal, Nila", city: "Bogor", price: 30000, rating: 4.8, reviews: 200, slots: 0, image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=800&q=80", facilities: ["Camping Ground", "Toilet Umum", "Warung Terapung"], description: "Mancing di alam terbuka langsung di waduk. Tantangan tersendiri dengan ikan bawal dan nila liar.", owner: "Kelompok Tani Waduk", premium: false, ownerId: "owner3" },
    { id: 4, name: "Mancing Mania Center", location: "Mas, Tombro", city: "Tangerang", price: 60000, rating: 4.6, reviews: 150, slots: 25, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80", facilities: ["Panggung", "Sewa Alat", "Kantin", "Lampu Sorot"], description: "Pemancingan malam dengan lampu sorot. Sensasi mancing malam yang seru dan menantang.", owner: "Bang Jago", premium: false, ownerId: "owner4" },
    { id: 5, name: "Pemancingan Ikan Hias", location: "Koi, Arwana", city: "Bandung", price: 100000, rating: 4.9, reviews: 60, slots: 10, image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80", facilities: ["Kolam Kaca", "AC", "Minuman Gratis", "Pemandu"], description: "Pengalaman mancing eksklusif untuk ikan hias. Fasilitas mewah dan pelayanan prima.", owner: "Dedi Koi", premium: true, ownerId: "owner5" },
    { id: 6, name: "Sungai Citarum Fishing", location: "Baung, Mujair", city: "Karawang", price: 25000, rating: 4.3, reviews: 45, slots: 30, image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=800&q=80", facilities: ["Area Piknik", "Mushola", "Toilet"], description: "Mancing di tepi sungai dengan pemandangan indah. Cocok untuk healing dan relaksasi.", owner: "Kang Ujang", premium: false, ownerId: "owner6" }
];

const eventsData = [
    { id: 1, title: "Turnamen Mancing Lele", spotId: 1, date: "15 Nov 2024", time: "06:00 - 12:00", fee: 50000, prize: "Rp 5.000.000", participants: 45, maxParticipants: 100, status: "upcoming", image: "https://images.unsplash.com/photo-1594913251120-2c9c8a6b4e9f?auto=format&fit=crop&w=800&q=80", desc: "Turnamen mancing lele dengan hadiah utama Rp 5 juta. Terbuka untuk umum." },
    { id: 2, title: "Lomba Mancing Gurame", spotId: 2, date: "20 Nov 2024", time: "07:00 - 14:00", fee: 75000, prize: "Rp 3.000.000", participants: 28, maxParticipants: 50, status: "upcoming", image: "https://images.unsplash.com/photo-1582234472918-8331c77883c8?auto=format&fit=crop&w=800&q=80", desc: "Lomba mancing gurame jumbo. Tersedia doorprize menarik untuk peserta." },
    { id: 3, title: "Fun Fishing Bersama", spotId: 4, date: "05 Nov 2024", time: "16:00 - 22:00", fee: 40000, prize: "Sertifikat + Merchandise", participants: 60, maxParticipants: 60, status: "ongoing", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80", desc: "Acara mancing santai bersama komunitas. Cocok untuk pemula." },
    { id: 4, title: "Mancing Charity 2024", spotId: 3, date: "10 Okt 2024", time: "08:00 - 15:00", fee: 35000, prize: "Donasi Sosial", participants: 80, maxParticipants: 80, status: "past", image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=800&q=80", desc: "Acara mancing amal, seluruh hasil disumbangkan ke panti asuhan." }
];

const communityPosts = [
    { id: 1, userId: "u1", user: "Rizky Pemancing", avatar: "https://i.pravatar.cc/150?u=rizky", time: "2 jam lalu", image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80", caption: "Strike 5 kali di Pemancingan Pak Budi! Ikan lele nya gede-gede 🎣", likes: 45, comments: 12, spot: "Pemancingan Pak Budi", liked: false, commentsList: [{ user: "Andi", text: "Mantap bro!" }, { user: "Budi", text: "Wah keren, besok ke sana ah" }] },
    { id: 2, userId: "u2", user: "Andi Fishing", avatar: "https://i.pravatar.cc/150?u=andi", time: "5 jam lalu", image: "https://images.unsplash.com/photo-1582234472918-8331c77883c8?auto=format&fit=crop&w=800&q=80", caption: "Gurame 3kg dari Kolam Mancing Sejahtera! Puas banget 🐟", likes: 78, comments: 25, spot: "Kolam Mancing Sejahtera", liked: true, commentsList: [] },
    { id: 3, userId: "u3", user: "Siti Angler", avatar: "https://i.pravatar.cc/150?u=siti", time: "1 hari lalu", image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=800&q=80", caption: "Suasana sore di Sungai Citarum, healing banget 🌅", likes: 120, comments: 34, spot: "Sungai Citarum Fishing", liked: false, commentsList: [] }
];

const partners = [
    { id: 1, name: "Toko Pancing Jaya", category: "Toko Alat", discount: "Diskon 15%", logo: "🎣", desc: "Alat pancing lengkap, joran, reel, umpan" },
    { id: 2, name: "Fishing Gear Pro", category: "Toko Alat", discount: "Cashback 10%", logo: "🪝", desc: "Brand premium, joran carbon, reel high-end" },
    { id: 3, name: "Umpan Segar Store", category: "Umpan & Aksesoris", discount: "Gratis Ongkir", logo: "🪱", desc: "Umpan segar harian, aksesoris mancing" },
    { id: 4, name: "Fishing Apparel", category: "Pakaian", discount: "Diskon 20%", discount_type: "", logo: "👕", desc: "Kaos, topi, jaket khusus pemancing" }
];

const merchandise = [
    { id: 1, name: "Kaos MancingYuk!", price: 85000, image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=400&q=80", stock: 50 },
    { id: 2, name: "Topi MancingYuk!", price: 65000, image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=400&q=80", stock: 30 },
    { id: 3, name: "Tumbler Fishing", price: 95000, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=400&q=80", stock: 20 }
];

// State
let currentUser = JSON.parse(localStorage.getItem('my_user')) || null;
let userTickets = JSON.parse(localStorage.getItem('my_tickets')) || [
    { id: "TKT-001", spotName: "Pemancingan Pak Budi", spotId: 1, date: "25 Okt 2023", qty: 2, total: 100000, status: "Selesai", image: "https://images.unsplash.com/photo-1594913251120-2c9c8a6b4e9f?auto=format&fit=crop&w=800&q=80", reviewed: false }
];
let notifications = JSON.parse(localStorage.getItem('my_notifs')) || [
    { id: 1, title: "Promo Spesial!", msg: "Diskon 10% untuk booking grup minggu ini", time: "2 jam lalu", read: false },
    { id: 2, title: "Booking Berhasil", msg: "Tiket Pemancingan Pak Budi telah aktif", time: "1 hari lalu", read: false },
    { id: 3, title: "Spot Baru!", msg: "Pemancingan Ikan Hias kini tersedia di Bandung", time: "3 hari lalu", read: true }
];
let userEvents = JSON.parse(localStorage.getItem('my_events')) || [];
let myPosts = JSON.parse(localStorage.getItem('my_posts')) || [];
let ownerBookings = JSON.parse(localStorage.getItem('owner_bookings')) || [
    { id: "B-001", customer: "Andi", spot: "Pemancingan Pak Budi", date: "15 Nov", qty: 2, total: 100000, status: "Confirmed" },
    { id: "B-002", customer: "Siti", spot: "Pemancingan Pak Budi", date: "16 Nov", qty: 3, total: 150000, status: "Confirmed" },
    { id: "B-003", customer: "Budi", spot: "Pemancingan Pak Budi", date: "17 Nov", qty: 1, total: 50000, status: "Pending" }
];

let selectedSpot = null;
let bookingData = {};
let tempRating = 5;
let currentSearchQuery = '';
let currentCategory = 'all';
let currentSort = 'rating';
let currentEventTab = 'upcoming';

function save() {
    if (currentUser) localStorage.setItem('my_user', JSON.stringify(currentUser));
    else localStorage.removeItem('my_user');
    localStorage.setItem('my_tickets', JSON.stringify(userTickets));
    localStorage.setItem('my_notifs', JSON.stringify(notifications));
    localStorage.setItem('my_events', JSON.stringify(userEvents));
    localStorage.setItem('my_posts', JSON.stringify(myPosts));
    localStorage.setItem('owner_bookings', JSON.stringify(ownerBookings));
}

// ==========================================
// TOAST
// ==========================================
function showToast(message, type = 'success') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    toast.innerHTML = `<span class="font-bold">${icon}</span><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.transition = 'opacity 0.3s, transform 0.3s';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(-20px)';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ==========================================
// AUTH
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
    const stored = JSON.parse(localStorage.getItem('registered_user'));
    if (stored && stored.email === email) currentUser = stored;
    else {
        currentUser = { name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Pemancing", email, avatar: "https://i.pravatar.cc/150?u=" + email, level: "Pemancing Aktif", points: 1250, bio: "Pecinta mancing sejati 🎣", joinDate: "Januari 2024", type: "pemancing" };
    }
    save();
    document.getElementById('authModal').classList.add('hidden');
    document.getElementById('authModal').classList.remove('flex');
    showToast(`Selamat datang, ${currentUser.name}!`);
    switchTab('home');
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const type = document.getElementById('signupType').value;
    currentUser = { name, email, type, avatar: "https://i.pravatar.cc/150?u=" + email, level: type === 'owner' ? "Pemilik Pemancingan" : "Pemancing Baru", points: 100, bio: "Baru bergabung di MancingYuk!", joinDate: new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) };
    localStorage.setItem('registered_user', JSON.stringify(currentUser));
    save();
    document.getElementById('authModal').classList.add('hidden');
    showToast(`Akun berhasil dibuat!`);
    switchTab('home');
}

function logout() {
    if (!confirm('Yakin ingin keluar?')) return;
    currentUser = null;
    save();
    openAuth();
    showToast('Anda telah keluar', 'info');
}

function openAuth() {
    const m = document.getElementById('authModal');
    m.classList.remove('hidden');
    m.classList.add('flex');
}

// ==========================================
// TAB
// ==========================================
function switchTab(tabName) {
    ['home', 'explore', 'events', 'community', 'profile'].forEach(tab => {
        const btn = document.getElementById(`nav-${tab}`);
        if (btn) {
            btn.className = "flex flex-col items-center text-gray-400";
            btn.querySelector('svg').setAttribute('fill', 'none');
            btn.querySelector('svg').setAttribute('stroke', 'currentColor');
        }
    });
    const activeBtn = document.getElementById(`nav-${tabName}`);
    if (activeBtn) {
        activeBtn.className = "flex flex-col items-center text-primary";
        activeBtn.querySelector('svg').setAttribute('fill', 'currentColor');
        activeBtn.querySelector('svg').removeAttribute('stroke');
    }
    const content = document.getElementById('app-content');
    if (tabName === 'home') renderHome(content);
    else if (tabName === 'explore') renderExplore(content);
    else if (tabName === 'events') renderEvents(content);
    else if (tabName === 'community') renderCommunity(content);
    else if (tabName === 'profile') renderProfile(content);
    content.scrollTop = 0;
}

// ==========================================
// HOME
// ==========================================
function renderHome(container) {
    const premiumSpots = spots.filter(s => s.premium).slice(0, 2);
    container.innerHTML = `
        <div class="px-5 pt-4 pb-2 bg-white rounded-b-3xl shadow-sm">
            <p class="text-sm text-gray-500 mb-3">Mau mancing di mana hari ini?</p>
            <div class="flex items-center bg-gray-100 rounded-2xl p-1 border border-gray-200">
                <svg class="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="text" id="searchInput" placeholder="Cari spot, jenis ikan..." value="${currentSearchQuery}" class="w-full px-3 py-3 bg-transparent text-sm focus:outline-none" oninput="handleSearch(this.value)">
                ${currentSearchQuery ? `<button onclick="clearSearch()" class="text-gray-400 pr-2">✕</button>` : ''}
            </div>
        </div>

        <div class="px-5 mt-4">
            <div class="bg-gradient-to-r from-primary to-blue-400 rounded-2xl p-4 text-white flex justify-between items-center shadow-lg relative overflow-hidden">
                <div class="relative z-10 w-2/3">
                    <h3 class="font-bold text-lg">Ajak Teman Mancing!</h3>
                    <p class="text-xs text-blue-100 mt-1">Diskon 10% untuk booking grup.</p>
                    <button onclick="inviteFriend()" class="mt-3 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full">Ajak Sekarang</button>
                </div>
                <svg class="w-20 h-20 text-white opacity-20 absolute -right-4 -bottom-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
        </div>

        <!-- Quick Actions -->
        <div class="grid grid-cols-4 gap-2 px-5 mt-4">
            <button onclick="switchTab('explore')" class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-xl mb-1">🎣</div>
                <span class="text-[10px] font-medium text-dark">Cari Spot</span>
            </button>
            <button onclick="switchTab('events')" class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-xl mb-1">🏆</div>
                <span class="text-[10px] font-medium text-dark">Turnamen</span>
            </button>
            <button onclick="switchTab('community')" class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl mb-1">👥</div>
                <span class="text-[10px] font-medium text-dark">Komunitas</span>
            </button>
            <button onclick="showPartners()" class="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center">
                <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-xl mb-1">🛒</div>
                <span class="text-[10px] font-medium text-dark">Toko</span>
            </button>
        </div>

        <!-- Premium Spots -->
        <div class="mt-6">
            <div class="flex justify-between items-center px-5 mb-3">
                <h2 class="font-bold text-dark flex items-center">⭐ Spot Premium</h2>
                <button onclick="switchTab('explore')" class="text-xs text-primary font-semibold">Lihat Semua</button>
            </div>
            <div class="flex overflow-x-auto space-x-3 px-5 pb-2 hide-scrollbar">
                ${premiumSpots.map(s => `
                    <div onclick="openDetail(${s.id})" class="min-w-[220px] bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        <div class="relative h-32">
                            <img src="${s.image}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x200?text=Spot'">
                            <div class="absolute top-2 left-2 bg-yellow-400 text-white text-[9px] font-bold px-2 py-0.5 rounded-full">⭐ PREMIUM</div>
                            <div class="absolute bottom-2 right-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold">★ ${s.rating}</div>
                        </div>
                        <div class="p-3">
                            <h3 class="text-sm font-bold text-dark truncate">${s.name}</h3>
                            <p class="text-[10px] text-gray-500 mb-2">${s.city}</p>
                            <p class="text-sm font-bold text-primary">Rp ${s.price.toLocaleString('id-ID')}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Cara Kerja -->
        <div class="mt-6">
            <div class="flex justify-between items-center px-5 mb-3">
                <h2 class="font-bold text-dark">Bagaimana Cara Kerjanya?</h2>
            </div>
            <div class="flex overflow-x-auto space-x-3 px-5 pb-2 hide-scrollbar">
                ${renderHowItWorks()}
            </div>
        </div>

        <!-- Event Banner -->
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

        <!-- Spot Populer -->
        <div class="mt-6 px-5">
            <div class="flex justify-between items-center mb-3">
                <h2 class="font-bold text-dark">Spot Populer</h2>
                <button onclick="switchTab('explore')" class="text-xs text-primary font-semibold">Lihat Semua</button>
            </div>
            <div id="spotContainer" class="space-y-4"></div>
        </div>
    `;
    renderSpots(getFilteredSpots().slice(0, 4));
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
    return filtered;
}

// ==========================================
// EXPLORE
// ==========================================
function renderExplore(container) {
    const cats = ['all', 'Lele', 'Nila', 'Gurame', 'Bawal', 'Mas'];
    const sorts = [
        { v: 'rating', l: '⭐ Rating' },
        { v: 'price-low', l: '💰 Termurah' },
        { v: 'price-high', l: '💎 Termahal' },
        { v: 'premium', l: '⭐ Premium' }
    ];
    container.innerHTML = `
        <div class="px-5 pt-4 pb-3 bg-white">
            <h2 class="text-lg font-bold mb-3">Explore Spot</h2>
            <div class="flex items-center bg-gray-100 rounded-2xl p-1 border border-gray-200 mb-3">
                <svg class="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="text" placeholder="Cari di explore..." value="${currentSearchQuery}" class="w-full px-3 py-3 bg-transparent text-sm focus:outline-none" oninput="handleSearch(this.value)">
            </div>
            <div class="flex space-x-2 overflow-x-auto hide-scrollbar mb-2">
                ${cats.map(c => `<button onclick="filterCategory('${c}')" class="${currentCategory === c ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'} px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap">${c === 'all' ? 'Semua' : c}</button>`).join('')}
            </div>
            <div class="flex space-x-2 overflow-x-auto hide-scrollbar">
                ${sorts.map(s => `<button onclick="setSort('${s.v}')" class="${currentSort === s.v ? 'bg-dark text-white' : 'bg-gray-100 text-gray-600'} px-3 py-1.5 rounded-full text-[10px] font-semibold whitespace-nowrap">${s.l}</button>`).join('')}
            </div>
        </div>
        <div class="px-5 mt-4">
            <p class="text-xs text-gray-500 mb-3" id="resultCount"></p>
            <div id="spotContainer" class="space-y-4"></div>
        </div>
    `;
    const filtered = getFilteredSpots();
    const el = document.getElementById('resultCount');
    if (el) el.textContent = `${filtered.length} spot ditemukan`;
    renderSpots(filtered);
}

function filterCategory(cat) {
    currentCategory = cat;
    if (document.getElementById('nav-explore').classList.contains('text-primary')) renderExplore(document.getElementById('app-content'));
    else renderHome(document.getElementById('app-content'));
}

function setSort(sort) {
    currentSort = sort;
    renderExplore(document.getElementById('app-content'));
}

// ==========================================
// EVENTS
// ==========================================
function renderEvents(container) {
    const tabs = [
        { v: 'upcoming', l: 'Akan Datang' },
        { v: 'ongoing', l: 'Berlangsung' },
        { v: 'past', l: 'Selesai' }
    ];
    const filtered = eventsData.filter(e => e.status === currentEventTab);
    container.innerHTML = `
        <div class="px-5 pt-4 pb-3 bg-white">
            <h2 class="text-lg font-bold mb-3">Events & Turnamen</h2>
            <div class="flex bg-gray-100 p-1 rounded-xl">
                ${tabs.map(t => `<button onclick="switchEventTab('${t.v}')" class="flex-1 py-2 text-xs font-semibold ${currentEventTab === t.v ? 'bg-white text-primary rounded-lg shadow-sm' : 'text-gray-500'}">${t.l}</button>`).join('')}
            </div>
        </div>
        <div class="px-5 mt-4 space-y-4">
            ${filtered.length === 0 ? '<p class="text-center text-gray-400 text-sm py-10">Tidak ada event</p>' :
                filtered.map(e => `
                    <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                        <div class="relative h-36">
                            <img src="${e.image}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x200?text=Event'">
                            <div class="absolute top-3 left-3 ${e.status === 'upcoming' ? 'bg-blue-500' : e.status === 'ongoing' ? 'bg-green-500' : 'bg-gray-500'} text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase">${e.status === 'upcoming' ? 'Akan Datang' : e.status === 'ongoing' ? 'Berlangsung' : 'Selesai'}</div>
                        </div>
                        <div class="p-4">
                            <h3 class="font-bold text-dark mb-1">${e.title}</h3>
                            <p class="text-xs text-gray-500 mb-1">📅 ${e.date} • ${e.time}</p>
                            <p class="text-xs text-gray-500 mb-3">🏆 Hadiah: <span class="font-semibold text-accent">${e.prize}</span></p>
                            <div class="flex justify-between items-center mb-3">
                                <div class="flex-1">
                                    <div class="bg-gray-200 rounded-full h-1.5 w-full overflow-hidden">
                                        <div class="bg-primary h-full" style="width: ${(e.participants / e.maxParticipants * 100)}%"></div>
                                    </div>
                                    <p class="text-[10px] text-gray-500 mt-1">${e.participants}/${e.maxParticipants} peserta</p>
                                </div>
                                <div class="ml-3 text-right">
                                    <p class="text-[10px] text-gray-400">Tiket Masuk</p>
                                    <p class="text-sm font-bold text-primary">Rp ${e.fee.toLocaleString('id-ID')}</p>
                                </div>
                            </div>
                            <div class="flex gap-2">
                                <button onclick="openEventDetail(${e.id})" class="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl text-xs font-bold">Detail</button>
                                ${e.status === 'upcoming' && e.participants < e.maxParticipants ? `<button onclick="registerEvent(${e.id})" class="flex-1 bg-primary text-white py-2 rounded-xl text-xs font-bold">Daftar</button>` : e.status === 'upcoming' ? `<button class="flex-1 bg-red-100 text-red-500 py-2 rounded-xl text-xs font-bold" disabled>Penuh</button>` : `<button class="flex-1 bg-gray-100 text-gray-400 py-2 rounded-xl text-xs font-bold" disabled>Selesai</button>`}
                            </div>
                        </div>
                    </div>
                `).join('')}
        </div>
    `;
}

function switchEventTab(tab) { currentEventTab = tab; renderEvents(document.getElementById('app-content')); }

function openEventDetail(id) {
    const e = eventsData.find(ev => ev.id === id);
    const modal = document.getElementById('eventModal');
    document.getElementById('eventContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-start mb-4">
            <h3 class="text-xl font-bold text-dark flex-1">${e.title}</h3>
            <button onclick="closeEventDetail()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        <img src="${e.image}" class="w-full h-44 object-cover rounded-2xl mb-4" onerror="this.src='https://via.placeholder.com/400x200?text=Event'">
        <p class="text-sm text-gray-600 mb-4">${e.desc}</p>
        <div class="bg-gray-50 p-4 rounded-2xl mb-4 space-y-2 text-sm">
            <div class="flex justify-between"><span class="text-gray-500">📅 Tanggal</span><span class="font-semibold">${e.date}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">⏰ Waktu</span><span class="font-semibold">${e.time}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">🏆 Hadiah</span><span class="font-semibold text-accent">${e.prize}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">💰 Biaya</span><span class="font-semibold text-primary">Rp ${e.fee.toLocaleString('id-ID')}</span></div>
            <div class="flex justify-between"><span class="text-gray-500">👥 Peserta</span><span class="font-semibold">${e.participants}/${e.maxParticipants}</span></div>
        </div>
        ${e.status === 'upcoming' && e.participants < e.maxParticipants ? `<button onclick="registerEvent(${e.id})" class="w-full bg-primary text-white py-3.5 rounded-xl font-bold mb-3">Daftar Sekarang</button>` : ''}
        <button onclick="shareEvent(${e.id})" class="w-full bg-accent text-white py-3.5 rounded-xl font-bold">Bagikan Event</button>
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
    if (userEvents.includes(id)) return showToast('Anda sudah terdaftar di event ini', 'info');
    if (e.participants >= e.maxParticipants) return showToast('Event sudah penuh', 'error');
    e.participants++;
    userEvents.push(id);
    notifications.unshift({ id: Date.now(), title: "Pendaftaran Event", msg: `Anda terdaftar di ${e.title}`, time: "Baru saja", read: false });
    save();
    updateNotifBadge();
    showToast(`Berhasil daftar ${e.title}!`);
    closeEventDetail();
    renderEvents(document.getElementById('app-content'));
}

function shareEvent(id) {
    const e = eventsData.find(ev => ev.id === id);
    const text = `Ayo ikut ${e.title} di MancingYuk! 🏆\nTanggal: ${e.date}\nHadiah: ${e.prize}`;
    if (navigator.share) navigator.share({ title: e.title, text }).catch(() => fallbackCopy(text));
    else fallbackCopy(text);
}

// ==========================================
// COMMUNITY
// ==========================================
function renderCommunity(container) {
    if (!currentUser) {
        container.innerHTML = `<div class="flex flex-col items-center justify-center h-full pt-20 px-8 text-center"><div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-3xl">👥</div><p class="text-gray-500 mb-4 text-sm">Login untuk bergabung komunitas</p><button onclick="openAuth()" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold">Login</button></div>`;
        return;
    }
    const allPosts = [...myPosts, ...communityPosts];
    container.innerHTML = `
        <div class="px-5 pt-4 pb-3 bg-white flex justify-between items-center">
            <div>
                <h2 class="text-lg font-bold">Komunitas Mancing</h2>
                <p class="text-xs text-gray-500 mt-0.5">${allPosts.length} postingan • ${allPosts.reduce((s, p) => s + p.likes, 0)} likes</p>
            </div>
            <button onclick="openPostModal()" class="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1">
                <span>+</span> Post
            </button>
        </div>
        <div class="px-5 mt-4 space-y-4 pb-4">
            ${allPosts.map(p => `
                <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div class="flex items-center p-3">
                        <img src="${p.avatar}" class="w-10 h-10 rounded-full object-cover" onerror="this.src='https://i.pravatar.cc/150'">
                        <div class="ml-3 flex-1">
                            <p class="text-sm font-bold text-dark">${p.user}</p>
                            <p class="text-[10px] text-gray-400">${p.time} ${p.spot ? '• 📍 ' + p.spot : ''}</p>
                        </div>
                        <button onclick="sharePost(${p.id})" class="text-gray-400 p-1"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg></button>
                    </div>
                    <img src="${p.image}" class="w-full h-56 object-cover" onerror="this.src='https://via.placeholder.com/400x300?text=Foto'">
                    <div class="p-4">
                        <p class="text-sm text-gray-700 leading-relaxed mb-3">${p.caption}</p>
                        <div class="flex items-center gap-4 pt-3 border-t">
                            <button onclick="toggleLike(${p.id})" id="like-${p.id}" class="flex items-center gap-1 text-sm ${p.liked ? 'text-red-500' : 'text-gray-500'}">
                                <svg class="w-5 h-5" fill="${p.liked ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                <span class="text-xs font-bold" id="likes-${p.id}">${p.likes}</span>
                            </button>
                            <button onclick="showComments(${p.id})" class="flex items-center gap-1 text-gray-500 text-sm">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                <span class="text-xs font-bold">${p.comments}</span>
                            </button>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

function toggleLike(id) {
    const allPosts = [...myPosts, ...communityPosts];
    const p = allPosts.find(x => x.id === id);
    if (!p) return;
    p.liked = !p.liked;
    p.likes += p.liked ? 1 : -1;
    const likesEl = document.getElementById(`likes-${id}`);
    const likeEl = document.getElementById(`like-${id}`);
    if (likesEl) likesEl.textContent = p.likes;
    if (likeEl) {
        likeEl.className = `flex items-center gap-1 text-sm ${p.liked ? 'text-red-500 heart-pop' : 'text-gray-500'}`;
        likeEl.querySelector('svg').setAttribute('fill', p.liked ? 'currentColor' : 'none');
        setTimeout(() => likeEl.classList.remove('heart-pop'), 300);
    }
    save();
}

function showComments(id) { showToast('Fitur komentar segera hadir', 'info'); }
function sharePost(id) {
    const allPosts = [...myPosts, ...communityPosts];
    const p = allPosts.find(x => x.id === id);
    const text = `${p.user}: ${p.caption}\n\nLihat di MancingYuk!`;
    if (navigator.share) navigator.share({ title: 'MancingYuk!', text }).catch(() => fallbackCopy(text));
    else fallbackCopy(text);
}

function openPostModal() {
    const sel = document.getElementById('postSpot');
    sel.innerHTML = '<option value="">Pilih Spot (Opsional)</option>' + spots.map(s => `<option value="${s.name}">${s.name}</option>`).join('');
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
    const img = document.getElementById('postImage').value.trim() || 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80';
    const caption = document.getElementById('postCaption').value.trim();
    const spot = document.getElementById('postSpot').value;
    if (!caption) return showToast('Cerita tidak boleh kosong', 'error');
    myPosts.unshift({ id: Date.now(), userId: currentUser.email, user: currentUser.name, avatar: currentUser.avatar, time: "Baru saja", image: img, caption, likes: 0, comments: 0, spot, liked: false, commentsList: [] });
    save();
    closePostModal();
    showToast('Postingan berhasil dibagikan!');
    renderCommunity(document.getElementById('app-content'));
}

// ==========================================
// PROFILE
// ==========================================
function renderProfile(container) {
    if (!currentUser) {
        container.innerHTML = `<div class="flex flex-col items-center justify-center h-full pt-20 px-8 text-center"><div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-3xl">👤</div><p class="text-gray-500 mb-4 text-sm">Login untuk melihat profil</p><button onclick="openAuth()" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold">Login</button></div>`;
        return;
    }
    const totalSpent = userTickets.filter(t => t.status !== 'Dibatalkan').reduce((s, t) => s + t.total, 0);
    const totalTrips = userTickets.filter(t => t.status === 'Selesai').length;
    const tier = currentUser.points >= 5000 ? { name: "Gold", color: "text-yellow-600", bg: "bg-yellow-100", next: null } :
                  currentUser.points >= 2000 ? { name: "Silver", color: "text-gray-600", bg: "bg-gray-200", next: 5000 } :
                  { name: "Bronze", color: "text-orange-700", bg: "bg-orange-100", next: 2000 };

    container.innerHTML = `
        <div class="px-5 pt-6">
            <div class="flex items-center space-x-4 mb-4">
                <img src="${currentUser.avatar}" class="w-16 h-16 rounded-full object-cover border-2 border-primary" onerror="this.src='https://i.pravatar.cc/150'">
                <div class="flex-1">
                    <h2 class="text-lg font-bold text-dark">${currentUser.name}</h2>
                    <p class="text-xs text-gray-500">${currentUser.email}</p>
                    <div class="flex gap-1 mt-1">
                        <span class="bg-blue-100 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">${currentUser.level}</span>
                        <span class="${tier.bg} ${tier.color} text-[10px] px-2 py-0.5 rounded-full font-bold">${tier.name}</span>
                    </div>
                </div>
            </div>

            <div onclick="openLoyalty()" class="bg-gradient-to-r from-primary to-blue-400 rounded-2xl p-4 text-white shadow-lg mb-4 cursor-pointer active:scale-95 transition">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-xs text-blue-100">Poin MancingYuk</p>
                        <p class="text-2xl font-bold">${currentUser.points.toLocaleString('id-ID')}</p>
                    </div>
                    <svg class="w-12 h-12 text-white opacity-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                </div>
                <div class="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-white/20">
                    <div><p class="text-[10px] text-blue-100">Total Trip</p><p class="font-bold">${totalTrips}x</p></div>
                    <div><p class="text-[10px] text-blue-100">Total Belanja</p><p class="font-bold text-sm">Rp ${totalSpent.toLocaleString('id-ID')}</p></div>
                </div>
                <p class="text-[10px] text-blue-100 mt-2 text-center">Tap untuk detail poin →</p>
            </div>

            <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-4">
                <p class="text-xs text-gray-500 mb-1">Bio</p>
                <p class="text-sm text-dark">${currentUser.bio || 'Belum ada bio'}</p>
                <p class="text-[10px] text-gray-400 mt-2">Bergabung sejak ${currentUser.joinDate}</p>
            </div>

            ${currentUser.type === 'owner' ? `
                <button onclick="openOwnerDashboard()" class="w-full bg-gradient-to-r from-secondary to-green-400 text-white py-4 rounded-2xl font-bold shadow-lg mb-4 flex items-center justify-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    Dashboard Pemilik Pemancingan
                </button>
            ` : ''}

            <h3 class="font-bold text-dark mb-3">Akun & Pengaturan</h3>
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 mb-4">
                <button onclick="switchTab('tickets')" class="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                    <div class="flex items-center space-x-3"><div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary">🎫</div><span class="text-sm font-medium">Tiket Saya</span></div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <button onclick="openEditProfile()" class="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                    <div class="flex items-center space-x-3"><div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary">👤</div><span class="text-sm font-medium">Edit Profil</span></div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <button onclick="openPassword()" class="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                    <div class="flex items-center space-x-3"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">🔒</div><span class="text-sm font-medium">Ubah Password</span></div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <button onclick="showHistory()" class="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                    <div class="flex items-center space-x-3"><div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">📜</div><span class="text-sm font-medium">Riwayat Transaksi</span></div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <h3 class="font-bold text-dark mb-3">Partner & Info</h3>
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 mb-4">
                <button onclick="showPartners()" class="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                    <div class="flex items-center space-x-3"><div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">🛒</div><span class="text-sm font-medium">Toko Partner</span></div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <button onclick="showMerch()" class="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                    <div class="flex items-center space-x-3"><div class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600">👕</div><span class="text-sm font-medium">Merchandise</span></div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <button onclick="openAbout()" class="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                    <div class="flex items-center space-x-3"><div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600">ℹ️</div><span class="text-sm font-medium">Visi & Misi</span></div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <button onclick="logout()" class="w-full bg-red-50 text-red-600 py-3.5 rounded-xl font-bold border border-red-100 mb-6">Keluar Akun</button>

            <div class="mt-2 text-center pb-4">
                <p class="text-xs text-gray-400">MancingYuk! v2.0.0</p>
                <p class="text-[10px] text-gray-300 mt-1">Lebih Banyak Spot. Lebih Banyak Teman. Lebih Banyak Cerita.</p>
            </div>
        </div>
    `;
}

// ==========================================
// LOYALTY
// ==========================================
function openLoyalty() {
    const tiers = [
        { name: "Bronze", min: 0, max: 1999, benefit: "Bonus 100 poin per booking", color: "bg-orange-100 text-orange-700" },
        { name: "Silver", min: 2000, max: 4999, benefit: "Diskon 5% setiap booking", color: "bg-gray-200 text-gray-700" },
        { name: "Gold", min: 5000, max: 999999, benefit: "Diskon 10% + Priority booking", color: "bg-yellow-100 text-yellow-700" }
    ];
    document.getElementById('loyaltyContent').innerHTML = `
        <div class="text-center mb-6">
            <div class="w-20 h-20 bg-gradient-to-r from-primary to-blue-400 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-3xl">🏆</div>
            <p class="text-3xl font-bold text-primary">${currentUser.points.toLocaleString('id-ID')}</p>
            <p class="text-xs text-gray-500">Total Poin Anda</p>
        </div>
        <div class="bg-yellow-50 border border-yellow-200 rounded-2xl p-4 mb-4">
            <p class="text-xs font-bold text-dark mb-1">💡 Cara Menggunakan Poin</p>
            <p class="text-xs text-gray-600">100 poin = Rp 10.000 diskon. Gunakan saat checkout.</p>
        </div>
        <h4 class="font-bold text-sm mb-2">Cara Mendapatkan Poin</h4>
        <ul class="text-xs text-gray-600 space-y-1 mb-4 list-disc pl-5">
            <li>Booking spot: +${Math.floor(50000/1000)} poin per Rp 50.000</li>
            <li>Beri review: +50 poin</li>
            <li>Ajak teman: +200 poin</li>
            <li>Ikut event: +500 poin</li>
        </ul>
        <h4 class="font-bold text-sm mb-2">Tier Membership</h4>
        <div class="space-y-2">
            ${tiers.map(t => `
                <div class="p-3 rounded-xl border ${currentUser.points >= t.min && currentUser.points <= t.max ? 'border-primary bg-blue-50' : 'border-gray-100'}">
                    <div class="flex justify-between items-center">
                        <span class="text-sm font-bold ${t.color.split(' ')[1]}">${t.name}</span>
                        <span class="text-[10px] text-gray-500">${t.min.toLocaleString()}+ poin</span>
                    </div>
                    <p class="text-[10px] text-gray-500 mt-1">${t.benefit}</p>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('loyaltyModal').classList.remove('hidden');
    document.getElementById('loyaltyModal').classList.add('flex');
}

function closeLoyalty() {
    document.getElementById('loyaltyModal').classList.add('hidden');
    document.getElementById('loyaltyModal').classList.remove('flex');
}

// ==========================================
// PARTNERS & MERCH
// ==========================================
function showPartners() {
    const html = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">Toko Partner</h3>
            <button onclick="closeNotif()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        <div class="space-y-3">
            ${partners.map(p => `
                <div class="bg-white border border-gray-100 rounded-2xl p-4 flex items-center shadow-sm">
                    <div class="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mr-3">${p.logo}</div>
                    <div class="flex-1">
                        <h4 class="font-bold text-sm">${p.name}</h4>
                        <p class="text-[10px] text-gray-500">${p.desc}</p>
                        <span class="inline-block mt-1 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded font-bold">${p.discount}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('notifContent').innerHTML = html;
    document.getElementById('notifModal').classList.remove('hidden');
    setTimeout(() => document.getElementById('notifModal').classList.add('show'), 10);
}

function showMerch() {
    const html = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">Merchandise</h3>
            <button onclick="closeNotif()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        <div class="grid grid-cols-2 gap-3">
            ${merchandise.map(m => `
                <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    <img src="${m.image}" class="w-full h-32 object-cover" onerror="this.src='https://via.placeholder.com/200'">
                    <div class="p-3">
                        <h4 class="text-xs font-bold mb-1">${m.name}</h4>
                        <p class="text-sm font-bold text-primary mb-2">Rp ${m.price.toLocaleString('id-ID')}</p>
                        <p class="text-[10px] text-gray-400 mb-2">Stok: ${m.stock}</p>
                        <button onclick="buyMerch(${m.id})" class="w-full bg-primary text-white py-1.5 rounded-lg text-xs font-bold">Beli</button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('notifContent').innerHTML = html;
    document.getElementById('notifModal').classList.remove('hidden');
    setTimeout(() => document.getElementById('notifModal').classList.add('show'), 10);
}

function buyMerch(id) {
    const m = merchandise.find(x => x.id === id);
    if (m.stock <= 0) return showToast('Stok habis', 'error');
    m.stock--;
    showToast(`${m.name} berhasil ditambahkan ke keranjang!`);
}

function closeNotif() {
    const m = document.getElementById('notifModal');
    m.classList.remove('show');
    setTimeout(() => m.classList.add('hidden'), 300);
}

// ==========================================
// OWNER DASHBOARD
// ==========================================
function openOwnerDashboard() {
    const mySpot = spots.find(s => s.ownerId === "owner1") || spots[0];
    const revenue = ownerBookings.filter(b => b.status === 'Confirmed').reduce((s, b) => s + b.total, 0);
    const platformFee = revenue * 0.08;
    const netRevenue = revenue - platformFee;
    const confirmed = ownerBookings.filter(b => b.status === 'Confirmed').length;
    const pending = ownerBookings.filter(b => b.status === 'Pending').length;

    document.getElementById('ownerSpotContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">Dashboard Pemilik</h3>
            <button onclick="closeOwner()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>

        <div class="bg-dark rounded-2xl p-4 text-white mb-4">
            <p class="text-xs text-gray-300">Kelola: ${mySpot.name}</p>
            <div class="grid grid-cols-2 gap-3 mt-3">
                <div class="bg-white/10 p-3 rounded-xl">
                    <p class="text-[10px] text-gray-300">Pendapatan Bersih</p>
                    <p class="text-base font-bold text-green-400">Rp ${netRevenue.toLocaleString('id-ID')}</p>
                </div>
                <div class="bg-white/10 p-3 rounded-xl">
                    <p class="text-[10px] text-gray-300">Total Booking</p>
                    <p class="text-base font-bold text-accent">${ownerBookings.length}</p>
                </div>
                <div class="bg-white/10 p-3 rounded-xl">
                    <p class="text-[10px] text-gray-300">Confirmed</p>
                    <p class="text-base font-bold">${confirmed}</p>
                </div>
                <div class="bg-white/10 p-3 rounded-xl">
                    <p class="text-[10px] text-gray-300">Pending</p>
                    <p class="text-base font-bold text-yellow-300">${pending}</p>
                </div>
            </div>
        </div>

        <div class="bg-blue-50 border border-blue-100 rounded-xl p-3 mb-4 text-[10px] text-gray-600">
            <p><b>Revenue Model:</b> MancingYuk ambil komisi 8% (Rp ${platformFee.toLocaleString('id-ID')}). Anda terima Rp ${netRevenue.toLocaleString('id-ID')}.</p>
        </div>

        <h4 class="font-bold text-sm mb-2">Pengelolaan</h4>
        <div class="space-y-2 mb-4">
            <button onclick="managePrice(${mySpot.id})" class="w-full bg-white border border-gray-100 p-3 rounded-xl flex items-center justify-between text-left">
                <div class="flex items-center gap-3"><div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">💰</div><div><p class="text-xs font-bold">Atur Harga & Jadwal</p><p class="text-[10px] text-gray-500">Harga saat ini: Rp ${mySpot.price.toLocaleString('id-ID')}</p></div></div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
            <button onclick="togglePremium(${mySpot.id})" class="w-full bg-white border border-gray-100 p-3 rounded-xl flex items-center justify-between text-left">
                <div class="flex items-center gap-3"><div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">⭐</div><div><p class="text-xs font-bold">Premium Listing</p><p class="text-[10px] text-gray-500">${mySpot.premium ? 'Aktif - Tampil di atas' : 'Nonaktif - Rp 100.000/bulan'}</p></div></div>
                <div class="w-10 h-5 ${mySpot.premium ? 'bg-primary' : 'bg-gray-300'} rounded-full relative transition">
                    <div class="w-4 h-4 bg-white rounded-full absolute top-0.5 ${mySpot.premium ? 'right-0.5' : 'left-0.5'} transition"></div>
                </div>
            </button>
            <button onclick="showStats()" class="w-full bg-white border border-gray-100 p-3 rounded-xl flex items-center justify-between text-left">
                <div class="flex items-center gap-3"><div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">📊</div><div><p class="text-xs font-bold">Laporan & Statistik</p><p class="text-[10px] text-gray-500">Lihat performa pemancingan</p></div></div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
            <button onclick="showPromo()" class="w-full bg-white border border-gray-100 p-3 rounded-xl flex items-center justify-between text-left">
                <div class="flex items-center gap-3"><div class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">🎁</div><div><p class="text-xs font-bold">Promosi</p><p class="text-[10px] text-gray-500">Buat promo untuk pelanggan</p></div></div>
                <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
        </div>

        <h4 class="font-bold text-sm mb-2">Booking Terbaru</h4>
        <div class="space-y-2">
            ${ownerBookings.slice(0, 5).map((b, i) => `
                <div class="bg-white border border-gray-100 rounded-xl p-3">
                    <div class="flex justify-between items-center mb-1">
                        <p class="text-xs font-bold">${b.customer}</p>
                        <span class="text-[9px] ${b.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'} px-2 py-0.5 rounded font-bold">${b.status}</span>
                    </div>
                    <p class="text-[10px] text-gray-500">${b.date} • ${b.qty} orang</p>
                    <div class="flex justify-between items-center mt-2">
                        <p class="text-xs font-bold text-primary">Rp ${b.total.toLocaleString('id-ID')}</p>
                        ${b.status === 'Pending' ? `<button onclick="confirmBooking(${i})" class="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded">Konfirmasi</button>` : ''}
                    </div>
                </div>
            `).join('')}
        </div>
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
    save();
    showToast(`Booking ${ownerBookings[i].customer} dikonfirmasi`);
    closeOwner();
    setTimeout(() => openOwnerDashboard(), 400);
}

function managePrice(spotId) {
    const s = spots.find(x => x.id === spotId);
    const newPrice = prompt(`Harga saat ini: Rp ${s.price.toLocaleString('id-ID')}\nMasukkan harga baru (angka saja):`, s.price);
    if (newPrice && !isNaN(newPrice) && parseInt(newPrice) > 0) {
        s.price = parseInt(newPrice);
        showToast(`Harga diubah ke Rp ${s.price.toLocaleString('id-ID')}`);
        closeOwner();
        setTimeout(() => openOwnerDashboard(), 400);
    }
}

function togglePremium(spotId) {
    const s = spots.find(x => x.id === spotId);
    s.premium = !s.premium;
    showToast(s.premium ? 'Premium Listing aktif!' : 'Premium Listing nonaktif', s.premium ? 'success' : 'info');
    closeOwner();
    setTimeout(() => openOwnerDashboard(), 400);
}

function showStats() {
    const revenue = ownerBookings.filter(b => b.status === 'Confirmed').reduce((s, b) => s + b.total, 0);
    const net = revenue * 0.92;
    alert(`📊 Laporan Statistik\n\nTotal Booking: ${ownerBookings.length}\nPendapatan Kotor: Rp ${revenue.toLocaleString('id-ID')}\nKomisi Platform (8%): Rp ${(revenue * 0.08).toLocaleString('id-ID')}\nPendapatan Bersih: Rp ${net.toLocaleString('id-ID')}\n\nRata-rata per hari: Rp ${(net / 30).toLocaleString('id-ID')}`);
}

function showPromo() {
    const promo = prompt('Buat promo baru (contoh: "Diskon 20% Senin"):');
    if (promo) showToast(`Promo "${promo}" berhasil dibuat!`);
}

// ==========================================
// TIKET
// ==========================================
function renderTickets(container) {
    if (!currentUser) {
        container.innerHTML = `<div class="flex flex-col items-center justify-center h-full pt-20 px-8 text-center"><div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-3xl">🎫</div><p class="text-gray-500 mb-4 text-sm">Login untuk melihat tiket</p><button onclick="openAuth()" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold">Login</button></div>`;
        return;
    }
    if (userTickets.length === 0) {
        container.innerHTML = `<div class="px-5 pt-6"><h2 class="text-xl font-bold mb-4">Tiket Saya</h2><div class="flex flex-col items-center pt-20"><div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-3xl">🎫</div><p class="text-gray-400 text-sm mb-4">Belum ada tiket</p><button onclick="switchTab('explore')" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm">Cari Spot</button></div></div>`;
        return;
    }
    const ticketsHtml = userTickets.map((t, i) => `
        <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4 animate-fade-in">
            <div class="flex justify-between items-center border-b pb-3 mb-3">
                <span class="font-bold text-primary text-sm">${t.spotName}</span>
                <span class="bg-${t.status === 'Selesai' ? 'green' : t.status === 'Dibatalkan' ? 'red' : 'blue'}-100 text-${t.status === 'Selesai' ? 'green' : t.status === 'Dibatalkan' ? 'red' : 'blue'}-700 text-[10px] px-2 py-1 rounded font-bold">${t.status}</span>
            </div>
            <div class="flex justify-between text-xs text-gray-500 mb-1"><span>ID</span><span class="font-semibold text-dark">${t.id}</span></div>
            <div class="flex justify-between text-xs text-gray-500 mb-1"><span>Tanggal</span><span class="font-semibold text-dark">${t.date}</span></div>
            <div class="flex justify-between text-xs text-gray-500 mb-1"><span>Jumlah</span><span class="font-semibold text-dark">${t.qty} Orang</span></div>
            <div class="flex justify-between text-xs text-gray-500 mt-3 pt-3 border-t"><span>Total</span><span class="font-bold text-primary">Rp ${t.total.toLocaleString('id-ID')}</span></div>
            <div class="flex gap-2 mt-4">
                <button onclick="openTicketDetail(${i})" class="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl text-xs font-bold">E-Tiket</button>
                ${t.status === 'Selesai' && !t.reviewed ? `<button onclick="openReviewFor(${i})" class="flex-1 bg-accent text-white py-2 rounded-xl text-xs font-bold">Review</button>` :
                  t.status === 'Aktif' ? `<button onclick="cancelTicket(${i})" class="flex-1 bg-red-100 text-red-600 py-2 rounded-xl text-xs font-bold">Batalkan</button>` :
                  t.reviewed ? `<button class="flex-1 bg-green-100 text-green-600 py-2 rounded-xl text-xs font-bold" disabled>✓ Reviewed</button>` :
                  `<button class="flex-1 bg-gray-100 text-gray-400 py-2 rounded-xl text-xs font-bold" disabled>-</button>`}
            </div>
        </div>
    `).join('');
    container.innerHTML = `<div class="px-5 pt-6"><h2 class="text-xl font-bold mb-4">Tiket Saya (${userTickets.length})</h2>${ticketsHtml}</div>`;
}

function openTicketDetail(index) {
    const t = userTickets[index];
    const m = document.getElementById('ticketDetailModal');
    document.getElementById('ticketDetailContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">E-Tiket</h3>
            <button onclick="closeTicketDetail()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        <img src="${t.image}" class="w-full h-40 object-cover rounded-2xl mb-4" onerror="this.src='https://via.placeholder.com/400x200?text=Spot'">
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
        <button onclick="shareTicket(${index})" class="w-full bg-accent text-white py-3 rounded-xl font-bold mb-2">Bagikan Tiket</button>
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
    const text = `E-Tiket MancingYuk!\n${t.spotName}\nTanggal: ${t.date}\nID: ${t.id}`;
    if (navigator.share) navigator.share({ title: 'E-Tiket', text }).catch(() => fallbackCopy(text));
    else fallbackCopy(text);
}

function cancelTicket(index) {
    if (!confirm('Yakin membatalkan tiket ini?')) return;
    userTickets[index].status = 'Dibatalkan';
    save();
    showToast('Tiket dibatalkan', 'info');
    renderTickets(document.getElementById('app-content'));
}

// ==========================================
// SPOT DETAIL
// ==========================================
function openDetail(id) {
    if (!currentUser) return openAuth();
    selectedSpot = spots.find(s => s.id === id);
    const modal = document.getElementById('detailModal');
    const today = new Date().toISOString().split('T')[0];
    const platformFee = selectedSpot.price * 0.08;
    const ownerRevenue = selectedSpot.price - platformFee;

    document.getElementById('detailContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        ${selectedSpot.premium ? '<div class="inline-block bg-yellow-100 text-yellow-700 text-[10px] font-bold px-2 py-1 rounded-full mb-2">⭐ PREMIUM LISTING</div>' : ''}
        <div class="flex justify-between items-start mb-4">
            <div>
                <h3 class="text-xl font-bold text-dark">${selectedSpot.name}</h3>
                <p class="text-xs text-gray-500 mt-1">📍 ${selectedSpot.city} • ${selectedSpot.location}</p>
                <p class="text-xs text-gray-500">👤 Pemilik: ${selectedSpot.owner}</p>
            </div>
            <button onclick="closeDetail()" class="text-gray-400 bg-gray-100 p-2 rounded-full"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button>
        </div>
        <img src="${selectedSpot.image}" class="w-full h-48 object-cover rounded-2xl mb-4" onerror="this.src='https://via.placeholder.com/400x200?text=Spot'">
        <div class="flex space-x-2 mb-4 overflow-x-auto hide-scrollbar">
            ${selectedSpot.facilities.map(f => `<span class="bg-gray-100 text-gray-600 text-[10px] px-3 py-1 rounded-full whitespace-nowrap">${f}</span>`).join('')}
        </div>
        <p class="text-xs text-gray-500 leading-relaxed mb-6">${selectedSpot.description}</p>
        <div class="bg-blue-50 p-4 rounded-2xl mb-6 border border-blue-100">
            <h4 class="font-bold text-primary text-sm mb-2">Transparansi Harga</h4>
            <div class="flex justify-between text-xs text-gray-600 mb-1"><span>Harga Tiket</span><span class="font-semibold">Rp ${selectedSpot.price.toLocaleString('id-ID')}</span></div>
            <div class="flex justify-between text-xs text-gray-600 mb-1"><span>Biaya Layanan (8%)</span><span class="font-semibold">Rp ${platformFee.toLocaleString('id-ID')}</span></div>
            <div class="border-t border-blue-200 mt-2 pt-2 flex justify-between text-sm font-bold text-dark"><span>Diterima Pemilik</span><span>Rp ${ownerRevenue.toLocaleString('id-ID')}</span></div>
        </div>
        <div class="mb-4">
            <label class="block text-xs font-medium text-gray-500 mb-2">Tanggal Mancing</label>
            <input type="date" id="bookingDate" min="${today}" value="${today}" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm">
        </div>
        <div class="mb-4">
            <label class="block text-xs font-medium text-gray-500 mb-2">Jumlah Orang</label>
            <input type="number" id="qtyInput" min="1" max="10" value="2" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" oninput="updateTotal()">
        </div>
        <div class="bg-gray-50 p-4 rounded-xl flex justify-between items-center mb-6">
            <span class="text-sm font-medium text-gray-600">Total Bayar</span>
            <p id="totalPrice" class="text-xl font-bold text-primary">Rp ${(selectedSpot.price * 2).toLocaleString('id-ID')}</p>
        </div>
        <button onclick="openCheckout()" ${selectedSpot.slots === 0 ? 'disabled' : ''} class="w-full ${selectedSpot.slots === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary hover:bg-blue-600'} text-white py-3.5 rounded-xl font-bold transition shadow-lg shadow-blue-200 mb-3">${selectedSpot.slots === 0 ? 'Slot Penuh' : 'Lanjut ke Pembayaran'}</button>
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
    document.getElementById('totalPrice').innerText = `Rp ${(selectedSpot.price * qty).toLocaleString('id-ID')}`;
}

function shareSpot(id) {
    const s = spots.find(x => x.id === id);
    const text = `Cek spot mancing ini: ${s.name}\n📍 ${s.city}\n💰 Rp ${s.price.toLocaleString('id-ID')}/orang\n⭐ ${s.rating}`;
    if (navigator.share) navigator.share({ title: s.name, text }).catch(() => fallbackCopy(text));
    else fallbackCopy(text);
}

// ==========================================
// CHECKOUT
// ==========================================
function openCheckout() {
    const date = document.getElementById('bookingDate').value;
    const qty = parseInt(document.getElementById('qtyInput').value);
    if (!date) return showToast('Pilih tanggal dulu', 'error');
    if (qty < 1) return showToast('Minimal 1 orang', 'error');

    bookingData = { spot: selectedSpot, date, qty, total: selectedSpot.price * qty, pointsUsed: 0 };
    const dateObj = new Date(date);
    const fmtDate = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    document.getElementById('checkoutDetails').innerHTML = `
        <div class="flex justify-between mb-1"><span>Spot</span><span class="font-semibold text-dark">${selectedSpot.name}</span></div>
        <div class="flex justify-between mb-1"><span>Tanggal</span><span class="font-semibold text-dark">${fmtDate}</span></div>
        <div class="flex justify-between mb-1"><span>Jumlah</span><span class="font-semibold text-dark">${qty} Orang</span></div>
        <div class="flex justify-between border-t pt-2 mt-2"><span>Subtotal</span><span class="font-bold text-primary">Rp ${bookingData.total.toLocaleString('id-ID')}</span></div>
        <div id="discountRow" class="hidden flex justify-between text-green-600"><span>Diskon Poin</span><span class="font-bold">-Rp 0</span></div>
    `;
    document.getElementById('pointsAvail').innerText = `${currentUser.points.toLocaleString('id-ID')} Poin`;
    document.getElementById('usePoints').checked = false;
    document.getElementById('checkoutTotal').innerText = `Rp ${bookingData.total.toLocaleString('id-ID')}`;

    closeDetail();
    document.getElementById('checkoutModal').classList.remove('hidden');
    document.getElementById('checkoutModal').classList.add('flex');
}

function updateCheckoutTotal() {
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
    document.getElementById('checkoutTotal').innerText = `Rp ${total.toLocaleString('id-ID')}`;
    const row = document.getElementById('discountRow');
    if (row) {
        row.classList.toggle('hidden', used === 0);
        row.classList.toggle('flex', used > 0);
        row.querySelector('span:last-child').innerText = `-Rp ${(used / 100 * 10000).toLocaleString('id-ID')}`;
    }
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
        const dateObj = new Date(bookingData.date);
        const fmtDate = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

        const newTicket = { id: `TKT-${String(Date.now()).slice(-6)}`, spotName: bookingData.spot.name, spotId: bookingData.spot.id, date: fmtDate, qty: bookingData.qty, total: finalTotal, status: "Aktif", image: bookingData.spot.image, reviewed: false };
        userTickets.unshift(newTicket);

        // Update slot
        const spotRef = spots.find(s => s.id === bookingData.spot.id);
        if (spotRef) spotRef.slots = Math.max(0, spotRef.slots - bookingData.qty);

        // Update poin
        if (currentUser) {
            if (bookingData.points