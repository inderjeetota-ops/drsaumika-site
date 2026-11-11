import type { Guide, L } from '../types';

const t = (en: string, hi: string): L => ({ en, hi });

const guide: Guide = {
  slug: 'thyroid-eye-disease',
  primaryKeyword: 'thyroid eye disease',
  secondaryKeywords: ['thyroid eye disease symptoms', 'thyroid eye disease treatment', 'Graves’ eye disease', 'bulging eyes', 'eyelid retraction', 'thyroid eye disease Lucknow', 'active and inactive thyroid eye disease'],
  hindiKeywords: ['थायराइड आई डिज़ीज़', 'थायराइड से आंखें उभरना', 'उभरी हुई आंखें', 'थायराइड से आंखें बाहर निकलना', 'थायराइड आई डिज़ीज़ का इलाज', 'thyroid eye disease kya hai'],

  metaTitle: t(
    'Thyroid Eye Disease: Symptoms & Treatment | Dr Saumika Singh',
    'थायराइड आई डिज़ीज़: लक्षण और इलाज | डॉ. सौमिका सिंह'
  ),
  metaDescription: t(
    'Thyroid eye disease explained by oculoplasty surgeon Dr Saumika Singh, Lucknow: symptoms, bulging eyes, eyelid retraction, active vs inactive phase, treatment.',
    'थायराइड आई डिज़ीज़ (थायराइड से आंखें उभरना) की जानकारी – ओकुलोप्लास्टी सर्जन डॉ. सौमिका सिंह, लखनऊ: लक्षण, पलक का खिंचना, एक्टिव-इनएक्टिव चरण और इलाज।'
  ),
  h1: t('Thyroid Eye Disease – Symptoms, Stages and Treatment', 'थायराइड आई डिज़ीज़ – थायराइड से आंखें उभरना: लक्षण और इलाज'),
  lead: t(
    'Thyroid eye disease is an autoimmune condition in which the tissues around the eyes become inflamed and swollen, causing gritty red eyes, puffy eyelids, a staring look, bulging eyes and sometimes double vision. It is most often linked to Graves’ disease, but it can also appear with normal thyroid blood tests. Most people have a mild form that settles with simple care, while a smaller number need medical or surgical treatment, and a few have a sight-threatening form that needs urgent attention. Dr. Saumika Singh, an oculoplasty and orbit surgeon at Alyantra Medicity Superspeciality Hospital, Gomti Nagar, Lucknow, assesses and manages thyroid eye disease alongside your endocrinologist.',
    'थायराइड आई डिज़ीज़ (थायराइड से आंखें उभरना) एक ऑटोइम्यून बीमारी है, जिसमें आंखों के आसपास के टिश्यू में सूजन आ जाती है। इससे आंखों में किरकिरापन और लालिमा, पलकों में सूजन, घूरती हुई-सी नज़र, उभरी हुई आंखें और कभी-कभी दोहरा दिखना हो सकता है। यह अक्सर ग्रेव्स रोग (Graves’ disease) से जुड़ी होती है, पर थायराइड की खून की जांच सामान्य होने पर भी हो सकती है। ज़्यादातर लोगों में यह हल्की रहती है और सामान्य देखभाल से संभल जाती है; कुछ को दवा या सर्जरी की ज़रूरत पड़ती है, और कुछ में यह नज़र के लिए ख़तरा बन सकती है, जिसमें तुरंत इलाज चाहिए। लखनऊ में अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में ओकुलोप्लास्टी व ऑर्बिट सर्जन डॉ. सौमिका सिंह आपके एंडोक्राइनोलॉजिस्ट के साथ मिलकर थायराइड आई डिज़ीज़ की जांच और प्रबंधन करती हैं।'
  ),
  atAGlance: [
    t('**What it is:** an autoimmune inflammation of the tissues around the eye, also called Graves’ eye disease or Graves’ orbitopathy', '**यह क्या है:** आंख के आसपास के टिश्यू की ऑटोइम्यून सूजन; इसे ग्रेव्स आई डिज़ीज़ या ग्रेव्स ऑर्बिटोपैथी भी कहते हैं'),
    t('**Usual signs:** gritty red eyes, puffy lids, eyelid retraction (staring look), bulging eyes, double vision', '**आम लक्षण:** किरकिरी और लाल आंखें, पलकों में सूजन, पलक का खिंचना (घूरती नज़र), उभरी आंखें, दोहरा दिखना'),
    t('**Thyroid tests:** may be high, low or normal; the eye disease can start before, with or after the thyroid problem', '**थायराइड जांच:** ज़्यादा, कम या सामान्य हो सकती है; आंख की बीमारी थायराइड की समस्या से पहले, साथ या बाद में शुरू हो सकती है'),
    t('**Key risk you can change:** smoking – stopping is the single most useful step', '**जिसे आप बदल सकते हैं:** धूम्रपान – इसे छोड़ना सबसे उपयोगी कदम है'),
    t('**Treatment depends on phase:** active (inflamed) or inactive (settled) disease', '**इलाज चरण पर निर्भर:** एक्टिव (सूजन वाला) या इनएक्टिव (शांत) चरण'),
    t('**Where:** Alyantra Medicity Superspeciality Hospital, Gomti Nagar, Lucknow', '**कहां:** अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर, लखनऊ'),
  ],

  sections: [
    {
      id: 'what-is-thyroid-eye-disease',
      h2: t('What is thyroid eye disease?', 'थायराइड आई डिज़ीज़ क्या है?'),
      paras: [
        t(
          'In thyroid eye disease the body’s own immune system attacks the soft tissues behind and around the eyes – the eye muscles and the fatty tissue inside the bony socket (the orbit). These tissues swell, pushing the eye forward and tugging on the eyelids. The thyroid gland itself is not in the eye; the condition is called “thyroid” eye disease because it is linked to the same autoimmune process that affects the thyroid, most commonly Graves’ disease (an overactive thyroid).',
          'थायराइड आई डिज़ीज़ में शरीर की अपनी रोग-प्रतिरोधक प्रणाली आंख के पीछे और आसपास के कोमल टिश्यू – आंख की मांसपेशियों और हड्डी की गुहा (ऑर्बिट) के भीतर की चर्बी – पर हमला करती है। ये टिश्यू सूज जाते हैं, जिससे आंख आगे की ओर धकेली जाती है और पलकें खिंच जाती हैं। थायराइड ग्रंथि आंख में नहीं होती; इसे “थायराइड” आई डिज़ीज़ इसलिए कहते हैं क्योंकि यह उसी ऑटोइम्यून प्रक्रिया से जुड़ी है जो थायराइड को प्रभावित करती है, सबसे आम तौर पर ग्रेव्स रोग (अति-सक्रिय थायराइड) में।'
        ),
        t(
          'It is not caused by something you did, and it is not infectious. Because it can occur when thyroid blood tests are normal, and sometimes before any thyroid diagnosis, an eye examination is important if you notice the changes described below – even if you have been told your thyroid is “fine”.',
          'यह आपकी किसी गलती से नहीं होती और न ही संक्रामक है। चूंकि यह थायराइड की सामान्य जांच में भी हो सकती है, और कभी-कभी थायराइड का पता चलने से पहले ही शुरू हो जाती है, इसलिए नीचे बताए बदलाव दिखें तो आंखों की जांच ज़रूरी है – भले ही आपको बताया गया हो कि थायराइड “ठीक” है।'
        ),
      ],
    },
    {
      id: 'symptoms',
      h2: t('What are the symptoms of thyroid eye disease?', 'थायराइड आई डिज़ीज़ के लक्षण क्या हैं?'),
      paras: [
        t(
          'Symptoms usually develop gradually and often affect both eyes, though one eye can be worse than the other. Common features are:',
          'लक्षण आमतौर पर धीरे-धीरे विकसित होते हैं और अक्सर दोनों आंखों में होते हैं, हालांकि एक आंख ज़्यादा प्रभावित हो सकती है। आम लक्षण:'
        ),
      ],
      bullets: [
        t('Gritty, dry or sandy feeling in the eyes, redness and sensitivity to light', 'आंखों में किरकिरापन, सूखापन या रेत जैसा एहसास, लालिमा और रोशनी से परेशानी'),
        t('Watery eyes (often from dryness or irritation) – see [why eyes water](/why-are-my-eyes-watering) for other causes', 'आंखों से पानी आना (अक्सर सूखेपन या जलन से) – दूसरे कारणों के लिए [आंखों से पानी क्यों आता है](/why-are-my-eyes-watering) देखें'),
        t('Puffy or swollen upper and lower eyelids, sometimes with bags under the eyes', 'ऊपरी और निचली पलकों में सूजन, कभी-कभी आंखों के नीचे थैलियां'),
        t('**Eyelid retraction** – the eyelids sit higher (or lower) than normal, so white shows above the coloured part of the eye and you look as if you are staring', '**पलक का खिंचना (आइलिड रिट्रैक्शन)** – पलकें सामान्य से ऊपर (या नीचे) खिंच जाती हैं, आइरिस के ऊपर सफ़ेद हिस्सा दिखता है और आप घूरते हुए-से लगते हैं'),
        t('**Bulging eyes** (proptosis) – one or both eyes look more prominent', '**उभरी हुई आंखें** (प्रॉप्टोसिस) – एक या दोनों आंखें ज़्यादा बाहर दिखती हैं'),
        t('Double vision, especially when looking up or to the side, because the swollen eye muscles are stiff', 'दोहरा दिखना, खासकर ऊपर या बगल में देखते समय, क्योंकि सूजी हुई आंख की मांसपेशियां सख़्त हो जाती हैं'),
        t('A feeling of pressure or aching behind the eyes, or pain on eye movement', 'आंखों के पीछे दबाव या भारीपन का एहसास, या आंख हिलाने पर दर्द'),
        t('Difficulty closing the eyes fully, particularly at night', 'आंखें पूरी तरह बंद करने में दिक्कत, खासकर रात में'),
      ],
      callout: {
        tone: 'info',
        title: t('Not every bulging or staring eye is thyroid-related', 'हर उभरी या घूरती आंख थायराइड की वजह से नहीं होती'),
        text: t(
          'Other conditions, including orbital infections, tumours, inflammation of the orbit and some vascular problems, can also push an eye forward, and a staring look can have other causes. Sudden or one-sided bulging should be examined promptly rather than assumed to be thyroid-related.',
          'ऑर्बिट का संक्रमण, ट्यूमर, ऑर्बिट की सूजन और कुछ रक्त-वाहिका संबंधी समस्याएं भी आंख को आगे धकेल सकती हैं, और घूरती नज़र के दूसरे कारण भी हो सकते हैं। अचानक या सिर्फ़ एक तरफ़ आंख उभरे तो इसे बिना जांच थायराइड मानने के बजाय जल्दी दिखाएं।'
        ),
      },
    },
    {
      id: 'urgent-signs',
      h2: t('When is thyroid eye disease an emergency?', 'थायराइड आई डिज़ीज़ कब इमरजेंसी है?'),
      paras: [
        t(
          'Most thyroid eye disease is uncomfortable rather than dangerous, but two complications can damage sight permanently if they are not treated quickly.',
          'ज़्यादातर थायराइड आई डिज़ीज़ तकलीफ़देह होती है, ख़तरनाक नहीं, पर दो जटिलताएं ऐसी हैं जो जल्दी इलाज न होने पर नज़र को स्थायी नुकसान पहुंचा सकती हैं।'
        ),
      ],
      callout: {
        tone: 'urgent',
        title: t('Get same-day eye care or go to an emergency department if you have:', 'इनमें से कुछ भी हो तो उसी दिन आंखों के डॉक्टर को दिखाएं या इमरजेंसी में जाएं:'),
        text: t(
          '**Signs of optic-nerve compression:** vision that becomes dim or blurred, colours that look washed out or faded, a dark patch in the vision, or one eye seeing noticeably worse than the other. **Signs of corneal exposure:** you cannot close the eye, or you have a painful red eye, light sensitivity, a white or hazy spot on the clear front of the eye, or new discharge. Do not wait for your next scheduled appointment.',
          '**ऑप्टिक नर्व पर दबाव के संकेत:** नज़र का धुंधला या मद्धम होना, रंग फीके या बेरंग दिखना, नज़र में काला धब्बा, या एक आंख का दूसरी से साफ़ कम दिखना। **कॉर्निया के खुले रहने के संकेत:** आंख बंद न हो पाना, या आंख में दर्द के साथ लालिमा, रोशनी से परेशानी, आंख की साफ़ सतह पर सफ़ेद या धुंधला धब्बा, या नया स्राव। अगली तय अपॉइंटमेंट का इंतज़ार न करें।'
        ),
      },
    },
    {
      id: 'who-gets-it',
      h2: t('Who gets thyroid eye disease, and why?', 'थायराइड आई डिज़ीज़ किसे होती है और क्यों?'),
      paras: [
        t(
          'Thyroid eye disease is most often seen in people with Graves’ disease, and it can also occur with an underactive thyroid caused by autoimmune (Hashimoto) thyroiditis or in people whose thyroid tests are normal. It can begin before, at the same time as, or months or years after the thyroid problem is found. Several factors influence who is affected and how severe it becomes:',
          'थायराइड आई डिज़ीज़ सबसे ज़्यादा ग्रेव्स रोग वालों में दिखती है; यह ऑटोइम्यून (हाशिमोटो) थायराइडाइटिस से हुए कम-सक्रिय थायराइड वालों में, या थायराइड जांच सामान्य होने पर भी हो सकती है। यह थायराइड की समस्या पता चलने से पहले, उसके साथ, या महीनों-सालों बाद शुरू हो सकती है। कौन प्रभावित होगा और कितनी गंभीर होगी, इसे कई बातें प्रभावित करती हैं:'
        ),
      ],
      table: {
        caption: t('General factors; they do not predict what will happen in any one person.', 'सामान्य कारक; ये किसी एक व्यक्ति में क्या होगा यह तय नहीं करते।'),
        head: [t('Factor', 'कारक'), t('What is known', 'क्या ज्ञात है'), t('What you can do', 'आप क्या कर सकते हैं')],
        rows: [
          [t('Smoking', 'धूम्रपान'), t('The strongest modifiable risk; smokers are more likely to develop thyroid eye disease, have more severe disease and respond less well to treatment', 'सबसे प्रबल बदला जा सकने वाला जोखिम; धूम्रपान करने वालों में बीमारी होने, ज़्यादा गंभीर होने और इलाज का कम असर होने की संभावना ज़्यादा'), t('Stop smoking and avoid second-hand smoke; ask your doctor for cessation support', 'धूम्रपान छोड़ें और दूसरों के धुएं से बचें; छोड़ने में मदद के लिए डॉक्टर से पूछें')],
          [t('Thyroid hormone levels', 'थायराइड हार्मोन स्तर'), t('Thyroid levels that swing too high or too low can make eye disease harder to control', 'थायराइड का स्तर बहुत ऊपर-नीचे होने से आंख की बीमारी काबू करना मुश्किल हो सकता है'), t('Keep levels stable with your endocrinologist; take medicines as prescribed and keep follow-up tests', 'एंडोक्राइनोलॉजिस्ट के साथ स्तर स्थिर रखें; दवा निर्देशानुसार लें और जांचें करवाते रहें')],
          [t('Thyroid treatment choices', 'थायराइड इलाज के विकल्प'), t('Some thyroid treatments, such as radioactive iodine, can worsen eye disease in certain people', 'कुछ थायराइड इलाज, जैसे रेडियोएक्टिव आयोडीन, कुछ लोगों में आंख की बीमारी बढ़ा सकते हैं'), t('Tell your endocrinologist about any eye symptoms before choosing treatment', 'इलाज चुनने से पहले अपने एंडोक्राइनोलॉजिस्ट को आंखों के लक्षण बताएं')],
          [t('Sex and age', 'लिंग और उम्र'), t('It is seen more often in women, and most commonly in adulthood', 'यह महिलाओं में ज़्यादा और वयस्क उम्र में सबसे आम है'), t('Not changeable – regular eye checks if you have Graves’ disease', 'बदला नहीं जा सकता – ग्रेव्स रोग हो तो नियमित आंखों की जांच')],
        ],
      },
    },
    {
      id: 'active-vs-inactive',
      h2: t('What are the active and inactive phases?', 'एक्टिव और इनएक्टिव चरण क्या हैं?'),
      paras: [
        t(
          'Thyroid eye disease usually follows a pattern. It begins with an **active (inflammatory) phase**, when the tissues are red, swollen and changing, which commonly lasts from several months to a couple of years. It then settles into an **inactive (stable) phase**, when inflammation has gone but some changes, such as bulging, double vision or eyelid retraction, may remain. The phase matters because it decides which treatments are likely to help.',
          'थायराइड आई डिज़ीज़ आमतौर पर एक क्रम में चलती है। यह **एक्टिव (सूजन वाले) चरण** से शुरू होती है, जब टिश्यू लाल, सूजे और बदलते रहते हैं; यह अक्सर कुछ महीनों से लेकर एक-दो साल तक चलता है। फिर यह **इनएक्टिव (स्थिर) चरण** में आती है, जब सूजन चली जाती है पर उभरी आंखें, दोहरा दिखना या पलक का खिंचना जैसे कुछ बदलाव रह सकते हैं। यह चरण मायने रखता है क्योंकि इसी से तय होता है कि कौन-सा इलाज काम आएगा।'
        ),
      ],
      table: {
        head: [t('Feature', 'पहलू'), t('Active phase', 'एक्टिव चरण'), t('Inactive phase', 'इनएक्टिव चरण')],
        rows: [
          [t('What the eyes look like', 'आंखें कैसी दिखती हैं'), t('Red, swollen, sore or aching; changes often progressing', 'लाल, सूजी, दुखती; बदलाव अक्सर बढ़ते हुए'), t('Calmer, less red; appearance stops changing', 'शांत, कम लालिमा; रूप में बदलाव रुक जाता है')],
          [t('Main aim of care', 'देखभाल का मुख्य लक्ष्य'), t('Protect the eyes, reduce inflammation, watch the optic nerve', 'आंखों की सुरक्षा, सूजन कम करना, ऑप्टिक नर्व पर नज़र'), t('Correct lasting changes to function and appearance', 'स्थायी बदलावों को कार्य और रूप के लिए ठीक करना')],
          [t('Typical options', 'आम विकल्प'), t('Lubricants, measures to protect the eye, anti-inflammatory or immune-modifying treatment', 'चिकनाई वाली ड्रॉप्स, आंख की सुरक्षा के उपाय, सूजन-रोधी या इम्यून-बदलने वाला इलाज'), t('Reconstructive surgery in a planned order, once stable for a period', 'स्थिर होने के कुछ समय बाद योजनाबद्ध क्रम में पुनर्निर्माण सर्जरी')],
        ],
      },
    },
    {
      id: 'assessment',
      h2: t('How is thyroid eye disease assessed?', 'थायराइड आई डिज़ीज़ की जांच कैसे होती है?'),
      paras: [
        t(
          'There is no single test; the diagnosis rests on a careful examination, with blood tests and scans used when needed. At a consultation, the assessment usually includes:',
          'कोई एक जांच नहीं है; निदान सावधानी से जांच पर टिका होता है, और ज़रूरत पड़ने पर खून की जांचें व स्कैन किए जाते हैं। परामर्श में आमतौर पर यह शामिल होता है:'
        ),
      ],
      steps: [
        t('A history of your thyroid condition and treatment, smoking, symptom timeline and any change in vision or double vision', 'आपके थायराइड रोग और इलाज, धूम्रपान, लक्षणों की समय-रेखा और नज़र या दोहरे दिखने में बदलाव का इतिहास'),
        t('Vision, colour vision and pupil tests, which help detect optic-nerve compression early', 'नज़र, रंग-दृष्टि और पुतली की जांच, जो ऑप्टिक नर्व पर दबाव को जल्दी पकड़ने में मदद करती हैं'),
        t('Measurement of eyelid position, eyelid closure and how far each eye protrudes', 'पलक की स्थिति, पलक बंद होने और हर आंख कितनी बाहर निकली है, इसकी नाप'),
        t('Eye-movement testing and, where needed, a double-vision chart or orthoptic assessment', 'आंखों की गति की जांच और ज़रूरत हो तो दोहरे दिखने का चार्ट या ऑर्थोप्टिक जांच'),
        t('Examination of the front of the eye for dryness or corneal damage from exposure', 'सूखेपन या खुली रहने से हुए कॉर्निया के नुकसान के लिए आंख के अगले हिस्से की जांच'),
        t('Thyroid blood tests (often with your endocrinologist), and a CT or MRI scan of the orbits when the diagnosis is unclear, vision is at risk or surgery is being planned', 'थायराइड की खून की जांचें (अक्सर आपके एंडोक्राइनोलॉजिस्ट के साथ), और निदान साफ़ न होने, नज़र को ख़तरा होने या सर्जरी की योजना होने पर ऑर्बिट का CT या MRI स्कैन'),
        t('Photographs for your record, so that change over time can be judged fairly', 'आपके रिकॉर्ड के लिए तस्वीरें, ताकि समय के साथ बदलाव को सही आंका जा सके'),
      ],
    },
    {
      id: 'treatment',
      h2: t('How is thyroid eye disease treated?', 'थायराइड आई डिज़ीज़ का इलाज कैसे होता है?'),
      paras: [
        t(
          'Treatment is matched to how active and how severe the disease is. Many people with mild disease need only supportive care and monitoring. Because the condition involves the thyroid, the eyes and sometimes the general health, care is usually shared between an endocrinologist, an oculoplasty/orbit surgeon and, when needed, other specialists.',
          'इलाज इस पर निर्भर करता है कि बीमारी कितनी सक्रिय और कितनी गंभीर है। हल्की बीमारी वाले कई लोगों को सिर्फ़ सहायक देखभाल और निगरानी चाहिए। चूंकि इसमें थायराइड, आंखें और कभी-कभी सामान्य स्वास्थ्य शामिल होते हैं, इसलिए देखभाल आमतौर पर एंडोक्राइनोलॉजिस्ट, ओकुलोप्लास्टी/ऑर्बिट सर्जन और ज़रूरत पड़ने पर अन्य विशेषज्ञों के बीच साझा होती है।'
        ),
      ],
      subsections: [
        {
          h3: t('Supportive care (mild or any phase)', 'सहायक देखभाल (हल्की या किसी भी अवस्था में)'),
          bullets: [
            t('Preservative-free lubricating drops through the day and a lubricating gel or ointment at night', 'दिन में बिना प्रिज़र्वेटिव वाली चिकनाई ड्रॉप्स और रात में लुब्रिकेटिंग जेल या ऑइंटमेंट'),
            t('Sunglasses for light sensitivity and wind; sleeping with the head raised to reduce morning puffiness', 'रोशनी और हवा से बचाव के लिए धूप का चश्मा; सुबह की सूजन घटाने के लिए सिर ऊंचा करके सोना'),
            t('Taping or other protection of the eyelids at night if they do not close fully, as advised by your doctor', 'पलकें पूरी बंद न हों तो डॉक्टर की सलाह पर रात में पलकों को टेप या अन्य तरीके से सुरक्षित रखना'),
            t('Prism glasses or temporary measures for double vision while the disease is changing', 'बीमारी बदलते रहने के दौरान दोहरे दिखने के लिए प्रिज़्म वाला चश्मा या अस्थायी उपाय'),
            t('Stopping smoking and keeping thyroid levels steady', 'धूम्रपान छोड़ना और थायराइड का स्तर स्थिर रखना'),
          ],
        },
        {
          h3: t('Medical treatment of active, moderate-to-severe disease', 'सक्रिय, मध्यम से गंभीर बीमारी का दवा-आधारित इलाज'),
          paras: [
            t(
              'When the active phase is causing significant symptoms or threatening sight, treatment is aimed at calming the inflammation. Options include steroids and other immune-suppressing medicines given under the supervision of the treating team, with monitoring for side effects. Newer biologic medicines that target the immune process behind the disease also exist; their availability, cost and suitability vary, and your doctors will discuss whether they are appropriate for you. Orbital radiotherapy is another option in selected people and is arranged with radiotherapy teams. If the optic nerve is being compressed and medicines are not controlling it quickly, urgent surgery to relieve the pressure may be needed.',
              'जब सक्रिय चरण में गंभीर लक्षण हों या नज़र को ख़तरा हो, तो इलाज का लक्ष्य सूजन शांत करना होता है। विकल्पों में स्टेरॉयड और अन्य इम्यून-दबाने वाली दवाएं शामिल हैं, जो इलाज करने वाली टीम की निगरानी में दी जाती हैं और साइड इफ़ेक्ट पर नज़र रखी जाती है। इस बीमारी की जड़ वाली प्रतिरक्षा प्रक्रिया पर काम करने वाली नई बायोलॉजिक दवाएं भी मौजूद हैं; उनकी उपलब्धता, खर्च और उपयुक्तता अलग-अलग होती है, और आपके डॉक्टर बताएंगे कि वे आपके लिए सही हैं या नहीं। चुने हुए मरीज़ों में ऑर्बिटल रेडियोथेरेपी एक और विकल्प है, जो रेडियोथेरेपी टीम के साथ मिलकर तय की जाती है। अगर ऑप्टिक नर्व पर दबाव है और दवाओं से जल्दी काबू नहीं हो रहा, तो दबाव घटाने के लिए तुरंत सर्जरी की ज़रूरत पड़ सकती है।'
            ),
            t(
              'These medicines carry risks and are not suitable for everyone, so they are chosen and monitored by the treating physicians. No dose or drug should be started from information on a website.',
              'इन दवाओं के जोखिम होते हैं और ये हर किसी के लिए उपयुक्त नहीं होतीं, इसलिए इन्हें इलाज करने वाले चिकित्सक चुनते और निगरानी में रखते हैं। किसी वेबसाइट की जानकारी देखकर कोई दवा या मात्रा शुरू न करें।'
            ),
          ],
        },
      ],
    },
    {
      id: 'surgery',
      h2: t('Is surgery needed for bulging eyes, double vision or eyelid retraction?', 'क्या उभरी आंखों, दोहरे दिखने या पलक के खिंचने के लिए सर्जरी चाहिए?'),
      paras: [
        t(
          'Surgery is not needed by everyone. It is used either urgently, to protect sight in the active phase, or later, to rehabilitate function and appearance once the disease has been inactive and stable for a period. When several operations are needed, they are normally done in a set order, because each step can change the next:',
          'सर्जरी सबको नहीं चाहिए। इसका उपयोग या तो सक्रिय चरण में नज़र बचाने के लिए तुरंत होता है, या बाद में, जब बीमारी कुछ समय से इनएक्टिव और स्थिर हो, तो कार्य और रूप सुधारने के लिए। जब कई ऑपरेशन चाहिए हों, तो वे आमतौर पर तय क्रम में होते हैं, क्योंकि हर कदम अगले को बदल सकता है:'
        ),
      ],
      steps: [
        t('**Orbital decompression** (for bulging, pressure or optic-nerve compression): a specialised orbital operation that makes more room for the swollen tissues so the eye can sit back. It is performed by orbital surgeons; your assessment will clarify whether it is needed and who will perform it', '**ऑर्बिटल डीकम्प्रेशन** (उभरी आंख, दबाव या ऑप्टिक नर्व पर दबाव के लिए): एक विशेष ऑर्बिटल ऑपरेशन जिसमें सूजे टिश्यू के लिए जगह बनाई जाती है ताकि आंख पीछे बैठ सके। यह ऑर्बिटल सर्जन करते हैं; आपकी जांच से साफ़ होगा कि यह चाहिए या नहीं और कौन करेगा'),
        t('**Squint (strabismus) surgery** (for lasting double vision): adjusts the eye muscles so the eyes line up, usually performed by squint or orbital surgeons once eye alignment has been stable', '**भेंगापन (स्ट्रैबिस्मस) सर्जरी** (स्थायी दोहरे दिखने के लिए): आंख की मांसपेशियों को इस तरह समायोजित करती है कि आंखें सीध में आएं; आमतौर पर स्क्विंट या ऑर्बिटल सर्जन तब करते हैं जब आंखों का संरेखण स्थिर हो'),
        t('**Eyelid surgery** (for eyelid retraction and puffy lids): lowers retracted upper or lower eyelids so the eyes close better and look less startled, and can tidy remaining eyelid fullness. This falls within Dr. Saumika Singh’s [eyelid surgery](/services/eyelid-disorders-eyelid-surgery) practice', '**पलक की सर्जरी** (पलक के खिंचाव और सूजी पलकों के लिए): खिंची हुई ऊपरी या निचली पलकों को नीचे लाती है ताकि आंखें बेहतर बंद हों और कम चौंकी हुई लगें, और बची हुई पलक की सूजन भी ठीक कर सकती है। यह डॉ. सौमिका सिंह की [पलक सर्जरी](/services/eyelid-disorders-eyelid-surgery) के कार्य में आता है'),
      ],
      subsections: [
        {
          h3: t('Eyelid retraction surgery', 'पलक के खिंचाव (रिट्रैक्शन) की सर्जरी'),
          paras: [
            t(
              'Retracted eyelids can leave the eye exposed and dry and give a persistent stare. Eyelid surgery releases or lengthens the tight lid tissues so the lid sits closer to its normal height. Because the exposed eye has little protection, the lid is not lowered more than the eye can safely tolerate. Possible risks include under- or over-correction, asymmetry, dry eye, a visible scar and the need for a further adjustment; results vary from person to person.',
              'खिंची हुई पलकें आंख को खुला और सूखा छोड़ सकती हैं और स्थायी घूरती नज़र दे सकती हैं। पलक की सर्जरी में कसे हुए टिश्यू को ढीला या लंबा किया जाता है ताकि पलक अपनी सामान्य ऊंचाई के करीब बैठे। चूंकि खुली आंख की सुरक्षा कम होती है, पलक को उतना ही नीचे लाया जाता है जितना आंख सुरक्षित सह सके। संभावित जोखिमों में कम या ज़्यादा सुधार, असमानता, सूखी आंख, दिखने वाला निशान और दोबारा समायोजन की ज़रूरत शामिल हैं; परिणाम हर व्यक्ति में अलग होते हैं।'
            ),
          ],
        },
        {
          h3: t('Why the order matters', 'क्रम क्यों मायने रखता है'),
          paras: [
            t(
              'Decompression can change eye position and double vision, and squint surgery can change eyelid height. Doing eyelid surgery last lets the surgeon set the lids to the final eye position. Some people need only one of these operations, and some need none.',
              'डीकम्प्रेशन आंख की स्थिति और दोहरा दिखना बदल सकता है, और भेंगापन सर्जरी पलक की ऊंचाई बदल सकती है। पलक की सर्जरी सबसे अंत में करने से सर्जन पलकों को आंख की अंतिम स्थिति के अनुसार सेट कर पाते हैं। कुछ लोगों को इनमें से सिर्फ़ एक ऑपरेशन चाहिए, और कुछ को कोई नहीं।'
            ),
          ],
        },
      ],
    },
    {
      id: 'self-care',
      h2: t('What can I do myself to protect my eyes?', 'मैं अपनी आंखों की सुरक्षा के लिए खुद क्या कर सकता/सकती हूं?'),
      bullets: [
        t('Stop smoking – this has the strongest evidence of benefit among things within your control', 'धूम्रपान छोड़ें – आपके नियंत्रण वाली बातों में इसका लाभ सबसे मज़बूत प्रमाणों पर टिका है'),
        t('Keep all thyroid appointments and blood tests, and tell your endocrinologist about any eye changes', 'थायराइड की सभी अपॉइंटमेंट और खून की जांचें करवाएं, और आंखों के किसी बदलाव के बारे में एंडोक्राइनोलॉजिस्ट को बताएं'),
        t('Use lubricating drops regularly and avoid rubbing the eyes; do not wear contact lenses if the eyes are sore or red unless your doctor agrees', 'चिकनाई वाली ड्रॉप्स नियमित डालें और आंखें न मलें; आंखें दुखती या लाल हों तो डॉक्टर की सहमति के बिना कॉन्टैक्ट लेंस न पहनें'),
        t('Protect the eyes from wind, dust and air-conditioning draughts', 'आंखों को हवा, धूल और एसी की सीधी हवा से बचाएं'),
        t('Check your own vision and colours one eye at a time every so often, and act at once if something changes', 'बीच-बीच में एक-एक आंख से अपनी नज़र और रंग जांचें, और कुछ बदले तो तुरंत कदम उठाएं'),
        t('Avoid unproven remedies and do not start or stop steroids on your own', 'बिना प्रमाण वाले नुस्खों से बचें और खुद से स्टेरॉयड शुरू या बंद न करें'),
      ],
    },
  ],

  whyDrSaumika: [
    t('Long-term fellowship in Oculoplasty & Ocular Oncology at Dr. Shroff’s Charity Eye Hospital, New Delhi, after MS in Ophthalmology', 'नेत्र विज्ञान में MS के बाद डॉ. श्रॉफ़्स चैरिटी आई हॉस्पिटल, नई दिल्ली से ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी में दीर्घकालिक फ़ेलोशिप'),
    t('Her practice covers orbital disorders, including thyroid eye disease, and eyelid surgery such as the correction of eyelid retraction', 'उनके कार्य में थायराइड आई डिज़ीज़ सहित ऑर्बिटल रोग, और पलक के खिंचाव के सुधार जैसी पलक सर्जरी शामिल हैं'),
    t('As an eye surgeon, she checks vision, the optic nerve and the eye surface – not just appearance – and coordinates with your endocrinologist and other specialists', 'नेत्र सर्जन होने के नाते वे सिर्फ़ रूप नहीं, बल्कि नज़र, ऑप्टिक नर्व और आंख की सतह की जांच करती हैं, और आपके एंडोक्राइनोलॉजिस्ट व अन्य विशेषज्ञों के साथ समन्वय करती हैं'),
    t('Registered with the Uttar Pradesh Medical Council (Reg. No. 137106); consults at Alyantra Medicity Superspeciality Hospital, Gomti Nagar', 'उत्तर प्रदेश मेडिकल काउंसिल में पंजीकृत (पंजीकरण सं. 137106); अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श'),
  ],

  faqs: [
    {
      q: t('What is thyroid eye disease?', 'थायराइड आई डिज़ीज़ क्या होती है?'),
      a: t('It is an autoimmune condition in which the immune system causes swelling of the muscles and fat around the eyes. This can lead to dry, red eyes, puffy lids, a staring look, bulging and double vision. It is usually linked to Graves’ disease, but can occur with other thyroid states or normal thyroid tests.', 'यह एक ऑटोइम्यून बीमारी है जिसमें रोग-प्रतिरोधक प्रणाली आंख के आसपास की मांसपेशियों और चर्बी में सूजन कर देती है। इससे सूखी और लाल आंखें, पलकों में सूजन, घूरती नज़र, उभरी आंखें और दोहरा दिखना हो सकता है। यह आमतौर पर ग्रेव्स रोग से जुड़ी होती है, पर थायराइड की दूसरी स्थितियों या सामान्य थायराइड जांच में भी हो सकती है।'),
    },
    {
      q: t('Can thyroid eye disease happen when my thyroid tests are normal?', 'क्या थायराइड जांच सामान्य होने पर भी थायराइड आई डिज़ीज़ हो सकती है?'),
      a: t('Yes. The eye disease follows its own course and can start before the thyroid problem is found, appear alongside it, or continue after the thyroid levels have been corrected. If you have eye symptoms, an eye examination is worthwhile even if your thyroid tests are normal.', 'हां। आंख की बीमारी अपनी अलग राह चलती है; यह थायराइड की समस्या पकड़ में आने से पहले, उसके साथ, या थायराइड का स्तर ठीक होने के बाद भी चल सकती है। आंखों के लक्षण हों तो थायराइड जांच सामान्य होने पर भी आंखों की जांच करवाना उचित है।'),
    },
    {
      q: t('Will my eyes go back to normal?', 'क्या मेरी आंखें पहले जैसी हो जाएंगी?'),
      a: t('Many people improve as the active phase settles, particularly the redness, grittiness and swelling. Some changes, such as bulging, double vision or eyelid retraction, may remain and can often be improved with rehabilitative surgery once the disease is stable. How much recovers varies between individuals, and your doctor cannot promise a specific outcome.', 'सक्रिय चरण शांत होने पर कई लोगों में सुधार होता है, खासकर लालिमा, किरकिरापन और सूजन में। उभरी आंखें, दोहरा दिखना या पलक का खिंचना जैसे कुछ बदलाव रह सकते हैं और बीमारी स्थिर होने पर पुनर्निर्माण सर्जरी से अक्सर सुधारे जा सकते हैं। कितना ठीक होगा यह व्यक्ति पर निर्भर है, और डॉक्टर कोई खास परिणाम का वादा नहीं कर सकते।'),
    },
    {
      q: t('Why is smoking so important in thyroid eye disease?', 'थायराइड आई डिज़ीज़ में धूम्रपान इतना अहम क्यों है?'),
      a: t('Smoking is the strongest modifiable risk factor: smokers are more likely to develop the disease, tend to have more severe disease and may respond less well to treatment. Stopping smoking, and avoiding smoky environments, is one of the most useful things a patient can do. Your doctor can help with quitting support.', 'धूम्रपान सबसे प्रबल बदला जा सकने वाला जोखिम कारक है: धूम्रपान करने वालों में बीमारी होने की संभावना ज़्यादा होती है, यह अधिक गंभीर हो सकती है और इलाज का असर कम हो सकता है। धूम्रपान और धुएं वाले माहौल से दूर रहना मरीज़ के लिए सबसे उपयोगी कदमों में से एक है। छोड़ने में मदद के लिए डॉक्टर से बात करें।'),
    },
    {
      q: t('Can thyroid eye disease be treated without surgery?', 'क्या थायराइड आई डिज़ीज़ का इलाज बिना सर्जरी के हो सकता है?'),
      a: t('Often, yes. Mild disease is managed with lubricants, eye protection, stopping smoking, steady thyroid control and monitoring. Active moderate-to-severe disease may need steroids, other immune-modifying medicines or radiotherapy arranged by the treating team. Surgery is reserved for sight-threatening disease or lasting changes once the disease is inactive.', 'अक्सर हां। हल्की बीमारी में चिकनाई ड्रॉप्स, आंख की सुरक्षा, धूम्रपान छोड़ना, थायराइड पर स्थिर नियंत्रण और निगरानी काफ़ी होती है। सक्रिय, मध्यम से गंभीर बीमारी में स्टेरॉयड, अन्य इम्यून-बदलने वाली दवाएं या रेडियोथेरेपी की ज़रूरत पड़ सकती है, जो इलाज करने वाली टीम तय करती है। सर्जरी नज़र को ख़तरे या बीमारी इनएक्टिव होने के बाद बचे स्थायी बदलावों के लिए होती है।'),
    },
    {
      q: t('Does eyelid retraction need surgery?', 'क्या पलक के खिंचाव (आइलिड रिट्रैक्शन) में सर्जरी चाहिए?'),
      a: t('Not always. Mild retraction may improve by itself or cause no problem. Surgery is considered when retraction causes exposure and dryness or a persistent stare, usually after the disease has been stable for a while and after any decompression or squint surgery. Your surgeon will explain the options and risks after examining you.', 'हमेशा नहीं। हल्का खिंचाव अपने आप सुधर सकता है या कोई परेशानी नहीं देता। जब खिंचाव से आंख खुली और सूखी रहे या स्थायी घूरती नज़र हो, तब सर्जरी पर विचार होता है, आमतौर पर बीमारी कुछ समय स्थिर रहने और डीकम्प्रेशन या भेंगापन सर्जरी (अगर ज़रूरत हो) के बाद। जांच के बाद सर्जन विकल्प और जोखिम समझाएंगे।'),
    },
    {
      q: t('Which doctor should I see for bulging eyes in Lucknow?', 'लखनऊ में उभरी हुई आंखों के लिए किस डॉक्टर को दिखाएं?'),
      a: t('Start with an eye doctor, ideally an oculoplasty/orbit specialist, and keep your endocrinologist involved for the thyroid. In Lucknow, Dr. Saumika Singh sees patients with thyroid eye disease at Alyantra Medicity Superspeciality Hospital, Gomti Nagar. If vision is dimming or the eye is painful and cannot close, seek same-day care.', 'शुरुआत आंखों के डॉक्टर से करें, बेहतर हो कि ओकुलोप्लास्टी/ऑर्बिट विशेषज्ञ से, और थायराइड के लिए अपने एंडोक्राइनोलॉजिस्ट को साथ रखें। लखनऊ में डॉ. सौमिका सिंह अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में थायराइड आई डिज़ीज़ के मरीज़ देखती हैं। नज़र घट रही हो या आंख दर्द के साथ बंद न हो रही हो तो उसी दिन इलाज लें।'),
    },
    {
      q: t('Is thyroid eye disease contagious or inherited?', 'क्या थायराइड आई डिज़ीज़ संक्रामक या अनुवांशिक है?'),
      a: t('It is not contagious. Autoimmune thyroid conditions can run in families, so relatives may have a higher chance of thyroid problems, but having a family member with the condition does not mean you will definitely develop eye disease.', 'यह संक्रामक नहीं है। ऑटोइम्यून थायराइड रोग परिवारों में चल सकते हैं, इसलिए रिश्तेदारों में थायराइड की समस्या की संभावना ज़्यादा हो सकती है, पर परिवार में किसी को होने का मतलब यह नहीं कि आपको आंख की बीमारी ज़रूर होगी।'),
    },
  ],

  cta: {
    title: t('Book a thyroid eye assessment in Lucknow', 'लखनऊ में थायराइड आई जांच बुक करें'),
    text: t('Bring your recent thyroid reports, a list of your medicines and any scans. Photographs of your face from before the eye changes began are very helpful for comparison.', 'अपनी हाल की थायराइड रिपोर्ट, दवाओं की सूची और कोई भी स्कैन साथ लाएं। आंखों में बदलाव शुरू होने से पहले के चेहरे की तस्वीरें तुलना के लिए बहुत उपयोगी होती हैं।'),
  },

  related: [
    { path: '/services/orbital-disorders-orbital-surgery', label: t('Orbital disorders and orbital surgery', 'ऑर्बिटल रोग और ऑर्बिटल सर्जरी') },
    { path: '/services/eyelid-disorders-eyelid-surgery', label: t('Eyelid surgery in Lucknow (all eyelid conditions)', 'लखनऊ में पलक सर्जरी (सभी पलक समस्याएं)') },
    { path: '/why-are-my-eyes-watering', label: t('Why are my eyes watering?', 'आंखों से पानी क्यों आता है?') },
    { path: '/oculoplasty-consultation-what-to-expect', label: t('Your consultation: what to expect', 'परामर्श में क्या होता है') },
    { path: '/what-is-oculoplasty', label: t('What is oculoplasty?', 'ओकुलोप्लास्टी क्या है?') },
    { path: '/oculoplastic-surgeon-in-lucknow', label: t('About oculoplastic surgery in Lucknow', 'लखनऊ में ओकुलोप्लास्टिक सर्जरी के बारे में') },
  ],

  references: [
    { label: 'Thyroid Eye Disease', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Thyroid_Eye_Disease' },
    { label: 'Graves’ Eye Disease', source: 'National Eye Institute (NEI), U.S. National Institutes of Health', url: 'https://www.nei.nih.gov/eye-health-information/eye-conditions-and-diseases/graves-eye-disease' },
    { label: 'What is thyroid eye disease?', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/diseases/what-is-thyroid-eye-disease' },
  ],

  schema: {
    type: 'MedicalCondition',
    name: 'Thyroid eye disease',
    alternateName: ['Graves’ eye disease', 'Graves’ orbitopathy', 'Thyroid-associated orbitopathy', 'Thyroid orbitopathy'],
    bodyLocation: 'Orbit and eyelids',
  },

  reviewerNotes: [
    'Confirm the wording on orbital decompression: the page says it is performed by orbital surgeons and that the assessment will clarify who performs it. It does NOT say Dr Saumika performs it. Edit if she does (or does not) and in which setting.',
    'Confirm that squint surgery is correctly described as performed by squint/orbital surgeons (not by her), and that the page does not claim she does it.',
    'Confirm she is comfortable with the statement that eyelid retraction surgery falls within her eyelid-surgery practice, and with the described approach (releasing/lengthening tight lid tissues).',
    'Confirm the statement that the active phase "commonly lasts from several months to a couple of years" matches her clinical teaching.',
    'Confirm the medical-treatment paragraph (steroids/immunosuppressants, newer biologic medicines, orbital radiotherapy via radiotherapy teams); no drug names or doses are given on purpose. Confirm whether she wants biologic availability wording kept neutral.',
    'Confirm the statement that care is shared with an endocrinologist, and that urgent decompression for optic neuropathy is described appropriately given what she can offer.',
    'Confirm supportive-care advice (night gel/ointment, head-raised sleeping, taping the lids, prism glasses, sunglasses, contact-lens caution).',
    'Reference verification: eyewiki.org/Thyroid_Eye_Disease and the NEI Graves’ Eye Disease URL were fetched and returned the expected page titles. The AAO EyeSmart URL (aao.org/eye-health/diseases/what-is-thyroid-eye-disease) returned HTTP 200, but aao.org also returns 200 for non-existent paths, so the page content could not be confirmed; check it manually in a browser before publishing and swap if needed.',
    'No images are used. No figures, percentages or case numbers are stated.',
  ],
};

export default guide;
