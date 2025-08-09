// app.js (usar type="module" no script)
const STORAGE_KEY = 'amigoSecreto:state:v1';

class ParticipantStore {
  constructor(storageKey = STORAGE_KEY) {
    this.storageKey = storageKey;
    this.state = { participants: [], pairs: [] };
    this.load();
  }

  get participants() { return [...this.state.participants]; }
  get pairs() { return [...this.state.pairs]; }

  add(name) {
    const clean = this.normalize(name);
    if (!this.isValid(clean)) throw new Error('Nome inválido. Use ao menos 2 caracteres.');
    if (this.exists(clean)) throw new Error('Nome duplicado.');
    this.state.participants.push(clean);
    this.persist();
  }

  remove(name) {
    this.state.participants = this.state.participants.filter(n => n !== name);
    // Se removeu alguém após um sorteio, você pode invalidar os pares
    this.state.pairs = [];
    this.persist();
  }

  clearAll() {
    this.state = { participants: [], pairs: [] };
    this.persist();
  }

  savePairs(pairs) {
    this.state.pairs = pairs;
    this.persist();
  }

  exists(name) {
    return this.state.participants.some(n => n.toLocaleLowerCase() === name.toLocaleLowerCase());
  }

  normalize(s) {
    if (typeof s !== 'string') return '';
    // Normaliza espaços, remove espaços extras, limita tamanho
    let out = s.trim().replace(/\s+/g, ' ');
    if (out.length > 60) out = out.slice(0, 60);
    return out;
  }

  isValid(s) {
    return typeof s === 'string' && s.length >= 2;
  }

  persist() {
    try { localStorage.setItem(this.storageKey, JSON.stringify(this.state)); } catch {}
  }

  load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) this.state = JSON.parse(raw);
    } catch {
      this.state = { participants: [], pairs: [] };
    }
  }
}

// Util: cria elementos com segurança (evita innerHTML com user input)
function el(tag, props = {}, children = []) {
  const $e = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === 'class') $e.className = v;
    else if (k === 'text') $e.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') $e.addEventListener(k.slice(2).toLowerCase(), v);
    else $e.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach(c => {
    if (typeof c === 'string') $e.appendChild(document.createTextNode(c));
    else if (c) $e.appendChild(c);
  });
  return $e;
}

// Sorteio simples (placeholder) – mantém pares caso já existam
function drawPairs(participants) {
  if (!Array.isArray(participants) || participants.length < 2) {
    throw new Error('É necessário pelo menos 2 participantes.');
  }
  // Embaralha receptores
  const receivers = [...participants];
  for (let i = receivers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [receivers[i], receivers[j]] = [receivers[j], receivers[i]];
  }
  // Evitar auto-atribuição com tentativas
  for (let attempt = 0; attempt < 1000; attempt++) {
    const ok = participants.every((p, i) => p !== receivers[i]);
    if (ok) break;
    // Rotaciona 1 para tentar corrigir
    receivers.push(receivers.shift());
  }
  const valid = participants.every((p, i) => p !== receivers[i]);
  if (!valid) throw new Error('Não foi possível gerar um sorteio válido.');
  return participants.map((giver, i) => ({ giver, receiver: receivers[i] }));
}

// UI
const store = new ParticipantStore();

const $name = document.getElementById('name');
const $add = document.getElementById('add');
const $list = document.getElementById('list');
const $draw = document.getElementById('draw');
const $pairs = document.getElementById('pairs');
const $alert = document.getElementById('alert');

function say(msg, type = 'success') {
  $alert.textContent = msg;
  $alert.className = `alert ${type}`;
  $alert.focus(); // acessível: anuncia via aria-live
}

function refresh() {
  // Lista de participantes
  $list.innerHTML = '';
  store.participants.forEach(n => {
    const $btnRemove = el('button', {
      class: 'remove',
      'aria-label': `Remover ${n}`,
      onClick: () => {
        store.remove(n);
        say('Participante removido.', 'success');
        refresh();
      }
    }, 'Remover');

    const $li = el('li', {}, [
      el('span', { text: n }),
      $btnRemove
    ]);
    $list.appendChild($li);
  });

  // Resultado do sorteio
  $pairs.innerHTML = '';
  store.pairs.forEach(p => {
    const $li = el('li', {}, [
      el('strong', { text: p.giver }),
      el('span', { text: ' ➜ ' }),
      el('span', { text: p.receiver }),
    ]);
    $pairs.appendChild($li);
  });

  // Habilita/desabilita o botão Sortear
  $draw.disabled = store.participants.length < 2;
}

function addParticipant() {
  try {
    store.add($name.value);
    $name.value = '';
    say('Participante adicionado.', 'success');
    refresh();
    $name.focus();
  } catch (e) {
    say(e.message || 'Erro ao adicionar participante.', 'error');
    $name.focus();
  }
}

// Eventos
$add.addEventListener('click', addParticipant);
$name.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') addParticipant();
});

$draw.addEventListener('click', () => {
  try {
    const pairs = drawPairs(store.participants);
    store.savePairs(pairs);
    say('Sorteio realizado com sucesso.', 'success');
    refresh();
  } catch (e) {
    say(e.message || 'Erro no sorteio.', 'error');
  }
});

// Inicializa UI
refresh();
