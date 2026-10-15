# YouTube Auto Skip Ad
A tiny extension that automatically clicks YouTube's "Skip Ad" button using the Chrome Debugger API. It does not block ads — it only clicks the Skip button when one appears.

<img width="1156" height="110" alt="Banner Screenshot" src="https://github.com/user-attachments/assets/8707a07f-393f-4747-8ea8-ac62f82684a8" />

## Install
1. Download the extension files
2. Open Chrome and go to chrome://extensions/
3. Enable Developer mode (toggle in the top right corner)
4. Click Load unpacked
5. Select the folder containing the extension files

The extension will appear in your extensions list.

Note: Once the extension is added it will automatically work on new YouTube pages. If you added the extension while a YouTube tab was already open and playing, refresh that tab once for it to start working.

## Usage
- Play a YouTube video. When a skippable ad shows a "Skip Ad" button, the extension will detect it and automatically click the Skip Ad button.
- When the extension clicks Skip, a small banner will appear for 1–2 seconds and then disappear. The image above is a screenshot of that banner.

## Notes
- The extension does not block or remove ads; it only clicks the Skip button when present.
- Works on desktop Chromium-based browsers (Chrome, Edge). Not intended for mobile browsers.
- All code runs locally in your browser; nothing is sent to external servers.
- YouTube's Skip Ad button cannot be reliably clicked with the generic JavaScript `.click()` method, so this extension uses the Chrome Debugger API to synthesize real mouse events to automate the click.

## How it works (brief)
- A content script looks for the Skip Ad button and tells the background script to click it using the Chrome Debugger API.

## License
MIT
