import type { Guide, L } from '../types';

const t = (en: string, hi: string): L => ({ en, hi });

const guide: Guide = {
  slug: 'functional-vs-cosmetic-blepharoplasty',
  primaryKeyword: 'functional vs cosmetic blepharoplasty',
  secondaryKeywords: ['is blepharoplasty cosmetic', 'is eyelid surgery covered by insurance', 'medically necessary blepharoplasty', 'visual field test for eyelid surgery', 'functional blepharoplasty', 'droopy eyelid skin blocking vision', 'eyelid surgery insurance India'],
  hindiKeywords: ['ब्लेफेरोप्लास्टी कॉस्मेटिक है या ज़रूरी', 'पलक सर्जरी बीमा', 'पलक की ढीली त्वचा से नज़र में रुकावट', 'आंख की पलक की सर्जरी कब ज़रूरी', 'फ़ंक्शनल ब्लेफेरोप्लास्टी'],

  metaTitle: t(
    'Functional vs Cosmetic Blepharoplasty | Dr Saumika Singh',
    'फ़ंक्शनल या कॉस्मेटिक ब्लेफेरोप्लास्टी | डॉ. सौमिका सिंह'
  ),
  metaDescription: t(
    'Functional vs cosmetic blepharoplasty: how a surgeon decides if eyelid surgery is medically necessary, the visual field test, photos and insurance in India.',
    'फ़ंक्शनल बनाम कॉस्मेटिक ब्लेफेरोप्लास्टी: पलक सर्जरी चिकित्सकीय रूप से ज़रूरी है या नहीं, यह कैसे तय होता है – विज़ुअल फ़ील्ड जांच, तस्वीरें और भारत में बीमा।'
  ),
  h1: t('Functional vs Cosmetic Blepharoplasty: Which Is Your Eyelid Surgery?', 'फ़ंक्शनल या कॉस्मेटिक ब्लेफेरोप्लास्टी: आपकी पलक सर्जरी कौन-सी है?'),
  lead: t(
    'Functional vs cosmetic blepharoplasty comes down to one question: is the extra eyelid skin affecting how you see and feel, or only how you look? Functional (medically necessary) blepharoplasty treats heavy upper-eyelid skin that rests on the lashes, narrows the upper field of vision or tires the forehead, and it is supported by an examination, photographs and often a visual-field test. Cosmetic blepharoplasty is done for appearance alone. Many people have a bit of both. This guide explains how surgeons tell them apart, what documentation is used, and how insurance in India usually treats each, so you can ask the right questions before booking.',
    'फ़ंक्शनल बनाम कॉस्मेटिक ब्लेफेरोप्लास्टी का फ़र्क एक सवाल पर टिका है: क्या पलक की अतिरिक्त त्वचा आपके देखने और महसूस करने पर असर डाल रही है, या सिर्फ़ दिखावट पर? फ़ंक्शनल (चिकित्सकीय रूप से ज़रूरी) ब्लेफेरोप्लास्टी ऊपरी पलक की उस भारी त्वचा का इलाज है जो पलकों पर टिकती है, ऊपर का नज़र का दायरा घटाती है या माथे को थका देती है; इसके समर्थन में जांच, तस्वीरें और अक्सर विज़ुअल फ़ील्ड टेस्ट होता है। कॉस्मेटिक ब्लेफेरोप्लास्टी सिर्फ़ दिखावट के लिए होती है। कई लोगों में दोनों बातें मिली होती हैं। यह गाइड बताती है कि सर्जन इन्हें कैसे अलग करते हैं, कौन-से दस्तावेज़ बनते हैं और भारत में बीमा आमतौर पर इन्हें कैसे देखता है, ताकि आप बुकिंग से पहले सही सवाल पूछ सकें।'
  ),
  atAGlance: [
    t('**Functional:** eyelid skin affects vision or comfort (documented by examination, photographs, often a visual-field test)', '**फ़ंक्शनल:** पलक की त्वचा नज़र या आराम को प्रभावित करती है (जांच, तस्वीरों और अक्सर विज़ुअल फ़ील्ड टेस्ट से दर्ज)'),
    t('**Cosmetic:** done for appearance only, with no measurable effect on vision', '**कॉस्मेटिक:** सिर्फ़ दिखावट के लिए, नज़र पर कोई नापने योग्य असर नहीं'),
    t('**Insurance:** purely cosmetic surgery is usually excluded; functional cases may be considered with documentation', '**बीमा:** सिर्फ़ कॉस्मेटिक सर्जरी आमतौर पर शामिल नहीं; फ़ंक्शनल मामलों पर दस्तावेज़ों के साथ विचार हो सकता है'),
    t('**Always possible:** a mix of both, or a different cause such as ptosis or a low eyebrow', '**अक्सर संभव:** दोनों का मेल, या कोई और कारण जैसे टोसिस या नीची भौंह'),
    t('**Who decides:** the examining surgeon documents; the insurer makes the coverage decision', '**कौन तय करता है:** जांचने वाले सर्जन दर्ज करते हैं; कवरेज का फ़ैसला बीमा कंपनी करती है'),
    t('**Where:** Alyantra Medicity Superspeciality Hospital, Gomti Nagar, Lucknow', '**कहां:** अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर, लखनऊ'),
  ],

  sections: [
    {
      id: 'is-blepharoplasty-cosmetic',
      h2: t('Is blepharoplasty cosmetic or medically necessary?', 'क्या ब्लेफेरोप्लास्टी कॉस्मेटिक है या ज़रूरी?'),
      paras: [
        t(
          'It can be either, and the same operation can fall in both groups. Blepharoplasty is the surgical removal of excess eyelid skin, and sometimes fat or a little muscle. When loose upper-eyelid skin (dermatochalasis) hangs over the lash line and blocks part of your vision, removing it is a functional procedure that improves sight and comfort. When the skin is not affecting vision and the wish is to look more rested or younger, the same technique is cosmetic.',
          'यह दोनों हो सकती है, और एक ही ऑपरेशन दोनों श्रेणियों में आ सकता है। ब्लेफेरोप्लास्टी में पलक की अतिरिक्त त्वचा, और कभी-कभी चर्बी या थोड़ी मांसपेशी, सर्जरी से हटाई जाती है। जब ऊपरी पलक की ढीली त्वचा (डर्मेटोकैलेसिस) पलकों की रेखा पर लटककर नज़र का कुछ हिस्सा रोकती है, तो उसे हटाना फ़ंक्शनल प्रक्रिया है, जो देखने और आराम में सुधार करती है। जब त्वचा नज़र को प्रभावित नहीं कर रही और इच्छा ज़्यादा तरोताज़ा या जवान दिखने की है, तो वही तकनीक कॉस्मेटिक है।'
        ),
        t(
          'The label is not about how the result looks. It is about the reason for surgery and what can be shown on examination. The operation itself, its recovery and its risks are covered in our [blepharoplasty guide](/blepharoplasty-in-lucknow), so this page focuses on the decision.',
          'यह फ़र्क नतीजे के दिखने से नहीं, बल्कि सर्जरी के कारण और जांच में दिखाई जा सकने वाली बातों से तय होता है। ऑपरेशन, उसकी रिकवरी और जोखिम हमारी [ब्लेफेरोप्लास्टी गाइड](/blepharoplasty-in-lucknow) में हैं; यह पेज सिर्फ़ फ़ैसले पर केंद्रित है।'
        ),
      ],
    },
    {
      id: 'signs-eyelid-surgery-is-functional',
      h2: t('Signs that eyelid surgery may be functional', 'कौन-से लक्षण बताते हैं कि पलक सर्जरी फ़ंक्शनल हो सकती है'),
      paras: [
        t(
          'These are the problems surgeons look for. Having one of them does not automatically mean surgery is needed, and only an examination can confirm the cause.',
          'सर्जन इन्हीं समस्याओं को देखते हैं। इनमें से कोई एक होने का मतलब यह नहीं कि सर्जरी ज़रूरी है; कारण की पुष्टि सिर्फ़ जांच से होती है।'
        ),
      ],
      bullets: [
        t('Skin rests on or hangs over the eyelashes, and in severe cases covers part of the pupil', 'त्वचा पलकों पर टिकी है या उन पर लटकी है, और गंभीर स्थिति में पुतली के कुछ हिस्से को ढकती है'),
        t('The top part of your vision feels blocked, especially when reading, driving or looking up at signs', 'देखने का ऊपरी हिस्सा रुका हुआ लगता है, खासकर पढ़ते, गाड़ी चलाते या ऊपर लगे बोर्ड देखते समय'),
        t('You lift your eyebrows or tilt your chin back to see clearly', 'साफ़ देखने के लिए भौंहें ऊपर उठानी या ठोड़ी पीछे करनी पड़ती है'),
        t('A brow ache, forehead tiredness or headache that builds up through the day', 'भौंह में दर्द, माथे की थकान या दिन भर में बढ़ता सिरदर्द'),
        t('A heavy feeling of the lids by evening, or eyes that feel tired when reading or using a screen', 'शाम तक पलकों में भारीपन, या पढ़ने/स्क्रीन देखने पर आंखों की थकान'),
        t('Skin folds that irritate the lid margin, with rubbing, dermatitis or recurrent skin-fold infection', 'त्वचा की तहें जो पलक के किनारे को रगड़ती हैं, जिससे जलन, डर्मेटाइटिस या बार-बार संक्रमण होता है'),
        t('Eyelashes pushed down so that they point towards the eye', 'पलकें नीचे धकेली जाकर आंख की ओर मुड़ जाना'),
      ],
    },
    {
      id: 'comparison-table',
      h2: t('Functional vs cosmetic blepharoplasty: side-by-side comparison', 'फ़ंक्शनल बनाम कॉस्मेटिक ब्लेफेरोप्लास्टी: आमने-सामने तुलना'),
      table: {
        caption: t('A simplified comparison for patients. Real cases often sit between the two columns.', 'मरीज़ों के लिए सरल तुलना। असल में कई मामले दोनों कॉलम के बीच आते हैं।'),
        head: [t('Point', 'बिंदु'), t('Functional', 'फ़ंक्शनल'), t('Cosmetic', 'कॉस्मेटिक')],
        rows: [
          [t('Main reason', 'मुख्य कारण'), t('Skin blocks vision or causes discomfort', 'त्वचा नज़र रोकती है या तकलीफ़ देती है'), t('Appearance: tired, aged or puffy look', 'दिखावट: थका, उम्रदराज़ या सूजा हुआ चेहरा')],
          [t('Typical area', 'आम हिस्सा'), t('Upper eyelids', 'ऊपरी पलकें'), t('Upper, lower or both eyelids', 'ऊपरी, निचली या दोनों पलकें')],
          [t('Symptoms', 'लक्षण'), t('Blocked upper vision, brow ache, heavy lids, skin irritation', 'ऊपरी नज़र रुकना, भौंह दर्द, भारी पलकें, त्वचा में जलन'), t('Usually none beyond how the lids look', 'दिखावट के अलावा आमतौर पर कोई नहीं')],
          [t('What is documented', 'क्या दर्ज होता है'), t('Examination, eyelid measurements, photographs, often a visual-field test', 'जांच, पलक की नाप, तस्वीरें, अक्सर विज़ुअल फ़ील्ड टेस्ट'), t('Photographs and examination for planning', 'योजना के लिए तस्वीरें और जांच')],
          [t('Health insurance', 'हेल्थ इंश्योरेंस'), t('May be considered by some policies, with documentation and pre-authorisation', 'कुछ पॉलिसी में दस्तावेज़ों और प्री-ऑथराइज़ेशन के साथ विचार हो सकता है'), t('Generally not covered', 'आमतौर पर कवर नहीं')],
          [t('Goal of surgery', 'सर्जरी का लक्ष्य'), t('Better sight and comfort, with a natural-looking result', 'बेहतर नज़र और आराम, प्राकृतिक दिखावट के साथ'), t('A refreshed appearance', 'तरोताज़ा दिखावट')],
          [t('Risks', 'जोखिम'), t('The same as any blepharoplasty', 'किसी भी ब्लेफेरोप्लास्टी जैसे ही'), t('The same as any blepharoplasty', 'किसी भी ब्लेफेरोप्लास्टी जैसे ही')],
        ],
      },
    },
    {
      id: 'how-it-is-documented',
      h2: t('How is functional blepharoplasty documented?', 'फ़ंक्शनल ब्लेफेरोप्लास्टी को दस्तावेज़ों में कैसे दर्ज किया जाता है?'),
      paras: [
        t(
          'Insurers and hospitals both want objective evidence, not just a description of symptoms. The details can differ between centres and policies, but the documentation usually includes these steps. For how a consultation runs in general, see [what to expect at an oculoplasty consultation](/oculoplasty-consultation-what-to-expect).',
          'बीमा कंपनियां और अस्पताल दोनों सिर्फ़ लक्षणों के विवरण की जगह ठोस प्रमाण चाहते हैं। केंद्रों और पॉलिसी के हिसाब से ब्योरा बदल सकता है, पर दस्तावेज़ों में आमतौर पर ये कदम शामिल होते हैं। परामर्श आम तौर पर कैसे होता है, इसके लिए [ओकुलोप्लास्टी परामर्श में क्या होता है](/oculoplasty-consultation-what-to-expect) देखें।'
        ),
      ],
      steps: [
        t('A history of your symptoms: blocked vision, brow ache, heaviness, skin irritation, and how they affect daily tasks like reading or driving', 'आपके लक्षणों का इतिहास: नज़र रुकना, भौंह दर्द, भारीपन, त्वचा में जलन, और पढ़ने या गाड़ी चलाने जैसे रोज़ के कामों पर असर'),
        t('An eyelid examination with measurements, such as where the eyelid margin sits relative to the pupil, how much skin hangs over the lashes and where the eyebrow sits', 'पलक की जांच और नाप, जैसे पलक का किनारा पुतली के सापेक्ष कहां है, कितनी त्वचा पलकों पर लटक रही है और भौंह कहां है'),
        t('Standard clinical photographs from the front and sides, with the eyes looking straight ahead, so the skin position can be shown objectively', 'सामने और बगल से मानक क्लिनिकल तस्वीरें, जिनमें आंखें सीधी देख रही हों, ताकि त्वचा की स्थिति वस्तुनिष्ठ रूप से दिखाई जा सके'),
        t('A visual-field test, where available: the upper field of vision is measured with the eyelids as they are, and often measured again with the excess skin gently lifted or taped. A clear improvement supports a functional reason', 'विज़ुअल फ़ील्ड टेस्ट, जहां उपलब्ध हो: पलकें जैसी हैं वैसे ऊपरी नज़र का दायरा नापा जाता है, और अक्सर अतिरिक्त त्वचा को हल्के से ऊपर उठाकर या टेप लगाकर दोबारा नापा जाता है। साफ़ सुधार फ़ंक्शनल कारण का समर्थन करता है'),
        t('An eye health check, including vision and the surface of the eye, to rule out other causes and make sure surgery is safe', 'आंख की सेहत की जांच, जिसमें नज़र और आंख की सतह शामिल है, ताकि दूसरे कारण बाहर किए जा सकें और सर्जरी सुरक्षित रहे'),
        t('A written report from the treating surgeon that summarises the findings and the reason surgery is advised', 'इलाज करने वाले सर्जन की लिखित रिपोर्ट जो जांच के निष्कर्ष और सर्जरी की सलाह का कारण बताती है'),
      ],
    },
    {
      id: 'ptosis-or-low-brow',
      h2: t('What if the real problem is ptosis or a low eyebrow?', 'अगर असली समस्या टोसिस या नीची भौंह हो तो?'),
      paras: [
        t(
          'Not every heavy-looking eyelid is excess skin. In **ptosis**, the eyelid margin itself sits too low because the lifting muscle is weak or stretched, and removing skin will not fix it. A **low or drooping eyebrow** can push the upper eyelid down and make it look heavy even when the lid is normal. Different causes need different operations, and sometimes more than one problem is present together.',
          'हर भारी दिखती पलक अतिरिक्त त्वचा की वजह से नहीं होती। **टोसिस** में पलक का किनारा ही नीचा रहता है क्योंकि उठाने वाली मांसपेशी कमज़ोर या खिंची हुई है, और त्वचा हटाने से यह ठीक नहीं होगा। **नीची या झुकी भौंह** पलक को नीचे दबाकर भारी दिखा सकती है, भले ही पलक स्वयं सामान्य हो। अलग कारणों के लिए अलग ऑपरेशन चाहिए, और कभी-कभी एक से ज़्यादा समस्याएं साथ होती हैं।'
        ),
      ],
      bullets: [
        t('Skin only: the eyelid margin is in a normal position and folds of skin hang over it. This is the classic functional blepharoplasty case', 'सिर्फ़ त्वचा: पलक का किनारा सामान्य जगह पर है और त्वचा की तहें उस पर लटकी हैं। यह फ़ंक्शनल ब्लेफेरोप्लास्टी का क्लासिक मामला है'),
        t('Ptosis: the margin is low, and the fix is [ptosis surgery](/ptosis-surgery-in-lucknow), sometimes combined with skin removal', 'टोसिस: किनारा नीचा है, और इलाज [टोसिस सर्जरी](/ptosis-surgery-in-lucknow) है, कभी-कभी त्वचा हटाने के साथ'),
        t('Low brow: the eyebrow sits below the bony rim, and a brow lift may be discussed instead of, or along with, eyelid surgery', 'नीची भौंह: भौंह हड्डी के किनारे से नीचे है, और पलक सर्जरी की जगह या उसके साथ ब्रो लिफ़्ट पर चर्चा हो सकती है'),
      ],
      subsections: [
        {
          h3: t('Where to read more', 'और कहां पढ़ें'),
          paras: [
            t(
              'Our guide on [ptosis vs excess eyelid skin](/ptosis-vs-excess-eyelid-skin) explains how to tell these apart, and [drooping eyelid causes and treatment](/drooping-eyelid-causes-and-treatment) lists the wider causes. Operating for the wrong cause is a common reason for disappointing results, which is why the examination matters more than the label.',
              '[टोसिस या पलक की ढीली त्वचा](/ptosis-vs-excess-eyelid-skin) गाइड में इन्हें अलग पहचानने का तरीका है, और [झुकी हुई पलक: कारण और कब चिंता करें](/drooping-eyelid-causes-and-treatment) में व्यापक कारण हैं। गलत कारण पर ऑपरेशन करना निराशाजनक नतीजों की आम वजह है, इसीलिए लेबल से ज़्यादा जांच मायने रखती है।'
            ),
          ],
        },
      ],
    },
    {
      id: 'insurance-in-india',
      h2: t('Is eyelid surgery covered by insurance in India?', 'क्या भारत में पलक की सर्जरी बीमा में कवर होती है?'),
      paras: [
        t(
          'In general terms, health insurers in India do not cover purely cosmetic surgery, and blepharoplasty done only for appearance is usually excluded. Where eyelid skin genuinely blocks vision, some insurers may consider the operation as medically necessary, usually when the documentation described above is provided. This is never automatic. Coverage depends on your policy wording, waiting periods, sub-limits, and the insurer’s own review of the case.',
          'सामान्य तौर पर भारत में हेल्थ इंश्योरेंस कंपनियां सिर्फ़ कॉस्मेटिक सर्जरी को कवर नहीं करतीं, और सिर्फ़ दिखावट के लिए की गई ब्लेफेरोप्लास्टी आमतौर पर बाहर रहती है। जहां पलक की त्वचा सचमुच नज़र रोकती है, वहां कुछ बीमा कंपनियां ऑपरेशन को चिकित्सकीय रूप से ज़रूरी मान सकती हैं, आमतौर पर तब जब ऊपर बताए गए दस्तावेज़ दिए जाएं। यह कभी अपने-आप नहीं होता। कवरेज आपकी पॉलिसी की शर्तों, वेटिंग पीरियड, सब-लिमिट और बीमा कंपनी की अपनी समीक्षा पर निर्भर है।'
        ),
        t(
          'A practical order of steps if you want to check:',
          'अगर आप पता करना चाहते हैं तो व्यावहारिक क्रम:'
        ),
      ],
      steps: [
        t('Get a proper examination first, so the reason for surgery is clearly recorded', 'पहले पूरी जांच करवाएं, ताकि सर्जरी का कारण साफ़ दर्ज हो'),
        t('Read your policy for cosmetic-surgery exclusions and ask your insurer or agent how they treat vision-related eyelid surgery', 'अपनी पॉलिसी में कॉस्मेटिक सर्जरी के अपवाद पढ़ें और बीमा कंपनी/एजेंट से पूछें कि नज़र से जुड़ी पलक सर्जरी को वे कैसे देखते हैं'),
        t('Ask the hospital’s insurance/TPA desk to send the surgeon’s report, photographs and any visual-field result for pre-authorisation, before the surgery date', 'अस्पताल के इंश्योरेंस/TPA डेस्क से कहें कि सर्जरी की तारीख़ से पहले प्री-ऑथराइज़ेशन के लिए सर्जन की रिपोर्ट, तस्वीरें और विज़ुअल फ़ील्ड का नतीजा भेजें'),
        t('Wait for the insurer’s written decision. If it is declined, you can ask the insurer for the reason and decide whether to proceed on a self-pay basis', 'बीमा कंपनी के लिखित फ़ैसले का इंतज़ार करें। अगर अस्वीकार हो, तो कारण पूछ सकते हैं और तय कर सकते हैं कि अपने खर्च पर आगे बढ़ना है या नहीं'),
      ],
      subsections: [
        {
          h3: t('Cost and pricing', 'खर्च'),
          paras: [
            t(
              'Cost depends on many factors that have nothing to do with the functional or cosmetic label. See [what affects oculoplasty surgery cost](/oculoplasty-surgery-cost-in-lucknow) for the full list and the questions to ask for a clear estimate.',
              'खर्च कई ऐसी बातों पर निर्भर है जिनका फ़ंक्शनल या कॉस्मेटिक लेबल से कोई संबंध नहीं। पूरी सूची और साफ़ अनुमान के लिए पूछने योग्य सवालों के लिए [ओकुलोप्लास्टी सर्जरी के खर्च](/oculoplasty-surgery-cost-in-lucknow) पेज देखें।'
            ),
          ],
        },
      ],
    },
    {
      id: 'when-not-surgery',
      h2: t('When is a heavy or puffy eyelid not a surgical problem?', 'पलक कब भारी या सूजी हो फिर भी सर्जरी की ज़रूरत नहीं?'),
      paras: [
        t(
          'Surgery is not the right answer for every tired-looking eyelid. A new or changing eyelid problem should be examined before anyone plans an operation, because the cause may be medical.',
          'हर थकी हुई दिखती पलक का जवाब सर्जरी नहीं है। पलक की कोई नई या बदलती समस्या हो तो ऑपरेशन की योजना से पहले जांच ज़रूरी है, क्योंकि कारण चिकित्सकीय हो सकता है।'
        ),
      ],
      bullets: [
        t('Puffy lids that come and go with allergy, eczema, lack of sleep or salty food may settle with treating the cause rather than surgery', 'एलर्जी, एक्ज़िमा, नींद की कमी या नमकीन खाने से आने-जाने वाली सूजी पलकें सर्जरी की जगह कारण के इलाज से ठीक हो सकती हैं'),
        t('Swollen, red or gritty lids with a staring look can be a sign of thyroid eye disease, which needs medical review first', 'सूजी, लाल या किरकिराती पलकें और घूरती हुई नज़र थायराइड आई डिज़ीज़ का संकेत हो सकती हैं, जिसकी पहले मेडिकल जांच ज़रूरी है'),
        t('Lower-lid bags are mostly a cosmetic concern; see [under-eye bags: causes and options](/under-eye-bags-treatment)', 'निचली पलक के उभार ज़्यादातर कॉस्मेटिक चिंता हैं; [आंखों के नीचे सूजन: कारण और विकल्प](/under-eye-bags-treatment) देखें'),
        t('Dry eyes, an eyelid that does not close fully, or a recent eye operation may make eyelid surgery riskier, so the timing and the need are weighed carefully', 'सूखी आंखें, पलक का पूरी तरह बंद न होना या हाल की आंख की सर्जरी, पलक सर्जरी को जोखिम भरा बना सकती हैं, इसलिए समय और ज़रूरत को सावधानी से तोला जाता है'),
        t('If the concern is purely cosmetic, there are non-surgical choices such as [Botox around the eyes](/services/botox-eyelid-cosmetic-surgery-periocular-aesthetics) for certain lines, and doing nothing is also a valid decision', 'अगर चिंता सिर्फ़ कॉस्मेटिक है, तो कुछ रेखाओं के लिए [आंखों के आसपास बोटॉक्स](/services/botox-eyelid-cosmetic-surgery-periocular-aesthetics) जैसे गैर-सर्जिकल विकल्प हैं, और कुछ न करना भी एक सही फ़ैसला है'),
      ],
      callout: {
        tone: 'urgent',
        title: t('When not to wait for a consultation', 'कब परामर्श का इंतज़ार न करें'),
        text: t(
          'Seek same-day medical or eye care for a **sudden** droop with double vision, severe headache, a different-sized pupil, weakness or slurred speech (go to an emergency department), sudden loss or blurring of vision, or a painful, red, swollen eyelid with fever. A rapidly growing, bleeding or non-healing eyelid lump also needs prompt examination. These are not cosmetic or insurance questions.',
          '**अचानक** पलक झुकना और साथ में दोहरा दिखना, तेज़ सिरदर्द, पुतलियों का अलग आकार, कमज़ोरी या बोलने में लड़खड़ाहट हो तो इमरजेंसी में जाएं; अचानक नज़र जाना या धुंधली होना, या दर्द वाली, लाल, सूजी पलक के साथ बुखार हो तो उसी दिन डॉक्टर/आंख की जांच कराएं। तेज़ी से बढ़ती, खून बहाती या न भरने वाली पलक की गांठ की भी जल्दी जांच ज़रूरी है। ये कॉस्मेटिक या बीमा के सवाल नहीं हैं।'
        ),
      },
    },
    {
      id: 'risks-and-limits',
      h2: t('Does “functional” mean lower risk, and are results certain?', 'क्या “फ़ंक्शनल” का मतलब कम जोखिम है, और क्या नतीजे पक्के होते हैं?'),
      paras: [
        t(
          'No. Calling surgery functional or cosmetic changes the paperwork, not the biology. Both can involve bruising and swelling, dry or irritated eyes, uneven eyelids or creases, a visible scar line, difficulty closing the eyes fully, bleeding or infection, and in rare cases serious bleeding behind the eye that threatens vision. Results vary between people, and a further adjustment is needed in some. Removing skin does not guarantee that every symptom, such as brow ache, will disappear.',
          'नहीं। सर्जरी को फ़ंक्शनल या कॉस्मेटिक कहने से कागज़ी कार्रवाई बदलती है, शरीर का विज्ञान नहीं। दोनों में नील और सूजन, आंखों में सूखापन या जलन, असमान पलकें या सिलवट, निशान की रेखा, आंख पूरी तरह बंद करने में दिक्कत, खून बहना या संक्रमण, और बहुत कम मामलों में आंख के पीछे गंभीर खून बहना शामिल हो सकता है जो नज़र के लिए ख़तरा है। नतीजे लोगों में अलग होते हैं, और कुछ में दोबारा समायोजन की ज़रूरत पड़ती है। त्वचा हटाने से हर लक्षण, जैसे भौंह दर्द, पक्का ठीक हो जाए, ऐसा नहीं कहा जा सकता।'
        ),
        t(
          'A good surgeon will also be honest if your concern is mainly cosmetic, or if your symptoms point to a cause that surgery will not fix. The full list of risks is in the [blepharoplasty guide](/blepharoplasty-in-lucknow).',
          'अच्छा सर्जन यह भी ईमानदारी से बताएगा कि आपकी चिंता मुख्य रूप से कॉस्मेटिक है, या आपके लक्षण ऐसे कारण की ओर इशारा करते हैं जिसे सर्जरी ठीक नहीं करेगी। जोखिमों की पूरी सूची [ब्लेफेरोप्लास्टी गाइड](/blepharoplasty-in-lucknow) में है।'
        ),
      ],
    },
    {
      id: 'what-to-bring',
      h2: t('What to bring and ask at your consultation', 'परामर्श में क्या लाएं और क्या पूछें'),
      bullets: [
        t('A few clear photographs of your face from a few years ago, if you have them, to show how your eyelids used to look', 'कुछ साल पुरानी अपने चेहरे की साफ़ तस्वीरें, अगर हों, ताकि दिखे कि पलकें पहले कैसी थीं'),
        t('Your health insurance policy document and the contact details of your insurer or TPA', 'आपकी हेल्थ इंश्योरेंस पॉलिसी का दस्तावेज़ और बीमा कंपनी/TPA का संपर्क विवरण'),
        t('A list of your medicines, especially blood thinners, and any previous eye reports or eye surgery details', 'आपकी दवाओं की सूची, खासकर ब्लड थिनर, और पुरानी आंखों की रिपोर्ट या आंख की सर्जरी का ब्योरा'),
        t('Questions: Is my problem skin, ptosis or the eyebrow? Is a visual-field test useful in my case? What will be written in my report? What are my alternatives?', 'सवाल: मेरी समस्या त्वचा, टोसिस या भौंह की है? क्या मेरे मामले में विज़ुअल फ़ील्ड टेस्ट उपयोगी है? मेरी रिपोर्ट में क्या लिखा जाएगा? मेरे विकल्प क्या हैं?'),
      ],
    },
  ],

  whyDrSaumika: [
    t('Fellowship-trained in Oculoplasty & Ocular Oncology (Dr. Shroff’s Charity Eye Hospital, New Delhi), after MS in Ophthalmology', 'नेत्र विज्ञान में MS के बाद डॉ. श्रॉफ़्स चैरिटी आई हॉस्पिटल, नई दिल्ली से ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी में फ़ेलोशिप'),
    t('An eye surgeon, so she checks vision, the eye surface and eyelid closure along with appearance, and separates skin, ptosis and brow causes', 'नेत्र सर्जन होने के नाते वे दिखावट के साथ नज़र, आंख की सतह और पलक के बंद होने की जांच करती हैं, और त्वचा, टोसिस और भौंह के कारण अलग पहचानती हैं'),
    t('Offers upper and lower blepharoplasty, ptosis surgery and cosmetic Botox around the eyes, so the advice can cover more than one option', 'ऊपरी व निचली ब्लेफेरोप्लास्टी, टोसिस सर्जरी और आंखों के आसपास कॉस्मेटिक बोटॉक्स करती हैं, इसलिए सलाह एक से अधिक विकल्पों पर हो सकती है'),
    t('Registered with the Uttar Pradesh Medical Council (Reg. No. 137106); consults at Alyantra Medicity Superspeciality Hospital, Gomti Nagar', 'उत्तर प्रदेश मेडिकल काउंसिल में पंजीकृत (पंजीकरण सं. 137106); अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श'),
  ],

  faqs: [
    {
      q: t('Is blepharoplasty cosmetic or medically necessary?', 'क्या ब्लेफेरोप्लास्टी कॉस्मेटिक है या चिकित्सकीय रूप से ज़रूरी?'),
      a: t('It can be either. If excess upper-eyelid skin blocks your vision or causes discomfort, the surgery is functional. If the aim is only a more refreshed look, it is cosmetic. An eye examination, photographs and sometimes a visual-field test help decide which applies to you.', 'यह दोनों हो सकती है। अगर ऊपरी पलक की अतिरिक्त त्वचा नज़र रोकती है या तकलीफ़ देती है, तो सर्जरी फ़ंक्शनल है। अगर लक्ष्य सिर्फ़ ज़्यादा तरोताज़ा दिखना है, तो यह कॉस्मेटिक है। आपके लिए कौन-सी लागू होती है, यह आंखों की जांच, तस्वीरें और कभी-कभी विज़ुअल फ़ील्ड टेस्ट तय करने में मदद करते हैं।'),
    },
    {
      q: t('Is eyelid surgery covered by insurance in India?', 'क्या भारत में पलक सर्जरी बीमा में कवर होती है?'),
      a: t('Purely cosmetic eyelid surgery is usually excluded. Where eyelid skin blocks vision, some insurers may consider the surgery with supporting documentation, but it is never automatic. Coverage depends on your policy and pre-authorisation, so check with your insurer or TPA and the hospital desk before booking.', 'सिर्फ़ कॉस्मेटिक पलक सर्जरी आमतौर पर बाहर रहती है। जहां पलक की त्वचा नज़र रोकती है, वहां कुछ बीमा कंपनियां सहायक दस्तावेज़ों के साथ सर्जरी पर विचार कर सकती हैं, पर यह कभी अपने-आप नहीं होता। कवरेज आपकी पॉलिसी और प्री-ऑथराइज़ेशन पर निर्भर है, इसलिए बुकिंग से पहले बीमा कंपनी/TPA और अस्पताल डेस्क से पूछ लें।'),
    },
    {
      q: t('What is a visual field test for eyelid surgery?', 'पलक सर्जरी के लिए विज़ुअल फ़ील्ड टेस्ट क्या है?'),
      a: t('It is a simple sitting test that maps how far you can see around you. For eyelid surgery, the upper field may be measured with the lids as they are and again with excess skin lifted or taped. A clear improvement supports a functional reason. Not every case needs it, and availability varies.', 'यह बैठकर किया जाने वाला टेस्ट है जो नापता है कि आप अपने चारों ओर कितनी दूर तक देख सकते हैं। पलक सर्जरी में ऊपरी दायरा पलकों की मौजूदा स्थिति में और फिर अतिरिक्त त्वचा को उठाकर या टेप लगाकर नापा जा सकता है। साफ़ सुधार फ़ंक्शनल कारण का समर्थन करता है। हर मामले में यह ज़रूरी नहीं और उपलब्धता अलग-अलग होती है।'),
    },
    {
      q: t('How do I know if my droopy eyelid is ptosis or extra skin?', 'मुझे कैसे पता चलेगा कि मेरी झुकी पलक टोसिस है या अतिरिक्त त्वचा?'),
      a: t('You cannot be sure from a mirror. In ptosis the eyelid edge itself sits low; with extra skin, the edge is in a normal place and skin hangs over it. An oculoplastic examination with measurements separates them, and the two can coexist. See our ptosis vs excess skin guide for the details.', 'आईने से पक्का पता नहीं चलता। टोसिस में पलक का किनारा ही नीचा होता है; अतिरिक्त त्वचा में किनारा सामान्य जगह पर होता है और त्वचा उस पर लटकती है। ओकुलोप्लास्टिक जांच और नाप से दोनों अलग पहचाने जाते हैं, और दोनों साथ भी हो सकते हैं। विवरण के लिए हमारी टोसिस बनाम अतिरिक्त त्वचा गाइड देखें।'),
    },
    {
      q: t('Can the same operation be both functional and cosmetic?', 'क्या एक ही ऑपरेशन फ़ंक्शनल और कॉस्मेटिक दोनों हो सकता है?'),
      a: t('Yes. Removing heavy upper-eyelid skin improves vision and also changes appearance. Insurers and hospitals look at the documented reason for surgery, not only at the result. Add-on work done purely for looks, such as lower-lid surgery, may be treated separately.', 'हां। ऊपरी पलक की भारी त्वचा हटाने से नज़र भी सुधरती है और दिखावट भी बदलती है। बीमा कंपनियां और अस्पताल सिर्फ़ नतीजे को नहीं, बल्कि सर्जरी के दर्ज कारण को देखते हैं। सिर्फ़ दिखावट के लिए किया गया अतिरिक्त काम, जैसे निचली पलक की सर्जरी, अलग से माना जा सकता है।'),
    },
    {
      q: t('Will my insurer approve functional blepharoplasty if I have the reports?', 'क्या रिपोर्ट होने पर बीमा कंपनी फ़ंक्शनल ब्लेफेरोप्लास्टी मंज़ूर कर देगी?'),
      a: t('Good documentation helps, but the decision is the insurer’s and no outcome can be promised. Policies differ in exclusions, waiting periods and limits. Ask for pre-authorisation in writing before the surgery date, and decide in advance how you would proceed if it is declined.', 'अच्छे दस्तावेज़ मदद करते हैं, पर फ़ैसला बीमा कंपनी का होता है और किसी नतीजे का वादा नहीं किया जा सकता। पॉलिसी में अपवाद, वेटिंग पीरियड और सीमाएं अलग होती हैं। सर्जरी की तारीख़ से पहले लिखित प्री-ऑथराइज़ेशन मांगें, और पहले से तय रखें कि अस्वीकार होने पर आप क्या करेंगे।'),
    },
    {
      q: t('Is there a non-surgical option for droopy eyelid skin?', 'क्या ढीली पलक की त्वचा का कोई बिना सर्जरी का विकल्प है?'),
      a: t('Loose eyelid skin does not tighten with exercises or creams in any lasting way. If the issue is mild or purely cosmetic, you can simply monitor it. Other causes, such as allergy-related puffiness or thyroid-related swelling, are treated medically. Surgery is the usual option when skin truly blocks vision.', 'ढीली पलक की त्वचा व्यायाम या क्रीम से स्थायी रूप से कसती नहीं। अगर समस्या हल्की या सिर्फ़ कॉस्मेटिक है, तो आप बस निगरानी रख सकते हैं। दूसरे कारण, जैसे एलर्जी से सूजन या थायराइड से सूजन, का इलाज दवाओं से होता है। जब त्वचा सचमुच नज़र रोके, तो सर्जरी आमतौर पर विकल्प होती है।'),
    },
  ],

  cta: {
    title: t('Find out whether your eyelid surgery is functional', 'जानें कि आपकी पलक सर्जरी फ़ंक्शनल है या नहीं'),
    text: t('Bring your insurance policy details, any previous eye reports and a list of your medicines. After the examination, you will be told what is causing the heaviness and what your options are.', 'अपनी बीमा पॉलिसी की जानकारी, पुरानी आंखों की रिपोर्ट और दवाओं की सूची साथ लाएं। जांच के बाद आपको बताया जाएगा कि भारीपन का कारण क्या है और आपके विकल्प क्या हैं।'),
  },

  related: [
    { path: '/blepharoplasty-in-lucknow', label: t('Blepharoplasty: procedure and recovery', 'ब्लेफेरोप्लास्टी: प्रक्रिया और रिकवरी') },
    { path: '/ptosis-vs-excess-eyelid-skin', label: t('Ptosis vs excess eyelid skin', 'टोसिस या पलक की ढीली त्वचा') },
    { path: '/oculoplasty-surgery-cost-in-lucknow', label: t('What affects oculoplasty surgery cost', 'ओकुलोप्लास्टी सर्जरी का खर्च किन बातों पर निर्भर') },
    { path: '/ptosis-surgery-in-lucknow', label: t('Ptosis (drooping eyelid) surgery', 'टोसिस (झुकी पलक) सर्जरी') },
    { path: '/under-eye-bags-treatment', label: t('Under-eye bags: causes and options', 'आंखों के नीचे सूजन: कारण और विकल्प') },
    { path: '/oculoplasty-consultation-what-to-expect', label: t('Your consultation: what to expect', 'परामर्श में क्या होता है') },
  ],

  references: [
    { label: 'Eyelid surgery (blepharoplasty)', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/treatments/eyelid-surgery' },
    { label: 'Does insurance cover eyelid surgery?', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/ask-ophthalmologist-q/does-insurance-cover-eyelid-surgery' },
    { label: 'Dermatochalasis', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Dermatochalasis' },
    { label: 'Upper Eyelid Blepharoplasty', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Upper_Eyelid_Blepharoplasty' },
    { label: 'What is ptosis?', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/diseases/what-is-ptosis' },
  ],

  schema: {
    type: 'MedicalWebPage',
    name: 'Functional vs cosmetic blepharoplasty',
    alternateName: ['Medically necessary blepharoplasty', 'Functional eyelid surgery', 'Is blepharoplasty cosmetic'],
    bodyLocation: 'Upper eyelid',
  },

  reviewerNotes: [
    'Confirm whether a visual-field test (and which type) is available and routinely used at Alyantra or arranged elsewhere; the page says "where available" and "often" without naming a device. Edit if it is not part of her routine.',
    'Confirm the documentation list (history, measurements, photographs, visual-field test, written report) matches what she provides for insurance pre-authorisation, and that she is happy to provide a written report.',
    'Insurance wording is generic: purely cosmetic surgery usually excluded; functional cases may be considered with documentation; pre-authorisation via the hospital insurance/TPA desk. No insurer, scheme or approval rate is named. Confirm Alyantra has an insurance/TPA desk (already referenced in the cost page).',
    'Confirm the brow-lift mention is acceptable: it appears only as a possible option to be discussed, not as a service she offers.',
    'Confirm the "taped or lifted skin" description of the repeat visual-field measurement matches her practice.',
    'The "Offers upper and lower blepharoplasty, ptosis surgery and cosmetic Botox" bullet relies on the confirmed services list; confirm the wording.',
    'Reference URLs: all five were reused from published Batch 1/2 pages (AAO eyelid-surgery, AAO insurance Q&A, EyeWiki Dermatochalasis, EyeWiki Upper_Eyelid_Blepharoplasty, AAO what-is-ptosis). They were NOT independently re-verified in this session (WebFetch not used).',
  ],
};

export default guide;
