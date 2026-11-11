import type { Guide, L } from '../types';

const t = (en: string, hi: string): L => ({ en, hi });

const guide: Guide = {
  slug: 'chalazion-treatment-in-lucknow',
  primaryKeyword: 'chalazion treatment in Lucknow',
  secondaryKeywords: ['chalazion surgery', 'chalazion removal', 'incision and curettage', 'chalazion vs stye', 'chalazion not going away', 'chalazion in children', 'eyelid lump treatment Lucknow'],
  hindiKeywords: ['पलक पर गांठ का इलाज', 'आंख की पलक पर गांठ', 'palak par ganth ka ilaj', 'aankh ki ganth ka operation', 'chalazion kya hota hai', 'अंजनी', 'आंख की फुंसी', 'गुहेरी'],

  metaTitle: t(
    'Chalazion Treatment in Lucknow | Dr Saumika Singh',
    'लखनऊ में चालाज़ियन (पलक की गांठ) का इलाज | डॉ. सौमिका सिंह'
  ),
  metaDescription: t(
    'Chalazion treatment in Lucknow by oculoplasty surgeon Dr Saumika Singh, Gomti Nagar: chalazion vs stye, home care, incision and curettage, recovery and risks.',
    'लखनऊ में आंख की पलक पर गांठ (चालाज़ियन/गुहेरी) का इलाज – डॉ. सौमिका सिंह, अलयंत्रा मेडिसिटी, गोमती नगर। अंजनी से फ़र्क, घरेलू देखभाल, छोटा ऑपरेशन, रिकवरी और जोखिम।'
  ),
  h1: t('Chalazion Treatment in Lucknow – Eyelid Lump That Won’t Go Away', 'लखनऊ में आंख की पलक पर गांठ (चालाज़ियन) का इलाज'),
  lead: t(
    'Chalazion treatment in Lucknow is offered by Dr. Saumika Singh, an oculoplasty surgeon at Alyantra Medicity Superspeciality Hospital, Gomti Nagar, for the firm eyelid lump that does not go away. A chalazion is a blocked oil gland in the eyelid, and many settle with a few weeks of warm compresses and eyelid hygiene. When a lump persists, grows, blurs vision or simply bothers you, a short procedure called incision and curettage drains it, usually through the inside of the eyelid so that no scar is expected on the skin. Because a lump that keeps returning needs a closer look, a proper eyelid examination always comes first.',
    'लखनऊ में आंख की पलक पर गांठ (चालाज़ियन/गुहेरी) का इलाज डॉ. सौमिका सिंह करती हैं, जो अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में ओकुलोप्लास्टी सर्जन हैं। चालाज़ियन (chalazion) पलक की तेल वाली ग्रंथि के बंद होने से बनी सख्त गांठ है, और कई बार यह कुछ हफ़्तों की गर्म सिकाई और पलक की सफ़ाई से अपने आप बैठ जाती है। अगर गांठ टिकी रहे, बढ़ती जाए, नज़र धुंधली करे या परेशान करे, तो “इन्सीज़न एंड क्यूरेटाज” नामक छोटी प्रक्रिया से उसे साफ़ किया जाता है, जो आमतौर पर पलक के अंदर की ओर से होती है, इसलिए त्वचा पर निशान की उम्मीद नहीं रहती। जो गांठ बार-बार लौटे उसे ज़्यादा ध्यान से देखना ज़रूरी है, इसलिए पहले पलक की पूरी जांच होती है।'
  ),
  atAGlance: [
    t('**What it is:** a blocked oil (meibomian) gland in the eyelid forming a firm, usually not very painful lump', '**यह क्या है:** पलक की तेल (मीबोमियन) ग्रंथि के बंद होने से बनी सख्त गांठ, जिसमें आमतौर पर ज़्यादा दर्द नहीं होता'),
    t('**First step:** warm compresses, gentle massage and eyelid hygiene for a few weeks', '**पहला कदम:** कुछ हफ़्तों तक गर्म सिकाई, हल्की मालिश और पलक की सफ़ाई'),
    t('**Procedure if needed:** incision and curettage, usually through the inside of the eyelid under local anaesthesia', '**ज़रूरत पड़ने पर:** इन्सीज़न एंड क्यूरेटाज, आमतौर पर पलक के अंदर से, लोकल एनेस्थीसिया में'),
    t('**Children:** may need general anaesthesia for a calm, safe procedure', '**बच्चे:** शांत और सुरक्षित प्रक्रिया के लिए जनरल एनेस्थीसिया की ज़रूरत पड़ सकती है'),
    t('**Hospital stay:** a day-care procedure, usually with an eye pad for a few hours', '**अस्पताल में रुकना:** डे-केयर प्रक्रिया, आमतौर पर कुछ घंटे आंख पर पैड'),
    t('**Where:** Alyantra Medicity Superspeciality Hospital, Gomti Nagar, Lucknow', '**कहां:** अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर, लखनऊ'),
  ],

  sections: [
    {
      id: 'what-is-chalazion',
      h2: t('What is a chalazion?', 'चालाज़ियन (पलक की गांठ) क्या होता है?'),
      paras: [
        t(
          'A chalazion is a firm lump in the upper or lower eyelid. The eyelids contain many tiny meibomian glands that release an oily secretion onto the eye surface. When the opening of one gland gets blocked, the oil collects, leaks into the surrounding tissue and causes a slow, sterile inflammation that the body walls off as a lump. It is not an infection and it is not contagious.',
          'चालाज़ियन ऊपरी या निचली पलक में बनी सख्त गांठ है। पलकों में बहुत सी छोटी मीबोमियन ग्रंथियां होती हैं जो आंख की सतह पर तेल जैसा स्राव छोड़ती हैं। जब किसी ग्रंथि का मुंह बंद हो जाता है, तो तेल जमा होकर आसपास के ऊतक में रिसता है और धीमी, बिना संक्रमण वाली सूजन बनाता है, जिसे शरीर एक गांठ के रूप में घेर लेता है। यह संक्रमण नहीं है और एक से दूसरे में नहीं फैलता।'
        ),
        t(
          'A chalazion usually grows over days to weeks, may be slightly tender at first, and then becomes a firm, rounded lump you can feel under the skin. Many people call it **पलक पर गांठ** or **गुहेरी** (the word गुहेरी is also used by some people for a stye). A large chalazion can press on the eye and cause blurred vision or astigmatism, and sometimes the lump becomes red and swollen when it is inflamed.',
          'चालाज़ियन आमतौर पर दिनों से हफ़्तों में बढ़ता है, शुरू में थोड़ा दुखता है, फिर त्वचा के नीचे एक सख्त, गोल गांठ बन जाता है। इसे लोग **पलक पर गांठ** या **गुहेरी** कहते हैं (कुछ लोग “गुहेरी” शब्द अंजनी के लिए भी इस्तेमाल करते हैं)। बड़ा चालाज़ियन आंख पर दबाव डालकर नज़र धुंधली या एस्टिगमैटिज़्म कर सकता है, और सूजन के समय गांठ लाल और फूली हुई हो सकती है।'
        ),
      ],
    },
    {
      id: 'chalazion-vs-stye',
      h2: t('Chalazion vs stye: what is the difference?', 'चालाज़ियन और अंजनी (स्टाई) में क्या फ़र्क है?'),
      paras: [
        t(
          'The two are often confused, and the first few days can look alike. A stye (hordeolum, **अंजनी** or **आंख की फुंसी**) is a painful, infected lash follicle or gland at the eyelid edge. A chalazion is a blocked oil gland that sits deeper in the lid. A stye can leave a chalazion behind after it heals.',
          'दोनों में अक्सर भ्रम होता है और शुरुआती दिनों में दिखने में एक-से लग सकते हैं। अंजनी (स्टाई/हॉर्डियोलम, **आंख की फुंसी**) पलक के किनारे पर पलक के बाल की जड़ या ग्रंथि का दर्द भरा संक्रमण है। चालाज़ियन पलक में गहराई में तेल ग्रंथि के बंद होने से बनता है। अंजनी ठीक होने के बाद कभी-कभी चालाज़ियन छोड़ जाती है।'
        ),
      ],
      table: {
        caption: t('General pattern only; an examination is needed to be sure which one you have.', 'सामान्य पैटर्न; सही निदान के लिए जांच ज़रूरी है।'),
        head: [t('Feature', 'विशेषता'), t('Chalazion (गुहेरी / पलक की गांठ)', 'चालाज़ियन (गुहेरी / पलक की गांठ)'), t('Stye (अंजनी / आंख की फुंसी)', 'स्टाई (अंजनी / आंख की फुंसी)')],
        rows: [
          [t('Cause', 'कारण'), t('Blocked meibomian oil gland; sterile inflammation', 'बंद मीबोमियन तेल ग्रंथि; बिना संक्रमण की सूजन'), t('Bacterial infection of a lash follicle or gland', 'पलक के बाल की जड़ या ग्रंथि में बैक्टीरिया का संक्रमण')],
          [t('Position', 'जगह'), t('Deeper in the lid, away from the lash line', 'पलक में गहराई में, पलक के बालों की कतार से दूर'), t('At the eyelid edge, near a lash', 'पलक के किनारे, किसी बाल के पास')],
          [t('Pain', 'दर्द'), t('Usually little or no pain once it has formed', 'बनने के बाद आमतौर पर कम या नहीं के बराबर दर्द'), t('Usually tender or painful, often red', 'आमतौर पर छूने पर दर्द, अक्सर लाल')],
          [t('Look and feel', 'दिखावट'), t('Firm, rounded lump under the skin', 'त्वचा के नीचे सख्त, गोल गांठ'), t('Red, swollen spot, sometimes with a yellow head of pus', 'लाल, फूला हुआ दाना, कभी-कभी पीले मवाद के सिरे के साथ')],
          [t('Usual course', 'आम रास्ता'), t('Slow; can last weeks to months', 'धीमा; हफ़्तों से महीनों तक रह सकता है'), t('Often settles or drains within days to a couple of weeks', 'अक्सर कुछ दिनों से दो हफ़्तों में बैठ जाता या फूट जाता है')],
          [t('Usual care', 'आम इलाज'), t('Warm compresses and hygiene first; incision and curettage if it persists', 'पहले गर्म सिकाई और सफ़ाई; टिकी रहे तो इन्सीज़न एंड क्यूरेटाज'), t('Warm compresses; antibiotics sometimes if the infection is spreading', 'गर्म सिकाई; संक्रमण फैलने पर कभी-कभी एंटीबायोटिक')],
        ],
      },
    },
    {
      id: 'home-care',
      h2: t('What can I do at home first? (warm compresses and lid hygiene)', 'पहले घर पर क्या करें? (गर्म सिकाई और पलक की सफ़ाई)'),
      paras: [
        t(
          'Warm compresses are the standard first step for both a chalazion and a stye. Warmth softens the thickened oil and helps the blocked gland open and drain. Many chalazia settle on their own over weeks to a few months, so a period of patient home care is reasonable unless the lump is large, affecting vision, or showing signs of infection.',
          'चालाज़ियन और अंजनी दोनों में गर्म सिकाई ही पहला मानक कदम है। गर्मी से गाढ़ा तेल नरम होता है और बंद ग्रंथि खुलकर निकासी कर पाती है। कई चालाज़ियन हफ़्तों से कुछ महीनों में अपने आप बैठ जाते हैं, इसलिए जब तक गांठ बड़ी न हो, नज़र पर असर न हो या संक्रमण के लक्षण न हों, कुछ समय धैर्य से घरेलू देखभाल करना उचित है।'
        ),
      ],
      bullets: [
        t('Hold a clean cloth soaked in comfortably warm (not scalding) water against the closed eyelid for 10–15 minutes, several times a day', 'साफ़ कपड़े को सहने लायक गुनगुने (जलाने वाले नहीं) पानी में भिगोकर बंद पलक पर 10–15 मिनट रखें, दिन में कई बार'),
        t('After the compress, gently massage the lump along the line of the eyelid with clean fingers to encourage drainage', 'सिकाई के बाद साफ़ उंगलियों से गांठ के आसपास पलक की दिशा में हल्की मालिश करें ताकि निकासी हो'),
        t('Clean the lash line daily with a mild eyelid cleanser or diluted baby shampoo on a clean cloth, if your doctor agrees', 'अगर डॉक्टर सहमत हों, तो रोज़ पलक की कतार को हल्के लिड क्लींज़र या पतले बेबी शैम्पू से साफ़ कपड़े से साफ़ करें'),
        t('Do not squeeze, prick or try to burst the lump — this can spread inflammation or infection', 'गांठ को दबाएं नहीं, सुई या किसी चीज़ से फोड़ने की कोशिश न करें — इससे सूजन या संक्रमण फैल सकता है'),
        t('Do not put kajal, surma, home remedies, leaves, oils or any unprescribed drops into the eye', 'आंख में काजल, सुरमा, घरेलू नुस्खे, पत्ते, तेल या बिना डॉक्टरी सलाह की ड्रॉप्स न डालें'),
        t('Avoid eye make-up and contact lenses until the lump has settled', 'गांठ बैठने तक आई मेकअप और कॉन्टैक्ट लेंस से बचें'),
      ],
      subsections: [
        {
          h3: t('Do I need antibiotics?', 'क्या एंटीबायोटिक की ज़रूरत है?'),
          paras: [
            t(
              'A plain chalazion is not an infection, so antibiotics usually do not help it. A doctor may prescribe antibiotic drops, ointment or tablets if the lump has become infected (red, hot and tender), or treat underlying eyelid-margin disease such as blepharitis or rosacea, which can keep blocking the glands. Do not start leftover or over-the-counter medicines on your own.',
              'सामान्य चालाज़ियन संक्रमण नहीं होता, इसलिए एंटीबायोटिक से आमतौर पर फ़ायदा नहीं होता। अगर गांठ में संक्रमण हो गया हो (लाल, गर्म और दुखती हुई), तो डॉक्टर एंटीबायोटिक ड्रॉप्स, ऑइंटमेंट या गोलियां दे सकते हैं, या पलक के किनारे की बीमारी, जैसे ब्लेफेराइटिस या रोज़ेशिया, का इलाज कर सकते हैं जो ग्रंथियों को बार-बार बंद करती है। पुरानी बची हुई या बिना पर्चे की दवाएं खुद शुरू न करें।'
            ),
          ],
        },
      ],
    },
    {
      id: 'when-surgery',
      h2: t('When is chalazion surgery (incision and curettage) advised?', 'चालाज़ियन का ऑपरेशन (इन्सीज़न एंड क्यूरेटाज) कब सुझाया जाता है?'),
      paras: [
        t(
          'Chalazion removal is not needed for every lump. It is usually considered when:',
          'हर गांठ को निकालने की ज़रूरत नहीं होती। आमतौर पर ऑपरेशन तब सोचा जाता है जब:'
        ),
      ],
      bullets: [
        t('the lump has not gone away after several weeks to a few months of regular warm compresses and lid hygiene', 'कई हफ़्तों से कुछ महीनों तक नियमित गर्म सिकाई और सफ़ाई के बाद भी गांठ न जाए'),
        t('it is large, or it presses on the eye and blurs vision or causes astigmatism', 'गांठ बड़ी हो, या आंख पर दबाव डालकर नज़र धुंधली करे या एस्टिगमैटिज़्म बनाए'),
        t('it is repeatedly inflamed, or you are bothered by how it looks', 'बार-बार सूज जाए, या दिखने से आप परेशान हों'),
        t('it keeps coming back in the same place (this also needs the biopsy discussion below)', 'वही गांठ बार-बार उसी जगह लौटे (इसमें नीचे बताई बायोप्सी की चर्चा भी ज़रूरी है)'),
      ],
      subsections: [
        {
          h3: t('Is a steroid injection an option?', 'क्या स्टेरॉयड इंजेक्शन एक विकल्प है?'),
          paras: [
            t(
              'Some eye surgeons inject a small amount of steroid into the lump instead of operating, mainly for smaller lumps. It can leave the area lighter in colour or thin the skin, and it may not clear the lump fully, particularly in darker skin tones. Whether it suits you depends on the size and position of the lump and your skin; ask your surgeon to explain the options.',
              'कुछ नेत्र सर्जन ऑपरेशन के बजाय गांठ में थोड़ा-सा स्टेरॉयड इंजेक्ट करते हैं, खासकर छोटी गांठों में। इससे उस जगह की त्वचा का रंग हल्का हो सकता है या त्वचा पतली हो सकती है, और गांठ पूरी तरह साफ़ न भी हो, विशेषकर गहरे रंग की त्वचा में। यह आपके लिए ठीक है या नहीं, यह गांठ के आकार, जगह और त्वचा पर निर्भर है; अपने सर्जन से विकल्प समझ लें।'
            ),
          ],
        },
      ],
    },
    {
      id: 'procedure',
      h2: t('How is chalazion removal done?', 'चालाज़ियन का छोटा ऑपरेशन कैसे होता है?'),
      paras: [
        t(
          'Incision and curettage is a short day-care procedure that Dr. Saumika Singh performs for chalazion in adults and older children who can stay still.',
          'इन्सीज़न एंड क्यूरेटाज एक छोटी डे-केयर प्रक्रिया है, जो डॉ. सौमिका सिंह वयस्कों और उन बड़े बच्चों में करती हैं जो स्थिर रह सकें।'
        ),
        t(
          'The procedure itself is usually short, and most people go home the same day with ointment and written aftercare advice. You can usually eat normally beforehand unless you are told otherwise; tell the team about blood-thinning medicines and any allergies. The usual steps are:',
          'प्रक्रिया आमतौर पर छोटी होती है, और ज़्यादातर लोग उसी दिन ऑइंटमेंट और लिखित देखभाल निर्देशों के साथ घर जाते हैं। जब तक अलग से न बताया जाए, आमतौर पर पहले सामान्य खाना खा सकते हैं; ब्लड थिनर दवाओं और किसी भी एलर्जी के बारे में टीम को बताएं। आम चरण:'
        ),
      ],
      steps: [
        t('Your eyelid and the lump are examined, and the plan and risks are explained before you sign the consent', 'पलक और गांठ की जांच होती है, और सहमति पर हस्ताक्षर से पहले योजना और जोखिम समझाए जाते हैं'),
        t('Local anaesthetic is injected into the eyelid; the first sting is brief, after which the area goes numb', 'पलक में लोकल एनेस्थीसिया का इंजेक्शन दिया जाता है; शुरू में थोड़ी देर चुभन होती है, फिर जगह सुन्न हो जाती है'),
        t('A small clamp holds the eyelid steady, protects the eye and limits bleeding', 'एक छोटा क्लैंप पलक को स्थिर रखता है, आंख को बचाता है और खून बहना सीमित करता है'),
        t('A small cut is usually made from the inside surface of the lid, so there is normally no visible mark on the skin; sometimes a skin cut is needed for a lump that points outwards', 'आमतौर पर पलक की अंदरूनी सतह से छोटा चीरा लगाया जाता है, इसलिए त्वचा पर सामान्यतः कोई निशान नहीं दिखता; बाहर की ओर उभरी गांठ में कभी-कभी त्वचा पर चीरा लगाना पड़ता है'),
        t('The thick contents and the lining of the lump are scooped out (curettage); the material is often sent for laboratory examination, especially if the lump has come back before', 'गांठ की गाढ़ी सामग्री और उसकी अंदरूनी परत खुरचकर निकाली जाती है (क्यूरेटाज); यह सामग्री अक्सर लैब जांच के लिए भेजी जाती है, खासकर जब गांठ पहले भी लौट चुकी हो'),
        t('Firm pressure stops bleeding, antibiotic ointment is applied, and a pad is placed for a few hours', 'दबाव से खून रोका जाता है, एंटीबायोटिक ऑइंटमेंट लगाया जाता है और कुछ घंटों के लिए पैड रखा जाता है'),
      ],
    },
    {
      id: 'children',
      h2: t('Chalazion in children', 'बच्चों में चालाज़ियन'),
      paras: [
        t(
          'Chalazia are common in children too, and in most cases the first approach is the same: warm compresses and eyelid cleaning, with patience, because many settle without surgery. Treating any eyelid margin inflammation (blepharitis) helps prevent new ones. A child needs an eye check if the lump is large enough to press on the eye, as this can blur vision and, in young children, may affect how vision develops.',
          'बच्चों में भी चालाज़ियन आम है, और ज़्यादातर मामलों में पहला तरीका वही है: गर्म सिकाई और पलक की सफ़ाई, धैर्य के साथ, क्योंकि कई बिना ऑपरेशन के ठीक हो जाते हैं। पलक के किनारे की सूजन (ब्लेफेराइटिस) का इलाज नए चालाज़ियन रोकने में मदद करता है। अगर गांठ इतनी बड़ी हो कि आंख पर दबाव डाले, तो बच्चे की आंख की जांच ज़रूरी है, क्योंकि इससे नज़र धुंधली हो सकती है और छोटे बच्चों में नज़र के विकास पर असर पड़ सकता है।'
        ),
        t(
          'If a child does need the lump drained, young children usually cannot stay still with only local anaesthesia, so general anaesthesia (the child is asleep) is often advised. The anaesthetist and surgeon will discuss fasting, safety and aftercare with the parents beforehand.',
          'अगर बच्चे की गांठ निकालनी ही पड़े, तो छोटे बच्चे केवल लोकल एनेस्थीसिया में स्थिर नहीं रह पाते, इसलिए अक्सर जनरल एनेस्थीसिया (बच्चा सोया हुआ) की सलाह दी जाती है। एनेस्थेटिस्ट और सर्जन माता-पिता से पहले ही खाली पेट रहने, सुरक्षा और देखभाल पर बात करेंगे।'
        ),
      ],
    },
    {
      id: 'recovery-and-risks',
      h2: t('Recovery and risks after chalazion surgery', 'ऑपरेशन के बाद रिकवरी और जोखिम'),
      subsections: [
        {
          h3: t('What to expect afterwards', 'बाद में क्या उम्मीद करें'),
          bullets: [
            t('The pad is usually removed after a few hours; the eyelid may be swollen and slightly bruised for several days', 'पैड आमतौर पर कुछ घंटे बाद हटा दिया जाता है; पलक कुछ दिनों तक सूजी और हल्की नीली रह सकती है'),
            t('Light bleeding or blood-stained tears on the first day is common; gentle clean tissue is enough, do not rub', 'पहले दिन हल्का खून या खून मिले आंसू आना आम है; साफ़ टिश्यू से हल्के से पोंछें, मलें नहीं'),
            t('Use the prescribed ointment or drops exactly as advised; avoid eye make-up, swimming and touching the lid until you are cleared', 'निर्धारित ऑइंटमेंट या ड्रॉप्स निर्देशानुसार लगाएं; अनुमति मिलने तक आई मेकअप, तैराकी और पलक को छूने से बचें'),
            t('Healing varies; the lid can feel slightly firm for a few weeks as it settles', 'ठीक होने की गति अलग-अलग होती है; पलक कुछ हफ़्तों तक थोड़ी सख्त महसूस हो सकती है'),
          ],
        },
        {
          h3: t('Possible risks', 'संभावित जोखिम'),
          bullets: [
            t('The chalazion can come back, and new ones can form, especially if blepharitis or rosacea continues', 'चालाज़ियन लौट सकता है, और नए भी बन सकते हैं, खासकर अगर ब्लेफेराइटिस या रोज़ेशिया बनी रहे'),
            t('Bruising, bleeding or infection', 'नील, खून बहना या संक्रमण'),
            t('A small notch in the lid edge or loss or misdirection of a few eyelashes (uncommon)', 'पलक के किनारे में छोटा गड्ढा या कुछ बालों का झड़ना/टेढ़ा उगना (कम होता है)'),
            t('A skin mark or colour change if a skin cut was needed', 'अगर त्वचा पर चीरा लगाना पड़ा हो तो निशान या रंग में बदलाव'),
            t('Residual hardness that settles slowly, or incomplete clearance needing a second procedure', 'बची हुई सख्ती जो धीरे-धीरे बैठती है, या अधूरी सफ़ाई जिसके लिए दूसरी बार प्रक्रिया ज़रूरी हो'),
          ],
        },
      ],
    },
    {
      id: 'biopsy-and-urgent',
      h2: t('When an eyelid lump needs a biopsy, or urgent care', 'पलक की गांठ में बायोप्सी या तुरंत इलाज कब ज़रूरी है'),
      paras: [
        t(
          'Most chalazia are harmless, but not every lump that looks like one is a chalazion. A lump that returns in exactly the same spot, or has unusual features such as lash loss over it, a distorted lid edge or bleeding, should be assessed and the removed tissue examined under the microscope. This is explained in detail in our guide on [recurring chalazion and when it could be eyelid cancer](/recurring-chalazion-or-eyelid-cancer).',
          'ज़्यादातर चालाज़ियन नुकसानदेह नहीं होते, पर चालाज़ियन जैसी दिखने वाली हर गांठ चालाज़ियन नहीं होती। जो गांठ ठीक उसी जगह बार-बार लौटे, या जिसमें असामान्य लक्षण हों, जैसे उस पर बाल झड़ना, पलक का किनारा बिगड़ना या खून आना, उसकी जांच करवानी चाहिए और निकाले गए ऊतक को माइक्रोस्कोप से देखा जाना चाहिए। इसका विस्तार से वर्णन हमारे [बार-बार होने वाले चालाज़ियन और कब यह पलक का कैंसर हो सकता है](/recurring-chalazion-or-eyelid-cancer) वाले गाइड में है।'
        ),
      ],
      callout: {
        tone: 'urgent',
        title: t('Same-day or emergency care', 'उसी दिन या इमरजेंसी में दिखाएं'),
        text: t(
          'See an eye doctor the same day, or go to an emergency department, if an eyelid lump comes with swelling and redness spreading across the eyelid or face, fever, pain when moving the eye, reduced vision, double vision or the eye looking pushed forward. These can be signs of a spreading infection of the eyelid or around the eye (cellulitis), which needs prompt treatment and is not a problem to manage with warm compresses at home.',
          'अगर पलक की गांठ के साथ पलक या चेहरे पर फैलती सूजन और लालिमा, बुखार, आंख हिलाने पर दर्द, नज़र कम होना, दोहरा दिखना या आंख बाहर की ओर उभरी दिखे, तो उसी दिन नेत्र डॉक्टर को दिखाएं या इमरजेंसी में जाएं। ये पलक या आंख के आसपास फैलते संक्रमण (सेल्युलाइटिस) के लक्षण हो सकते हैं, जिसमें तुरंत इलाज चाहिए; इसे घर पर गर्म सिकाई से संभालने की कोशिश न करें।'
        ),
      },
    },
  ],

  whyDrSaumika: [
    t('Long-term fellowship in Oculoplasty & Ocular Oncology at Dr. Shroff’s Charity Eye Hospital, New Delhi, after MS in Ophthalmology', 'नेत्र विज्ञान में MS के बाद डॉ. श्रॉफ़्स चैरिटी आई हॉस्पिटल, नई दिल्ली से ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी में दीर्घकालिक फ़ेलोशिप'),
    t('Her practice includes chalazion incision and curettage as well as eyelid lump removal and biopsy, so an unusual lump can be examined properly rather than assumed to be a chalazion', 'उनके कार्य में चालाज़ियन का इन्सीज़न एंड क्यूरेटाज तथा पलक की गांठ निकालना और बायोप्सी शामिल है, इसलिए असामान्य गांठ को सिर्फ़ चालाज़ियन मान लेने के बजाय ठीक से जांचा जा सकता है'),
    t('Trained in ocular oncology, so a lump that returns is assessed with eyelid tumours in mind', 'ओकुलर ऑन्कोलॉजी में प्रशिक्षित, इसलिए बार-बार लौटने वाली गांठ को पलक के ट्यूमर की संभावना ध्यान में रखकर जांचा जाता है'),
    t('Registered with the Uttar Pradesh Medical Council (Reg. No. 137106); consults at Alyantra Medicity Superspeciality Hospital, Gomti Nagar', 'उत्तर प्रदेश मेडिकल काउंसिल में पंजीकृत (पंजीकरण सं. 137106); अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श'),
  ],

  faqs: [
    {
      q: t('Can a chalazion go away on its own?', 'क्या चालाज़ियन अपने आप ठीक हो सकता है?'),
      a: t('Yes, many do. With regular warm compresses, gentle massage and eyelid cleaning, a chalazion often settles over weeks to a few months. If it is still there after that, is large, affects your vision or keeps returning, ask for an eyelid examination to discuss drainage.', 'हां, कई चालाज़ियन अपने आप ठीक हो जाते हैं। नियमित गर्म सिकाई, हल्की मालिश और पलक की सफ़ाई से अक्सर यह हफ़्तों से कुछ महीनों में बैठ जाता है। उसके बाद भी गांठ रहे, बड़ी हो, नज़र पर असर डाले या लौटती रहे, तो पलक की जांच करवाएं और निकालने पर चर्चा करें।'),
    },
    {
      q: t('My chalazion is not going away. What should I do?', 'मेरी पलक की गांठ ठीक नहीं हो रही। क्या करूं?'),
      a: t('If warm compresses and lid hygiene for several weeks have not helped, see an eye doctor. Options include continuing home care, a steroid injection for suitable small lumps, or incision and curettage. A lump that returns in the same place should be checked more carefully.', 'अगर कई हफ़्तों की गर्म सिकाई और पलक की सफ़ाई से फ़र्क न पड़े, तो नेत्र डॉक्टर को दिखाएं। विकल्पों में घरेलू देखभाल जारी रखना, उपयुक्त छोटी गांठ में स्टेरॉयड इंजेक्शन, या इन्सीज़न एंड क्यूरेटाज शामिल हैं। जो गांठ उसी जगह लौटे, उसे ज़्यादा ध्यान से जांचना चाहिए।'),
    },
    {
      q: t('Is chalazion surgery painful?', 'क्या चालाज़ियन के ऑपरेशन में दर्द होता है?'),
      a: t('The local anaesthetic injection stings briefly, after which the eyelid is numb and most people feel pressure or tugging rather than pain. Afterwards there is usually mild soreness, swelling and some bruising for a few days, which simple painkillers usually manage.', 'लोकल एनेस्थीसिया का इंजेक्शन थोड़ी देर चुभता है, उसके बाद पलक सुन्न हो जाती है और ज़्यादातर लोगों को दर्द नहीं बल्कि दबाव या खिंचाव महसूस होता है। बाद में कुछ दिन हल्का दर्द, सूजन और नील आम है, जिसे सामान्य दर्द-निवारक आमतौर पर संभाल लेते हैं।'),
    },
    {
      q: t('Will chalazion removal leave a scar?', 'क्या चालाज़ियन निकालने के बाद निशान रहेगा?'),
      a: t('When the cut is made from the inside of the eyelid, there is normally no mark on the skin. If a lump points outwards and a skin cut is needed, a fine line can remain, which usually fades. Healing varies from person to person.', 'जब चीरा पलक के अंदर की ओर से लगाया जाता है, तो त्वचा पर आमतौर पर कोई निशान नहीं रहता। अगर गांठ बाहर की ओर उभरी हो और त्वचा पर चीरा लगाना पड़े, तो हल्की रेखा रह सकती है, जो आमतौर पर फीकी पड़ जाती है। हर व्यक्ति में भराव अलग होता है।'),
    },
    {
      q: t('Can a chalazion come back after removal?', 'क्या चालाज़ियन निकालने के बाद दोबारा आ सकता है?'),
      a: t('Yes. New chalazia can form, especially if blepharitis, rosacea or blocked glands continue, so long-term eyelid hygiene matters. If a lump returns in the same spot, the removed tissue should be examined in a laboratory to make sure it is not something else.', 'हां। नए चालाज़ियन बन सकते हैं, खासकर अगर ब्लेफेराइटिस, रोज़ेशिया या ग्रंथियों का बंद होना जारी रहे, इसलिए लंबे समय तक पलक की सफ़ाई ज़रूरी है। अगर गांठ उसी जगह लौटे, तो निकाले गए ऊतक की लैब जांच करवाएं ताकि पक्का हो कि यह कुछ और नहीं है।'),
    },
    {
      q: t('What is the difference between a stye and a chalazion?', 'अंजनी (स्टाई) और चालाज़ियन में क्या अंतर है?'),
      a: t('A stye (अंजनी, आंख की फुंसी) is a painful infected spot at the eyelid edge near a lash. A chalazion is a firmer, usually not very painful lump caused by a blocked oil gland deeper in the lid. Both start with warm compresses, but only a stye that is spreading usually needs antibiotics.', 'अंजनी (स्टाई, आंख की फुंसी) पलक के किनारे बाल के पास दर्द भरा संक्रमित दाना है। चालाज़ियन पलक में गहराई में तेल ग्रंथि के बंद होने से बनी सख्त गांठ है, जिसमें आमतौर पर ज़्यादा दर्द नहीं होता। दोनों में शुरुआत गर्म सिकाई से होती है, पर एंटीबायोटिक आमतौर पर तभी चाहिए जब अंजनी में संक्रमण फैल रहा हो।'),
    },
    {
      q: t('Does my child need surgery for a chalazion?', 'क्या मेरे बच्चे के चालाज़ियन के लिए ऑपरेशन ज़रूरी है?'),
      a: t('Often not. Many children’s chalazia settle with warm compresses and lid cleaning. Surgery is considered if the lump is large, presses on the eye, becomes repeatedly inflamed or does not improve over months, and usually needs general anaesthesia in young children.', 'अक्सर नहीं। बच्चों के कई चालाज़ियन गर्म सिकाई और पलक की सफ़ाई से बैठ जाते हैं। ऑपरेशन तब सोचा जाता है जब गांठ बड़ी हो, आंख पर दबाव डाले, बार-बार सूजे या महीनों में न सुधरे, और छोटे बच्चों में आमतौर पर जनरल एनेस्थीसिया चाहिए।'),
    },
    {
      q: t('Which doctor treats chalazion in Lucknow?', 'लखनऊ में चालाज़ियन का इलाज कौन करता है?'),
      a: t('Any ophthalmologist can assess a chalazion; an oculoplastic surgeon adds focused training in eyelid surgery and eyelid lumps. In Lucknow, Dr. Saumika Singh sees patients with chalazion at Alyantra Medicity Superspeciality Hospital, Gomti Nagar, by appointment.', 'चालाज़ियन की जांच कोई भी नेत्र रोग विशेषज्ञ कर सकता है; ओकुलोप्लास्टिक सर्जन के पास पलक की सर्जरी और पलक की गांठों का अतिरिक्त प्रशिक्षण होता है। लखनऊ में डॉ. सौमिका सिंह अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में अपॉइंटमेंट पर चालाज़ियन के मरीज़ देखती हैं।'),
    },
  ],

  cta: {
    title: t('Book an eyelid lump assessment in Lucknow', 'लखनऊ में पलक की गांठ की जांच बुक करें'),
    text: t('Bring any earlier eye reports or biopsy results, a list of your medicines and, if you have them, photographs showing when the lump first appeared and how it has changed.', 'पुरानी आंखों की रिपोर्ट या बायोप्सी रिज़ल्ट, अपनी दवाओं की सूची और हो सके तो वे तस्वीरें साथ लाएं जिनमें गांठ पहली बार कब दिखी और कैसे बदली, यह दिखे।'),
  },

  related: [
    { path: '/recurring-chalazion-or-eyelid-cancer', label: t('Recurring chalazion: could it be something else?', 'बार-बार होने वाला चालाज़ियन: क्या यह कुछ और हो सकता है?') },
    { path: '/surgical-outcomes/tarsal-cyst-misdiagnosed-chalazion', label: t('Case study: tarsal cyst mistaken for chalazion', 'केस स्टडी: चालाज़ियन समझी गई टार्सल सिस्ट') },
    { path: '/eyelid-cancer-signs-and-treatment', label: t('Eyelid cancer: signs and treatment', 'पलक का कैंसर: लक्षण और इलाज') },
    { path: '/services/eyelid-disorders-eyelid-surgery', label: t('Eyelid surgery in Lucknow (all eyelid conditions)', 'लखनऊ में पलक सर्जरी (सभी पलक समस्याएं)') },
    { path: '/oculoplastic-surgeon-in-lucknow', label: t('About oculoplastic surgery in Lucknow', 'लखनऊ में ओकुलोप्लास्टिक सर्जरी के बारे में') },
    { path: '/oculoplasty-consultation-what-to-expect', label: t('What to expect at an oculoplasty consultation', 'ओकुलोप्लास्टी परामर्श में क्या होता है') },
  ],

  references: [
    { label: 'What are chalazia and styes?', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/diseases/what-are-chalazia-styes' },
    { label: 'Why do I have lingering styes on my eyes?', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/diseases/stye-chalazion' },
    { label: 'Chalazion', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Chalazion' },
    { label: 'Stye', source: 'NHS', url: 'https://www.nhs.uk/conditions/stye/' },
    { label: 'Hordeolum (Stye) (StatPearls)', source: 'NCBI Bookshelf, U.S. National Library of Medicine', url: 'https://www.ncbi.nlm.nih.gov/books/NBK459349/' },
  ],

  schema: {
    type: 'MedicalProcedure',
    name: 'Chalazion incision and curettage',
    alternateName: ['Chalazion surgery', 'Chalazion removal'],
    procedureType: 'SurgicalProcedure',
    bodyLocation: 'Eyelid',
  },

  reviewerNotes: [
    'Confirm the procedure is performed under local anaesthesia in adults and older children, and general anaesthesia for young children; confirm the age cut-off you use.',
    'Confirm the typical duration of the procedure (deliberately stated only as "short"; Batch 1 checklist mentions "20-minute") and day-care discharge.',
    'Confirm the incision approach: transconjunctival (from inside the lid) as the usual route, skin incision for lumps pointing outwards.',
    'Confirm whether curetted material is routinely sent for histopathology or only for recurrent/atypical lumps (text says "often ... especially if the lump has come back before").',
    'Confirm whether you offer intralesional steroid injection; the text describes it neutrally as something some surgeons use. Delete the subsection if you do not.',
    'Confirm post-op routine: pad for a few hours, antibiotic ointment; do not add drug names or doses.',
    'Confirm "several weeks to a few months" of home care before surgery is your usual advice, and the compress timing (10–15 minutes, several times a day, AAO range).',
    'Confirm the risk list (recurrence, bruising, lid notch, lash loss/misdirection, skin mark).',
    'Confirm that the Hindi terms are acceptable: चालाज़ियन / गुहेरी for chalazion (also used by some for stye) and अंजनी / आंख की फुंसी for stye.',
    'References: AAO what-are-chalazia-styes, AAO stye-chalazion, EyeWiki Chalazion and NHS Stye were fetched and verified. StatPearls NBK459349 (Hordeolum) could not be fetched (reCAPTCHA) but was confirmed to exist via Europe PMC in the keyword research. NHS has no chalazion page, so the NHS stye page is cited for stye information.',
  ],
};

export default guide;
