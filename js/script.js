// ==========================================
// 1. DATA DUMMY (Sesuai Infografis)
// ==========================================
const spots = [
    {
        id: 1,
        name: "Pemancingan Pak Budi",
        location: "Lele, Nila, Mas",
        price: 50000,
        rating: 4.7,
        reviews: 120,
        slots: 20,
        image: "https://images.unsplash.com/photo-1594913251120-2c9c8a6b4e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        available: true,
        facilities: ["Saung", "Parkir Luas", "Kantin", "Sewa Alat"]
    },
    {
        id: 2,
        name: "Kolam Mancing Sejahtera",
        location: "Gurame, Patin",
        price: 75000,
        rating: 4.5,
        reviews: 85,
        slots: 15,
        image: "https://images.unsplash.com/photo-1582234472918-8331c77883c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        available: true,
        facilities: ["AC Room", "Mushola", "WiFi", "Resto"]
    },
    {
        id: 3,
        name: "Spot Alam Liar (Waduk)",
        location: "Bawal, Nila",
        price: 30000,
        rating: 4.8,
        reviews: 200,
        slots: 0,
        image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        available: false,
        facilities: ["Camping Ground", "Toilet Umum"]
    }
];

// ==========================================
// 2. NAVIGASI TAB (SPA)
// ==========================================
function switchTab(tabName) {
    // Reset semua warna nav
    ['home', 'explore', 'tickets', 'owner'].forEach(tab => {
        const btn = document.getElementById(`nav-${tab}`);
        btn.className = "flex flex-col items-center text-gray-400 hover:text-primary transition";
        btn.querySelector('svg').setAttribute('fill', 'none');
        btn.querySelector('svg').setAttribute('stroke', 'currentColor');
    });

    // Aktifkan tab yang dipilih
    const activeBtn = document.getElementById(`nav-${tabName}`);
    activeBtn.className = "flex flex-col items-center text-primary";
    activeBtn.querySelector('svg').setAttribute('fill', 'currentColor');
    activeBtn.querySelector('svg').removeAttribute('stroke');

    // Render konten berdasarkan tab
    const content = document.getElementById('app-content');
    if (tabName === 'home') renderHome(content);
    else if (tabName === 'explore') renderExplore(content);
    else if (tabName === 'tickets') renderTickets(content);
    else if (tabName === 'owner') renderOwner(content);
    
    content.scrollTop = 0;
}

// ==========================================
// 3. RENDER HALAMAN (VIEWS)
// ==========================================

// --- VIEW: HOME ---
function renderHome(container) {
    container.innerHTML = `
        <div class="px-5 pt-4 pb-2 bg-white rounded-b-3xl shadow-sm">
            <p class="text-sm text-gray-500 mb-3">Mau mancing di mana hari ini?</p>
            <div class="flex items-center bg-gray-100 rounded-2xl p-1 border border-gray-200">
                <svg class="w-5 h-5 text-gray-400 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <input type="text" id="searchInput" placeholder="Cari spot, jenis ikan..." class="w-full px-3 py-3 bg-transparent text-sm focus:outline-none" oninput="searchSpots(this.value)">
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
                <a href="#" onclick="switchTab('explore')" class="text-xs text-primary font-semibold">Lihat Semua</a>
            </div>
            <div id="spotContainer" class="space-y-4">
                <!-- Kartu Spot akan di-render -->
            </div>
        </div>
    `;
    renderSpots(spots);
}

// --- VIEW: EXPLORE ---
function renderExplore(container) {
    container.innerHTML = `
        <div class="px-5 pt-4 pb-2 bg-white">
            <h2 class="text-lg font-bold mb-3">Explore Spot</h2>
            <div class="flex space-x-2 overflow-x-auto hide-scrollbar">
                <button class="bg-primary text-white px-4 py-2 rounded-full text-xs font-semibold">Semua</button>
                <button class="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-semibold">Lele</button>
                <button class="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-semibold">Nila</button>
                <button class="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-semibold">Gurame</button>
                <button class="bg-gray-200 text-gray-600 px-4 py-2 rounded-full text-xs font-semibold">Bawal</button>
            </div>
        </div>
        <div class="px-5 mt-4">
            <div id="spotContainer" class="space-y-4"></div>
        </div>
    `;
    renderSpots(spots);
}

