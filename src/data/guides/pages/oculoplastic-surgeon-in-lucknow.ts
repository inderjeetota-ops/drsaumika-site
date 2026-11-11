import type { Guide, L } from '../types';

const t = (en: string, hi: string): L => ({ en, hi });

const MAPS = 'https://www.google.com/maps/search/?api=1&query=Dr+Saumika+Singh+Oculoplasty+Alyantra+Medicity+Gomti+Nagar+Lucknow';

const guide: Guide = {
  slug: 'oculoplastic-surgeon-in-lucknow',
  primaryKeyword: 'oculoplastic surgeon in Lucknow',
  secondaryKeywords: ['oculoplasty specialist Lucknow', 'eye plastic surgeon Lucknow', 'oculoplastic surgeon reviews Lucknow', 'eyelid specialist Lucknow', 'ocular oncologist Lucknow', 'oculoplastic surgeon near me'],
  hindiKeywords: ['लखनऊ में ओकुलोप्लास्टिक सर्जन', 'आंखों की प्लास्टिक सर्जरी डॉक्टर लखनऊ', 'aankhon ki plastic surgery doctor lucknow', 'oculoplasty kya hai'],

  metaTitle: t(
    'Oculoplastic Surgeon in Lucknow – Dr Saumika Singh',
    'लखनऊ में ओकुलोप्लास्टिक सर्जन – डॉ. सौमिका सिंह'
  ),
  metaDescription: t(
    'Oculoplastic surgeon in Lucknow Dr Saumika Singh, fellowship-trained, treats eyelid, tear duct, orbit and eye tumour conditions at Alyantra Medicity, Gomti Nagar.',
    'डॉ. सौमिका सिंह लखनऊ में अलयंत्रा मेडिसिटी, गोमती नगर में फ़ेलोशिप-प्रशिक्षित ओकुलोप्लास्टिक व ओकुलर ऑन्कोलॉजी सर्जन हैं — पलक, आंसू नली, ऑर्बिट और आंख के ट्यूमर का इलाज।'
  ),
  h1: t('Oculoplastic Surgeon in Lucknow – Dr. Saumika Singh', 'लखनऊ में ओकुलोप्लास्टिक सर्जन – डॉ. सौमिका सिंह'),
  lead: t(
    'Dr. Saumika Singh is an oculoplastic surgeon in Lucknow, consulting at Alyantra Medicity Superspeciality Hospital, Gomti Nagar, who specialises in surgery of the eyelids, tear ducts, orbit (eye socket) and tumours around the eye. An oculoplastic surgeon is an ophthalmologist — an eye surgeon — who has completed additional fellowship training in oculoplasty, so they can treat problems such as drooping eyelids, watering eyes, eyelid lumps, eye injuries and artificial-eye fitting while protecting vision and the health of the eye. This page explains what an oculoplastic surgeon treats, Dr. Singh’s verifiable qualifications, and how to book a consultation in Lucknow.',
    'डॉ. सौमिका सिंह लखनऊ में ओकुलोप्लास्टिक सर्जन हैं, जो अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श देती हैं। वे पलकों, आंसू नलियों, ऑर्बिट (आंख का गड्ढा) और आंख के आसपास के ट्यूमर की सर्जरी में विशेषज्ञ हैं। ओकुलोप्लास्टिक सर्जन एक नेत्र रोग विशेषज्ञ (आई सर्जन) होते हैं जिन्होंने ओकुलोप्लास्टी में अतिरिक्त फ़ेलोशिप प्रशिक्षण लिया हो, इसलिए वे झुकी पलक, आंखों से पानी आना, पलक की गांठ, आंख की चोट और कृत्रिम आंख जैसी समस्याओं का इलाज नज़र और आंख की सेहत की रक्षा करते हुए कर सकते हैं। इस पेज पर जानें कि ओकुलोप्लास्टिक सर्जन किन समस्याओं का इलाज करते हैं, डॉ. सिंह की प्रमाणित योग्यताएं क्या हैं, और लखनऊ में परामर्श कैसे बुक करें।'
  ),
  atAGlance: [
    t('**Specialty:** Oculoplasty, orbit and ocular oncology', '**विशेषज्ञता:** ओकुलोप्लास्टी, ऑर्बिट और ओकुलर ऑन्कोलॉजी'),
    t('**Qualifications:** MBBS, MS (Ophthalmology), FICO; long-term fellowship in Oculoplasty & Ocular Oncology', '**योग्यता:** MBBS, MS (नेत्र विज्ञान), FICO; ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी में दीर्घकालिक फ़ेलोशिप'),
    t('**Registration:** Uttar Pradesh Medical Council, Reg. No. 137106', '**पंजीकरण:** उत्तर प्रदेश मेडिकल काउंसिल, पंजीकरण सं. 137106'),
    t('**Primary centre:** Alyantra Medicity Superspeciality Hospital, Vibhuti Khand, Gomti Nagar, Lucknow', '**मुख्य केंद्र:** अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, विभूति खंड, गोमती नगर, लखनऊ'),
    t('**Hours:** Monday–Saturday, 10 AM – 6 PM, by appointment', '**समय:** सोमवार–शनिवार, सुबह 10 – शाम 6, पूर्व अपॉइंटमेंट द्वारा'),
    t('**Languages:** English and Hindi', '**भाषाएं:** अंग्रेज़ी और हिंदी'),
  ],

  sections: [
    {
      id: 'what-is-an-oculoplastic-surgeon',
      h2: t('What is an oculoplastic surgeon?', 'ओकुलोप्लास्टिक सर्जन कौन होते हैं?'),
      paras: [
        t(
          'An oculoplastic surgeon is an eye surgeon (MS or equivalent in ophthalmology) who has completed further fellowship training in the eyelids, tear ducts, orbit and the face around the eyes. Because this surgery is done millimetres from the eye, that combined training matters for conditions such as [ptosis](/ptosis-surgery-in-lucknow), [blocked tear ducts](/dcr-surgery-in-lucknow) and eyelid tumours. For a fuller explanation of the specialty, see [what is oculoplasty?](/what-is-oculoplasty)',
          'ओकुलोप्लास्टिक सर्जन ऐसे नेत्र सर्जन (नेत्र विज्ञान में MS या समकक्ष) होते हैं जिन्होंने पलकों, आंसू नलियों, ऑर्बिट और आंखों के आसपास के चेहरे में अलग से फ़ेलोशिप प्रशिक्षण लिया हो। यह सर्जरी आंख से कुछ मिलीमीटर की दूरी पर होती है, इसलिए [टोसिस](/ptosis-surgery-in-lucknow), [बंद आंसू नली](/dcr-surgery-in-lucknow) और पलक के ट्यूमर जैसी समस्याओं में यह संयुक्त प्रशिक्षण अहम है। इस विशेषज्ञता की पूरी जानकारी के लिए [ओकुलोप्लास्टी क्या है?](/what-is-oculoplasty) देखें।'
        ),
      ],
    },
    {
      id: 'conditions-treated',
      h2: t('Conditions Dr. Saumika Singh treats in Lucknow', 'डॉ. सौमिका सिंह लखनऊ में किन समस्याओं का इलाज करती हैं'),
      subsections: [
        {
          h3: t('Eyelid conditions', 'पलक की समस्याएं'),
          bullets: [
            t('[Drooping upper eyelid (ptosis)](/ptosis-surgery-in-lucknow) in adults and children, including congenital ptosis', 'वयस्कों और बच्चों में [झुकी ऊपरी पलक (टोसिस)](/ptosis-surgery-in-lucknow), जिसमें जन्मजात टोसिस शामिल है'),
            t('[Inward-turning eyelid (entropion)](/entropion-surgery-in-lucknow) and [outward-turning eyelid (ectropion)](/ectropion-surgery-in-lucknow)', '[अंदर मुड़ी पलक (एंट्रोपियन)](/entropion-surgery-in-lucknow) और [बाहर मुड़ी पलक (एक्ट्रोपियन)](/ectropion-surgery-in-lucknow)'),
            t('Chalazion and other eyelid lumps, xanthelasma, and eyelid tears after injury', 'चालाज़ियन और पलक की अन्य गांठें, ज़ैंथेलाज़्मा, और चोट से फटी पलक'),
            t('[Upper and lower blepharoplasty](/blepharoplasty-in-lucknow) for heavy lids and under-eye bags', 'भारी पलकों और आंखों के नीचे की थैलियों के लिए [ऊपरी व निचली ब्लेफेरोप्लास्टी](/blepharoplasty-in-lucknow)'),
          ],
        },
        {
          h3: t('Watering eyes and tear-duct problems', 'आंखों से पानी आना और आंसू नली की समस्याएं'),
          bullets: [
            t('Blocked tear duct in adults — [DCR surgery](/dcr-surgery-in-lucknow) with or without intubation, and dacryocystectomy', 'वयस्कों में बंद आंसू नली — इंट्यूबेशन के साथ या बिना [DCR सर्जरी](/dcr-surgery-in-lucknow), और डैक्रियोसिस्टेक्टॉमी'),
            t('Blocked tear duct in babies — syringing and probing when needed', 'शिशुओं में बंद आंसू नली — ज़रूरत पड़ने पर सिरिंजिंग और प्रोबिंग'),
            t('Torn tear canals after injury (canalicular repair)', 'चोट से कटी आंसू नलियां (कैनालिकुलर रिपेयर)'),
          ],
        },
        {
          h3: t('Orbit, tumours and the eye socket', 'ऑर्बिट, ट्यूमर और आंख का सॉकेट'),
          bullets: [
            t('Eyelid, conjunctival and orbital tumours, with excision and reconstruction — see [eye tumours](/services/eye-tumours-ocular-oncology)', 'पलक, कंजंक्टाइवा और ऑर्बिट के ट्यूमर, निकालना और पुनर्निर्माण — देखें [आंख के ट्यूमर](/services/eye-tumours-ocular-oncology)'),
            t('Bulging eyes (proptosis), thyroid eye disease and orbital fractures — see [orbital disorders](/services/orbital-disorders-orbital-surgery)', 'उभरी आंखें (प्रॉप्टोसिस), थायरॉइड आई डिज़ीज़ और ऑर्बिट की हड्डी टूटना — देखें [ऑर्बिटल विकार](/services/orbital-disorders-orbital-surgery)'),
            t('Removal of a blind, painful eye with an implant, socket reconstruction and [artificial eye rehabilitation](/services/socket-reconstruction-artificial-eye-rehabilitation)', 'अंधी, दर्द भरी आंख को इम्प्लांट के साथ निकालना, सॉकेट पुनर्निर्माण और [कृत्रिम आंख पुनर्वास](/services/socket-reconstruction-artificial-eye-rehabilitation)'),
          ],
        },
        {
          h3: t('Botox around the eyes', 'आंखों के आसपास बोटॉक्स'),
          bullets: [
            t('Therapeutic Botox for blepharospasm and hemifacial spasm', 'ब्लेफ़ेरोस्पाज़्म और हेमीफ़ेशियल स्पाज़्म के लिए उपचारात्मक बोटॉक्स'),
            t('Cosmetic Botox for lines around the eyes — see [Botox & periocular aesthetics](/services/botox-eyelid-cosmetic-surgery-periocular-aesthetics)', 'आंखों के आसपास की रेखाओं के लिए कॉस्मेटिक बोटॉक्स — देखें [बोटॉक्स और पेरिओकुलर एस्थेटिक्स](/services/botox-eyelid-cosmetic-surgery-periocular-aesthetics)'),
          ],
        },
      ],
    },
    {
      id: 'qualifications',
      h2: t('Qualifications and experience', 'योग्यता और अनुभव'),
      paras: [
        t(
          'You can verify a doctor’s registration with the state medical council. Dr. Saumika Singh is registered with the Uttar Pradesh Medical Council (Reg. No. 137106). Her training and posts are listed below; full details are on the [About page](/about).',
          'आप राज्य मेडिकल काउंसिल में किसी भी डॉक्टर का पंजीकरण जांच सकते हैं। डॉ. सौमिका सिंह उत्तर प्रदेश मेडिकल काउंसिल में पंजीकृत हैं (पंजीकरण सं. 137106)। उनका प्रशिक्षण और पद नीचे दिए गए हैं; पूरी जानकारी [About पेज](/about) पर है।'
        ),
      ],
      table: {
        head: [t('Qualification / post', 'योग्यता / पद'), t('Institution', 'संस्थान'), t('Year', 'वर्ष')],
        rows: [
          [t('MBBS', 'MBBS'), t('Calcutta National Medical College, Kolkata', 'कलकत्ता नेशनल मेडिकल कॉलेज, कोलकाता'), t('2014', '2014')],
          [t('FICO', 'FICO'), t('International Council of Ophthalmology, UK', 'इंटरनेशनल काउंसिल ऑफ़ ऑफ़्थैल्मोलॉजी, UK'), t('2019', '2019')],
          [t('MS (Ophthalmology)', 'MS (नेत्र विज्ञान)'), t('Regional Institute of Ophthalmology, Kolkata', 'रीजनल इंस्टीट्यूट ऑफ़ ऑफ़्थैल्मोलॉजी, कोलकाता'), t('2020', '2020')],
          [t('Long-term Fellowship, Oculoplasty & Ocular Oncology', 'दीर्घकालिक फ़ेलोशिप, ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी'), t('Dr. Shroff’s Charity Eye Hospital, New Delhi', 'डॉ. श्रॉफ़्स चैरिटी आई हॉस्पिटल, नई दिल्ली'), t('2022', '2022')],
          [t('Consultant, Oculoplasty', 'कंसल्टेंट, ओकुलोप्लास्टी'), t('Sadhuram Eye Hospital, Hyderabad', 'साधुराम आई हॉस्पिटल, हैदराबाद'), t('2023–2024', '2023–2024')],
          [t('Consultant, Oculoplasty', 'कंसल्टेंट, ओकुलोप्लास्टी'), t('Chandra Superspecialty Eye Hospital, Lucknow', 'चंद्रा सुपरस्पेशलिटी आई हॉस्पिटल, लखनऊ'), t('2025–2026', '2025–2026')],
        ],
      },
      bullets: [
        t('Peer-reviewed research and case reports in national and international ophthalmology journals — see [publications](/publications)', 'राष्ट्रीय और अंतर्राष्ट्रीय नेत्र विज्ञान पत्रिकाओं में सहकर्मी-समीक्षित शोध और केस रिपोर्ट — देखें [प्रकाशन](/publications)'),
        t('Presentations at ophthalmology conferences including OPAI, APAO–AIOS and ISOO', 'OPAI, APAO–AIOS और ISOO सहित नेत्र विज्ञान सम्मेलनों में प्रस्तुतियां'),
        t('Documented, consented patient case studies — see [surgical outcomes](/surgical-outcomes)', 'प्रलेखित, सहमति प्राप्त मरीज़ केस स्टडी — देखें [सर्जिकल परिणाम](/surgical-outcomes)'),
      ],
    },
    {
      id: 'where-she-consults',
      h2: t('Where Dr. Saumika Singh consults in Lucknow', 'डॉ. सौमिका सिंह लखनऊ में कहां परामर्श देती हैं'),
      paras: [
        t(
          'Dr. Singh’s primary centre is **Alyantra Medicity Superspeciality Hospital**, Plot No. TC-49, V-XIII, Vibhuti Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010. Consultations are by appointment, Monday to Saturday, 10 AM to 6 PM. Surgery is performed in the hospital’s operation theatres, and she also visits other centres as required — please call to confirm the location before your visit.',
          'डॉ. सिंह का मुख्य केंद्र **अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल**, प्लॉट नं. TC-49, V-XIII, विभूति खंड, गोमती नगर, लखनऊ, उत्तर प्रदेश 226010 है। परामर्श सोमवार से शनिवार, सुबह 10 से शाम 6 बजे तक, पूर्व अपॉइंटमेंट द्वारा होता है। सर्जरी अस्पताल के ऑपरेशन थिएटर में होती है, और वे ज़रूरत के अनुसार अन्य केंद्रों पर भी जाती हैं — कृपया आने से पहले फ़ोन करके स्थान की पुष्टि करें।'
        ),
        t(
          'Patients come from across Lucknow and from other districts of Uttar Pradesh. If you are travelling from outside the city, ask when booking whether investigations or surgery can be arranged on the same visit.',
          'मरीज़ पूरे लखनऊ और उत्तर प्रदेश के अन्य ज़िलों से आते हैं। अगर आप शहर के बाहर से आ रहे हैं, तो बुकिंग के समय पूछें कि क्या जांच या सर्जरी उसी विज़िट में हो सकती है।'
        ),
      ],
    },
    {
      id: 'how-to-choose',
      h2: t('How to choose an oculoplastic surgeon in Lucknow', 'लखनऊ में ओकुलोप्लास्टिक सर्जन कैसे चुनें'),
      paras: [t('Whichever surgeon you see, these questions help you make an informed choice:', 'आप किसी भी सर्जन को दिखाएं, ये सवाल सोच-समझकर निर्णय लेने में मदद करते हैं:')],
      bullets: [
        t('Are they an ophthalmologist with formal fellowship training in oculoplasty? Is their medical council registration verifiable?', 'क्या वे ओकुलोप्लास्टी में औपचारिक फ़ेलोशिप प्रशिक्षण वाले नेत्र रोग विशेषज्ञ हैं? क्या उनका मेडिकल काउंसिल पंजीकरण जांचा जा सकता है?'),
        t('Do they perform your specific procedure regularly, and can they explain the options rather than a single operation?', 'क्या वे आपकी विशेष प्रक्रिया नियमित रूप से करते हैं, और क्या वे सिर्फ़ एक ऑपरेशन के बजाय सभी विकल्प समझा सकते हैं?'),
        t('Do they examine the whole eye — vision, dry eye, eyelid closure — and not just the eyelid?', 'क्या वे सिर्फ़ पलक नहीं, पूरी आंख — नज़र, सूखी आंख, पलक का बंद होना — की जांच करते हैं?'),
        t('Do they explain risks, recovery and the chance of needing further surgery honestly?', 'क्या वे जोखिम, रिकवरी और दोबारा सर्जरी की संभावना ईमानदारी से बताते हैं?'),
        t('Do they give a clear written estimate, and explain what insurance may or may not cover?', 'क्या वे साफ़ लिखित अनुमान देते हैं, और बताते हैं कि इंश्योरेंस क्या कवर करेगा और क्या नहीं?'),
        t('Do they share genuine, consented case examples and have independent patient reviews you can read?', 'क्या वे सहमति प्राप्त असली केस उदाहरण दिखाते हैं, और क्या स्वतंत्र मरीज़ समीक्षाएं पढ़ी जा सकती हैं?'),
      ],
      subsections: [
        {
          h3: t('Do you need a subspecialist, or will a general eye doctor do?', 'सब-स्पेशलिस्ट चाहिए या सामान्य नेत्र डॉक्टर काफ़ी हैं?'),
          paras: [
            t(
              'A general ophthalmologist is usually the right first stop for most eye problems, and many will refer you on. Ask for an oculoplastic opinion when the problem is in the eyelid, tear duct or eye socket rather than inside the eye — for example, a droopy lid that blocks your vision, a watering eye that has not settled with drops, an eyelid lump that keeps coming back or bleeds, an eye that looks more prominent than the other, or a child whose eyelid covers the pupil. It is also sensible to see a subspecialist before any repeat eyelid operation, or before cosmetic eyelid surgery if you have dry eye or thyroid problems. A fuller list of referral reasons is in [what is oculoplasty?](/what-is-oculoplasty)',
              'ज़्यादातर आंखों की समस्याओं में सामान्य नेत्र रोग विशेषज्ञ ही पहला सही पड़ाव होते हैं, और कई बार वे आगे रेफ़र करते हैं। जब समस्या आंख के अंदर नहीं बल्कि पलक, आंसू नली या आंख के गड्ढे (ऑर्बिट) में हो, तब ओकुलोप्लास्टिक राय लें — जैसे झुकी पलक जो नज़र रोके, ड्रॉप्स से ठीक न होने वाला आंखों से पानी आना, बार-बार लौटने वाली या खून आने वाली पलक की गांठ, एक आंख का दूसरी से ज़्यादा उभरी दिखना, या बच्चे की पलक का पुतली को ढकना। पलक की दोबारा सर्जरी से पहले, या सूखी आंख या थायरॉइड की समस्या होने पर कॉस्मेटिक पलक सर्जरी से पहले भी सब-स्पेशलिस्ट को दिखाना समझदारी है। रेफ़रल के कारणों की पूरी सूची [ओकुलोप्लास्टी क्या है?](/what-is-oculoplasty) पेज पर है।'
            ),
          ],
        },
        {
          h3: t('Patient reviews', 'मरीज़ों की समीक्षाएं'),
          paras: [
            t(
              'We do not publish selected testimonials on this website. Independent reviews from Dr. Singh’s patients can be read on her [Google Business Profile](' + MAPS + '). Reviews describe individual experiences; results differ between patients.',
              'हम इस वेबसाइट पर चुनी हुई प्रशंसाएं प्रकाशित नहीं करते। डॉ. सिंह के मरीज़ों की स्वतंत्र समीक्षाएं उनके [Google बिज़नेस प्रोफ़ाइल](' + MAPS + ') पर पढ़ी जा सकती हैं। समीक्षाएं व्यक्तिगत अनुभव बताती हैं; हर मरीज़ का परिणाम अलग होता है।'
            ),
          ],
        },
      ],
    },
    {
      id: 'first-visit',
      h2: t('What happens at your first consultation', 'पहले परामर्श में क्या होता है'),
      paras: [
        t(
          'Book by phone, WhatsApp or the contact form, and bring previous eye reports, scans and a list of your medicines. Dr. Singh takes a history, examines the eyes, eyelids and tear system, arranges any tests needed, and explains the diagnosis, treatment options (including non-surgical ones), risks and recovery. Eye drops may be used, so plan not to drive straight after. A step-by-step guide is in [your oculoplasty consultation: what to expect](/oculoplasty-consultation-what-to-expect).',
          'फ़ोन, WhatsApp या संपर्क फ़ॉर्म से बुक करें, और पुरानी आंखों की रिपोर्ट, स्कैन और दवाओं की सूची साथ लाएं। डॉ. सिंह इतिहास लेकर आंख, पलक और आंसू तंत्र की जांच करती हैं, ज़रूरी जांचें कराती हैं, और निदान, इलाज के विकल्प (बिना सर्जरी वाले भी), जोखिम और रिकवरी समझाती हैं। ड्रॉप्स डाली जा सकती हैं, इसलिए तुरंत गाड़ी न चलाने की योजना रखें। पूरी जानकारी [ओकुलोप्लास्टी परामर्श में क्या होता है](/oculoplasty-consultation-what-to-expect) पेज पर है।'
        ),
      ],
      callout: {
        tone: 'urgent',
        title: t('Do not wait for an appointment if…', 'अपॉइंटमेंट का इंतज़ार न करें अगर…'),
        text: t(
          'You have a sudden loss of vision, a sudden droopy eyelid with double vision or headache, a painful red swelling around the eye with fever, a chemical splash, or an injury that has cut the eyelid or may have damaged the eye. Go to the nearest emergency department immediately.',
          'अचानक नज़र चली जाए, अचानक पलक झुके और साथ में दोहरा दिखे या सिरदर्द हो, आंख के आसपास बुखार के साथ दर्द भरी लाल सूजन हो, आंख में केमिकल गिरे, या चोट से पलक कट गई हो या आंख को नुकसान हुआ हो — तो तुरंत नज़दीकी इमरजेंसी में जाएं।'
        ),
      },
    },
  ],

  image: {
    src: '/dr-saumika.webp',
    width: 1194,
    height: 1317,
    alt: t('Dr. Saumika Singh, oculoplastic and ocular oncology surgeon in Lucknow', 'डॉ. सौमिका सिंह, लखनऊ में ओकुलोप्लास्टिक व ओकुलर ऑन्कोलॉजी सर्जन'),
    caption: t('Dr. Saumika Singh, MS (Ophthalmology), FICO — Oculoplasty, Orbit & Ocular Oncology, Lucknow.', 'डॉ. सौमिका सिंह, MS (नेत्र विज्ञान), FICO — ओकुलोप्लास्टी, ऑर्बिट और ओकुलर ऑन्कोलॉजी, लखनऊ।'),
  },

  whyDrSaumika: [
    t('Fellowship training dedicated to Oculoplasty & Ocular Oncology, after MS in Ophthalmology', 'नेत्र विज्ञान में MS के बाद ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी को समर्पित फ़ेलोशिप प्रशिक्षण'),
    t('One specialist for eyelid, tear duct, orbit, tumour and socket problems, so care is not split between departments', 'पलक, आंसू नली, ऑर्बिट, ट्यूमर और सॉकेट की समस्याओं के लिए एक ही विशेषज्ञ, ताकि इलाज अलग-अलग विभागों में न बंटे'),
    t('Publishes and presents research in ophthalmology, and documents consented case outcomes', 'नेत्र विज्ञान में शोध प्रकाशित करती और प्रस्तुत करती हैं, और सहमति प्राप्त केस परिणामों का दस्तावेज़ीकरण करती हैं'),
    t('Consults in both English and Hindi', 'अंग्रेज़ी और हिंदी दोनों में परामर्श'),
  ],

  faqs: [
    {
      q: t('What does an oculoplastic surgeon do?', 'ओकुलोप्लास्टिक सर्जन क्या करते हैं?'),
      a: t('An oculoplastic surgeon is an eye surgeon who specialises in the eyelids, tear ducts, orbit and the area around the eye. They treat drooping or turned eyelids, watering eyes from blocked tear ducts, eyelid and orbital tumours, eye-socket problems and injuries, and perform cosmetic eyelid procedures with attention to eye health.', 'ओकुलोप्लास्टिक सर्जन पलकों, आंसू नलियों, ऑर्बिट और आंख के आसपास के क्षेत्र में विशेषज्ञ नेत्र सर्जन होते हैं। वे झुकी या मुड़ी पलकें, बंद आंसू नली से पानी आना, पलक और ऑर्बिट के ट्यूमर, आंख के सॉकेट की समस्याएं और चोटों का इलाज करते हैं, और आंख की सेहत का ध्यान रखते हुए सौंदर्य वाली पलक प्रक्रियाएं करते हैं।'),
    },
    {
      q: t('Is an oculoplastic surgeon the same as a plastic surgeon?', 'क्या ओकुलोप्लास्टिक सर्जन और प्लास्टिक सर्जन एक ही हैं?'),
      a: t('No. A plastic surgeon trains in general surgery and then plastic surgery of the whole body. An oculoplastic surgeon trains in ophthalmology and then sub-specialises in the eyelids, tear ducts and orbit. Both may perform eyelid surgery; an oculoplastic surgeon also manages the eye itself.', 'नहीं। प्लास्टिक सर्जन जनरल सर्जरी और फिर पूरे शरीर की प्लास्टिक सर्जरी में प्रशिक्षित होते हैं। ओकुलोप्लास्टिक सर्जन नेत्र विज्ञान में प्रशिक्षण लेकर फिर पलकों, आंसू नलियों और ऑर्बिट में उप-विशेषज्ञता हासिल करते हैं। दोनों पलक की सर्जरी कर सकते हैं; ओकुलोप्लास्टिक सर्जन आंख का इलाज भी करते हैं।'),
    },
    {
      q: t('Do I need a referral to see an oculoplastic surgeon in Lucknow?', 'क्या लखनऊ में ओकुलोप्लास्टिक सर्जन को दिखाने के लिए रेफ़रल चाहिए?'),
      a: t('No referral is needed to book a consultation with Dr. Saumika Singh. If another doctor has already examined you, bring their notes and any test results.', 'डॉ. सौमिका सिंह से परामर्श बुक करने के लिए रेफ़रल की ज़रूरत नहीं है। अगर किसी दूसरे डॉक्टर ने पहले जांच की है, तो उनके नोट्स और जांच रिपोर्ट साथ लाएं।'),
    },
    {
      q: t('Where can I read reviews of Dr. Saumika Singh?', 'डॉ. सौमिका सिंह की समीक्षाएं कहां पढ़ें?'),
      a: t('Independent patient reviews are on her Google Business Profile (search “Dr Saumika Singh Oculoplasty Lucknow” on Google Maps). This website does not publish selected testimonials.', 'स्वतंत्र मरीज़ समीक्षाएं उनके Google बिज़नेस प्रोफ़ाइल पर हैं (Google Maps पर “Dr Saumika Singh Oculoplasty Lucknow” खोजें)। यह वेबसाइट चुनी हुई प्रशंसाएं प्रकाशित नहीं करती।'),
    },
    {
      q: t('Does Dr. Saumika Singh treat children?', 'क्या डॉ. सौमिका सिंह बच्चों का इलाज करती हैं?'),
      a: t('Yes. She treats children with conditions such as congenital ptosis, blocked tear ducts and eyelid lumps. Surgery in young children is usually done under general anaesthesia with a paediatric anaesthetist.', 'हां। वे जन्मजात टोसिस, बंद आंसू नली और पलक की गांठ जैसी समस्याओं वाले बच्चों का इलाज करती हैं। छोटे बच्चों की सर्जरी आमतौर पर बच्चों के एनेस्थेटिस्ट के साथ जनरल एनेस्थीसिया में होती है।'),
    },
    {
      q: t('How do I book an appointment?', 'अपॉइंटमेंट कैसे बुक करें?'),
      a: t('Call or WhatsApp +91 74600 88838, email contact@drsaumika.in, or use the contact form on this website. Consultations at Alyantra Medicity Superspeciality Hospital, Gomti Nagar are Monday to Saturday, 10 AM to 6 PM, by appointment.', '+91 74600 88838 पर फ़ोन या WhatsApp करें, contact@drsaumika.in पर ईमेल करें, या इस वेबसाइट का संपर्क फ़ॉर्म इस्तेमाल करें। अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श सोमवार से शनिवार, सुबह 10 से शाम 6 बजे तक, पूर्व अपॉइंटमेंट द्वारा होता है।'),
    },
  ],

  cta: {
    title: t('Book a consultation with Dr. Saumika Singh', 'डॉ. सौमिका सिंह से परामर्श बुक करें'),
    text: t('Tell us briefly what the problem is when you call or message, so the right tests can be planned for your visit.', 'फ़ोन या मैसेज करते समय संक्षेप में समस्या बताएं, ताकि आपकी विज़िट के लिए सही जांचों की योजना बन सके।'),
  },

  related: [
    { path: '/about', label: t('About Dr. Saumika Singh', 'डॉ. सौमिका सिंह के बारे में') },
    { path: '/ptosis-surgery-in-lucknow', label: t('Ptosis (drooping eyelid) surgery', 'टोसिस (झुकी पलक) सर्जरी') },
    { path: '/dcr-surgery-in-lucknow', label: t('DCR surgery for a blocked tear duct', 'बंद आंसू नली के लिए DCR सर्जरी') },
    { path: '/blepharoplasty-in-lucknow', label: t('Blepharoplasty (upper & lower eyelid surgery)', 'ब्लेफेरोप्लास्टी (ऊपरी व निचली पलक सर्जरी)') },
    { path: '/oculoplasty-surgery-cost-in-lucknow', label: t('What affects oculoplasty surgery cost', 'ओकुलोप्लास्टी सर्जरी का खर्च किन बातों पर निर्भर') },
    { path: '/surgical-outcomes', label: t('Surgical outcomes (consented case studies)', 'सर्जिकल परिणाम (सहमति प्राप्त केस स्टडी)') },
  ],

  references: [
    { label: 'Eyelid problems', source: 'NHS (UK)', url: 'https://www.nhs.uk/conditions/eyelid-problems/' },
    { label: 'What is a blocked tear duct?', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/diseases/what-is-blocked-tear-duct' },
    { label: 'Eyelid surgery', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/treatments/eyelid-surgery' },
  ],

  schema: { type: 'Physician', name: 'Dr. Saumika Singh' },

  reviewerNotes: [
    'Confirm the Google Maps search link resolves to her GBP listing; replace with the exact place URL if available.',
    'Visiting centres intentionally not named ("visits other centres as required").',
    'Confirm she treats children and that paediatric GA is available at Alyantra.',
    'Dates for Sadhuram (2023–2024) and Chandra (2025–2026) are from the About page; confirm the Chandra end date is accurate.',
  ],
};

export default guide;
