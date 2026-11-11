import type { Guide, L } from '../types';

const t = (en: string, hi: string): L => ({ en, hi });

const guide: Guide = {
  slug: 'ptosis-vs-excess-eyelid-skin',
  primaryKeyword: 'ptosis vs excess eyelid skin',
  secondaryKeywords: ['ptosis vs dermatochalasis', 'ptosis vs hooded eyes', 'ptosis surgery vs blepharoplasty', 'brow ptosis', 'droopy eyelid or extra skin', 'hooded eyes or ptosis'],
  hindiKeywords: ['झुकी हुई पलक vs ढीली त्वचा', 'पलक की लटकती त्वचा', 'hooded eyes', 'ptosis aur dermatochalasis mein fark'],

  metaTitle: t(
    'Ptosis vs Excess Eyelid Skin: Which Surgery? | Dr Saumika',
    'टोसिस बनाम पलक की ढीली त्वचा: कौन-सी सर्जरी? | डॉ. सौमिका'
  ),
  metaDescription: t(
    'Ptosis vs excess eyelid skin (dermatochalasis): how to tell a drooping lid from hooded eyes or a low brow, and whether you need ptosis surgery or blepharoplasty.',
    'टोसिस बनाम पलक की ढीली त्वचा (डर्मेटोकैलेसिस): झुकी हुई पलक, hooded eyes और नीची भौंह में फ़र्क कैसे पहचानें, और टोसिस सर्जरी या ब्लेफेरोप्लास्टी में कौन-सी चाहिए।'
  ),
  h1: t('Ptosis vs Excess Eyelid Skin: Which Do I Have?', 'झुकी हुई पलक (टोसिस) बनाम पलक की ढीली त्वचा: मुझे कौन-सी समस्या है?'),
  lead: t(
    'Ptosis vs excess eyelid skin is a question of what is actually low: in ptosis the eyelid edge itself sits too low because the lifting muscle is weak, while in excess skin (dermatochalasis, often called hooded eyes) the edge is in the right place but a fold of loose skin hangs over it. Both can make the eyes look tired and block the top of your vision, and they are very often present together in older adults. They need different operations: ptosis surgery lifts the eyelid margin, whereas blepharoplasty removes skin. A low eyebrow can mimic either, which is why a proper examination matters.',
    'झुकी हुई पलक (टोसिस) बनाम पलक की ढीली त्वचा का सवाल असल में यह है कि नीचे क्या है: टोसिस में पलक का किनारा खुद नीचे रहता है क्योंकि उठाने वाली मांसपेशी कमज़ोर है, जबकि अतिरिक्त त्वचा (डर्मेटोकैलेसिस, जिसे अक्सर hooded eyes कहते हैं) में किनारा सही जगह पर रहता है पर ढीली त्वचा की तह उसके ऊपर लटकती है। दोनों में आंखें थकी दिख सकती हैं और ऊपर की नज़र रुक सकती है, और बुज़ुर्गों में ये अक्सर साथ पाए जाते हैं। इनके ऑपरेशन अलग हैं: टोसिस सर्जरी पलक का किनारा ऊपर उठाती है, जबकि ब्लेफेरोप्लास्टी त्वचा हटाती है। नीची भौंह भी दोनों जैसी दिख सकती है, इसलिए सही जांच ज़रूरी है।'
  ),
  atAGlance: [
    t('**Ptosis:** the eyelid margin is too low (a muscle or tendon problem)', '**टोसिस:** पलक का किनारा बहुत नीचे (मांसपेशी या टेंडन की समस्या)'),
    t('**Excess skin (dermatochalasis):** the margin is normal, loose skin folds over it', '**अतिरिक्त त्वचा (डर्मेटोकैलेसिस):** किनारा सामान्य, ढीली त्वचा उसके ऊपर लटकती है'),
    t('**Third look-alike:** a drooping eyebrow (brow ptosis) pushing skin onto the lid', '**तीसरा मिलता-जुलता कारण:** झुकी हुई भौंह (ब्रो टोसिस) जो त्वचा को पलक पर धकेलती है'),
    t('**Surgery:** ptosis repair, blepharoplasty, brow surgery, or a combination', '**सर्जरी:** टोसिस रिपेयर, ब्लेफेरोप्लास्टी, भौंह की सर्जरी, या इनका मेल'),
    t('**Common together:** many older adults have both, and can be treated in one sitting', '**अक्सर साथ:** कई बुज़ुर्गों में दोनों होते हैं, और एक ही बार में इलाज हो सकता है'),
    t('**Where:** Alyantra Medicity Superspeciality Hospital, Gomti Nagar, Lucknow', '**कहां:** अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर, लखनऊ'),
  ],

  sections: [
    {
      id: 'urgent-new-droop',
      h2: t('Is a new droop just extra skin?', 'क्या नई झुकी पलक सिर्फ़ अतिरिक्त त्वचा है?'),
      paras: [
        t(
          'Extra eyelid skin develops slowly over years. If your eyelid dropped over hours or days, do not assume it is skin or ageing.',
          'अतिरिक्त पलक की त्वचा सालों में धीरे-धीरे बनती है। अगर आपकी पलक घंटों या दिनों में झुकी है, तो इसे त्वचा या उम्र का असर न मानें।'
        ),
      ],
      callout: {
        tone: 'urgent',
        title: t('A NEW sudden droop needs same-day care', 'नया अचानक झुकाव उसी दिन जांच मांगता है'),
        text: t(
          'Go to an emergency department the same day if an eyelid droops suddenly, especially with double vision, a severe headache, unequal pupils, weakness or numbness of the face, arm or leg, slurred speech, or difficulty swallowing or breathing. These can signal a stroke, an aneurysm or a nerve or muscle emergency. See [drooping eyelid causes and treatment](/drooping-eyelid-causes-and-treatment).',
          'अगर कोई पलक अचानक झुके, खासकर दोहरा दिखने, तेज़ सिरदर्द, असमान पुतलियां, चेहरे/हाथ/पैर में कमज़ोरी या सुन्नपन, लड़खड़ाती आवाज़, या निगलने/सांस लेने में तकलीफ़ के साथ, तो उसी दिन इमरजेंसी में जाएं। ये स्ट्रोक, एन्यूरिज़्म या नस/मांसपेशी की इमरजेंसी के संकेत हो सकते हैं। देखें [झुकी हुई पलक के कारण और इलाज](/drooping-eyelid-causes-and-treatment)।'
        ),
      },
    },
    {
      id: 'comparison-table',
      h2: t('What is the difference between ptosis and dermatochalasis?', 'टोसिस और डर्मेटोकैलेसिस में क्या फ़र्क है?'),
      paras: [
        t(
          'The table compares the two conditions side by side. It is a general guide to help you understand the terms, not a way to diagnose yourself.',
          'तालिका दोनों स्थितियों की साथ-साथ तुलना करती है। यह शब्दों को समझने की सामान्य गाइड है, खुद निदान करने का तरीका नहीं।'
        ),
      ],
      table: {
        caption: t('Ptosis vs dermatochalasis (excess eyelid skin). Your surgeon confirms which applies after examination.', 'टोसिस बनाम डर्मेटोकैलेसिस (पलक की अतिरिक्त त्वचा)। कौन-सा लागू होता है, यह जांच के बाद सर्जन तय करते हैं।'),
        head: [t('Feature', 'बिंदु'), t('Ptosis', 'टोसिस'), t('Dermatochalasis (hooded eyes)', 'डर्मेटोकैलेसिस (hooded eyes)')],
        rows: [
          [t('What droops', 'क्या झुकता है'), t('The eyelid itself (its edge)', 'पलक स्वयं (उसका किनारा)'), t('Loose skin above the eyelid', 'पलक के ऊपर की ढीली त्वचा')],
          [t('Eyelid margin position', 'पलक के किनारे की स्थिति'), t('Low; may cover part of the pupil', 'नीचा; पुतली का हिस्सा ढक सकता है'), t('Usually normal; hidden by the skin fold', 'आमतौर पर सामान्य; त्वचा की तह से छिपा')],
          [t('Cause', 'कारण'), t('Weak or stretched lifting muscle or tendon, nerve or muscle disease, or present from birth', 'उठाने वाली मांसपेशी या टेंडन की कमज़ोरी/खिंचाव, नस या मांसपेशी रोग, या जन्मजात'), t('Skin loses elasticity with age and sun exposure; fat may bulge; can run in families', 'उम्र और धूप से त्वचा की लोच घटती है; चर्बी उभर सकती है; परिवार में चल सकता है')],
          [t('Effect on vision', 'नज़र पर असर'), t('Blocks the upper field of vision if the lid covers the pupil', 'पलक पुतली को ढके तो ऊपर की नज़र रुकती है'), t('Can block the upper and side vision when the fold is heavy', 'तह भारी हो तो ऊपर और बगल की नज़र रुक सकती है')],
          [t('Age pattern', 'उम्र का पैटर्न'), t('Any age, including infants and children', 'किसी भी उम्र में, शिशुओं और बच्चों में भी'), t('Mostly middle-aged and older adults', 'ज़्यादातर मध्यम आयु और बुज़ुर्ग')],
          [t('Typical surgery', 'आमतौर पर सर्जरी'), t('Levator surgery or frontalis sling (see [ptosis surgery](/ptosis-surgery-in-lucknow))', 'लेवेटर सर्जरी या फ्रंटालिस स्लिंग (देखें [टोसिस सर्जरी](/ptosis-surgery-in-lucknow))'), t('Upper-lid blepharoplasty (see [blepharoplasty](/blepharoplasty-in-lucknow))', 'ऊपरी पलक की ब्लेफेरोप्लास्टी (देखें [ब्लेफेरोप्लास्टी](/blepharoplasty-in-lucknow))')],
          [t('Other options', 'अन्य विकल्प'), t('Treat the underlying cause; observation if mild', 'अंदरूनी कारण का इलाज; हल्का हो तो निगरानी'), t('Observation if it does not bother you', 'तकलीफ़ न हो तो निगरानी')],
        ],
      },
    },
    {
      id: 'both-together',
      h2: t('Can you have both ptosis and excess eyelid skin?', 'क्या टोसिस और अतिरिक्त त्वचा दोनों हो सकते हैं?'),
      paras: [
        t(
          'Yes, and in older adults this is common, because the tendon that lifts the lid stretches and the skin loosens over the same years. Operating on only one problem can leave the other still bothering you. For example, removing skin from an eyelid that is also ptotic may improve the look of the lid but leave it low, and lifting a ptotic lid may reveal more skin than before.',
          'हां, और बुज़ुर्गों में यह आम है, क्योंकि उन्हीं सालों में पलक उठाने वाला टेंडन खिंचता है और त्वचा ढीली होती है। सिर्फ़ एक समस्या का ऑपरेशन करने पर दूसरी तब भी परेशान कर सकती है। जैसे, टोसिस वाली पलक से सिर्फ़ त्वचा हटाने पर पलक का रूप सुधर सकता है पर वह नीची रह सकती है, और टोसिस वाली पलक उठाने पर पहले से ज़्यादा त्वचा दिख सकती है।'
        ),
        t(
          'When both are present, the two procedures are often combined, usually through the same skin-crease incision in one sitting. Dr. Saumika Singh assesses each eyelid separately and explains which part of the problem each step corrects. Results vary, and the final shape settles over several weeks.',
          'जब दोनों हों तो अक्सर दोनों प्रक्रियाएं एक ही त्वचा-सिलवट वाले चीरे से एक ही बार में की जाती हैं। डॉ. सौमिका सिंह हर पलक की अलग से जांच करती हैं और बताती हैं कि कौन-सा कदम किस समस्या को ठीक करता है। परिणाम अलग-अलग होते हैं, और अंतिम आकार कई हफ़्तों में स्थिर होता है।'
        ),
      ],
    },
    {
      id: 'brow-droop',
      h2: t('Could a drooping eyebrow be the real problem?', 'क्या असली समस्या झुकी हुई भौंह हो सकती है?'),
      paras: [
        t(
          'Yes. With age the eyebrow can sink, pushing skin and fat down onto the upper lid. This brow ptosis can look like excess eyelid skin or even a drooping lid. It matters because removing eyelid skin alone when the brow is low can pull the brow lower and leave a heavy look. EyeWiki notes that careful attention to brow position is needed to separate true from apparent excess eyelid skin.',
          'हां। उम्र के साथ भौंह नीचे आ सकती है और त्वचा व चर्बी को ऊपरी पलक पर धकेल देती है। यह ब्रो टोसिस पलक की अतिरिक्त त्वचा या झुकी हुई पलक जैसी लग सकती है। यह इसलिए अहम है क्योंकि भौंह नीची होने पर सिर्फ़ पलक की त्वचा हटाने से भौंह और नीचे खिंच सकती है और भारीपन बना रह सकता है। EyeWiki के अनुसार सच्ची और दिखावटी अतिरिक्त पलक त्वचा में फ़र्क के लिए भौंह की स्थिति पर ध्यान देना ज़रूरी है।'
        ),
        t(
          'Brow lowering also comes from facial nerve weakness, previous injury or constant forehead strain from lifting a ptotic lid. If the brow is the main problem, a brow-lifting procedure may be discussed, sometimes together with eyelid surgery. Ask at your consultation whether a brow procedure is appropriate for you and how it would be planned.',
          'भौंह का नीचे आना चेहरे की नस की कमज़ोरी, पुरानी चोट, या टोसिस वाली पलक को उठाने के लिए माथे पर लगातार ज़ोर से भी हो सकता है। अगर मुख्य समस्या भौंह है, तो भौंह उठाने की प्रक्रिया पर चर्चा हो सकती है, कभी-कभी पलक सर्जरी के साथ। परामर्श में पूछें कि क्या भौंह की प्रक्रिया आपके लिए उचित है और उसकी योजना कैसे बनेगी।'
        ),
      ],
    },
    {
      id: 'self-observation',
      h2: t('Simple things you can notice at home (not a diagnosis)', 'घर पर देखी जा सकने वाली बातें (निदान नहीं)'),
      paras: [
        t(
          'These observations can help you describe the problem to the doctor. They cannot replace an examination, because ptosis, skin and brow often overlap.',
          'ये अवलोकन डॉक्टर को समस्या बताने में मदद कर सकते हैं। ये जांच का विकल्प नहीं हैं, क्योंकि टोसिस, त्वचा और भौंह अक्सर एक-दूसरे से मिलते हैं।'
        ),
      ],
      bullets: [
        t('Look straight into a mirror in good light, relaxed, with the forehead not tensed. Does the edge of the upper lid cut across the coloured part (iris) lower than usual, or does a fold of skin hide the edge?', 'अच्छी रोशनी में आईने में सीधे देखें, माथा ढीला रखें। क्या ऊपरी पलक का किनारा आइरिस (रंगीन हिस्से) को सामान्य से नीचे काटता है, या त्वचा की तह किनारे को छिपा रही है?'),
        t('Compare the two eyes. A lid edge that sits at different heights on each side points towards ptosis; a similar skin fold on both sides can be dermatochalasis', 'दोनों आंखों की तुलना करें। हर तरफ़ पलक का किनारा अलग ऊंचाई पर हो तो टोसिस की ओर इशारा है; दोनों तरफ़ एक जैसी त्वचा की तह डर्मेटोकैलेसिस हो सकती है'),
        t('Notice whether your eyebrows are working hard: raised, wrinkled forehead, or a tired ache above the brows by evening', 'देखें कि क्या भौंहें ज़्यादा काम कर रही हैं: ऊपर उठी हुई, माथे पर सलवटें, या शाम तक भौंहों के ऊपर थकान का दर्द'),
        t('Compare old photographs. Passport or ID photos help show whether the change is new and how fast it developed', 'पुरानी तस्वीरें मिलाएं। पासपोर्ट या ID की फ़ोटो से पता चलता है कि बदलाव नया है या नहीं और कितनी तेज़ी से आया'),
        t('Do not lift the skin and judge by eye alone: gently lifting a fold with a finger can hide a ptosis that would remain after skin surgery, which is why surgeons measure the lid edge separately', 'सिर्फ़ उंगली से तह उठाकर नतीजा न निकालें: तह उठाने पर टोसिस छिप सकता है जो त्वचा की सर्जरी के बाद भी बना रहेगा, इसीलिए सर्जन पलक के किनारे को अलग से नापते हैं'),
      ],
    },
    {
      id: 'how-surgeon-tells',
      h2: t('How does a surgeon tell ptosis from excess skin?', 'सर्जन टोसिस और अतिरिक्त त्वचा में फ़र्क कैसे करते हैं?'),
      paras: [
        t(
          'An oculoplastic surgeon relies on measurements rather than appearance. At your consultation Dr. Saumika Singh will usually:',
          'ओकुलोप्लास्टिक सर्जन दिखावट के बजाय नाप-जोख पर भरोसा करते हैं। परामर्श में डॉ. सौमिका सिंह आमतौर पर ये करती हैं:'
        ),
      ],
      steps: [
        t('Measure the margin–reflex distance (MRD1): how far the lid edge sits above the centre of the pupil, with any skin fold lifted out of the way', 'मार्जिन–रिफ़्लेक्स डिस्टेंस (MRD1) नापना: त्वचा की तह को हटाकर पलक का किनारा पुतली के केंद्र से कितना ऊपर है'),
        t('Measure levator function, which is how far the lid moves from down-gaze to up-gaze, to judge muscle strength', 'लेवेटर फ़ंक्शन नापना, यानी नीचे से ऊपर देखने में पलक कितनी चलती है, ताकि मांसपेशी की ताकत समझी जा सके'),
        t('Check the position of the eyebrow with and without the forehead muscle relaxed, and the position of the eyelid crease', 'भौंह की स्थिति (माथे की मांसपेशी ढीली रखकर और उसके बिना) और पलक की सिलवट की स्थिति देखना'),
        t('Examine the pupils, eye movements, eyelid closure and the surface of the eye, because an eye that is dry or does not close well needs a cautious plan', 'पुतलियां, आंख की गति, पलक का बंद होना और आंख की सतह देखना, क्योंकि सूखी या ठीक से बंद न होने वाली आंख में सावधानी से योजना बनानी पड़ती है'),
        t('Check the eyelid skin, fat pads and tear gland, and, where useful, test the field of vision and take photographs to document how much the lid or fold blocks sight', 'पलक की त्वचा, चर्बी की गद्दियां और आंसू ग्रंथि देखना, और जहां उपयोगी हो नज़र के दायरे की जांच और तस्वीरें लेना'),
        t('Look for signs of nerve or muscle disease, and arrange further tests or a specialist opinion if the pattern is not that of simple ageing', 'नस या मांसपेशी रोग के संकेत देखना, और पैटर्न सामान्य उम्र वाला न हो तो और जांच या विशेषज्ञ की राय की व्यवस्था'),
      ],
    },
    {
      id: 'which-surgery',
      h2: t('Ptosis surgery vs blepharoplasty: which one do I need?', 'टोसिस सर्जरी बनाम ब्लेफेरोप्लास्टी: मुझे कौन-सी चाहिए?'),
      paras: [
        t(
          'It depends on what the examination finds. This is a general outline of how the choice is usually approached.',
          'यह जांच के नतीजों पर निर्भर है। नीचे सामान्य रूप से चुनाव का तरीका बताया गया है।'
        ),
      ],
      subsections: [
        {
          h3: t('Mostly excess skin: blepharoplasty', 'ज़्यादातर अतिरिक्त त्वचा: ब्लेफेरोप्लास्टी'),
          paras: [
            t(
              'If the lid edge is at a normal height and the problem is a heavy skin fold, an upper-lid [blepharoplasty](/blepharoplasty-in-lucknow) removes the excess skin, sometimes with a little fat, through a cut hidden in the lid crease. If the heaviness is significant, it can also relieve the blocked upper vision.',
              'अगर पलक का किनारा सामान्य ऊंचाई पर है और समस्या त्वचा की भारी तह है, तो ऊपरी पलक की [ब्लेफेरोप्लास्टी](/blepharoplasty-in-lucknow) पलक की सिलवट में छिपे चीरे से अतिरिक्त त्वचा, कभी-कभी थोड़ी चर्बी के साथ, हटाती है। भारीपन ज़्यादा हो तो यह ऊपर की रुकी हुई नज़र में भी राहत दे सकती है।'
            ),
          ],
        },
        {
          h3: t('Mostly low lid margin: ptosis surgery', 'ज़्यादातर पलक का किनारा नीचे: टोसिस सर्जरी'),
          paras: [
            t(
              'If the lid edge is low, [ptosis surgery](/ptosis-surgery-in-lucknow) tightens or reattaches the lifting muscle, or uses a frontalis sling when the muscle is very weak. Removing skin alone will not raise a ptotic lid. If a nerve or muscle disease is the cause, that is treated first.',
              'अगर पलक का किनारा नीचा है, तो [टोसिस सर्जरी](/ptosis-surgery-in-lucknow) उठाने वाली मांसपेशी को कसती या दोबारा जोड़ती है, और मांसपेशी बहुत कमज़ोर हो तो फ्रंटालिस स्लिंग इस्तेमाल होती है। सिर्फ़ त्वचा हटाने से टोसिस वाली पलक नहीं उठती। अगर कारण नस या मांसपेशी रोग है, तो पहले उसका इलाज होता है।'
            ),
          ],
        },
        {
          h3: t('Both, or a low brow', 'दोनों, या नीची भौंह'),
          paras: [
            t(
              'When both are present, ptosis repair and blepharoplasty are often planned together. When a low brow is a big part of the picture, brow position is discussed first so that the eyelid operation does not make the brow worse. The plan is individual, and not every heavy-looking eyelid needs surgery.',
              'जब दोनों हों तो टोसिस रिपेयर और ब्लेफेरोप्लास्टी अक्सर साथ में योजनाबद्ध की जाती हैं। जब नीची भौंह बड़ा कारण हो, तो पहले भौंह की स्थिति पर चर्चा होती है ताकि पलक का ऑपरेशन भौंह को और न गिराए। योजना व्यक्ति के अनुसार बनती है, और हर भारी दिखती पलक को सर्जरी की ज़रूरत नहीं होती।'
            ),
          ],
        },
      ],
      bullets: [
        t('**Risks to discuss:** under- or over-correction, uneven lids or creases, dry eye or difficulty closing the eyes, bleeding, infection, scarring and the chance of a revision operation. Exact symmetry cannot be guaranteed', '**जोखिम जिन पर चर्चा करें:** कम या ज़्यादा सुधार, असमान पलकें या सिलवटें, सूखी आंख या आंख बंद करने में कठिनाई, खून बहना, संक्रमण, निशान, और दोबारा सर्जरी की संभावना। बिल्कुल एक जैसी सममिति की गारंटी नहीं दी जा सकती'),
        t('**When surgery may not be advised:** mild changes that do not trouble you, a very dry eye, an unstable nerve or muscle condition, or unrealistic expectations', '**कब सर्जरी की सलाह नहीं दी जा सकती:** हल्के बदलाव जो परेशान नहीं करते, बहुत सूखी आंख, अस्थिर नस या मांसपेशी रोग, या अवास्तविक अपेक्षाएं'),
      ],
    },
    {
      id: 'insurance-functional',
      h2: t('Is it functional or cosmetic, and does that affect insurance?', 'क्या यह फ़ंक्शनल है या कॉस्मेटिक, और क्या बीमा पर असर पड़ता है?'),
      paras: [
        t(
          'Surgeons and insurers often separate a **functional** problem, where the lid or skin fold blocks vision or causes discomfort, from a purely **cosmetic** one, where only appearance is the concern. Functional problems may be assessed differently from cosmetic ones for insurance, but coverage depends on the policy terms and pre-authorisation, so check with your insurer or TPA and the hospital desk before surgery. Documentation such as photographs and a field-of-vision test can show how much the lid or fold affects sight.',
          'सर्जन और बीमा कंपनियां अक्सर **फ़ंक्शनल** समस्या, जिसमें पलक या त्वचा की तह नज़र रोकती है या तकलीफ़ देती है, को पूरी तरह **कॉस्मेटिक** समस्या से अलग मानती हैं, जिसमें सिर्फ़ दिखावट की चिंता है। बीमा में फ़ंक्शनल समस्याओं को कॉस्मेटिक से अलग तरह से परखा जा सकता है, पर कवरेज पॉलिसी की शर्तों और प्री-ऑथराइज़ेशन पर निर्भर है, इसलिए सर्जरी से पहले अपनी बीमा कंपनी/TPA और अस्पताल डेस्क से पुष्टि करें। तस्वीरें और नज़र के दायरे की जांच जैसे दस्तावेज़ दिखा सकते हैं कि पलक या तह नज़र को कितना प्रभावित करती है।'
        ),
        t(
          'For the factors that influence the price of eyelid surgery, see [what affects oculoplasty surgery cost](/oculoplasty-surgery-cost-in-lucknow).',
          'पलक सर्जरी के खर्च को प्रभावित करने वाले कारकों के लिए [ओकुलोप्लास्टी सर्जरी का खर्च किन बातों पर निर्भर](/oculoplasty-surgery-cost-in-lucknow) देखें।'
        ),
      ],
    },
  ],

  whyDrSaumika: [
    t('Fellowship-trained in Oculoplasty & Ocular Oncology (Dr. Shroff’s Charity Eye Hospital, New Delhi, 2022) after MS in Ophthalmology', 'नेत्र विज्ञान में MS के बाद ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी में फ़ेलोशिप-प्रशिक्षित (डॉ. श्रॉफ़्स चैरिटी आई हॉस्पिटल, नई दिल्ली, 2022)'),
    t('Her practice includes both ptosis surgery (levator surgery and frontalis sling) and upper and lower blepharoplasty, so the choice is made from the examination, not from one operation', 'उनके कार्य में टोसिस सर्जरी (लेवेटर सर्जरी और फ्रंटालिस स्लिंग) और ऊपरी व निचली ब्लेफेरोप्लास्टी दोनों शामिल हैं, इसलिए चुनाव जांच से होता है, किसी एक ऑपरेशन से नहीं'),
    t('As an eye surgeon, she checks vision, the pupils, eyelid closure and the eye surface before planning any eyelid lift or skin removal', 'नेत्र सर्जन होने के नाते वे पलक उठाने या त्वचा हटाने की योजना से पहले नज़र, पुतलियां, पलक का बंद होना और आंख की सतह जांचती हैं'),
    t('Registered with the Uttar Pradesh Medical Council (Reg. No. 137106); consults at Alyantra Medicity Superspeciality Hospital, Gomti Nagar', 'उत्तर प्रदेश मेडिकल काउंसिल में पंजीकृत (पंजीकरण सं. 137106); अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श'),
  ],

  faqs: [
    {
      q: t('How do I know if I have ptosis or hooded eyes?', 'मुझे टोसिस है या hooded eyes, कैसे पता चलेगा?'),
      a: t('In ptosis the edge of the upper lid sits low, often covering part of the coloured iris or the pupil. In hooded eyes the edge is normal but a skin fold hangs over it. The two overlap, so only a measured examination can tell, and you may have both.', 'टोसिस में ऊपरी पलक का किनारा नीचे रहता है और अक्सर आइरिस या पुतली का हिस्सा ढकता है। hooded eyes में किनारा सामान्य होता है पर त्वचा की तह उसके ऊपर लटकती है। दोनों आपस में मिल जाते हैं, इसलिए नाप-जोख वाली जांच से ही पता चलता है, और दोनों भी हो सकते हैं।'),
    },
    {
      q: t('Will blepharoplasty fix a droopy eyelid?', 'क्या ब्लेफेरोप्लास्टी से झुकी हुई पलक ठीक हो जाती है?'),
      a: t('Only if the problem is extra skin. Blepharoplasty removes skin and sometimes fat but does not tighten the lifting muscle, so it will not raise a lid whose edge is truly low. If ptosis is present, ptosis repair, with or without blepharoplasty, is considered.', 'सिर्फ़ तब जब समस्या अतिरिक्त त्वचा की हो। ब्लेफेरोप्लास्टी त्वचा और कभी-कभी चर्बी हटाती है, पर उठाने वाली मांसपेशी को नहीं कसती, इसलिए जिस पलक का किनारा सचमुच नीचा है उसे नहीं उठाएगी। टोसिस हो तो ब्लेफेरोप्लास्टी के साथ या बिना, टोसिस रिपेयर पर विचार होता है।'),
    },
    {
      q: t('Can ptosis and dermatochalasis be corrected in the same surgery?', 'क्या टोसिस और डर्मेटोकैलेसिस एक ही सर्जरी में ठीक हो सकते हैं?'),
      a: t('Often yes. When both are present, they are commonly combined through the same eyelid-crease incision in one sitting. Whether that suits you depends on the examination, your overall health and the state of your eye surface, which your surgeon will review with you.', 'अक्सर हां। दोनों हों तो आमतौर पर एक ही पलक-सिलवट वाले चीरे से एक ही बार में दोनों किए जाते हैं। यह आपके लिए उचित है या नहीं, यह जांच, आपके सामान्य स्वास्थ्य और आंख की सतह की स्थिति पर निर्भर है, जिसकी समीक्षा सर्जन आपके साथ करेंगे।'),
    },
    {
      q: t('What is brow ptosis and how is it different?', 'ब्रो टोसिस क्या है और यह कैसे अलग है?'),
      a: t('Brow ptosis is a lowered eyebrow, which pushes skin onto the upper lid so that the eye looks hooded or droopy even when the lid margin and skin are fairly normal. It needs a brow-focused plan, and treating only the eyelid may not help.', 'ब्रो टोसिस यानी नीची भौंह, जो त्वचा को ऊपरी पलक पर धकेलती है जिससे पलक का किनारा और त्वचा लगभग सामान्य होने पर भी आंख hooded या झुकी लगती है। इसके लिए भौंह-केंद्रित योजना चाहिए, और सिर्फ़ पलक का इलाज मदद नहीं भी कर सकता।'),
    },
    {
      q: t('Is surgery for a droopy eyelid covered by insurance?', 'क्या झुकी पलक की सर्जरी बीमा में कवर होती है?'),
      a: t('Surgery for a functional problem, where the lid or skin blocks vision, may be treated differently from cosmetic surgery, but coverage depends on your policy and pre-authorisation. Ask your insurer or TPA and the hospital desk in advance, and keep photographs and test reports ready.', 'फ़ंक्शनल समस्या की सर्जरी, जिसमें पलक या त्वचा नज़र रोकती है, को कॉस्मेटिक सर्जरी से अलग तरह से देखा जा सकता है, पर कवरेज आपकी पॉलिसी और प्री-ऑथराइज़ेशन पर निर्भर है। पहले से बीमा कंपनी/TPA और अस्पताल डेस्क से पूछें, और तस्वीरें व जांच रिपोर्ट तैयार रखें।'),
    },
    {
      q: t('Are exercises or creams able to fix drooping eyelids?', 'क्या व्यायाम या क्रीम से झुकी पलकें ठीक हो सकती हैं?'),
      a: t('No. Exercises and creams do not repair a stretched tendon or remove excess skin. Sun protection and good eye care can help skin health, but when a droop or skin fold affects vision, an examination to consider surgery is the realistic route.', 'नहीं। व्यायाम और क्रीम खिंचे हुए टेंडन को ठीक नहीं करते और अतिरिक्त त्वचा नहीं हटाते। धूप से बचाव और आंखों की अच्छी देखभाल त्वचा के स्वास्थ्य में मदद कर सकती है, पर जब झुकाव या त्वचा की तह नज़र को प्रभावित करे, तो सर्जरी पर विचार के लिए जांच ही वास्तविक रास्ता है।'),
    },
    {
      q: t('When is a droopy eyelid an emergency instead of extra skin?', 'कब झुकी पलक अतिरिक्त त्वचा नहीं बल्कि इमरजेंसी है?'),
      a: t('A droop that appears suddenly, especially with double vision, a severe headache, unequal pupils, facial weakness, slurred speech or trouble swallowing or breathing, is not excess skin and needs emergency care the same day. Extra skin develops gradually over years.', 'जो झुकाव अचानक आए, खासकर दोहरा दिखने, तेज़ सिरदर्द, असमान पुतलियों, चेहरे में कमज़ोरी, लड़खड़ाती आवाज़ या निगलने/सांस लेने में तकलीफ़ के साथ, वह अतिरिक्त त्वचा नहीं है और उसी दिन इमरजेंसी इलाज चाहिए। अतिरिक्त त्वचा सालों में धीरे-धीरे बनती है।'),
    },
  ],

  cta: {
    title: t('Find out whether it is ptosis, extra skin or both', 'पता करें कि यह टोसिस है, अतिरिक्त त्वचा या दोनों'),
    text: t('Bring old photographs (passport or ID pictures are ideal), your eye reports and a list of medicines. A short examination with measurements usually settles which operation, if any, is appropriate.', 'पुरानी तस्वीरें (पासपोर्ट या ID की फ़ोटो उपयोगी रहती है), आंखों की रिपोर्ट और दवाओं की सूची साथ लाएं। नाप-जोख वाली छोटी जांच से आमतौर पर तय हो जाता है कि कौन-सा ऑपरेशन, अगर कोई, उचित है।'),
  },

  related: [
    { path: '/ptosis-surgery-in-lucknow', label: t('Ptosis surgery in Lucknow', 'लखनऊ में टोसिस सर्जरी') },
    { path: '/blepharoplasty-in-lucknow', label: t('Blepharoplasty in Lucknow (excess eyelid skin)', 'लखनऊ में ब्लेफेरोप्लास्टी (पलक की अतिरिक्त त्वचा)') },
    { path: '/drooping-eyelid-causes-and-treatment', label: t('Drooping eyelid: causes and treatment', 'झुकी हुई पलक: कारण और इलाज') },
    { path: '/oculoplasty-surgery-cost-in-lucknow', label: t('What affects oculoplasty surgery cost', 'ओकुलोप्लास्टी सर्जरी का खर्च किन बातों पर निर्भर') },
    { path: '/oculoplasty-consultation-what-to-expect', label: t('What to expect at an oculoplasty consultation', 'ओकुलोप्लास्टी परामर्श में क्या उम्मीद करें') },
    { path: '/services/eyelid-disorders-eyelid-surgery', label: t('Eyelid disorders and eyelid surgery', 'पलक के रोग और पलक सर्जरी') },
  ],

  references: [
    { label: 'Dermatochalasis', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Dermatochalasis' },
    { label: 'Blepharoptosis', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Blepharoptosis' },
    { label: 'What is ptosis?', source: 'American Academy of Ophthalmology (EyeSmart)', url: 'https://www.aao.org/eye-health/diseases/what-is-ptosis' },
    { label: 'Ptosis', source: 'Moorfields Eye Hospital NHS Foundation Trust', url: 'https://www.moorfields.nhs.uk/condition/ptosis' },
  ],

  schema: {
    type: 'MedicalWebPage',
    name: 'Ptosis vs dermatochalasis',
    alternateName: ['Ptosis vs excess eyelid skin', 'Drooping eyelid vs hooded eyes'],
  },

  reviewerNotes: [
    'Confirm she is happy with the statement that ptosis repair and blepharoplasty are often combined through the same crease incision in one sitting.',
    'Brow lifting is NOT in the confirmed-services list; the page says it may be discussed and tells readers to ask who should perform it. Confirm or adjust that wording (and whether she does or refers brow procedures).',
    'Confirm the self-observation tips, especially the caution that lifting the skin fold with a finger can mask ptosis, and the measurement steps (MRD1, levator function, brow position, visual field) match her routine.',
    'Confirm the "when surgery may not be advised" list and the risk list for combined surgery.',
    'Insurance wording is generic (functional vs cosmetic may be assessed differently; check insurer/TPA); no insurer named. Confirm the mention of photographs and visual-field documentation is acceptable.',
    'Reference URLs verified by fetch: EyeWiki Dermatochalasis, EyeWiki Blepharoptosis, AAO what-is-ptosis, Moorfields ptosis. The EyeWiki statement about brow position is paraphrased from the Dermatochalasis page. AAO blepharoplasty page and EyeWiki Brow Ptosis URLs could not be verified (404/blocked) and were not used.',
  ],
};

export default guide;