// --- VIEW: TIKET (Riwayat Booking) ---
function renderTickets(container) {
    container.innerHTML = `
        <div class="px-5 pt-6">
            <h2 class="text-xl font-bold mb-4">Tiket Saya</h2>
            <div class="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4">
                <div class="flex justify-between items-center border-b pb-3 mb-3">
                    <span class="font-bold text-primary">Pemancingan Pak Budi</span>
                    <span class="bg-green-100 text-green-700 text-[10px] px-2 py-1 rounded font-bold">Selesai</span>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Tanggal</span>
                    <span class="font-semibold text-dark">25 Okt 2023</span>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Jumlah Orang</span>
                    <span class="font-semibold text-dark">2 Orang</span>
                </div>
                <div class="flex justify-between text-xs text-gray-500 mt-3 pt-3 border-t">
                    <span>Total Bayar</span>
                    <span class="font-bold text-primary">Rp 100.000</span>
                </div>
                <button onclick="openReviewModal()" class="mt-4 w-full bg-accent text-white py-2 rounded-xl text-sm font-bold">Beri Review</button>
            </div>
            <p class="text-center text-gray-400 text-sm mt-10">Belum ada tiket lain.</p>
        </div>
    `;
}

// --- VIEW: OWNER DASHBOARD (Untuk Pemilik Pemancingan) ---
function renderOwner(container) {
    container.innerHTML = `
        <div class="px-5 pt-6">
            <div class="bg-dark rounded-2xl p-5 text-white mb-6">
                <h2 class="text-lg font-bold mb-1">Dashboard Pemilik</h2>
                <p class="text-sm text-gray-300">Kelola pemancingan Anda di sini.</p>
                <div class="grid grid-cols-2 gap-4 mt-5">
                    <div class="bg-white/10 p-3 rounded-xl">
                        <p class="text-xs text-gray-300">Pendapatan Hari Ini</p>
                        <p class="text-lg font-bold text-green-400">Rp 1.250.000</p>
                    </div>
                    <div class="bg-white/10 p-3 rounded-xl">
                        <p class="text-xs text-gray-300">Booking Masuk</p>
                        <p class="text-lg font-bold text-accent">12 Tiket</p>
                    </div>
                </div>
            </div>

            <h3 class="font-bold text-dark mb-3">Menu Pengelolaan</h3>
            <div class="space-y-3">
                <div class="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between border border-gray-100">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-primary">📋</div>
                        <div>
                            <p class="font-semibold text-sm">Daftar Tempat</p>
                            <p class="text-[10px] text-gray-500">Kelola informasi spot Anda</p>
                        </div>
                    </div>
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
                <div class="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between border border-gray-100">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">💰</div>
                        <div>
                            <p class="font-semibold text-sm">Atur Harga & Jadwal</p>
                            <p class="text-[10px] text-gray-500">Sesuaikan tarif dan slot</p>
                        </div>
                    </div>
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
                <div class="bg-white p-4 rounded-2xl shadow-sm flex items-center justify-between border border-gray-100">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">📊</div>
                        <div>
                            <p class="font-semibold text-sm">Laporan & Statistik</p>
                            <p class="text-[10px] text-gray-500">Lihat performa pemancingan</p>
                        </div>
                    </div>
                    <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
            </div>

            <div class="mt-8 bg-blue-50 p-4 rounded-2xl border border-blue-100">
                <h4 class="font-bold text-primary text-sm mb-2">Mengapa Bergabung?</h4>
                <p class="text-xs text-gray-600 leading-relaxed">Dapatkan lebih banyak pelanggan, kelola booking dengan mudah, dan nikmati promosi gratis di platform MancingYuk!</p>
            </div>
        </div>
    `;
}

// ==========================================
// 4. KOMPONEN & FUNGSI PENDUKUNG
// ==========================================

