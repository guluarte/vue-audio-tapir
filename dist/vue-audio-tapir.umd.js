(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vue-audio-tapir"] = factory(require("vue"));
	else
		root["vue-audio-tapir"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__203__) {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ (function(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 203:
/***/ (function(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/TapirWidget.vue?vue&type=template&id=5d67e2a4

const _hoisted_1 = {
  class: "text-center font-sans w-96 mx-auto"
};
const _hoisted_2 = {
  class: "text-sm text-red-400"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_button = (0,external_commonjs_vue_commonjs2_vue_root_Vue_.resolveComponent)("icon-button");

  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", _hoisted_1, [(0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", null, [$data.recording ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_icon_button, {
    key: 0,
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      'border-color': $props.buttonColor
    }),
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)($options.buttonClass),
    name: "stop",
    onClick: $options.toggleRecording
  }, null, 8, ["style", "class", "onClick"])) : ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createBlock)(_component_icon_button, {
    key: 1,
    style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)({
      'border-color': $props.buttonColor
    }),
    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)($options.buttonClass),
    name: "mic",
    onClick: $options.toggleRecording
  }, null, 8, ["style", "class", "onClick"]))]), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)($data.errorMessage), 1)]);
}
;// CONCATENATED MODULE: ./src/components/TapirWidget.vue?vue&type=template&id=5d67e2a4

;// CONCATENATED MODULE: ./src/api/Service.js
class Service {
  constructor(backendEndpoint) {
    this.backendEndpoint = backendEndpoint;
  } // returns true if successfull, false if failed


  async postBackend(recordedBlob) {
    try {
      const response = await fetch(this.backendEndpoint, {
        method: "POST",
        body: recordedBlob
      });

      if (!response.ok) {
        return false;
      }

      return true;
    } catch (error) {
      return false;
    }
  }

}
;// CONCATENATED MODULE: ./node_modules/lib-wav-encoder/index.js
/* eslint-disable */
/* harmony default export */ var lib_wav_encoder = (class {
    constructor(options) {
        this.bufferSize = options.bufferSize || 4096;
        this.sampleRate = options.sampleRate;
        this.samples = options.samples;
    }

    finish() {
        this._joinSamples();

        const buffer = new ArrayBuffer(44 + this.samples.length * 2);
        const view = new DataView(buffer);

        this._writeString(view, 0, 'RIFF'); // RIFF identifier
        view.setUint32(4, 36 + this.samples.length * 2, true); // RIFF chunk length
        this._writeString(view, 8, 'WAVE'); // RIFF type
        this._writeString(view, 12, 'fmt '); // format chunk identifier
        view.setUint32(16, 16, true); // format chunk length
        view.setUint16(20, 1, true); // sample format (raw)
        view.setUint16(22, 1, true); // channel count
        view.setUint32(24, this.sampleRate, true); // sample rate
        view.setUint32(28, this.sampleRate * 4, true); // byte rate (sample rate * block align)
        view.setUint16(32, 4, true); // block align (channel count * bytes per sample)
        view.setUint16(34, 16, true); // bits per sample
        this._writeString(view, 36, 'data'); // data chunk identifier
        view.setUint32(40, this.samples.length * 2, true); // data chunk length

        this._floatTo16BitPCM(view, 44, this.samples);

        const blob = new Blob([view], { type: 'audio/wav' });

        return {
            id: Date.now(),
            blob,
            url: URL.createObjectURL(blob),
        };
    }

    _floatTo16BitPCM(output, offset, input) {
        for (let i = 0; i < input.length; i++, offset += 2) {
            const s = Math.max(-1, Math.min(1, input[i]));
            output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
        }
    }

    _joinSamples() {
        const recordLength = this.samples.length * this.bufferSize;
        const joinedSamples = new Float64Array(recordLength);
        let offset = 0;

        for (let i = 0; i < this.samples.length; i++) {
            const sample = this.samples[i];
            joinedSamples.set(sample, offset);
            offset += sample.length;
        }

        this.samples = joinedSamples;
    }

    _writeString(view, offset, string) {
        for (let i = 0; i < string.length; i++) {
            view.setUint8(offset + i, string.charCodeAt(i));
        }
    }
});

