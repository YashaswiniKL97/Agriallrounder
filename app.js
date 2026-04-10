console.log("APP JS LOADED")

const SUPABASE_URL = "https://zpvuyiuhnklszzefktkr.supabase.co"
const SUPABASE_KEY = "sb_publishable_6w4RAoYDszXfGny5NFbVWQ_rn24FYM2"

// create only once
if (!window.supabaseInstance) {
  window.supabaseInstance = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
}

// use var (important)
var supabase = window.supabaseInstance


const app=document.getElementById("app")
// SERVER API
const API_URL = "https://script.google.com/macros/s/AKfycbw95kOijhFrjNP8PNAPGcfolebFCOMOtdggyfCaNIoABjFLWgl9o9X8XDUmP4UwfjgC/exec"

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
search:"Search machines, drone, borewell, organic...",

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

Borewell:"Borewell Scanning",
Drone:"Drone Service",
DKC:"DKC Organic",
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
instructions:"Note: Delivery, GST and parcel charges are included. You can cancel within 3 hours without deduction. After 3 hours, 20% will be deducted.",
agree:"I agree to terms",

waOrder:"Order on WhatsApp",
waBook:"Book via WhatsApp",

orderForm:"Order via Google Form",
bookingForm:"Book Machine via Google Form",
formTitle:"Order & Booking via Google Form",
waBookFull:"Book via WhatsApp",

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
search:"ಯಂತ್ರಗಳು, ಡ್ರೋನ್, ಬೋರ್‌ವೆಲ್, ಆರ್ಗಾನಿಕ್ ಹುಡುಕಿ...",

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

Borewell:"ಬೋರ್ವೆಲ್ ಸ್ಕ್ಯಾನಿಂಗ್",
Drone:"ಡ್ರೋನ್ ಸೇವೆ",
DKC:"DKC ಆರ್ಗ್ಯಾನಿಕ್",

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
instructions:"ಗಮನಿಸಿ: ಡೆಲಿವರಿ, ಜಿಎಸ್‌ಟಿ ಮತ್ತು ಪಾರ್ಸೆಲ್ ಶುಲ್ಕ ಒಳಗೊಂಡಿದೆ. 3 ಗಂಟೆಯೊಳಗೆ ರದ್ದು ಮಾಡಿದರೆ ಯಾವುದೇ ಹಣ ಕಡಿತವಾಗುವುದಿಲ್ಲ. 3 ಗಂಟೆಯ ನಂತರ ಒಟ್ಟು ಮೊತ್ತದ 20% ಕಡಿತವಾಗುತ್ತದೆ.",
agree:"ನಾನು ನಿಯಮಗಳನ್ನು ಒಪ್ಪುತ್ತೇನೆ",

waOrder:"WhatsApp ಮೂಲಕ ಆರ್ಡರ್ ಮಾಡಿ",
waBook:"WhatsApp ಮೂಲಕ ಬುಕ್ ಮಾಡಿ",
waBookFull:"WhatsApp ಮೂಲಕ ಬುಕ್ ಮಾಡಿ",

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
search:"मशीन, ड्रोन, बोरवेल, ऑर्गेनिक खोजें...",

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

Borewell:"बोरवेल स्कैनिंग",
Drone:"ड्रोन सेवा",
DKC:"DKC ऑर्गेनिक",

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
instructions:"नोट: डिलीवरी, GST और पार्सल शुल्क शामिल हैं। 3 घंटे के अंदर कैंसल करने पर कोई कटौती नहीं होगी। 3 घंटे के बाद 20% कटौती होगी।",
agree:"मैं नियमों से सहमत हूं",

waOrder:"WhatsApp पर ऑर्डर करें",
waBook:"WhatsApp पर बुक करें",
waBookFull:"WhatsApp से बुक करें",

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
search:"யந்திரம், ட்ரோன், போர்வெல், ஆர்கானிக் தேடுங்கள்...",

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

Borewell:"போர் வெல் ஸ்கேனிங்",
Drone:"ட்ரோன் சேவை",
DKC:"DKC ஆர்கானிக்",

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
instructions:"குறிப்பு: டெலிவரி, GST மற்றும் பார்சல் கட்டணம் சேர்க்கப்பட்டுள்ளது. 3 மணி நேரத்திற்குள் ரத்து செய்தால் எந்த தொகையும் கழிக்கப்படாது. 3 மணி நேரத்திற்கு பிறகு 20% கழிக்கப்படும்.",
agree:"நான் விதிமுறைகளை ஏற்கிறேன்",

