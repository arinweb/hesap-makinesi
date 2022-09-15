//genel değişkenleri oluşturdum
var optDurum = false, opt = " ", sonuc = 0;

// nesnelerin oluşturulması ve tanımlanması yaptım
var btnRakam = document.querySelectorAll(".btnRakam"); //rakam kontolü yazıldı
var gosterge = document.querySelector("#gosterge"); //gosterge paneli yaptım rakamların gösterildiği yer
var btnOpt = document.querySelectorAll(".btnOpt"); //işlem butonlarınıjn ontrolünü sağlar
var islem = document.querySelector("#islem");
var btnesit = document.querySelector(".btnesit");

//Foreach döngüsü diziler için kullanılan bir döngü türüdür. Döngünün ne kadar döneceği
//dizinin eleman sayısına bağlı olarak program tarafından otomatik hesaplanacaktır.
//butonlara basılmış mı dite kontrol ve foreach ile tüm nesnelere olay ataması yapılıyor .
btnRakam.forEach(function (element) {
  element.onclick = function (e) {
    //butona tıkladığımı kontrol ediyor

    // Ve opt basılıp basılmadığını kontrol etmek için
    if (optDurum)gosterge.textContent = ""; // ,"" içine ne yazarsam en başta o görünür ,ekranda gösterir herşeyi

    // text nesnesini okuyup td içindeki değerlerle birleştirdik
    gosterge.textContent += this.textContent;
    optDurum = false; //+,- gibi işlem yapıldıysa text kutusunu sıfırlamayı sağlıyor

  }

});

btnOpt.forEach(function (element) {
  element.onclick = function (e) {
    optDurum = true;
    var yeniOpt = this.textContent;
    //işlem panelinde görünür
    islem.textContent = islem.textContent + "" + gosterge.textContent + "" + yeniOpt; //yeniopt yazan yer +-*/ leri gösteriyor
    //işlem sonucunu yazdırmak için kullandım

    switch (opt) //hafızadaki opt işlemi için görev görür
    {
      case "+":
        gosterge.textContent = (sonuc + Number(gosterge.textContent)); //işlemlerin yapıldığı satırlar basılan butona göre switch işlemi yapılacak
        break;
      case "-":
        gosterge.textContent = (sonuc - Number(gosterge.textContent));
        break;
      case "*":
        gosterge.textContent = (sonuc * Number(gosterge.textContent));
        break;
      case "/":
        gosterge.textContent = (sonuc / Number(gosterge.textContent));
        break;
      default:
        break;
    }

    sonuc = Number(gosterge.textContent); //başıana number yazmazsan sayılar yan yana yazılır .sayı olduğunu belirtmelisin hep
    opt = yeniOpt; // yukarıda yazılı number olmazsa hesaplama yapmaz .
  }
});

btnesit.onclick = function(e) {
  islem.textContent = "";
  optDurum = true;
  switch (opt) //hafızadaki opt işlemi için görev görür
  {
    case "+": gosterge.textContent = (sonuc + Number(gosterge.textContent)); //işlemlerin yapıldığı satırlar basılan butona göre switch işlemi yapılacak
      break;
    case "-": gosterge.textContent = (sonuc - Number(gosterge.textContent));
      break;
    case "*": gosterge.textContent = (sonuc * Number(gosterge.textContent));
      break;
    case "/": gosterge.textContent = (sonuc / Number(gosterge.textContent));
      break;
    default:
      break;
  }
  sonuc = Number(gosterge.textContent);
  gosterge.textContent = sonuc;
  sonuc = 0;
  opt = "";
}
