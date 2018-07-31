// Controller
let IS_OK = false;

// Elements
const listOfWordsElement = document.getElementById('list-of-words');
const resultElement = document.getElementById('result');
const emojiListElement = document.getElementById('emoji-list');
const subjectCopyElement = document.getElementById('subject-copy');
const subjectElement = document.getElementById('subject');
const charsCounterElement = document.getElementById('chars-counter');
const copyElement = document.getElementById('copy');
const emojiElement = document.getElementById('emoji');

// Array of bad words
const badWords = ['$', 'ganhe dinheiro enviando emails', 'trabalhe em casa', 'renda extra', 'crédito', 'seja seu próprio patrão', 'aplique agora', 'taxas baixas', 'dobre sua renda', 'ganhe', 'pago semanalmente', 'pagamento imediato', 'dinheiro rápido', 'liberdade financeira', 'saia da dívida', 'elimine a dívida', 'reduza suas taxas', 'refinancie', 'bônus', 'livre', 'empréstimo', '100%', 'emagreça', 'dieta', 'por que não consigo emagrecer', 'perca peso', 'perder gordura', 'fique sarado', 'secar barriga', 'compre', 'aproveite', 'grátis', 'desconto', 'promoção', 'oferta', 'imperdível', 'preços', 'valores', 'frete grátis', 'despachamos para todo o brasil', 'vagas abertas', 'telemarketing', 'curso', 'curso online', 'oportunidade', 'agência de modelos', 'oferta de emprego', 'parceria', 'lista de emails', 'lista de contatos', 'divulgue seu', 'divulgue sua', 'marketing por e-mail', 'sites de busca', 'clique', 'assine', 'visite o site', 'saiba mais', 'dê uma olhada', 'leia agora', 'não exclua', 'veja isso', 'confira', 'abra', 'isso não é spam', 'atenção', 'especialmente para você', 'a informação que você pediu', 'agora', 'já', 'última chance', 'hoje', 'tempo limitado', 'não perca tempo', '24 horas', 'urgente', 'imediato', 'só até amanhã', 'dinheiro', 'dinheiro a sério', 'vencedor', 'gratuito', 'Clique aqui', 'Anuncie', 'Ganhe dinheiro enviando e-mails', 'Lista de e-mails', 'Mala direta', 'Perda de peso', 'oi', 'urgentemente', 'amigo', 'escondido', 'para você', 'STOP', 'fora', 'oferecer', 'quente', 'incrível', 'satisfação', 'agir agora', 'aplicar agora', 'agora só', 'como se vê', 'como se vê na TV', 'evitar', 'ser seu próprio patrão', 'trabalhar em casa', 'em casa', 'comprar', 'ligue agora', 'bônus em dinheiro', 'o caixa livre', 'dobrar sua renda', 'ganhar', 'marketing multi nível', 'ganhar dinheiro', 'o pagamento imediato', 'o pagamento atrasado', 'gestão de fundos', 'de acesso gratuito', 'dom gratuito', 'informação livre', 'a oferta livre', 'medicina', 'soft tabs', 'cialis', 'xanax', 'valium', 'vicodin', 'Viagra', 'Levitra', 'plantas medicinais', 'alargamento', 'aberto agora', 'recolher', 'comparar', 'consolidar', 'débito', 'saia dívida', 'eliminar a dívida', 'reduzir sua taxa de hipoteca', 'refinanciar', 'as taxas mais baixas de seguros', 'seguro de vida', 'empréstimos', 'caro amigo', 'perder peso', 'grau em linha', 'marketing online', 'farmácia on-line', 'prometeu que', 'adolescente', 'vencedor ', 'você é um vencedor', 'sua família', 'seu won e-mail', 'por favor me ajude', 'o pedido de parceria', 'Deus te abençoe', 'comprar agora', 'destinatário desconhecido', 'Saldo em aberto', 'Fatura', 'Fatura de Cartão de crédito', 'Cobrança', 'Mensagem de Saldo em aberto'];

