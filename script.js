/* =========================================================
   ANDIJON AVTO AUKSION — Interaktiv JavaScript Mantiqiy Qismi
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dastlabki Andijon (60) davlat raqamlari ma'lumotlar bazasi
    const now = Date.now();
    const HOUR = 3600 * 1000;
    const MIN = 60 * 1000;

    const initialPlates = [
        {
            id: 'plate-1',
            region: '60',
            code: 'A 777 AA',
            fullCode: '60 A 777 AA',
            category: 'Oltin kombinatsiya',
            isSpecial: true,
            isNew: false,
            startPrice: 65000000,
            currentBid: 85500000,
            step: 1500000,
            bidsCount: 19,
            endTime: now + (2 * HOUR + 45 * MIN),
            history: [
                { user: 'Sardorbek M. (+998 90 *** 44 12)', amount: 85500000, time: '12 daqiqa oldin' },
                { user: 'Jamshid T. (+998 91 *** 88 01)', amount: 84000000, time: '38 daqiqa oldin' },
                { user: 'Otabek R. (+998 93 *** 19 77)', amount: 81000000, time: '1 soat oldin' }
            ]
        },
        {
            id: 'plate-2',
            region: '60',
            code: 'B 001 BB',
            fullCode: '60 B 001 BB',
            category: 'VIP Kombinatsiya',
            isSpecial: true,
            isNew: true,
            startPrice: 55000000,
            currentBid: 72000000,
            step: 1000000,
            bidsCount: 14,
            endTime: now + (5 * HOUR + 20 * MIN),
            history: [
                { user: 'Azizbek K. (+998 94 *** 55 90)', amount: 72000000, time: '19 daqiqa oldin' },
                { user: 'Dilshod A. (+998 90 *** 11 23)', amount: 70000000, time: '1 soat oldin' }
            ]
        },
        {
            id: 'plate-3',
            region: '60',
            code: 'C 777 CC',
            fullCode: '60 C 777 CC',
            category: 'Oltin kombinatsiya',
            isSpecial: true,
            isNew: false,
            startPrice: 60000000,
            currentBid: 78500000,
            step: 1500000,
            bidsCount: 16,
            endTime: now + (1 * HOUR + 15 * MIN),
            history: [
                { user: 'Boburjon N. (+998 99 *** 77 00)', amount: 78500000, time: '5 daqiqa oldin' },
                { user: 'Farrux S. (+998 91 *** 32 45)', amount: 77000000, time: '29 daqiqa oldin' }
            ]
        },
        {
            id: 'plate-4',
            region: '60',
            code: 'D 888 DD',
            fullCode: '60 D 888 DD',
            category: 'Maxsus to‘plam',
            isSpecial: true,
            isNew: false,
            startPrice: 48000000,
            currentBid: 61500000,
            step: 1000000,
            bidsCount: 11,
            endTime: now + (4 * HOUR + 10 * MIN),
            history: [
                { user: 'Ulug‘bek X. (+998 97 *** 88 88)', amount: 61500000, time: '41 daqiqa oldin' }
            ]
        },
        {
            id: 'plate-5',
            region: '60',
            code: 'E 555 EE',
            fullCode: '60 E 555 EE',
            category: 'Maxsus to‘plam',
            isSpecial: true,
            isNew: true,
            startPrice: 42000000,
            currentBid: 51000000,
            step: 1000000,
            bidsCount: 9,
            endTime: now + (6 * HOUR + 50 * MIN),
            history: [
                { user: 'Shohrux Y. (+998 90 *** 55 15)', amount: 51000000, time: '50 daqiqa oldin' }
            ]
        },
        {
            id: 'plate-6',
            region: '60',
            code: 'A 100 AA',
            fullCode: '60 A 100 AA',
            category: 'Yaxlit raqam',
            isSpecial: false,
            isNew: false,
            startPrice: 28000000,
            currentBid: 34500000,
            step: 500000,
            bidsCount: 13,
            endTime: now + (0 * HOUR + 48 * MIN),
            history: [
                { user: 'Mirkomil Q. (+998 93 *** 10 01)', amount: 34500000, time: '8 daqiqa oldin' }
            ]
        },
        {
            id: 'plate-7',
            region: '60',
            code: 'B 707 BB',
            fullCode: '60 B 707 BB',
            category: 'Ko‘zgu raqam',
            isSpecial: false,
            isNew: true,
            startPrice: 18000000,
            currentBid: 23500000,
            step: 500000,
            bidsCount: 11,
            endTime: now + (3 * HOUR + 30 * MIN),
            history: [
                { user: 'Nodirbek E. (+998 91 *** 70 70)', amount: 23500000, time: '22 daqiqa oldin' }
            ]
        },
        {
            id: 'plate-8',
            region: '60',
            code: 'C 999 CC',
            fullCode: '60 C 999 CC',
            category: 'Oltin kombinatsiya',
            isSpecial: true,
            isNew: false,
            startPrice: 52000000,
            currentBid: 67000000,
            step: 1000000,
            bidsCount: 15,
            endTime: now + (2 * HOUR + 5 * MIN),
            history: [
                { user: 'Rustamjon G. (+998 90 *** 99 09)', amount: 67000000, time: '14 daqiqa oldin' }
            ]
        },
        {
            id: 'plate-9',
            region: '60',
            code: 'X 777 XX',
            fullCode: '60 X 777 XX',
            category: 'Eksklyuziv',
            isSpecial: true,
            isNew: true,
            startPrice: 70000000,
            currentBid: 92000000,
            step: 2000000,
            bidsCount: 22,
            endTime: now + (7 * HOUR + 15 * MIN),
            history: [
                { user: 'Bekzod M. (+998 99 *** 77 77)', amount: 92000000, time: '3 daqiqa oldin' }
            ]
        },
        {
            id: 'plate-10',
            region: '60',
            code: 'M 010 MM',
            fullCode: '60 M 010 MM',
            category: 'Ko‘zgu raqam',
            isSpecial: false,
            isNew: false,
            startPrice: 12000000,
            currentBid: 15500000,
            step: 500000,
            bidsCount: 7,
            endTime: now + (1 * HOUR + 35 * MIN),
            history: [
                { user: 'Akmaljon P. (+998 94 *** 10 10)', amount: 15500000, time: '33 daqiqa oldin' }
            ]
        },
        {
            id: 'plate-11',
            region: '60',
            code: 'K 303 KK',
            fullCode: '60 K 303 KK',
            category: 'Standart chiroyli',
            isSpecial: false,
            isNew: true,
            startPrice: 8500000,
            currentBid: 10500000,
            step: 250000,
            bidsCount: 8,
            endTime: now + (4 * HOUR + 55 * MIN),
            history: [
                { user: 'Sanjarbek L. (+998 90 *** 30 30)', amount: 10500000, time: '1 soat oldin' }
            ]
        },
        {
            id: 'plate-12',
            region: '60',
            code: 'O 070 OO',
            fullCode: '60 O 070 OO',
            category: 'Ko‘zgu raqam',
            isSpecial: false,
            isNew: false,
            startPrice: 14000000,
            currentBid: 17500000,
            step: 500000,
            bidsCount: 7,
            endTime: now + (0 * HOUR + 39 * MIN),
            history: [
                { user: 'Dostonbek V. (+998 93 *** 70 07)', amount: 17500000, time: '11 daqiqa oldin' }
            ]
        }
    ];

    // 2. LocalStorage kalitlari va holatni yuklash
    const STORAGE_KEYS = {
        PLATES: 'andijon_auksion_plates_v1',
        FAVORITES: 'andijon_auksion_favorites_v1',
        USER: 'andijon_auksion_user_v1',
        AUTH_VISITED: 'andijon_auksion_visited_v1',
        THEME: 'andijon_auksion_theme_v1'
    };

    let plates = JSON.parse(localStorage.getItem(STORAGE_KEYS.PLATES)) || initialPlates;
    let favorites = JSON.parse(localStorage.getItem(STORAGE_KEYS.FAVORITES)) || [];
    let currentUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER)) || null;
    let activeFilter = 'all';
    let searchQuery = '';
    let sortBy = 'default';
    let activeModalPlateId = null;

    // Agar saqlangan vaqt o‘tib ketgan bo‘lsa, demo uchun vaqtni yangilab qo‘yish
    plates = plates.map((p, idx) => {
        if (p.endTime <= Date.now()) {
            p.endTime = Date.now() + ((idx % 6) + 1) * HOUR + 25 * MIN;
        }
        return p;
    });
    savePlates();

    // 3. DOM Elementlar
    const loader = document.getElementById('loader');
    const platesGrid = document.getElementById('platesGrid');
    const favoritesContainer = document.getElementById('favoritesContainer');
    const emptyFavorites = document.getElementById('emptyFavorites');
    const favCountBadge = document.getElementById('favCountBadge');
    const resultsCounter = document.getElementById('resultsCounter');
    const searchInput = document.getElementById('searchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');
    const sortSelect = document.getElementById('sortSelect');
    const categoryFilters = document.getElementById('categoryFilters');
    const themeToggle = document.getElementById('themeToggle');
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const backToTop = document.getElementById('backToTop');
    const toastContainer = document.getElementById('toastContainer');

    // Modallar
    const plateModal = document.getElementById('plateModal');
    const closePlateModal = document.getElementById('closePlateModal');
    const plateModalContent = document.getElementById('plateModalContent');

    const authModal = document.getElementById('authModal');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const authOpenBtn = document.getElementById('authOpenBtn');
    const userControls = document.getElementById('userControls');
    const skipAuthBtn = document.getElementById('skipAuthBtn');

    // 4. Yordamchi funksiyalar
    function savePlates() {
        localStorage.setItem(STORAGE_KEYS.PLATES, JSON.stringify(plates));
    }

    function saveFavorites() {
        localStorage.setItem(STORAGE_KEYS.FAVORITES, JSON.stringify(favorites));
        updateFavoriteBadge();
    }

    function formatCurrency(amount) {
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' so‘m';
    }

    function formatTimeLeft(endTime) {
        const diff = endTime - Date.now();
        if (diff <= 0) return 'Yakunlandi';

        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <span>${message}</span>
            <button style="background:none;border:none;color:#fff;cursor:pointer;font-size:1.1rem;" onclick="this.parentElement.remove()">&times;</button>
        `;
        toastContainer.appendChild(toast);

        setTimeout(() => {
            if (toast.parentElement) {
                toast.style.opacity = '0';
                toast.style.transform = 'translateX(40px)';
                toast.style.transition = 'all 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }
        }, 3800);
    }

    // 5. Tungi va kunduzgi rejim (Theme)
    function initTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem(STORAGE_KEYS.THEME, next);
        showToast(next === 'dark' ? 'Tungi rejim yoqildi' : 'Kunduzgi rejim yoqildi');
    });

    // 6. Davlat raqami HTML shabloni
    function renderPlateHTML(plate, isLarge = false) {
        return `
            <div class="uz-plate ${isLarge ? 'uz-plate-lg' : ''}">
                <div class="plate-region">${plate.region}</div>
                <div class="plate-divider"></div>
                <div class="plate-number">${plate.code}</div>
                <div class="plate-flag">
                    <div class="flag-stripes">
                        <span class="f-blue"></span>
                        <span class="f-white"></span>
                        <span class="f-green"></span>
                    </div>
                    <span class="uz-code">UZ</span>
                </div>
            </div>
        `;
    }

    // 7. Kartochka yaratish
    function createPlateCard(plate) {
        const isFav = favorites.includes(plate.id);
        const card = document.createElement('div');
        card.className = 'plate-card';
        card.innerHTML = `
            <div>
                <div class="card-top-bar">
                    <span class="category-badge ${plate.isSpecial ? 'badge-vip' : 'badge-standard'}">
                        ${plate.category}
                    </span>
                    <button class="fav-btn ${isFav ? 'active' : ''}" data-fav-id="${plate.id}" title="${isFav ? 'Sevimlilardan olib tashlash' : 'Sevimlilarga qo‘shish'}">
                        ${isFav ? '♥' : '♡'}
                    </button>
                </div>

                <div class="card-plate-wrapper">
                    ${renderPlateHTML(plate)}
                </div>

                <div class="card-details">
                    <div class="detail-row">
                        <span class="detail-label">Boshlang‘ich narx:</span>
                        <span class="detail-value">${formatCurrency(plate.startPrice)}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Hozirgi taklif:</span>
                        <span class="current-bid-value">${formatCurrency(plate.currentBid)}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Tugash vaqti:</span>
                        <span class="countdown-box" data-timer-id="${plate.id}">${formatTimeLeft(plate.endTime)}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Ishtirokchilar:</span>
                        <span class="detail-value">${plate.bidsCount} ta taklif</span>
                    </div>
                </div>
            </div>

            <div class="card-actions">
                <button class="btn btn-outline btn-sm" data-detail-id="${plate.id}">Batafsil</button>
                <button class="btn btn-primary btn-sm" data-bid-id="${plate.id}">Taklif berish</button>
            </div>
        `;
        return card;
    }

    // 8. Katalog va Sevimlilarni render qilish
    function getFilteredPlates() {
        let filtered = [...plates];

        // Qidiruv
        if (searchQuery.trim() !== '') {
            const q = searchQuery.toLowerCase().replace(/\s+/g, '');
            filtered = filtered.filter(p => p.fullCode.toLowerCase().replace(/\s+/g, '').includes(q));
        }

        // Kategoriya filtrlari
        if (activeFilter === 'cheapest') {
            filtered.sort((a, b) => a.currentBid - b.currentBid);
        } else if (activeFilter === 'expensive') {
            filtered.sort((a, b) => b.currentBid - a.currentBid);
        } else if (activeFilter === 'newest') {
            filtered = filtered.filter(p => p.isNew);
        } else if (activeFilter === 'ending') {
            filtered.sort((a, b) => a.endTime - b.endTime);
            filtered = filtered.slice(0, 6);
        } else if (activeFilter === 'special') {
            filtered = filtered.filter(p => p.isSpecial);
        }

        // Qo‘shimcha saralash
        if (sortBy === 'price-asc') {
            filtered.sort((a, b) => a.currentBid - b.currentBid);
        } else if (sortBy === 'price-desc') {
            filtered.sort((a, b) => b.currentBid - a.currentBid);
        } else if (sortBy === 'ending-soon') {
            filtered.sort((a, b) => a.endTime - b.endTime);
        } else if (sortBy === 'bids-desc') {
            filtered.sort((a, b) => b.bidsCount - a.bidsCount);
        }

        return filtered;
    }

    function renderCatalog() {
        const list = getFilteredPlates();
        platesGrid.innerHTML = '';

        resultsCounter.innerHTML = `Jami <strong>${list.length}</strong> ta davlat raqami topildi`;
        resetFiltersBtn.style.display = (activeFilter !== 'all' || searchQuery !== '' || sortBy !== 'default') ? 'inline-block' : 'none';

        if (list.length === 0) {
            platesGrid.innerHTML = `
                <div class="empty-state" style="grid-column: 1 / -1;">
                    <div class="empty-icon">🔍</div>
                    <h3>Hech qanday raqam topilmadi</h3>
                    <p>Qidiruv so‘zini o‘zgartiring yoki filtrlarni tozalang.</p>
                </div>
            `;
            return;
        }

        list.forEach(plate => {
            platesGrid.appendChild(createPlateCard(plate));
        });
    }

    function renderFavorites() {
        const favPlates = plates.filter(p => favorites.includes(p.id));
        favoritesContainer.innerHTML = '';

        if (favPlates.length === 0) {
            emptyFavorites.style.display = 'block';
            favoritesContainer.style.display = 'none';
        } else {
            emptyFavorites.style.display = 'none';
            favoritesContainer.style.display = 'grid';
            favPlates.forEach(plate => {
                favoritesContainer.appendChild(createPlateCard(plate));
            });
        }
    }

    function updateFavoriteBadge() {
        favCountBadge.textContent = favorites.length;
    }

    function toggleFavorite(plateId) {
        const index = favorites.indexOf(plateId);
        const plate = plates.find(p => p.id === plateId);
        if (index === -1) {
            favorites.push(plateId);
            showToast(`${plate.fullCode} sevimlilarga qo‘shildi`, 'success');
        } else {
            favorites.splice(index, 1);
            showToast(`${plate.fullCode} sevimlilardan olib tashlandi`);
        }
        saveFavorites();
        renderCatalog();
        renderFavorites();
    }

    // 9. Batafsil ma'lumot va Auksion Modal oynasi
    function openPlateModal(plateId, focusInput = false) {
        const plate = plates.find(p => p.id === plateId);
        if (!plate) return;
        activeModalPlateId = plateId;

        const minNextBid = plate.currentBid + plate.step;

        plateModalContent.innerHTML = `
            <div class="modal-plate-hero">
                ${renderPlateHTML(plate, true)}
                <div class="modal-plate-meta">
                    <span>Hudud: <strong>Andijon (60)</strong></span>
                    <span>•</span>
                    <span>Toifa: <strong>${plate.category}</strong></span>
                    <span>•</span>
                    <span>Holati: <strong style="color:#4ade80;">Faol Demo Auksion</strong></span>
                </div>
            </div>

            <div class="modal-info-grid">
                <div class="info-tile">
                    <span>Boshlang‘ich narx</span>
                    <strong>${formatCurrency(plate.startPrice)}</strong>
                </div>
                <div class="info-tile">
                    <span>Hozirgi eng yuqori taklif</span>
                    <strong style="color: var(--accent-bright-blue);">${formatCurrency(plate.currentBid)}</strong>
                </div>
                <div class="info-tile">
                    <span>Qolgan vaqt</span>
                    <strong class="countdown-box" data-timer-id="${plate.id}">${formatTimeLeft(plate.endTime)}</strong>
                </div>
                <div class="info-tile">
                    <span>Ishtirokchilar / Takliflar</span>
                    <strong>${plate.bidsCount} ta taklif</strong>
                </div>
            </div>

            <div class="bid-action-box">
                <h4>Yangi taklif kiritish (Demo)</h4>
                <p class="bid-hint">Minimal keyingi taklif: <strong>${formatCurrency(minNextBid)}</strong> (Qadam: ${formatCurrency(plate.step)})</p>
                <div class="bid-input-row">
                    <input type="number" id="modalBidInput" value="${minNextBid}" min="${minNextBid}" step="${plate.step}">
                    <button class="btn btn-gold" id="submitBidBtn">Taklif berish</button>
                </div>
                <div class="quick-bid-pills">
                    <button type="button" class="quick-bid-btn" data-add="${plate.step}">+${formatCurrency(plate.step)}</button>
                    <button type="button" class="quick-bid-btn" data-add="${plate.step * 2}">+${formatCurrency(plate.step * 2)}</button>
                    <button type="button" class="quick-bid-btn" data-add="${plate.step * 5}">+${formatCurrency(plate.step * 5)}</button>
                </div>
            </div>

            <div class="bid-history-section">
                <h4>Takliflar tarixi (${plate.history.length})</h4>
                <div class="bid-history-list">
                    ${plate.history.map(item => `
                        <div class="bid-history-item">
                            <div>
                                <div class="bid-user">${item.user}</div>
                                <div class="bid-time">${item.time}</div>
                            </div>
                            <div class="bid-amount">${formatCurrency(item.amount)}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        plateModal.classList.add('open');

        const bidInput = document.getElementById('modalBidInput');
        if (focusInput && bidInput) {
            setTimeout(() => bidInput.focus(), 150);
        }

        // Tezkor qo‘shish tugmalari
        plateModalContent.querySelectorAll('.quick-bid-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const addVal = Number(btn.getAttribute('data-add'));
                bidInput.value = plate.currentBid + addVal;
            });
        });

        // Taklif yuborish
        document.getElementById('submitBidBtn').addEventListener('click', () => {
            if (!currentUser) {
                plateModal.classList.remove('open');
                openAuthModal('register');
                showToast('Taklif berish uchun avval ro‘yxatdan o‘ting yoki tizimga kiring', 'error');
                return;
            }

            const enteredAmount = Number(bidInput.value);
            if (isNaN(enteredAmount) || enteredAmount < minNextBid) {
                showToast(`Taklif kamida ${formatCurrency(minNextBid)} bo‘lishi kerak!`, 'error');
                return;
            }

            plate.currentBid = enteredAmount;
            plate.bidsCount += 1;
            plate.history.unshift({
                user: `${currentUser.name} (${currentUser.phone})`,
                amount: enteredAmount,
                time: 'Hozirgina'
            });

            savePlates();
            renderCatalog();
            renderFavorites();
            openPlateModal(plate.id);
            showToast(`Tabriklaymiz! ${plate.fullCode} uchun ${formatCurrency(enteredAmount)} taklif qabul qilindi (Demo)`, 'success');
        });
    }

    // 10. Ro‘yxatdan o‘tish va Kirish (Auth) tizimi
    function updateAuthUI() {
        if (currentUser) {
            const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
            userControls.innerHTML = `
                <div class="user-pill">
                    <div class="user-avatar">${initials}</div>
                    <span>${currentUser.name.split(' ')[0]}</span>
                    <button class="logout-btn" id="logoutBtn" title="Chiqish">Chiqish</button>
                </div>
            `;
            document.getElementById('logoutBtn').addEventListener('click', () => {
                currentUser = null;
                localStorage.removeItem(STORAGE_KEYS.USER);
                updateAuthUI();
                showToast('Tizimdan chiqdingiz');
            });
        } else {
            userControls.innerHTML = `<button id="authOpenBtn" class="btn btn-primary btn-sm">Kirish / Ro‘yxatdan o‘tish</button>`;
            document.getElementById('authOpenBtn').addEventListener('click', () => openAuthModal('register'));
        }
    }

    function openAuthModal(tab = 'register') {
        authModal.classList.add('open');
        switchAuthTab(tab);
    }

    function switchAuthTab(tab) {
        document.querySelectorAll('.auth-tab').forEach(t => {
            t.classList.toggle('active', t.getAttribute('data-tab') === tab);
        });
        document.getElementById('registerForm').classList.toggle('active', tab === 'register');
        document.getElementById('loginForm').classList.toggle('active', tab === 'login');
    }

    document.querySelectorAll('.auth-tab').forEach(tabBtn => {
        tabBtn.addEventListener('click', () => {
            switchAuthTab(tabBtn.getAttribute('data-tab'));
        });
    });

    // Telefon formatini nazorat qilish (+998)
    function enforceUzPhonePrefix(inputEl) {
        inputEl.addEventListener('input', () => {
            if (!inputEl.value.startsWith('+998')) {
                inputEl.value = '+998 ';
            }
        });
    }
    enforceUzPhonePrefix(document.getElementById('regPhone'));
    enforceUzPhonePrefix(document.getElementById('loginPhone'));

    // Ro‘yxatdan o‘tish formasi validatsiyasi
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const phone = document.getElementById('regPhone').value.trim();
        const pass = document.getElementById('regPassword').value;
        const confirmPass = document.getElementById('regConfirmPassword').value;

        // Xatolarni tozalash
        document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
        let valid = true;

        if (name.length < 3) {
            document.getElementById('regNameError').textContent = 'Ism va familiyani to‘liq kiriting.';
            valid = false;
        }

        const digitsOnly = phone.replace(/\D/g, '');
        if (!phone.startsWith('+998') || digitsOnly.length !== 12) {
            document.getElementById('regPhoneError').textContent = 'Telefon raqam +998 XX XXX XX XX formatida bo‘lishi shart.';
            valid = false;
        }

        if (pass.length < 6) {
            document.getElementById('regPasswordError').textContent = 'Parol kamida 6 ta belgidan iborat bo‘lishi kerak.';
            valid = false;
        }

        if (pass !== confirmPass) {
            document.getElementById('regConfirmError').textContent = 'Parollar bir-biriga mos kelmadi.';
            valid = false;
        }

        if (!valid) return;

        currentUser = { name, phone, password: pass };
        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(currentUser));
        localStorage.setItem(STORAGE_KEYS.AUTH_VISITED, 'true');
        authModal.classList.remove('open');
        updateAuthUI();
        showToast(`Xush kelibsiz, ${name}! Ro‘yxatdan o‘tish muvaffaqiyatli yakunlandi.`, 'success');
    });

    // Kirish formasi
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const phone = document.getElementById('loginPhone').value.trim();
        const pass = document.getElementById('loginPassword').value;

        document.getElementById('loginPhoneError').textContent = '';
        document.getElementById('loginPasswordError').textContent = '';

        const digitsOnly = phone.replace(/\D/g, '');
        if (!phone.startsWith('+998') || digitsOnly.length !== 12) {
            document.getElementById('loginPhoneError').textContent = 'To‘g‘ri O‘zbekiston raqamini kiriting (+998...).';
            return;
        }

        if (pass.length < 6) {
            document.getElementById('loginPasswordError').textContent = 'Parol kamida 6 ta belgi bo‘lishi kerak.';
            return;
        }

        // Demo rejimda saqlangan yoki yangi demo foydalanuvchi sifatida kirish
        const savedUser = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
        if (savedUser && savedUser.phone === phone && savedUser.password !== pass) {
            document.getElementById('loginPasswordError').textContent = 'Parol noto‘g‘ri kiritildi.';
            return;
        }

        currentUser = savedUser && savedUser.phone === phone
            ? savedUser
            : { name: 'Andijon Haydovchisi', phone, password: pass };

        localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(currentUser));
        localStorage.setItem(STORAGE_KEYS.AUTH_VISITED, 'true');
        authModal.classList.remove('open');
        updateAuthUI();
        showToast('Tizimga muvaffaqiyatli kirdingiz!', 'success');
    });

    skipAuthBtn.addEventListener('click', () => {
        localStorage.setItem(STORAGE_KEYS.AUTH_VISITED, 'true');
        authModal.classList.remove('open');
        showToast('Mehmon rejimida ko‘rmoqdasiz');
    });

    // 11. Event Listeners (Delegatsiya va Filtrlar)
    document.addEventListener('click', (e) => {
        const favBtn = e.target.closest('[data-fav-id]');
        if (favBtn) {
            toggleFavorite(favBtn.getAttribute('data-fav-id'));
            return;
        }

        const detailBtn = e.target.closest('[data-detail-id]');
        if (detailBtn) {
            openPlateModal(detailBtn.getAttribute('data-detail-id'), false);
            return;
        }

        const bidBtn = e.target.closest('[data-bid-id]');
        if (bidBtn) {
            openPlateModal(bidBtn.getAttribute('data-bid-id'), true);
            return;
        }
    });

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
        renderCatalog();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.style.display = 'none';
        renderCatalog();
    });

    categoryFilters.addEventListener('click', (e) => {
        const pill = e.target.closest('.filter-pill');
        if (!pill) return;

        document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        activeFilter = pill.getAttribute('data-filter');
        renderCatalog();
    });

    sortSelect.addEventListener('change', (e) => {
        sortBy = e.target.value;
        renderCatalog();
    });

    resetFiltersBtn.addEventListener('click', () => {
        activeFilter = 'all';
        searchQuery = '';
        sortBy = 'default';
        searchInput.value = '';
        sortSelect.value = 'default';
        clearSearchBtn.style.display = 'none';
        document.querySelectorAll('.filter-pill').forEach(p => {
            p.classList.toggle('active', p.getAttribute('data-filter') === 'all');
        });
        renderCatalog();
    });

    // Modallarni yopish
    closePlateModal.addEventListener('click', () => plateModal.classList.remove('open'));
    closeAuthModal.addEventListener('click', () => {
        localStorage.setItem(STORAGE_KEYS.AUTH_VISITED, 'true');
        authModal.classList.remove('open');
    });

    [plateModal, authModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('open');
                if (modal === authModal) {
                    localStorage.setItem(STORAGE_KEYS.AUTH_VISITED, 'true');
                }
            }
        });
    });

    // Mobil menyu
    hamburgerBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('open');
            navMenu.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Footer auth link
    document.getElementById('footerAuthLink').addEventListener('click', (e) => {
        e.preventDefault();
        openAuthModal('register');
    });

    // Contact form
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        showToast('Xabaringiz demo tizim orqali qabul qilindi! Rahmat.', 'success');
        e.target.reset();
    });

    // Back to top & Scroll reveal
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 12. Real-time Countdown Timer (Har soniyada yangilanadi)
    setInterval(() => {
        document.querySelectorAll('[data-timer-id]').forEach(el => {
            const id = el.getAttribute('data-timer-id');
            const plate = plates.find(p => p.id === id);
            if (plate) {
                el.textContent = formatTimeLeft(plate.endTime);
            }
        });
    }, 1000);

    // 13. Saytni ishga tushirish
    initTheme();
    updateAuthUI();
    updateFavoriteBadge();
    renderCatalog();
    renderFavorites();

    // Loader yashirish va birinchi marta kirganda ro‘yxatdan o‘tish oynasini ochish
    setTimeout(() => {
        loader.classList.add('hidden');
        const hasVisited = localStorage.getItem(STORAGE_KEYS.AUTH_VISITED);
        if (!currentUser && !hasVisited) {
            setTimeout(() => openAuthModal('register'), 450);
        }
    }, 600);
});