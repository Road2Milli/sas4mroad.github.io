let seconds = 20;
const btn = document.getElementById("downloadBtn");
if (btn) {
  let timer = setInterval(() => {
    seconds--;
    btn.innerText = "Wait " + seconds + "s...";
    if (seconds <= 0) {
      clearInterval(timer);
      btn.disabled = false;
      btn.innerText = "Download Now";
      btn.onclick = () => {
        window.location.href = "https://www.mediafire.com/file/kk52aup8ole9m0d/SAS_4_MEGA_MOD_UNLOCKED_ALL.apk/file"; // replace with your link
      };
    }
  }, 1000);
}
