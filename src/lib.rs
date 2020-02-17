extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn greeting() -> String {
    "nyaaaaan".to_string()
}
