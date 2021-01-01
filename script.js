var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const recognition = new SpeechRecognition()
recognition.lang = 'ja-JP'
recognition.interimResults = false // 暫定結果を返さない

const btnSpeechStart = document.getElementById('btnSpeechStart')
const output = document.getElementById('output')

btnSpeechStart.addEventListener('click', () => {
    console.log("OK!")
    output.innerHTML = "読み取り中";
    recognition.start()
});

recognition.onresult = (e) => {
    console.log('on result')

    for (let i = e.resultIndex; i < e.results.length; i++) {
        if (!e.results[i].isFinal) continue
  
        const {confidence, transcript} = e.results[i][0]
        console.log(`Recognised: ${transcript}`)

        output.innerHTML = transcript;
    }
}