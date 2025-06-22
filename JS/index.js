let startpage = document.getElementById("startpage");
let mainpage = document.getElementById("mainpage");
let msgpage = document.getElementById("msgpage");
let oldmsgpage = document.getElementById("oldmsgpage");
let overlay = document.getElementById("overlay");
let musictoggle = document.getElementById("musictoggle");
let msgcontent = document.getElementById("msgcontent");
let us = document.getElementById("us");

mainpage.style.display = "none";
msgpage.style.display = "none";
oldmsgpage.style.display = "none";
overlay.style.display = "none";

let messages = [
    "أولا مش عارف شو اكتب باليوم الأول 😭<br>خلينا على اشي بسيط بالبداية، مبدئيا انتي من افضل الاشخاص اللي عرفتهم بحياتي اذا ما كنتي الافضل.<br>جد بقدر وجودك كثير حتى لو بقول دايما بكرهك وبحس كثير اني مع شخص بشبهني لما احكي معك.<br>وبتعرفي شو؟ دايما بفكر قديش انا محظوظ عشان عرفتك.<br>وبس، خلص انقلعي ارجعي بكرا 🥰",
    "عمري حكيت اني اسوء شخص بالكتابة؟ جد بحس اني مستحيل اكتب اكثر من جملتين لما اعبر عن مشاعري.<br>بلشت اعمل بالموقع وانا مش مخطط شو اكتب بالرسائل اصلا لذا قاعد بعصر مخي عشان اكتب.<br>المهم من اكثر الاشياء اللي بحبها فينا انه تلقائيا تعودنا على اشياء لطيفة وحلوة،<br>زي الجرايد اللي بنكتبها كل ما نرجع من مكان،<br>او ثباحو اللي بنقولها كل يوم،<br>او حتى لما نقول بكرهك او انقلع لبعض كل شوي.<br>These small things make what we are.",
    "ياخي بتعرفي شو؟ يمكن قلتها اكثر من مرة بس برجع اعيدها،<br>جد بحسد الناس اللي بتعرفيهم بالواقع، يعني بحسدهم كثير كثير.<br>حرفيا شبه مستحيل الشخص يلاقي حدا زيك ومع هيك؟ عايشين حياتهم طبيعي كأنه انتي مش اكثر حدا مميز بالحياة.<br>وخلص بكفي لليوم عشان حسيتني حكيت زيادة، انقلعي وموتي 3>",
    "ياخي بحس مخي بلش يفضى من رابع رسالة.<br>صح بحب كثير كثير كثير كثير كثير هواياتك.<br>حرفيا كل اشي بتعمليه بحسه حلو ومميز، من الرسم للهدايا والاشياء اليدوية للقراءة جد بحس شخصيتك ابداعية كثير،<br>وزي ما بحكيلك دايما، اذا ما بتستمري على هاي الاشياء وبتسحبي عليها بخنقك.",
    "معلومة عشوائية؟<br>I knew you're special and you're the one after like the first week of talking to you",
    "خلص بحس بكفي لطافة اليوم وخليني اكتب اشي مختلف 😭.<br>بغض النظر عن الترجمة، بحس لابقلك تكوني كاتبة او حتى مانجاكا بالمستقبل.<br>بعرفش شو هالعشوائية اللي كتبتها بس خلص خلي اليوم مختلف عشان بنمغص كل ما اكتب اشي لطيف",
    "من اكثر الاشياء اللي بحب اعملها معك هي الـMovie nights.<br>صح مش دايما بتكون قد التوقعات واحيانا ما بنكمل الفلم اصلا،<br>بس مهما كان دايما بستمتع معك كثير كثير،<br>وبحس يومي بصير مميز كثير",
    "بحب شخصيتك الاجتماعية والداعمة كثير كثير كثير جدا،<br>ليش؟ بحس حتى لو كان في شخص ما بتعرفيه او مش مهتمة فيه وكان محتاج مساعدة او اهتمام او دعم دايما بتكوني اول حدا بمد ايده عشان يساعد.<br>جد هالإشي بثبت قديش شخصيتك مميزة لأبعد درجة.",
    "بعرف انه الحياة مش رح تمشي زي ما بدك دايما، بس يا ريماس كل ما يصير اشي او تحسي حالك متضايقة او حسيتي الدنيا مسكرة بوجهك،<br>تذكري اني دايما موجود، تمام؟",
    "اخر يوم،<br>كان نفسي اكتب اكثر من عشر رسائل، واوصل 30 رسالة عشان تضلي تفتحي فيهم لشهر، بس انا حرفيا اسوء كاتب بالحياة :)<br>بحس لازم اكتب اشي مميز اليوم،<br>فـ بحبك كثير كثير كثير كثير<br>Thats all, i hope i made you smile everytime you opened a new message :)",
];

