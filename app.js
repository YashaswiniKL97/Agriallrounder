const app=document.getElementById("app")

let lang = localStorage.getItem("lang") || "en"

if(!lang){
lang = "en"
localStorage.setItem("lang","en")
}

const translations = {

en:{
remove:"Remove",
proceed:"Proceed to Order",
feedTitle:"Farmer Feed",
postPlaceholder:"Share your farming idea...",
postBtn:"Post",
cancelPrompt:"Why are you cancelling this order?",
confirmCancel:"Confirm cancel?",
enterReason:"Enter reason...",
submitReturn:"Submit Return",
uploadPhoto:"Upload Damage Photo",
orderId:"Order ID",
name:"Name",
payment:"Payment",
status:"Status",
date:"Date",
slot:"Slot",
machine:"Machine",
tracking:"Order Tracking",
machineTracking:"Machine Tracking",
cancel:"Cancel",
return:"Return",
rebook:"Rebook",
home:"Home",
cart:"Cart",
Paddy:"Paddy Seeds",
Maize:"Maize Seeds",
Tomato:"Tomato Seeds",
Neem:"Neem Oil",
Insect:"Insect Killer",
Fungicide:"Fungicide",
orderHistory:"Order History",
bookingHistory:"Booking History",
track:"Track Order",
admin:"Admin",
search:"Search seeds, fertilizers, machines...",

addCart:"Add to Cart",
bookMachine:"Book Machine",
back:"Back",
help:"Help",

Urea:"Urea",
DAP:"DAP",
SSP:"SSP",
MOP:"MOP",

"20:20:0:13":"20:20:0:13",
"16:20:0:13":"16:20:0:13",
"10:26:26":"10:26:26",
"19:19:19":"19:19:19",

"CAN (25kg)":"CAN (25kg)",
"M Sulphate":"M Sulphate",
"A Sulphate":"A Sulphate",

"Drip Pipe":"Drip Pipe",
"Water Pump":"Water Pump",
"Sprinkler":"Sprinkler",

Tractor:"Tractor",
Rotavator:"Rotavator",
"Power Tiller":"Power Tiller",
Seeder:"Seeder",
Sprayer:"Sprayer",
Harvester:"Harvester",

customerName:"Customer Name",
phone:"Phone",
address:"Address",
selectDate:"Select Date",
selectSlot:"Select Time Slot",
machinePrice:"Machine Price",
total:"Total",
cod:"Cash on Delivery",
upi:"Pay via UPI",

waOrder:"Order on WhatsApp",
waBook:"Book Machine on WhatsApp",

orderForm:"Order via Google Form",
bookingForm:"Book Machine via Google Form",
formTitle:"Order & Booking via Google Form",
waBookFull:"Book Machine via WhatsApp",

Seeds:"Seeds",
Fertilizers:"Fertilizers",
Pesticides:"Pesticides",
Irrigation:"Irrigation",
Machines:"Machines"
},

kn:{
remove:"ತೆಗೆದುಹಾಕಿ",
proceed:"ಆರ್ಡರ್ ಮಾಡಲು ಮುಂದುವರಿಸಿ",
feedTitle:"ರೈತರ ಫೀಡ್",
postPlaceholder:"ನಿಮ್ಮ ಕೃಷಿ ಆಲೋಚನೆ ಹಂಚಿಕೊಳ್ಳಿ...",
postBtn:"ಪೋಸ್ಟ್ ಮಾಡಿ",
cancelPrompt:"ನೀವು ಈ ಆರ್ಡರ್ ಯಾಕೆ ರದ್ದು ಮಾಡುತ್ತೀರಿ?",
confirmCancel:"ರದ್ದು ಮಾಡಬೇಕಾ?",
enterReason:"ಕಾರಣ ನಮೂದಿಸಿ...",
submitReturn:"ರಿಟರ್ನ್ ಸಲ್ಲಿಸಿ",
uploadPhoto:"ಹಾನಿಯಾದ ಫೋಟೋ ಅಪ್ಲೋಡ್ ಮಾಡಿ",
orderId:"ಆರ್ಡರ್ ಐಡಿ",
name:"ಹೆಸರು",
payment:"ಪಾವತಿ",
status:"ಸ್ಥಿತಿ",
date:"ದಿನಾಂಕ",
slot:"ಸಮಯ",
machine:"ಯಂತ್ರ",
tracking:"ಆರ್ಡರ್ ಟ್ರ್ಯಾಕಿಂಗ್",
machineTracking:"ಯಂತ್ರ ಟ್ರ್ಯಾಕಿಂಗ್",
cancel:"ರದ್ದು",
return:"ಮರಳಿಸಿ",
rebook:"ಮತ್ತೆ ಬುಕ್ ಮಾಡಿ",
home:"ಮುಖಪುಟ",
cart:"ಕಾರ್ಟ್",
Paddy:"ನೆಲ ಬೀಜ",
Maize:"ಮಕ್ಕಿ ಬೀಜ",
Tomato:"ಟೊಮೇಟೊ ಬೀಜ",

Neem:"ನೀಮ್ ಎಣ್ಣೆ",
Insect:"ಕೀಟನಾಶಕ",
Fungicide:"ಫಂಗಿಸೈಡ್",
orderHistory:"ಆರ್ಡರ್ ಇತಿಹಾಸ",
bookingHistory:"ಬುಕಿಂಗ್ ಇತಿಹಾಸ",
track:"ಆರ್ಡರ್ ಟ್ರ್ಯಾಕ್",
admin:"ಆಡ್ಮಿನ್",
search:"ಬೀಜ, ರಸಗೊಬ್ಬರ, ಯಂತ್ರಗಳನ್ನು ಹುಡುಕಿ...",

addCart:"ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
bookMachine:"ಯಂತ್ರ ಬುಕ್ ಮಾಡಿ",
back:"ಹಿಂದೆ",
help:"ಸಹಾಯ",

Urea:"ಯೂರಿಯಾ",
DAP:"ಡಿಎಪಿ",
SSP:"ಎಸ್‌ಎಸ್‌ಪಿ",
MOP:"ಎಂಒಪಿ",

"20:20:0:13":"20:20:0:13",
"16:20:0:13":"16:20:0:13",
"10:26:26":"10:26:26",
"19:19:19":"19:19:19",

"CAN (25kg)":"ಕ್ಯಾನ್ (25ಕೆಜಿ)",
"M Sulphate":"ಎಂ ಸಲ್ಫೇಟ್",
"A Sulphate":"ಎ ಸಲ್ಫೇಟ್",

"Drip Pipe":"ಡ್ರಿಪ್ ಪೈಪ್",
"Water Pump":"ನೀರಿನ ಪಂಪ್",
"Sprinkler":"ಸ್ಪ್ರಿಂಕ್ಲರ್",

Tractor:"ಟ್ರಾಕ್ಟರ್",
Rotavator:"ರೋಟಾವೇಟರ್",
"Power Tiller":"ಪವರ್ ಟಿಲ್ಲರ್",
Seeder:"ಬಿತ್ತನೆ ಯಂತ್ರ",
Sprayer:"ಸ್ಪ್ರೇಯರ್",
Harvester:"ಹಾರ್ವೆಸ್ಟರ್",

customerName:"ಗ್ರಾಹಕರ ಹೆಸರು",
phone:"ಫೋನ್",
address:"ವಿಳಾಸ",
selectDate:"ದಿನಾಂಕ ಆಯ್ಕೆ",
selectSlot:"ಸಮಯ ಆಯ್ಕೆ",
machinePrice:"ಯಂತ್ರ ಬೆಲೆ",
total:"ಒಟ್ಟು",
cod:"ಡಿಲಿವರಿ ಸಮಯದಲ್ಲಿ ಪಾವತಿ",
upi:"UPI ಮೂಲಕ ಪಾವತಿ",

waOrder:"WhatsApp ಮೂಲಕ ಆರ್ಡರ್ ಮಾಡಿ",
waBook:"WhatsApp ಮೂಲಕ ಯಂತ್ರ ಬುಕ್ ಮಾಡಿ",
waBookFull:"WhatsApp ಮೂಲಕ ಯಂತ್ರ ಬುಕ್ ಮಾಡಿ",

orderForm:"Google Form ಮೂಲಕ ಆರ್ಡರ್ ಮಾಡಿ",
bookingForm:"Google Form ಮೂಲಕ ಯಂತ್ರ ಬುಕ್ ಮಾಡಿ",
formTitle:"ಆರ್ಡರ್ ಮತ್ತು ಬುಕ್ಕಿಂಗ್ (Google Form)",

Seeds:"ಬೀಜಗಳು",
Fertilizers:"ರಸಗೊಬ್ಬರ",
Pesticides:"ಕೀಟನಾಶಕ",
Irrigation:"ನೀರಾವರಿ",
Machines:"ಯಂತ್ರಗಳು"
},

hi:{
remove:"हटाएं",
proceed:"ऑर्डर करें",
feedTitle: "तुरंत फ़ीड",
postPlaceholder: "अपना कृषि अनुभव साझा करें...",
postBtn: "पोस्ट करें",
cancelPrompt:"आप ऑर्डर क्यों रद्द कर रहे हैं?",
confirmCancel:"रद्द करना है?",
enterReason:"कारण दर्ज करें...",
submitReturn:"रिटर्न सबमिट करें",
uploadPhoto:"डैमेज फोटो अपलोड करें",
orderId:"ऑर्डर आईडी",
name:"नाम",
payment:"भुगतान",
status:"स्थिति",
date:"तारीख",
slot:"समय",
machine:"मशीन",
tracking:"ऑर्डर ट्रैकिंग",
machineTracking:"मशीन ट्रैकिंग",
cancel:"रद्द करें",
return:"वापसी",
rebook:"फिर से बुक करें",
home:"होम",
cart:"कार्ट",
Paddy:"धान बीज",
Maize:"मक्का बीज",
Tomato:"टमाटर बीज",
Neem:"नीम तेल",
Insect:"कीटनाशक",
Fungicide:"फफूंदनाशक",
orderHistory:"ऑर्डर इतिहास",
bookingHistory:"बुकिंग इतिहास",
track:"ऑर्डर ट्रैक करें",
admin:"एडमिन",
search:"बीज, उर्वरक, मशीन खोजें...",

addCart:"कार्ट में जोड़ें",
bookMachine:"मशीन बुक करें",
back:"वापस",
help:"मदद",

Urea:"यूरिया",
DAP:"डीएपी",
SSP:"एसएसपी",
MOP:"एमओपी",

"20:20:0:13":"20:20:0:13",
"16:20:0:13":"16:20:0:13",
"10:26:26":"10:26:26",
"19:19:19":"19:19:19",

"CAN (25kg)":"कैन (25किलो)",
"M Sulphate":"एम सल्फेट",
"A Sulphate":"ए सल्फेट",

"Drip Pipe":"ड्रिप पाइप",
"Water Pump":"पानी का पंप",
"Sprinkler":"स्प्रिंकलर",

Tractor:"ट्रैक्टर",
Rotavator:"रोटावेटर",
"Power Tiller":"पावर टिलर",
Seeder:"बीज मशीन",
Sprayer:"स्प्रेयर",
Harvester:"हार्वेस्टर",

customerName:"ग्राहक नाम",
phone:"फोन",
address:"पता",
selectDate:"तारीख चुनें",
selectSlot:"समय चुनें",
machinePrice:"मशीन कीमत",
total:"कुल",
cod:"डिलीवरी पर भुगतान",
upi:"UPI से भुगतान",

waOrder:"WhatsApp पर ऑर्डर करें",
waBook:"WhatsApp पर मशीन बुक करें",
waBookFull:"WhatsApp से मशीन बुक करें",

orderForm:"Google Form से ऑर्डर करें",
bookingForm:"Google Form से मशीन बुक करें",
formTitle:"ऑर्डर और बुकिंग (Google Form)",

Seeds:"बीज",
Fertilizers:"उर्वरक",
Pesticides:"कीटनाशक",
Irrigation:"सिंचाई",
Machines:"मशीनें"
},

ta:{
remove:"அகற்று",
proceed:"ஆர்டர் செய்ய தொடரவும்",
feedTitle:"किसान फीड",
postPlaceholder:"अपना खेती का विचार साझा करें...",
postBtn:"पोस्ट करें",
cancelPrompt:"இந்த ஆர்டரை ஏன் ரத்து செய்கிறீர்கள்?",
confirmCancel:"ரத்து செய்யவா?",
enterReason:"காரணம் உள்ளிடவும்...",
submitReturn:"ரிட்டர்ன் சமர்ப்பிக்கவும்",
uploadPhoto:"சேதமான புகைப்படத்தை பதிவேற்றவும்",
orderId:"ஆர்டர் ஐடி",
name:"பெயர்",
phone:"தொலைபேசி",
address:"முகவரி",
total:"மொத்தம்",
payment:"கட்டணம்",
status:"நிலை",
date:"தேதி",
slot:"நேரம்",
machine:"இயந்திரம்",

tracking:"ஆர்டர் டிராக்கிங்",
machineTracking:"இயந்திர டிராக்கிங்",

cancel:"ரத்து",
return:"திரும்ப",
rebook:"மீண்டும் பதிவு செய்யவும்",
home:"முகப்பு",
cart:"கார்ட்",
Paddy:"நெல் விதைகள்",
Maize:"மக்காச்சோளம் விதைகள்",
Tomato:"தக்காளி விதைகள்",

Neem:"வேப்பெண்ணெய்",
Insect:"பூச்சிக்கொல்லி",
Fungicide:"பூஞ்சைக்கொல்லி",
orderHistory:"ஆர்டர் வரலாறு",
bookingHistory:"புக்கிங் வரலாறு",
track:"ஆர்டர் கண்காணிப்பு",
admin:"அட்மின்",
search:"விதைகள், உரங்கள், இயந்திரங்கள் தேடவும்...",

addCart:"கார்டில் சேர்",
bookMachine:"யந்திரம் பதிவு செய்",
back:"பின்செல்",
help:"உதவி",

Urea:"யூரியா",
DAP:"டிஏபி",
SSP:"எஸ்எஸ்பி",
MOP:"எம்ஓபி",

"20:20:0:13":"20:20:0:13",
"16:20:0:13":"16:20:0:13",
"10:26:26":"10:26:26",
"19:19:19":"19:19:19",

"CAN (25kg)":"கேன் (25கிலோ)",
"M Sulphate":"எம் சல்பேட்",
"A Sulphate":"ஏ சல்பேட்",

"Drip Pipe":"ட்ரிப் পাইப்",
"Water Pump":"நீர் பம்ப்",
"Sprinkler":"ஸ்பிரிங்களர்",

Tractor:"டிராக்டர்",
Rotavator:"ரோட்டவேட்டர்",
"Power Tiller":"பவர் டில்லர்",
Seeder:"விதைப்பு இயந்திரம்",
Sprayer:"ஸ்ப்ரேயர்",
Harvester:"ஹார்வெஸ்டர்",

customerName:"பெயர்",
phone:"தொலைபேசி",
address:"முகவரி",
selectDate:"தேதி தேர்வு",
selectSlot:"நேரம் தேர்வு",
machinePrice:"விலை",
total:"மொத்தம்",
cod:"டெலிவரியில் கட்டணம்",
upi:"UPI மூலம் செலுத்து",

waOrder:"WhatsApp மூலம் ஆர்டர் செய்யவும்",
waBook:"WhatsApp மூலம் யந்திரம் பதிவு செய்",
waBookFull:"WhatsApp மூலம் இயந்திரம் பதிவு செய்",

orderForm:"Google Form மூலம் ஆர்டர் செய்யவும்",
bookingForm:"Google Form மூலம் இயந்திரம் பதிவு செய்",
formTitle:"ஆர்டர் மற்றும் பதிவு (Google Form)",

Seeds:"விதைகள்",
Fertilizers:"உரங்கள்",
Pesticides:"பூச்சிக்கொல்லி",
Irrigation:"நீர்ப்பாசனம்",
Machines:"யந்திரங்கள்"
},

te:{
remove:"తొలగించు",
proceed:"ఆర్డర్ చేయండి",
feedTitle:"விவசாயர் பீட்",
postPlaceholder:"உங்கள் விவசாய யோசனையை பகிரவும்...",
postBtn:"போஸ்ட் செய்யவும்",
cancelPrompt:"ఈ ఆర్డర్‌ను ఎందుకు రద్దు చేస్తున్నారు?",
confirmCancel:"రద్దు చేయాలా?",
enterReason:"కారణం నమోదు చేయండి...",
submitReturn:"రిటర్న్ సమర్పించండి",
uploadPhoto:"డ్యామేజ్ ఫోటో అప్‌లోడ్ చేయండి",
orderId:"ఆర్డర్ ఐడి",
name:"పేరు",
phone:"ఫోన్",
address:"చిరునామా",
total:"మొత్తం",
payment:"చెల్లింపు",
status:"స్థితి",
date:"తేదీ",
slot:"సమయం",
machine:"యంత్రం",

tracking:"ఆర్డర్ ట్రాకింగ్",
machineTracking:"యంత్ర ట్రాకింగ్",

cancel:"రద్దు",
return:"తిరిగి",
rebook:"మళ్లీ బుక్ చేయండి",

home:"హోమ్",
cart:"కార్ట్",

Paddy:"వరి విత్తనం",
Maize:"మొక్కజొన్న విత్తనం",
Tomato:"టమోటా విత్తనం",

Neem:"వేప నూనె",
Insect:"పురుగుమందు",
Fungicide:"శిలీంద్రనాశిని",

orderHistory:"ఆర్డర్ చరిత్ర",
bookingHistory:"బుకింగ్ చరిత్ర",
track:"ఆర్డర్ ట్రాక్",
admin:"అడ్మిన్",

search:"విత్తనాలు, ఎరువులు, యంత్రాలు వెతకండి...",

addCart:"కార్ట్‌లో జోడించు",
bookMachine:"మెషిన్ బుక్ చేయండి",

back:"వెనక్కి",
help:"సహాయం",

Urea:"యూరియా",
DAP:"డిఏపీ",
SSP:"ఎస్‌ఎస్‌పి",
MOP:"ఎమ్‌ఓపీ",

"20:20:0:13":"20:20:0:13",
"16:20:0:13":"16:20:0:13",
"10:26:26":"10:26:26",
"19:19:19":"19:19:19",

"CAN (25kg)":"క్యాన్ (25కిలోలు)",
"M Sulphate":"ఎమ్ సల్ఫేట్",
"A Sulphate":"ఏ సల్ఫేట్",

"Drip Pipe":"డ్రిప్ పైప్",
"Water Pump":"నీటి పంప్",
"Sprinkler":"స్ప్రింక్లర్",

Tractor:"ట్రాక్టర్",
Rotavator:"రోటావేటర్",
"Power Tiller":"పవర్ టిల్లర్",
Seeder:"విత్తన యంత్రం",
Sprayer:"స్ప్రేయర్",
Harvester:"హార్వెస్టర్",

customerName:"పేరు",
phone:"ఫోన్",
address:"చిరునామా",
selectDate:"తేదీ ఎంచుకోండి",
selectSlot:"సమయం ఎంచుకోండి",
machinePrice:"ధర",
total:"మొత్తం",
cod:"డెలివరీ సమయంలో చెల్లించండి",
upi:"UPI ద్వారా చెల్లించండి",

waOrder:"WhatsApp ద్వారా ఆర్డర్ చేయండి",
waBook:"WhatsApp ద్వారా మెషిన్ బుక్ చేయండి",
waBookFull:"WhatsApp ద్వారా మెషిన్ బుక్ చేయండి",

orderForm:"Google Form ద్వారా ఆర్డర్ చేయండి",
bookingForm:"Google Form ద్వారా మెషిన్ బుక్ చేయండి",
formTitle:"ఆర్డర్ మరియు బుకింగ్ (Google Form)",

Seeds:"విత్తనాలు",
Fertilizers:"ఎరువులు",
Pesticides:"కీటకనాశకాలు",
Irrigation:"నీటిపారుదల",
Machines:"యంత్రాలు"
},
}

