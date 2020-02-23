use wasm_bindgen::prelude::*;
use web_sys::{AudioContext, OscillatorType};

#[wasm_bindgen]
pub struct Oscillator {
    ctx: AudioContext,
    osc: web_sys::OscillatorNode,
    gain: web_sys::GainNode,
}

impl Drop for Oscillator {
    fn drop(&mut self) {
        let _ = self.ctx.close();
    }
}

#[wasm_bindgen]
impl Oscillator {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Result<Oscillator, JsValue> {
        let ctx = web_sys::AudioContext::new()?;
        let osc = ctx.create_oscillator()?;
        let gain = ctx.create_gain()?;

        osc.set_type(OscillatorType::Sine);
        osc.frequency().set_value(440.0);
        gain.gain().set_value(0.0);

        osc.connect_with_audio_node(&gain)?;
        gain.connect_with_audio_node(&ctx.destination())?;

        osc.start()?;

        Ok(Oscillator { ctx, osc, gain })
    }

    #[wasm_bindgen]
    pub fn set_gain(&self, gain: f32) {
        let new_gain = if gain > 1.0 {
            1.0
        } else if gain < 0.0 {
            0.0
        } else {
            gain
        };
        self.gain.gain().set_value(new_gain);
    }
}
