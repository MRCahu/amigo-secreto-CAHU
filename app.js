// app.js (type="module")
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
    this.state.pairs = []; // invalida pares se mexer na lista
    this.persist();
  }
  clearAll() { this.state = { participants: [], pairs: [] }; this.persist(); }
  savePairs(pairs) { this.state.pairs = pairs; this.persist(); }
  clearPairs() { this.state.pairs = []; this.persist(); }

  exists(name) { return this.state.participants.some(n => n.toLocaleLowerCase() === name.toLocaleLowerCase()); }
  normalize(s) {
    if (typeof s !== 'string') return '';
    let out = s.trim().replace(/\s+/g, ' ');
    if (out.length > 60) out = out.slice(0, 60);
    return out;
  }
  isValid(s) { return typeof s === 'string' && s.length >= 2; }
  persist() { try { localStorage.setItem(this.storageKey, JSON.stringify(this.state)); } catch {} }
  load() {
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) this.state = JSON.parse(raw);
    } catch { this.state = { participants: [], pairs: [] }; }
  }
}

// helpers de UI seguros
function el(tag, props = {}, children = []) {
  const $e = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === 'class') $e.className = v;
    else if (k === 'text') $e.textContent = v;
    else if (k.startsWith('on') && typeof v === 'function') $e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k === 'hidden') v ? $e.setAttribute('hidden', '') : $e.removeAttribute('hidden');
    else $e.setAttribute(k, v);
  });
  (Array.isArray(children) ? children : [children]).forEach(c => {
    if (typeof c === 'string') $e.appendChild(document.createTextNode(c));
    else if (c) $e.appendChild(c);
  });
  return $e;
}

// sorteio: embaralha + rotação para evitar auto-atribuição
function drawPairs(participants) {
  if (!Array.isArray(participants) || participants.length < 2) {
    throw new Error('É necessário pelo menos 2 participantes.');
  }
  const receivers = [...participants];
  for (let i = receivers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [receivers[i], receivers[j]] = [receivers[j], receivers[i]];
  }
  for (let attempt = 0; attempt < 1000; attempt++) {
    const ok = participants.every((p, i) => p !== receivers[i]);
    if (ok) break;
    receivers.push(receivers.shift());
  }
  const valid = participants.every((p, i) => p !== receivers[i]);
  if (!valid) throw new Error('Não foi possível gerar um sorteio válido.');
  return participants.map((giver, i) => ({ giver, receiver: receivers[i] }));
}

// refs DOM
const store = new ParticipantStore();
const $name = document.getElementById('name');
const $add = document.getElementById('add');
const $clear = document.getElementById('clear');
const $list = document.getElementById('list');
const $draw = document.getElementById('draw');
const $resetPairs = document.getElementById('resetPairs');
const $pairs = document.getElementById('pairs');
const $alert = document.getElementById('alert');
const $emptyList = document.getElementById('emptyList');
const $emptyPairs = document.getElementById('emptyPairs');

function say(msg, type = 'success') {
  $alert.textContent = msg;
  $alert.className = `alert ${type}`;
  $alert.focus(); // aria-live anuncia
}

function refresh() {
  // participantes
  $list.innerHTML = '';
  store.participants.forEach(n => {
    const $btnRemove = el('button', {
      class: 'btn-secondary',
      'aria-label': `Remover ${n}`,
      onClick: () => { store.remove(n); say('Participante removido.', 'success'); refresh(); }
    }, 'Remover');
    const $li = el('li', { class: 'item' }, [ el('span', { class: 'name', text: n }), $btnRemove ]);
    $list.appendChild($li);
  });
  $emptyList.hidden = store.participants.length !== 0;

  // pares
  $pairs.innerHTML = '';
  store.pairs.forEach(p => {
    const $li = el('li', { class: 'pair' }, [
      el('span', { class: 'giver', text: p.giver }),
      el('span', { class: 'arrow', text: '➜' }),
      el('span', { class: 'receiver', text: p.receiver }),
    ]);
    $pairs.appendChild($li);
  });
  $emptyPairs.hidden = store.pairs.length !== 0;

  // estado do botão sortear
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

// eventos
$add.addEventListener('click', addParticipant);
$name.addEventListener('keydown', (e) => { if (e.key === 'Enter') addParticipant(); });
$clear.addEventListener('click', () => { store.clearAll(); say('Lista limpa.', 'success'); refresh(); });
$draw.addEventListener('click', () => {
  try {
    const pairs = drawPairs(store.participants);
    store.savePairs(pairs);
    say('Sorteio realizado com sucesso.', 'success');
    refresh();
  } catch (e) { say(e.message || 'Erro no sorteio.', 'error'); }
});
$resetPairs.addEventListener('click', () => { store.clearPairs(); say('Resultado limpo.', 'success'); refresh(); });

// inicializa
refresh();
