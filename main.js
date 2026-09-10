function showSuccessMessage() {
  alert("✅ The product has been successfully added to the cart");
}

// 1. جلب جميع الأزرار التي تحمل الـ class المحدد
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// 2. استخدام لوپ للمرور على كل زر وإضافة الحدث له
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", showSuccessMessage);
});
window.onscroll = function () {
  let btn = document.getElementById("scrollUp");
  if (
    document.body.scrollHeight > 200 &&
    document.documentElement.scrollHeight > 200
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}