;// CONCATENATED MODULE: ./node_modules/convert-time-to-mmss/index.js
function convertTimeMMSS(seconds) {
    if (!seconds) {
        return null;
    }
    return new Date(seconds * 1000).toISOString().substr(14, 5);
}

;// CONCATENATED MODULE: ./node_modules/lib-wav-audio-recorder/index.js
/* eslint-disable */




class Recorder {
    constructor(options = {}) {
        this.beforeRecording = options.beforeRecording;
        this.pauseRecording = options.pauseRecording;
        this.afterRecording = options.afterRecording;
        this.micFailed = options.micFailed;

        this.encoderOptions = {
            bitRate: options.bitRate,
            sampleRate: options.sampleRate,
        };

        this.bufferSize = 4096;
        this.records = [];

        this.isPause = false;
        this.isRecording = false;

        this.duration = 0;
        this.volume = 0;

        this.wavSamples = [];

        this._duration = 0;
    }

    start() {
        const constraints = {
            video: false,
            audio: {
                channelCount: 1,
                echoCancellation: false,
            },
        };

        this.beforeRecording && this.beforeRecording("start recording");

        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(this._micCaptured.bind(this))
            .catch(this._micError.bind(this));

        this.isPause = false;
        this.isRecording = true;
    }

    stop() {
        this.stream.getTracks().forEach((track) => track.stop());
        this.input.disconnect();
        this.processor.disconnect();
        this.context.close();

        let record = null;

        const wavEncoder = new lib_wav_encoder({
            bufferSize: this.bufferSize,
            sampleRate: this.encoderOptions.sampleRate,
            samples: this.wavSamples,
        });
        record = wavEncoder.finish();
        this.wavSamples = [];

        record.duration = convertTimeMMSS(this.duration);
        this.records.push(record);

        this._duration = 0;
        this.duration = 0;

        this.isPause = false;
        this.isRecording = false;

        this.afterRecording && this.afterRecording(record);
    }

    pause() {
        this.stream.getTracks().forEach((track) => track.stop());
        this.input.disconnect();
        this.processor.disconnect();

        this._duration = this.duration;
        this.isPause = true;

        this.pauseRecording && this.pauseRecording("pause recording");
    }

    recordList() {
        return this.records;
    }

    lastRecord() {
        return this.records.slice(-1).pop();
    }

    _micCaptured(stream) {
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        this.duration = this._duration;
        this.input = this.context.createMediaStreamSource(stream);
        this.processor = this.context.createScriptProcessor(this.bufferSize, 1, 1);
        this.stream = stream;

        this.processor.onaudioprocess = (ev) => {
            const sample = ev.inputBuffer.getChannelData(0);
            let sum = 0.0;

            this.wavSamples.push(new Float32Array(sample));

            for (let i = 0; i < sample.length; ++i) {
                sum += sample[i] * sample[i];
            }

            this.duration = parseFloat(this._duration) + parseFloat(this.context.currentTime.toFixed(2));
            this.volume = Math.sqrt(sum / sample.length).toFixed(2);
        };

        this.input.connect(this.processor);
        this.processor.connect(this.context.destination);
    }

    _micError(error) {
        this.micFailed && this.micFailed(error);
    }
}

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IconButton.vue?vue&type=template&id=3ae5c9e4

const IconButtonvue_type_template_id_3ae5c9e4_hoisted_1 = ["innerHTML"];
function IconButtonvue_type_template_id_3ae5c9e4_render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    innerHTML: $data.icons[$props.name]
  }, null, 8, IconButtonvue_type_template_id_3ae5c9e4_hoisted_1);
}
;// CONCATENATED MODULE: ./src/components/IconButton.vue?vue&type=template&id=3ae5c9e4

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/IconButton.vue?vue&type=script&lang=js
/* harmony default export */ var IconButtonvue_type_script_lang_js = ({
  props: {
    name: {
      type: String
    }
  },

  data() {
    return {
      icons: {
        download: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/><path fill="none" d="M0 0h24v24H0z"/></svg>',
        mic: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/></svg>',
        save: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
        stop: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 6h12v12H6z"/></svg>',
        volume: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/><path d="M0 0h24v24H0z" fill="none"/></svg>'
      }
    };
  }

});
;// CONCATENATED MODULE: ./src/components/IconButton.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/components/IconButton.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(IconButtonvue_type_script_lang_js, [['render',IconButtonvue_type_template_id_3ae5c9e4_render]])

