import type { Guide, L } from '../types';

const t = (en: string, hi: string): L => ({ en, hi });

const guide: Guide = {
  slug: 'eyelid-cancer-signs-and-treatment',
  primaryKeyword: 'eyelid cancer signs and treatment',
  secondaryKeywords: ['eyelid cancer symptoms', 'eyelid tumour', 'basal cell carcinoma eyelid', 'sebaceous gland carcinoma eyelid', 'squamous cell carcinoma eyelid', 'eyelid cancer surgery', 'eyelid reconstruction'],
  hindiKeywords: ['पलक का कैंसर', 'पलक पर गांठ का कैंसर', 'आंख का कैंसर के लक्षण', 'पलकों पर गठान के कैंसर की पहचान', 'eyelid cancer ke lakshan'],

  metaTitle: t(
    'Eyelid Cancer Signs and Treatment | Dr Saumika Singh',
    'पलक का कैंसर: लक्षण और इलाज | डॉ. सौमिका सिंह'
  ),
  metaDescription: t(
    'Eyelid cancer signs and treatment explained: what a growing, bleeding or non-healing lid lump looks like, types, biopsy, surgery and reconstruction. Lucknow.',
    'आंख की पलक के कैंसर के लक्षण और इलाज: बढ़ती, खून बहती या ठीक न होने वाली गांठ कैसी दिखती है, प्रकार, बायोप्सी, सर्जरी और पलक पुनर्निर्माण। डॉ. सौमिका सिंह, लखनऊ।'
  ),
  h1: t('Eyelid Cancer: Signs, Symptoms and Treatment', 'आंख की पलक का कैंसर: लक्षण, पहचान और इलाज'),
  lead: t(
    'The signs of eyelid cancer are usually a lump, sore or change on the lid that keeps growing, bleeds, crusts or does not heal, and treatment is mainly surgery to remove the growth with a margin of healthy tissue, followed by eyelid reconstruction. Most eyelid growths are not cancer, but a lesion that changes or persists should be examined, and a biopsy is the only way to be sure. Eyelid cancers found early are usually very treatable. This guide explains the warning signs, the main types, how the diagnosis is made and what treatment involves, so that you can seek help calmly and without delay.',
    'आंख की पलक के कैंसर के लक्षण आमतौर पर पलक पर ऐसी गांठ, घाव या बदलाव होते हैं जो बढ़ते रहते हैं, खून आता है, पपड़ी बनती है या जो ठीक नहीं होता। इलाज मुख्य रूप से सर्जरी है, जिसमें गांठ को आसपास की स्वस्थ त्वचा के साथ निकाला जाता है और फिर पलक का पुनर्निर्माण किया जाता है। पलक की ज़्यादातर गांठें कैंसर नहीं होतीं, लेकिन जो गांठ बदलती रहे या बनी रहे उसकी जांच ज़रूरी है, और पक्की पुष्टि सिर्फ़ बायोप्सी से होती है। शुरू में पकड़ में आए पलक के कैंसर का इलाज आमतौर पर बहुत अच्छी तरह हो पाता है। इस गाइड में चेतावनी के संकेत, मुख्य प्रकार, जांच और इलाज समझाया गया है, ताकि आप बिना घबराए और बिना देरी के सही सलाह ले सकें।'
  ),
  atAGlance: [
    t('**Main warning signs:** a lid lump or sore that grows, bleeds, crusts or does not heal; lash loss over a lesion; a distorted lid margin', '**मुख्य चेतावनी संकेत:** पलक की गांठ या घाव जो बढ़े, खून आए, पपड़ी बने या ठीक न हो; गांठ के ऊपर पलकें झड़ना; पलक के किनारे का बिगड़ना'),
    t('**Most common type:** basal cell carcinoma; others include squamous cell, sebaceous gland carcinoma and, rarely, melanoma', '**सबसे आम प्रकार:** बेसल सेल कार्सिनोमा; अन्य में स्क्वैमस सेल, सिबेशियस ग्लैंड कार्सिनोमा और कभी-कभार मेलानोमा'),
    t('**How it is confirmed:** examination and biopsy with histopathology; imaging only when needed', '**पुष्टि कैसे होती है:** जांच और बायोप्सी (हिस्टोपैथोलॉजी); इमेजिंग सिर्फ़ ज़रूरत पड़ने पर'),
    t('**Main treatment:** surgical excision with clear margins, then eyelid reconstruction', '**मुख्य इलाज:** साफ़ किनारों के साथ सर्जरी (एक्सीज़न), फिर पलक का पुनर्निर्माण'),
    t('**After treatment:** regular follow-up for recurrence and sun protection', '**इलाज के बाद:** दोबारा होने की जांच के लिए नियमित फ़ॉलो-अप और धूप से बचाव'),
    t('**Where:** Alyantra Medicity Superspeciality Hospital, Gomti Nagar, Lucknow', '**कहां:** अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर, लखनऊ'),
  ],
  image: {
    src: '/photo-gallery-5.webp',
    width: 1000,
    height: 1130,
    alt: t('Clinical photograph of an eyelid carcinoma', 'पलक के कार्सिनोमा (कैंसर) की क्लिनिकल तस्वीर'),
    caption: t(
      'Clinical photograph from Dr. Saumika Singh’s practice, shared with consent: an eyelid carcinoma. Eyelid cancers look different from person to person, and a photograph cannot replace an examination and biopsy.',
      'डॉ. सौमिका सिंह की प्रैक्टिस से क्लिनिकल तस्वीर, सहमति के साथ साझा: पलक का कार्सिनोमा। पलक के कैंसर हर व्यक्ति में अलग दिख सकते हैं, और तस्वीर जांच व बायोप्सी की जगह नहीं ले सकती।'
    ),
  },

  sections: [
    {
      id: 'what-is-eyelid-cancer',
      h2: t('What is eyelid cancer?', 'पलक का कैंसर क्या है?'),
      paras: [
        t(
          'Eyelid cancer (also called an eyelid tumour or periocular malignancy) is an abnormal, uncontrolled growth of cells in the skin or glands of the eyelid. It is far less common than harmless lid lumps such as styes, chalazia, cysts and warts, and many people who worry about a lump turn out to have a benign condition. What matters is whether a growth changes, persists or behaves unusually.',
          'पलक का कैंसर (जिसे पलक का ट्यूमर या पेरिओक्युलर मैलिग्नेंसी भी कहते हैं) पलक की त्वचा या ग्रंथियों में कोशिकाओं की असामान्य और बेकाबू बढ़त है। यह स्टाइ (अंजनी), चालाज़ियन (गुहेरी), सिस्ट और मस्से जैसी हानिरहित गांठों से कहीं कम आम है, और गांठ को लेकर चिंतित कई लोगों में आखिर में कोई सौम्य (बिनाइन) कारण निकलता है। असल बात यह है कि गांठ बदल रही है, टिकी हुई है या अजीब ढंग से व्यवहार कर रही है या नहीं।'
        ),
        t(
          'The reassuring part is that eyelid cancers are on the skin surface, where they can be seen early. The NHS notes that non-melanoma skin cancer can usually be effectively treated, and early detection improves the outcome. Dr. Saumika Singh, an oculoplasty and ocular oncology surgeon in Lucknow, treats eyelid tumours as part of her [eye tumour and ocular oncology practice](/services/eye-tumours-ocular-oncology).',
          'तसल्ली की बात यह है कि पलक के कैंसर त्वचा की सतह पर होते हैं, इसलिए जल्दी दिख जाते हैं। NHS के अनुसार नॉन-मेलानोमा स्किन कैंसर का आमतौर पर प्रभावी इलाज हो सकता है, और जल्दी पहचान से परिणाम बेहतर होते हैं। लखनऊ में ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी सर्जन डॉ. सौमिका सिंह पलक के ट्यूमर का इलाज अपनी [आंख के ट्यूमर और ओकुलर ऑन्कोलॉजी सेवा](/services/eye-tumours-ocular-oncology) के हिस्से के रूप में करती हैं।'
        ),
      ],
    },
    {
      id: 'warning-signs',
      h2: t('What does eyelid cancer look like? Warning signs', 'पलक का कैंसर कैसा दिखता है? चेतावनी के संकेत'),
      paras: [
        t(
          'There is no single look, but these changes deserve an eye-surgeon’s examination, especially if they last more than a few weeks:',
          'कोई एक तय रूप नहीं होता, लेकिन नीचे लिखे बदलावों पर नेत्र सर्जन से जांच करवानी चाहिए, खासकर अगर ये कुछ हफ़्तों से ज़्यादा टिकें:'
        ),
      ],
      bullets: [
        t('A lump or sore that slowly grows, or a sore that does not heal (the NHS advises getting skin changes that bleed, crust or scab for more than 4 weeks checked)', 'ऐसी गांठ या घाव जो धीरे-धीरे बढ़े, या घाव जो भरे नहीं (NHS की सलाह है कि जो त्वचा-बदलाव 4 हफ़्ते से ज़्यादा खून दे, पपड़ी बनाए या खुरंड बनाए, उसे दिखवाएं)'),
        t('Ulceration, bleeding or crusting on the lid', 'पलक पर अल्सर, खून आना या पपड़ी बनना'),
        t('A shiny, pearly nodule with tiny visible blood vessels on its surface', 'चमकदार, मोती जैसी गांठ जिसकी सतह पर बारीक खून की नसें दिखें'),
        t('Loss of eyelashes over or around a lesion', 'किसी गांठ के ऊपर या आसपास की पलकें झड़ जाना'),
        t('Distortion, thickening or notching of the lid margin, or a lid that turns in or out', 'पलक के किनारे का बिगड़ना, मोटा होना या कटा-सा दिखना, या पलक का अंदर/बाहर मुड़ जाना'),
        t('A “chalazion” that keeps coming back in the same place, or does not respond to usual treatment (see [recurring chalazion or eyelid cancer](/recurring-chalazion-or-eyelid-cancer))', 'ऐसा “चालाज़ियन” जो उसी जगह बार-बार लौटे या सामान्य इलाज से न जाए (देखें [बार-बार होने वाला चालाज़ियन या पलक का कैंसर](/recurring-chalazion-or-eyelid-cancer))'),
        t('Long-lasting redness, scaling or thickening of one eyelid that does not settle with treatment for blepharitis', 'एक पलक में लंबे समय तक लालिमा, पपड़ी या मोटापन जो ब्लेफेराइटिस के इलाज से ठीक न हो'),
        t('A dark or pigmented spot that changes in size, shape or colour', 'काला या रंगीन धब्बा जिसका आकार, बनावट या रंग बदल रहा हो'),
      ],
      callout: {
        tone: 'urgent',
        title: t('See a specialist urgently — within days, not weeks', 'विशेषज्ञ को तुरंत दिखाएं — दिनों में, हफ़्तों में नहीं'),
        text: t(
          'Seek an urgent specialist review if a lid lesion is **growing quickly or bleeding**, if a lump comes with the **eye looking pushed forward (bulging)**, **double vision** or **reduced eye movement**, or if there is **numbness of the cheek or forehead**. These can mean a growth is spreading deeper than the skin. If you cannot reach a specialist quickly, go to the nearest eye emergency or hospital.',
          'अगर पलक की कोई गांठ **तेज़ी से बढ़ रही हो या खून दे रही हो**, गांठ के साथ **आंख आगे की ओर उभरी दिखे**, **दोहरा दिखाई दे** या **आंख की गति कम हो**, या **गाल या माथे में सुन्नपन** हो, तो विशेषज्ञ से तुरंत मिलें। ये संकेत हो सकते हैं कि बढ़त त्वचा से गहराई में जा रही है। अगर विशेषज्ञ जल्दी न मिल सके, तो नज़दीकी आंखों की इमरजेंसी या अस्पताल जाएं।'
        ),
      },
    },
    {
      id: 'types-of-eyelid-cancer',
      h2: t('What are the main types of eyelid cancer?', 'पलक के कैंसर के मुख्य प्रकार कौन-से हैं?'),
      paras: [
        t(
          'Only a biopsy can tell these apart, because their appearances overlap. The table is a simplified overview, not a way to diagnose yourself.',
          'इनके रूप आपस में मिलते-जुलते हैं, इसलिए इन्हें अलग सिर्फ़ बायोप्सी से पहचाना जा सकता है। नीचे की तालिका सरल सारांश है, खुद निदान करने का तरीका नहीं।'
        ),
      ],
      table: {
        caption: t('Main eyelid cancers: typical look and behaviour (individual cases vary).', 'पलक के मुख्य कैंसर: आम रूप और व्यवहार (हर मरीज़ में अलग हो सकता है)।'),
        head: [t('Type', 'प्रकार'), t('How it typically looks', 'आम तौर पर कैसा दिखता है'), t('Behaviour', 'व्यवहार')],
        rows: [
          [
            t('Basal cell carcinoma (BCC)', 'बेसल सेल कार्सिनोमा (BCC)'),
            t('Pearly or shiny nodule with fine vessels, often with a central ulcer or crust; lash loss; most often on the lower lid or inner corner', 'मोती जैसी चमकदार गांठ जिसमें बारीक नसें दिखें, अक्सर बीच में घाव या पपड़ी; पलकें झड़ना; सबसे ज़्यादा निचली पलक या भीतरी कोने पर'),
            t('The most common eyelid cancer. Grows slowly and rarely spreads to distant parts of the body, but can invade the surrounding tissue locally if left untreated', 'पलक का सबसे आम कैंसर। धीरे बढ़ता है और शरीर के दूर के हिस्सों में कम ही फैलता है, लेकिन इलाज न हो तो आसपास के ऊतकों में स्थानीय रूप से फैल सकता है')
          ],
          [
            t('Squamous cell carcinoma (SCC)', 'स्क्वैमस सेल कार्सिनोमा (SCC)'),
            t('Firm, scaly, crusted or ulcerated growth, sometimes raised and rough', 'सख़्त, पपड़ीदार या घाव वाली बढ़त, कभी-कभी उभरी और खुरदरी'),
            t('Less common than BCC but can behave more aggressively and may spread to nearby lymph nodes in some cases, so assessment is thorough', 'BCC से कम आम, लेकिन ज़्यादा आक्रामक हो सकता है और कुछ मामलों में पास की लिम्फ नोड तक फैल सकता है, इसलिए जांच विस्तार से की जाती है')
          ],
          [
            t('Sebaceous gland carcinoma', 'सिबेशियस ग्लैंड कार्सिनोमा'),
            t('Often a firm, yellowish lump in the lid, or thickening of the lid margin with lash loss; can look like a chalazion or long-standing blepharitis', 'पलक में अक्सर सख़्त, पीली-सी गांठ, या पलक के किनारे का मोटा होना और पलकें झड़ना; चालाज़ियन या पुराने ब्लेफेराइटिस जैसा दिख सकता है'),
            t('Uncommon, and easy to miss because it imitates benign conditions. It can spread along the surface of the eye and to lymph nodes, so early biopsy and careful margin-checking matter', 'कम आम, और सौम्य बीमारियों की नकल करने से आसानी से छूट सकता है। यह आंख की सतह पर और लिम्फ नोड में फैल सकता है, इसलिए जल्दी बायोप्सी और किनारों की सावधानी से जांच अहम है')
          ],
          [
            t('Melanoma (rare)', 'मेलानोमा (दुर्लभ)'),
            t('A dark, pigmented lesion that changes in size, shape or colour (some lack pigment)', 'काला या रंगीन घाव जिसका आकार, बनावट या रंग बदले (कुछ में रंग नहीं होता)'),
            t('Rare on the eyelid but potentially serious, so a changing pigmented spot should be checked promptly', 'पलक पर दुर्लभ लेकिन गंभीर हो सकता है, इसलिए बदलते रंगीन धब्बे की जल्दी जांच करवाएं')
          ],
          [
            t('Merkel cell carcinoma (rare)', 'मर्केल सेल कार्सिनोमा (दुर्लभ)'),
            t('A firm, pink-red or purplish nodule, often without pain, that may grow quickly', 'सख़्त, गुलाबी-लाल या बैंगनी गांठ जिसमें दर्द नहीं होता और जो जल्दी बढ़ सकती है'),
            t('Very uncommon; tends to be aggressive, so it is managed with a wider team including oncology', 'बहुत कम होता है; आक्रामक होता है, इसलिए ऑन्कोलॉजी सहित बड़ी टीम इसका प्रबंधन करती है')
          ],
        ],
      },
    },
    {
      id: 'risk-factors',
      h2: t('Who is at risk of eyelid cancer?', 'पलक के कैंसर का जोखिम किन्हें ज़्यादा है?'),
      paras: [
        t(
          'Anyone can develop an eyelid cancer, but some factors raise the chance. Having a risk factor does not mean you will get cancer, and some people with none still do.',
          'पलक का कैंसर किसी को भी हो सकता है, लेकिन कुछ कारण संभावना बढ़ाते हैं। जोखिम कारण होने का मतलब यह नहीं कि कैंसर होगा, और कुछ लोगों में कोई कारण न होने पर भी हो जाता है।'
        ),
      ],
      bullets: [
        t('Long-term sun (ultraviolet) exposure, which is the main cause of the common skin-type eyelid cancers', 'लंबे समय तक धूप (अल्ट्रावायलेट किरणों) का संपर्क, जो सामान्य त्वचा-प्रकार के पलक कैंसर का मुख्य कारण है'),
        t('Fair skin that burns easily', 'गोरी त्वचा जो आसानी से झुलस जाती है'),
        t('Older age', 'बढ़ती उम्र'),
        t('A previous skin cancer', 'पहले कभी त्वचा का कैंसर होना'),
        t('A weakened immune system, for example after an organ transplant or with long-term immunosuppressive medicines', 'कमज़ोर रोग-प्रतिरोधक क्षमता, जैसे अंग प्रत्यारोपण के बाद या लंबे समय तक इम्यूनोसप्रेसिव दवाओं से'),
        t('Previous radiation treatment to the area, and some rare inherited skin conditions', 'उस जगह पहले हुई रेडिएशन थेरेपी, और कुछ दुर्लभ आनुवंशिक त्वचा रोग'),
      ],
    },
    {
      id: 'diagnosis',
      h2: t('How is eyelid cancer diagnosed?', 'पलक के कैंसर की जांच कैसे होती है?'),
      paras: [
        t(
          'A lid lump cannot be reliably labelled benign or malignant by eye alone, so the diagnosis is made step by step. You can read more about [what to expect at an oculoplasty consultation](/oculoplasty-consultation-what-to-expect).',
          'सिर्फ़ देखकर पलक की गांठ को पक्के तौर पर सौम्य या कैंसर नहीं कहा जा सकता, इसलिए निदान कदम-दर-कदम होता है। [ओकुलोप्लास्टी परामर्श में क्या होता है](/oculoplasty-consultation-what-to-expect) यह भी पढ़ें।'
        ),
      ],
      steps: [
        t('Examination: the surgeon examines the lump, the lid margin and lashes, the inside of the lid and the eye surface, feels for swollen lymph nodes in front of the ear and neck, and takes photographs for the record', 'जांच: सर्जन गांठ, पलक के किनारे और पलकों, पलक के अंदरूनी हिस्से और आंख की सतह को देखते हैं, कान के आगे और गर्दन की लिम्फ नोड टटोलते हैं, और रिकॉर्ड के लिए तस्वीरें लेते हैं'),
        t('Biopsy: a sample (incisional biopsy) or the whole lesion (excisional biopsy) is removed and examined under the microscope (histopathology). This is what confirms the type', 'बायोप्सी: गांठ का एक टुकड़ा (इन्सीज़नल बायोप्सी) या पूरी गांठ (एक्सीज़नल बायोप्सी) निकालकर माइक्रोस्कोप (हिस्टोपैथोलॉजी) में जांची जाती है। इसी से प्रकार की पुष्टि होती है'),
        t('Map biopsies: for some tumours, particularly sebaceous gland carcinoma, small samples may be taken from the conjunctiva (the lining of the eye) to look for surface spread', 'मैप बायोप्सी: कुछ ट्यूमर में, खासकर सिबेशियस ग्लैंड कार्सिनोमा में, फैलाव देखने के लिए कंजंक्टाइवा (आंख की भीतरी परत) से छोटे नमूने लिए जा सकते हैं'),
        t('Imaging and lymph node assessment: a CT or MRI scan, or ultrasound of the neck glands, is used when a tumour is large, deep or of an aggressive type, or when there are symptoms such as bulging or double vision', 'इमेजिंग और लिम्फ नोड जांच: जब ट्यूमर बड़ा, गहरा या आक्रामक प्रकार का हो, या आंख उभरने/दोहरा दिखने जैसे लक्षण हों, तब CT या MRI स्कैन, या गर्दन की ग्रंथियों का अल्ट्रासाउंड किया जाता है'),
      ],
    },
    {
      id: 'treatment',
      h2: t('How is eyelid cancer treated?', 'पलक के कैंसर का इलाज कैसे होता है?'),
      paras: [
        t(
          'The plan depends on the type, size and position of the tumour and on your general health. The NHS describes surgery as the main treatment for non-melanoma skin cancers, and this is also true for most eyelid cancers. Every plan is individual and is explained to you before any decision.',
          'योजना ट्यूमर के प्रकार, आकार, जगह और आपके सामान्य स्वास्थ्य पर निर्भर करती है। NHS के अनुसार नॉन-मेलानोमा स्किन कैंसर का मुख्य इलाज सर्जरी है, और ज़्यादातर पलक के कैंसर में भी यही सच है। हर योजना व्यक्तिगत होती है और कोई भी फ़ैसला लेने से पहले आपको समझाई जाती है।'
        ),
      ],
      subsections: [
        {
          h3: t('Surgical excision with clear margins', 'साफ़ किनारों के साथ सर्जिकल एक्सीज़न'),
          paras: [
            t(
              'The tumour is removed together with a rim of healthy-looking tissue. The removed tissue is then examined by a pathologist to confirm that the edges (margins) are free of tumour cells. Margin control can be done in different ways: by frozen-section examination during the operation, by examining the specimen afterwards, or, at some centres, by Mohs micrographic surgery. Which approach suits you depends on the tumour type, its site and the facilities available, and your surgeon will explain the plan. If the edges are not clear, further tissue may need to be removed.',
              'ट्यूमर को आसपास के स्वस्थ दिखने वाले ऊतक की परत के साथ निकाला जाता है। फिर निकाले गए ऊतक को पैथोलॉजिस्ट जांचते हैं कि उसके किनारों (मार्जिन) में ट्यूमर की कोशिकाएं तो नहीं बची हैं। किनारों की जांच अलग-अलग तरीकों से हो सकती है: ऑपरेशन के दौरान फ्रोज़न सेक्शन से, ऑपरेशन के बाद नमूने की जांच से, या कुछ केंद्रों में मोह्स माइक्रोग्राफ़िक सर्जरी से। आपके लिए कौन-सा तरीका ठीक है, यह ट्यूमर के प्रकार, जगह और उपलब्ध सुविधाओं पर निर्भर है, और सर्जन योजना समझाएंगे। अगर किनारे साफ़ न हों, तो और ऊतक निकालना पड़ सकता है।'
            ),
          ],
        },
        {
          h3: t('Eyelid reconstruction', 'पलक का पुनर्निर्माण (रिकंस्ट्रक्शन)'),
          paras: [
            t(
              'Removing a tumour completely can leave a gap in the eyelid. Reconstruction uses nearby skin or tissue (flaps) or grafts to rebuild the lid. Its goals, in order, are to protect the eye, to restore lid function (blinking and closure) and to give a natural appearance. Sometimes the repair is done in the same operation, and sometimes it is staged until the margins are confirmed clear. For related reconstructive work, see [eye trauma, eyelid and orbital reconstruction](/services/eye-trauma-eyelid-orbital-reconstruction).',
              'ट्यूमर को पूरी तरह निकालने पर पलक में खाली जगह बन सकती है। पुनर्निर्माण में आसपास की त्वचा या ऊतक (फ्लैप) या ग्राफ़्ट से पलक दोबारा बनाई जाती है। इसके लक्ष्य क्रम से ये हैं: आंख की रक्षा, पलक का कार्य (झपकना और बंद होना) लौटाना और प्राकृतिक रूप देना। कभी मरम्मत उसी ऑपरेशन में होती है और कभी किनारे साफ़ पुष्ट होने तक चरणों में की जाती है। इससे जुड़े पुनर्निर्माण कार्य के लिए देखें [आंख की चोट, पलक और ऑर्बिट पुनर्निर्माण](/services/eye-trauma-eyelid-orbital-reconstruction)।'
            ),
          ],
        },
        {
          h3: t('Other treatments used in selected cases', 'चुनिंदा मामलों में अन्य इलाज'),
          bullets: [
            t('Cryotherapy (freezing) may be used as an adjunct to surgery in selected cases', 'चुनिंदा मामलों में सर्जरी के साथ सहायक रूप में क्रायोथेरेपी (जमाने की विधि) का उपयोग हो सकता है'),
            t('Topical chemotherapy drops are sometimes used by ocular oncology teams when a tumour has spread over the surface of the eye', 'जब ट्यूमर आंख की सतह पर फैला हो, तो ओकुलर ऑन्कोलॉजी टीमें कभी-कभी टॉपिकल कीमोथेरेपी ड्रॉप्स का उपयोग करती हैं'),
            t('Radiotherapy or systemic (whole-body) medicines are considered for advanced tumours or when surgery is not suitable; these are arranged with the oncology team rather than given by the oculoplastic surgeon', 'उन्नत ट्यूमर में या जब सर्जरी उपयुक्त न हो, तब रेडियोथेरेपी या पूरे शरीर पर असर करने वाली दवाओं पर विचार होता है; ये ऑन्कोलॉजी टीम के साथ मिलकर तय की जाती हैं, ओकुलोप्लास्टिक सर्जन द्वारा नहीं दी जातीं'),
          ],
        },
        {
          h3: t('Risks and limits of treatment', 'इलाज के जोखिम और सीमाएं'),
          paras: [
            t(
              'Surgery carries the usual risks of bleeding, infection and scarring. After eyelid reconstruction there can also be temporary or lasting lid changes, such as a slightly different lid contour, watering, dry eye or incomplete lid closure, and a second small procedure is sometimes needed. A cancer can come back even after careful removal, which is why follow-up matters. Outcomes vary from person to person.',
              'सर्जरी के सामान्य जोखिम हैं: खून बहना, संक्रमण और निशान। पलक पुनर्निर्माण के बाद पलक में अस्थायी या स्थायी बदलाव भी हो सकते हैं, जैसे पलक का आकार थोड़ा अलग होना, आंख से पानी आना, आंख सूखना या पलक का पूरी तरह बंद न होना, और कभी-कभी दूसरी छोटी प्रक्रिया की ज़रूरत पड़ती है। सावधानी से निकालने के बाद भी कैंसर लौट सकता है, इसीलिए फ़ॉलो-अप ज़रूरी है। परिणाम हर व्यक्ति में अलग होते हैं।'
            ),
          ],
        },
      ],
    },
    {
      id: 'sebaceous-gland-carcinoma-case',
      h2: t('A case example: sebaceous gland carcinoma of the lower eyelid', 'केस उदाहरण: निचली पलक का सिबेशियस ग्लैंड कार्सिनोमा'),
      paras: [
        t(
          'In one consented case from Dr. Singh’s practice, a patient had sebaceous gland carcinoma of the left lower eyelid. Treatment was wide local excision with clear margins, cryotherapy and eyelid reconstruction. At the two-week review, healing was good and the eyelid contour was well maintained. Read the full details in the [sebaceous gland carcinoma case study](/surgical-outcomes/sebaceous-gland-carcinoma-lower-eyelid). Every patient’s tumour and result are different, so this is an example, not a promise.',
          'डॉ. सिंह की प्रैक्टिस के एक सहमति-प्राप्त मामले में मरीज़ को बाईं निचली पलक का सिबेशियस ग्लैंड कार्सिनोमा था। इलाज में साफ़ किनारों के साथ वाइड लोकल एक्सीज़न, क्रायोथेरेपी और पलक का पुनर्निर्माण किया गया। दो हफ़्ते की जांच में घाव अच्छा भर रहा था और पलक का आकार भली-भांति बना हुआ था। पूरा विवरण [सिबेशियस ग्लैंड कार्सिनोमा केस स्टडी](/surgical-outcomes/sebaceous-gland-carcinoma-lower-eyelid) में पढ़ें। हर मरीज़ का ट्यूमर और परिणाम अलग होता है, इसलिए यह एक उदाहरण है, वादा नहीं।'
        ),
        t(
          'A similar worry arises when a long-standing swelling was assumed to be a chalazion; see the [tarsal cyst case](/surgical-outcomes/tarsal-cyst-misdiagnosed-chalazion) and the usual [chalazion treatment](/chalazion-treatment-in-lucknow) for how persistent lumps are sorted out.',
          'ऐसी ही चिंता तब होती है जब किसी पुरानी सूजन को चालाज़ियन मान लिया गया हो; ऐसी टिकी हुई गांठों की जांच कैसे होती है, इसके लिए [टार्सल सिस्ट केस](/surgical-outcomes/tarsal-cyst-misdiagnosed-chalazion) और सामान्य [चालाज़ियन का इलाज](/chalazion-treatment-in-lucknow) देखें।'
        ),
      ],
    },
    {
      id: 'follow-up-and-sun-protection',
      h2: t('Follow-up, recurrence and protecting your eyelids from the sun', 'फ़ॉलो-अप, दोबारा होने की आशंका और धूप से पलकों का बचाव'),
      paras: [
        t(
          'After treatment you will be asked to come for regular check-ups. The schedule depends on the tumour type and how it was treated. Tumours can recur, and people who have had one skin cancer have a higher chance of developing another, so follow-up is part of the treatment, not an extra.',
          'इलाज के बाद आपको नियमित जांच के लिए बुलाया जाएगा। समय-सारणी ट्यूमर के प्रकार और इलाज पर निर्भर करती है। ट्यूमर दोबारा हो सकता है, और जिन्हें एक बार त्वचा का कैंसर हुआ हो उन्हें दूसरा होने की संभावना ज़्यादा होती है, इसलिए फ़ॉलो-अप इलाज का ही हिस्सा है, अलग से जुड़ी चीज़ नहीं।'
        ),
      ],
      bullets: [
        t('Check your eyelids and face in good light once a month, ideally with a mirror, and note any new lump, sore, colour change or lash loss', 'महीने में एक बार अच्छी रोशनी में, शीशे के साथ, अपनी पलकें और चेहरा देखें और कोई नई गांठ, घाव, रंग बदलाव या पलकें झड़ना नोट करें'),
        t('Wear sunglasses that block ultraviolet light, and a wide-brimmed hat, when outdoors', 'बाहर निकलते समय यूवी-रोधी धूप का चश्मा और चौड़ी किनारी वाली टोपी पहनें'),
        t('Use a broad-spectrum sunscreen on the face and around (not in) the eyes, applying it carefully to avoid the eye surface, and avoid the strongest midday sun', 'चेहरे पर और आंखों के आसपास (अंदर नहीं) ब्रॉड-स्पेक्ट्रम सनस्क्रीन लगाएं, आंख की सतह से बचाते हुए सावधानी से, और दोपहर की तेज़ धूप से बचें'),
        t('Report any change early rather than waiting for the next appointment', 'अगली अपॉइंटमेंट का इंतज़ार किए बिना कोई भी बदलाव जल्दी बताएं'),
      ],
    },
  ],

  whyDrSaumika: [
    t('Long-term fellowship in Oculoplasty & Ocular Oncology at Dr. Shroff’s Charity Eye Hospital, New Delhi (2022), after MS in Ophthalmology', 'नेत्र विज्ञान में MS के बाद डॉ. श्रॉफ़्स चैरिटी आई हॉस्पिटल, नई दिल्ली से ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी में दीर्घकालिक फ़ेलोशिप (2022)'),
    t('Her practice includes eyelid lump removal and biopsy, eyelid tumour excision and eyelid reconstruction, with cryotherapy where appropriate', 'उनकी प्रैक्टिस में पलक की गांठ हटाना व बायोप्सी, पलक ट्यूमर की सर्जरी और पलक पुनर्निर्माण शामिल है, जहां उचित हो वहां क्रायोथेरेपी के साथ'),
    t('Where radiotherapy or systemic treatment is needed, care is arranged together with oncology teams', 'जहां रेडियोथेरेपी या पूरे शरीर का इलाज चाहिए, वहां ऑन्कोलॉजी टीमों के साथ मिलकर देखभाल की व्यवस्था की जाती है'),
    t('Registered with the Uttar Pradesh Medical Council (Reg. No. 137106); consults at Alyantra Medicity Superspeciality Hospital, Gomti Nagar', 'उत्तर प्रदेश मेडिकल काउंसिल में पंजीकृत (पंजीकरण सं. 137106); अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श'),
  ],

  faqs: [
    {
      q: t('What are the first signs of eyelid cancer?', 'पलक के कैंसर के पहले लक्षण क्या हैं?'),
      a: t('Usually a small lump or sore on the lid that slowly grows, bleeds, crusts or does not heal, sometimes with lash loss or a distorted lid edge. Many are shiny or pearly with fine vessels. These signs can also be caused by harmless conditions, so a lesion lasting more than a few weeks should be examined.', 'आमतौर पर पलक पर छोटी गांठ या घाव जो धीरे-धीरे बढ़े, खून दे, पपड़ी बनाए या ठीक न हो, कभी-कभी पलकें झड़ने या पलक के किनारे के बिगड़ने के साथ। कई चमकदार या मोती जैसे होते हैं जिनमें बारीक नसें दिखती हैं। ये लक्षण हानिरहित बीमारियों से भी हो सकते हैं, इसलिए कुछ हफ़्ते से ज़्यादा टिकने वाली गांठ की जांच करवाएं।'),
    },
    {
      q: t('Is every lump on the eyelid cancer?', 'क्या पलक की हर गांठ कैंसर होती है?'),
      a: t('No. Most eyelid lumps, such as chalazia, styes, cysts and warts, are benign. A lump deserves a specialist opinion if it grows, bleeds, does not heal, causes lash loss or keeps returning after treatment. Only a biopsy can say for certain what a lump is.', 'नहीं। पलक की ज़्यादातर गांठें, जैसे चालाज़ियन, स्टाइ, सिस्ट और मस्से, सौम्य होती हैं। अगर गांठ बढ़े, खून दे, ठीक न हो, पलकें झड़ें या इलाज के बाद बार-बार लौटे, तो विशेषज्ञ की राय लेनी चाहिए। गांठ क्या है, यह पक्के तौर पर सिर्फ़ बायोप्सी बता सकती है।'),
    },
    {
      q: t('Can a chalazion be eyelid cancer?', 'क्या चालाज़ियन असल में पलक का कैंसर हो सकता है?'),
      a: t('Rarely, yes. Sebaceous gland carcinoma can imitate a chalazion or long-standing blepharitis. A “chalazion” that returns in the same place, is unusually firm, or comes with lash loss or lid-margin change should be biopsied. See our guide on recurring chalazion and eyelid cancer.', 'कभी-कभार, हां। सिबेशियस ग्लैंड कार्सिनोमा चालाज़ियन या पुराने ब्लेफेराइटिस जैसा दिख सकता है। जो “चालाज़ियन” उसी जगह लौटे, असामान्य रूप से सख़्त हो, या पलकें झड़ने या पलक के किनारे में बदलाव के साथ हो, उसकी बायोप्सी होनी चाहिए। बार-बार होने वाले चालाज़ियन पर हमारी गाइड देखें।'),
    },
    {
      q: t('Is eyelid cancer curable?', 'क्या पलक का कैंसर ठीक हो सकता है?'),
      a: t('Many eyelid cancers, especially basal cell carcinoma found early, are usually very treatable with complete surgical removal. Outcomes depend on the type, size, depth and whether the margins are clear. Some types need closer follow-up. Your surgeon can explain what to expect for your own diagnosis after the biopsy.', 'कई पलक कैंसर, खासकर शुरू में पकड़ में आया बेसल सेल कार्सिनोमा, पूरी तरह निकालने पर आमतौर पर बहुत अच्छी तरह ठीक हो जाते हैं। परिणाम प्रकार, आकार, गहराई और किनारे साफ़ होने पर निर्भर करते हैं। कुछ प्रकारों में ज़्यादा नज़दीकी फ़ॉलो-अप चाहिए। बायोप्सी के बाद सर्जन आपके निदान के अनुसार क्या उम्मीद रखें, यह समझाएंगे।'),
    },
    {
      q: t('Is a biopsy necessary, and is it safe?', 'क्या बायोप्सी ज़रूरी है, और क्या यह सुरक्षित है?'),
      a: t('A biopsy is usually the only way to confirm whether a lesion is cancer and which type it is, and that decides the treatment. It is a small procedure, usually under local anaesthesia, with the usual minor risks of bleeding, infection and a small scar. Your surgeon will explain the plan before it is done.', 'किसी घाव या गांठ के कैंसर होने और उसका प्रकार जानने का आमतौर पर एकमात्र तरीका बायोप्सी है, और इसी से इलाज तय होता है। यह छोटी प्रक्रिया है, आमतौर पर लोकल एनेस्थीसिया में, जिसके सामान्य मामूली जोखिम खून बहना, संक्रमण और छोटा निशान हैं। करने से पहले सर्जन योजना समझाएंगे।'),
    },
    {
      q: t('Will my eyelid look normal after surgery?', 'क्या सर्जरी के बाद मेरी पलक सामान्य दिखेगी?'),
      a: t('Reconstruction aims to protect the eye, keep the lid working and give a natural appearance, but the result depends on how much tissue had to be removed and on how you heal. Some scarring or a small contour difference is possible, and a further small procedure is occasionally needed.', 'पुनर्निर्माण का लक्ष्य आंख की रक्षा, पलक का काम बनाए रखना और प्राकृतिक रूप देना है, लेकिन परिणाम इस पर निर्भर करता है कि कितना ऊतक निकालना पड़ा और आप कैसे ठीक होते हैं। कुछ निशान या आकार में हल्का फ़र्क संभव है, और कभी-कभी एक और छोटी प्रक्रिया की ज़रूरत पड़ती है।'),
    },
    {
      q: t('Can eyelid cancer come back, and how do I reduce the chance?', 'क्या पलक का कैंसर दोबारा हो सकता है, और जोखिम कैसे घटाएं?'),
      a: t('Yes, it can recur at the same site or a new skin cancer can appear elsewhere. Keep every follow-up visit, check your lids monthly, report changes early, and protect your skin with sunglasses, a hat and sunscreen around the eyes. Early review of any new lump keeps treatment simpler.', 'हां, यह उसी जगह दोबारा हो सकता है या कहीं और नया त्वचा कैंसर बन सकता है। हर फ़ॉलो-अप में आएं, हर महीने पलकें जांचें, बदलाव जल्दी बताएं, और धूप के चश्मे, टोपी और आंखों के आसपास सनस्क्रीन से त्वचा बचाएं। किसी भी नई गांठ की जल्दी जांच से इलाज आसान रहता है।'),
    },
  ],

  cta: {
    title: t('Have a lid lump that is changing or not healing?', 'पलक की ऐसी गांठ जो बदल रही है या ठीक नहीं हो रही?'),
    text: t('Book an examination. Bring any previous reports, photographs showing how the lump has changed, and a list of your medicines. If it is growing fast, bleeding, or the eye looks pushed forward, ask for an urgent appointment.', 'जांच के लिए अपॉइंटमेंट लें। पुरानी रिपोर्ट, गांठ कैसे बदली यह दिखाने वाली तस्वीरें और अपनी दवाओं की सूची साथ लाएं। अगर गांठ तेज़ी से बढ़ रही हो, खून दे रही हो, या आंख आगे की ओर उभरी दिखे, तो जल्दी की अपॉइंटमेंट मांगें।'),
  },

  related: [
    { path: '/services/eye-tumours-ocular-oncology', label: t('Eye tumours and ocular oncology', 'आंख के ट्यूमर और ओकुलर ऑन्कोलॉजी') },
    { path: '/recurring-chalazion-or-eyelid-cancer', label: t('Recurring chalazion or eyelid cancer?', 'बार-बार होने वाला चालाज़ियन या पलक का कैंसर?') },
    { path: '/surgical-outcomes/sebaceous-gland-carcinoma-lower-eyelid', label: t('Case study: sebaceous gland carcinoma of the lower eyelid', 'केस स्टडी: निचली पलक का सिबेशियस ग्लैंड कार्सिनोमा') },
    { path: '/chalazion-treatment-in-lucknow', label: t('Chalazion treatment in Lucknow', 'लखनऊ में चालाज़ियन (गुहेरी) का इलाज') },
    { path: '/services/eye-trauma-eyelid-orbital-reconstruction', label: t('Eyelid and orbital reconstruction', 'पलक और ऑर्बिट पुनर्निर्माण') },
    { path: '/oculoplasty-consultation-what-to-expect', label: t('What to expect at an oculoplasty consultation', 'ओकुलोप्लास्टी परामर्श में क्या होता है') },
  ],

  references: [
    { label: 'Basal Cell Carcinoma (eyelid)', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Basal_Cell_Carcinoma' },
    { label: 'Sebaceous Carcinoma', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Sebaceous_Carcinoma' },
    { label: 'Non-melanoma skin cancer', source: 'NHS', url: 'https://www.nhs.uk/conditions/non-melanoma-skin-cancer/' },
    { label: 'Non-melanoma skin cancer: symptoms', source: 'NHS', url: 'https://www.nhs.uk/conditions/non-melanoma-skin-cancer/symptoms/' },
    { label: 'Non-melanoma skin cancer: treatment', source: 'NHS', url: 'https://www.nhs.uk/conditions/non-melanoma-skin-cancer/treatment/' },
  ],

  schema: {
    type: 'MedicalCondition',
    name: 'Eyelid cancer',
    alternateName: ['Eyelid tumour', 'Periocular malignancy'],
    bodyLocation: 'Eyelid',
  },

  reviewerNotes: [
    'Confirm the photo /photo-gallery-5.webp has patient consent for web use and state which tumour type it shows (BCC, SCC, SGC or other); the caption currently says only "an eyelid carcinoma".',
    'Confirm the SGC case description (wide local excision with clear margins, cryotherapy, reconstruction, good healing at 2 weeks) matches the consented case text.',
    'Confirm margin-control wording: frozen section / post-operative histopathology are described as general options and Mohs is mentioned only neutrally; edit if her practice uses a specific method (e.g. frozen section on site).',
    'Confirm map biopsies of the conjunctiva are something she does or arranges for sebaceous gland carcinoma.',
    'Confirm the sentence that cryotherapy is used as an adjunct only in selected cases, and that topical chemotherapy drops, radiotherapy and systemic therapy are arranged with oncology teams.',
    'Confirm whether staged reconstruction (after margins confirmed) is her usual practice, as written.',
    'Confirm the urgent-callout wording and the monthly self-check advice (the monthly interval is a suggested wording, not from a cited source).',
    'Table descriptions of SCC, melanoma and Merkel cell carcinoma are general summaries and are not individually cited; please check them. The Asian-population remark for sebaceous gland carcinoma was deliberately omitted because the EyeWiki page fetched did not state it.',
    'Reference verification: EyeWiki Basal_Cell_Carcinoma, EyeWiki Sebaceous_Carcinoma and the three NHS non-melanoma pages were fetched and checked. AAO EyeSmart eyelid-cancer URLs and the StatPearls NBK page could not be verified (AAO returned only a page template; NCBI returned a bot check) so they were not used. EyeWiki Squamous cell carcinoma has no content, so it is not cited.',
    'Hindi: confirm “मोह्स माइक्रोग्राफ़िक सर्जरी” and “क्रायोथेरेपी” phrasing; the Hindi YouTube title “पलकों पर गठान के कैंसर की पहचान: लक्षण और कारण” informed the keywords.',
  ],
};

export default guide;
