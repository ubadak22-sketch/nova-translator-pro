// translator.js
const inputText = document.getElementById('input-text');
const languageSelect = document.getElementById('language-select');
const translateBtn = document.getElementById('translate-btn');
const outputText = document.getElementById('output-text');
const historyList = document.getElementById('history-list');

translateBtn.addEventListener('click', async () => {
    const text = inputText.value;
    const language = languageSelect.value;
    try {
        const response = await fetch('https://adolfo-blondish-sublaryngeally.ngrok-free.dev/translate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text, target_lang: language })
        });
        const data = await response.json();
        outputText.value = data.translated_text;
        addHistoryItem(text, data.translated_text, language);
    } catch (error) {
        console.error(error);
    }
});

function addHistoryItem(input, output, language) {
    const historyItem = document.createElement('li');
    historyItem.textContent = `${input} -> ${output} (${language})`;
    historyList.appendChild(historyItem);
}
