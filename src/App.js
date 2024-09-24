import React from "react";
import sumbul from "./assets/image.jpg";
import rohat from "./assets/rohat.jpg";
import rohatTwo from "./assets/rohat2.jpg";
import SentNumber from "./components/SentNumber.jsx";
import "./index.css";
import opa from "./assets/opa.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col items-center relative">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg relative z-10">
        <h1 className="text-3xl font-bold mb-4">
          Xech qanday viagralarsiz! Faqatgina birgina tabiiy vosita orqali Siz
          yoshlikdagi jinsiy kuchingizni qaytarasiz! Bir oydan soʻng Siz jinsiy
          zaiflik va prostata muammosi xaqida butunlay unutasiz!
        </h1>

        <img
          src={sumbul}
          alt="Sumbul Shifo"
          className="my-8 w-full h-auto rounded-lg shadow-md"
        />
        <p className="mb-6 font-medium">
          Men sizlarga murojaat kilaman, janoblar! Men bloglarning muxlisi
          emasman, menimcha, bu erkaklar uchun mashgʻulot emas. Shuning uchun
          men oʻzimni umuman tanishtirmayman shunchaki Shavkat. Mening kasbim
          elektronika-injeneri.
        </p>
        <p className="mb-6 font-medium">
          Nega men sizga oʻz hikoyamni yozishga jur'at etdim? Ha, men shunday
          bir yomon xolatda edimki, buni dushmanimgayam ravo koʻrmasdim, qoʻpol
          boʻlsa ham aytaman jinsiy a'zoim turmay qolgandi, umuman jinsiy xayot
          degan narsa yuq edi
        </p>
        <p className="mb-6 font-medium">
          Ammo taqdir oʻz holimga tashlab qoʻymadi va endi men oʻz tajribamni
          Oʻzbekistondagi barcha erkaklar bilan baham koʻrishim kerak, kimda
          jinsiy zaiflik va prostata boʻlsa ularni tushkunlikka tushmasliklari
          uchun xikoyamni gapirib bermoqchiman ularni ragʻbatlantirish uchun.
        </p>
        <p className="mb-6 font-medium">
          Oʻzimdan bilamanki, barcha – 50 yoshdan oshgan erkaklar – sogʻlik
          nuqtai nazaridan ham, shaxsiy jabhada ancha sinaladilar.
        </p>
        <p className="mb-6 font-medium">
          Men faqat bir marta turmush qurganman. Avvaliga hamma narsa
          boshqalarnikiga oʻxshaydi - shirinliklar, guldastalar, toʻshak,
          dengizda dam olish. Va keyin, bolalar tugʻilganda, haqiqiy "oilaviy"
          hayot zavqlari boshlanadi.
        </p>
        <p className="mb-6 font-medium">
          Xotinim juda ogʻir xarakterga ega, va u xar doim janjal qilish uchun
          biron bir sabab izlaydi. Boshka tomondan, men ilgari yaxshi jinsiy
          kuchga ega edim, va biz fakat uy-ruzgor masalalari, bolalar va
          kaynonam tufayli janjallashar edik.
        </p>
        <p className="mb-6 font-medium">
          Men uyali aloka kompaniyasida boʻlim boshligʻi boʻlib ishlayman. Men
          yaxshi pul topaman. Ammo yaqin vaqtgacha, oʻzimni past baxolardim
          lekin ishda 25 ta xodimni boshkarish uchun bu xolatimni engishim kerak
          edi! Bu mening xozirgi kuchim va oʻzimga boʻlgan ishonchim tufayli
          sodir boʻldi.
        </p>
        <h1 className="mb-6 text-3xl text-#FF0000 font-bold">
          Ишга кетайотганимда, хотиним ҳар доим пичирларди: «Сиз буни ўз вақтида
          қилолмаяпсиз! Сиз кила олмаяпсиз!".
        </h1>
        <p className="mb-6 font-medium">
          Oxirgi 10 yil davomida oʻzimga bulgan ishonchim juda past darajada
          edi, men odamlardan kochib yashirinishni xoxlardim. Chunki,
          aytganimdek, men jinsiy kuvvat bilan xakikiy muammolarga duch kela
          boshladim. Xotinim bilan yotganimda, men birinchi muxabbatim Sabina
          xakida uylardim.
        </p>
        <p className="mb-6 font-medium">
          10 yil oldin men xotinimdan butunlay nafratlana boshladim, u meni
          xayratlantira olmagani uchun, u bilan jinsiy alokada boʻlishga xarakat
          kildim, lekin bu UMUMAN ishlamadi!!! Lekin u buni talab kilardi va
          meni majburlardi!
        </p>
        <p className="mb-6 font-medium">
          Men oilani saklab kolish uchun Viagra, xar xil kuritilgan ildizlarni
          sotib oldim. Men bolalarim uchun bundan xolatga chidab keldim. Viagra
          yaxshi ishladi, lekin mening kon bosimim 180/102 va undan yukori edi.
          Shifokor menda gipertonik inkiroz yuzaga kelganligini aytdi. Ammo men
          Viagrani kabul kilishni davom ettirdim va Viagrani bir kancha kon
          bosimiga karshi tabletkalari bilan ishlatdim. Dorixonadan olingan
          kuritilgan ildizlar esa deyarli xech kanday tasir koʻrsatmadi.
        </p>
        <h1 className="text-2xl font-bold">
          Umuman olganda, ha, men soʻnggi 10 yil davomida ayolim bilan jinsiy
          olatim boʻshashgan holda jinsiy aloqada boʻlganman.
        </h1>
        <p className="mb-6 font-medium">
          Shunday qilib, men spirtli ichimliklar ichishni boshladim.
        </p>
        <p className="mb-6 font-medium">
          Kechqurun ishdan kelasiz, aroq ichasiz va divanga yotasiz.
        </p>
        <p className="mb-6 font-medium">
          Xotinim esa meni doim kuzatib turar, smslarni tekshirardi, qoʻngʻiroq
          qilardi, qaerda ekanligimni va nima qilayotganimni, nega uyga
          kelmayotganimni tekshirardi. Shunday qilib, aroq men uchun eng oson
          echim boʻldi..
        </p>
        <p className="mb-6 font-medium">
          Taxminan besh yil davomida men kechqurun va dam olish kunlari
          ichadigan boʻldim, keyin men ichkilikka oʻrganib qoldim - men
          ichmaslikka harakat qildim, lekin ahvolim juda yomon edi, ichishim
          kerak edi. Shunday qilib, men uch kun uyda qoldim.
        </p>
        <h1 className="mb-6 text-2xl font-bold">
          Albatta, men mast holda ishga bormadim. Toʻsatdan direktorimiz menga
          koʻngʻirok kildi: «Nima boʻldi deb soʻradi?" Men Boshligʻimga «Meni
          ishdan boʻshating !»-deb aytdim. Ammo buning urniga u mening oldimga
          kelib, meni mashinasiga oʻtkazdi va spirtli ichimliklarga karamlilikni
          davolash markaziga olib bordi.
        </h1>
        <p className="mb-6 font-medium">
          Men uning xushyor ekanligini oʻziga boʻlgan ishonchi yukori ekanligini
          angladim.
        </p>
        <p className="mb-6 font-medium">
          Shunday kilib, ular meni tinchlantirishdi, tomchi-ukol koʻyishdi, dori
          berishdi. Aytgancha, men u erda men bilan bir xil takdirga ega boʻlgan
          koʻplab erkaklarni uchratdim..
        </p>
        <p className="mb-6 font-medium">
          Mast xolatdan oʻzimga kelganimdan keyin men doimo derazadan karab, oʻz
          jonimga kasd kilish xakida oʻylay boshladim, oʻtmishga kaytishni
          xoxlamadim, kelajak xakida oʻylamadim xam.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Spirtli ichimliklar boʻlimida bir tibbiy yordam shifokori ayol kishi
          tayinlandi. U biz bilan suxbatlashdi, psixologik xolatimizni
          tekshirdi, davolanishni tekshirdi, xali oldinda xamma narsa borligini
          va xammasi yaxshi boʻlishini aytdi.
        </p>
        <img
          src={opa}
          alt="Sumbul Shifo"
          className="my-8 w-[80%] m-auto h-auto rounded-lg shadow-md"
        />
        <p className="mb-6 text-2xl text-[#FF0000] font-bold">
          Бир куни психотерапия машғулотларида мен унинг елкасига йиқилдим ва
          йигладим, худди кичкина боладек. Йигилар орасида мен унга касалхонадан
          чикганимдан кейин уз жонимга касд килмокчи эканлигимни айтдим.
        </p>
        <p className="mb-6 text-[18px] font-bold">
          Lekin u meni rad etish oʻrniga boshimni silab, oʻziga yakinlashtirdi
          va kuchoqladi. Va toʻsatdan u menga shunday dedi: «Siz mening
          kanchalik yolgʻizligimni bilmaysiz! Men psixiatr va narkologman, fan
          nomzodiman, lekin meni yoshim 35 ga borgan boʻlsa xam oilasizman! «Men
          oʻzimga toʻgri keladigan odamni topa olmadim dedi.»
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Men boshimni koʻtardim, uning kulrang koʻzlariga qaradim va sevib
          qoldim. Xa, janoblar, men bu ayolni sevishimni 2 dakikada angladim,
          garchi men u xakida deyarli xech narsa bilmasam xam, u shifokor,
          aklli, fan nomzodi ekanligiga karamay u menga barcha shifokorlar
          singari uni ismi va familiyasi bilan chaqirmaslikni aytdi, shunchaki
          Zarina deb chaqirishimni aytdi.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Shu paytdan boshlab biz xar kuni psixologiya xakida suxbat kurar edik
          va men uning menga qanday gayrioddiy karashini paykadim. Va men,
          axmok, uning kanchalik yaxshi ekanligini darxol anglamadim.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          U meni spirtli ichimliklarga qaram boʻlib qolganlarni davolash
          markazidan chikarib yubordi, ammo biz telefon raqamlarimiz bilan
          almashdik. Xotinim, odatdagidek, toʻpolon qilardi.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Vipisala ona menya iz narkologichki domoy, no mi obmenyalis
          telefonami. Moya jena, kak obichno, ustroila skandal.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Men bu safar ichmadim, aksincha shifokorimning raqamini terdim. U meni
          darhol uyiga taklif kildi. Ma'lum boʻlishicha, u ikki xonali
          kvartirada ikkita mushuk bilan yolgiz yashar ekan.
        </p>
        <p className="mb-6 text-2xl text-[#FF0000] font-bold">
          Men kirishim bilan u koʻllarini boʻynimga koʻyib shunday dedi: «Mana,
          endi siz shu erda yashaysiz. »
        </p>
        <p className="mb-1 text-[18px] font-medium">
          Tabiiyki, biz tez orada yotokda edik. Mening olatim xotinim bilan
          boʻlganda faqat ishlamaydi deb umid qilgandim, yangi ayol bilan,
          ayniqsa yosh va chiroyli ayol bilan xamma narsa ishlashiga ishonardim
        </p>
        <p className="mb-6 text-[18px] font-bold">
          Ammo bizning jinsiy aloqamiz juda qisqa boʻldi olatim qattiq turmadi
          va juda lanj edi.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Mening oldimda u kanchalik xijolat tortdi! Biz indamay karavotda
          yotdik, u koʻlimni silab koydi, kulrang kuzlari menga xamdardlik bilan
          karadi. Men yana oʻz jonimga kasd kilish xakida oylar edim, fakat bu
          safar mening jinsiy zaifligim va Zarina tufayli.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Nima bulishidan katiy nazar, meni u bilan yashashimni talab qildi. Men
          xotinimga qoʻngʻirok qildim va unga rostini aytdim: "Xammasi tugadi!"
          Keyinchalik biz Zarina bilan yana oʻsha juda zaif jinsiy aloqa bilan
          shugʻullanardik.
        </p>
        <p className="mb-6 text-2xl text-[#FF0000] font-bold">
          Men undan suradim: «Zarina, sizga ichkilikboz va impotent odam nega
          kerak? »
        </p>
        <p className="mb-6 text-[18px] font-bold">
          У яна кулимни силаб деди:«Кел буни тузатайлик! »
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Men yashirincha borib, Viagrani bir korobka kon bosimi tabletkalari
          bilan birga sotib oldim. Ammo u shifokor boʻlgani uchun meni darxol bu
          ishimni paykadi. U menga viagra ichmaslikni aytdi. U menga: "Men sizni
          butunlay yoʻqotishdan koʻra, jinsiy alokasiz yashashni afzal kuraman."
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Xar kuni, yotishga borganimda, oʻzimni uxlab yotgandek kursatardim. Va
          men uni kuzatdim: u doimo Internetda eganini, jinsiy zaiflik
          saxifalarni kurib chikayotganini kurdim.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Va bir kuni kutilmaganda uyga kurer kelib, kichkina kuti berib ketti.
          U menga nima borligini aytmadi.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Zarina kechqurun chiroyli ichki kiyim kiyib, engil kechki ovkat
          pishirdi va dedi: «Endi davolanamiz». Qutida «Rohat» degan kompleks
          bor dedi. .
        </p>
        <img
          src={rohat}
          alt="Sumbul Shifo"
          className="my-8 w-[80%] m-auto h-auto rounded-lg shadow-md"
        />
        <p className="mb-6 text-[18px] font-medium">
          Keyinchalik men bu haqda oʻqidim - bu sovet seksopatologlari tomonidan
          oʻsimlik shifokorlari bilan birgalikda uchuvchilarning jinsiy kuchli
          boʻlishlari uchun maxsus ishlab chiqilgan ekan.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Axir, parvoz paytida barcha qon tananing yuqori qismida boʻladi va tos
          suyagiga hech narsa etib bormaydi. Muhandis sifatida men erkaklar
          organizimida qon etishmasligi hazil emasligini tushunardim: ular
          shunchaki qulab tushishi aniq edi bunday xolatda
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Xurmatli erkaklar, men bu maxsulot kursini olganimdan keyin Zarina
          meni nima qilishga majbur qilganini sizga yozishdan uyalaman, lekin
          men toʻliq jangovar xolatda edim albatta yotoqda, 20 yoshimdan beri
          boʻlmagan qattiqqoʻlligim va jasurligim qaytib keldi. Va biz u bilan
          toʻshakda nimalar qilardik, turli xil pozalar, kostyumlar,
          oʻyinchoqlar, buni aytish mumkin emas. Jinsiy aloqa tun boʻyi davom
          etardi endi jinsiy aloqa men tufayli emas uni oʻzi toʻxtatardi chunki
          chiday olmasdi. 2 oydan keyin men barcha muammolarni unutdim! 5 yil
          oʻtdi va mening olatim meni hech qachon uyaltirmadi!
        </p>
        <p className="mb-6 text-2xl text-[#FF0000] font-bold">
          Shunday qilib,Rohat kompleks dan men hech qachon yoʻqolmaydigan
          ereksiyani tikladim. Men bu mahsulot hech qanday kimyoviy moddalarsiz,
          tanani buzmaydigan va nojoʻya ta'sirlarsiz tabiiy ekanligiga ishonch
          hosil qildim
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Zarina hatto ishga kechika boshladi. Chunki men yana va yana
          xohlardim.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Erkaklar Siz meni tushunasizlar, bizda kechqurun, kechasi va hatto
          ertalab ham boʻlishi kerak. Mening xaloskorim shifokor sifatida
          Tarnado maxsulotini tanlagani bejiz emas!
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Xurmatli erkaklar men muhandis sifatida ayta olamanki, men oʻz
          tajribam bilan bunday kuchli ta'sirni kutmagan edim. Endi menga
          uchuvchilar va kosmonavtlarning jinsiy reabilitasiyasi qanday amalga
          oshirilganligi ma'lum boʻldi
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Xozirda xayotim qanday deysizlarmi? Zarina ikki farzand tugʻdi, biz
          birga koʻzimizda yosh bilan quvonib yashamoqdamiz!
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Men ham ishlayman, lekin koʻp vaqtim sobiq xotinim bilan birgalikda
          sotib olingan mulk boʻyicha sudda oʻtadi.
        </p>
        <p className="mb-6 text-[18px] font-bold">
          Yana shuni aytishim kerakki dorixona tarmoqlari ushbu mahsulotni
          tarqatishdan bosh tortishadi!
        </p>
        <p className="mb-6 text-[18px] font-medium">
          “Dorixonalar erkaklarda erektil disfunksiyadan juda yaxshi pul
          topishadi va shuning uchun hech kim ularning tiklanishiga qiziqmaydi.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Ammo bu xakikiy jinoyat! Gap shundaki, jinsiy alokada bulmasangiz,
          jinsiy zaiflik (impotensiya) juda xavflidir. U insonning endokrin
          tizimini buzadi, tos mintaqasida kon aylanishini uzgartiradi. Bu
          prostatit va xatto prostata saratoni kabi turli kasalliklarga eshikni
          ochadi. Statistika shuni kursatadiki, erektil disfunksiyali erkaklar
          xuddi shu yoshdagi erkaklarga karaganda taxminan 15-20 yil oldin va
          65% xollarda prostata saratonidan vafot etadi.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Endi ular «Rohat kompleks» deb nomlangan erkak jinsiy kuvvati uchun
          yangi preparatni faol ravishda ishlatishmokda
        </p>
        <p className="mb-6 text-[18px] font-medium">
          «Rohatning» eksklyuzivligi shundaki, u davolanish jarayonida jinsiy
          zaiflikni (impotensiya) bir kurs davolanishda davomida butunlay xal
          kiladi.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          20 yoshdan 85 yoshgacha bulgan erkaklarda soglom va tabiiy kuch va
          ereksiyani tulik tiklaydi.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          «Rohat»-bu yangi avlod maxsuloti. Uning nafakat Oʻzbekiston, balki
          dunyoda xam oʻxshashi yuq!
        </p>
        <p className="mb-6 text-2xl font-bold">
          Tarnado kursidan keyin men nimani payqadim?
        </p>
        <p className="mb-6 text-[18px] font-medium">
          "Tarnado" haqiqatan ham ishlaydi, lekin Viagradan farqli oʻlaroq, u 3
          hatto 5 yilyil davom etadigan doimiy va uzoq muddatli ta'sir
          koʻrsatadi,chunki tana faqat bitta foydalanish kursidan keyin jinsiy
          faollikning eng yuqori nuqtasida ishlay boshlaydi.
        </p>
        <p className="mb-6 text-[18px] font-medium">
          Keling, uni ishlatishdan kutishingiz mumkin boʻlgan asosiy effektlarni
          koʻrib chiqaylik.
        </p>
        <ul>
          <li>
            <p className="mb-6 ml-5 text-[18px] font-medium">
              <span className="font-bold">* Ereksiyani kuchaytirish </span>
              :boʻshanishni nazorat qilish oson, barqaror ereksiya jinsiy aloqa
              davomida saqlanadi.
            </p>
          </li>
          <li>
            <p className="mb-6 ml-5 text-[18px] font-medium">
              <span className="font-bold">* Jinsiy alokani uzaytirish </span>
              :jinsiy aloqa vaqti sezilarli darajada 2 – 5 soatgacha oshadi. Bu
              juda muhim, chunki agar erkak juda tez boʻshansa, unda ayolning
              toʻliq zavq olishga vaqti yoʻq deb xisoblang.
            </p>
          </li>
          <li>
            <p className="mb-6 ml-5 text-[18px] font-medium">
              <span className="font-bold">* Istakning kuchayishi </span>
              :keksa erkaklar uchun muhim, jinsiy istak tez-tez uygʻonadi va
              sezilarli darajada kuchayadi.
            </p>
          </li>
          <li>
            <p className="mb-6 ml-5 text-[18px] font-medium">
              <span className="font-bold">* Jinsiy olatni kattalashi </span>
              :toʻlik va kuchli ereksiya bilan jinsiy olatni uzunligi va
              kengligida sezilarli usish kuzatiladi, bu er-xotinning konikishiga
              tasir kiladi.
            </p>
          </li>
          <li>
            <p className="mb-6 ml-5 text-[18px] font-medium">
              <span className="font-bold">* Sperma sifati </span>
              :orgazm paytida chikarilgan sperma sifati va mikdori sezilarli
              darajada oshadi.
            </p>
          </li>
          <li>
            <p className="mb-6 ml-5 text-[18px] font-medium">
              <span className="font-bold">* Intensiv orgazm</span>
              :erkakning orgazmi jinsiy olatni sezgirligi va libidoning oshishi
              tufayli sezilarli darajada kuchayadi.
            </p>
          </li>
        </ul>
        <p className="mb-6 text-2xl font-bold text-[#FF0000]">
          Va shu bilan birga, «Tornado» kon bosimiga xam, yurakga xam tasir
          kilmaydi, shuningdek shifokor reseptisiz kabul kilinadi.
        </p>
        <p className="mb-6 text-[18px] font-medium"></p>
        <img
          src={rohatTwo}
          alt="Sumbul Shifo"
          className="my-8 w-[80%] m-auto h-auto rounded-lg shadow-md"
        />
        <SentNumber />
      </div>
    </div>
  );
}

export default App;
