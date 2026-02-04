const DATABASE = {
    cafes: [
        { id: 101, pt: 'Cerrado Mineiro', en: 'Cerrado Reserve', p: 14.50, i: '☕', d_pt: 'Chocolate e avelã.', d_en: 'Chocolate and hazelnut.' },
        { id: 102, pt: 'Cappuccino Royale', en: 'Royale Cappuccino', p: 18.00, i: '🥛', d_pt: 'Cremoso com cacau 70%.', d_en: 'Creamy with 70% cocoa.' },
        { id: 103, pt: 'V60 Caparaó Honey', en: 'Caparaó V60', p: 16.50, i: '🫖', d_pt: 'Doçura natural de mel.', d_en: 'Natural honey sweetness.' },
        { id: 104, pt: 'Latte Art Flor', en: 'Gold Flower Latte', p: 19.00, i: '✨', d_pt: 'Leite vaporizado e especiarias.', d_en: 'Steamed milk and spices.' },
        { id: 105, pt: 'Espresso Intenso', en: 'Pure Espresso', p: 9.00, i: '☕', d_pt: 'Blend da casa encorpado.', d_en: 'Full-bodied house blend.' },
        { id: 106, pt: 'Mocha Belga', en: 'Belgian Mocha', p: 21.00, i: '🍫', d_pt: 'Ganache de chocolate e espresso.', d_en: 'Chocolate ganache and espresso.' },
        { id: 107, pt: 'Iced Vanilla Coffee', en: 'Vanilla Iced', p: 17.50, i: '🧊', d_pt: 'Café gelado com fava de baunilha.', d_en: 'Cold coffee with vanilla bean.' },
        { id: 108, pt: 'Macchiato Caramel', en: 'Caramel Macchiato', p: 16.00, i: '🍯', d_pt: 'Mancha de leite e caramelo flor de sal.', d_en: 'Milk stain and sea salt caramel.' },
        { id: 109, pt: 'Pink Lemonade', en: 'Pink Lemonade', p: 15.00, i: '🍹', d_pt: 'Limão siciliano e framboesa.', d_en: 'Sicilian lemon and raspberry.' },
        { id: 110, pt: 'Suco de Laranja Real', en: 'Royal Orange', p: 12.00, i: '🍊', d_pt: '100% fruta, espremido na hora.', d_en: '100% fruit, freshly squeezed.' },
        { id: 111, pt: 'Green Detox Maison', en: 'Green Detox', p: 16.00, i: '🍏', d_pt: 'Maçã verde, couve e gengibre.', d_en: 'Green apple, kale and ginger.' }
    ],
    brunch: [
        { id: 201, pt: 'Croissant Francês', en: 'French Croissant', p: 15.00, i: '🥐', d_pt: 'Manteiga de Bretanha.', d_en: 'Brittany butter.' },
        { id: 202, pt: 'Toast de Avocado', en: 'Avocado Toast', p: 34.00, i: '🥑', d_pt: 'Sourdough e ovo pochê.', d_en: 'Sourdough and poached egg.' }
    ],
    patisserie: [
        { id: 301, pt: 'Éclair de Pistache', en: 'Pistachio Éclair', p: 22.00, i: '🥖', d_pt: 'Pistache iraniano.', d_en: 'Iranian pistachio.' },
        { id: 302, pt: 'Macarons Box (6un)', en: 'Macarons Box', p: 45.00, i: '🍪', d_pt: 'Sabores clássicos de Paris.', d_en: 'Classic Paris flavors.' },
        { id: 303, pt: 'Tartelette de Morango', en: 'Strawberry Tart', p: 19.00, i: '🍓', d_pt: 'Creme de confeiteiro e frutas.', d_en: 'Pastry cream and berries.' },
        { id: 304, pt: 'Petit Gateau Ouro', en: 'Gold Petit Gateau', p: 26.00, i: '🍮', d_pt: 'Chocolate 70% e sorvete fava.', d_en: '70% chocolate and ice cream.' }
    ],
    vip: [
        { id: 901, pt: 'Jacu Bird Coffee', en: 'Jacu Bird Coffee', p: 85.00, i: '🐦', d_pt: 'O café mais raro do Brasil.', d_en: 'Brazil\'s rarest coffee.' },
        { id: 902, pt: 'Geisha Lote Diamante', en: 'Diamond Geisha Lot', p: 130.00, i: '💎', d_pt: 'Notas florais e doçura extrema.', d_en: 'Floral notes.' },
        { id: 903, pt: 'Kopi Luwak Authentic', en: 'Kopi Luwak', p: 150.00, i: '🐾', d_pt: 'Importado da Indonésia, exótico.', d_en: 'Imported from Indonesia.' },
        { id: 904, pt: 'Blue Mountain Jamaica', en: 'Jamaica Blue Mountain', p: 115.00, i: '⛰️', d_pt: 'Corpo balanceado e aroma intenso.', d_en: 'Balanced body and intense aroma.' },
        { id: 905, pt: 'Degustação Royal 24k', en: '24k Royal Tasting', p: 220.00, i: '✨', d_pt: 'Experiência com pó de ouro puro.', d_en: 'Pure gold dust experience.' },
        { id: 906, pt: 'Vinho de Café Reserva', en: 'Coffee Wine Reserve', p: 98.00, i: '🍷', d_pt: 'Fermentado de frutos selecionados.', d_en: 'Fermented select coffee fruits.' }
    ]
};

