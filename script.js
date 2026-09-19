const CONFIG = {
  // Paste your deployed Google Apps Script /exec URL here.
  APPS_SCRIPT_URL: "PASTE_YOUR_GOOGLE_APPS_SCRIPT_EXEC_URL_HERE"
};

const translations = {
  en: {
    navHome:"Home",navAbout:"About",navServices:"Treatments",navGallery:"Gallery",navContact:"Contact",bookNow:"Book now",
    eyebrow:"TOKYO 2ND BRANCH · NIHOMBASHI NINGYOCHO",heroTitle:"Reveal your<br><em>natural beauty.</em>",
    heroCopy:"Personalized non-surgical aesthetic care designed around your goals, with a calm and modern Tokyo experience.",
    heroCta:"Book a consultation",heroSecondary:"Explore treatments",featured:"FEATURED CARE",featuredTitle:"Skin, contour &<br>rejuvenation",
    featuredCopy:"Facials · Anti-aging · Fillers · Botox · Lifting · Contouring",viewTreatments:"View treatments →",
    aboutTag:"ABOUT ABEAUTY",aboutTitle:"A more personal approach to <em>beauty.</em>",
    aboutText:"ABeauty Aesthetic focuses on personalized, non-surgical beauty enhancement. The treatment menu includes facial care, anti-aging care, face lifting, skin rejuvenation, body and face contouring, whitening care, fillers and Botox.",
    aboutNote:"Every treatment should begin with an individual consultation and an assessment of suitability, expected results and possible risks.",
    servicesTag:"TREATMENTS",servicesTitle:"Designed around your <em>goals.</em>",servicesIntro:"Explore selected treatments. Availability and suitability are confirmed during consultation.",
    s1:"Facial Treatments",s1p:"Personalized facial care focused on skin condition, hydration and radiance.",
    s2:"Skin Rejuvenation",s2p:"Options described by ABeauty include PicoToning, Skin Genius and other rejuvenation treatments.",
    s3:"Lifting & Contouring",s3p:"Non-surgical options such as Thermage, thread lifting and Endolift are featured in the clinic's public materials.",
    s4:"Injectables",s4p:"Public treatment materials mention Botox, fillers, Sculptra and other injectable options.",
    s5:"Nose Enhancement",s5p:"Public materials mention nose filler, Hiko nose lift and combined thread/filler approaches.",
    s6:"Brows & Eye Care",s6p:"Microshading and under-eye PRP are among the treatments described in public posts.",
    featureTitle:"Subtle. Refined.<br><em>Personal.</em>",featureText:"The goal is a natural-looking result that fits your features and preferences. Your consultation is the starting point for choosing an appropriate treatment plan.",startConsult:"Start your consultation →",
    galleryTag:"VISUAL JOURNAL",galleryTitle:"Beauty, <em>in focus.</em>",galleryIntro:"Brand imagery is used here while the Google Maps profile remains the primary location reference.",
    bookingTag:"APPOINTMENT",bookingTitle:"Tell us what you are looking for.",bookingText:"Send an appointment request. Your request will be stored in your Google Sheet after the Apps Script endpoint is connected.",
    name:"Name",phone:"Phone / LINE",email:"Email",treatment:"Treatment of interest",date:"Preferred date",time:"Preferred time",message:"Message",sendRequest:"Send appointment request",
    locationTag:"LOCATION",locationTitle:"Find us in <em>Nihonbashi.</em>",openMaps:"Open Google Maps",hoursNote:"For current opening hours, please check Google Maps before visiting.",
    footerText:"Personalized non-surgical aesthetic care in Tokyo.",footerExplore:"Explore",footerContact:"Contact"
  },
  ja: {
    navHome:"ホーム",navAbout:"アバウト",navServices:"施術",navGallery:"ギャラリー",navContact:"お問い合わせ",bookNow:"予約する",
    eyebrow:"東京・第2店舗｜日本橋人形町",heroTitle:"あなたらしい<br><em>美しさを。</em>",
    heroCopy:"一人ひとりの目的に合わせた、非外科的な美容ケア。東京・日本橋で落ち着いた現代的な美容体験をご提供します。",
    heroCta:"カウンセリングを予約",heroSecondary:"施術を見る",featured:"おすすめケア",featuredTitle:"肌・リフト・<br>エイジングケア",
    featuredCopy:"フェイシャル · エイジングケア · フィラー · ボトックス · リフト · 輪郭ケア",viewTreatments:"施術を見る →",
    aboutTag:"ABEAUTYについて",aboutTitle:"もっとパーソナルな<br><em>美容体験。</em>",
    aboutText:"ABeauty Aestheticでは、一人ひとりに合わせた非外科的な美容施術を提供しています。フェイシャル、エイジングケア、リフトアップ、肌の再生ケア、顔・ボディの輪郭ケア、ホワイトニング、フィラー、ボトックスなどをご案内しています。",
    aboutNote:"施術前にはカウンセリングを行い、適応、期待できる結果、リスクなどをご確認ください。",
    servicesTag:"施術",servicesTitle:"あなたの<em>目標</em>に合わせて。",servicesIntro:"主な施術をご紹介します。適応や空き状況はカウンセリング時にご確認ください。",
    s1:"フェイシャル",s1p:"肌状態・うるおい・明るさなどを考慮したパーソナルフェイシャルケア。",
    s2:"肌再生・美肌ケア",s2p:"PicoToning、Skin Geniusなど、公開されている美容ケアをご案内しています。",
    s3:"リフト・輪郭ケア",s3p:"サーマクール、スレッドリフト、エンドリフトなどの非外科的な施術が公開されています。",
    s4:"注入系施術",s4p:"ボトックス、フィラー、スカルプトラなどの注入系施術が公開されています。",
    s5:"鼻の美容施術",s5p:"鼻フィラー、Hiko Nose Lift、スレッドとフィラーの組み合わせなどが公開されています。",
    s6:"眉・目元ケア",s6p:"マイクロシェーディング、目の下のPRPなどが公開情報で紹介されています。",
    featureTitle:"自然に。上品に。<br><em>あなたらしく。</em>",featureText:"大切なのは、顔立ちや希望に合った自然な仕上がり。カウンセリングから適切な施術プランをご提案します。",startConsult:"カウンセリングを始める →",
    galleryTag:"ビジュアル",galleryTitle:"美しさを、<em>もっと身近に。</em>",galleryIntro:"ブランドの公開イメージを使用しています。店舗情報はGoogle Mapsをご確認ください。",
    bookingTag:"予約",bookingTitle:"ご希望をお聞かせください。",bookingText:"予約リクエストを送信してください。Apps Scriptの接続後、Googleスプレッドシートへ保存されます。",
    name:"お名前",phone:"電話 / LINE",email:"メール",treatment:"希望施術",date:"希望日",time:"希望時間",message:"メッセージ",sendRequest:"予約リクエストを送信",
    locationTag:"アクセス",locationTitle:"日本橋<em>人形町</em>でお待ちしています。",openMaps:"Google Mapsを開く",hoursNote:"最新の営業時間は、ご来店前にGoogle Mapsでご確認ください。",
    footerText:"東京でパーソナルな非外科的美容ケアを。",footerExplore:"メニュー",footerContact:"お問い合わせ"
  }
};

