export default class WebSpeechApi {

  getSpeechRecognition() {
    try {
      return webkitSpeechRecognition;
    } catch(e) {
      try {
        return SpeechRecognition;
      } catch(e) {
        return null;
      }
    }
  }

  isWebbrowserSupported() {
    if (this.getSpeechRecognition() !== null) {
      return true;
    }
    return false;
  }

  async getVoices() {
    const getVoices = (voiceName = "") => {
      return new Promise(resolve => {
        window.speechSynthesis.onvoiceschanged = e => {
          resolve(window.speechSynthesis.getVoices());
        }
        window.speechSynthesis.getVoices();
      })
    }
  
    return await getVoices();
  };

  async getLanguageBasedVoice(languageCode) {
    const voices = await this.getVoices().then(data => data);

    for (let i = 0; i < voices.length ; i += 1) {
      if (voices[i].lang === languageCode) {
        return voices[i];
      }
    }

    throw new Error(`languageCode ${languageCode} not found`);
  }

  async speech(textToSynthesis, language = 'ja-JP') {
    const synth = window.speechSynthesis;
      
    if (synth.speaking) {
      console.error('speechSynthesis.speaking');
      return;
    }
    var utterThis = new SpeechSynthesisUtterance(textToSynthesis);
    utterThis.onend = event => console.log('SpeechSynthesisUtterance.onend');
    utterThis.onerror = event => console.error('SpeechSynthesisUtterance.onerror');
    utterThis.voice = await this.getLanguageBasedVoice(language).then(data => data);
    synth.speak(utterThis);
  }

  hear(language = 'en-US', resolve, reject) {
    if (!this.isWebbrowserSupported()) {
      throw new Error('your webbrowser don\'t support this feature');
      return;
    }
  
    const SpeechRecognition = this.getSpeechRecognition();
  
    const recognition = new SpeechRecognition();
    recognition.lang = language;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.start();
  
    recognition.onresult = (event) => {
      const last = event.results.length - 1;
      const text = event.results[last][0].transcript;
  
      resolve(text);
    }
  
    recognition.onspeechend = () => {
      recognition.stop();
    }
  
    recognition.onnomatch = (event) => {
      reject('I didn\'t recognise that color.');
    }
  
    recognition.onerror = (event) => {
      reject('Error occurred in recognition: ' + event.error);
    }
  }
}
