// ==========================================
// DATA & STATE
// ==========================================
const spots = [
    { id: 1, name: "Pemancingan Pak Budi", location: "Lele, Nila, Mas", city: "Jakarta Selatan", price: 50000, rating: 4.7, reviews: 120, slots: 20, image: "https://images.unsplash.com/photo-1594913251120-2c9c8a6b4e9f?auto=format&fit=crop&w=800&q=80", facilities: ["Saung", "Parkir Luas", "Kantin", "Sewa Alat", "Toilet Bersih"], description: "Pemancingan nyaman dengan suasana pedesaan. Cocok untuk keluarga dan pemancing pemula. Kolam terawat, ikan padat.", owner: "Pak Budi" },
    { id: 2, name: "Kolam Mancing Sejahtera", location: "Gurame, Patin", city: "Depok", price: 75000, rating: 4.5, reviews: 85, slots: 15, image: "https://images.unsplash.com/photo-1582234472918-8331c77883c8?auto=format&fit=crop&w=800&q=80", facilities: ["AC Room", "Mushola", "WiFi", "Resto", "Kolam VIP"], description: "Pemancingan premium dengan fasilitas lengkap. Nikmati sensasi mancing gurame dan patin ukuran jumbo.", owner: "Haji Sejahtera" },
    { id: 3, name: "Spot Alam Liar (Waduk)", location: "Bawal, Nila", city: "Bogor", price: 30000, rating: 4.8, reviews: 200, slots: 0, image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=800&q=80", facilities: ["Camping Ground", "Toilet Umum", "Warung Terapung"], description: "Mancing di alam terbuka langsung di waduk. Tantangan tersendiri dengan ikan bawal dan nila liar.", owner: "Kelompok Tani Waduk" },
    { id: 4, name: "Mancing Mania Center", location: "Mas, Tombro", city: "Tangerang", price: 60000, rating: 4.6, reviews: 150, slots: 25, image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80", facilities: ["Panggung", "Sewa Alat", "Kantin", "Lampu Sorot"], description: "Pemancingan malam dengan lampu sorot. Sensasi mancing malam yang seru dan menantang.", owner: "Bang Jago" },
    { id: 5, name: "Pemancingan Ikan Hias", location: "Koi, Arwana", city: "Bandung", price: 100000, rating: 4.9, reviews: 60, slots: 10, image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=800&q=80", facilities: ["Kolam Kaca", "AC", "Minuman Gratis", "Pemandu"], description: "Pengalaman mancing eksklusif untuk ikan hias. Fasilitas mewah dan pelayanan prima.", owner: "Dedi Koi" },
    { id: 6, name: "Sungai Citarum Fishing", location: "Baung, Mujair", city: "Karawang", price: 25000, rating: 4.3, reviews: 45, slots: 30, image: "https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=800&q=80", facilities: ["Area Piknik", "Mushola", "Toilet"], description: "Mancing di tepi sungai dengan pemandangan indah. Cocok untuk healing dan relaksasi.", owner: "Kang Ujang" },
];

// State global
let currentUser = JSON.parse(localStorage.getItem('my_user')) || null;
let userTickets = JSON.parse(localStorage.getItem('my_tickets')) || [
    { id: "TKT-001", spotName: "Pemancingan Pak Budi", spotId: 1, date: "25 Okt 2023", qty: 2, total: 100000, status: "Selesai", image: "https://images.unsplash.com/photo-1594913251120-2c9c8a6b4e9f?auto=format&fit=crop&w=800&q=80", reviewed: false }
];
let notifications = JSON.parse(localStorage.getItem('my_notifs')) || [
    { id: 1, title: "Promo Spesial!", msg: "Diskon 10% untuk booking grup minggu ini", time: "2 jam lalu", read: false },
    { id: 2, title: "Booking Berhasil", msg: "Tiket Pemancingan Pak Budi telah aktif", time: "1 hari lalu", read: false },
    { id: 3, title: "Spot Baru!", msg: "Pemancingan Ikan Hias kini tersedia di Bandung", time: "3 hari lalu", read: true }
];

let selectedSpot = null;
let bookingData = {};
let tempRating = 5;
let currentSearchQuery = '';
let currentCategory = 'all';

// Simpan ke localStorage
function save() {
    if (currentUser) localStorage.setItem('my_user', JSON.stringify(currentUser));
    else localStorage.removeItem('my_user');
    localStorage.setItem('my_tickets', JSON.stringify(userTickets));
    localStorage.setItem('my_notifs', JSON.stringify(notifications));
}

// ==========================================
// TOAST NOTIFICATION
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
    const btnLogin = document.getElementById('btn-login');
    const btnSignup = document.getElementById('btn-signup');
    const formLogin = document.getElementById('loginForm');
    const formSignup = document.getElementById('signupForm');
    if (type === 'login') {
        btnLogin.className = "flex-1 py-2 text-sm font-semibold bg-white text-primary rounded-lg shadow-sm";
        btnSignup.className = "flex-1 py-2 text-sm font-semibold text-gray-500 rounded-lg";
        formLogin.classList.remove('hidden');
        formSignup.classList.add('hidden');
    } else {
        btnSignup.className = "flex-1 py-2 text-sm font-semibold bg-white text-primary rounded-lg shadow-sm";
        btnLogin.className = "flex-1 py-2 text-sm font-semibold text-gray-500 rounded-lg";
        formSignup.classList.remove('hidden');
        formLogin.classList.add('hidden');
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const stored = JSON.parse(localStorage.getItem('registered_user'));
    if (stored && stored.email === email) {
        currentUser = stored;
    } else {
        currentUser = {
            name: email.split('@')[0].replace(/[^a-zA-Z]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || "Pemancing",
            email: email,
            avatar: "https://i.pravatar.cc/150?u=" + email,
            level: "Pemancing Aktif",
            points: 1250,
            bio: "Pecinta mancing sejati 🎣",
            joinDate: "Januari 2024"
        };
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
    currentUser = {
        name: name,
        email: email,
        avatar: "https://i.pravatar.cc/150?u=" + email,
        level: "Pemancing Baru",
        points: 100,
        bio: "Baru bergabung di MancingYuk!",
        joinDate: new Date().toLocaleDateString('id-ID', { month: 'long', year: 'numeric' })
    };
    localStorage.setItem('registered_user', JSON.stringify(currentUser));
    save();
    document.getElementById('authModal').classList.add('hidden');
    showToast(`Akun berhasil dibuat. Selamat datang!`);
    switchTab('home');
}

function logout() {
    if (!confirm('Yakin ingin keluar?')) return;
    currentUser = null;
    save();
    document.getElementById('authModal').classList.remove('hidden');
    document.getElementById('authModal').classList.add('flex');
    showToast('Anda telah keluar', 'info');
}

// ==========================================
// NAVIGASI TAB
// ==========================================
function switchTab(tabName) {
    ['home', 'explore', 'tickets', 'profile'].forEach(tab => {
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
    else if (tabName === 'tickets') renderTickets(content);
    else if (tabName === 'profile') renderProfile(content);
    content.scrollTop = 0;
}

// ==========================================
// VIEW: HOME
// ==========================================
function renderHome(container) {
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
                    <p class="text-xs text-blue-100 mt-1">Dapatkan diskon 10% untuk booking grup.</p>
                    <button onclick="inviteFriend()" class="mt-3 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full">Ajak Sekarang</button>
                </div>
                <svg class="w-20 h-20 text-white opacity-20 absolute -right-4 -bottom-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
            </div>
        </div>

        <div class="mt-6">
            <div class="flex justify-between items-center px-5 mb-3">
                <h2 class="font-bold text-dark">Bagaimana Cara Kerjanya?</h2>
            </div>
            <div class="flex overflow-x-auto space-x-3 px-5 pb-2 hide-scrollbar">
                ${renderHowItWorks()}
            </div>
        </div>

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

function handleSearch(val) {
    currentSearchQuery = val;
    const container = document.getElementById('spotContainer');
    if (container) renderSpots(getFilteredSpots());
}

function clearSearch() {
    currentSearchQuery = '';
    renderHome(document.getElementById('app-content'));
}

function getFilteredSpots() {
    return spots.filter(s => {
        const matchQuery = !currentSearchQuery || 
            s.name.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
            s.location.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
            s.city.toLowerCase().includes(currentSearchQuery.toLowerCase());
        const matchCat = currentCategory === 'all' ||
            s.location.toLowerCase().includes(currentCategory.toLowerCase());
        return matchQuery && matchCat;
    });
}

// ==========================================
// VIEW: EXPLORE
// ==========================================
function renderExplore(container) {
    const cats = ['all', 'Lele', 'Nila', 'Gurame', 'Bawal', 'Mas'];
    container.innerHTML = `
        <div class="px-5 pt-4 pb-3 bg-white">
            <h2 class="text-lg font-bold mb-3">Explore Spot</h2>
            <div class="flex items-center bg-gray-100 rounded-2xl p-1 border border-gray-200 mb-3">
                <svg class="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="text" placeholder="Cari di explore..." value="${currentSearchQuery}" class="w-full px-3 py-3 bg-transparent text-sm focus:outline-none" oninput="handleSearch(this.value)">
            </div>
            <div class="flex space-x-2 overflow-x-auto hide-scrollbar">
                ${cats.map(c => `
                    <button onclick="filterCategory('${c}')" class="${currentCategory === c ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'} px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap">${c === 'all' ? 'Semua' : c}</button>
                `).join('')}
            </div>
        </div>
        <div class="px-5 mt-4">
            <p class="text-xs text-gray-500 mb-3" id="resultCount"></p>
            <div id="spotContainer" class="space-y-4"></div>
        </div>
    `;
    const filtered = getFilteredSpots();
    const countEl = document.getElementById('resultCount');
    if (countEl) countEl.textContent = `${filtered.length} spot ditemukan`;
    renderSpots(filtered);
}

function filterCategory(cat) {
    currentCategory = cat;
    if (document.getElementById('nav-explore').classList.contains('text-primary')) {
        renderExplore(document.getElementById('app-content'));
    } else {
        renderHome(document.getElementById('app-content'));
    }
}

// ==========================================
// VIEW: TIKET
// ==========================================
function renderTickets(container) {
    if (!currentUser) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full pt-20 px-8 text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                </div>
                <p class="text-gray-500 mb-4 text-sm">Silakan login untuk melihat tiket Anda</p>
                <button onclick="openAuth()" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold">Login Sekarang</button>
            </div>`;
        return;
    }

    if (userTickets.length === 0) {
        container.innerHTML = `
            <div class="px-5 pt-6">
                <h2 class="text-xl font-bold mb-4">Tiket Saya</h2>
                <div class="flex flex-col items-center justify-center pt-20">
                    <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                        <svg class="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path></svg>
                    </div>
                    <p class="text-gray-400 text-sm mb-4">Belum ada tiket</p>
                    <button onclick="switchTab('explore')" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold text-sm">Cari Spot</button>
                </div>
            </div>`;
        return;
    }

    const ticketsHtml = userTickets.map((t, i) => `
        <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4 animate-fade-in">
            <div class="flex justify-between items-center border-b pb-3 mb-3">
                <span class="font-bold text-primary text-sm">${t.spotName}</span>
                <span class="bg-${t.status === 'Selesai' ? 'green' : 'blue'}-100 text-${t.status === 'Selesai' ? 'green' : 'blue'}-700 text-[10px] px-2 py-1 rounded font-bold">${t.status}</span>
            </div>
            <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>ID Tiket</span>
                <span class="font-semibold text-dark">${t.id}</span>
            </div>
            <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>Tanggal</span>
                <span class="font-semibold text-dark">${t.date}</span>
            </div>
            <div class="flex justify-between text-xs text-gray-500 mb-1">
                <span>Jumlah</span>
                <span class="font-semibold text-dark">${t.qty} Orang</span>
            </div>
            <div class="flex justify-between text-xs text-gray-500 mt-3 pt-3 border-t">
                <span>Total Bayar</span>
                <span class="font-bold text-primary">Rp ${t.total.toLocaleString('id-ID')}</span>
            </div>
            <div class="flex gap-2 mt-4">
                <button onclick="openTicketDetail(${i})" class="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl text-xs font-bold">Lihat E-Tiket</button>
                ${t.status === 'Selesai' && !t.reviewed ? 
                    `<button onclick="openReviewFor(${i})" class="flex-1 bg-accent text-white py-2 rounded-xl text-xs font-bold">Beri Review</button>` : 
                    t.status === 'Aktif' ? 
                    `<button onclick="cancelTicket(${i})" class="flex-1 bg-red-100 text-red-600 py-2 rounded-xl text-xs font-bold">Batalkan</button>` : 
                    `<button class="flex-1 bg-green-100 text-green-600 py-2 rounded-xl text-xs font-bold" disabled>✓ Reviewed</button>`}
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="px-5 pt-6">
            <h2 class="text-xl font-bold mb-4">Tiket Saya (${userTickets.length})</h2>
            ${ticketsHtml}
        </div>
    `;
}

function openTicketDetail(index) {
    const t = userTickets[index];
    const modal = document.getElementById('ticketDetailModal');
    document.getElementById('ticketDetailContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold text-dark">E-Tiket</h3>
            <button onclick="closeTicketDetail()" class="text-gray-400 bg-gray-100 p-2 rounded-full">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <img src="${t.image}" class="w-full h-40 object-cover rounded-2xl mb-4">
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
        <button onclick="closeTicketDetail()" class="w-full bg-primary text-white py-3 rounded-xl font-bold">Tutup</button>
    `;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeTicketDetail() {
    const modal = document.getElementById('ticketDetailModal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function cancelTicket(index) {
    if (!confirm('Yakin ingin membatalkan tiket ini?')) return;
    userTickets[index].status = 'Dibatalkan';
    save();
    showToast('Tiket berhasil dibatalkan', 'info');
    renderTickets(document.getElementById('app-content'));
}

// ==========================================
// VIEW: PROFILE
// ==========================================
function renderProfile(container) {
    if (!currentUser) {
        container.innerHTML = `
            <div class="flex flex-col items-center justify-center h-full pt-20 px-8 text-center">
                <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                </div>
                <p class="text-gray-500 mb-4 text-sm">Silakan login untuk melihat profil</p>
                <button onclick="openAuth()" class="bg-primary text-white px-6 py-2.5 rounded-xl font-bold">Login Sekarang</button>
            </div>`;
        return;
    }

    const totalSpent = userTickets.filter(t => t.status !== 'Dibatalkan').reduce((sum, t) => sum + t.total, 0);
    const totalTrips = userTickets.filter(t => t.status === 'Selesai').length;

    container.innerHTML = `
        <div class="px-5 pt-6">
            <div class="flex items-center space-x-4 mb-6">
                <img src="${currentUser.avatar}" class="w-16 h-16 rounded-full object-cover border-2 border-primary">
                <div class="flex-1">
                    <h2 class="text-lg font-bold text-dark">${currentUser.name}</h2>
                    <p class="text-xs text-gray-500">${currentUser.email}</p>
                    <span class="inline-block mt-1 bg-blue-100 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">${currentUser.level}</span>
                </div>
            </div>

            <div class="bg-gradient-to-r from-primary to-blue-400 rounded-2xl p-4 text-white shadow-lg mb-6">
                <div class="flex justify-between items-center">
                    <div>
                        <p class="text-xs text-blue-100">Poin MancingYuk</p>
                        <p class="text-2xl font-bold">${currentUser.points}</p>
                    </div>
                    <svg class="w-12 h-12 text-white opacity-40" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
                </div>
                <div class="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/20">
                    <div>
                        <p class="text-[10px] text-blue-100">Total Trip</p>
                        <p class="font-bold">${totalTrips}x</p>
                    </div>
                    <div>
                        <p class="text-[10px] text-blue-100">Total Belanja</p>
                        <p class="font-bold">Rp ${totalSpent.toLocaleString('id-ID')}</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
                <p class="text-xs text-gray-500 mb-1">Bio</p>
                <p class="text-sm text-dark">${currentUser.bio || 'Belum ada bio'}</p>
                <p class="text-[10px] text-gray-400 mt-2">Bergabung sejak ${currentUser.joinDate}</p>
            </div>

            <h3 class="font-bold text-dark mb-3">Pengaturan Akun</h3>
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-100 mb-6">
                <button onclick="openEditProfile()" class="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-primary">👤</div>
                        <span class="text-sm font-medium">Edit Profil</span>
                    </div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <button onclick="openPassword()" class="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">🔒</div>
                        <span class="text-sm font-medium">Ubah Password</span>
                    </div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <button onclick="showHistory()" class="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">📜</div>
                        <span class="text-sm font-medium">Riwayat Transaksi</span>
                    </div>
                    <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
                <button onclick="logout()" class="w-full flex items-center justify-between p-4 hover:bg-red-50">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600">🚪</div>
                        <span class="text-sm font-medium text-red-600">Keluar</span>
                    </div>
                    <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </button>
            </div>

            <div class="mt-4 text-center pb-6">
                <p class="text-xs text-gray-400">MancingYuk! v1.0.0</p>
                <p class="text-[10px] text-gray-300 mt-1">Lebih Banyak Spot. Lebih Banyak Teman. Lebih Banyak Cerita.</p>
            </div>
        </div>
    `;
}

function openAuth() {
    const m = document.getElementById('authModal');
    m.classList.remove('hidden');
    m.classList.add('flex');
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
    save();
    closeEditProfile();
    showToast('Profil berhasil diperbarui');
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
    const oldP = document.getElementById('oldPass').value;
    const newP = document.getElementById('newPass').value;
    if (!oldP || !newP) return showToast('Semua field harus diisi', 'error');
    if (newP.length < 6) return showToast('Password minimal 6 karakter', 'error');
    closePassword();
    showToast('Password berhasil diubah');
}

function showHistory() {
    const total = userTickets.length;
    const spent = userTickets.filter(t => t.status !== 'Dibatalkan').reduce((s, t) => s + t.total, 0);
    showToast(`${total} transaksi • Total Rp ${spent.toLocaleString('id-ID')}`, 'info');
}

// ==========================================
// KOMPONEN
// ==========================================
function renderHowItWorks() {
    const steps = [
        { num: 1, title: "Cari Tempat", desc: "Lihat lokasi, harga, jenis ikan, dan slot." },
        { num: 2, title: "Booking & Bayar", desc: "Pilih tanggal, jumlah orang, dan bayar." },
        { num: 3, title: "Datang & Mancing", desc: "Nikmati pengalaman mancing dengan mudah." },
        { num: 4, title: "Review & Ajak", desc: "Beri ulasan dan ajak teman mancing." }
    ];
    return steps.map(s => `
        <div class="min-w-[150px] bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
            <div class="w-8 h-8 bg-blue-100 text-primary rounded-full flex items-center justify-center font-bold text-sm mb-2">${s.num}</div>
            <h4 class="font-semibold text-xs text-dark">${s.title}</h4>
            <p class="text-[10px] text-gray-500 mt-1 leading-tight">${s.desc}</p>
        </div>
    `).join('');
}

function renderSpots(data) {
    const container = document.getElementById('spotContainer');
    if (!container) return;
    if (data.length === 0) {
        container.innerHTML = `<div class="text-center py-10"><p class="text-gray-400 text-sm">Tidak ada spot ditemukan</p></div>`;
        return;
    }
    container.innerHTML = data.map(spot => {
        const status = spot.slots > 0
            ? `<span class="bg-green-100 text-green-700 px-2 py-1 rounded-md text-[10px] font-bold">Slot: ${spot.slots}</span>`
            : `<span class="bg-red-100 text-red-700 px-2 py-1 rounded-md text-[10px] font-bold">Slot Penuh</span>`;
        return `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 animate-fade-in">
                <div class="relative h-40">
                    <img src="${spot.image}" alt="${spot.name}" class="w-full h-full object-cover" onerror="this.src='https://via.placeholder.com/400x200?text=Spot+Mancing'">
                    <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-800 shadow-sm flex items-center space-x-1">
                        <span class="text-yellow-500">★</span>
                        <span>${spot.rating}</span>
                        <span class="text-gray-400 font-normal">(${spot.reviews})</span>
                    </div>
                    <div class="absolute bottom-3 left-3">${status}</div>
                </div>
                <div class="p-4">
                    <h3 class="text-base font-bold text-dark mb-1">${spot.name}</h3>
                    <p class="text-xs text-gray-500 mb-4 flex items-center">
                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                        ${spot.city} • ${spot.location}
                    </p>
                    <div class="flex justify-between items-center">
                        <div>
                            <p class="text-[10px] text-gray-400">Harga / Orang</p>
                            <p class="text-lg font-bold text-primary">Rp ${spot.price.toLocaleString('id-ID')}</p>
                        </div>
                        <button onclick="openDetail(${spot.id})" class="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-blue-600 transition shadow-md shadow-blue-200">Detail</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// ==========================================
// DETAIL SPOT
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
        <div class="flex justify-between items-start mb-4">
            <div>
                <h3 class="text-xl font-bold text-dark">${selectedSpot.name}</h3>
                <p class="text-xs text-gray-500 mt-1">📍 ${selectedSpot.city} • ${selectedSpot.location}</p>
            </div>
            <button onclick="closeDetail()" class="text-gray-400 bg-gray-100 p-2 rounded-full">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        <img src="${selectedSpot.image}" class="w-full h-48 object-cover rounded-2xl mb-4" onerror="this.src='https://via.placeholder.com/400x200?text=Spot+Mancing'">
        <div class="flex space-x-2 mb-4 overflow-x-auto hide-scrollbar">
            ${selectedSpot.facilities.map(f => `<span class="bg-gray-100 text-gray-600 text-[10px] px-3 py-1 rounded-full whitespace-nowrap">${f}</span>`).join('')}
        </div>
        <p class="text-xs text-gray-500 leading-relaxed mb-6">${selectedSpot.description}</p>
        <div class="bg-blue-50 p-4 rounded-2xl mb-6 border border-blue-100">
            <h4 class="font-bold text-primary text-sm mb-2">Transparansi Harga</h4>
            <div class="flex justify-between text-xs text-gray-600 mb-1">
                <span>Harga Tiket</span>
                <span class="font-semibold">Rp ${selectedSpot.price.toLocaleString('id-ID')}</span>
            </div>
            <div class="flex justify-between text-xs text-gray-600 mb-1">
                <span>Biaya Layanan (8%)</span>
                <span class="font-semibold">Rp ${platformFee.toLocaleString('id-ID')}</span>
            </div>
            <div class="border-t border-blue-200 mt-2 pt-2 flex justify-between text-sm font-bold text-dark">
                <span>Diterima Pemilik</span>
                <span>Rp ${ownerRevenue.toLocaleString('id-ID')}</span>
            </div>
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
        <button onclick="openCheckout()" ${selectedSpot.slots === 0 ? 'disabled' : ''} class="w-full ${selectedSpot.slots === 0 ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary hover:bg-blue-600'} text-white py-3.5 rounded-xl font-bold transition shadow-lg shadow-blue-200 mb-4">${selectedSpot.slots === 0 ? 'Slot Penuh' : 'Lanjut ke Pembayaran'}</button>
        <button onclick="inviteFriend()" class="w-full bg-accent text-white py-3.5 rounded-xl font-bold hover:bg-yellow-600 transition shadow-lg shadow-yellow-200">Ajak Teman Mancing</button>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeDetail() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function updateTotal() {
    if (!selectedSpot) return;
    const qty = parseInt(document.getElementById('qtyInput').value) || 1;
    document.getElementById('totalPrice').innerText = `Rp ${(selectedSpot.price * qty).toLocaleString('id-ID')}`;
}

// ==========================================
// CHECKOUT & PEMBAYARAN
// ==========================================
function openCheckout() {
    const date = document.getElementById('bookingDate').value;
    const qty = parseInt(document.getElementById('qtyInput').value);
    if (!date) return showToast('Pilih tanggal terlebih dahulu', 'error');
    if (qty < 1) return showToast('Jumlah orang minimal 1', 'error');

    bookingData = { spot: selectedSpot, date, qty, total: selectedSpot.price * qty };

    const dateObj = new Date(date);
    const formattedDate = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });

    document.getElementById('checkoutDetails').innerHTML = `
        <div class="flex justify-between mb-1"><span>Spot</span><span class="font-semibold text-dark">${selectedSpot.name}</span></div>
        <div class="flex justify-between mb-1"><span>Tanggal</span><span class="font-semibold text-dark">${formattedDate}</span></div>
        <div class="flex justify-between mb-1"><span>Jumlah</span><span class="font-semibold text-dark">${qty} Orang</span></div>
        <div class="flex justify-between border-t pt-2 mt-2"><span>Subtotal</span><span class="font-bold text-primary">Rp ${bookingData.total.toLocaleString('id-ID')}</span></div>
    `;
    document.getElementById('checkoutTotal').innerText = `Rp ${bookingData.total.toLocaleString('id-ID')}`;
    closeDetail();
    document.getElementById('checkoutModal').classList.remove('hidden');
    document.getElementById('checkoutModal').classList.add('flex');
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

        const dateObj = new Date(bookingData.date);
        const formattedDate = dateObj.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });

        const newTicket = {
            id: `TKT-${String(Date.now()).slice(-6)}`,
            spotName: bookingData.spot.name,
            spotId: bookingData.spot.id,
            date: formattedDate,
            qty: bookingData.qty,
            total: bookingData.total,
            status: "Aktif",
            image: bookingData.spot.image,
            reviewed: false
        };
        userTickets.unshift(newTicket);

        // Update slots
        const spotRef = spots.find(s => s.id === bookingData.spot.id);
        if (spotRef) spotRef.slots = Math.max(0, spotRef.slots - bookingData.qty);

        // Tambah notifikasi
        notifications.unshift({
            id: Date.now(),
            title: "Booking Berhasil",
            msg: `Tiket ${bookingData.spot.name} telah aktif`,
            time: "Baru saja",
            read: false
        });

        // Tambah poin user
        if (currentUser) currentUser.points += Math.floor(bookingData.total / 1000);

        save();
        updateNotifBadge();

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

function closeSuccess(toHome = false) {
    document.getElementById('successModal').classList.add('hidden');
    document.getElementById('successModal').classList.remove('flex');
    if (toHome) switchTab('home');
    else switchTab('tickets');
}

// ==========================================
// REVIEW
// ==========================================
let reviewIndex = -1;
function openReviewFor(index) {
    reviewIndex = index;
    tempRating = 5;
    updateStars();
    document.getElementById('reviewText').value = '';
    document.getElementById('reviewModal').classList.remove('hidden');
    document.getElementById('reviewModal').classList.add('flex');
}

function closeReview() {
    document.getElementById('reviewModal').classList.add('hidden');
    document.getElementById('reviewModal').classList.remove('flex');
}

function setRating(n) {
    tempRating = n;
    updateStars();
}

function updateStars() {
    document.querySelectorAll('#starRating button').forEach((btn, i) => {
        btn.style.color = i < tempRating ? '#f59e0b' : '#d1d5db';
    });
}

function submitReview() {
    if (!currentUser) { closeReview(); return openAuth(); }
    const text = document.getElementById('reviewText').value.trim();
    if (reviewIndex >= 0) {
        userTickets[reviewIndex].reviewed = true;
        const s = spots.find(sp => sp.id === userTickets[reviewIndex].spotId);
        if (s) {
            s.rating = parseFloat(((s.rating * s.reviews + tempRating) / (s.reviews + 1)).toFixed(1));
            s.reviews += 1;
        }
    }
    save();
    closeReview();
    showToast(`Terima kasih! Review ${tempRating} bintang terkirim.`);
    if (document.getElementById('nav-tickets').classList.contains('text-primary')) {
        renderTickets(document.getElementById('app-content'));
    }
}

// ==========================================
// NOTIFIKASI
// ==========================================
function openNotifications() {
    if (!currentUser) return openAuth();
    const modal = document.getElementById('notifModal');
    document.getElementById('notifContent').innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-center mb-4">
            <h3 class="text-lg font-bold">Notifikasi</h3>
            <div class="flex gap-2">
                <button onclick="markAllRead()" class="text-xs text-primary font-semibold">Tandai Semua</button>
                <button onclick="closeNotifications()" class="text-gray-400 bg-gray-100 p-2 rounded-full">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
            </div>
        </div>
        <div class="space-y-3">
            ${notifications.length === 0 ? '<p class="text-center text-gray-400 text-sm py-10">Tidak ada notifikasi</p>' :
                notifications.map(n => `
                    <div class="p-3 rounded-xl border ${n.read ? 'border-gray-100 bg-white' : 'border-blue-100 bg-blue-50'}">
                        <div class="flex justify-between items-start mb-1">
                            <h4 class="font-bold text-sm ${n.read ? 'text-dark' : 'text-primary'}">${n.title}</h4>
                            ${!n.read ? '<span class="w-2 h-2 bg-primary rounded-full"></span>' : ''}
                        </div>
                        <p class="text-xs text-gray-600">${n.msg}</p>
                        <p class="text-[10px] text-gray-400 mt-1">${n.time}</p>
                    </div>
                `).join('')}
        </div>
    `;
    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeNotifications() {
    const modal = document.getElementById('notifModal');
    modal.classList.remove('show');
    setTimeout(() => modal.classList.add('hidden'), 300);
}

function markAllRead() {
    notifications.forEach(n => n.read = true);
    save();
    updateNotifBadge();
    openNotifications();
    showToast('Semua notifikasi telah dibaca', 'info');
}

function updateNotifBadge() {
    const unread = notifications.filter(n => !n.read).length;
    const badge = document.getElementById('notifBadge');
    if (unread > 0) {
        badge.textContent = unread;
        badge.style.display = 'flex';
    } else {
        badge.style.display = 'none';
    }
}

// ==========================================
// INVITE & SHARE
// ==========================================
function inviteFriend() {
    const text = `Ayo mancing bareng di MancingYuk! 🎣\nCari spot & booking di aplikasi MancingYuk!\nhttps://mancingyuk.app/invite/${currentUser?.name?.replace(/\s/g,'').toLowerCase() || 'user'}`;
    if (navigator.share) {
        navigator.share({ title: 'MancingYuk!', text }).catch(() => fallbackCopy(text));
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    navigator.clipboard?.writeText(text).then(() => {
        showToast('Link ajakan tersalin! Ajak temanmu mancing.', 'success');
    }).catch(() => {
        showToast('Link ajakan: mancingyuk.app/invite', 'info');
    });
}

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    updateNotifBadge();
    if (!currentUser) {
        openAuth();
    } else {
        switchTab('home');
    }
});