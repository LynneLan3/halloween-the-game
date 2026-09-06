
from playwright.sync_api import sync_playwright
import time, sys
url = "https://www.youtube.com/watch?v=DUohGl2xF7c&t=27s"
out = "/Users/lanling/Code/hot_words_websites/halloween-the-game/.launch-video-evidence/evil-presence/debug-cap/pw/playwright-t27.png"
try:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1280, "height": 720})
        page.goto(url, wait_until="domcontentloaded", timeout=45000)
        time.sleep(2)
        body = page.content().lower()
        for kw, code in [
            ("sign in to confirm", "LOGIN_REQUIRED"),
            ("age-restricted", "AGE_RESTRICTED"),
            ("not available in your country", "GEO_BLOCKED"),
            ("video unavailable", "VIDEO_UNAVAILABLE"),
            ("this video isn't available", "VIDEO_UNAVAILABLE"),
        ]:
            if kw in body:
                print("BLOCKER", code)
                browser.close()
                sys.exit(2)
        try:
            page.keyboard.press("k")
        except Exception:
            pass
        time.sleep(2)
        player = page.locator("#player, .html5-video-player").first
        try:
            player.screenshot(path=out, timeout=8000)
        except Exception:
            page.screenshot(path=out, timeout=8000)
        print("OK", out)
        browser.close()
except Exception as e:
    print("FAIL", type(e).__name__, e)
    sys.exit(1)