let currentUser = localStorage.getItem("currentUser") || "Farmer_" + Math.floor(Math.random()*1000)
localStorage.setItem("currentUser", currentUser)

let savedUser = localStorage.getItem("farmerUser")

if(savedUser){
currentUser = "Farmer_" + savedUser.slice(-4)
}

/* GLOBAL */

const GST_PERCENT = 18
const DELIVERY_CHARGE = 50
const PARCEL_CHARGE = 40

let cart=[]
let selected=[]

let orders=JSON.parse(localStorage.getItem("orders"))||[]
let bookings=JSON.parse(localStorage.getItem("machineBookings"))||[]
let orderCounter = localStorage.getItem("orderCounter") || 1001

/* QR IMAGE */

const QR_IMAGE="images/phonepeQR.png"

/* CATEGORIES */

const categories=[
{name:"Seeds",img:"images/seeds.png"},
{name:"Fertilizers",img:"images/fertilizer.png"},
{name:"Pesticides",img:"images/pesticide.png"},
{name:"Irrigation",img:"images/irrigation.png"},
{name:"Machines",img:"images/tractor.png"}
]

/* PRODUCTS */

let allProducts={

Seeds:[

{name:"Paddy",price:1200,img:"images/paddy.png"},
{name:"Maize",price:900,img:"images/maize.png"},
{name:"Tomato",price:500,img:"images/tomato.png"}

],

Fertilizers:[

{name:"Urea",price:300,img:"images/urea.png"},
{name:"20:20:0:13",price:1450,img:"images/fertilizer.png"},
{name:"16:20:0:13",price:1350,img:"images/fertilizer.png"},
{name:"DAP",price:1380,img:"images/dap.png"},
{name:"SSP",price:620,img:"images/fertilizer.png"},
{name:"MOP",price:1800,img:"images/fertilizer.png"},
{name:"10:26:26",price:1880,img:"images/fertilizer.png"},
{name:"19:19:19",price:2050,img:"images/fertilizer.png"},
{name:"CAN (25kg)",price:1300,img:"images/fertilizer.png"},
{name:"M Sulphate",price:570,img:"images/fertilizer.png"},
{name:"A Sulphate",price:900,img:"images/fertilizer.png"}

],

Pesticides:[

{name:"Neem",price:400,img:"images/neem.png"},
{name:"Insect",price:550,img:"images/insecticide.png"},
{name:"Fungicide",price:350,img:"images/fungicide.png"}

],

Irrigation:[

{name:"Drip Pipe",price:2000,img:"images/drip.png"},
{name:"Water Pump",price:5000,img:"images/pump.png"},
{name:"Sprinkler",price:800,img:"images/sprinkler.png"}

],

Machines:[

{name:"Tractor",price:800,img:"images/tractor.png"},
{name:"Rotavator",price:600,img:"images/rotavator.png"},
{name:"Power Tiller",price:500,img:"images/powertiller.png"},
{name:"Seeder",price:400,img:"images/seeder.png"},
{name:"Sprayer",price:300,img:"images/sprayer.png"},
{name:"Harvester",price:1500,img:"images/harvester.png"}

]

}

