// Data Dummy (Simulasi Database)
const spots = [
    {
        id: 1,
        name: "Pemancingan Pak Budi",
        location: "Lele, Nila, Mas",
        price: 50000,
        rating: 4.7,
        reviews: 120,
        image: "https://images.unsplash.com/photo-1594913251120-2c9c8a6b4e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        available: true
    },
    {
        id: 2,
        name: "Kolam Mancing Sejahtera",
        location: "Gurame, Patin",
        price: 75000,
        rating: 4.5,
        reviews: 85,
        image: "https://images.unsplash.com/photo-1582234472918-8331c77883c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        available: true
    },
    {
        id: 3,
        name: "Spot Alam Liar (Waduk)",
        location: "Bawal, Nila",
        price: 30000,
        rating: 4.8,
        reviews: 200,
        image: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        available: false
    }
];

// Fungsi untuk merender kartu spot ke dalam HTML
function renderSpots(data) {
    const container = document.getElementById('spotContainer');
    container.innerHTML = ''; // Kosongkan container

    if (data.length === 0) {
        container.innerHTML = `<p class="col-span-3 text-center text-gray-500 py-10">Spot tidak ditemukan. Coba kata kunci lain.</p>`;
        return;
    }

    data.forEach(spot => {
        const statusBadge = spot.available 
            ? `<span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold">Tersedia</span>`
            : `<span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-bold">Penuh</span>`;

        const card = `
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">
                <div class="relative h-48">
                    <img src="${spot.image}" alt="${spot.name}" class="w-full h-full object-cover">
                    <div class="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-bold text-gray-800 shadow">
                        ⭐ ${spot.rating} (${spot.reviews})
                    </div>
                </div>
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <h3 class="text-xl font-bold text-gray-800">${spot.name}</h3>
                        ${statusBadge}
                    </div>
                    <p class="text-gray-500 text-sm mb-4">Ikan: ${spot.location}</p>
                    <div class="flex justify-between items-center border-t pt-4">
                        <div>
                            <p class="text-xs text-gray-400">Harga / Orang</p>
                            <p class="text-xl font-bold text-primary">Rp ${spot.price.toLocaleString('id-ID')}</p>
                        </div>
                        <button onclick="openBooking(${spot.id}, '${spot.name}', ${spot.price})" 
                                class="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition ${!spot.available ? 'opacity-50 cursor-not-allowed' : ''}"
                                ${!spot.available ? 'disabled' : ''}>
                            Booking Sekarang
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Fungsi Pencarian
function searchSpots() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filteredSpots = spots.filter(spot => 
        spot.name.toLowerCase().includes(query) || 
        spot.location.toLowerCase().includes(query)
    );
    renderSpots(filteredSpots);
}

// Logika Modal Booking
let currentSpot = null;

function openBooking(id, name, price) {
    currentSpot = { id, name, price };
    document.getElementById('modalSpotName').innerText = name;
    updateTotalPrice(price); // Default 2 orang
    document.getElementById('bookingModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('bookingModal').classList.add('hidden');
}

// Update harga total di modal saat jumlah orang berubah
document.addEventListener('DOMContentLoaded', () => {
    const qtyInput = document.querySelector('#bookingForm input[type="number"]');
    if(qtyInput) {
        qtyInput.addEventListener('input', (e) => {
            if(currentSpot) updateTotalPrice(currentSpot.price);
        });
    }
    // Render awal
    renderSpots(spots);
});

function updateTotalPrice(price) {
    const qty = parseInt(document.querySelector('#bookingForm input[type="number"]').value) || 1;
    const total = price * qty;
    document.getElementById('modalTotalPrice').innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

// Submit Booking (Simulasi)
function submitBooking(event) {
    event.preventDefault();
    closeModal();
    
    // Tampilkan notifikasi sukses (bisa diganti dengan alert biasa)
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-10 right-10 bg-green-500 text-white px-6 py-4 rounded-lg shadow-2xl animate-fade-in z-50 flex items-center space-x-3';
    notification.innerHTML = `
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
        <span>Booking Berhasil! Sampai jumpa di ${currentSpot.name}!</span>
    `;
    document.body.appendChild(notification);
    
    // Hapus notifikasi setelah 3 detik
    setTimeout(() => {
        notification.remove();
    }, 3000);
    
    // Reset form
    event.target.reset();
}