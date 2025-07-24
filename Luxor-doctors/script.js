// دالة نسخ الرقم إلى الحافظة مع تنبيه بسيط
function copyNumber(number) {
  navigator.clipboard.writeText(number).then(() => {
    alert('تم نسخ الرقم: ' + number);
  }).catch(() => {
    alert('فشل نسخ الرقم، حاول مرة أخرى');
  });
}