/* CART COUNT */

function updateCart(){
let cartCount=document.getElementById("cartCount")
if(cartCount){
cartCount.innerText=cart.length
}
}

/* BACK BUTTON */

function backBtn(){

let back=document.createElement("button")

back.innerText = "← " + translations[lang].back
back.className="back-btn"

back.onclick=function(){
homePage()
}

// 🔥 ALWAYS ADD TOP ALLI
app.prepend(back)

}
/* HOME */

function homePage(){

app.innerHTML=""
updateCart()

let grid=document.createElement("div")
grid.className="grid"

categories.forEach(c=>{

let card=document.createElement("div")
card.className="card"

card.innerHTML=`
<img src="${c.img}">
<h3>${translations[lang][c.name] || c.name}</h3>
`

card.onclick=()=>openCategory(c.name)

grid.appendChild(card)

})

app.appendChild(grid)

}
/* ================= SEARCH FUNCTION ================= */

const searchBox = document.getElementById("searchBox")

if(searchBox){

searchBox.addEventListener("keyup",function(){

let value = searchBox.value.toLowerCase()

if(value===""){
homePage()
return
}

app.innerHTML=""
backBtn()

let grid=document.createElement("div")
grid.className="grid"

Object.keys(allProducts).forEach(category=>{

allProducts[category].forEach(p=>{

if(
p.name.toLowerCase().includes(value) ||
category.toLowerCase().includes(value)
){

let qty=1

let card=document.createElement("div")
card.className="card"

card.innerHTML=`
<img src="${p.img}">
<h3>${translations[lang][p.name] || p.name}</h3>
<p>&#8377; ${p.price}</p>
`

let minus=document.createElement("button")
minus.innerText="-"

let num=document.createElement("span")
num.innerText=qty
num.style.margin="0 10px"

let plus=document.createElement("button")
plus.innerText="+"

minus.onclick=()=>{if(qty>1){qty--;num.innerText=qty}}
plus.onclick=()=>{qty++;num.innerText=qty}

let add=document.createElement("button")

if(category==="Machines"){

add.innerText = translations[lang].bookMachine
add.onclick=()=>openMachineBooking(p)

}else{

add.innerText = translations[lang].addCart

add.onclick=()=>{
cart.push({name:p.name,price:p.price,qty:qty})
updateCart()
alert(translations[lang].addCart)
}

}

card.append(minus,num,plus,add)

grid.appendChild(card)

}

})

})

app.appendChild(grid)

})

}