function setLanguage(lang){
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang === "ja" ? "ja" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(dict[key]!==undefined) el.innerHTML=dict[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b=>b.classList.toggle("active",b.dataset.lang===lang));
  localStorage.setItem("abeauty-lang",lang);
}

document.addEventListener("DOMContentLoaded",()=>{
  const saved=localStorage.getItem("abeauty-lang") || "en";
  setLanguage(saved);
  document.getElementById("year").textContent=new Date().getFullYear();

  window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").classList.add("hide"),350));

  document.querySelectorAll(".lang-btn").forEach(btn=>btn.addEventListener("click",()=>setLanguage(btn.dataset.lang)));

  const menuBtn=document.getElementById("menuBtn"), nav=document.getElementById("nav");
  menuBtn.addEventListener("click",()=>nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

  const back=document.getElementById("backTop");
  window.addEventListener("scroll",()=>back.classList.toggle("show",window.scrollY>700));
  back.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

  const modal=document.getElementById("imageModal"), modalImage=document.getElementById("modalImage");
  document.querySelectorAll(".gallery-item").forEach(item=>item.addEventListener("click",()=>{
    modalImage.src=item.dataset.full; modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  }));
  const closeModal=()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true")};
  document.getElementById("modalClose").addEventListener("click",closeModal);
  modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});

  const form=document.getElementById("appointmentForm"), status=document.getElementById("formStatus");
  form.addEventListener("submit",async e=>{
    e.preventDefault();
    const data=Object.fromEntries(new FormData(form).entries());
    data.timestamp=new Date().toISOString();
    status.textContent="Sending…";
    if(!CONFIG.APPS_SCRIPT_URL || CONFIG.APPS_SCRIPT_URL.includes("PASTE_YOUR")){
      status.textContent="Demo mode: connect your Apps Script /exec URL in script.js first.";
      return;
    }
    try{
      await fetch(CONFIG.APPS_SCRIPT_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},body:new URLSearchParams(data).toString()});
      status.textContent="Request sent. Thank you — we will contact you soon.";
      form.reset();
    }catch(err){
      status.textContent="Could not send the request. Please contact us by phone or LINE.";
    }
  });
});