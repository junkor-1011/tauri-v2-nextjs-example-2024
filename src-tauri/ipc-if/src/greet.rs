use serde::{Deserialize, Serialize};
use ts_rs::TS;

#[derive(TS, Deserialize, Serialize)]
#[ts(export_to = "greet.ts")]
pub struct GreetArgs {
    pub name: String,
}

#[derive(TS, Deserialize, Serialize)]
#[ts(export_to = "greet.ts")]
pub struct GreetResponse {
    pub message: String,
    pub timestamp: chrono::DateTime<chrono::Utc>,
}

#[derive(TS, Deserialize, Serialize)]
#[ts(rename_all = "lowercase", export_to = "greet.ts")]
pub enum GreetLabel {
    Greet,
}

#[derive(TS, Deserialize, Serialize)]
#[ts(export, export_to = "greet.ts")]
pub struct GreetType {
    pub args: GreetArgs,
    pub response: GreetResponse,
    pub label: GreetLabel,
}