/* CATEGORY */

function openCategory(category){

app.innerHTML=""
updateCart()
backBtn()

let grid=document.createElement("div")
grid.className="grid"

allProducts[category].forEach(p=>{

let qty=1

let card=document.createElement("div")
card.className="card"

card.innerHTML=`
<img src="${p.img}">
<h3>${translations[lang][p.name] || p.name}</h3>
<p>&#8377; ${p.price}</p>
`

let minus=document.createElement("button")
minus.innerText="-"

let num=document.createElement("span")
num.innerText=qty
num.style.margin="0 10px"

let plus=document.createElement("button")
plus.innerText="+"

minus.onclick=()=>{if(qty>1){qty--;num.innerText=qty}}
plus.onclick=()=>{qty++;num.innerText=qty}

let add=document.createElement("button")

if(category==="Machines"){

add.innerText = translations[lang].bookMachine
add.onclick=()=>openMachineBooking(p)

}else{

add.innerText = translations[lang].addCart

add.onclick=()=>{
cart.push({name:p.name,price:p.price,qty:qty})
updateCart()
alert(translations[lang].addCart)
}

}

card.append(minus,num,plus,add)
grid.appendChild(card)

})

app.appendChild(grid)

}

/* MACHINE BOOKING */

function openMachineBooking(machine){

app.innerHTML=""
backBtn()

let gst=machine.price*GST_PERCENT/100
let total=machine.price+gst

let form=document.createElement("div")
form.className="orderForm"

let t = translations[lang]

form.innerHTML=`

<h2>${translations[lang][machine.name] || machine.name} - ${t.bookMachine}</h2>

<input id="name" placeholder="${t.customerName}">
<input id="phone" placeholder="${t.phone}">
<textarea id="address" placeholder="${t.address}"></textarea>

<label>${t.selectDate}</label>
<input type="date" id="date">

<label>${t.selectSlot}</label>

<select id="slot">
<option>6 AM - 9 AM</option>
<option>9 AM - 12 PM</option>
<option>12 PM - 3 PM</option>
<option>3 PM - 6 PM</option>
<option>6 PM - 9 PM</option>
</select>

<h3>${t.machinePrice} : ₹ ${machine.price}</h3>
<h2>${t.total} : ₹ ${total}</h2>

<button onclick="confirmBooking('${machine.name}',${total},'COD')">${t.cod}</button>

<button onclick="openUPI(${total},'booking','${machine.name}')">${t.upi}</button>

`

app.appendChild(form)

}

/* CART */