/* harmony default export */ var IconButton = (__exports__);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/TapirWidget.vue?vue&type=script&lang=js





const INSTRUCTION_MESSAGE = "Click icon to start recording message.";
const INSTRUCTION_MESSAGE_STOP = "Click icon again to stop recording.";
const ERROR_MESSAGE = "Failed to use microphone. Please refresh and try again and permit the use of a microphone.";
const SUCCESS_MESSAGE = "Successfully recorded message!";
const SUCCESS_MESSAGE_SUBMIT = "Successfully submitted audio message! Thank you!";
const ERROR_SUBMITTING_MESSAGE = "Error submitting audio message! Please try again later.";
/* harmony default export */ var TapirWidgetvue_type_script_lang_js = ({
  name: "TapirWidget",
  props: {
    // in minutes
    time: {
      type: Number,
      default: 1
    },
    bitRate: {
      type: Number,
      default: 128
    },
    sampleRate: {
      type: Number,
      default: 44100
    },
    backendEndpoint: {
      type: String
    },
    buttonColor: {
      type: String,
      default: "green"
    },
    // callback functions
    afterRecording: {
      type: Function
    },
    successfulUpload: {
      type: Function
    },
    failedUpload: {
      type: Function
    },
    customUpload: {
      type: Function,
      default: null
    }
  },
  components: {
    IconButton: IconButton
  },

  data() {
    return {
      recording: false,
      recordedAudio: null,
      recordedBlob: null,
      recorder: null,
      successMessage: null,
      errorMessage: null,
      instructionMessage: INSTRUCTION_MESSAGE
    };
  },

  computed: {
    buttonClass() {
      return "mx-auto h-14 w-14 fill-current text-black cursor-pointer rounded-50 border-2 m-4 p-2";
    },

    recordedTime() {
      if (this.time && this.recorder?.duration >= this.time * 60) {
        this.toggleRecording();
      }

      return convertTimeMMSS(this.recorder?.duration);
    }

  },

  beforeUnmount() {
    if (this.recording) {
      this.stopRecorder();
    }
  },

  methods: {
    toggleRecording() {
      this.recording = !this.recording;

      if (this.recording) {
        this.initRecorder();
      } else {
        this.stopRecording();
      }
    },

    initRecorder() {
      this.recorder = new Recorder({
        micFailed: this.micFailed,
        bitRate: this.bitRate,
        sampleRate: this.sampleRate
      });
      this.recorder.start();
      this.successMessage = null;
      this.errorMessage = null;
      this.instructionMessage = INSTRUCTION_MESSAGE_STOP;
      this.service = new Service(this.backendEndpoint);
    },

    stopRecording() {
      this.recorder.stop();
      const recordList = this.recorder.recordList();
      this.recordedAudio = recordList[0].url;
      this.recordedBlob = recordList[0].blob;

      if (this.recordedAudio) {
        this.successMessage = SUCCESS_MESSAGE;
        this.instructionMessage = null;
      }

      if (this.afterRecording) {
        this.sendData();
      }
    },

    async sendData() {
      if (!this.recordedBlob) {
        return;
      }

      let result = null;

      if (this.customUpload) {
        result = await this.customUpload(this.recordedBlob);
      } else {
        result = await this.service.postBackend(this.recordedBlob);
      }

      if (result) {
        this.errorMessage = null;
        this.successMessage = SUCCESS_MESSAGE_SUBMIT;

        if (this.successfulUpload) {
          this.successfulUpload();
        }
      } else {
        // error uploading
        this.successMessage = null;
        this.errorMessage = ERROR_SUBMITTING_MESSAGE;

        if (this.failedUpload) {
          this.failedUpload();
        }
      }
    },

    micFailed() {
      this.recording = false;
      this.instructionMessage = INSTRUCTION_MESSAGE;
      this.errorMessage = ERROR_MESSAGE;
    }

  }
});
;// CONCATENATED MODULE: ./src/components/TapirWidget.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/components/TapirWidget.vue




;
const TapirWidget_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(TapirWidgetvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var TapirWidget = (TapirWidget_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (TapirWidget);


}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-audio-tapir.umd.js.map