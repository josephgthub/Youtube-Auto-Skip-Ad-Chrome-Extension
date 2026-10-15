# YouTube Auto Skip Ad
A tiny extension that clicks YouTube's "Skip Ad" button using real mouse events (Chrome Debugger API). It does not block ads — it only clicks the skip button when one appears. A small banner will appear briefly when a skip is performed.

<img width="1156" height="110" alt="Banner Screenshot" src="https://github.com/user-attachments/assets/8707a07f-393f-4747-8ea8-ac62f82684a8" />

## Install (unpacked)
1. Clone or download this repository.
2. In Chrome (or another Chromium browser), open chrome://extensions.
3. Enable **Developer mode** (top-right).
4. Click **Load unpacked** and choose the folder that contains this repo (the folder with `manifest.json`).
5. Allow the extension to run on youtube.com if prompted.

> Note: This extension uses the `debugger` permission to synthesize real mouse clicks. Because of that it typically must be loaded unpacked in Developer mode.

## Usage
- Play a YouTube video. When a skippable ad shows a "Skip Ad" button, the extension will detect it and dispatch a real click at the button's center. You will see a brief toast/banner when it does.

## Notes
- It does not block or remove ads; it only clicks the Skip button when present.
- Works on desktop Chromium-based browsers (Chrome, Edge). Not intended for mobile browsers.
- All code runs locally in your browser; nothing is sent to external servers.

## How it works (brief)
- A content script looks for `.ytp-skip-ad-button` every 500ms. When found it waits 1s then sends the button center coordinates to the background service worker.
- The background script attaches to the Chrome Debugger and dispatches real mouse events (mouseMoved, mousePressed, mouseReleased) at those coordinates.

## License
MIT