waOrder:"WhatsApp மூலம் ஆர்டர் செய்யவும்",
waBook:"WhatsApp மூலம் பதிவு செய்யவும்",
waBookFull:"WhatsApp மூலம் பதிவு செய்யவும்",

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
feedTitle: "రైతు ఫీడ్",
postPlaceholder: "మీ వ్యవసాయ పోస్టును పంచుకోండి...",
postBtn: "పోస్ట్ చేయండి",
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
search:"యంత్రాలు, డ్రోన్, బోర్‌వెల్, ఆర్గానిక్ వెతకండి...",

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

Borewell:"బోర్‌వెల్ స్కానింగ్",
Drone:"డ్రోన్ సేవ",
DKC:"DKC ఆర్గానిక్",

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
instructions:"గమనిక: డెలివరీ, GST మరియు పార్సెల్ ఛార్జీలు కలిపి ఉన్నాయి. 3 గంటలలోపు రద్దు చేస్తే ఎటువంటి డెడక్షన్ ఉండదు. 3 గంటల తర్వాత 20% తగ్గింపు ఉంటుంది.",
agree:"నేను నిబంధనలను అంగీకరిస్తున్నాను",

waOrder:"WhatsApp ద్వారా ఆర్డర్ చేయండి",
waBook:"WhatsApp ద్వారా బుక్ చేయండి",
waBookFull:"WhatsApp ద్వారా బుక్ చేయండి",

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

/* GLOBAL */

const GST_PERCENT = 18
const DELIVERY_CHARGE = 30
const PARCEL_CHARGE = 30

let cart=[]
let selected=[]

let orders=[]
let bookings = []
let orderCounter = 1001

/* QR IMAGE */

const QR_IMAGE="images/phonepeQR.png"

/* CATEGORIES */

const categories=[

{name:"Machines",img:"images/tractor.png"},
{name:"Borewell",img:"images/borewell.png"},
{name:"Drone",img:"images/drone.png"},
{name:"DKC",img:"images/organic.png"}

]

/* PRODUCTS */

let allProducts={

Machines:[

{name:"Tractor",price:800,img:"images/tractor.png"},
{name:"Rotavator",price:600,img:"images/rotavator.png"},
{name:"Drone Spraying",price:1500,img:"images/drone.png"}

],

Borewell:[

{name:"Camera Scanning",price:2000,img:"images/borewell.png"}

],

Drone:[

{name:"Drone Spraying",price:1500,img:"images/drone.png"},
{name:"Drone Survey",price:2000,img:"images/drone.png"}

],

DKC:[

{name:"Organic Fertilizer",price:500,img:"images/organic.png"},
{name:"Bio Compost",price:300,img:"images/organic.png"}

]

}

/* CART COUNT */

function updateCart(){
let cartCount = document.getElementById("cartCount")

cartCount.innerText = cart.length

// 🔥 ANIMATION ADD
cartCount.classList.add("bump")

setTimeout(()=>{
cartCount.classList.remove("bump")
},300)

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

let mainContent = document.getElementById("mainContent")
if(mainContent){
mainContent.style.display = "block"
mainContent.style.paddingTop = "10px"
}

let app = document.getElementById("app")
app.style.display = "block"

// ✅ CLEAR OLD CONTENT
app.innerHTML = ""

// ✅ SHOW NAVBAR
let nav = document.getElementById("mainNav")
if(nav){
nav.style.display = "flex"
}

// ✅ UPDATE CART
updateCart()

// ✅ GRID CREATE
let grid = document.createElement("div")
grid.className = "grid"

// ✅ LOOP CATEGORIES
categories.forEach((c,index)=>{

let card = document.createElement("div")

// LEFT RIGHT ANIMATION
if(index % 2 === 0){
card.className = "card left"
}else{
card.className = "card right"
}

card.innerHTML = `
<img src="${c.img}">
<h3>${translations[lang][c.name] || c.name}</h3>
`

card.onclick = () => openCategory(c.name)

grid.appendChild(card)

})

// ✅ ADD TO PAGE
app.appendChild(grid)

// 🔥 SCROLL ANIMATION TRIGGER
setTimeout(()=>{
revealCards()
},100)

}

/* ================= SEARCH FUNCTION ================= */

// 🔍 SEARCH FUNCTION

