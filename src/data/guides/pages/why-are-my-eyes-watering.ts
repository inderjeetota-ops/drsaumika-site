import type { Guide, L } from '../types';

const t = (en: string, hi: string): L => ({ en, hi });

const guide: Guide = {
  slug: 'why-are-my-eyes-watering',
  primaryKeyword: 'why are my eyes watering',
  secondaryKeywords: ['watering eyes causes', 'watery eyes in adults', 'epiphora', 'blocked tear duct adults symptoms', 'one eye watering', 'why do my eyes keep watering'],
  hindiKeywords: ['आंख से पानी क्यों आता है', 'आंखों से पानी आना कौन सी बीमारी है', 'एक आंख से पानी आना', 'आंखों से पानी आना घरेलू उपाय', 'aankh se pani kyu aata hai'],

  metaTitle: t(
    'Why Are My Eyes Watering? Causes & When to Worry | Dr Saumika',
    'आंखों से पानी क्यों आता है? कारण और कब दिखाएं | डॉ. सौमिका सिंह'
  ),
  metaDescription: t(
    'Why are my eyes watering? Causes of watery eyes in adults, blocked tear duct symptoms, red flags and treatment, by oculoplasty surgeon Dr Saumika Singh, Lucknow.',
    'आंखों से पानी आना क्यों होता है? बड़ों में कारण, बंद आंसू नली के लक्षण, खतरे के संकेत और इलाज – ओकुलोप्लास्टी सर्जन डॉ. सौमिका सिंह, लखनऊ से जानें।'
  ),
  h1: t('Why Are My Eyes Watering? Causes, Tests and When to Worry', 'आंखों से पानी क्यों आता है? कारण, जांच और कब चिंता करें'),
  lead: t(
    'Why are my eyes watering? Eyes water either because they make more tears than they can handle, or because the tears they make cannot drain away through the tear passage into the nose. The cause is usually one of a few common and treatable problems: a dry or irritated eye surface, eyelid-edge inflammation (blepharitis), allergy, an eyelid that has turned in or out, a narrowed drainage opening, or a blocked tear duct. Doctors call constant watering epiphora. Because the right treatment depends entirely on which group your problem belongs to, a proper eye and tear-drainage examination matters more than guessing or trying drops at random.',
    'आंखों से पानी आना (वॉटरिंग या एपिफोरा) तब होता है जब आंख में आंसू ज़रूरत से ज़्यादा बनते हैं, या बने हुए आंसू नाक की ओर निकल नहीं पाते। इसके पीछे आमतौर पर कुछ आम और इलाज योग्य कारण होते हैं: आंख की सतह का सूखापन या जलन, पलक के किनारे की सूजन (ब्लेफ़ेराइटिस), एलर्जी, अंदर या बाहर मुड़ी पलक, आंसू निकासी के छेद का सिकुड़ना, या बंद आंसू नली। सही इलाज इस पर निर्भर है कि समस्या किस समूह की है, इसलिए अंदाज़े से या यूं ही ड्रॉप्स डालने के बजाय आंख और आंसू निकासी तंत्र की ठीक से जांच करवाना ज़्यादा ज़रूरी है।'
  ),
  atAGlance: [
    t('**Two big groups:** too many tears made, or tears that cannot drain', '**दो बड़े समूह:** आंसू ज़्यादा बनना, या आंसू निकल न पाना'),
    t('**Surprising fact:** a dry eye can make the eye water more (reflex tearing)', '**हैरान करने वाली बात:** सूखी आंख से भी पानी ज़्यादा आ सकता है (रिफ़्लेक्स टियरिंग)'),
    t('**Key test:** a simple syringing (irrigation) of the tear passage, plus an eyelid and eye-surface exam', '**मुख्य जांच:** आंसू नली की सिरिंजिंग (धुलाई) और पलक व आंख की सतह की जांच'),
    t('**Treatment:** depends on the cause, from lid hygiene and lubricants to eyelid surgery or DCR', '**इलाज:** कारण पर निर्भर – पलक की सफ़ाई और लुब्रिकेंट से लेकर पलक सर्जरी या DCR तक'),
    t('**Same-day care:** painful red eye with poor vision, injury or chemical splash, painful swelling at the inner corner', '**उसी दिन इलाज:** दर्द भरी लाल आंख के साथ नज़र कम होना, चोट या केमिकल, भीतरी कोने पर दर्द भरी सूजन'),
    t('**Where:** Alyantra Medicity Superspeciality Hospital, Gomti Nagar, Lucknow', '**कहां:** अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर, लखनऊ'),
  ],

  sections: [
    {
      id: 'why-do-eyes-water',
      h2: t('Why do my eyes keep watering? The short answer', 'आंख से पानी क्यों आता है? सीधा जवाब'),
      paras: [
        t(
          'Your eyes make tears all day to keep the surface smooth and clear. Extra tears normally drain through two tiny openings (puncta) at the inner corners of the eyelids, travel down small channels (canaliculi) into the tear sac, and then pass through the nasolacrimal duct into the nose. That is why your nose runs when you cry. Watering happens when this system is overloaded or blocked at any point.',
          'आपकी आंखें पूरे दिन आंसू बनाती रहती हैं ताकि सतह चिकनी और साफ़ रहे। अतिरिक्त आंसू पलकों के भीतरी कोनों पर दो छोटे छेदों (पंक्टा) से होकर छोटी नलियों (कैनालिकुली) के रास्ते आंसू की थैली में जाते हैं और फिर नासोलैक्रिमल नली से नाक में पहुंच जाते हैं। इसीलिए रोने पर नाक बहती है। इस तंत्र पर ज़रूरत से ज़्यादा बोझ पड़े या रास्ते में कहीं रुकावट आए, तो आंख से पानी बहने लगता है।'
        ),
        t(
          'So there are two broad groups. In the first, the eye is making **too many tears** because the surface is irritated, dry or inflamed. In the second, tear production is normal but **drainage is poor** because the opening, the eyelid position or the duct is not working. Some people, especially older adults, have a mixture of both.',
          'इसलिए मोटे तौर पर दो समूह हैं। पहले में आंख की सतह में जलन, सूखापन या सूजन के कारण **आंसू ज़रूरत से ज़्यादा बनते** हैं। दूसरे में आंसू सामान्य बनते हैं, पर छेद, पलक की स्थिति या नली ठीक से काम न करने से **निकासी कमज़ोर** होती है। कई लोगों में, खासकर बुज़ुर्गों में, दोनों कारण मिले-जुले होते हैं।'
        ),
      ],
    },
    {
      id: 'too-many-tears',
      h2: t('Group 1: causes of too many tears', 'समूह 1: आंसू ज़्यादा बनने के कारण'),
      subsections: [
        {
          h3: t('Dry eye (yes, dry eyes can water)', 'सूखी आंख (हां, सूखी आंख से भी पानी आता है)'),
          paras: [
            t(
              'When the tear film is poor in quality or quantity, the eye surface becomes irritated and the eye reacts by flooding itself with watery tears. These reflex tears wash away quickly and do not lubricate well, so the eye can feel gritty and dry and still water. This is one of the most common reasons for watering that does not improve with simple measures.',
              'जब आंसू की परत की गुणवत्ता या मात्रा कम होती है, तो आंख की सतह में जलन होती है और आंख प्रतिक्रिया में पानी जैसे आंसू बहाने लगती है। ये रिफ़्लेक्स आंसू जल्दी बह जाते हैं और ठीक से चिकनाई नहीं देते, इसलिए आंख किरकिरी और सूखी लगते हुए भी पानी छोड़ सकती है। साधारण उपायों से ठीक न होने वाले पानी आने का यह एक बहुत आम कारण है।'
            ),
          ],
        },
        {
          h3: t('Blepharitis and meibomian gland disease', 'ब्लेफ़ेराइटिस और मीबोमियन ग्रंथि की समस्या'),
          paras: [
            t(
              'Inflamed, crusty eyelid edges and clogged oil glands in the lids upset the quality of the tear film. Typical clues are red, itchy or burning lid margins, flakes or crusts on the lashes in the morning, and symptoms that come and go. The [NHS guide to blepharitis](https://www.nhs.uk/conditions/blepharitis/) describes this common condition and its daily lid care.',
              'सूजी हुई, पपड़ी वाली पलक की किनारियां और पलकों की तेल ग्रंथियों में रुकावट आंसू की परत की गुणवत्ता बिगाड़ देती हैं। आम संकेत हैं: पलक की किनारियों का लाल, खुजलीदार या जलन भरा होना, सुबह पलकों पर पपड़ी या परतें, और लक्षणों का आना-जाना। इस आम समस्या और रोज़ की पलक-सफ़ाई के बारे में [NHS की ब्लेफ़ेराइटिस गाइड](https://www.nhs.uk/conditions/blepharitis/) देखें।'
            ),
          ],
        },
        {
          h3: t('Allergy, infection and other irritation', 'एलर्जी, संक्रमण और दूसरी जलन'),
          paras: [
            t(
              'Allergic conjunctivitis (itchy, red, watery eyes, often with sneezing), viral or bacterial conjunctivitis ([NHS: conjunctivitis](https://www.nhs.uk/conditions/conjunctivitis/)), smoke, dust, wind, screen strain, contact lenses and a speck or scratch on the cornea can all make the eyes water. Some eye drops and medicines can also irritate the surface. Watering that appears suddenly with pain or a gritty feeling needs an examination for a foreign body or corneal scratch.',
              'एलर्जिक कंजंक्टिवाइटिस (खुजली, लालिमा और पानी, अक्सर छींकों के साथ), वायरल या बैक्टीरियल कंजंक्टिवाइटिस ([NHS: कंजंक्टिवाइटिस](https://www.nhs.uk/conditions/conjunctivitis/)), धुआं, धूल, हवा, स्क्रीन का तनाव, कॉन्टैक्ट लेंस, और कॉर्निया पर कण या खरोंच – ये सब आंखों से पानी ला सकते हैं। कुछ आई ड्रॉप्स और दवाएं भी सतह में जलन कर सकती हैं। दर्द या किरकिराहट के साथ अचानक पानी आना शुरू हो, तो बाहरी कण या कॉर्निया की खरोंच की जांच ज़रूरी है।'
            ),
          ],
        },
        {
          h3: t('Eyelashes or eyelids rubbing the eye', 'पलकों के बाल या पलक का आंख से रगड़ना'),
          paras: [
            t(
              'If the eyelid has turned inwards ([entropion](/entropion-surgery-in-lucknow)) or lashes grow towards the eye (trichiasis), they scratch the surface with every blink. The eye waters, turns red and feels as if something is in it. This needs correcting, because long-term rubbing can damage the cornea.',
              'अगर पलक अंदर की ओर मुड़ी हो ([एंट्रोपियन](/entropion-surgery-in-lucknow)) या बाल आंख की ओर उगते हों (ट्राइकियासिस), तो हर झपकी में वे सतह को खरोंचते हैं। आंख से पानी आता है, लाल होती है और ऐसा लगता है जैसे कुछ गिरा हो। इसे ठीक करवाना ज़रूरी है, क्योंकि लंबे समय की रगड़ से कॉर्निया को नुकसान हो सकता है।'
            ),
          ],
        },
      ],
    },
    {
      id: 'poor-drainage',
      h2: t('Group 2: causes of poor tear drainage', 'समूह 2: आंसू की निकासी कमज़ोर होने के कारण'),
      paras: [
        t(
          'Here the eye is not producing too much, but the tears have nowhere to go. Watering is typically constant and spills down the cheek, and it is often worse in wind, cold or when looking down.',
          'यहां आंख ज़्यादा आंसू नहीं बनाती, लेकिन आंसुओं को जाने का रास्ता नहीं मिलता। पानी आमतौर पर लगातार रहता है और गाल पर बहता है, और अक्सर हवा, ठंड या नीचे देखने पर बढ़ जाता है।'
        ),
        t(
          'The [American Academy of Ophthalmology’s guide to blocked tear ducts](https://www.aao.org/eye-health/diseases/what-is-blocked-tear-duct) lists these adult causes and notes that the main sign is watery eyes or tears running down the face, sometimes worse after a cold or sinus infection. Babies have a different, usually self-resolving pattern, which is covered in [blocked tear duct in babies](/blocked-tear-duct-in-babies).',
          '[अमेरिकन एकेडमी ऑफ़ ऑप्थैल्मोलॉजी की बंद आंसू नली गाइड](https://www.aao.org/eye-health/diseases/what-is-blocked-tear-duct) बड़ों के ये कारण बताती है और कहती है कि मुख्य संकेत पानी भरी आंखें या गाल पर बहते आंसू हैं, जो कभी-कभी सर्दी-जुकाम या साइनस संक्रमण के बाद बढ़ जाते हैं। शिशुओं में पैटर्न अलग होता है और अक्सर अपने आप ठीक हो जाता है – इसके लिए [शिशुओं में बंद आंसू नली](/blocked-tear-duct-in-babies) देखें।'
        ),
      ],
      bullets: [
        t('**Lax or outward-turning lower eyelid ([ectropion](/ectropion-surgery-in-lucknow)):** the drainage opening no longer touches the tear film, so tears spill over', '**ढीली या बाहर मुड़ी निचली पलक ([एक्ट्रोपियन](/ectropion-surgery-in-lucknow)):** निकासी का छेद आंसू की परत से नहीं छूता, इसलिए आंसू छलक जाते हैं'),
        t('**Narrowed punctum (punctal stenosis):** the tiny opening shrinks with age, long-standing inflammation or some medicines', '**छेद का सिकुड़ना (पंक्टल स्टेनोसिस):** उम्र, लंबे समय की सूजन या कुछ दवाओं से छोटा-सा छेद सिकुड़ जाता है'),
        t('**Canalicular blockage:** the small channels between the punctum and the tear sac are narrowed or scarred, sometimes after infection, injury or certain treatments', '**कैनालिकुली में रुकावट:** छेद और आंसू की थैली के बीच की छोटी नलियां संक्रमण, चोट या कुछ इलाजों के बाद सिकुड़ या जम सकती हैं'),
        t('**Blocked nasolacrimal duct:** the most common reason for persistent watering in adults; causes include age-related narrowing, long-standing nose or sinus problems, nasal injury or scarring, and, rarely, a growth pressing on the duct', '**बंद नासोलैक्रिमल नली:** बड़ों में लगातार पानी आने का सबसे आम कारण; इसके कारणों में उम्र से सिकुड़न, नाक/साइनस की पुरानी समस्या, नाक की चोट या निशान, और कभी-कभी नली पर दबाव डालने वाली गांठ शामिल हैं'),
        t('**Infected tear sac (dacryocystitis):** a blocked duct that becomes infected, causing a painful, red swelling at the inner corner of the eye, sometimes with fever', '**आंसू की थैली का संक्रमण (डैक्रियोसिस्टाइटिस):** बंद नली में संक्रमण होने पर आंख के भीतरी कोने पर दर्द भरी, लाल सूजन, कभी-कभी बुखार के साथ'),
        t('**Facial nerve weakness:** a drooping lower lid after Bell’s palsy cannot pump tears towards the drain', '**चेहरे की नस की कमज़ोरी:** बेल्स पाल्सी के बाद लटकी निचली पलक आंसुओं को निकासी की ओर धकेल नहीं पाती'),
      ],
    },
    {
      id: 'clue-table',
      h2: t('Clues: what your symptoms may point to', 'संकेत: आपके लक्षण किस ओर इशारा कर सकते हैं'),
      paras: [
        t(
          'This table is a guide for understanding, not a diagnosis. Several causes can overlap, and only an examination can sort them out.',
          'यह तालिका समझने के लिए मार्गदर्शन है, निदान नहीं। कई कारण एक साथ हो सकते हैं और अलग-अलग पहचानना जांच से ही संभव है।'
        ),
      ],
      table: {
        head: [t('Clue', 'संकेत'), t('Possible cause', 'संभावित कारण'), t('Usual approach', 'आम इलाज')],
        rows: [
          [t('Gritty, burning, worse on screens; watering comes and goes', 'किरकिरापन, जलन, स्क्रीन पर बढ़ना; पानी आता-जाता है'), t('Dry eye with reflex tearing', 'सूखी आंख और रिफ़्लेक्स टियरिंग'), t('Lubricants, lid care, treating the cause of dryness', 'लुब्रिकेंट, पलक की सफ़ाई, सूखेपन के कारण का इलाज')],
          [t('Red, crusty, itchy lid edges; flakes on lashes in the morning', 'पलक की किनारियां लाल, पपड़ीदार, खुजलीदार; सुबह पलकों पर परतें'), t('Blepharitis / meibomian gland disease', 'ब्लेफ़ेराइटिस / मीबोमियन ग्रंथि की समस्या'), t('Daily warm compress and lid hygiene; medicines if the doctor advises', 'रोज़ गर्म सिकाई और पलक की सफ़ाई; डॉक्टर की सलाह पर दवाएं')],
          [t('Itchy, red, watery eyes with sneezing or a season pattern', 'खुजली, लालिमा, पानी के साथ छींकें या मौसमी पैटर्न'), t('Allergic conjunctivitis', 'एलर्जिक कंजंक्टिवाइटिस'), t('Avoiding triggers; allergy treatment advised by a doctor', 'ट्रिगर से बचाव; डॉक्टर द्वारा बताया एलर्जी का इलाज')],
          [t('Feels like a lash or grit in the eye; lid or lashes turned inwards', 'आंख में बाल या कण जैसा लगना; पलक या बाल अंदर की ओर'), t('Entropion, trichiasis', 'एंट्रोपियन, ट्राइकियासिस'), t('Lubrication for now; eyelid or lash correction', 'फ़िलहाल चिकनाई; पलक या बालों का सुधार')],
          [t('Sagging lower lid, red inner lid showing, tears spill on cheek', 'लटकती निचली पलक, अंदर की लाल परत दिखना, गाल पर आंसू'), t('Ectropion', 'एक्ट्रोपियन'), t('Lubrication; eyelid tightening surgery if symptoms persist', 'चिकनाई; लक्षण बने रहें तो पलक कसने की सर्जरी')],
          [t('Constant watering in wind or cold, no pain; lids look normal', 'हवा/ठंड में लगातार पानी, दर्द नहीं; पलकें सामान्य दिखती हैं'), t('Narrowed punctum or blocked tear passage', 'सिकुड़ा छेद या बंद आंसू मार्ग'), t('Tear-passage syringing, then a procedure to open or bypass the block', 'आंसू मार्ग की सिरिंजिंग, फिर रुकावट खोलने या बाइपास करने की प्रक्रिया')],
          [t('Watering plus sticky discharge, repeated infections, tears running down for months', 'पानी के साथ चिपचिपा स्राव, बार-बार संक्रमण, महीनों से बहते आंसू'), t('Blocked nasolacrimal duct', 'बंद नासोलैक्रिमल नली'), t('Assessment for DCR (a new drainage route into the nose)', 'DCR (नाक में नया निकासी मार्ग) के लिए जांच')],
          [t('Painful red swelling at the inner corner, with or without fever', 'भीतरी कोने पर दर्द भरी लाल सूजन, बुखार हो या न हो'), t('Infected tear sac (dacryocystitis)', 'आंसू की थैली का संक्रमण (डैक्रियोसिस्टाइटिस)'), t('Same-day medical care; antibiotics first, surgery later if needed', 'उसी दिन इलाज; पहले एंटीबायोटिक, ज़रूरत हो तो बाद में सर्जरी')],
        ],
      },
    },
    {
      id: 'red-flags',
      h2: t('When watering is an emergency', 'कब आंखों से पानी आना इमरजेंसी है'),
      paras: [
        t(
          'Most watering is an annoyance rather than an emergency, but certain combinations need prompt care. Do not wait for a routine appointment if you notice any of the following.',
          'ज़्यादातर मामलों में पानी आना परेशानी होती है, इमरजेंसी नहीं, लेकिन कुछ लक्षणों के साथ तुरंत इलाज चाहिए। नीचे के लक्षण दिखें तो नियमित अपॉइंटमेंट का इंतज़ार न करें।'
        ),
      ],
      callout: {
        tone: 'urgent',
        title: t('Get same-day or emergency eye care for', 'इन स्थितियों में उसी दिन या इमरजेंसी में नेत्र चिकित्सक को दिखाएं'),
        text: t(
          'A painful red eye with reduced vision or marked light sensitivity; any eye injury; a chemical splash (rinse the eye straight away with plenty of clean running water for several minutes, then go to hospital without waiting for symptoms); a painful, red, spreading swelling at the inner corner of the eye, especially with fever; blood in the tears; or a white spot on the clear front of the eye. These can mean a corneal ulcer, a deep injury or an infected tear sac, all of which need prompt treatment.',
          'आंख में दर्द और लालिमा के साथ नज़र कम होना या रोशनी से बहुत तकलीफ़; आंख में कोई भी चोट; केमिकल गिरना (तुरंत साफ़ बहते पानी से कई मिनट तक आंख धोएं, फिर लक्षणों का इंतज़ार किए बिना अस्पताल जाएं); आंख के भीतरी कोने पर दर्द भरी, लाल, फैलती सूजन, खासकर बुखार के साथ; आंसुओं में खून; या आंख के साफ़ अगले हिस्से पर सफ़ेद धब्बा। ये कॉर्नियल अल्सर, गहरी चोट या आंसू की थैली के संक्रमण के संकेत हो सकते हैं, जिनमें तुरंत इलाज ज़रूरी है।'
        ),
      },
    },
    {
      id: 'assessment',
      h2: t('How the cause of watering is found', 'पानी आने का कारण कैसे पता चलता है'),
      paras: [
        t(
          'The aim is to answer one question: is this too many tears, poor drainage, or both? At a visit with Dr. Saumika Singh in Lucknow, assessment usually includes some or all of the following:',
          'लक्ष्य एक सवाल का जवाब ढूंढना है: आंसू ज़्यादा बन रहे हैं, निकासी कमज़ोर है, या दोनों? लखनऊ में डॉ. सौमिका सिंह के साथ परामर्श में आमतौर पर इनमें से कुछ या सभी जांचें होती हैं:'
        ),
      ],
      steps: [
        t('A history: one eye or both, constant or occasional, worse outdoors, discharge, past infections, nose or sinus problems, injury, eye drops and other medicines', 'इतिहास: एक आंख या दोनों, लगातार या कभी-कभी, बाहर ज़्यादा, स्राव, पुराने संक्रमण, नाक/साइनस की समस्या, चोट, आई ड्रॉप्स और दूसरी दवाएं'),
        t('A slit-lamp (microscope) examination of the eyelid edges, lashes, eyelid position, eye surface and tear film, including checking the tiny drainage openings', 'स्लिट-लैंप (माइक्रोस्कोप) से पलक की किनारियों, बालों, पलक की स्थिति, आंख की सतह और आंसू की परत की जांच, जिसमें छोटे निकासी छेदों की जांच भी शामिल है'),
        t('A dye test: a drop of harmless dye is placed in the eye to see how well it clears away, which shows whether drainage is working', 'डाई टेस्ट: आंख में हानिरहित रंग की बूंद डालकर देखा जाता है कि वह कितनी अच्छी तरह निकलता है, जिससे पता चलता है कि निकासी चल रही है या नहीं'),
        t('Syringing (lacrimal irrigation): saline is gently flushed through the drainage opening after numbing drops to see whether it reaches the nose or comes back, and where the block is', 'सिरिंजिंग (लैक्रिमल इरिगेशन): सुन्न करने वाली ड्रॉप्स के बाद निकासी छेद से हल्के से सलाइन डाला जाता है, ताकि देखा जा सके कि वह नाक तक पहुंचता है या वापस आता है, और रुकावट कहां है'),
        t('When needed, a nasal examination or imaging such as a scan to look at the duct, the nose and the sinuses, especially if a growth or long-standing nose disease is suspected', 'ज़रूरत हो तो नाक की जांच या नली, नाक और साइनस देखने के लिए स्कैन जैसी इमेजिंग, खासकर जब गांठ या नाक की पुरानी बीमारी का शक हो'),
      ],
    },
    {
      id: 'treatment',
      h2: t('Treatment for watering eyes', 'आंखों से पानी आने का इलाज'),
      paras: [
        t(
          'There is no single treatment, because watering is a symptom of many different problems. Treatment follows the cause, and results vary from person to person.',
          'कोई एक इलाज नहीं है, क्योंकि पानी आना कई अलग समस्याओं का लक्षण है। इलाज कारण के अनुसार होता है और परिणाम हर व्यक्ति में अलग हो सकते हैं।'
        ),
      ],
      subsections: [
        {
          h3: t('If too many tears are being made', 'अगर आंसू ज़्यादा बन रहे हैं'),
          paras: [
            t(
              'The surface is treated: lid hygiene and warm compresses for blepharitis and meibomian gland disease, lubricating drops for dry eye, treatment of allergy or infection, and removing any irritant. Medicines, including drops for blepharitis or allergy, should be used as prescribed by a doctor. If an inturned or outward-turned eyelid is the irritant, it is corrected surgically.',
              'सतह का इलाज किया जाता है: ब्लेफ़ेराइटिस और मीबोमियन ग्रंथि की समस्या में पलक की सफ़ाई और गर्म सिकाई, सूखी आंख में चिकनाई वाली ड्रॉप्स, एलर्जी या संक्रमण का इलाज, और जलन के कारण को हटाना। ब्लेफ़ेराइटिस या एलर्जी की ड्रॉप्स समेत सभी दवाएं डॉक्टर के बताए अनुसार ही इस्तेमाल करें। अगर अंदर या बाहर मुड़ी पलक जलन का कारण है, तो उसे सर्जरी से ठीक किया जाता है।'
            ),
          ],
        },
        {
          h3: t('If tears cannot drain', 'अगर आंसू निकल नहीं पा रहे'),
          paras: [
            t(
              'A loose or outward-turned lid is tightened ([ectropion repair](/ectropion-surgery-in-lucknow)). A narrowed punctum can sometimes be widened with a small procedure. A partly narrowed passage may occasionally be opened by syringing or other lacrimal techniques. A complete blockage of the nasolacrimal duct usually needs a new drainage route into the nose, called dacryocystorhinostomy (DCR). Dr. Singh performs external DCR; endoscopic DCR, done through the nose, is a technique that also exists. Read more in [DCR surgery in Lucknow](/dcr-surgery-in-lucknow) or the [watering eyes and tear drainage service page](/services/watering-eyes-tear-drainage-disorders/dcr).',
              'ढीली या बाहर मुड़ी पलक को कसा जाता है ([एक्ट्रोपियन की मरम्मत](/ectropion-surgery-in-lucknow))। सिकुड़े छेद को कभी-कभी छोटी प्रक्रिया से चौड़ा किया जा सकता है। आंशिक रूप से सिकुड़ा मार्ग कभी-कभी सिरिंजिंग या दूसरी लैक्रिमल तकनीकों से खुल सकता है। नासोलैक्रिमल नली के पूरी तरह बंद होने पर आमतौर पर नाक में नया निकासी मार्ग बनाना पड़ता है, जिसे डैक्रियोसिस्टोराइनोस्टोमी (DCR) कहते हैं। डॉ. सिंह एक्सटर्नल DCR करती हैं; नाक के रास्ते होने वाली एंडोस्कोपिक DCR भी एक मौजूद तकनीक है। विस्तार से पढ़ें: [लखनऊ में DCR सर्जरी](/dcr-surgery-in-lucknow) या [आंसू निकासी सेवा पेज](/services/watering-eyes-tear-drainage-disorders/dcr)।'
            ),
          ],
        },
        {
          h3: t('When surgery is not the answer', 'जब सर्जरी हल नहीं है'),
          paras: [
            t(
              'Many people with watering never need an operation. Mild watering from dry eye, blepharitis or allergy is managed with drops and lid care, and some people choose to live with mild watering that does not bother them. Surgery is considered when the problem is clearly structural and affects comfort, vision, work or causes repeated infections.',
              'पानी आने वाले कई लोगों को कभी ऑपरेशन की ज़रूरत नहीं पड़ती। सूखी आंख, ब्लेफ़ेराइटिस या एलर्जी से हल्का पानी ड्रॉप्स और पलक की देखभाल से संभल जाता है, और कुछ लोग हल्के पानी के साथ, जो उन्हें परेशान नहीं करता, रहना चुनते हैं। सर्जरी तब सोची जाती है जब समस्या साफ़ तौर पर संरचनात्मक हो और आराम, नज़र या काम को प्रभावित करे या बार-बार संक्रमण कराए।'
            ),
          ],
        },
      ],
    },
    {
      id: 'home-care',
      h2: t('Home remedies for watering eyes: what is safe and what is not', 'आंखों से पानी आना घरेलू उपाय: क्या सुरक्षित है और क्या नहीं'),
      paras: [
        t(
          'Home care can ease symptoms, but it cannot open a blocked duct or fix a turned eyelid, so do not use it to delay an examination if watering is persistent.',
          'घरेलू देखभाल से लक्षणों में आराम मिल सकता है, पर वह बंद नली नहीं खोल सकती और मुड़ी पलक ठीक नहीं कर सकती, इसलिए पानी लगातार आ रहा हो तो जांच टालने के लिए इसका सहारा न लें।'
        ),
      ],
      subsections: [
        {
          h3: t('Generally safe', 'आमतौर पर सुरक्षित'),
          bullets: [
            t('Clean hands first, then a clean cloth warmed in comfortably hot (not scalding) water, held on closed lids for a few minutes, once or twice a day', 'पहले हाथ साफ़ करें, फिर आरामदायक गर्म (जलाने वाले नहीं) पानी में भिगोया साफ़ कपड़ा बंद पलकों पर कुछ मिनट रखें, दिन में एक-दो बार'),
            t('Gentle daily cleaning of the lid edges and lashes if you have crusting', 'पपड़ी हो तो पलक की किनारियों और बालों की रोज़ हल्की सफ़ाई'),
            t('Dabbing tears away with a clean tissue, wiping upwards towards the nose rather than dragging the lower lid down', 'साफ़ टिशू से आंसू थपथपाकर पोंछना, निचली पलक को नीचे खींचने के बजाय नाक की ओर ऊपर की तरफ़ पोंछना'),
            t('Not rubbing the eyes, and taking breaks from screens, smoke and dust', 'आंखें न मलना, और स्क्रीन, धुएं व धूल से ब्रेक लेना'),
            t('Plain lubricating (artificial tear) drops for dry or irritated eyes, if your doctor agrees', 'सूखी या जलन वाली आंखों के लिए, डॉक्टर सहमत हों तो, साधारण लुब्रिकेटिंग (आर्टिफ़िशियल टियर) ड्रॉप्स'),
          ],
        },
        {
          h3: t('Please do not put these in the eye', 'ये चीज़ें आंख में न डालें'),
          bullets: [
            t('Kajal, surma or home-made eye powders, which can carry germs or harmful particles', 'काजल, सुरमा या घर के बने आंखों के पाउडर, जिनमें कीटाणु या हानिकारक कण हो सकते हैं'),
            t('Home-made drops, rose water, honey, herbal juices or leaf extracts, and breast milk (a common practice for babies, which does not clear a blocked duct and can introduce infection)', 'घर की बनी बूंदें, गुलाब जल, शहद, जड़ी-बूटियों का रस या पत्तों का अर्क, और मां का दूध (शिशुओं में आम चलन, पर इससे बंद नली नहीं खुलती और संक्रमण का ख़तरा रहता है)'),
            t('Leftover or borrowed drops, and steroid-containing drops without a prescription, which can hide an infection and damage the eye', 'बची हुई या दूसरों की ड्रॉप्स, और बिना पर्ची स्टेरॉइड वाली ड्रॉप्स, जो संक्रमण को छिपा सकती हैं और आंख को नुकसान पहुंचा सकती हैं'),
            t('Pressing hard on the corner of the eye or pulling out lashes yourself', 'आंख के कोने को ज़ोर से दबाना या बाल ख़ुद खींचना'),
          ],
        },
      ],
    },
  ],

  whyDrSaumika: [
    t('Fellowship-trained in Oculoplasty & Ocular Oncology (Dr. Shroff’s Charity Eye Hospital, New Delhi), after MS in Ophthalmology', 'नेत्र विज्ञान में MS के बाद ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी में फ़ेलोशिप-प्रशिक्षित (डॉ. श्रॉफ़्स चैरिटी आई हॉस्पिटल, नई दिल्ली)'),
    t('Her practice covers the whole watering pathway: eye surface and eyelids, tear-drainage assessment with syringing, external DCR, and canalicular repair', 'उनकी प्रैक्टिस में पानी आने के पूरे मार्ग की देखभाल शामिल है: आंख की सतह और पलकें, सिरिंजिंग से निकासी की जांच, एक्सटर्नल DCR और कैनालिकुलर रिपेयर'),
    t('She also corrects eyelid causes of watering, including ectropion and entropion, so the cause is treated rather than just the symptom', 'वे पानी आने के पलक संबंधी कारण, जैसे एक्ट्रोपियन और एंट्रोपियन, भी ठीक करती हैं, ताकि सिर्फ़ लक्षण नहीं बल्कि कारण का इलाज हो'),
    t('Registered with the Uttar Pradesh Medical Council (Reg. No. 137106); consults at Alyantra Medicity Superspeciality Hospital, Gomti Nagar', 'उत्तर प्रदेश मेडिकल काउंसिल में पंजीकृत (पंजीकरण सं. 137106); अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श'),
  ],

  faqs: [
    {
      q: t('Why do my eyes keep watering for no reason?', 'आंख से पानी क्यों आता है, जबकि कोई वजह समझ नहीं आती?'),
      a: t('There is nearly always a reason, even if it is not obvious. The common ones are a dry or irritated eye surface (which triggers reflex tearing), blepharitis, allergy, an eyelid turned in or out, or poor drainage from a narrowed opening or blocked duct. Because these need different treatments, a short examination of the eye and tear passage is the most reliable way to find out.', 'वजह लगभग हमेशा होती है, भले साफ़ न दिखे। आम कारण हैं: आंख की सतह का सूखापन या जलन (जो रिफ़्लेक्स टियरिंग कराती है), ब्लेफ़ेराइटिस, एलर्जी, अंदर या बाहर मुड़ी पलक, या सिकुड़े छेद/बंद नली से कमज़ोर निकासी। इनके इलाज अलग हैं, इसलिए आंख और आंसू मार्ग की छोटी-सी जांच सबसे भरोसेमंद तरीका है।'),
    },
    {
      q: t('Is watering of the eyes a sign of a disease?', 'आंखों से पानी आना कौन सी बीमारी है?'),
      a: t('Watering is a symptom, not a disease by itself. It can come from minor things such as wind or allergy, or from conditions such as dry eye, blepharitis, a malpositioned eyelid, a blocked tear duct or an eye infection. Most causes are treatable. Watering with pain, reduced vision or swelling at the inner corner needs prompt examination.', 'आंखों से पानी आना अपने आप में बीमारी नहीं, बल्कि लक्षण है। यह हवा या एलर्जी जैसी छोटी वजहों से भी हो सकता है, और सूखी आंख, ब्लेफ़ेराइटिस, पलक की गलत स्थिति, बंद आंसू नली या आंख के संक्रमण जैसी स्थितियों से भी। ज़्यादातर कारणों का इलाज संभव है। दर्द, नज़र कम होने या भीतरी कोने पर सूजन के साथ पानी आए तो तुरंत जांच करवाएं।'),
    },
    {
      q: t('Why is only one eye watering?', 'एक आंख से पानी आना – ऐसा क्यों होता है?'),
      a: t('Watering from one eye usually points to a local cause on that side: a narrowed punctum, a blocked tear duct, a turned eyelid, a lash or scratch irritating the eye, or an early infection. Allergy and dry eye more often affect both eyes. If one eye has watered for more than a few weeks, or has discharge, have it examined.', 'एक आंख से पानी आना आमतौर पर उसी तरफ़ के स्थानीय कारण की ओर इशारा करता है: सिकुड़ा छेद, बंद आंसू नली, मुड़ी पलक, आंख को चुभता बाल या खरोंच, या शुरुआती संक्रमण। एलर्जी और सूखी आंख ज़्यादातर दोनों आंखों को प्रभावित करती हैं। एक आंख कुछ हफ़्तों से ज़्यादा समय से पानी छोड़ रही हो या स्राव हो, तो जांच करवाएं।'),
    },
    {
      q: t('What is the treatment for watering eyes?', 'आंखों से पानी आने का इलाज क्या है?'),
      a: t('It depends on the cause. Dry eye, blepharitis and allergy are treated with lubricants, lid hygiene and doctor-prescribed medicines. A loose or turned eyelid is corrected by eyelid surgery. A narrowed punctum may be widened, and a blocked nasolacrimal duct usually needs a DCR operation. Many people do not need surgery at all.', 'यह कारण पर निर्भर करता है। सूखी आंख, ब्लेफ़ेराइटिस और एलर्जी का इलाज लुब्रिकेंट, पलक की सफ़ाई और डॉक्टर की लिखी दवाओं से होता है। ढीली या मुड़ी पलक का सुधार पलक सर्जरी से होता है। सिकुड़े छेद को चौड़ा किया जा सकता है, और बंद नासोलैक्रिमल नली में आमतौर पर DCR ऑपरेशन चाहिए। कई लोगों को सर्जरी की ज़रूरत ही नहीं पड़ती।'),
    },
    {
      q: t('What home remedies are safe for watery eyes?', 'आंखों से पानी आना – घरेलू उपाय क्या सुरक्षित हैं?'),
      a: t('Warm compresses, gentle lid cleaning, not rubbing the eyes, wiping tears towards the nose and resting from screens are safe. Do not put kajal, surma, home-made drops, honey, herbal juices, breast milk or leftover or steroid drops into the eye. They do not unblock a duct and can cause infection or damage. If watering persists, get it examined.', 'गर्म सिकाई, पलक की हल्की सफ़ाई, आंखें न मलना, आंसू नाक की ओर पोंछना और स्क्रीन से आराम सुरक्षित हैं। आंख में काजल, सुरमा, घर की बनी बूंदें, शहद, जड़ी-बूटियों का रस, मां का दूध या बची हुई/स्टेरॉइड ड्रॉप्स न डालें। इनसे नली नहीं खुलती और संक्रमण या नुकसान हो सकता है। पानी लगातार आए तो जांच करवाएं।'),
    },
    {
      q: t('How do I know if my tear duct is blocked?', 'कैसे पता चले कि आंसू नली बंद है?'),
      a: t('Typical clues are constant watering that runs down the cheek, worse in wind or cold, often with sticky discharge or repeated infections, in an eye that is not painful and has normal-looking lids. Only syringing of the tear passage and an eye examination can confirm a blockage and show where it is.', 'आम संकेत हैं: गाल पर बहता लगातार पानी, जो हवा या ठंड में बढ़ता है, अक्सर चिपचिपे स्राव या बार-बार संक्रमण के साथ, दर्द-मुक्त वाली आंख में जिसकी पलकें सामान्य दिखती हैं। रुकावट की पुष्टि और उसकी जगह सिर्फ़ आंसू मार्ग की सिरिंजिंग और आंख की जांच से पता चलती है।'),
    },
    {
      q: t('Can a blocked tear duct in an adult clear by itself?', 'क्या बड़ों में बंद आंसू नली अपने आप खुल सकती है?'),
      a: t('Unlike in many babies, a fully blocked duct in an adult rarely opens on its own. Partial narrowing may fluctuate, and treating blepharitis or allergy can reduce symptoms. If watering is constant, causes infections or affects daily life, an assessment for a procedure such as DCR is the usual next step.', 'कई शिशुओं के विपरीत, बड़ों में पूरी तरह बंद नली शायद ही अपने आप खुलती है। आंशिक सिकुड़न घट-बढ़ सकती है, और ब्लेफ़ेराइटिस या एलर्जी का इलाज करने से लक्षण कम हो सकते हैं। पानी लगातार हो, संक्रमण कराए या रोज़मर्रा के जीवन को प्रभावित करे, तो DCR जैसी प्रक्रिया के लिए जांच आमतौर पर अगला कदम है।'),
    },
    {
      q: t('Which doctor should I see for watering eyes in Lucknow?', 'लखनऊ में आंखों से पानी आने पर किस डॉक्टर को दिखाएं?'),
      a: t('Start with an eye doctor. Persistent watering with a suspected eyelid or tear-drainage cause is handled by an oculoplastic surgeon, an eye surgeon trained in eyelids and tear ducts. In Lucknow, Dr. Saumika Singh consults at Alyantra Medicity Superspeciality Hospital, Gomti Nagar. For pain, injury or sudden vision loss, go to an eye emergency first.', 'शुरुआत नेत्र चिकित्सक से करें। पलक या आंसू निकासी के कारण की आशंका वाले लगातार पानी आने का इलाज ओकुलोप्लास्टिक सर्जन करते हैं, जो पलक और आंसू नली में प्रशिक्षित नेत्र सर्जन होते हैं। लखनऊ में डॉ. सौमिका सिंह अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श करती हैं। दर्द, चोट या अचानक नज़र कम होने पर पहले आंखों की इमरजेंसी में जाएं।'),
    },
  ],

  cta: {
    title: t('Book a watering eyes assessment in Lucknow', 'लखनऊ में आंखों से पानी आने की जांच बुक करें'),
    text: t('Bring a list of the drops and medicines you use, any earlier eye or nose reports, and note whether one or both eyes water and when it is worst.', 'जो ड्रॉप्स और दवाएं आप लेते हैं उनकी सूची, पुरानी आंख या नाक की रिपोर्ट साथ लाएं, और ध्यान रखें कि एक या दोनों आंखों से पानी आता है और कब ज़्यादा होता है।'),
  },

  related: [
    { path: '/services/watering-eyes-tear-drainage-disorders/dcr', label: t('Watering eyes and tear drainage disorders (DCR)', 'आंखों से पानी आना और आंसू निकासी की समस्याएं (DCR)') },
    { path: '/dcr-surgery-in-lucknow', label: t('DCR surgery for a blocked tear duct', 'बंद आंसू नली के लिए DCR सर्जरी') },
    { path: '/blocked-tear-duct-in-babies', label: t('Blocked tear duct in babies', 'शिशुओं में बंद आंसू नली') },
    { path: '/entropion-surgery-in-lucknow', label: t('Entropion (inward-turning eyelid) surgery', 'एंट्रोपियन (अंदर मुड़ी पलक) सर्जरी') },
    { path: '/ectropion-surgery-in-lucknow', label: t('Ectropion (outward-turning eyelid) surgery', 'एक्ट्रोपियन (बाहर मुड़ी पलक) सर्जरी') },
    { path: '/ectropion-vs-entropion', label: t('Ectropion vs entropion: the difference', 'एक्ट्रोपियन बनाम एंट्रोपियन: फ़र्क') },
  ],

  references: [
    { label: 'Tearing', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/symptoms/tearing' },
    { label: 'What is a blocked tear duct?', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/diseases/what-is-blocked-tear-duct' },
    { label: 'Dacryocystorhinostomy', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Dacryocystorhinostomy' },
    { label: 'Dacryocystitis', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Dacryocystitis' },
    { label: 'Blepharitis', source: 'NHS (UK)', url: 'https://www.nhs.uk/conditions/blepharitis/' },
    { label: 'Conjunctivitis', source: 'NHS (UK)', url: 'https://www.nhs.uk/conditions/conjunctivitis/' },
  ],

  schema: {
    type: 'MedicalCondition',
    name: 'Epiphora',
    alternateName: ['Watering eyes', 'Watery eyes'],
    bodyLocation: 'Eye and lacrimal (tear drainage) system',
  },

  reviewerNotes: [
    'All six reference URLs returned HTTP 200 and were checked by page title/content (AAO Tearing, AAO What Is a Blocked Tear Duct, EyeWiki Dacryocystorhinostomy, EyeWiki Dacryocystitis, NHS Blepharitis, NHS Conjunctivitis). No StatPearls epiphora URL was cited because an ID could not be verified.',
    'Confirm the assessment list (slit lamp, dye disappearance test, syringing/irrigation, nasal exam or scans when needed) matches her routine workup.',
    'Confirm she is comfortable with the phrase "a narrowed punctum can sometimes be widened with a small procedure" and "other lacrimal techniques" (punctoplasty, probing, intubation are deliberately not named as services). Edit if she does not offer these.',
    'External DCR is stated as performed; endoscopic DCR is mentioned only as an existing technique. Confirmed 2026-11-11 that she does not perform endoscopic DCR, so this wording is correct.',
    'Chemical-splash first aid wording is generic ("plenty of clean running water for several minutes") with no fixed duration; confirm.',
    'Home-care section: confirm she agrees with warm compress, lid hygiene and plain lubricating drops being described as generally safe, and with the list of things not to use (kajal, surma, home-made drops, honey, breast milk, steroid drops).',
    'Confirm the statement that a fully blocked adult duct rarely opens on its own (FAQ), and the table line that an infected tear sac is treated with antibiotics first and surgery later if needed.',
    'Babies are covered only by a link to blocked-tear-duct-in-babies (no separate section); the one-eye-watering explanation is in an FAQ.',
  ],
};

export default guide;
