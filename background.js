chrome.runtime.onMessage.addListener((msg, sender) => {
  if (msg.type !== "click" || !sender.tab) return;
  realClick(sender.tab.id, msg.x, msg.y);
});

async function realClick(tabId, x, y) {
  const target = { tabId };
  try {
    await chrome.debugger.attach(target, "1.3");
  } catch (e) {
    console.log("attach:", e.message);
  }
  try {
    const send = (type, extra = {}) =>
      chrome.debugger.sendCommand(target, "Input.dispatchMouseEvent", {
        type, x, y, button: "left", clickCount: 1, ...extra,
      });
    await send("mouseMoved", { button: "none", clickCount: 0 });
    await send("mousePressed");
    await send("mouseReleased");
  } catch (e) {
    console.log("click error:", e.message);
  }
  try {
    await chrome.debugger.detach(target);
  } catch (e) {}
}