function openCart(){

app.innerHTML=""
updateCart()
backBtn()

selected=[]

if(cart.length===0){
app.innerHTML+="<h3 style='margin:20px'>Your cart is empty</h3>"
return
}

cart.forEach(item=>{

let card=document.createElement("div")
card.className="cartCard"

let check=document.createElement("input")
check.type="checkbox"

check.onchange=()=>{

if(check.checked){
selected.push(item)
}else{
selected=selected.filter(i=>i!==item)
}

}

card.innerHTML=`
<h3>${translations[lang][item.name] || item.name}</h3>
<p>Qty : ${item.qty}</p>
<p>Total : &#8377; ${item.price*item.qty}</p>
<button class="remove-btn">${translations[lang].remove}</button>
`

card.prepend(check)

card.querySelector(".remove-btn").onclick=function(){
cart = cart.filter(i=>i!==item)
updateCart()
openCart()
}

app.appendChild(card)

})

let btn=document.createElement("button")
btn.innerText = translations[lang].proceed
btn.className="order-btn"
btn.onclick=openOrder

app.appendChild(btn)

}

/* ORDER */

function openOrder(){

if(selected.length===0){
alert("Select items first")
return
}

app.innerHTML=""
backBtn()

let subtotal=0
selected.forEach(i=>subtotal+=i.price*i.qty)

let gst=subtotal*GST_PERCENT/100
let total=subtotal+gst+DELIVERY_CHARGE+PARCEL_CHARGE

let form=document.createElement("div")
form.className="orderForm"

let t = translations[lang]

form.innerHTML=`

<input id="name" placeholder="${t.customerName}">
<input id="phone" placeholder="${t.phone}">
<textarea id="address" placeholder="${t.address}"></textarea>

<h3>Subtotal : &#8377; ${subtotal}</h3>
<h3>GST : &#8377; ${gst}</h3>
<h3>Delivery : &#8377; ${DELIVERY_CHARGE}</h3>
<h3>Parcel : &#8377; ${PARCEL_CHARGE}</h3>
<h2>${t.total} : &#8377; ${total}</h2>

<button onclick="placeOrder(${total},'COD')">${t.cod}</button>

<button onclick="openUPI(${total},'order')">${t.upi}</button>

`

app.appendChild(form)

}

function placeOrder(total,payment){

let orderID="AGR"+orderCounter

orderCounter++
localStorage.setItem("orderCounter",orderCounter)

let order={

orderID,
name:document.getElementById("name").value,
phone:document.getElementById("phone").value,
address:document.getElementById("address").value,
items:selected,
total,
payment,
date:new Date().toLocaleDateString("en-IN"),
createdDate:new Date().toISOString(),

status:"Processing"   

}

orders.push(order)

fetch("https://script.google.com/macros/s/AKfycbyRrSc3mdjSHUvlP4OvxLy4psq2K4ixJHgp8FQClUTQGqYScY0TnqT--cazceGxduuctg/exec",{
method:"POST",
body:JSON.stringify(order)
})

localStorage.setItem("orders",JSON.stringify(orders))

cart=[]
selected=[]

showPaymentSuccess(orderID)

}
function showPaymentSuccess(orderID){

app.innerHTML=""

let box=document.createElement("div")

box.style.textAlign="center"
box.style.marginTop="80px"

box.innerHTML=`

<h1 style="color:#2e7d32;font-size:32px;">
Order Successful ✅
</h1>

<h2 style="margin-top:10px;">
Order ID : ${orderID}
</h2>

<p style="color:#555;margin-top:10px;">
Thank you for shopping with Agriallrounder
</p>

<button onclick="homePage()" class="success-home-btn">
🏠 Go to Home
</button>

`

app.appendChild(box)

}

/* UPI QR PAGE */

function openUPI(amount,type,machine,payment){

app.innerHTML=""
backBtn()

let box=document.createElement("div")

box.style.textAlign="center"
box.style.marginTop="40px"

box.innerHTML=`

<h2>Scan QR to Pay</h2>

<img src="${QR_IMAGE}" style="width:250px">

<h3>Amount : &#8377; ${amount}</h3>

<p style="color:gray">After payment press BACK</p>

`

app.appendChild(box)

}

/* ORDER HISTORY */

/* ================= ORDER HISTORY (UPDATED) ================= */

function openOrderHistory(){
let t = translations[lang]

// 🔥 1. ALWAYS LOAD LATEST DATA
orders = JSON.parse(localStorage.getItem("orders")) || []

// 🔥 2. PHONE INPUT CLEAN
let phone = prompt(translations[lang].phone)?.trim()

// 🔥 3. SAFE FILTER
let userOrders = orders.filter(o => 
    String(o.phone).trim() === String(phone).trim()
)

app.innerHTML=""
backBtn()

if(userOrders.length===0){
app.innerHTML="<h3>No orders found</h3>"
return
}

userOrders.forEach((o)=>{

let realIndex = orders.findIndex(or => or.orderID === o.orderID)

app.innerHTML+=`

<div class="cartCard">

<p><b>${t.orderId} :</b> ${o.orderID}</p>
<p><b>${t.name} :</b> ${o.name}</p>
<p><b>${t.phone} :</b> ${o.phone}</p>
<p><b>${t.address} :</b> ${o.address}</p>
<p><b>${t.total} :</b> ₹${o.total}</p>
<p><b>${t.payment} :</b> ${o.payment}</p>
<p><b>${t.status} :</b> ${o.status || "Delivered"}</p>

${o.cancelReason ? `
<p style="color:red;"><b>Cancel Reason:</b> ${o.cancelReason}</p>
` : ""}

<!-- 🔥 MODERN BUTTONS -->
<button class="action-btn cancel-btn" onclick="cancelOrder(${realIndex})">
❌ ${t.cancel}
</button>

<button class="action-btn return-btn" onclick="showReturnForm(${realIndex})">
🔁 ${t.return}
</button>

${o.return ? `
<p style="color:orange;"><b>Return Requested</b></p>
<p>Reason: ${o.return.reason}</p>
<img src="${o.return.image}" width="80">
` : ""}

</div>

`

})

}

/* ================= BOOKING HISTORY ================= */

function openBookingHistory(){

let t = translations[lang]   // ✅ ADD THIS LINE

// 🔥 ALWAYS LOAD LATEST DATA
bookings = JSON.parse(localStorage.getItem("machineBookings")) || []

let phone = prompt(translations[lang].phone)?.trim()

let userBookings = bookings.filter(b => 
    String(b.phone).trim() === String(phone).trim()
)

app.innerHTML=""
backBtn()

if(userBookings.length===0){
app.innerHTML="<h3>No bookings found</h3>"
return
}

userBookings.forEach((b)=>{

let realIndex = bookings.indexOf(b)

app.innerHTML+=`

<div class="cartCard">

<p><b>${t.machine} :</b> ${b.machine}</p>
<p><b>${t.date} :</b> ${b.machineDate}</p>
<p><b>${t.slot} :</b> ${b.slot}</p>
<p><b>${t.total} :</b> ₹ ${b.total}</p>
<p><b>${t.status} :</b> ${b.status || "Booked"}</p>

${b.cancelReason ? `<p style="color:red;">Reason: ${b.cancelReason}</p>` : ""}

<button class="action-btn cancel-btn" onclick="cancelBooking(${realIndex})">
❌ ${t.cancel}
</button>

<button class="action-btn rebook-btn" onclick="openRebooking(${realIndex})">
🔄 ${t.rebook}
</button>

</div>

`

})

}