window.addEventListener("DOMContentLoaded", function(){

let search = document.getElementById("searchBox")

if(!search) return

search.addEventListener("input", function(){

let value = this.value.toLowerCase()

if(value.trim() === ""){
homePage()
return
}

app.innerHTML = ""
backBtn()

let grid = document.createElement("div")
grid.className = "grid"

let found = false

for(let category in allProducts){

// 🔥 CATEGORY MATCH
if(category.toLowerCase().includes(value)){

found = true

allProducts[category].forEach(p=>{

let card = document.createElement("div")
card.className = "card show"

card.innerHTML = `
<img src="${p.img}">
<h3>${p.name}</h3>
<p>₹ ${p.price}</p>
`

let btn = document.createElement("button")

if(category==="Machines" || category==="Drone" || category==="Borewell"){
btn.innerText = "Book Now"
btn.onclick = ()=>openMachineBooking(p)
}else{
btn.innerText = "Add to Cart"
btn.onclick = ()=>{
cart.push({name:p.name,price:p.price,qty:1})
updateCart()
}
}

card.appendChild(btn)
grid.appendChild(card)

})

}

// 🔥 PRODUCT MATCH
allProducts[category].forEach(p=>{

if(p.name.toLowerCase().includes(value)){

found = true

let card = document.createElement("div")
card.className = "card show"

card.innerHTML = `
<img src="${p.img}">
<h3>${p.name}</h3>
<p>₹ ${p.price}</p>
`

let btn = document.createElement("button")

if(category==="Machines" || category==="Drone" || category==="Borewell"){
btn.innerText = "Book Now"
btn.onclick = ()=>openMachineBooking(p)
}else{
btn.innerText = "Add to Cart"
btn.onclick = ()=>{
cart.push({name:p.name,price:p.price,qty:1})
updateCart()
}
}

card.appendChild(btn)
grid.appendChild(card)

}

})

}

if(!found){
app.innerHTML = "<h3 style='margin:20px'>No results found</h3>"
return
}

app.appendChild(grid)

})

})

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

if(category==="Machines" || category==="Borewell" || category==="Drone"){

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

<h2>${machine.name} Service Booking</h2>

<input id="name" placeholder="${t.customerName}">
<input id="phone" placeholder="${t.phone}">
<textarea id="address" placeholder="${t.address}"></textarea>

<label>${t.selectDate}</label>
<input type="date" id="date" onchange="checkMachineAvailability('${machine}')">

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
<p style="color:#555;font-size:13px;">⚠ ${t.instructions}</p>

<label style="display:flex;align-items:center;margin-top:10px;">
<input type="checkbox" id="agreeTerms" style="margin-right:8px;">
${t.agree}
</label>
<p style="color:#555;font-size:13px;margin-top:10px;">
⚠ ${t.instructions}
</p>

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

let total = subtotal + DELIVERY_CHARGE + PARCEL_CHARGE

let form=document.createElement("div")
form.className="orderForm"

let t = translations[lang]

form.innerHTML=`

<input id="name" placeholder="${t.customerName}">
<input id="phone" placeholder="${t.phone}">
<textarea id="address" placeholder="${t.address}"></textarea>

<h3>Subtotal : &#8377; ${subtotal}</h3>
<h3>Delivery : &#8377; ${DELIVERY_CHARGE}</h3>
<h3>Parcel : &#8377; ${PARCEL_CHARGE}</h3>
<h2>${t.total} : &#8377; ${total}</h2>
<p style="color:#555;font-size:13px;">⚠ ${t.instructions}</p>

<label style="display:flex;align-items:center;margin-top:10px;">
<input type="checkbox" id="agreeTerms" style="margin-right:8px;">
${t.agree}
</label>
<p style="color:#555;font-size:13px;margin-top:10px;">
⚠ ${t.instructions}
</p>

<button onclick="placeOrder(${total},'COD')">${t.cod}</button>

<button onclick="openUPI(${total},'order')">${t.upi}</button>

`

app.appendChild(form)

}

