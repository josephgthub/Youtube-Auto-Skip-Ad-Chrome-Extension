let busy = false;

function toast(text) {
  let el = document.getElementById("skip-test-toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "skip-test-toast";
    el.style.cssText =
      "position:fixed;top:20px;right:20px;z-index:999999;background:#222;" +
      "color:#fff;padding:12px 16px;border-radius:8px;font:14px sans-serif;";
    document.body.appendChild(el);
  }
  el.textContent = text;
  el.style.display = "block";
  setTimeout(() => (el.style.display = "none"), 3000);
}

setInterval(() => {
  if (busy) return;
  const btn = document.querySelector(".ytp-skip-ad-button");
  if (!btn || btn.getBoundingClientRect().width === 0) return;

  busy = true;
  toast("Skip button detected, clicking in 1 seconds...");

  setTimeout(() => {
    const r = btn.getBoundingClientRect();
    if (r.width > 0) {
      chrome.runtime.sendMessage({
        type: "click",
        x: r.left + r.width / 2,
        y: r.top + r.height / 2,
      });
    }
    setTimeout(() => (busy = false), 3000);
  }, 1000);
}, 500);