let cart = [];
let lang = 'pt';
let couponDiscount = 1.0; 
let musicPlaying = false;
let currentCategory = 'cafes';

const musicUrl = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";

const historyContent = {
    pt: `<p><strong>Fundada em 2025</strong>, a Maison Le Café nasceu para transformar o café em um ritual de alta costura.</p><br><p>Inspirada na sofisticação parisiense e na alma brasileira, nossa fundadora, <strong>Clara d'Étoile</strong>, buscou o equilíbrio perfeito entre técnica e emoção.</p><br><p>Aqui, a excelência não é um objetivo, é a nossa essência. Cada xícara conta uma história de luxo e dedicação.</p>`,
    en: `<p><strong>Founded in 2025</strong>, Maison Le Café was born to transform coffee into a high-fashion ritual.</p><br><p>Inspired by Parisian sophistication and the Brazilian soul, our founder, <strong>Clara d'Étoile</strong>, sought the perfect balance between technique and emotion.</p><br><p>Here, excellence is not a goal, it is our essence. Every cup tells a story of luxury and dedication.</p>`
};

// --- FUNÇÕES DA TELA DE ENTRADA ---
function enterMaison() {
    const welcome = document.getElementById('welcome-screen');
    if (welcome) {
        welcome.classList.add('welcome-exit'); // Adiciona a classe que faz subir
        
        // Começa a música ao clicar no botão
        if (!musicPlaying) {
            toggleMusic();
        }

        // Remove do visual após a animação de 1 segundo
        setTimeout(() => {
            welcome.style.display = 'none';
        }, 1000);
    }
}

// --- FUNÇÕES DA HISTÓRIA ---
function openHistory() {
    const modal = document.getElementById('history-modal');
    const textContainer = document.getElementById('history-text');
    textContainer.innerHTML = lang === 'pt' ? historyContent.pt : historyContent.en;
    modal.style.display = 'flex';
}

function closeHistory(e) {
    if (e.target.id === 'history-modal') {
        document.getElementById('history-modal').style.display = 'none';
    }
}

// --- TRADUÇÃO ---
function setLanguage(l) {
    lang = l;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.innerText.toLowerCase() === l));
    document.querySelectorAll('[data-pt]').forEach(el => {
        el.innerHTML = l === 'pt' ? el.getAttribute('data-pt') : el.getAttribute('data-en');
    });
    render(currentCategory);
    updateBagUI();
}

// --- VITRINE ---
function render(cat, btn) {
    currentCategory = cat;
    if(btn) {
        document.querySelectorAll('.cat-item').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    }
    const grid = document.getElementById('p-grid');
    grid.innerHTML = DATABASE[cat].map(p => `
        <div class="p-card">
            <span class="p-icon">${p.i}</span>
            <h3 class="p-title">${lang === 'pt' ? p.pt : p.en}</h3>
            <p class="p-desc">${lang === 'pt' ? p.d_pt : p.d_en}</p>
            <span class="p-price">R$ ${p.p.toFixed(2)}</span>
            <button class="btn-add" onclick="addToBag('${cat}', ${p.id})">
                ${lang === 'pt' ? 'ADICIONAR' : 'ADD TO BAG'}
            </button>
        </div>
    `).join('');
}

// --- BOLSA ---
function updateBagUI() {
    const list = document.getElementById('bag-items-list');
    const totalQty = cart.reduce((a, b) => a + b.qty, 0);
    document.getElementById('bag-count').innerText = `${totalQty} ${lang === 'pt' ? 'ITENS' : 'ITEMS'}`;
    
    list.innerHTML = cart.map(item => `
        <div style="display:flex; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid var(--border); padding-bottom:5px;">
            <div>
                <p style="font-weight:800; font-size:0.8rem; margin:0; color:var(--txt);">${lang === 'pt' ? item.pt : item.en}</p>
                <p style="color:var(--gold); font-size:0.75rem; margin:0;">R$ ${item.p.toFixed(2)}</p>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <button onclick="changeQty(${item.id}, -1)" style="cursor:pointer; background:none; border:1px solid var(--gold); color:var(--gold); width:25px;">-</button>
                <span style="font-weight:800; color:var(--txt);">${item.qty}</span>
                <button onclick="changeQty(${item.id}, 1)" style="cursor:pointer; background:none; border:1px solid var(--gold); color:var(--gold); width:25px;">+</button>
            </div>
        </div>
    `).join('') + `
        <input type="text" id="cust-name" placeholder="${lang === 'pt' ? 'Seu Nome' : 'Your Name'}" style="width:100%; padding:10px; margin-top:20px; border:1px solid var(--border); background:var(--white); color:var(--txt);">
        <div style="display:flex; margin-top:10px; gap:5px;">
            <input type="text" id="coupon-in" placeholder="${lang === 'pt' ? 'CUPOM' : 'COUPON'}" style="flex:1; padding:10px; border:1px solid var(--border); background:var(--white); color:var(--txt);">
            <button onclick="applyCoupon()" style="background:var(--gold); color:white; padding:0 15px; border:none; cursor:pointer;">OK</button>
        </div>
    `;
    calculateTotal();
}

