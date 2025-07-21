

// הערך ההתחלתי לאפס
let count = 0;
// בחירת אלמנטים
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
// מתודה
btns.forEach(function (btn) {
// הגדרת פעולות לכפתורים
  btn.addEventListener("click", function (e) { 
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
// הגדרת צבעים
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});