function placeOrder(total,payment){

let orderID = "AGR" + Date.now()   // ✅ ADD THIS

if(!document.getElementById("agreeTerms")?.checked){
alert("Please accept terms")
return
}

let order={

type:"order",

orderID,   // ✅ NOW WORK AGUTTE

name:document.getElementById("name").value,
phone:String(document.getElementById("phone").value).trim(),
address:document.getElementById("address").value,

total:Number(total),

payment: payment,

machine:"",
machineDate:"",
slot:"",

status:"Processing",

createdDate:new Date().toISOString()

}

// LOCAL
orders.push(order)

// SERVER SAVE
let url = "https://script.google.com/macros/s/AKfycbw95kOijhFrjNP8PNAPGcfolebFCOMOtdggyfCaNIoABjFLWgl9o9X8XDUmP4UwfjgC/exec" +
"?type=order" +
"&orderID=" + orderID +
"&name=" + document.getElementById("name").value +
"&phone=" + document.getElementById("phone").value +
"&address=" + document.getElementById("address").value +
"&total=" + total +
"&payment=" + payment +
"&status=Processing" +
"&createdDate=" + new Date().toISOString()

fetch(url)

// SUCCESS UI
showPaymentSuccess(orderID)

// RESET
cart=[]
selected=[]

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

async function openOrderHistory(){

await loadOrdersFromServer()   // 🔥 ADD THIS LINE
let t = translations[lang]

// 🔥 1. ALWAYS LOAD LATEST DATA


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

async function openBookingHistory(){

await loadOrdersFromServer()   // 🔥 ADD THIS

let t = translations[lang]   // ✅ ADD THIS LINE

// 🔥 ALWAYS LOAD LATEST DATA

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

async function cancelBooking(index){

let t = translations[lang]

let reason = prompt(t.cancelPrompt)

if(!reason){
alert(t.enterReason)
return
}

if(confirm(t.confirmCancel)){

bookings[index].status = "Cancelled"
bookings[index].cancelReason = reason

// SERVER UPDATE
await fetch(API_URL +
"?action=updateBooking" +
"&phone=" + bookings[index].phone +
"&status=Cancelled" +
"&reason=" + encodeURIComponent(reason)
)

alert("Booking Cancelled ❌")

loadOrdersFromServer()
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

async function confirmRebooking(index,payment){

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
bookings[index].status="Rebooked"
await fetch(API_URL +
"?action=updateBooking" +
"&phone=" + bookings[index].phone +
"&status=Rebooked" +
"&machineDate=" + date +
"&slot=" + slot
)
bookings[index].reschedule = {
newDate: date,
reason: "User rescheduled"
}

if(payment==="UPI"){
openUPI(bookings[index].total,"booking")
return
}

alert("Booking Updated ✅")

openBookingHistory()

}

async function cancelOrder(index){

let t = translations[lang]
let reason = prompt(t.cancelPrompt)

if(!reason){
alert(t.enterReason)
return
}

if(confirm(t.confirmCancel)){

orders[index].status = "Cancelled"
orders[index].cancelReason = reason

await fetch(API_URL +
"?action=updateOrder" +
"&orderID=" + orders[index].orderID +
"&status=Cancelled" +
"&reason=" + encodeURIComponent(reason)
)

alert("Order Cancelled ❌")

await loadOrdersFromServer()
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

  document.getElementById("ordersContainer").style.display = "block"
  document.getElementById("bookingsContainer").style.display = "none"


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
  document.getElementById("ordersContainer").style.display = "none"
  document.getElementById("bookingsContainer").style.display = "block"


let content=document.getElementById("adminContent")

content.innerHTML="<h3>Machine Bookings</h3>"

bookings.forEach(b=>{

content.innerHTML+=`

<div class="adminCard">

<p>Machine : ${b.machine}</p>
<p>Name : ${b.name}</p>
<p>Phone : ${b.phone}</p>
<p>Date : ${b.machineDate}</p>
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

async function trackOrder(){

await loadOrdersFromServer()   // 🔥 ADD THIS
let t = translations[lang]   

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

async function confirmBooking(machine,total,payment){

await loadOrdersFromServer()   // 🔥 IMPORTANT

if(!document.getElementById("agreeTerms")?.checked){
alert("Please accept terms")
return
}

let date=document.getElementById("date").value
let slot=document.getElementById("slot").value

// 🔥 CHECK SLOT
let alreadyBooked = bookings.find(b =>
b.machine === machine &&
b.machineDate?.split("T")[0] === date &&
b.slot === slot
)

if(alreadyBooked){
alert("❌ Slot already booked")
return
}

let booking={

type:"booking",   // ✅ IMPORTANT

orderID:"",

machine,
name:document.getElementById("name").value,
phone:String(document.getElementById("phone").value).trim(),
address:document.getElementById("address").value,

total:Number(total),

payment: payment,

machineDate:date,
slot,

status:"Booked",

createdDate:new Date().toISOString()

}

// LOCAL
bookings.push(booking)

// SERVER SAVE

let url = "https://script.google.com/macros/s/AKfycbw95kOijhFrjNP8PNAPGcfolebFCOMOtdggyfCaNIoABjFLWgl9o9X8XDUmP4UwfjgC/exec" +
"?type=booking" +
"&name=" + document.getElementById("name").value +
"&phone=" + document.getElementById("phone").value +
"&address=" + document.getElementById("address").value +
"&total=" + total +
"&payment=" + payment +
"&machine=" + machine +
"&machineDate=" + date +
"&slot=" + slot +
"&status=Booked" +
"&createdDate=" + new Date().toISOString()

fetch(url)

homePage()
}


/* CHECK MACHINE DATE AVAILABILITY */
function checkMachineAvailability(machine){

let date=document.getElementById("date").value


let slots=document.getElementById("slot")

let options=slots.options

for(let i=0;i<options.length;i++){

options[i].disabled=false
options[i].text=options[i].value

}

let sameDate = bookings.filter(b =>
b.machineDate?.split("T")[0] === date
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

async function submitReturn(index){

let t = translations[lang]

let reason = document.getElementById("reason").value
let file = document.getElementById("image").files[0]

if(!reason){
alert(t.enterReason)
return
}

// 🔥 Upload image to Cloudinary
let imageUrl = ""

if(file){

let formData = new FormData()
formData.append("file", file)
formData.append("upload_preset", "agriallrounder")

let res = await fetch("https://api.cloudinary.com/v1_1/dmfsyrxly/image/upload",{
method:"POST",
body:formData
})

let data = await res.json()
imageUrl = data.secure_url
}

// 🔥 Update order
orders[index].status = "Returned"

orders[index].return = {
reason: reason,
image: imageUrl
}

// 🔥 Send to Google Sheet
await fetch(API_URL +
"?action=updateOrder" +
"&orderID=" + orders[index].orderID +
"&status=Returned" +
"&reason=" + encodeURIComponent(reason) +
"&image=" + encodeURIComponent(imageUrl)
)

alert("Return Submitted ✅")

await loadOrdersFromServer()
openOrderHistory()

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

let profileBtn = document.getElementById("profileBtn")
if(profileBtn) profileBtn.innerText = "👤 Profile"

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

async function loadOrdersFromServer(){

try{

let res = await fetch("https://script.google.com/macros/s/AKfycbw95kOijhFrjNP8PNAPGcfolebFCOMOtdggyfCaNIoABjFLWgl9o9X8XDUmP4UwfjgC/exec")

let data = await res.json()

orders = []
bookings = []

data.forEach(d=>{

  if(d.type==="order"){
    orders.push({
      orderID:d.orderID,
      name:d.name,
      phone:d.phone,
      address:d.address,
      total:d.total,
      payment:d.payment,
      status:d.status,
      cancelReason:d.reason,
      return:{
  reason:d.reason,
  image:d.image
},
      createdDate:d.createdDate
    })
  }

  if(d.type==="booking"){
    bookings.push({
      name:d.name,
      phone:d.phone,
      address:d.address,
      total:d.total,
      machine:d.machine,
      machineDate:d.machineDate,
      slot:d.slot,
      status:d.status,
      cancelReason:d.reason
    })
  }

})

console.log("✅ LIVE DATA LOADED")

}catch(err){
console.error("Error loading orders", err)
}

}

let currentSlide = 0

function showSlide(index){
let slides = document.getElementsByClassName("banner-slide")

if(slides.length === 0) return

for(let i=0;i<slides.length;i++){
slides[i].classList.remove("active")
}

slides[index].classList.add("active")
currentSlide = index
}

function nextSlide(){
let slides = document.getElementsByClassName("banner-slide")

currentSlide = (currentSlide + 1) % slides.length
showSlide(currentSlide)
}

// AUTO START
setInterval(nextSlide,3000)

// FIRST LOAD
window.addEventListener("DOMContentLoaded", function(){
showSlide(0)
})

homePage()

// 🔥 SCROLL ANIMATION
function revealCards(){

let cards = document.querySelectorAll(".card")

cards.forEach(card=>{

let top = card.getBoundingClientRect().top
let screenHeight = window.innerHeight

// 👇 ENTER
if(top < screenHeight - 50){
card.classList.add("show")
}

// 👇 EXIT (important)
else{
card.classList.remove("show")
}

})

}

window.addEventListener("scroll",revealCards)
window.addEventListener("load",()=>{
revealCards()

// 🔥 FORCE RE-TRIGGER
setTimeout(revealCards,100)
})
// WhatsApp buttons animation (simple)
function revealButtons(){

let orderBtn = document.getElementById("waOrderBtn")
let bookBtn = document.getElementById("waBookBtn")

if(!orderBtn || !bookBtn) return

let position = orderBtn.getBoundingClientRect().top
let screen = window.innerHeight

if(position < screen - 50){
orderBtn.classList.add("show-btn")
bookBtn.classList.add("show-btn")
}else{
orderBtn.classList.remove("show-btn")
bookBtn.classList.remove("show-btn")
}

}

window.addEventListener("scroll", revealButtons)
window.addEventListener("load", revealButtons)

