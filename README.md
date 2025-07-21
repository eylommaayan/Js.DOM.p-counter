

<img width="644" height="647" alt="image" src="https://github.com/user-attachments/assets/dc10c062-bdc0-45fb-928b-66800a2f2bd5" />

<img width="529" height="705" alt="image" src="https://github.com/user-attachments/assets/b4ea0f2e-920e-4e83-9c5a-eaf158608452" />



🎯 מטרת הפרויקט: מונה לחיצות
ללמוד איך לשלוט בדינמיקה של עמוד HTML באמצעות JavaScript – שינוי טקסט, תגובה לאירועים, לולאות, תנאים ועוד.

🧠 מה לומדים בפרויקט הזה (JS בלבד)
שלב 1: יצירת משתנים ושמירת אלמנטים מה־DOM
js
Copy
Edit
let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");
מיומנויות נלמדות:
let – יצירת משתנה ניתן לשינוי.

document.querySelector() – בחירת אלמנט בודד מה־DOM.

document.querySelectorAll() – בחירת קבוצה של אלמנטים.

שמירת אלמנטים במשתנים לצורך מניפולציה.

שלב 2: שימוש בלולאת forEach על כפתורים
js
Copy
Edit
btns.forEach(function (btn) {
  // ...
});
מיומנויות נלמדות:
שימוש בלולאה על רשימת כפתורים.

קריאה לפונקציה עבור כל כפתור.

התחלה של Event Listener בתוך הלולאה.

שלב 3: האזנה ללחיצות – addEventListener
js
Copy
Edit
btn.addEventListener("click", function (e) {
  const styles = e.currentTarget.classList;
  // תנאים בהמשך...
});
מיומנויות נלמדות:
תגובה לאירוע לחיצה (click).

e.currentTarget.classList – כדי לבדוק לאיזה כפתור לחצו.

זיהוי פעולה לפי מחלקת הכפתור: increase, decrease, reset.

שלב 4: תנאים – שינוי ערך משתנה לפי סוג פעולה
js
Copy
Edit
if (styles.contains("decrease")) {
  count--;
} else if (styles.contains("increase")) {
  count++;
} else {
  count = 0;
}
מיומנויות נלמדות:
if / else if / else

תנאים לבדיקת סוג פעולה.

עבודה עם classList.contains() – האם אלמנט מכיל מחלקה מסוימת.

שלב 5: שינוי צבע טקסט בהתאם לערך
js
Copy
Edit
if (count > 0) {
  value.style.color = "green";
}
if (count < 0) {
  value.style.color = "red";
}
if (count === 0) {
  value.style.color = "#222";
}
מיומנויות נלמדות:
תנאים מרובים (>, <, ===).

גישה ל־style של אלמנט.

שינוי צבע טקסט לפי ערך.

שלב 6: עדכון טקסט בתוך אלמנט
js
Copy
Edit
value.textContent = count;
מיומנויות נלמדות:
שינוי הטקסט המוצג בתוך תגית ע"י textContent.

🧩 סיכום של הכישורים
מיומנות	מוסבר בפרויקט
משתנים (let, const)	✅
בחירת אלמנטים מה־DOM	✅
לולאת forEach	✅
מאזין לאירועים (addEventListener)	✅
תנאים (if, else)	✅
בדיקת classList	✅
שינוי סגנונות (style)	✅
שינוי תוכן טקסטי (textContent)	
