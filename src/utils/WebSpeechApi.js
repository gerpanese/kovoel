export default class WebSpeechApi {
  constructor() {
    this.voiceList = null;
  }

  getSpeechRecognition() {
    try {
      return webkitSpeechRecognition;
    } catch (e) {
      try {
        return SpeechRecognition;
      } catch (e) {
        return null;
      }
    }
  }

  isWebbrowserSupported() {
    return (this.getSpeechRecognition() !== null);
  }

  async getVoices() {
    const getVoices = (voiceName = '') =>
      new Promise(resolve => {
          window.speechSynthesis.onvoiceschanged = () => {
              resolve(window.speechSynthesis.getVoices());
          };
          window.speechSynthesis.getVoices();
      };
    };

    if (this.voiceList === null) {
      this.voiceList = await getVoices();
    }
    return this.voiceList;
  }

  async getLanguageBasedVoice(languageCode) {
    const voices = await this.getVoices().then(data => data);

    for (let i = 0; i < voices.length; i += 1) {
      if (voices[i].lang === languageCode) {
        return voices[i];
      }
    }

    throw new Error(`languageCode ${languageCode} not found`);
  }

  async speech(textToSynthesis, language = 'ja-JP') {
    const synth = window.speechSynthesis;

    if (synth.speaking) {
      console.log('speechSynthesis.speaking');
      return;
    }

    const utterThis = new SpeechSynthesisUtterance(textToSynthesis);
    utterThis.onend = () => console.log('SpeechSynthesisUtterance.onend');
    utterThis.onerror = () => console.error('SpeechSynthesisUtterance.onerror');
    utterThis.voice = await this.getLanguageBasedVoice(language).then(data => data);
    synth.speak(utterThis);
  }

  hear(language = 'en-US', resolve, reject) {
    if (!this.isWebbrowserSupported()) {
      throw new Error('your webbrowser don\'t support this feature');
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
    };

    recognition.onspeechend = () => {
      recognition.stop();
    };

    recognition.onnomatch = () => {
      reject('I didn\'t recognise that text.');
    };

    recognition.onerror = (event) => {
      reject(`Error occurred in recognition: ${  event.error}`);
    };
  }
}