function renderHowItWorks() {
    const steps = [
        { num: 1, title: "Cari Tempat", desc: "Lihat lokasi, harga, jenis ikan, rating, dan ketersediaan slot." },
        { num: 2, title: "Booking & Bayar", desc: "Pilih tanggal, jumlah orang, dan lakukan pembayaran." },
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
    container.innerHTML = '';

    if (data.length === 0) {
        container.innerHTML = `<p class="text-center text-gray-500 py-6 text-sm">Spot tidak ditemukan.</p>`;
        return;
    }

    data.forEach(spot => {
        const statusBadge = spot.available 
            ? `<span class="bg-green-100 text-green-700 px-2 py-1 rounded-md text-[10px] font-bold">Slot tersedia: ${spot.slots}</span>`
            : `<span class="bg-red-100 text-red-700 px-2 py-1 rounded-md text-[10px] font-bold">Slot Penuh</span>`;

        const card = `
            <div class="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
                <div class="relative h-40">
                    <img src="${spot.image}" alt="${spot.name}" class="w-full h-full object-cover">
                    <div class="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold text-gray-800 shadow-sm flex items-center space-x-1">
                        <span class="text-yellow-500">★</span>
                        <span>${spot.rating}</span>
                        <span class="text-gray-400 font-normal">(${spot.reviews})</span>
                    </div>
                    <div class="absolute bottom-3 left-3">${statusBadge}</div>
                </div>
                <div class="p-4">
                    <h3 class="text-base font-bold text-dark mb-1">${spot.name}</h3>
                    <p class="text-xs text-gray-500 mb-4 flex items-center">
                        <svg class="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        Ikan: ${spot.location}
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
        container.innerHTML += card;
    });
}

function searchSpots(query) {
    const filtered = spots.filter(s => 
        s.name.toLowerCase().includes(query.toLowerCase()) || 
        s.location.toLowerCase().includes(query.toLowerCase())
    );
    renderSpots(filtered);
}

// ==========================================
// 5. DETAIL & BOOKING (Simulasi Revenue Model)
// ==========================================
let selectedSpot = null;

function openDetail(id) {
    selectedSpot = spots.find(s => s.id === id);
    const modal = document.getElementById('detailModal');
    const content = document.getElementById('detailContent');
    
    // Simulasi Perhitungan Revenue Model (sesuai infografis)
    const platformFee = selectedSpot.price * 0.08; // 8% fee
    const ownerRevenue = selectedSpot.price - platformFee;

    content.innerHTML = `
        <div class="w-12 h-1.5 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div class="flex justify-between items-start mb-4">
            <div>
                <h3 class="text-xl font-bold text-dark">${selectedSpot.name}</h3>
                <p class="text-xs text-gray-500 mt-1">📍 ${selectedSpot.location}</p>
            </div>
            <button onclick="closeDetail()" class="text-gray-400 bg-gray-100 p-2 rounded-full">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
        
        <img src="${selectedSpot.image}" class="w-full h-48 object-cover rounded-2xl mb-4">
        
        <div class="flex space-x-2 mb-4 overflow-x-auto hide-scrollbar">
            ${selectedSpot.facilities.map(f => `<span class="bg-gray-100 text-gray-600 text-[10px] px-3 py-1 rounded-full whitespace-nowrap">${f}</span>`).join('')}
        </div>

        <div class="bg-blue-50 p-4 rounded-2xl mb-4 border border-blue-100">
            <h4 class="font-bold text-primary text-sm mb-2">Detail Harga</h4>
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

        <div class="mb-6">
            <label class="block text-xs font-medium text-gray-500 mb-2">Jumlah Orang</label>
            <input type="number" id="qtyInput" min="1" max="10" value="2" class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary outline-none text-sm" oninput="updateTotal()">
        </div>

        <div class="bg-gray-50 p-4 rounded-xl flex justify-between items-center mb-6">
            <span class="text-sm font-medium text-gray-600">Total Bayar</span>
            <p id="totalPrice" class="text-xl font-bold text-primary">Rp ${(selectedSpot.price * 2).toLocaleString('id-ID')}</p>
        </div>

        <button onclick="confirmBooking()" class="w-full bg-primary text-white py-3.5 rounded-xl font-bold hover:bg-blue-600 transition shadow-lg shadow-blue-200 mb-4">Booking Sekarang</button>
        <button onclick="inviteFriend()" class="w-full bg-accent text-white py-3.5 rounded-xl font-bold hover:bg-yellow-600 transition shadow-lg shadow-yellow-200">Ajak Teman Mancing</button>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => { modal.classList.add('show'); }, 10);
}

function closeDetail() {
    const modal = document.getElementById('detailModal');
    modal.classList.remove('show');
    setTimeout(() => { modal.classList.add('hidden'); }, 300);
}

function updateTotal() {
    if (!selectedSpot) return;
    const qty = parseInt(document.getElementById('qtyInput').value) || 1;
    const total = selectedSpot.price * qty;
    document.getElementById('totalPrice').innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

function confirmBooking() {
    closeDetail();
    showToast('Booking Berhasil! Sampai jumpa di lokasi.');
    // Simulasi pindah ke tab tiket
    setTimeout(() => switchTab('tickets'), 1500);
}

function inviteFriend() {
    showToast('Link ajakan berhasil disalin! Ajak temanmu mancing.');
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-dark text-white px-5 py-3 rounded-xl shadow-2xl z-[80] flex items-center space-x-2 text-sm w-[90%] justify-center transition-opacity duration-300';
    toast.innerHTML = `<svg class="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg><span>${message}</span>`;
    document.querySelector('.relative.w-full.h-full').appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; setTimeout(() => toast.remove(), 300); }, 2500);
}

// ==========================================
// 6. REVIEW MODAL
// ==========================================
function openReviewModal() {
    document.getElementById('reviewModal').classList.remove('hidden');
}

function submitReview() {
    document.getElementById('reviewModal').classList.add('hidden');
    showToast('Terima kasih! Review Anda sangat berharga.');
}

// Inisialisasi awal
document.addEventListener('DOMContentLoaded', () => {
    switchTab('home');
});