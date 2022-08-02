const title=document.querySelector('.title')
const description=document.querySelector('.description')

const loadPage=()=>{
    title.innerHTML=data["english"].title;
    description.innerHTML=data["english"].description;
}

const changeLanguage=()=>{
    const language=document.getElementById('language');
    selectedLanguage=language.value;
    title.innerHTML=data[selectedLanguage].title;
    description.innerHTML=data[selectedLanguage].description;
}

var data={
    "english":
    {
        "title":"Hello World",
        "description":
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sint officia dolorem ex consequatur! Dicta corporis sequi, aperiam, fugiat quo aliquam ut est impedit magnam, temporibus perspiciatis sunt deserunt sed.Fugit recusandae minima adipisci voluptatum, aliquam quisquam eos? Earum, sunt voluptatibus sint ratione sequi quaerat. Facere ducimus aperiam dolor dicta nostrum necessitatibus ipsam expedita ea quibusdam facilis minus, deserunt ratione?Consequuntur fugit quisquam ut officiis explicabo impedit adipisci, error soluta labore aut aperiam, officia veniam consequatur? Provident, voluptatem deleniti. Nobis error accusantium id enim culpa explicabo ipsam doloribus vel! Laborum."
    },
    "tamil":
    {
        "title":"வணக்கம் உலகம்",
        "description":
        "அச்சுத்துறையிலும் வரைகலைத் துறையிலும், lorem ipsum (லோரம் இப்சம்) என்பது இடத்தை நிரப்பும் ஒரு வெற்று உரை ஆகும். பொதுவாக, ஒரு ஆவணம் அல்லது வடிவமைப்பின் எழுத்துரு, படிமங்கள், பக்க வடிவமைப்பு முதலிய தோற்றக்கூறுகளின் மேல் கவனத்தைக் குவிப்பதற்காக இவ்வுரை பயன்படுகிறது.சீசர் எழுதிய இலத்தீன ஆக்கங்களில் இருந்து சொற்களை மாற்றியும், நீக்கியும், கூட்டியும் எழுதி இந்த லோரம் இப்சம் உரை பெறப்படுகிறது. இதனால், அது பொருள் மிக்கதாகவோ முறையான இலத்தீர உரையாகவோ இருப்பதில்லை."
    },
    "malayalam":
    {
        "title":"ഹലോ വേൾഡ്",
        "description":"ഇന്ത്യയിൽ കേരള സംസ്ഥാനത്തിലും കേന്ദ്രഭരണപ്രദേശങ്ങളായ ലക്ഷദ്വീപിലും പുതുച്ചേരിയുടെ ഭാഗമായ മയ്യഴിയിലും തമിഴ്നാട്ടിലെ കന്യാകുമാരി ജില്ലയിലും നീലഗിരി ജില്ലയിലെ ഗൂഡല്ലൂർ താലൂക്കിലും സംസാരിക്കപ്പെടുന്ന ഭാഷയാണ് മലയാളം. ഇതു ദ്രാവിഡ ഭാഷാ കുടുംബത്തിൽപ്പെടുന്നു. ഇന്ത്യയിൽ ശ്രേഷ്ഠഭാഷാ പദവി ലഭിക്കുന്ന അഞ്ചാമത്തെ ഭാഷയാണ് മലയാളം. 2013 മേയ് 23-നു ചേർന്ന കേന്ദ്രമന്ത്രിസഭായോഗമാണ് മലയാളത്തെ ശ്രേഷ്ഠഭാഷയായി അംഗീകരിച്ചത് ഇന്ത്യൻ ഭരണഘടനയിലെ എട്ടാം ഷെഡ്യൂളിൽ ഉൾപ്പെടുത്തിയിരിക്കുന്ന ഇന്ത്യയിലെ ഇരുപത്തിരണ്ട് ഔദ്യോഗിക ഭാഷകളിൽ ഒന്നാണ് മലയാളം. മലയാള ഭാഷ കൈരളി, മലനാട്ട് ഭാഷ എന്നും അറിയപ്പെടുന്നു. കേരള സംസ്ഥാനത്തിലെ ഭരണഭാഷയും കൂടിയാണ്‌ മലയാളം. കേരളത്തിനും ലക്ഷദ്വീപിനും പുറമേ തമിഴ്നാട്ടിലെ ചില ഭാഗങ്ങളിലും കന്യാകുമാരി ജില്ല, നീലഗിരി ജില്ല കർണാടകയുടെ ദക്ഷിണ കന്നഡ ജില്ല, കൊടഗ് ഭാഗങ്ങളിലും ഗൾഫ് രാജ്യങ്ങൾ, സിംഗപ്പൂർ, മലേഷ്യ എന്നിവിടങ്ങളിലെ കേരളീയ പൈതൃകമുള്ള അനേകം ജനങ്ങളും മലയാളം ഉപയോഗിച്ചുപോരുന്നു. ദേശീയ ഭാഷയായി ഉൾപ്പെടുത്തിയത് മറ്റ് 21 ഭാഷകളുടേതു പോലെ തനതായ വ്യക്തിത്വം ഉള്ളതിനാലാണ്. മലയാള ഭാഷയുടെ ഉല്പത്തിയും പ്രാചീനതയും സംബന്ധിച്ച കാര്യങ്ങൾ ഇന്നും അവ്യക്തമാണ്. പഴയ തമിഴിനും മുൻപത്തെ മൂലദ്രാവിഡം ആകാം മലയാളത്തിന്റെ ആദ്യ രൂപം എന്നു കരുതുന്നു. യു. എ. ഇ.-യിലെ നാല് ഔദ്യോഗിക ഭാഷകളിൽ ഒന്നു മലയാളമാണ്."
    }

}
