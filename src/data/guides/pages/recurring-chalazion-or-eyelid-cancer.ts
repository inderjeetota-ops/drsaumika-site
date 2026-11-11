import type { Guide, L } from '../types';

const t = (en: string, hi: string): L => ({ en, hi });

const guide: Guide = {
  slug: 'recurring-chalazion-or-eyelid-cancer',
  primaryKeyword: 'recurring chalazion',
  secondaryKeywords: ['recurrent chalazion', 'chalazion keeps coming back', 'chalazion or cancer', 'can a chalazion be cancerous', 'sebaceous carcinoma vs chalazion', 'chalazion same spot', 'eyelid lump biopsy'],
  hindiKeywords: ['बार-बार होने वाली गुहेरी', 'बार-बार होने वाला चालाज़ियन', 'पलक पर बार-बार गांठ', 'क्या पलक की गांठ कैंसर हो सकती है', 'आंख की पलक पर गांठ कैंसर'],

  metaTitle: t(
    'Recurring Chalazion: Could It Be Cancer? | Dr Saumika Singh',
    'बार-बार होने वाली गुहेरी: क्या यह कैंसर हो सकता है? | डॉ. सौमिका'
  ),
  metaDescription: t(
    'Recurring chalazion keeps coming back? Learn the usual benign causes, warning signs of eyelid cancer, how a biopsy works and when to see an oculoplasty surgeon.',
    'बार-बार होने वाली गुहेरी (चालाज़ियन) या आंख की पलक पर गांठ: आम कारण, कैंसर के चेतावनी संकेत, बायोप्सी कैसे होती है और ओकुलोप्लास्टी सर्जन को कब दिखाएं।'
  ),
  h1: t('Recurring Chalazion: Why It Keeps Coming Back and When It Could Be Cancer', 'बार-बार होने वाली गुहेरी (चालाज़ियन): कारण, और कब यह कैंसर हो सकता है'),
  lead: t(
    'A recurring chalazion is most often a benign problem caused by ongoing blockage of the eyelid oil glands, but a lump that keeps coming back in the same spot should be examined and, if needed, biopsied because a few eyelid cancers can look exactly like a chalazion. The usual reasons for recurrence are eyelid-margin inflammation (blepharitis), meibomian gland dysfunction, rosacea or incomplete drainage. Warning signs include the same site returning, eyelash loss over the lump, bleeding or a distorted lid edge. This guide explains what to watch for, what a biopsy involves and when to seek a specialist.',
    'बार-बार होने वाली गुहेरी (चालाज़ियन) ज़्यादातर पलक की तेल ग्रंथियों के लगातार बंद होने से बनी साधारण (बिना कैंसर की) समस्या होती है, लेकिन जो गांठ ठीक उसी जगह बार-बार लौटे, उसकी जांच और ज़रूरत हो तो बायोप्सी करवानी चाहिए, क्योंकि कुछ पलक के कैंसर बिल्कुल चालाज़ियन जैसे दिख सकते हैं। दोबारा होने के आम कारण हैं पलक के किनारे की सूजन (ब्लेफेराइटिस), मीबोमियन ग्रंथि की गड़बड़ी, रोज़ेशिया या अधूरी निकासी। चेतावनी के संकेत हैं एक ही जगह बार-बार गांठ, गांठ पर पलकों के बाल झड़ना, खून आना या पलक के किनारे का बिगड़ना। यह गाइड बताता है कि क्या देखें, बायोप्सी में क्या होता है और विशेषज्ञ को कब दिखाएं।'
  ),
  atAGlance: [
    t('**Most common reason:** ongoing blocked oil glands (blepharitis, meibomian gland dysfunction, rosacea)', '**सबसे आम कारण:** तेल ग्रंथियों का लगातार बंद होना (ब्लेफेराइटिस, मीबोमियन ग्रंथि की गड़बड़ी, रोज़ेशिया)'),
    t('**Key warning sign:** a “chalazion” returning in the same spot', '**मुख्य चेतावनी संकेत:** “चालाज़ियन” का ठीक उसी जगह लौटना'),
    t('**Other signs:** eyelash loss over the lump, bleeding or ulcer, distorted lid margin, yellowish firm thickening', '**अन्य संकेत:** गांठ पर बाल झड़ना, खून आना या घाव, पलक के किनारे का बिगड़ना, पीली-सी सख्त मोटाई'),
    t('**Test:** biopsy, with microscope (histopathology) examination of removed tissue', '**जांच:** बायोप्सी, यानी निकाले गए ऊतक की माइक्रोस्कोप (हिस्टोपैथोलॉजी) जांच'),
    t('**Urgent:** rapid growth, bleeding or ulceration, bulging eye or double vision', '**जल्दी दिखाएं:** तेज़ी से बढ़ना, खून या घाव, आंख उभरना या दोहरा दिखना'),
    t('**Where:** Alyantra Medicity Superspeciality Hospital, Gomti Nagar, Lucknow', '**कहां:** अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर, लखनऊ'),
  ],

  sections: [
    {
      id: 'why-chalazion-recurs',
      h2: t('Why does my chalazion keep coming back?', 'मेरी गुहेरी (चालाज़ियन) बार-बार क्यों लौट आती है?'),
      paras: [
        t(
          'A chalazion forms when one of the oil (meibomian) glands in the eyelid gets blocked. If the underlying reason for the blockage is still there, another gland can block, or the same one can again, and the lump seems to “come back”. Common benign reasons include:',
          'चालाज़ियन तब बनता है जब पलक की तेल (मीबोमियन) ग्रंथियों में से कोई एक बंद हो जाती है। अगर बंद होने का मूल कारण बना रहे, तो दूसरी ग्रंथि या वही ग्रंथि फिर बंद हो सकती है और गांठ “दोबारा आती” लगती है। आम साधारण कारण:'
        ),
      ],
      bullets: [
        t('Blepharitis: long-standing inflammation of the eyelid margin, with flakes, crusting, redness or itching', 'ब्लेफेराइटिस: पलक के किनारे की लंबे समय की सूजन, जिसमें पपड़ी, लालिमा या खुजली रहती है'),
        t('Meibomian gland dysfunction: thick, poorly flowing oil that blocks the gland openings', 'मीबोमियन ग्रंथि की गड़बड़ी: गाढ़ा तेल जो ग्रंथि के मुंह को बंद करता है'),
        t('Rosacea (facial redness and spots), which often affects the eyelid glands too', 'रोज़ेशिया (चेहरे पर लालिमा और दाने), जो अक्सर पलक की ग्रंथियों को भी प्रभावित करता है'),
        t('Incomplete drainage, where part of the earlier lump was left behind or the original lump never fully settled', 'अधूरी निकासी, जब पहले वाली गांठ का कुछ हिस्सा रह गया हो या गांठ पूरी तरह बैठी ही न हो'),
        t('A previous chalazion, which makes another more likely', 'पहले हुआ चालाज़ियन, जिससे दूसरा होने की संभावना बढ़ती है'),
      ],
      callout: {
        tone: 'info',
        title: t('Most recurrent chalazia are benign', 'ज़्यादातर बार-बार होने वाले चालाज़ियन साधारण होते हैं'),
        text: t(
          'Most chalazia, including ones that return, are not cancer. But because a small number of eyelid tumours can imitate them, doctors advise that a lump which recurs, especially in the same spot, is examined carefully rather than simply drained again.',
          'ज़्यादातर चालाज़ियन, लौटने वाले भी, कैंसर नहीं होते। लेकिन क्योंकि पलक के कुछ ट्यूमर इनकी नकल कर सकते हैं, डॉक्टर सलाह देते हैं कि बार-बार आने वाली गांठ, खासकर उसी जगह, को सिर्फ़ फिर से निकालने के बजाय ध्यान से जांचा जाए।'
        ),
      },
    },
    {
      id: 'reduce-recurrence',
      h2: t('How can I reduce the chance of another chalazion?', 'दोबारा चालाज़ियन होने की संभावना कैसे कम करें?'),
      paras: [
        t(
          'If your doctor finds a benign cause, treating it is the main way to prevent repeats. Plain treatment of the lump alone does not change the glands that keep blocking.',
          'अगर डॉक्टर को कोई साधारण कारण मिलता है, तो उसका इलाज ही दोबारा होने से रोकने का मुख्य तरीका है। सिर्फ़ गांठ का इलाज उन ग्रंथियों को नहीं बदलता जो बार-बार बंद होती हैं।'
        ),
      ],
      bullets: [
        t('Make warm compresses and gentle lid cleaning a long-term daily habit, not only when a lump appears', 'गर्म सिकाई और पलक की हल्की सफ़ाई को रोज़ की आदत बनाएं, सिर्फ़ गांठ दिखने पर नहीं'),
        t('Have blepharitis, dry eye and rosacea assessed and treated as advised by your doctor', 'ब्लेफेराइटिस, ड्राई आई और रोज़ेशिया की जांच और इलाज डॉक्टर की सलाह से करवाएं'),
        t('Do not squeeze or prick the lump, and avoid putting kajal or home remedies in the eye', 'गांठ को दबाएं या फोड़ें नहीं, और आंख में काजल या घरेलू नुस्खे न डालें'),
        t('Remove eye make-up fully every night and replace old eye cosmetics', 'रोज़ रात को आई मेकअप पूरी तरह हटाएं और पुराने आई कॉस्मेटिक बदलें'),
        t('Keep follow-up visits, so that any lump that behaves differently is noticed early', 'फ़ॉलो-अप पर आते रहें, ताकि अलग तरह से बर्ताव करने वाली किसी भी गांठ का जल्दी पता चल सके'),
      ],
    },
    {
      id: 'look-alikes',
      h2: t('What else can look like a chalazion?', 'चालाज़ियन जैसा और क्या दिख सकता है?'),
      paras: [
        t(
          'Several eyelid lumps can be mistaken for a chalazion. Most are harmless, and a few are not, which is why the examination matters more than the name a lump is given at first sight.',
          'पलक की कई गांठें चालाज़ियन समझ ली जा सकती हैं। ज़्यादातर नुकसानदेह नहीं होतीं, कुछ होती हैं, इसीलिए पहली नज़र में गांठ को दिए गए नाम से ज़्यादा जांच मायने रखती है।'
        ),
      ],
      table: {
        caption: t('Overview for patients. Only an examination, and sometimes a biopsy, can tell these apart.', 'मरीज़ों के लिए सारांश। इनमें फ़र्क सिर्फ़ जांच, और कभी-कभी बायोप्सी, से पता चलता है।'),
        head: [t('Lump', 'गांठ'), t('What it is', 'यह क्या है'), t('Why it can be confused with a chalazion', 'चालाज़ियन से भ्रम क्यों होता है')],
        rows: [
          [t('Tarsal cyst', 'टार्सल सिस्ट'), t('A benign cyst within the lid’s supporting plate', 'पलक की सहारा देने वाली प्लेट के भीतर साधारण सिस्ट'), t('A firm upper-lid swelling that is usually not painful; see the case below', 'सख्त ऊपरी पलक की सूजन, जिसमें आमतौर पर दर्द नहीं होता; नीचे दिया केस देखें')],
          [t('Other eyelid cysts and papilloma', 'अन्य पलक की सिस्ट और पैपिलोमा'), t('Benign skin lumps or small wart-like growths', 'त्वचा की साधारण गांठें या मस्से जैसी छोटी वृद्धि'), t('A small bump on the lid that does not settle with compresses', 'पलक पर छोटा उभार जो सिकाई से नहीं बैठता')],
          [t('Basal cell carcinoma', 'बेसल सेल कार्सिनोमा'), t('The most common skin cancer of the eyelid; usually grows slowly', 'पलक का सबसे आम त्वचा कैंसर; आमतौर पर धीरे बढ़ता है'), t('A nodule, usually not painful, that can have a pearly look, may bleed or ulcerate and can cause loss of lashes', 'गांठ, जिसमें आमतौर पर दर्द नहीं होता, जो मोती जैसी दिख सकती है, खून या घाव कर सकती है और बाल झड़ा सकती है')],
          [t('Sebaceous gland carcinoma', 'सीबेशियस ग्लैंड कार्सिनोमा'), t('A less common cancer arising from the eyelid oil glands, more often in older adults', 'पलक की तेल ग्रंथियों से बनने वाला कम आम कैंसर, जो बड़ी उम्र में ज़्यादा होता है'), t('Can look like a recurrent chalazion, especially in the upper lid, or like long-standing blepharitis that does not respond to treatment', 'बार-बार होने वाले चालाज़ियन जैसा दिख सकता है, खासकर ऊपरी पलक में, या ऐसी पुरानी ब्लेफेराइटिस जैसा जो इलाज से ठीक नहीं होती')],
        ],
      },
    },
    {
      id: 'warning-signs',
      h2: t('Warning signs that a “chalazion” may be something else', 'कौन-से संकेत बताते हैं कि “चालाज़ियन” कुछ और हो सकता है'),
      paras: [
        t(
          'None of these means you have cancer, but each is a reason to be examined by an eye specialist rather than treating the lump at home or repeatedly draining it.',
          'इनमें से कोई भी संकेत यह नहीं बताता कि आपको कैंसर है, लेकिन हर संकेत नेत्र विशेषज्ञ से जांच करवाने का कारण है, न कि घर पर इलाज करने या बार-बार निकलवाने का।'
        ),
      ],
      table: {
        head: [t('Warning sign', 'चेतावनी संकेत'), t('Why it matters', 'यह क्यों मायने रखता है')],
        rows: [
          [t('The lump returns in the same spot', 'गांठ ठीक उसी जगह लौटती है'), t('Repeated blockage of one spot may reflect a growth under the surface rather than a simple gland blockage', 'एक ही जगह बार-बार बंद होना किसी साधारण ग्रंथि-रुकावट के बजाय सतह के नीचे किसी वृद्धि का संकेत हो सकता है')],
          [t('Eyelash loss over or near the lump', 'गांठ पर या पास में पलकों के बाल झड़ना'), t('Tumours can destroy the lash roots; a chalazion usually leaves the lashes in place', 'ट्यूमर बालों की जड़ों को नष्ट कर सकते हैं; चालाज़ियन में आमतौर पर बाल बने रहते हैं')],
          [t('Ulceration, crusting or bleeding', 'घाव, पपड़ी या खून आना'), t('Surface breakdown of a lump is not typical of a simple chalazion', 'गांठ की सतह का टूटना साधारण चालाज़ियन के लिए सामान्य नहीं है')],
          [t('Distorted or thickened lid margin', 'पलक के किनारे का बिगड़ना या मोटा होना'), t('Can point to infiltration of the lid edge by a growth', 'यह पलक के किनारे में वृद्धि के फैलने का संकेत हो सकता है')],
          [t('Yellowish, firm thickening of the lid', 'पलक की पीली-सी सख्त मोटाई'), t('A recognised feature of sebaceous gland carcinoma', 'सीबेशियस ग्लैंड कार्सिनोमा का एक जाना-पहचाना लक्षण')],
          [t('One-sided red eye or blepharitis that does not respond to treatment', 'एक ही आंख की लालिमा या ब्लेफेराइटिस जो इलाज से नहीं जाती'), t('Some eyelid cancers imitate long-standing “conjunctivitis” or blepharitis', 'कुछ पलक के कैंसर पुरानी “कंजंक्टिवाइटिस” या ब्लेफेराइटिस की नकल करते हैं')],
          [t('Older age with a new, persistent lump', 'बड़ी उम्र में नई, टिकी रहने वाली गांठ'), t('Sebaceous gland carcinoma is more often found in older adults', 'सीबेशियस ग्लैंड कार्सिनोमा बड़ी उम्र में ज़्यादा मिलता है')],
        ],
      },
      callout: {
        tone: 'urgent',
        title: t('When to be seen quickly', 'कब जल्दी दिखाएं'),
        text: t(
          'See an eye specialist urgently, within days, for a lump that is growing quickly, bleeding or ulcerated, or that comes with the eye looking pushed forward or double vision. Seek same-day care or go to an emergency department if redness and swelling are spreading across the eyelid or face with fever, pain on moving the eye or reduced vision, as these can be signs of cellulitis.',
          'जो गांठ तेज़ी से बढ़ रही हो, खून या घाव कर रही हो, या जिसके साथ आंख बाहर की ओर उभरी दिखे या दोहरा दिखे, उसके लिए नेत्र विशेषज्ञ को कुछ ही दिनों में तुरंत दिखाएं। अगर पलक या चेहरे पर लालिमा और सूजन फैल रही हो और साथ में बुखार, आंख हिलाने पर दर्द या नज़र कम होना हो, तो उसी दिन दिखाएं या इमरजेंसी में जाएं, क्योंकि ये सेल्युलाइटिस के लक्षण हो सकते हैं।'
        ),
      },
    },
    {
      id: 'biopsy',
      h2: t('What does an eyelid lump biopsy involve?', 'पलक की गांठ की बायोप्सी में क्या होता है?'),
      paras: [
        t(
          'A biopsy means taking some or all of the lump so that a pathologist can look at it under the microscope (histopathology). It is the only way to know for certain what a lump is. In many cases the lump is simply removed in full (an excision biopsy), and tissue from a chalazion that is drained or curetted can also be sent for the same examination when the lump has returned or looks unusual.',
          'बायोप्सी का मतलब है गांठ का कुछ हिस्सा या पूरी गांठ निकालकर पैथोलॉजिस्ट से माइक्रोस्कोप (हिस्टोपैथोलॉजी) में जंचवाना। गांठ असल में क्या है, यह पक्का जानने का यही एकमात्र तरीका है। कई बार पूरी गांठ ही निकाल दी जाती है (एक्सिज़न बायोप्सी), और जब गांठ लौटी हो या असामान्य दिखे, तो निकाली या खुरची गई चालाज़ियन की सामग्री को भी इसी जांच के लिए भेजा जा सकता है।'
        ),
      ],
      steps: [
        t('Examination of the lump, the lid margin, the lashes and the inner surface of the eyelid, with photographs for comparison later', 'गांठ, पलक के किनारे, बालों और पलक की अंदरूनी सतह की जांच, बाद में तुलना के लिए तस्वीरों के साथ'),
        t('Local anaesthetic, and removal of the lump or a sample of it in a short procedure; for a larger lump, the plan is discussed beforehand', 'लोकल एनेस्थीसिया, और छोटी प्रक्रिया में गांठ या उसके नमूने को निकालना; बड़ी गांठ में योजना पहले समझाई जाती है'),
        t('The tissue is sent to a laboratory for histopathology, and the surgeon explains the report at follow-up', 'ऊतक को हिस्टोपैथोलॉजी के लिए लैब भेजा जाता है, और रिपोर्ट फ़ॉलो-अप पर सर्जन समझाते हैं'),
        t('If the report shows a benign lump, further treatment is usually about preventing recurrence; if it shows a cancer, the next step is a planned treatment (see below)', 'अगर रिपोर्ट में साधारण गांठ निकले तो आगे का इलाज आमतौर पर दोबारा होने से बचाने के बारे में होता है; अगर कैंसर निकले तो अगला कदम योजनाबद्ध इलाज है (नीचे देखें)'),
      ],
    },
    {
      id: 'real-cases',
      h2: t('Real cases: a tarsal cyst and a sebaceous gland carcinoma', 'असली मामले: टार्सल सिस्ट और सीबेशियस ग्लैंड कार्सिनोमा'),
      paras: [
        t(
          'Two consented cases from Dr. Saumika Singh’s practice show why a “chalazion” label should be questioned when a lump behaves unusually. In the first, a gentleman had a large, persistent upper-eyelid swelling that had been treated as a chalazion elsewhere. Because the features were atypical, it was re-assessed, diagnosed as a tarsal cyst and removed by excision biopsy, with complete resolution and no recurrence on follow-up. Read the full [tarsal cyst mistaken for chalazion case](/surgical-outcomes/tarsal-cyst-misdiagnosed-chalazion).',
          'डॉ. सौमिका सिंह के क्लिनिक के दो सहमति-प्राप्त मामले दिखाते हैं कि जब कोई गांठ असामान्य व्यवहार करे तो “चालाज़ियन” के नाम पर सवाल क्यों उठाना चाहिए। पहले मामले में एक सज्जन की ऊपरी पलक में बड़ी, टिकी रहने वाली सूजन थी, जिसका कहीं और चालाज़ियन के रूप में इलाज हुआ था। लक्षण असामान्य थे, इसलिए दोबारा जांच हुई, टार्सल सिस्ट का निदान हुआ और एक्सिज़न बायोप्सी से उसे निकाला गया; गांठ पूरी तरह ठीक हुई और फ़ॉलो-अप में दोबारा नहीं आई। पूरा [चालाज़ियन समझी गई टार्सल सिस्ट का केस](/surgical-outcomes/tarsal-cyst-misdiagnosed-chalazion) पढ़ें।'
        ),
        t(
          'The second case was a sebaceous gland carcinoma of the left lower eyelid. It was treated with wide local excision with clear margins, cryotherapy and eyelid reconstruction, and the eyelid showed good healing at 2 weeks with a well-maintained contour. See the full [sebaceous gland carcinoma of the lower eyelid case](/surgical-outcomes/sebaceous-gland-carcinoma-lower-eyelid). Every patient is different, and these cases are shared to show the process, not to predict any individual result.',
          'दूसरा मामला बाईं निचली पलक के सीबेशियस ग्लैंड कार्सिनोमा का था। इसका इलाज क्लियर मार्जिन के साथ वाइड लोकल एक्सिज़न, क्रायोथेरेपी और पलक के पुनर्निर्माण से किया गया, और 2 हफ़्ते में पलक अच्छी तरह भरी तथा उसका आकार बना रहा। पूरा [निचली पलक के सीबेशियस ग्लैंड कार्सिनोमा का केस](/surgical-outcomes/sebaceous-gland-carcinoma-lower-eyelid) देखें। हर मरीज़ अलग होता है, और ये मामले प्रक्रिया दिखाने के लिए हैं, किसी एक व्यक्ति के परिणाम का अनुमान लगाने के लिए नहीं।'
        ),
      ],
    },
    {
      id: 'if-cancer',
      h2: t('What happens if the lump is a cancer?', 'अगर गांठ कैंसर निकले तो क्या होता है?'),
      paras: [
        t(
          'If the biopsy shows an eyelid cancer, treatment is planned for the specific type. This usually means surgical removal with a check that the edges are clear of tumour, followed by rebuilding the eyelid so that it protects the eye and looks natural. Some patients need further tests or co-management with an oncology team. The details, including basal cell carcinoma, squamous cell carcinoma, sebaceous gland carcinoma and melanoma, are covered in our guide to [eyelid cancer signs and treatment](/eyelid-cancer-signs-and-treatment). Eyelid cancers found early are generally easier to treat, which is one more reason not to delay assessment of a lump that keeps returning.',
          'अगर बायोप्सी में पलक का कैंसर निकले, तो इलाज उसके खास प्रकार के अनुसार तय होता है। आमतौर पर इसमें ट्यूमर को सर्जरी से निकालना और यह जांचना शामिल है कि किनारे ट्यूमर से मुक्त हैं, फिर पलक का पुनर्निर्माण ताकि वह आंख की रक्षा करे और प्राकृतिक दिखे। कुछ मरीज़ों को और जांचों या ऑन्कोलॉजी टीम के साथ मिलकर इलाज की ज़रूरत होती है। बेसल सेल, स्क्वैमस सेल, सीबेशियस ग्लैंड कार्सिनोमा और मेलानोमा सहित पूरा विवरण हमारे [पलक के कैंसर के लक्षण और इलाज](/eyelid-cancer-signs-and-treatment) गाइड में है। पलक के कैंसर जल्दी पकड़े जाएं तो इलाज आमतौर पर आसान होता है, इसलिए बार-बार लौटने वाली गांठ की जांच टालना ठीक नहीं।'
        ),
      ],
    },
    {
      id: 'questions-to-ask',
      h2: t('Questions to ask your doctor about a recurring lump', 'बार-बार होने वाली गांठ के बारे में डॉक्टर से पूछने योग्य सवाल'),
      bullets: [
        t('Does my lump look like a typical chalazion, or does anything about it look unusual?', 'क्या मेरी गांठ साधारण चालाज़ियन जैसी दिखती है, या इसमें कुछ असामान्य है?'),
        t('Do I have blepharitis, meibomian gland dysfunction or rosacea, and how should I treat it long term?', 'क्या मुझे ब्लेफेराइटिस, मीबोमियन ग्रंथि की गड़बड़ी या रोज़ेशिया है, और लंबे समय तक इसका इलाज कैसे करूं?'),
        t('Should this lump, or the material removed, be sent for histopathology?', 'क्या इस गांठ, या निकाली गई सामग्री को हिस्टोपैथोलॉजी के लिए भेजना चाहिए?'),
        t('Were earlier lumps in this spot ever examined in a laboratory? Should I bring those reports?', 'क्या इस जगह की पहले की गांठों की कभी लैब जांच हुई? क्या वे रिपोर्ट मैं साथ लाऊं?'),
        t('How soon should I come back if the lump changes?', 'अगर गांठ बदले तो कितनी जल्दी वापस आऊं?'),
        t('What are my options if the result is benign, and what if it is not?', 'अगर रिज़ल्ट साधारण आए तो मेरे विकल्प क्या हैं, और अगर न आए तो?'),
      ],
    },
  ],

  whyDrSaumika: [
    t('Long-term fellowship in Oculoplasty & Ocular Oncology at Dr. Shroff’s Charity Eye Hospital, New Delhi, after MS in Ophthalmology', 'नेत्र विज्ञान में MS के बाद डॉ. श्रॉफ़्स चैरिटी आई हॉस्पिटल, नई दिल्ली से ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी में दीर्घकालिक फ़ेलोशिप'),
    t('Her practice includes eyelid lump removal and biopsy, eyelid tumour excision and eyelid reconstruction, so one surgeon can both diagnose and treat', 'उनके कार्य में पलक की गांठ निकालना और बायोप्सी, पलक के ट्यूमर की सर्जरी और पलक का पुनर्निर्माण शामिल है, इसलिए एक ही सर्जन निदान और इलाज दोनों कर सकती हैं'),
    t('Has published peer-reviewed case reports and presented at national and international ophthalmology meetings, including the International Society of Ocular Oncology (ISOO)', 'उन्होंने पीयर-रिव्यूड केस रिपोर्ट प्रकाशित की हैं और राष्ट्रीय व अंतरराष्ट्रीय नेत्र सम्मेलनों में प्रस्तुति दी है, जिनमें इंटरनेशनल सोसाइटी ऑफ़ ऑक्युलर ऑन्कोलॉजी (ISOO) शामिल है'),
    t('Registered with the Uttar Pradesh Medical Council (Reg. No. 137106); consults at Alyantra Medicity Superspeciality Hospital, Gomti Nagar', 'उत्तर प्रदेश मेडिकल काउंसिल में पंजीकृत (पंजीकरण सं. 137106); अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श'),
  ],

  faqs: [
    {
      q: t('Can a chalazion be cancerous?', 'क्या चालाज़ियन कैंसर हो सकता है?'),
      a: t('A true chalazion is a benign blocked gland, not a cancer. However, a small number of eyelid cancers, notably sebaceous gland carcinoma, can look like a chalazion, especially one that keeps returning. That is why a recurrent lump in the same place should be examined and, if needed, biopsied.', 'असली चालाज़ियन ग्रंथि के बंद होने से बनी साधारण गांठ है, कैंसर नहीं। लेकिन पलक के कुछ कैंसर, खासकर सीबेशियस ग्लैंड कार्सिनोमा, चालाज़ियन जैसे दिख सकते हैं, खासकर वह जो बार-बार लौटे। इसीलिए एक ही जगह बार-बार लौटने वाली गांठ की जांच और ज़रूरत हो तो बायोप्सी होनी चाहिए।'),
    },
    {
      q: t('How many times can a chalazion come back before I should worry?', 'चालाज़ियन कितनी बार लौटे तो चिंता करनी चाहिए?'),
      a: t('There is no fixed number. Several chalazia in different places, with blepharitis or rosacea, are usually due to gland blockage. A lump that returns in the same spot, or has warning signs such as lash loss, bleeding or a distorted lid edge, should be examined even after the first recurrence.', 'कोई तय संख्या नहीं है। अलग-अलग जगहों पर कई चालाज़ियन, ब्लेफेराइटिस या रोज़ेशिया के साथ, आमतौर पर ग्रंथियों के बंद होने से होते हैं। जो गांठ ठीक उसी जगह लौटे, या जिसमें बाल झड़ना, खून आना या पलक के किनारे का बिगड़ना जैसे चेतावनी संकेत हों, उसकी जांच पहली बार लौटने पर ही करवानी चाहिए।'),
    },
    {
      q: t('What is the difference between a chalazion and sebaceous gland carcinoma?', 'चालाज़ियन और सीबेशियस ग्लैंड कार्सिनोमा में क्या अंतर है?'),
      a: t('A chalazion is a benign lump from a blocked oil gland and often settles with warm compresses. Sebaceous gland carcinoma is a rare eyelid cancer arising from the same glands. It can look similar, including yellowish thickening or lash loss, but does not go away with compresses. Only a biopsy tells them apart for certain.', 'चालाज़ियन तेल ग्रंथि के बंद होने से बनी साधारण गांठ है और अक्सर गर्म सिकाई से बैठ जाती है। सीबेशियस ग्लैंड कार्सिनोमा उन्हीं ग्रंथियों से बनने वाला दुर्लभ पलक का कैंसर है। यह पीली-सी मोटाई या बाल झड़ने के साथ मिलता-जुलता दिख सकता है, पर सिकाई से नहीं जाता। पक्का फ़र्क सिर्फ़ बायोप्सी से पता चलता है।'),
    },
    {
      q: t('Should every removed chalazion be sent to a laboratory?', 'क्या हर निकाला गया चालाज़ियन लैब भेजना चाहिए?'),
      a: t('Practice varies. Many surgeons send tissue when a chalazion has recurred, looks atypical or occurs in an older adult. Ask your surgeon whether your removed tissue will be examined, and keep the report; it is useful if the lump ever comes back.', 'व्यवहार अलग-अलग है। कई सर्जन तब ऊतक भेजते हैं जब चालाज़ियन लौटा हो, असामान्य दिखे या बड़ी उम्र में हो। अपने सर्जन से पूछें कि आपका निकाला गया ऊतक जांचा जाएगा या नहीं, और रिपोर्ट संभालकर रखें; गांठ कभी लौटे तो यह काम आती है।'),
    },
    {
      q: t('My chalazion keeps coming back in my child. Is it serious?', 'मेरे बच्चे का चालाज़ियन बार-बार आ रहा है। क्या यह गंभीर है?'),
      a: t('In children, repeated chalazia are usually linked to blepharitis or blocked glands and are rarely cancer. Regular lid hygiene, treating inflammation and an eye check help. A lump that is growing quickly, bleeding or unusual should still be examined promptly.', 'बच्चों में बार-बार होने वाले चालाज़ियन आमतौर पर ब्लेफेराइटिस या ग्रंथियों के बंद होने से जुड़े होते हैं और कैंसर शायद ही होते हैं। पलक की नियमित सफ़ाई, सूजन का इलाज और आंख की जांच मदद करते हैं। जो गांठ तेज़ी से बढ़े, खून करे या असामान्य हो, उसे फिर भी तुरंत दिखाना चाहिए।'),
    },
    {
      q: t('Is an eyelid biopsy painful or dangerous?', 'क्या पलक की बायोप्सी दर्दनाक या ख़तरनाक है?'),
      a: t('It is usually done under local anaesthesia, so the area is numb. Afterwards there may be soreness, swelling, bruising and small risks such as bleeding, infection or a scar. Your surgeon will explain the risks for your lump before you decide.', 'यह आमतौर पर लोकल एनेस्थीसिया में होती है, इसलिए जगह सुन्न रहती है। बाद में दर्द, सूजन, नील और खून बहने, संक्रमण या निशान जैसे छोटे जोखिम हो सकते हैं। निर्णय से पहले सर्जन आपकी गांठ के जोखिम समझाएंगे।'),
    },
    {
      q: t('Can a recurring chalazion be treated without surgery?', 'क्या बार-बार होने वाले चालाज़ियन का इलाज बिना ऑपरेशन के हो सकता है?'),
      a: t('If the lump looks like a typical chalazion, long-term lid hygiene, treatment of blepharitis or rosacea and sometimes a steroid injection may be enough. If it looks atypical or keeps returning in the same place, removal with laboratory examination is usually advised. The decision depends on examination.', 'अगर गांठ साधारण चालाज़ियन जैसी दिखती है, तो लंबे समय की पलक की सफ़ाई, ब्लेफेराइटिस या रोज़ेशिया का इलाज और कभी-कभी स्टेरॉयड इंजेक्शन काफ़ी हो सकता है। अगर यह असामान्य दिखे या उसी जगह लौटती रहे, तो निकालकर लैब जांच की सलाह आमतौर पर दी जाती है। निर्णय जांच पर निर्भर है।'),
    },
    {
      q: t('Which doctor should I see for a recurring chalazion in Lucknow?', 'लखनऊ में बार-बार होने वाली गुहेरी के लिए किसे दिखाएं?'),
      a: t('An oculoplastic surgeon with ocular oncology training can assess the lump, perform the biopsy and, if needed, treat and reconstruct the eyelid. In Lucknow, Dr. Saumika Singh sees patients at Alyantra Medicity Superspeciality Hospital, Gomti Nagar, by appointment. Bring all earlier reports.', 'ओकुलर ऑन्कोलॉजी प्रशिक्षण वाले ओकुलोप्लास्टिक सर्जन गांठ की जांच, बायोप्सी और ज़रूरत हो तो इलाज व पलक का पुनर्निर्माण कर सकते हैं। लखनऊ में डॉ. सौमिका सिंह अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में अपॉइंटमेंट पर मरीज़ देखती हैं। पुरानी सभी रिपोर्ट साथ लाएं।'),
    },
  ],

  cta: {
    title: t('Book an assessment for a lump that keeps coming back', 'बार-बार लौटने वाली गांठ की जांच बुक करें'),
    text: t('Bring any earlier laboratory or biopsy reports, details of previous treatment and dates, and photographs that show how the lump has changed.', 'पुरानी लैब या बायोप्सी रिपोर्ट, पहले के इलाज और तारीखों का ब्योरा, और वे तस्वीरें साथ लाएं जिनमें गांठ का बदलाव दिखे।'),
  },

  related: [
    { path: '/chalazion-treatment-in-lucknow', label: t('Chalazion treatment in Lucknow', 'लखनऊ में चालाज़ियन का इलाज') },
    { path: '/eyelid-cancer-signs-and-treatment', label: t('Eyelid cancer: signs and treatment', 'पलक का कैंसर: लक्षण और इलाज') },
    { path: '/surgical-outcomes/tarsal-cyst-misdiagnosed-chalazion', label: t('Case study: tarsal cyst mistaken for chalazion', 'केस स्टडी: चालाज़ियन समझी गई टार्सल सिस्ट') },
    { path: '/surgical-outcomes/sebaceous-gland-carcinoma-lower-eyelid', label: t('Case study: sebaceous gland carcinoma of the lower eyelid', 'केस स्टडी: निचली पलक का सीबेशियस ग्लैंड कार्सिनोमा') },
    { path: '/services/eye-tumours-ocular-oncology', label: t('Eye tumours and ocular oncology', 'आंख के ट्यूमर और ओकुलर ऑन्कोलॉजी') },
    { path: '/services/eyelid-disorders-eyelid-surgery', label: t('Eyelid surgery in Lucknow (all eyelid conditions)', 'लखनऊ में पलक सर्जरी (सभी पलक समस्याएं)') },
  ],

  image: {
    src: '/photo-gallery-7.webp',
    width: 1000,
    height: 990,
    alt: t('Clinical photograph of a recurrent chalazion of the eyelid', 'पलक के बार-बार होने वाले चालाज़ियन की क्लिनिकल तस्वीर'),
    caption: t('Recurrent chalazion: clinical photograph from Dr. Saumika Singh’s practice, shared with consent.', 'बार-बार होने वाला चालाज़ियन: डॉ. सौमिका सिंह के क्लिनिक की क्लिनिकल तस्वीर, सहमति से साझा।'),
  },

  references: [
    { label: 'Chalazion', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Chalazion' },
    { label: 'Sebaceous Carcinoma', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Sebaceous_Carcinoma' },
    { label: 'What are chalazia and styes?', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/diseases/what-are-chalazia-styes' },
    { label: 'Why do I have lingering styes on my eyes?', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/diseases/stye-chalazion' },
    { label: 'Sebaceous Carcinoma (StatPearls)', source: 'NCBI Bookshelf, U.S. National Library of Medicine', url: 'https://www.ncbi.nlm.nih.gov/books/NBK610689/' },
  ],

  schema: {
    type: 'MedicalCondition',
    name: 'Recurrent chalazion',
    alternateName: ['Recurring chalazion'],
  },

  reviewerNotes: [
    'Confirm the case descriptions match the consented case pages exactly (tarsal cyst: large persistent upper-eyelid swelling, previously treated as chalazion elsewhere, atypical features, excision biopsy, complete resolution, no recurrence; SGC: left lower eyelid, wide local excision with clear margins, cryotherapy, reconstruction, good healing at 2 weeks).',
    'Confirm the photo /photo-gallery-7.webp (recurrent chalazion) has patient consent for use on this page and that it fits the topic; caption wording to confirm.',
    'Confirm the warning-sign list and the "within days" urgency wording for rapidly growing, bleeding or ulcerated lumps.',
    'Confirm your practice on sending curetted chalazion material for histopathology (text says practice varies; many surgeons do so for recurrent/atypical lumps).',
    'Confirm the statement that basal cell carcinoma is the most common eyelid skin cancer and the "pearly" description.',
    'Confirm that radiotherapy/chemotherapy or other oncology co-management is described correctly ("further tests or co-management with an oncology team").',
    'Confirm the claim "eyelid cancers found early are generally easier to treat" is acceptable wording.',
    'Confirm the biopsy description (local anaesthesia, excision vs incisional/curetted sample, laboratory report discussed at follow-up).',
    'Confirm the ISOO presentation mention in whyDrSaumika.',
    'References: AAO what-are-chalazia-styes, AAO stye-chalazion, EyeWiki Chalazion and EyeWiki Sebaceous_Carcinoma were fetched and verified. StatPearls Sebaceous Carcinoma NBK610689 could not be fetched (reCAPTCHA) but was confirmed to exist via Europe PMC in the keyword research.',
  ],
};

export default guide;
