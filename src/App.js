import React from "react";
import sumbul from "./assets/sumbul.jpg";
import shifo from "./assets/shifo.jpg";
import SentNumber from "./components/SentNumber.jsx";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center relative">
      <div className="max-w-3xl mx-auto text-center bg-white p-6 rounded-lg shadow-lg relative z-10">
        <h1 className="text-3xl font-bold mb-4">
          Hayotning So'nggi Chegarasidan Qaytish
        </h1>
        <p className="mb-6">
          Ahmad aka uzoq yillar davomida o‘zini charchoq va og‘riqlardan azob
          chekib kelayotganini hech kimga aytmas edi. Har tong u uchun yangi bir
          kurash edi. Bir kuni, Ahmad aka o‘zini ertalab qo‘zg‘atishga kuch topa
          olmay qoldi. Oilasi unga qarab, uning har kuni tobora charchab
          borayotganini sezsada, u buni tan olmasdi.
        </p>
        <p className="mb-6">
          Og‘ir nafas olgancha uyqudan uyg‘onish, yurakni ezib kelayotgan
          og‘riqlar, tinmay charchayotgan vujudi uni asta-sekin kuchsizlantirib
          borardi. Shifokorlarga borib, ko‘plab dorilar qabul qilishiga qaramay,
          u o‘zini tetik his qilmasdi. Har bir dori ichganida, u o‘zini biroz
          yaxshi his qilardi, ammo bu vaqtinchalik edi.
        </p>
        <p className="mb-6">
          Bir kuni u og‘ir holatga tushdi. Qon bosimi keskin ko‘tarildi va qonga
          zararli moddalarning yig‘ilib qolishi sababli yuragi to‘xtab qolish
          xavfi paydo bo‘ldi. Shu paytda uning oilasi o‘ziga boshqa yordam
          topishga kirishdi. Qizi unga bir necha oylardan beri eshitib kelgan
          Sumbul Shifo haqida gapirib berdi. Avvaliga u bunga ishonmadi, "oddiy
          o‘t-o‘lan qanday qilib meni sog‘lom qila oladi?" deb o‘ylardi. Ammo
          boshqa hech qanday imkon qolmagach, u bunga sinab ko‘rishga qaror
          qildi.
        </p>
        <img
          src={sumbul}
          alt="Sumbul Shifo"
          className="my-8 w-full h-auto rounded-lg shadow-md"
        />
        <p className="mb-6">
          Bir necha hafta o‘tgach, Ahmad aka o‘zini yana boshqacha his eta
          boshladi. Yuragidagi og‘riqlar kamaydi, tanasidagi og‘riqlar
          sekin-asta yo‘qoldi, va u ko‘p yillik charchoqlardan qutuldi. Endi u
          o‘z oilasi bilan ertalabdan tetik holda uyg‘onib, shijoat bilan yangi
          kunni boshlashga tayyor edi. O‘sha paytdagi xastaligi va og‘riqlari
          xuddi yomon tush kabi ortda qoldi.
        </p>
        <p className="mb-6">
          Ahmad aka Sumbul Shifo tufayli o‘z hayotini qayta tikladi va o‘z
          do‘stlariga ham shu mahsulotni tavsiya qila boshladi.
        </p>

        <h2 className="text-2xl font-bold mb-4">
          Dunyo bo'yicha qorqinchli statistikalar
        </h2>
        <ul className="list-disc list-inside mb-6">
          <li>
            <strong>Yurak Kasalliklari:</strong> Har yili 17.9 million odam
            yurak kasalliklaridan vafot etadi, bu barcha o‘limlarning 31% ni
            tashkil etadi.
          </li>
          <li>
            <strong>Diabet:</strong> Dunyo bo‘yicha 463 million odam diabetdan
            azob chekadi va bu raqam 2045 yilga kelib 700 millionga yetishi
            mumkin.
          </li>
          <li>
            <strong>Onkologiya:</strong> Har yili 10 milliondan ortiq odam
            onkologik kasalliklardan vafot etadi. Bu raqam har yili oshib
            bormoqda.
          </li>
          <li>
            <strong>Depressiya:</strong> Har yili 280 million odam depressiya
            bilan kurashadi, va bu ruhiy salomatlik bo‘yicha eng keng tarqalgan
            muammolardan biridir.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">
          Sumbul Shifo Haqida Ma'lumot
        </h2>
        <p className="mb-6">
          Sumbul Shifo - bu kuchli terapevtik xususiyatlarga ega bo‘lgan tabiiy
          o‘simlikdir. U bir qancha salomatlik foydalari bilan mashhur:
        </p>
        <img
          src={shifo}
          alt="Sumbul Shifo"
          className="my-8 w-full h-auto rounded-lg shadow-md"
        />
        <ul className="grid grid-cols-1 gap-4 mb-6">
          <li>
            <strong>Quvvatni oshiradi:</strong> Tanani energiya bilan to‘ldiradi
            va charchoqni kamaytiradi.
          </li>
          <li>
            <strong>Antioxidant:</strong> Erkin radikallarga qarshi kurashadi va
            yoshlanish jarayonini sekinlashtiradi.
          </li>
          <li>
            <strong>Sedativ:</strong> Tinchlantiruvchi va stressni kamaytiruvchi
            ta’sirga ega.
          </li>
          <li>
            <strong>Yallig‘lanishga qarshi:</strong> Yallig‘lanishlarni
            kamaytiradi va tahlil qilish jarayonlarini yaxshilaydi.
          </li>
          <li>
            <strong>Spazmolitik:</strong> Og‘riqlarni kamaytiradi va mushaklarni
            yumshatadi.
          </li>
          <li>
            <strong>Bakteriyalarga qarshi:</strong> Bakteriyalarga qarshi
            kurashadi va infeksiyalarni oldini oladi.
          </li>
          <li>
            <strong>Immun tizimni mustahkamlaydi:</strong> Immun tizimni
            kuchaytiradi va kasalliklardan himoya qiladi.
          </li>
          <li>
            <strong>Hujayra tiklanishini tezlashtiradi:</strong> Yara va
            hujayralarning tiklanishini yaxshilaydi.
          </li>
          <li>
            <strong>Metabolizmni me’yorga soladi:</strong> Metabolizmni
            optimallashtiradi va ortiqcha yog'larni kamaytiradi.
          </li>
        </ul>
        <SentNumber />
      </div>
    </div>
  );
}

export default App;
