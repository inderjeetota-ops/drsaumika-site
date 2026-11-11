import type { Guide, L } from '../types';

const t = (en: string, hi: string): L => ({ en, hi });

const guide: Guide = {
  slug: 'botox-for-blepharospasm',
  primaryKeyword: 'botox for blepharospasm',
  secondaryKeywords: ['blepharospasm treatment', 'hemifacial spasm treatment', 'eyelid twitching vs blepharospasm', 'involuntary blinking', 'botulinum toxin for eyelid spasm', 'benign essential blepharospasm', 'botox for eyelid twitching', 'eye twitching that won’t stop'],
  hindiKeywords: ['आंख फड़कना', 'ब्लेफेरोस्पाज़्म', 'पलकें बार-बार झपकना', 'चेहरे का एक तरफ़ फड़कना', 'आंख फड़कने का इलाज', 'बोटॉक्स आंख फड़कना', 'हेमीफेशियल स्पाज़्म'],

  metaTitle: t(
    'Botox for Blepharospasm – Eyelid Spasm | Dr Saumika Singh',
    'ब्लेफेरोस्पाज़्म के लिए बोटॉक्स – पलकें झपकना | डॉ. सौमिका सिंह'
  ),
  metaDescription: t(
    'Botox for blepharospasm in Lucknow: how it differs from harmless eyelid twitching or hemifacial spasm, how it works, side effects and when to get checked.',
    'ब्लेफेरोस्पाज़्म के लिए बोटॉक्स, लखनऊ – साधारण आंख फड़कने और चेहरे के एक तरफ़ फड़कने से फ़र्क, इंजेक्शन कैसे काम करते हैं, साइड इफ़ेक्ट और कब जांच करवाएं।'
  ),
  h1: t('Botox for Blepharospasm – Involuntary Blinking and Eyelid Spasm', 'ब्लेफेरोस्पाज़्म के लिए बोटॉक्स – पलकें बार-बार झपकना और आंख फड़कना'),
  lead: t(
    'Botox for blepharospasm is a series of tiny injections that relax the muscles around the eyes, so that involuntary blinking and forced eyelid closure ease for a few months at a time, and it is the usual first-line treatment for blepharospasm and for hemifacial spasm. Most eyelid twitching is a harmless, short-lived flutter that never needs injections, so the first step is to work out which problem you have. Dr. Saumika Singh, an oculoplasty surgeon at Alyantra Medicity Superspeciality Hospital, Gomti Nagar, Lucknow, offers medical Botox for blepharospasm and hemifacial spasm after an eye and eyelid examination.',
    'ब्लेफेरोस्पाज़्म (blepharospasm) के लिए बोटॉक्स आंख के आसपास की मांसपेशियों में लगाए जाने वाले बहुत छोटे इंजेक्शन हैं, जिनसे बार-बार अपने आप पलकें झपकना और पलकों का ज़ोर से बंद हो जाना कुछ महीनों के लिए कम हो जाता है; ब्लेफेरोस्पाज़्म और चेहरे के एक तरफ़ फड़कने (हेमीफेशियल स्पाज़्म) में यही आमतौर पर पहला इलाज है। ज़्यादातर आंख फड़कना हानिरहित और थोड़े समय का होता है और उसमें इंजेक्शन की ज़रूरत नहीं पड़ती, इसलिए सबसे पहले यह समझना ज़रूरी है कि आपको कौन-सी समस्या है। लखनऊ के गोमती नगर में अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल की ओकुलोप्लास्टी सर्जन डॉ. सौमिका सिंह आंख और पलक की जांच के बाद ब्लेफेरोस्पाज़्म और हेमीफेशियल स्पाज़्म के लिए मेडिकल बोटॉक्स करती हैं।'
  ),
  atAGlance: [
    t('**What it treats:** blepharospasm (both eyelids) and hemifacial spasm (one side of the face)', '**किसके लिए:** ब्लेफेरोस्पाज़्म (दोनों पलकें) और हेमीफेशियल स्पाज़्म (चेहरे का एक तरफ़)'),
    t('**Not for:** ordinary eyelid twitching, which usually settles by itself', '**किसके लिए नहीं:** साधारण आंख फड़कना, जो आमतौर पर अपने आप ठीक हो जाता है'),
    t('**Treatment:** small injections of botulinum toxin around the eye; a short outpatient visit', '**इलाज:** आंख के आसपास बोटुलिनम टॉक्सिन के छोटे इंजेक्शन; आउटपेशेंट में थोड़े समय की विज़िट'),
    t('**Onset and duration:** usually works over several days and wears off over months, so it is repeated', '**असर शुरू होना और टिकना:** आमतौर पर कुछ दिनों में असर आता है और महीनों में उतर जाता है, इसलिए दोहराना पड़ता है'),
    t('**Main side effects:** temporary eyelid droop, dry or watery eye, rarely double vision', '**मुख्य साइड इफ़ेक्ट:** अस्थायी पलक झुकना, आंख सूखना या पानी आना, कभी-कभार दोहरा दिखना'),
    t('**Where:** Alyantra Medicity Superspeciality Hospital, Gomti Nagar, Lucknow', '**कहां:** अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर, लखनऊ'),
  ],

  sections: [
    {
      id: 'what-is-blepharospasm',
      h2: t('What is blepharospasm?', 'ब्लेफेरोस्पाज़्म क्या है?'),
      paras: [
        t(
          'Blepharospasm is a condition in which the muscles that close the eyelids contract repeatedly and involuntarily. The most common form, benign essential blepharospasm, usually begins in adult life with more frequent blinking, a feeling of grit or light sensitivity, and then spells in which both eyes squeeze shut for seconds or longer. The word “benign” means it does not damage the eye or threaten life, but it can be very disabling: in bad spells the eyes stay closed, and reading, driving, walking in a crowd or using a phone becomes difficult.',
          'ब्लेफेरोस्पाज़्म (blepharospasm) में पलकों को बंद करने वाली मांसपेशियां बार-बार और अपने आप सिकुड़ती हैं। इसका सबसे आम रूप, बिनाइन एसेंशियल ब्लेफेरोस्पाज़्म, आमतौर पर वयस्क उम्र में शुरू होता है — पहले पलकें ज़्यादा झपकती हैं, आंख में किरकिरी या रोशनी से परेशानी महसूस होती है, फिर ऐसे दौरे आते हैं जिनमें दोनों आंखें कुछ सेकंड या उससे ज़्यादा देर के लिए ज़ोर से बंद हो जाती हैं। “बिनाइन” का मतलब है कि इससे आंख को नुकसान या जान को ख़तरा नहीं होता, पर यह रोज़मर्रा के काम बहुत मुश्किल कर सकता है: ख़राब दौरों में आंखें बंद रहती हैं और पढ़ना, गाड़ी चलाना, भीड़ में चलना या फ़ोन देखना कठिन हो जाता है।'
        ),
        t(
          'The exact cause is not fully understood. It is thought to involve the brain circuits that control movement rather than a problem in the eyelid itself, which is why the eyes usually look normal on examination. It tends to appear gradually, can fluctuate, and often eases during sleep and while concentrating on a task.',
          'सही कारण पूरी तरह समझा नहीं गया है। माना जाता है कि समस्या पलक में नहीं बल्कि हरकत को नियंत्रित करने वाले दिमाग़ के हिस्सों में होती है, इसीलिए जांच में आंखें आमतौर पर सामान्य दिखती हैं। यह धीरे-धीरे शुरू होता है, कम-ज़्यादा होता रहता है और नींद में या किसी काम पर ध्यान लगाने पर अक्सर कम हो जाता है।'
        ),
      ],
    },
    {
      id: 'twitch-vs-blepharospasm',
      h2: t('Eyelid twitching vs blepharospasm vs hemifacial spasm: what is the difference?', 'आंख फड़कना, ब्लेफेरोस्पाज़्म और चेहरे का एक तरफ़ फड़कना: फ़र्क क्या है?'),
      paras: [
        t(
          'These three problems are often confused, but they differ in who gets them, how long they last and what should be done. The table is a simplified guide; only an examination can tell them apart.',
          'इन तीनों को अक्सर एक ही समझ लिया जाता है, पर इनमें फ़र्क है — किसे होते हैं, कितने समय रहते हैं और क्या करना चाहिए। नीचे की तालिका सरल मार्गदर्शन है; अंतर सिर्फ़ जांच से ही तय हो सकता है।'
        ),
      ],
      table: {
        caption: t('Simplified comparison for patients; your doctor will confirm the diagnosis after examination.', 'मरीज़ों के लिए सरल तुलना; निदान की पुष्टि जांच के बाद डॉक्टर करेंगे।'),
        head: [t('Feature', 'विशेषता'), t('Eyelid twitch (myokymia)', 'आंख फड़कना (मायोकाइमिया)'), t('Blepharospasm', 'ब्लेफेरोस्पाज़्म'), t('Hemifacial spasm', 'हेमीफेशियल स्पाज़्म')],
        rows: [
          [t('What you feel', 'क्या महसूस होता है'), t('A fine flutter in one eyelid, often the lower lid', 'एक पलक में हल्की फड़कन, अक्सर निचली पलक में'), t('Frequent blinking that builds to forced, sustained eyelid closure', 'बार-बार झपकना जो बढ़कर ज़ोर से देर तक पलकें बंद होने तक पहुंचता है'), t('Jerks that start around one eye and spread to the cheek and mouth on the same side', 'एक आंख के आसपास शुरू होकर उसी तरफ़ के गाल और मुंह तक फैलने वाले झटके')],
          [t('Which side', 'कौन-सी तरफ़'), t('Usually one eye, can switch sides', 'आमतौर पर एक आंख, तरफ़ बदल सकती है'), t('Both eyes, though it may start in one', 'दोनों आंखें, हालांकि शुरुआत एक से हो सकती है'), t('One side of the face only', 'चेहरे की सिर्फ़ एक तरफ़')],
          [t('How long it lasts', 'कितने समय रहता है'), t('Minutes to a few days or weeks, then goes', 'कुछ मिनट से कुछ दिन या हफ़्ते, फिर चला जाता है'), t('Persistent and tends to be long-term', 'लगातार रहता है और अक्सर लंबे समय चलता है'), t('Persistent and may slowly increase', 'लगातार रहता है और धीरे-धीरे बढ़ सकता है')],
          [t('Does it affect vision or daily tasks', 'क्या नज़र या रोज़ के काम प्रभावित होते हैं'), t('Rarely; it is irritating, not disabling', 'बहुत कम; परेशान करता है, पर काम नहीं रोकता'), t('Yes, it can interfere with reading, driving and walking', 'हां, पढ़ने, गाड़ी चलाने और चलने में बाधा बन सकता है'), t('Can cause the eye to squeeze shut on that side and embarrassment in public', 'उस तरफ़ की आंख बंद करा सकता है और लोगों के बीच असहज बना सकता है')],
          [t('Usual approach', 'आमतौर पर क्या किया जाता है'), t('Rest, less caffeine, lubricating drops, reassurance', 'आराम, कम कैफ़ीन, चिकनाई वाली ड्रॉप्स, भरोसा'), t('Examination, then botulinum toxin injections as first-line treatment', 'जांच, फिर पहले इलाज के तौर पर बोटुलिनम टॉक्सिन इंजेक्शन'), t('Examination, usually an MRI scan, then botulinum toxin injections; other options exist', 'जांच, आमतौर पर MRI स्कैन, फिर बोटुलिनम टॉक्सिन इंजेक्शन; दूसरे विकल्प भी हैं')],
        ],
      },
    },
    {
      id: 'triggers',
      h2: t('Why does my eye keep twitching? Common triggers', 'आंख क्यों फड़कती रहती है? आम कारण और ट्रिगर'),
      paras: [
        t(
          'A passing eyelid twitch is very common and is not a sign of serious disease. Typical triggers are tiredness and poor sleep, stress, too much caffeine or alcohol, long hours on screens, eye strain from uncorrected glasses power, and dry or irritated eyes. Correcting these often settles it. In blepharospasm, similar factors do not cause the condition but can make the spasms worse:',
          'कभी-कभार पलक का फड़कना बहुत आम है और किसी गंभीर बीमारी का संकेत नहीं है। आम कारण हैं थकान और कम नींद, तनाव, ज़्यादा कैफ़ीन या शराब, घंटों स्क्रीन देखना, चश्मे के नंबर की कमी से आंखों पर ज़ोर, और सूखी या चिढ़ी हुई आंखें। इन्हें ठीक करने से अक्सर फड़कना बंद हो जाता है। ब्लेफेरोस्पाज़्म में ऐसी चीज़ें बीमारी का कारण नहीं होतीं, पर दौरों को बढ़ा सकती हैं:'
        ),
      ],
      bullets: [
        t('Bright light, sunlight, glare or driving at night', 'तेज़ रोशनी, धूप, चकाचौंध या रात में गाड़ी चलाना'),
        t('Stress, anxiety, fatigue or lack of sleep', 'तनाव, चिंता, थकान या नींद की कमी'),
        t('Wind, dust, smoke or dry air that irritates the eye surface', 'हवा, धूल, धुआं या सूखी हवा जिससे आंख की सतह में जलन हो'),
        t('Dry eye, blepharitis or other surface problems, which are worth treating in their own right', 'ड्राई आई, ब्लेफेराइटिस या आंख की सतह की दूसरी समस्याएं, जिनका इलाज अपने आप में ज़रूरी है'),
        t('Some medicines and neurological conditions can cause or mimic eyelid spasms, so share your full medicine list with the doctor', 'कुछ दवाएं और नस संबंधी बीमारियां पलकों में ऐंठन पैदा कर सकती हैं या उसकी नकल कर सकती हैं, इसलिए डॉक्टर को अपनी सभी दवाओं की सूची बताएं'),
      ],
    },
    {
      id: 'when-to-see-a-doctor',
      h2: t('When should eyelid twitching be checked by a doctor?', 'आंख फड़कने की जांच डॉक्टर से कब करवानी चाहिए?'),
      paras: [
        t(
          'Book an eye examination if the twitching lasts for more than a few weeks, keeps coming back, involves both eyes, makes the eyelids close or the eye hard to open, or starts to interfere with reading, work or driving. Also get checked if the spasm spreads to the cheek or mouth, because **hemifacial spasm usually needs an MRI scan of the brain** to look for a blood vessel or other cause pressing on the facial nerve, and the scan and any neurology referral are arranged alongside treatment. Twitching that comes with other nerve symptoms, such as a drooping eyelid, weakness or abnormal movements elsewhere, also needs a medical review, which may include a neurologist. Dr. Saumika Singh first examines the eyes, eyelids and tear film, because dry eye and eyelid inflammation can look similar or make spasms worse.',
          'अगर फड़कना कुछ हफ़्तों से ज़्यादा चले, बार-बार लौटे, दोनों आंखों में हो, पलकें बंद हो जाएं या आंख खोलना मुश्किल लगे, या पढ़ने, काम या गाड़ी चलाने में दिक्कत होने लगे, तो आंखों की जांच करवाएं। अगर फड़कन गाल या मुंह तक फैले तब भी जांच करवाएं, क्योंकि **हेमीफेशियल स्पाज़्म में आमतौर पर दिमाग़ का MRI स्कैन ज़रूरी होता है**, जिससे देखा जाता है कि कोई रक्त नली या दूसरा कारण चेहरे की नस पर दबाव तो नहीं डाल रहा; स्कैन और ज़रूरत हो तो न्यूरोलॉजिस्ट को रेफ़रल इलाज के साथ ही तय किया जाता है। अगर फड़कन के साथ दूसरे नस संबंधी लक्षण हों — जैसे पलक झुकना, कमज़ोरी या शरीर में कहीं और अजीब हरकतें — तो भी चिकित्सकीय जांच ज़रूरी है, जिसमें न्यूरोलॉजिस्ट शामिल हो सकते हैं। डॉ. सौमिका सिंह सबसे पहले आंख, पलकों और आंसू की परत की जांच करती हैं, क्योंकि ड्राई आई और पलक की सूजन भी ऐसे ही लग सकती है या ऐंठन बढ़ा सकती है।'
        ),
      ],
      callout: {
        tone: 'urgent',
        title: t('Get same-day medical help for these symptoms', 'इन लक्षणों में उसी दिन चिकित्सकीय मदद लें'),
        text: t(
          'Go to an emergency department or an eye casualty the same day if eyelid twitching or spasm comes with **sudden** weakness, drooping or numbness of one side of the face, arm or leg, slurred speech, double vision, a severe headache, or a sudden change in vision. Seek same-day eye care too if a twitching eye is also red, painful, swollen or discharging, or if you cannot open the eye at all. These are not features of simple eyelid twitching or typical blepharospasm and need urgent assessment.',
          'अगर पलक फड़कने या ऐंठन के साथ चेहरे, हाथ या पैर के एक तरफ़ **अचानक** कमज़ोरी, झुकाव या सुन्नपन, बोलने में लड़खड़ाहट, दोहरा दिखना, तेज़ सिरदर्द या नज़र में अचानक बदलाव हो, तो उसी दिन इमरजेंसी विभाग या आई कैज़ुअल्टी में जाएं। अगर फड़कती आंख लाल, दर्दभरी, सूजी हुई हो या उसमें से स्राव आ रहा हो, या आप आंख बिल्कुल खोल न पा रहे हों, तब भी उसी दिन आंखों की जांच करवाएं। ये साधारण आंख फड़कने या सामान्य ब्लेफेरोस्पाज़्म के लक्षण नहीं हैं और इनकी तुरंत जांच ज़रूरी है।'
        ),
      },
    },
    {
      id: 'how-botox-works',
      h2: t('How does Botox work for blepharospasm?', 'ब्लेफेरोस्पाज़्म में बोटॉक्स कैसे काम करता है?'),
      paras: [
        t(
          'Botox is a purified form of botulinum toxin. When a very small amount is placed into a muscle, it blocks the chemical signal that tells the muscle to contract, so the muscle becomes weaker for a few months. In blepharospasm and hemifacial spasm, the target is the thin muscle that circles the eye (orbicularis oculi) and sometimes nearby facial muscles. Weakening them reduces the strength and frequency of the spasms. It does not cure the underlying cause, which is why the effect wears off and treatment is repeated.',
          'बोटॉक्स बोटुलिनम टॉक्सिन का शुद्ध किया हुआ रूप है। जब इसकी बहुत थोड़ी मात्रा किसी मांसपेशी में पहुंचती है, तो यह उस रासायनिक संकेत को रोक देता है जो मांसपेशी को सिकुड़ने को कहता है, जिससे मांसपेशी कुछ महीनों के लिए कमज़ोर हो जाती है। ब्लेफेरोस्पाज़्म और हेमीफेशियल स्पाज़्म में निशाना आंख को घेरने वाली पतली मांसपेशी (ऑर्बिकुलेरिस ऑकुलाई) और कभी-कभी चेहरे की आसपास की मांसपेशियां होती हैं। इन्हें कमज़ोर करने से ऐंठन की ताकत और बार-बार आना कम होता है। यह मूल कारण को ठीक नहीं करता, इसीलिए असर उतर जाता है और इलाज दोहराना पड़ता है।'
        ),
        t(
          'This is medical use of Botox for a movement disorder, and it is different from cosmetic wrinkle treatment, although the same medicine is used. The doses and injection points are individually planned by the treating doctor. For the cosmetic side, see [Botox and periocular aesthetics](/services/botox-eyelid-cosmetic-surgery-periocular-aesthetics).',
          'यह एक हरकत संबंधी बीमारी के लिए बोटॉक्स का चिकित्सकीय उपयोग है और झुर्रियों के सौंदर्य उपचार से अलग है, हालांकि दवा वही है। मात्रा और इंजेक्शन की जगहें इलाज करने वाले डॉक्टर हर मरीज़ के हिसाब से तय करते हैं। सौंदर्य वाले पहलू के लिए [बोटॉक्स और आंख के आसपास की सौंदर्य सेवाएं](/services/botox-eyelid-cosmetic-surgery-periocular-aesthetics) पेज देखें।'
        ),
      ],
    },
    {
      id: 'injection-visit',
      h2: t('What happens during a Botox visit for eyelid spasm?', 'पलक की ऐंठन के लिए बोटॉक्स विज़िट में क्या होता है?'),
      steps: [
        t('Your history and examination come first: how the spasms behave, what triggers them, medicines you take, any past nerve or muscle illness, and the state of your eye surface and tear film', 'पहले इतिहास और जांच: ऐंठन कैसी है, किससे बढ़ती है, आप कौन-सी दवाएं लेते हैं, पहले कोई नस या मांसपेशी की बीमारी रही या नहीं, और आंख की सतह व आंसू की परत की हालत'),
        t('If the pattern suggests hemifacial spasm or anything unusual, a brain scan or neurology opinion is advised, and treatment is planned around the result', 'अगर तस्वीर हेमीफेशियल स्पाज़्म या किसी असामान्य बात की ओर इशारा करे, तो दिमाग़ का स्कैन या न्यूरोलॉजिस्ट की राय सुझाई जाती है और इलाज उसके नतीजे के हिसाब से तय होता है'),
        t('The risks, benefits and the possibility of a temporary droop are explained and you give consent', 'जोखिम, फ़ायदे और अस्थायी पलक झुकने की संभावना समझाई जाती है और आप सहमति देते हैं'),
        t('The skin around the eye is cleaned, and a number of very small injections are placed into the muscle around the upper and lower eyelid and, for hemifacial spasm, sometimes the same side of the face', 'आंख के आसपास की त्वचा साफ़ की जाती है और ऊपरी व निचली पलक के आसपास की मांसपेशी में, और हेमीफेशियल स्पाज़्म में कभी-कभी चेहरे की उसी तरफ़ भी, कई बहुत छोटे इंजेक्शन लगाए जाते हैं'),
        t('The injections take only a few minutes and usually feel like brief pinpricks; you can generally go home soon afterwards, and small bruises can appear', 'इंजेक्शन में कुछ ही मिनट लगते हैं और आमतौर पर हल्की चुभन जैसे लगते हैं; आमतौर पर आप जल्द घर जा सकते हैं, और छोटे नील पड़ सकते हैं'),
        t('A follow-up is planned to check the effect and adjust the next round, because the right pattern of injections differs from person to person', 'असर देखने और अगले चक्र में बदलाव करने के लिए फ़ॉलो-अप तय होता है, क्योंकि इंजेक्शन का सही पैटर्न हर व्यक्ति में अलग होता है'),
      ],
    },
    {
      id: 'results-and-repeat',
      h2: t('How long does Botox take to work, and how long does it last?', 'बोटॉक्स का असर कब शुरू होता है और कितने समय चलता है?'),
      paras: [
        t(
          'These are typical patterns, not promises. Response and duration vary between people and between treatment sessions.',
          'ये आम पैटर्न हैं, गारंटी नहीं। असर और अवधि हर व्यक्ति में और हर बार अलग हो सकती है।'
        ),
      ],
      table: {
        head: [t('Time', 'समय'), t('What usually happens', 'आमतौर पर क्या होता है')],
        rows: [
          [t('First few days', 'पहले कुछ दिन'), t('Little change at first; the effect builds up gradually, and small bruises fade', 'शुरू में कम बदलाव; असर धीरे-धीरे बनता है और छोटे नील ठीक हो जाते हैं')],
          [t('Within about 1–2 weeks', 'लगभग 1–2 हफ़्ते में'), t('Blinking and spasms usually become less frequent and less forceful; this is when benefit and any side effects are clearest', 'झपकना और ऐंठन आमतौर पर कम बार और कम ज़ोर से होती है; फ़ायदा और कोई भी साइड इफ़ेक्ट इसी समय सबसे साफ़ दिखता है')],
          [t('Following weeks to months', 'अगले हफ़्ते से महीने'), t('Benefit is maintained for a period of some months, then the muscle recovers and spasms gradually return', 'फ़ायदा कुछ महीनों तक रहता है, फिर मांसपेशी ठीक होती है और ऐंठन धीरे-धीरे लौटती है')],
          [t('Repeat visits', 'दोबारा विज़िट'), t('Treatment is usually repeated every few months, timed to your symptoms; the schedule is set with your doctor', 'इलाज आमतौर पर हर कुछ महीनों में दोहराया जाता है, लक्षणों के हिसाब से; कार्यक्रम आपके डॉक्टर के साथ तय होता है')],
        ],
      },
    },
    {
      id: 'side-effects',
      h2: t('Side effects, risks and who should not have Botox', 'साइड इफ़ेक्ट, जोखिम और किन्हें बोटॉक्स नहीं लेना चाहिए'),
      paras: [
        t(
          'Botox for eyelid spasm has been used for many years and is generally well tolerated, but it is a medicine with possible effects, and most of them are temporary because the toxin wears off. Possible problems include:',
          'पलक की ऐंठन के लिए बोटॉक्स का उपयोग कई वर्षों से हो रहा है और आमतौर पर इसे अच्छी तरह सहा जाता है, पर यह एक दवा है जिसके असर हो सकते हैं, और ज़्यादातर अस्थायी होते हैं क्योंकि टॉक्सिन उतर जाता है। संभावित समस्याएं:'
        ),
      ],
      bullets: [
        t('A temporarily drooping upper eyelid (ptosis) if the toxin spreads to the lifting muscle; it improves as the effect fades — see [causes of a drooping eyelid](/drooping-eyelid-causes-and-treatment)', 'ऊपरी पलक का अस्थायी झुकना (टोसिस), अगर टॉक्सिन पलक उठाने वाली मांसपेशी तक फैल जाए; असर उतरने के साथ यह ठीक होता है — देखें [झुकी हुई पलक के कारण](/drooping-eyelid-causes-and-treatment)'),
        t('Dry eye, gritty feeling, or watering, because blinking is weaker for a while', 'आंख सूखना, किरकिरी लगना या पानी आना, क्योंकि कुछ समय झपकना कमज़ोर रहता है'),
        t('Incomplete eyelid closure, especially at night, which may need lubricating drops or ointment', 'पलक का पूरा बंद न होना, खासकर रात में, जिसके लिए चिकनाई वाली ड्रॉप्स या ऑइंटमेंट लगाने पड़ सकते हैं'),
        t('Bruising or small bleeding spots at injection sites, and brief tenderness', 'इंजेक्शन की जगह पर नील या छोटे खून के धब्बे और थोड़ी देर की दुखन'),
        t('Rarely, double vision if the toxin affects the muscles that move the eye', 'कभी-कभार दोहरा दिखना, अगर टॉक्सिन आंख घुमाने वाली मांसपेशियों पर असर डाले'),
        t('Facial weakness or an uneven smile when the cheek or mouth muscles are treated for hemifacial spasm', 'हेमीफेशियल स्पाज़्म में गाल या मुंह की मांसपेशियों का इलाज होने पर चेहरे में कमज़ोरी या असमान मुस्कान'),
        t('Over time, the effect may be shorter in some people, and the plan may need to be adjusted', 'समय के साथ कुछ लोगों में असर की अवधि कम हो सकती है और योजना बदलनी पड़ सकती है'),
      ],
      subsections: [
        {
          h3: t('Tell your doctor before treatment if you…', 'इलाज से पहले डॉक्टर को बताएं अगर आप…'),
          bullets: [
            t('are pregnant, planning pregnancy or breastfeeding', 'गर्भवती हैं, गर्भधारण की योजना है या स्तनपान करा रही हैं'),
            t('have myasthenia gravis, motor neurone disease or another nerve–muscle condition', 'मायस्थीनिया ग्रेविस, मोटर न्यूरॉन रोग या कोई और नस-मांसपेशी की बीमारी है'),
            t('have had a reaction to botulinum toxin before, or have an infection near the injection area', 'पहले बोटुलिनम टॉक्सिन से रिएक्शन हुआ है, या इंजेक्शन की जगह के पास संक्रमण है'),
            t('take blood thinners, or some antibiotics and other medicines that can interact with the toxin', 'ब्लड थिनर या ऐसी कुछ एंटीबायोटिक और दूसरी दवाएं लेते हैं जो टॉक्सिन के साथ असर डाल सकती हैं'),
          ],
        },
      ],
    },
    {
      id: 'other-options',
      h2: t('What other treatments exist for blepharospasm and hemifacial spasm?', 'ब्लेफेरोस्पाज़्म और चेहरे की ऐंठन के और कौन-से इलाज हैं?'),
      paras: [
        t(
          'Botulinum toxin is the usual first treatment, but it is not the only one. Lubricating drops treat dry eye and light-sensitivity, tinted lenses may reduce glare, and treating eyelid inflammation can help. Medicines taken by mouth are sometimes tried, though they tend to help less and can cause drowsiness or other side effects. For blepharospasm that no longer responds to injections, some centres perform surgery to remove part of the eyelid muscles; for hemifacial spasm, a brain operation that moves the blood vessel away from the facial nerve (microvascular decompression) is an option that is performed by neurosurgeons. Dr. Singh can explain these choices and arrange referral when they are appropriate.',
          'बोटुलिनम टॉक्सिन आमतौर पर पहला इलाज है, पर अकेला नहीं। चिकनाई वाली ड्रॉप्स ड्राई आई और रोशनी की परेशानी में मदद करती हैं, रंगीन चश्मे चकाचौंध कम कर सकते हैं, और पलक की सूजन का इलाज भी फ़ायदेमंद हो सकता है। कभी-कभी खाने की दवाएं आज़माई जाती हैं, पर वे कम असरदार होती हैं और उनसे नींद या दूसरे साइड इफ़ेक्ट हो सकते हैं। जिस ब्लेफेरोस्पाज़्म में इंजेक्शन का असर नहीं रहता, उसमें कुछ केंद्र पलक की मांसपेशियों का हिस्सा हटाने की सर्जरी करते हैं; हेमीफेशियल स्पाज़्म में रक्त नली को चेहरे की नस से हटाने वाला दिमाग़ का ऑपरेशन (माइक्रोवैस्कुलर डिकम्प्रेशन) एक विकल्प है, जो न्यूरोसर्जन करते हैं। डॉ. सिंह इन विकल्पों के बारे में बता सकती हैं और ज़रूरत होने पर रेफ़रल की व्यवस्था करती हैं।'
        ),
      ],
    },
  ],

  whyDrSaumika: [
    t('Eye surgeon with a long-term fellowship in Oculoplasty & Ocular Oncology at Dr. Shroff’s Charity Eye Hospital, New Delhi, after MS in Ophthalmology', 'नेत्र विज्ञान में MS के बाद डॉ. श्रॉफ़्स चैरिटी आई हॉस्पिटल, नई दिल्ली से ओकुलोप्लास्टी व ओकुलर ऑन्कोलॉजी में दीर्घकालिक फ़ेलोशिप वाली नेत्र सर्जन'),
    t('Offers medical Botox for blepharospasm and hemifacial spasm, with a full eye, eyelid and tear-film assessment first', 'ब्लेफेरोस्पाज़्म और हेमीफेशियल स्पाज़्म के लिए मेडिकल बोटॉक्स करती हैं, पहले आंख, पलक और आंसू की परत की पूरी जांच के साथ'),
    t('Because she is also an eyelid surgeon, she can manage related problems such as a droop or dry eye, and refer you for a brain scan or neurology opinion when needed', 'पलक सर्जन होने के कारण वे झुकाव या ड्राई आई जैसी जुड़ी समस्याएं संभाल सकती हैं और ज़रूरत हो तो दिमाग़ के स्कैन या न्यूरोलॉजिस्ट की राय के लिए भेजती हैं'),
    t('Registered with the Uttar Pradesh Medical Council (Reg. No. 137106); consults at Alyantra Medicity Superspeciality Hospital, Gomti Nagar', 'उत्तर प्रदेश मेडिकल काउंसिल में पंजीकृत (पंजीकरण सं. 137106); अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में परामर्श'),
  ],

  faqs: [
    {
      q: t('Is eye twitching a sign of something serious?', 'क्या आंख फड़कना किसी गंभीर बीमारी का संकेत है?'),
      a: t('Usually not. A flutter in one eyelid that comes and goes for a few days is common and is often linked to tiredness, stress, caffeine or screen strain. See a doctor if it lasts more than a few weeks, involves both eyes or the cheek, makes the eye close, or comes with weakness, drooping or other changes.', 'आमतौर पर नहीं। एक पलक में कुछ दिन आती-जाती फड़कन आम है और अक्सर थकान, तनाव, कैफ़ीन या स्क्रीन के ज़ोर से जुड़ी होती है। अगर यह कुछ हफ़्तों से ज़्यादा चले, दोनों आंखों या गाल तक फैले, आंख बंद करा दे, या कमज़ोरी, पलक झुकने या दूसरे बदलावों के साथ हो, तो डॉक्टर को दिखाएं। इसका शुभ-अशुभ से कोई चिकित्सकीय संबंध नहीं है।'),
    },
    {
      q: t('Is Botox the only treatment for blepharospasm?', 'क्या ब्लेफेरोस्पाज़्म का इलाज सिर्फ़ बोटॉक्स है?'),
      a: t('No, but it is the usual first-line treatment because it often gives good relief with little downtime. Lubricating drops, treating eye surface problems, tinted lenses and some oral medicines may help, and surgery on the eyelid muscles is used in a few people who stop responding. Your doctor will guide you.', 'नहीं, पर यह आमतौर पर पहला इलाज है क्योंकि इससे अक्सर कम परेशानी के साथ अच्छी राहत मिलती है। चिकनाई वाली ड्रॉप्स, आंख की सतह की समस्याओं का इलाज, रंगीन चश्मे और कुछ खाने की दवाएं मदद कर सकती हैं, और जिन कुछ लोगों में इंजेक्शन का असर बंद हो जाए उनमें पलक की मांसपेशियों की सर्जरी होती है। आपके डॉक्टर मार्गदर्शन करेंगे।'),
    },
    {
      q: t('How long does Botox last for blepharospasm?', 'ब्लेफेरोस्पाज़्म में बोटॉक्स कितने समय चलता है?'),
      a: t('The effect usually builds over several days and lasts for a few months before the muscle recovers and the spasms return. Because it wears off, treatment is repeated, often every few months. The exact interval differs from person to person and is adjusted with your doctor.', 'असर आमतौर पर कुछ दिनों में बनता है और कुछ महीनों तक रहता है, फिर मांसपेशी ठीक होती है और ऐंठन लौटती है। चूंकि यह उतर जाता है, इलाज दोहराया जाता है, अक्सर हर कुछ महीनों में। सही अंतराल हर व्यक्ति में अलग होता है और आपके डॉक्टर के साथ तय किया जाता है।'),
    },
    {
      q: t('Is Botox for hemifacial spasm the same as for blepharospasm?', 'क्या हेमीफेशियल स्पाज़्म और ब्लेफेरोस्पाज़्म में बोटॉक्स एक जैसा है?'),
      a: t('The medicine is the same, but the injection points differ. Hemifacial spasm affects one side of the face, so the cheek and mouth muscles may be treated as well as those around the eye. Hemifacial spasm usually also needs an MRI scan to look for a cause pressing on the facial nerve.', 'दवा वही है, पर इंजेक्शन की जगहें अलग होती हैं। हेमीफेशियल स्पाज़्म चेहरे की एक तरफ़ को प्रभावित करता है, इसलिए आंख के साथ गाल और मुंह की मांसपेशियों का भी इलाज हो सकता है। इसमें आमतौर पर चेहरे की नस पर दबाव डालने वाले कारण को देखने के लिए MRI स्कैन भी चाहिए।'),
    },
    {
      q: t('Can Botox make my eyelid droop?', 'क्या बोटॉक्स से मेरी पलक झुक सकती है?'),
      a: t('Yes, this is one of the more common side effects. If the toxin spreads to the muscle that lifts the upper eyelid, the lid can sit lower for a while. It is temporary and settles as the effect wears off. Careful injection placement lowers the chance, but it cannot be removed completely.', 'हां, यह कुछ ज़्यादा आम साइड इफ़ेक्ट में से एक है। अगर टॉक्सिन ऊपरी पलक उठाने वाली मांसपेशी तक फैल जाए, तो पलक कुछ समय नीचे रह सकती है। यह अस्थायी है और असर उतरने के साथ ठीक हो जाता है। सावधानी से इंजेक्शन लगाने से संभावना कम होती है, पर पूरी तरह ख़त्म नहीं होती।'),
    },
    {
      q: t('Can blepharospasm go away on its own?', 'क्या ब्लेफेरोस्पाज़्म अपने आप ठीक हो सकता है?'),
      a: t('Benign essential blepharospasm is usually a long-term condition, and it is not expected to disappear on its own, though it can fluctuate and some people have quieter periods. Treatment aims to control the symptoms. A simple eyelid twitch, in contrast, usually settles within days or weeks.', 'बिनाइन एसेंशियल ब्लेफेरोस्पाज़्म आमतौर पर लंबे समय की स्थिति है और अपने आप पूरी तरह ख़त्म होने की उम्मीद नहीं की जाती, हालांकि यह कम-ज़्यादा हो सकता है और कुछ लोगों में शांत दौर आते हैं। इलाज का मकसद लक्षणों को काबू में रखना है। इसके उलट साधारण पलक फड़कना आमतौर पर कुछ दिनों या हफ़्तों में ठीक हो जाता है।'),
    },
    {
      q: t('Who should I see for repeated blinking and eyelid spasm in Lucknow?', 'लखनऊ में बार-बार पलकें झपकने और ऐंठन के लिए किसे दिखाएं?'),
      a: t('Start with an eye examination to rule out dry eye and other eye problems. An oculoplastic surgeon is trained in the eyelid muscles and in botulinum toxin treatment around the eye. In Lucknow, Dr. Saumika Singh sees these patients at Alyantra Medicity Superspeciality Hospital, Gomti Nagar, and arranges a scan or neurology referral when needed.', 'सबसे पहले आंखों की जांच करवाएं ताकि ड्राई आई और आंख की दूसरी समस्याएं देखी जा सकें। ओकुलोप्लास्टिक सर्जन पलक की मांसपेशियों और आंख के आसपास बोटुलिनम टॉक्सिन के इलाज में प्रशिक्षित होते हैं। लखनऊ में डॉ. सौमिका सिंह अलयंत्रा मेडिसिटी सुपरस्पेशलिटी हॉस्पिटल, गोमती नगर में ऐसे मरीज़ देखती हैं और ज़रूरत हो तो स्कैन या न्यूरोलॉजिस्ट को रेफ़रल की व्यवस्था करती हैं।'),
    },
  ],

  cta: {
    title: t('Book an eyelid spasm assessment in Lucknow', 'लखनऊ में पलक की ऐंठन की जांच बुक करें'),
    text: t('Note when the spasms happen and what makes them worse, bring a list of your medicines and any previous eye or brain-scan reports, and, if you can, a short phone video of an episode.', 'ऐंठन कब होती है और किससे बढ़ती है यह नोट करें, अपनी दवाओं की सूची और पुरानी आंख या दिमाग़ के स्कैन की रिपोर्ट साथ लाएं, और हो सके तो किसी दौरे का छोटा फ़ोन वीडियो भी।'),
  },

  related: [
    { path: '/services/botox-eyelid-cosmetic-surgery-periocular-aesthetics', label: t('Botox and periocular aesthetics', 'बोटॉक्स और आंख के आसपास की सौंदर्य सेवाएं') },
    { path: '/drooping-eyelid-causes-and-treatment', label: t('Drooping eyelid: causes and treatment', 'झुकी हुई पलक: कारण और इलाज') },
    { path: '/why-are-my-eyes-watering', label: t('Why are my eyes watering?', 'आंखों से पानी क्यों आता है?') },
    { path: '/oculoplasty-consultation-what-to-expect', label: t('Oculoplasty consultation: what to expect', 'ओकुलोप्लास्टी परामर्श: क्या उम्मीद करें') },
    { path: '/services/eyelid-disorders-eyelid-surgery', label: t('Eyelid disorders and eyelid surgery', 'पलक की समस्याएं और पलक सर्जरी') },
  ],

  references: [
    { label: 'Blepharospasm', source: 'National Eye Institute (NEI), U.S. National Institutes of Health', url: 'https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/blepharospasm' },
    { label: 'Blepharospasm', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Blepharospasm' },
    { label: 'Hemifacial Spasm', source: 'EyeWiki – American Academy of Ophthalmology', url: 'https://eyewiki.org/Hemifacial_Spasm' },
    { label: 'Twitching eyes and muscles', source: 'NHS', url: 'https://www.nhs.uk/symptoms/twitching-eyes-and-muscles/' },
    { label: 'Benign Essential Blepharospasm (StatPearls)', source: 'NCBI Bookshelf, U.S. National Library of Medicine', url: 'https://www.ncbi.nlm.nih.gov/books/NBK560833/' },
  ],

  schema: {
    type: 'MedicalCondition',
    name: 'Benign essential blepharospasm',
    alternateName: ['Blepharospasm', 'Involuntary eyelid closure', 'Hemifacial spasm', 'Eyelid spasm'],
    bodyLocation: 'Eyelids and periocular facial muscles',
  },

  reviewerNotes: [
    'Confirm that she personally gives the Botox injections for blepharospasm and hemifacial spasm (hub page says it is offered) and that the visit is outpatient with a short injection session.',
    'Confirm the injection-visit details: whether a numbing cream/ice is used, how many sites, and whether she treats the cheek/mouth muscles in hemifacial spasm (page says "sometimes").',
    'Confirm the typical onset (about 1–2 weeks to full effect; effect begins within days) and re-treatment interval wording ("every few months"); no doses or exact unit numbers are given on purpose.',
    'Confirm the plan for MRI and neurology referral in hemifacial spasm (page says the scan and referral are arranged alongside treatment) and who orders the MRI.',
    'Confirm the exclusions list (pregnancy/breastfeeding, myasthenia gravis, motor neurone disease, infection at site, blood thinners and certain antibiotics) matches her consent process.',
    'Surgical options (eyelid muscle myectomy; microvascular decompression by neurosurgeons) are described neutrally as existing elsewhere, not as services she offers; confirm she is comfortable with the wording.',
    'Confirm the statement that benign essential blepharospasm is usually long-term and that the cause is thought to be central (brain circuits) and not in the eyelid.',
    'Confirm the closing sentence in the first FAQ answer (omen beliefs have no medical basis) is acceptable in tone.',
    'References verified (HTTP 200 with the expected page titles): NEI, EyeWiki Blepharospasm, EyeWiki Hemifacial Spasm, NHS "Twitching eyes and muscles". The StatPearls NBK560833 URL could not be verified by script (returns a reCAPTCHA page); the research notes confirm the title and number.',
  ],
};

export default guide;