/* CANCEL BOOKING */

function cancelBooking(index){

let t = translations[lang]
let reason = prompt(t.cancelPrompt)

if(!reason){
alert(t.enterReason)
return
}

if(confirm(t.confirmCancel)){

bookings[index].status="Cancelled"
bookings[index].cancelReason=reason

localStorage.setItem("machineBookings",JSON.stringify(bookings))

alert("Booking Cancelled ❌")

openBookingHistory()

}

}

/* REBOOK UI */

function openRebooking(index){

let b = bookings[index]

app.innerHTML=""
backBtn()

app.innerHTML+=`

<div class="orderForm">

<h2>${b.machine} Rebooking</h2>

<input id="name" value="${b.name}" placeholder="Name">
<input id="phone" value="${b.phone}" placeholder="Phone">
<textarea id="address">${b.address || ""}</textarea>

<label>Date</label>
<input type="date" id="date"
min="${new Date().toISOString().split('T')[0]}">

<label>Slot</label>
<select id="slot">
<option>6 AM - 9 AM</option>
<option>9 AM - 12 PM</option>
<option>12 PM - 3 PM</option>
<option>3 PM - 6 PM</option>
<option>6 PM - 9 PM</option>
</select>

<h3>Total : ₹ ${b.total}</h3>

<button onclick="confirmRebooking(${index},'COD')">COD</button>
<button onclick="confirmRebooking(${index},'UPI')">UPI</button>

</div>

`

}

/* CONFIRM REBOOK */

function confirmRebooking(index,payment){

let date=document.getElementById("date").value
let slot=document.getElementById("slot").value

if(!date){
alert("Select date")
return
}

let machine=bookings[index].machine

let alreadyBooked=bookings.find(b =>
b.machine===machine &&
b.machineDate===date &&
b.slot===slot
)

if(alreadyBooked){
alert("❌ Slot already booked")
return
}

bookings[index].name=document.getElementById("name").value
bookings[index].phone=document.getElementById("phone").value
bookings[index].address=document.getElementById("address").value
bookings[index].machineDate=date
bookings[index].slot=slot
bookings[index].payment=payment
bookings[index].status="Rescheduled"

localStorage.setItem("machineBookings",JSON.stringify(bookings))

if(payment==="UPI"){
openUPI(bookings[index].total,"booking")
return
}

alert("Booking Updated ✅")

openBookingHistory()

}

function cancelOrder(index){

let t = translations[lang]

let reason = prompt(t.cancelPrompt)

if(!reason){
alert(t.enterReason)
return
}

if(confirm(t.confirmCancel)){

orders[index].status = "Cancelled"
orders[index].cancelReason = reason

localStorage.setItem("orders", JSON.stringify(orders))

alert("Order Cancelled ❌")

openOrderHistory()

}

}

function showReturnForm(index){

let t = translations[lang]

app.innerHTML+=`

<div class="return-container">

<h2>🔁 ${t.return} ${t.orderId}</h2>

<textarea id="reason" placeholder="${t.enterReason}" class="return-input"></textarea>

<label class="upload-box">
📸 ${t.uploadPhoto}
<input type="file" id="image" accept="image/*" capture="environment">
</label>

<button onclick="submitReturn(${index})" class="submit-btn">
${t.submitReturn}
</button>

</div>

`

}

/* ADMIN LOGIN */

function adminLogin(){

let user=prompt("User ID")
let pass=prompt("Password")

if(user==="yuvan" && pass==="YASHUachar97$"){

localStorage.setItem("adminLoginTime",Date.now())

window.open("admin.html","_blank")

}else{

alert("Invalid login")

}

}

/* ADMIN PANEL */

function openAdminPanel(){

app.innerHTML=`

<h2>Admin Panel</h2>

<div class="adminTabs">
<button onclick="showOrders()">Orders</button>
<button onclick="showBookings()">Machine Bookings</button>
</div>

<div id="adminContent"></div>

`

showOrders()

}

function showOrders(){

let content=document.getElementById("adminContent")

content.innerHTML="<h3>Orders</h3>"

orders.forEach(o=>{

content.innerHTML+=`

<div class="adminCard">

<p>Order ID : ${o.orderID}</p>
<p>Name : ${o.name}</p>
<p>Phone : ${o.phone}</p>
<p>Total : &#8377; ${o.total}</p>
<p>Payment : ${o.payment}</p>

</div>

`

})

}

function showBookings(){

let content=document.getElementById("adminContent")

content.innerHTML="<h3>Machine Bookings</h3>"

bookings.forEach(b=>{

content.innerHTML+=`

<div class="adminCard">

<p>Machine : ${b.machine}</p>
<p>Name : ${b.name}</p>
<p>Phone : ${b.phone}</p>
<p>Date : ${b.date}</p>
<p>Slot : ${b.slot}</p>


</div>

`

})

}

/* HELP */

function openHelp(){

app.innerHTML=`

<h2>Customer Support</h2>

<p>Phone : 9108102819</p>
<p>Email : agriallrounder@gmail.com</p>
<p>Working hours : 7 AM - 7 PM</p>

`

}
/* TRACK ORDER */

function trackOrder(){
let t = translations[lang]   

orders = JSON.parse(localStorage.getItem("orders")) || []
bookings = JSON.parse(localStorage.getItem("machineBookings")) || []

let phone = prompt("Enter your phone number")?.trim()

app.innerHTML=""
backBtn()

let userOrders = orders.filter(o => 
String(o.phone).trim() === phone
)

let userBookings = bookings.filter(b => 
String(b.phone).trim() === phone
)

if(userOrders.length===0 && userBookings.length===0){
app.innerHTML="<h3 style='margin:20px'>No records found</h3>"
return
}

// 📦 ORDER TRACK
userOrders.forEach(o=>{

app.innerHTML+=`

<div class="cartCard">

<h3>📦 ${t.tracking}</h3>

<p><b>${t.orderId}:</b> ${o.orderID}</p>
<p><b>${t.status}:</b> ${getOrderStatusUI(o.status)}</p>

</div>

`

})

// 🚜 BOOKING TRACK
userBookings.forEach(b=>{

app.innerHTML+=`

<div class="cartCard">

<h3>🚜 ${t.machineTracking}</h3>

<p><b>${t.machine}:</b> ${b.machine}</p>
<p><b>${t.date}:</b> ${b.machineDate}</p>
<p><b>${t.status}:</b> ${getBookingStatusUI(b.status)}</p>

</div>

`

})

}