// --- CUPOM/TOTAL/PEDIDO ---
function applyCoupon() {
    const codeIn = document.getElementById('coupon-in').value.toUpperCase().trim();
    if(codeIn === 'LECAFE30') {
        let totalRaw = cart.reduce((a, b) => a + (b.p * b.qty), 0);
        if(totalRaw >= 100) { couponDiscount = 0.7; alert(lang === 'pt' ? "Cupom LECAFE30 aplicado!" : "Coupon LECAFE30 applied!"); } 
        else { couponDiscount = 1.0; alert(lang === 'pt' ? "Mínimo R$ 100,00 para o cupom." : "Min. R$ 100.00 for the coupon."); }
    } else if (codeIn !== "") { couponDiscount = 1.0; alert(lang === 'pt' ? "Cupom inválido." : "Invalid coupon."); }
    calculateTotal();
}

function calculateTotal() {
    let subtotal = 0; let savings = 0;
    cart.forEach(item => {
        let price = item.p * item.qty;
        if(item.category === 'vip') { let d = price * 0.08; savings += d; subtotal += (price - d); } else { subtotal += price; }
    });
    if(couponDiscount < 1.0) { let c = subtotal * (1 - couponDiscount); savings += c; subtotal *= couponDiscount; }
    if(document.getElementById('sub-val')) document.getElementById('sub-val').innerText = `R$ ${(subtotal + savings).toFixed(2)}`;
    if(document.getElementById('off-val')) document.getElementById('off-val').innerText = `- R$ ${savings.toFixed(2)}`;
    if(document.getElementById('total-val')) document.getElementById('total-val').innerText = `R$ ${subtotal.toFixed(2)}`;
}

function initiateOrder() {
    const name = document.getElementById('cust-name').value;
    if(!name || cart.length === 0) return alert(lang === 'pt' ? "Preencha seu nome e adicione itens!" : "Enter your name and add items!");
    toggleBag(false);
    const tracker = document.getElementById('order-tracker');
    tracker.classList.remove('hidden');
    tracker.scrollIntoView({behavior:'smooth'});
    const fill = document.getElementById('order-progress-fill');
    let step = 1;
    const interval = setInterval(() => {
        const currentStep = document.getElementById(`step${step}`);
        if(currentStep) currentStep.classList.add('active');
        fill.style.width = (step * 25) + '%';
        if(step === 4) {
            clearInterval(interval);
            setTimeout(() => {
                alert(lang === 'pt' ? `Pronto, ${name}! Seu pedido chegou.` : `Ready, ${name}! Your order arrived.`);
                cart = []; updateBagUI(); tracker.classList.add('hidden');
                for(let i=1; i<=4; i++) document.getElementById(`step${i}`).classList.remove('active');
                fill.style.width = '0%';
            }, 1000);
        }
        step++;
    }, 3000);
}

// --- AUXILIARES ---
function addToBag(cat, id) {
    const item = DATABASE[cat].find(x => x.id === id);
    const inCart = cart.find(x => x.id === id);
    if (inCart) { inCart.qty++; } else { cart.push({ ...item, category: cat, qty: 1 }); }
    if (cat === 'vip') { document.getElementById('vip-toast').classList.add('show'); setTimeout(() => document.getElementById('vip-toast').classList.remove('show'), 3000); }
    updateBagUI();
    toggleBag(true);
}

function changeQty(id, delta) {
    const item = cart.find(x => x.id === id);
    if(item) { item.qty += delta; if(item.qty <= 0) cart = cart.filter(x => x.id !== id); }
    updateBagUI();
}

function toggleMusic() {
    const m = document.getElementById('bg-music');
    if (!m.src) m.src = musicUrl;
    if (musicPlaying) { m.pause(); document.getElementById('music-icon').innerText = '🔇'; } 
    else { m.play(); document.getElementById('music-icon').innerText = '🎵'; }
    musicPlaying = !musicPlaying;
}

function toggleTheme() {
    const h = document.documentElement;
    h.setAttribute('data-theme', h.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
}

function openVip() { document.getElementById('vip-modal').style.display = 'flex'; }
function authVip() {
    if(document.getElementById('vip-key').value === 'LeCafeBrasil') {
        document.getElementById('vip-modal').style.display = 'none';
        document.getElementById('nav-vip-btn').style.display = 'block';
    } else { alert("Key Error"); }
}

function toggleBag(s) { document.getElementById('bag-sidebar').classList.toggle('open', s); }

// --- INICIALIZAÇÃO AO CARREGAR ---
window.onload = () => {
    // 1. Esconde o Loader (Maison Loader)
    setTimeout(() => {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 500);
        }
    }, 1500);
    
    // 2. Renderiza a primeira categoria por baixo da tela inicial
    render('cafes');
};