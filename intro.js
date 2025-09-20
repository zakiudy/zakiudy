const text = "Hello world .. Im Zakaria Uday Faisal , and this is my ID";
const typewriter = document.getElementById("typewriter");
const cursor = document.querySelector(".cursor");

let i = 0;

function typeEffect() {
  if(i < text.length) {
    // أضف الحرف الحالي للنص
    typewriter.textContent += text.charAt(i);
    i++;

    // ضع المؤشر بعد النص مباشرة
    if(!typewriter.contains(cursor)) {
      typewriter.appendChild(cursor);
    }

    setTimeout(typeEffect, 900); // سرعة الكتابة
  } else {
    // بعد انتهاء الكتابة انتظر 3 ثواني
    setTimeout(() => {
      startFade();
    }, 3000);
  }
}

// Fade ثم توجيه
function startFade() {
  const fadeDiv = document.createElement("div");
  fadeDiv.className = "fade-overlay";
  document.body.appendChild(fadeDiv);

  // اضف fade تدريجي
  setTimeout(() => {
    fadeDiv.style.opacity = "1";
  }, 50);

  // بعد انتهاء الـ fade انتقل للصفحة الرئيسية
  setTimeout(() => {
    window.location.href = "index.html";
  }, 2050);
}

// بداية التأثير بعد 2 ثواني
window.onload = () => {
  setTimeout(typeEffect, 1000);
};