// Array of emoji
const emojiList = ['❤', '❥', '웃', '유', '🍾', '☮', '✌', '☏', '☢', '☠', '✔', '☑', '♚', '▲', '♪', '✈', '⌚', '¿', '♥', '❣', '♂', '♀', '⚤', 'Ⓐ', '✍', '✉', '☣', '☤', '✘', '☒', '♛', '▼', '♫', '⌘', '⌛', '¡', '♡', 'ღ', 'ツ', '☼', '☁', '❅', '♒', '✎', '©', '®', '™', 'Σ', '✪', '✯', '☭', '➳', '⚑', '✞', '℃', '℉', '°', '✿', 'ϟ', '☃', '☂', '✄', '¢', '€', '£', '∞', '✫', '★', '½', '☯', '✡', '☪', '😍', '😘', '😛', '😃', '😂', '😊', '😉', '😁', '😭', '😒', '😏', '😥', '😳', '😲', '😯', '😱', '😰', '😓', '👿', '💤', '💩', '👏', '✌', '☺', '👌', '👍', '💪', '👊', '👉', '✊', '🙈', '🙊', '🙉', '🎁', '🎉', '➡', '✅', '🆗', '✔', '🎶', '🎵', '🎧', '🔴', '🔵', '⚫', '💰', '💸', '💲', '☀', '☁', '🔥', '☕', '☔', '❄', '👓', '🎓', '💍', '🚀'];


// Build bad words and emoji lists
(function () {
    // Words
    listOfWordsElement.innerHTML = badWords.map((_word) => `<li>${_word}</li>`).join('');
    
    // Emoji
    emojiListElement.innerHTML = emojiList.map((_emoji) => `<li><a class="emoji-link" href="#" onclick="addEmoji(event)">${_emoji}</a></li>`).join('');
})();


// Show and hide
function showHide(_element, _status) {
    if (_status == 'show') {
        _element.classList.add('show');
        _element.classList.remove('hide');

    } else if (_status == 'hide') {
        _element.classList.add('hide');
        _element.classList.remove('show');

    } else {
        if (_element.classList.contains('show')) {
            _element.classList.add('hide');
            _element.classList.remove('show');

        } else {
            _element.classList.add('show');
            _element.classList.remove('hide');
        }
    }
}


// Search for the bad words into subject line
function matchWords(_subject) {
    const words = badWords.map((_word) => _word.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&')).join('|');
    const regex = new RegExp('(?:' + words + ')', 'gi');
    
    return _subject.match(regex) || [];
}


// Highlight words inside the subject
function highlightWords(_subject, _result) {
    const subject = _subject;
    const result = _result.map((_word) => _word.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&')).join('|');

    return subject.replace(RegExp(result, 'gi'), (_word) => `<span class='bg-danger text-warning'>${_word}</span>`);
}


// Show the subject validation result
function showResult(_subject, _result) {
    if (_result.length == 0) {
        IS_OK = true;

        resultElement.classList.add('result-green');
        resultElement.classList.remove('result-red');

    } else {
        IS_OK = false;

        resultElement.classList.add('result-red');
        resultElement.classList.remove('result-green');
    }

    resultElement.innerHTML = highlightWords(_subject, _result);
    showHide(resultElement, 'show');
    showHide(subjectCopyElement, 'hide');
}


// Submit
function search(_e) {
    _e.preventDefault();

    const subject = subjectElement.value;
    const result = matchWords(subject);

    showResult(subject, result);
}


// Result
function result() {
    subjectElement.focus();

    showHide(resultElement, 'hide');
}


// Char counter
function charCounter(_e) {
    const chars = subjectElement.value;

    search(event);

    showHide(subjectCopyElement, 'hide');
    showHide(resultElement, 'hide');
    
    if (chars.length > 60) {
        charsCounterElement.innerHTML = `<span class="chars-counter-red">${chars.length} caracteres</span>`;
        showHide(copyElement, 'hide');
        
    } else {
        charsCounterElement.innerHTML = `<span class="chars-counter-green">${chars.length} caracteres</span>`;
        
        if (IS_OK == true) {
            showHide(copyElement, 'show');
        } else {
            showHide(copyElement, 'hide');
        }
    }
};
subjectElement.addEventListener('input', charCounter);


// Emoji list
function showEmojiList(_e) {
    _e.preventDefault();

    showHide(emojiElement);
}


// Emoji selector
function addEmoji(_e) {
    const subjectText = subjectElement.value;
    const subjectIndex = subjectElement.selectionEnd;
    const emoji = _e.target.innerText;

    subjectElement.value = subjectText.substr(0, subjectIndex) + emoji + subjectText.substr(subjectIndex);

    charCounter(event);
}


// Copy to clipboard
function copySubject() {
    subjectElement.select();
    document.execCommand('copy');

    showHide(subjectCopyElement, 'show');
    showHide(resultElement, 'hide');
}