function confirmBooking(machine,total,payment){

let date=document.getElementById("date").value
let slot=document.getElementById("slot").value

let bookings=JSON.parse(localStorage.getItem("machineBookings"))||[]

let alreadyBooked=bookings.find(b =>
b.machine===machine && b.machineDate===date && b.slot===slot
)

if(alreadyBooked){
alert("❌ This time slot already booked")
return
}

let sameDateBookings=bookings.filter(b =>
b.machine===machine && b.machineDate===date
)

if(sameDateBookings.length>=5){
alert("❌ All slots booked for this date")
return
}

let booking={

machine,
name:document.getElementById("name").value,
phone:String(document.getElementById("phone").value).trim(),
address:document.getElementById("address").value,   // ✅ ADD THIS

bookingDate:new Date().toLocaleDateString("en-IN"), // ✅ ADD THIS

machineDate:date,

slot,
total,
payment,
createdDate:new Date().toISOString(),

status:"Booked"   

}

bookings.push(booking)
/* GOOGLE SHEET AUTOMATION */

fetch("https://script.google.com/macros/s/AKfycbyRrSc3mdjSHUvlP4OvxLy4psq2K4ixJHgp8FQClUTQGqYScY0TnqT--cazceGxduuctg/exec",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
type:"booking",
...booking
})
})
.then(res=>res.text())
.then(data=>console.log("Machine Booking Saved:",data))
.catch(err=>console.error("Error:",err));

localStorage.setItem("machineBookings",JSON.stringify(bookings))

alert("Machine Booking Confirmed 🚜")

homePage()

}
/* CHECK MACHINE DATE AVAILABILITY */
function checkMachineAvailability(machine){

let date=document.getElementById("date").value

let bookings=JSON.parse(localStorage.getItem("machineBookings"))||[]

let slots=document.getElementById("slot")

let options=slots.options

for(let i=0;i<options.length;i++){

options[i].disabled=false
options[i].text=options[i].value

}

let sameDate=bookings.filter(b =>
b.machine===machine && b.machineDate===date
)

sameDate.forEach(b=>{

for(let i=0;i<options.length;i++){

if(options[i].value===b.slot){

options[i].disabled=true
options[i].text=b.slot+" ❌ Booked"

}

}

})

if(sameDate.length>=5){

alert("❌ All slots booked for this date")

document.getElementById("date").value=""

}

}

/* CHECK SLOT AVAILABILITY */

homePage()
function submitReturn(index){
let t = translations[lang]

let reason=document.getElementById("reason").value
let file=document.getElementById("image").files[0]

if(!reason){
alert(t.enterReason)
return
}

let reader=new FileReader()

reader.onload=function(){

orders[index].return={
reason:reason,
image:reader.result,
date:new Date().toLocaleDateString("en-IN")
}

orders[index].status="Return Requested"

localStorage.setItem("orders",JSON.stringify(orders))

alert("Return Request Submitted 🔁")

openOrderHistory()

}

if(file){
reader.readAsDataURL(file)
}else{
reader.onload()
}

}
function getOrderStatusUI(status){

if(status==="Processing") return "🟡 Processing"
if(status==="Shipped") return "🚚 Shipped"
if(status==="Delivered") return "✅ Delivered"
if(status==="Cancelled") return "❌ Cancelled"

return status
}

function getBookingStatusUI(status){

if(status==="Booked") return "🟡 Booked"
if(status==="On the way") return "🚜 On the way"
if(status==="Completed") return "✅ Completed"
if(status==="Cancelled") return "❌ Cancelled"

return status
}
function applyLanguage(){

let t = translations[lang]

let waTitle = document.getElementById("waTitle")
if(waTitle) waTitle.innerText = "📲 " + t.waBookFull

let waOrderBtn = document.getElementById("waOrderBtn")
let waBookBtn = document.getElementById("waBookBtn")

if(waOrderBtn) waOrderBtn.innerText = "🛒 " + t.waOrder
if(waBookBtn) waBookBtn.innerText = "🚜 " + t.waBook

let formTitle = document.getElementById("formTitle")
if(formTitle) formTitle.innerText = "📝 " + t.formTitle

let orderFormBtn = document.getElementById("orderFormBtn")
let bookingFormBtn = document.getElementById("bookingFormBtn")

if(orderFormBtn) orderFormBtn.innerText = "📝 " + t.orderForm
if(bookingFormBtn) bookingFormBtn.innerText = "🚜 " + t.bookingForm

let feedTitle=document.getElementById("feedTitle")
if(feedTitle) feedTitle.innerText="🌾 "+t.feedTitle

let postInput=document.getElementById("postInput")
if(postInput) postInput.placeholder=t.postPlaceholder

let postBtn=document.getElementById("postBtn")
if(postBtn) postBtn.innerText=t.postBtn


// HELP BUTTON
let helpBtn = document.getElementById("helpBtn")
if(helpBtn) helpBtn.innerText = "❓ " + (translations[lang].help || "Help")

// TOP BUTTONS
let orderBtn = document.getElementById("orderBtn")
if(orderBtn) orderBtn.innerText = "📦 " + t.orderHistory

let bookingBtn = document.getElementById("bookingBtn")
if(bookingBtn) bookingBtn.innerText = "📅 " + t.bookingHistory

let trackBtn = document.getElementById("trackBtn")
if(trackBtn) trackBtn.innerText = "🔍 " + t.track

let adminBtn = document.getElementById("adminBtn")
if(adminBtn) adminBtn.innerText = "⚙ " + t.admin

// BOTTOM NAV
let homeBtn = document.getElementById("homeBtn")
if(homeBtn) homeBtn.innerText = "🏠 " + t.home

let cartBtn = document.getElementById("cartBtn")
if(cartBtn) cartBtn.innerText = "🛒 " + t.cart

// SEARCH BOX
let sb = document.getElementById("searchBox")
if(sb) sb.placeholder = t.search

}
let langSelect = document.getElementById("langSelect")
if(langSelect){
langSelect.value = lang
}
applyLanguage()

function changeLang(l){
lang = l
localStorage.setItem("lang", l)

// 🔥 ADD THIS LINE
homePage()

// 🔥 keep this also
applyLanguage()
}
let posts = JSON.parse(localStorage.getItem("farmerPosts")) || []
let users = JSON.parse(localStorage.getItem("users")) || []
localStorage.setItem("currentUser", currentUser)

function addPost(){

let text = document.getElementById("postInput").value
let file = document.getElementById("postImage").files[0]

if(!text){
alert("Enter something")
return
}

let reader = new FileReader()

reader.onload=function(){
let post={
id: Date.now(),
user: currentUser,
text:text,
image:reader.result || null,
date:new Date().toLocaleString(),
likes:[],
comments:[]
}

posts.unshift(post)
localStorage.setItem("farmerPosts", JSON.stringify(posts))

document.getElementById("postInput").value=""
document.getElementById("postImage").value=""

loadPosts()
}

if(file){
reader.readAsDataURL(file)
}else{
reader.onload()
}

}

loadPosts()

function loadPosts(){

let container = document.getElementById("postsContainer")
if(!container) return
if(posts.length === 0){
container.innerHTML = "<p style='text-align:center;padding:20px;'>No posts yet 🚜</p>"
return
}

container.innerHTML = ""

posts.forEach(p => {

container.innerHTML += `

<div style="background:white;margin-bottom:10px;border-bottom:1px solid #ddd;">

<div style="padding:10px;font-weight:bold;">
👨‍🌾 ${p.user}
</div>

<img src="${p.image}" style="width:100%;" ondblclick="likePost(${p.id})">

<div style="padding:10px;">

${p.type==="ad" ? `
<b>📢 ${p.title}</b><br>
₹${p.price} | 📞 ${p.contact}
` : `
${p.text}
`}

<div style="margin-top:8px;font-size:18px;">
<span onclick="likePost(${p.id})" style="cursor:pointer;">❤️</span>
<span onclick="toggleCommentBox(${p.id})"> 💬</span>
<span onclick="resharePost(${p.id})"> 🔁</span>
<span onclick="sharePost(${p.id})"> 📤</span>
</div>

<p style="font-size:14px;">❤️ ${p.likes.length} likes</p>

<div>
${p.comments.map(c=>`<p style="font-size:13px;">${c}</p>`).join("")}
</div>

</div>

</div>
`
})

}

