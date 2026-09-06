
from playwright.sync_api import sync_playwright
import time, sys, base64
url = "https://www.youtube.com/watch?v=DUohGl2xF7c&t=60s"
out = "/Users/lanling/Code/hot_words_websites/halloween-the-game/.launch-video-evidence/evil-presence/cl-ep-003-pw/frames/playwright-t60.png"
try:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page(viewport={"width": 1920, "height": 1080})
        page.goto(url, wait_until="domcontentloaded", timeout=45000)
        time.sleep(2)
        for sel in [
            'button:has-text("Accept all")',
            'button:has-text("I agree")',
            'button:has-text("Accept")',
        ]:
            try:
                page.locator(sel).first.click(timeout=1500)
                time.sleep(1)
                break
            except Exception:
                pass

        def video_info():
            return page.evaluate("""() => {
              const v = document.querySelector('video.html5-main-video, video');
              if (!v) return null;
              return {
                hasVideo: true,
                w: Number(v.videoWidth || 0),
                h: Number(v.videoHeight || 0),
                ready: Number(v.readyState || 0),
                current: Number(v.currentTime || 0),
              };
            }""")

        info = video_info()
        body = page.content().lower()
        hard_blockers = [
            ("sign in to confirm your age", "LOGIN_REQUIRED"),
            ("sign in to confirm", "LOGIN_REQUIRED"),
            ("age-restricted video", "AGE_RESTRICTED"),
            ("not available in your country", "GEO_BLOCKED"),
        ]
        for kw, code in hard_blockers:
            if kw in body and not (info and info.get('w', 0) > 0):
                print("BLOCKER", code)
                browser.close()
                sys.exit(2)
        # Soft unavailable strings are common in YouTube chrome even when playback works.
        unavailable = ("video unavailable" in body) or ("this video isn't available" in body)
        if unavailable and not (info and info.get('w', 0) > 0):
            print("BLOCKER", "VIDEO_UNAVAILABLE")
            browser.close()
            sys.exit(2)

        # Prefer highest available quality before sampling the native frame.
        page.evaluate("""() => {
          const p = document.getElementById('movie_player');
          if (!p || !p.getAvailableQualityLevels) return;
          try {
            const levels = p.getAvailableQualityLevels() || [];
            for (const l of ['hd1080','hd720','large','medium']) {
              if (levels.includes(l)) {
                if (p.setPlaybackQualityRange) p.setPlaybackQualityRange(l, l);
                if (p.setPlaybackQuality) p.setPlaybackQuality(l);
                break;
              }
            }
          } catch (e) {}
        }""")
        page.evaluate("""() => {
          const v = document.querySelector('video.html5-main-video, video');
          if (!v) return;
          try { v.muted = true; v.play(); } catch (e) {}
        }""")
        time.sleep(2.5)
        info = video_info() or {}
        b64 = page.evaluate("""() => {
          const v = document.querySelector('video.html5-main-video, video');
          if (!v || !v.videoWidth) return null;
          const c = document.createElement('canvas');
          c.width = v.videoWidth;
          c.height = v.videoHeight;
          c.getContext('2d').drawImage(v, 0, 0);
          return c.toDataURL('image/png');
        }""")
        if b64:
            raw = base64.b64decode(b64.split(',', 1)[1])
            open(out, 'wb').write(raw)
            print("OK", out)
            print("SOURCE_RES", int(info.get('w') or 0), int(info.get('h') or 0))
            browser.close()
            sys.exit(0)
        player = page.locator("#player, .html5-video-player").first
        try:
            player.screenshot(path=out, timeout=8000)
        except Exception:
            page.screenshot(path=out, timeout=8000)
        print("OK", out)
        print("SOURCE_RES", int(info.get('w') or 0), int(info.get('h') or 0))
        browser.close()
except Exception as e:
    print("FAIL", type(e).__name__, e)
    sys.exit(1)
