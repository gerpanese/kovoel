/* global expect */
/* global it */
/* global describe */
import WebSpeechApi from '../../utils/WebSpeechApi';


describe('WebSpeechApi', () => {
  it('getSpeechRecognition() - method', () => {
    // setup
    const webSpeechApi = new WebSpeechApi();

    // Assert
    expect(webSpeechApi.getSpeechRecognition()).toEqual(null);
  });

  it('isWebbrowserSupported() - method', () => {
    // setup
    const webSpeechApi = new WebSpeechApi();

    // Assert
    expect(webSpeechApi.isWebbrowserSupported()).toEqual(false);
  });

  it('hear() - method - exception', () => {
    const resolve = () => {};
    const reject = () => {};

    // setup
    const webSpeechApi = new WebSpeechApi();

    // Assert
    try {
      webSpeechApi.hear('en-US', resolve, reject);
    } catch (error) {
      expect(error.message).toEqual('your webbrowser don\'t support this feature');
    }
  });

  it('speech() - method - exception', () => {
    // setup
    const webSpeechApi = new WebSpeechApi();

    // Assert
    try {
      webSpeechApi.speech('good morning', 'en-US');
    } catch (error) {
      expect(error.message).toEqual('your webbrowser don\'t support this feature');
    }
  });

  it('getLanguageBasedVoice() - method - not found', () => {
    // setup
    const webSpeechApi = new WebSpeechApi();

    const languageCode = 'en-XX';

    // Assert
    try {
      const result = webSpeechApi.getLanguageBasedVoice(languageCode);
      expect(result).toEqual(new Promise(() => {}));
    } catch (error) {
      expect(error.message).toEqual(`languageCode ${languageCode} not found`);
    }
  });
});