function likePost(id){

let post = posts.find(p=>p.id===id)

if(post.likes.includes(currentUser)){
post.likes = post.likes.filter(u=>u!==currentUser)
}else{
post.likes.push(currentUser)
}

localStorage.setItem("farmerPosts", JSON.stringify(posts))
loadPosts()

}
function toggleCommentBox(id){
let box=document.getElementById("commentBox_"+id)
box.style.display = box.style.display==="none" ? "block" : "none"
}

function addComment(id){

let input=document.getElementById("commentInput_"+id)
let text=input.value

if(!text) return

let post=posts.find(p=>p.id===id)

post.comments.push(currentUser + ": " + text)

localStorage.setItem("farmerPosts", JSON.stringify(posts))

input.value=""

loadPosts()

}
function showNotification(msg){

let n = document.createElement("div")

n.innerText = msg

n.style.position="fixed"
n.style.bottom="80px"
n.style.right="20px"
n.style.background="green"
n.style.color="white"
n.style.padding="10px"
n.style.borderRadius="8px"

document.body.appendChild(n)

setTimeout(()=>n.remove(),2000)

}

let following = JSON.parse(localStorage.getItem("following")) || []

function followUser(user){

if(user===currentUser){
alert("You can't follow yourself")
return
}

if(following.includes(user)){
following = following.filter(u=>u!==user)
}else{
following.push(user)
}

localStorage.setItem("following", JSON.stringify(following))
alert("Follow updated")

}
function addAd(){

let title = prompt("Enter item (Tractor / Seeds / Machine)")
let price = prompt("Enter price")
let contact = prompt("Enter phone number")

if(!title || !price || !contact) return

posts.unshift({
id: Date.now(),
user: currentUser,
type:"ad",
title:title,
price:price,
contact:contact,
date:new Date().toLocaleString(),
likes:[],
comments:[]
})

localStorage.setItem("farmerPosts", JSON.stringify(posts))
loadPosts()

}
function resharePost(id){

let original = posts.find(p=>p.id===id)

let newPost = {
...original,
id: Date.now(),
user: currentUser,
date:new Date().toLocaleString()
}

posts.unshift(newPost)

localStorage.setItem("farmerPosts", JSON.stringify(posts))
loadPosts()

}
function sharePost(id){

let p = posts.find(p=>p.id===id)

let text = ""

if(p.type==="ad"){
text = `📢 ${p.title}\nPrice: ₹${p.price}\nContact: ${p.contact}`
}else{
text = p.text
}

let url = "https://wa.me/?text=" + encodeURIComponent(text)

window.open(url,"_blank")

}

function openFeedLogin(){

app.innerHTML=`

<div style="text-align:center;padding:30px;">

<h2>📱 Farmer Login</h2>

<input id="phone" placeholder="Enter phone number"
style="padding:10px;width:80%;border-radius:8px;">

<br><br>

<button onclick="simpleLogin()" 
style="padding:10px 20px;background:#2e7d32;color:white;border:none;border-radius:8px;">
Login
</button>

</div>

`

}
function openFeed(){

let user = localStorage.getItem("farmerUser")

if(user){
openFeedPage()   // already login
}else{
openFeedLogin()  // login first
}

}

function openFeedPage(){

if(!localStorage.getItem("farmerUser")){
openFeedLogin()
return
}

app.innerHTML = `

<div style="max-width:500px;margin:auto;background:#fafafa;min-height:100vh;">

<!-- HEADER -->
<div style="display:flex;justify-content:space-between;align-items:center;padding:10px;">

<h3 style="color:#2e7d32;">
🌾 Farmer Feed - 👨‍🌾 ${currentUser}
</h3>

<div>
<button onclick="openProfile()" 
style="margin-right:10px;background:#ffd600;border:none;padding:6px 10px;border-radius:6px;">
👤
</button>

<button onclick="homePage()" 
style="border:none;background:none;font-size:18px;">
🏠
</button>
</div>

</div>

<!-- POST BOX -->
<textarea id="postInput" placeholder="Share your farming idea..."
style="width:100%;padding:10px;border-radius:10px;border:1px solid #ccc;"></textarea>

<label style="
display:inline-block;
width:50px;
height:50px;
background:#ffd600;
border-radius:50%;
text-align:center;
line-height:50px;
font-size:28px;
cursor:pointer;
margin-top:10px;
">
+
<input type="file" id="postImage" accept="image/*,video/*,.pdf,.doc" style="display:none;">
</label>

<div id="preview" style="margin-top:10px;"></div>

<div id="postsContainer"></div>

</div>

`

loadPosts()

}

function simpleLogin(){

let phone = document.getElementById("phone").value

if(phone.length < 10){
alert("Enter valid number")
return
}

localStorage.setItem("farmerUser", phone)

currentUser = "Farmer_" + phone.slice(-4)

alert("Login Successful ✅")
openFeedPage()

}
function openProfile(){

let user = localStorage.getItem("farmerUser") || "Guest"
let dp = localStorage.getItem("profilePic") || ""

app.innerHTML = `

<div style="text-align:center;padding:20px;">

<h2>👤 Farmer Profile</h2>

<img src="${dp || 'https://via.placeholder.com/100'}" 
style="width:100px;height:100px;border-radius:50%;">

<br><br>

<input type="file" id="dpInput">

<br><br>

<input id="nameInput" placeholder="Enter name" value="${user}">

<br><br>

<button onclick="saveProfile()" 
style="background:green;color:white;padding:10px 20px;border:none;border-radius:8px;">
Save Profile
</button>

</div>

`

}
function saveProfile(){

let name = document.getElementById("nameInput").value
let file = document.getElementById("dpInput").files[0]

if(name){
localStorage.setItem("farmerUser", name)
}

if(file){
let reader = new FileReader()

reader.onload=function(){
localStorage.setItem("profilePic", reader.result)
alert("Profile Updated ✅")
openProfile()
}

reader.readAsDataURL(file)
}else{
alert("Profile Updated ✅")
openProfile()
}

}
if(localStorage.getItem("farmerUser")){
homePage()
}else{
homePage()   // normal homepage
}
document.addEventListener("change",function(e){

if(e.target.id==="postImage"){

let file = e.target.files[0]
let preview = document.getElementById("preview")

if(!file) return

let reader = new FileReader()

reader.onload=function(){

if(file.type.startsWith("image")){
preview.innerHTML = `<img src="${reader.result}" style="width:100%;border-radius:10px;">`
}
else if(file.type.startsWith("video")){
preview.innerHTML = `<video src="${reader.result}" controls style="width:100%;border-radius:10px;"></video>`
}
else{
preview.innerHTML = `<p>📄 ${file.name}</p>`
}

}

reader.readAsDataURL(file)

}

})