// Load old messages from localStorage on page load
window.onload = function () {
    const oldMessages = JSON.parse(localStorage.getItem("oldMessages")) || [];
    oldMessages.forEach((index) => createOldMessageButton(index));
};

function start() {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }

    const audio = document.getElementById("bg-music");
    audio.volume = 0.4;
    audio.play();

    startpage.style.display = "none";
    mainpage.style.display = "block";
    musictoggle.style.display = "block";

  }

function toggleMusic() {
    const audio = document.getElementById("bg-music");
    if (audio.paused) {
        audio.play();
        musictoggle.src = "assets/unmute.png";
    } else {
        audio.pause();
        musictoggle.src = "assets/mute.png";
    }
}

function todaymsg() {
    const lastOpenedDate = localStorage.getItem("lastOpenedDate");
    const lastOpenedIndex = parseInt(localStorage.getItem("lastOpenedIndex")) || 0;
    const today = new Date().toISOString().split("T")[0];

    if (lastOpenedDate === today) {
        overlay.style.display = "block";
        function updateTimer() {
            const now = new Date();
            const nextDay = new Date();
            nextDay.setDate(now.getDate() + 1);
            nextDay.setHours(0, 0, 0, 0);

            const diff = nextDay - now;
            const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
            const minutes = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
            const seconds = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');

            document.getElementById("timer").innerText = `${hours}:${minutes}:${seconds}`;
        }

        updateTimer();
        setInterval(updateTimer, 1000);
    } else {
        const nextIndex = lastOpenedIndex < messages.length ? lastOpenedIndex : messages.length - 1;
        msgcontent.innerHTML = messages[nextIndex];
        localStorage.setItem("lastOpenedDate", today);
        localStorage.setItem("lastOpenedIndex", nextIndex + 1);

        // Create a button for the opened message
        createOldMessageButton(nextIndex);

        // Save the opened message index to localStorage
        const oldMessages = JSON.parse(localStorage.getItem("oldMessages")) || [];
        if (!oldMessages.includes(nextIndex)) {
            oldMessages.push(nextIndex);
            localStorage.setItem("oldMessages", JSON.stringify(oldMessages));
        }

        mainpage.style.display = "none";
        msgpage.style.display = "block";
        us.style.display = "none";
    }
}

function createOldMessageButton(index) {
    const button = document.createElement("button");
    button.textContent = `رسالة اليوم ${index + 1}`;
    button.className = "oldmsg-btn";
    button.onclick = () => showOldMessage(index);
    oldmsgpage.appendChild(button);
}

function showOldMessage(index) {
    msgcontent.innerHTML = messages[index];
    mainpage.style.display = "none";
    msgpage.style.display = "block";
    us.style.display = "none";
    oldmsgpage.style.display = "none";
}

function oldmsg() {
    mainpage.style.display = "none";
    us.style.display = "none";
    oldmsgpage.style.display = "flex";
}

function tomain() {
    mainpage.style.display = "block";
    msgpage.style.display = "none";
    us.style.display = "flex";
}

function hideoverlay() {
    overlay.style.display = "none";
}

function showoverlay() {
    overlay.style.display = "block";
}
