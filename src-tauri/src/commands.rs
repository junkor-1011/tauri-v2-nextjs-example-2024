use ipc_if::greet::{GreetArgs, GreetResponse};

#[tauri::command]
pub fn greet(args: GreetArgs) -> GreetResponse {
    let message = format!("Hello, {}! You've been greeted from Rust!", args.name);

    GreetResponse {
        message,
        timestamp: chrono::Utc::now(),
    }
}
