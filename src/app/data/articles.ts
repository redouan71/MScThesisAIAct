export interface ArticleData {
  number: number;
  title: string;
  content: string;
  narrative: string;
  crossReferences: number[];
}

export type ArticleNumber = 9 | 10 | 11 | 12 | 13 | 14 | 26 | 60 | 72 | 79;

export const articles: Record<ArticleNumber, ArticleData> = {
  9: {
    number: 9,
    title: 'Risk Management System',
    content: `1. A risk management system shall be established, implemented, documented and maintained in relation to high-risk AI systems.

2. The risk management system shall be understood as a continuous iterative process planned and run throughout the entire lifecycle of a high-risk AI system, requiring regular systematic review and updating. It shall comprise the following steps:

(a) the identification and analysis of the known and the reasonably foreseeable risks that the high-risk AI system can pose to health, safety or fundamental rights when the high-risk AI system is used in accordance with its intended purpose;

(b) the estimation and evaluation of the risks that may emerge when the high-risk AI system is used in accordance with its intended purpose, and under conditions of reasonably foreseeable misuse;

(c) the evaluation of other risks possibly arising, based on the analysis of data gathered from the post-market monitoring system referred to in {{Article 72}};

(d) the adoption of appropriate and targeted risk management measures designed to address the risks identified pursuant to point (a).

3. The risks referred to in this Article shall concern only those which may be reasonably mitigated or eliminated through the development or design of the high-risk AI system, or the provision of adequate technical information.

4. The risk management measures referred to in paragraph 2, point (d), shall give due consideration to the effects and possible interaction resulting from the combined application of the requirements set out in this Section, with a view to minimising risks more effectively while achieving an appropriate balance in implementing the measures to fulfil those requirements.

5. The risk management measures referred to in paragraph 2, point (d), shall be such that the relevant residual risk associated with each hazard, as well as the overall residual risk of the high-risk AI systems is judged to be acceptable. In identifying the most appropriate risk management measures, the following shall be ensured:

(a) elimination or reduction of risks identified and evaluated pursuant to paragraph 2 in as far as technically feasible through adequate design and development of the high-risk AI system;

(b) where appropriate, implementation of adequate mitigation and control measures addressing risks that cannot be eliminated;

(c) provision of information required pursuant to {{Article 13}} and, where appropriate, training to deployers. With a view to eliminating or reducing risks related to the use of the high-risk AI system, due consideration shall be given to the technical knowledge, experience, education, the training to be expected by the deployer, and the presumable context in which the system is intended to be used.

6. High-risk AI systems shall be tested for the purpose of identifying the most appropriate and targeted risk management measures. Testing shall ensure that high-risk AI systems perform consistently for their intended purpose and that they are in compliance with the requirements set out in this Section.

7. Testing procedures may include testing in real-world conditions in accordance with {{Article 60}}.

8. The testing of high-risk AI systems shall be performed, as appropriate, at any time throughout the development process, and, in any event, prior to their being placed on the market or put into service. Testing shall be carried out against prior defined metrics and probabilistic thresholds that are appropriate to the intended purpose of the high-risk AI system.

9. When implementing the risk management system as provided for in paragraphs 1 to 7, providers shall give consideration to whether in view of its intended purpose the high-risk AI system is likely to have an adverse impact on persons under the age of 18 and, as appropriate, other vulnerable groups.

10. For providers of high-risk AI systems that are subject to requirements regarding internal risk management processes under other relevant provisions of Union law, the aspects provided in paragraphs 1 to 9 may be part of, or combined with, the risk management procedures established pursuant to that law.`,
    narrative: `Maya worked at a small company building an AI tool that helped hospitals decide which patients should be seen first in the emergency department. At first, the team was excited because the system seemed fast and accurate, but before anyone was allowed to use it, Maya gathered the doctors, nurses, engineers, and patient safety officer around one table and asked a simple question: "What could go wrong, even if everyone uses this exactly as intended?" They listed the obvious dangers first: the AI might underestimate a child's symptoms, misunderstand rare conditions, perform worse for people whose data was underrepresented, or make staff trust its recommendation too much. Then Maya asked a second question: "How might people misuse it in a way we can reasonably predict?" The team imagined a crowded night shift where a tired nurse might follow the AI score without checking the patient, or a hospital manager might use the tool outside the emergency department even though it was not designed for that. Instead of treating these worries as paperwork, Maya turned them into design decisions. The system was changed so that it could not make the final decision by itself, displayed warnings when cases were uncertain, explained the main reasons behind its recommendation, and clearly told staff when the tool should not be used. The team tested it again and again, including with difficult cases, children's cases, and examples from different patient groups, until the remaining risks were reduced as much as technically possible and judged acceptable. Every important choice was written down: the risks found, the tests run, the trade-offs made, the safeguards added, and the instructions hospitals would need. When the tool finally went live, Maya did not close the risk file and move on. She set up a routine to review incident reports, user feedback, and performance data from real hospitals, because new risks could appear after deployment. Months later, when the team noticed that the AI was less reliable in a certain type of paediatric case, they updated the system, revised the instructions, and recorded the change.`,
    crossReferences: [13, 60, 72]
  },
  10: {
    number: 10,
    title: 'Data and Data Governance',
    content: `1. High-risk AI systems which make use of techniques involving the training of AI models with data shall be developed on the basis of training, validation and testing data sets that meet the quality criteria referred to in paragraphs 2 to 5 whenever such data sets are used.

2. Training, validation and testing data sets shall be subject to data governance and management practices appropriate for the intended purpose of the high-risk AI system. Those practices shall concern in particular:

(a) the relevant design choices;

(b) data collection processes and the origin of data, and in the case of personal data, the original purpose of the data collection;

(c) relevant data-preparation processing operations, such as annotation, labelling, cleaning, updating, enrichment and aggregation;

(d) the formulation of assumptions, in particular with respect to the information that the data are supposed to measure and represent;

(e) an assessment of the availability, quantity and suitability of the data sets that are needed;

(f) examination in view of possible biases that are likely to affect the health and safety of persons, have a negative impact on fundamental rights or lead to discrimination prohibited under Union law, especially where data outputs influence inputs for future operations;

(g) appropriate measures to detect, prevent and mitigate possible biases identified according to point (f);

(h) the identification of relevant data gaps or shortcomings that prevent compliance with this Regulation, and how those gaps and shortcomings can be addressed.

3. Training, validation and testing data sets shall be relevant, sufficiently representative, and to the best extent possible, free of errors and complete in view of the intended purpose. They shall have the appropriate statistical properties, including, where applicable, as regards the persons or groups of persons in relation to whom the high-risk AI system is intended to be used. Those characteristics of the data sets may be met at the level of individual data sets or at the level of a combination thereof.

4. Data sets shall take into account, to the extent required by the intended purpose, the characteristics or elements that are particular to the specific geographical, contextual, behavioural or functional setting within which the high-risk AI system is intended to be used.

5. To the extent that it is strictly necessary for the purpose of ensuring bias detection and correction in relation to the high-risk AI systems in accordance with paragraph (2), points (f) and (g) of this Article, the providers of such systems may exceptionally process special categories of personal data, subject to appropriate safeguards for the fundamental rights and freedoms of natural persons. In addition to the provisions set out in Regulations (EU) 2016/679 and (EU) 2018/1725 and Directive (EU) 2016/680, all the following conditions must be met in order for such processing to occur:

(a) the bias detection and correction cannot be effectively fulfilled by processing other data, including synthetic or anonymised data;

(b) the special categories of personal data are subject to technical limitations on the re-use of the personal data, and state-of-the-art security and privacy-preserving measures, including pseudonymisation;

(c) the special categories of personal data are subject to measures to ensure that the personal data processed are secured, protected, subject to suitable safeguards, including strict controls and documentation of the access, to avoid misuse and ensure that only authorised persons have access to those personal data with appropriate confidentiality obligations;

(d) the special categories of personal data are not to be transmitted, transferred or otherwise accessed by other parties;

(e) the special categories of personal data are deleted once the bias has been corrected or the personal data has reached the end of its retention period, whichever comes first;

(f) the records of processing activities pursuant to Regulations (EU) 2016/679 and (EU) 2018/1725 and Directive (EU) 2016/680 include the reasons why the processing of special categories of personal data was strictly necessary to detect and correct biases, and why that objective could not be achieved by processing other data.

6. For the development of high-risk AI systems not using techniques involving the training of AI models, paragraphs 2 to 5 apply only to the testing data sets.`,
    narrative: `Mary and Jonas had just launched their Amsterdam AI startup, which built a tool to help hospitals decide which patients should be invited for an early diabetes screening. At first, their model looked impressive: it was fast, accurate in their demo, and investors loved it. But before they offered it to real clinics, Mary stopped the team and said, "We cannot just ask whether the model works. We need to ask whether the data deserves to be trusted." So they opened a shared document and traced every dataset back to its source: which hospital it came from, why it had originally been collected, whether patients had been informed properly, and whether the data was meant for this kind of prediction. Then they checked how the data had been cleaned, labelled, updated, and combined. One intern noticed that some older records used different names for the same diagnosis, while another found missing values in data from smaller clinics. Instead of ignoring those problems, the team wrote them down and decided how to fix or limit them. Jonas then compared the dataset with the people the system would actually be used for. He realised that most training data came from urban hospitals and did not include enough patients from rural areas, younger adults, or certain migrant communities. "If we train only on the people who are easiest to find," he said, "the system may fail exactly when it meets people outside that pattern." The team added more suitable data where they lawfully could, tested whether the model performed differently across groups, and looked for biases that could unfairly delay screening for some patients. When they needed sensitive information to check whether bias existed, they used it only where strictly necessary, protected access carefully, and deleted it once the bias check was done. By the time the startup met its first hospital client, Mary did not simply say, "Our AI is accurate." She showed a record of the choices they had made: where the data came from, what it was supposed to represent, what gaps they found, how they reduced bias, and why the final training, validation, and testing data were suitable for the medical setting in which the tool would be used. The hospital's compliance officer smiled and said, "So your data governance is not a folder you created at the end. It shaped the system before patients ever depended on it."`,
    crossReferences: []
  },
  11: {
    number: 11,
    title: 'Technical Documentation',
    content: `1. The technical documentation of a high-risk AI system shall be drawn up before that system is placed on the market or put into service and shall be kept up-to date. The technical documentation shall be drawn up in such a way as to demonstrate that the high-risk AI system complies with the requirements set out in this Section and to provide national competent authorities and notified bodies with the necessary information in a clear and comprehensive form to assess the compliance of the AI system with those requirements. It shall contain, at a minimum, the elements set out in Annex IV. SMEs, including start-ups, may provide the elements of the technical documentation specified in Annex IV in a simplified manner. To that end, the Commission shall establish a simplified technical documentation form targeted at the needs of small and microenterprises. Where an SME, including a start-up, opts to provide the information required in Annex IV in a simplified manner, it shall use the form referred to in this paragraph. Notified bodies shall accept the form for the purposes of the conformity assessment.

2. Where a high-risk AI system related to a product covered by the Union harmonisation legislation listed in Section A of Annex I is placed on the market or put into service, a single set of technical documentation shall be drawn up containing all the information set out in paragraph 1, as well as the information required under those legal acts.

3. The Commission is empowered to adopt delegated acts in accordance with {{Article 97}} in order to amend Annex IV, where necessary, to ensure that, in light of technical progress, the technical documentation provides all the information necessary to assess the compliance of the system with the requirements set out in this Section.`,
    narrative: `Madison and John, two former UvA data science students, had built an AI tool that helped small clinics decide which patient files needed urgent review. At first, they thought their biggest job was making the model accurate, but their advisor reminded them that a system used in healthcare would not be judged only by what it could do on demo day. "Imagine an inspector walks in six months from now," she said. "Could you show not just that it works, but why it was built this way, what data shaped it, what risks you expected, what tests you ran, and how a clinic is supposed to use it safely?" So before offering the tool to their first clinic, they opened a shared folder they called the system's "passport." In it, they described the purpose of the AI, the main design choices, the data used for training and testing, the performance results, the limits they had found, the risks they had identified, and the safeguards they had added, such as human review before any urgent-care recommendation was acted on. When they changed the model after discovering that it performed less well on older patient records, they did not treat the documentation as finished paperwork; they updated the passport so it still matched the real system. Because they were a small startup, they used the simplified form made for companies like theirs, but they still made sure the explanation was complete enough that an outside authority could follow the trail from idea, to development, to testing, to safe deployment. Later, when a clinic asked whether the tool was "EU AI Act ready," Madison did not send a marketing slide. She sent the technical file. The clinic's compliance officer could see that the team had not merely built an AI product and hoped for trust afterwards; they had kept a clear, living record that made the system inspectable, accountable, and ready to be assessed before people depended on it.`,
    crossReferences: [97]
  },
  12: {
    number: 12,
    title: 'Record-keeping',
    content: `1. High-risk AI systems shall technically allow for the automatic recording of events (logs) over the lifetime of the system.

2. In order to ensure a level of traceability of the functioning of a high-risk AI system that is appropriate to the intended purpose of the system, logging capabilities shall enable the recording of events relevant for:

(a) identifying situations that may result in the high-risk AI system presenting a risk within the meaning of {{Article 79}}(1) or in a substantial modification;

(b) facilitating the post-market monitoring referred to in {{Article 72}}; and

(c) monitoring the operation of high-risk AI systems referred to in {{Article 26}}(5).

3. For high-risk AI systems referred to in point 1 (a), of Annex III, the logging capabilities shall provide, at a minimum:

(a) recording of the period of each use of the system (start date and time and end date and time of each use);

(b) the reference database against which input data has been checked by the system;

(c) the input data for which the search has led to a match;

(d) the identification of the natural persons involved in the verification of the results, as referred to in {{Article 14}}(5).`,
    narrative: '',
    crossReferences: [14, 26, 72, 79]
  },
  13: {
    number: 13,
    title: 'Transparency and Provision of Information to Deployers',
    content: `1. High-risk AI systems shall be designed and developed in such a way as to ensure that their operation is sufficiently transparent to enable deployers to interpret a system's output and use it appropriately. An appropriate type and degree of transparency shall be ensured with a view to achieving compliance with the relevant obligations of the provider and deployer set out in Section 3.

2. High-risk AI systems shall be accompanied by instructions for use in an appropriate digital format or otherwise that include concise, complete, correct and clear information that is relevant, accessible and comprehensible to deployers.

3. The instructions for use shall contain at least the following information:

(a) the identity and the contact details of the provider and, where applicable, of its authorised representative;

(b) the characteristics, capabilities and limitations of performance of the high-risk AI system, including:

(i) its intended purpose;

(ii) the level of accuracy, including its metrics, robustness and cybersecurity referred to in {{Article 15}} against which the high-risk AI system has been tested and validated and which can be expected, and any known and foreseeable circumstances that may have an impact on that expected level of accuracy, robustness and cybersecurity;

(iii) any known or foreseeable circumstance, related to the use of the high-risk AI system in accordance with its intended purpose or under conditions of reasonably foreseeable misuse, which may lead to risks to the health and safety or fundamental rights referred to in {{Article 9}}(2);

(iv) where applicable, the technical capabilities and characteristics of the high-risk AI system to provide information that is relevant to explain its output;

(v) when appropriate, its performance regarding specific persons or groups of persons on which the system is intended to be used;

(vi) when appropriate, specifications for the input data, or any other relevant information in terms of the training, validation and testing data sets used, taking into account the intended purpose of the high-risk AI system;

(vii) where applicable, information to enable deployers to interpret the output of the high-risk AI system and use it appropriately;

(c) the changes to the high-risk AI system and its performance which have been predetermined by the provider at the moment of the initial conformity assessment, if any;

(d) the human oversight measures referred to in {{Article 14}}, including the technical measures put in place to facilitate the interpretation of the outputs of the high-risk AI systems by the deployers;

(e) the computational and hardware resources needed, the expected lifetime of the high-risk AI system and any necessary maintenance and care measures, including their frequency, to ensure the proper functioning of that AI system, including as regards software updates;

(f) where relevant, a description of the mechanisms included within the high-risk AI system that allows deployers to properly collect, store and interpret the logs in accordance with {{Article 12}}.`,
    narrative: '',
    crossReferences: [9, 12, 14, 15]
  },
  14: {
    number: 14,
    title: 'Human Oversight',
    content: `1. High-risk AI systems shall be designed and developed in such a way, including with appropriate human-machine interface tools, that they can be effectively overseen by natural persons during the period in which they are in use.

2. Human oversight shall aim to prevent or minimise the risks to health, safety or fundamental rights that may emerge when a high-risk AI system is used in accordance with its intended purpose or under conditions of reasonably foreseeable misuse, in particular where such risks persist despite the application of other requirements set out in this Section.

3. The oversight measures shall be commensurate with the risks, level of autonomy and context of use of the high-risk AI system, and shall be ensured through either one or both of the following types of measures:

(a) measures identified and built, when technically feasible, into the high-risk AI system by the provider before it is placed on the market or put into service;

(b) measures identified by the provider before placing the high-risk AI system on the market or putting it into service and that are appropriate to be implemented by the deployer.

4. For the purpose of implementing paragraphs 1, 2 and 3, the high-risk AI system shall be provided to the deployer in such a way that natural persons to whom human oversight is assigned are enabled, as appropriate and proportionate:

(a) to properly understand the relevant capacities and limitations of the high-risk AI system and be able to duly monitor its operation, including in view of detecting and addressing anomalies, dysfunctions and unexpected performance;

(b) to remain aware of the possible tendency of automatically relying or over-relying on the output produced by a high-risk AI system (automation bias), in particular for high-risk AI systems used to provide information or recommendations for decisions to be taken by natural persons;

(c) to correctly interpret the high-risk AI system's output, taking into account, for example, the interpretation tools and methods available;

(d) to decide, in any particular situation, not to use the high-risk AI system or to otherwise disregard, override or reverse the output of the high-risk AI system;

(e) to intervene in the operation of the high-risk AI system or interrupt the system through a 'stop' button or a similar procedure that allows the system to come to a halt in a safe state.

5. For high-risk AI systems referred to in point 1(a) of Annex III, the measures referred to in paragraph 3 of this Article shall be such as to ensure that, in addition, no action or decision is taken by the deployer on the basis of the identification resulting from the system unless that identification has been separately verified and confirmed by at least two natural persons with the necessary competence, training and authority. The requirement for a separate verification by at least two natural persons shall not apply to high-risk AI systems used for the purposes of law enforcement, migration, border control or asylum, where Union or national law considers the application of this requirement to be disproportionate.`,
    narrative: `At the hospital, Mira's team introduced an AI tool that helped rank urgent scan results, but they never treated it like the doctor in charge. Before using it, the supplier showed them exactly what the tool was built for, where it could make mistakes, and what warning signs to watch for. Mira and two senior nurses were trained to read its recommendations, question them, and notice when the system behaved oddly. One afternoon, the tool marked an elderly patient's scan as low priority, but Mira saw that the patient's symptoms did not fit the usual pattern. Remembering that people can become too trusting of automated suggestions, she paused, reviewed the scan herself, and asked a radiologist to check it too. They found a serious issue and overrode the AI's recommendation. Later, when the tool began giving several unusual rankings, Mira used the clinic's stop procedure and reported the problem instead of letting it continue. In practice, the clinic complied with human oversight not by having a person merely "near" the AI, but by making sure trained people could understand its limits, monitor it, challenge it, override it, and stop it safely whenever health, safety, or rights might be at risk, which reflects Article 14's requirements for high-risk AI systems.`,
    crossReferences: []
  },
  26: {
    number: 26,
    title: 'Obligations of Deployers of High-Risk AI Systems',
    content: `1. Deployers of high-risk AI systems shall take appropriate technical and organisational measures to ensure they use such systems in accordance with the instructions for use accompanying the systems, pursuant to paragraphs 3 and 6.

2. Deployers shall assign human oversight to natural persons who have the necessary competence, training and authority, as well as the necessary support.

3. The obligations set out in paragraphs 1 and 2, are without prejudice to other deployer obligations under Union or national law and to the deployer's freedom to organise its own resources and activities for the purpose of implementing the human oversight measures indicated by the provider.

4. Without prejudice to paragraphs 1 and 2, to the extent the deployer exercises control over the input data, that deployer shall ensure that input data is relevant and sufficiently representative in view of the intended purpose of the high-risk AI system.

5. Deployers shall monitor the operation of the high-risk AI system on the basis of the instructions for use and, where relevant, inform providers in accordance with {{Article 72}}. Where deployers have reason to consider that the use of the high-risk AI system in accordance with the instructions may result in that AI system presenting a risk within the meaning of {{Article 79}}(1), they shall, without undue delay, inform the provider or distributor and the relevant market surveillance authority, and shall suspend the use of that system. Where deployers have identified a serious incident, they shall also immediately inform first the provider, and then the importer or distributor and the relevant market surveillance authorities of that incident. If the deployer is not able to reach the provider, {{Article 73}} shall apply mutatis mutandis. This obligation shall not cover sensitive operational data of deployers of AI systems which are law enforcement authorities. For deployers that are financial institutions subject to requirements regarding their internal governance, arrangements or processes under Union financial services law, the monitoring obligation set out in the first subparagraph shall be deemed to be fulfilled by complying with the rules on internal governance arrangements, processes and mechanisms pursuant to the relevant financial service law.

6. Deployers of high-risk AI systems shall keep the logs automatically generated by that high-risk AI system to the extent such logs are under their control, for a period appropriate to the intended purpose of the high-risk AI system, of at least six months, unless provided otherwise in applicable Union or national law, in particular in Union law on the protection of personal data. Deployers that are financial institutions subject to requirements regarding their internal governance, arrangements or processes under Union financial services law shall maintain the logs as part of the documentation kept pursuant to the relevant Union financial service law.

7. Before putting into service or using a high-risk AI system at the workplace, deployers who are employers shall inform workers' representatives and the affected workers that they will be subject to the use of the high-risk AI system. This information shall be provided, where applicable, in accordance with the rules and procedures laid down in Union and national law and practice on information of workers and their representatives.

8. Deployers of high-risk AI systems that are public authorities, or Union institutions, bodies, offices or agencies shall comply with the registration obligations referred to in {{Article 49}}. When such deployers find that the high-risk AI system that they envisage using has not been registered in the EU database referred to in {{Article 71}}, they shall not use that system and shall inform the provider or the distributor.

9. Where applicable, deployers of high-risk AI systems shall use the information provided under {{Article 13}} of this Regulation to comply with their obligation to carry out a data protection impact assessment under Article 35 of Regulation (EU) 2016/679 or Article 27 of Directive (EU) 2016/680.

10. Without prejudice to Directive (EU) 2016/680, in the framework of an investigation for the targeted search of a person suspected or convicted of having committed a criminal offence, the deployer of a high-risk AI system for post-remote biometric identification shall request an authorisation, ex-ante, or without undue delay and no later than 48 hours, by a judicial authority or an administrative authority whose decision is binding and subject to judicial review, for the use of that system, except when it is used for the initial identification of a potential suspect based on objective and verifiable facts directly linked to the offence. Each use shall be limited to what is strictly necessary for the investigation of a specific criminal offence. If the authorisation requested pursuant to the first subparagraph is rejected, the use of the post-remote biometric identification system linked to that requested authorisation shall be stopped with immediate effect and the personal data linked to the use of the high-risk AI system for which the authorisation was requested shall be deleted. In no case shall such high-risk AI system for post-remote biometric identification be used for law enforcement purposes in an untargeted way, without any link to a criminal offence, a criminal proceeding, a genuine and present or genuine and foreseeable threat of a criminal offence, or the search for a specific missing person. It shall be ensured that no decision that produces an adverse legal effect on a person may be taken by the law enforcement authorities based solely on the output of such post-remote biometric identification systems. This paragraph is without prejudice to Article 9 of Regulation (EU) 2016/679 and Article 10 of Directive (EU) 2016/680 for the processing of biometric data. Regardless of the purpose or deployer, each use of such high-risk AI systems shall be documented in the relevant police file and shall be made available to the relevant market surveillance authority and the national data protection authority upon request, excluding the disclosure of sensitive operational data related to law enforcement. This subparagraph shall be without prejudice to the powers conferred by Directive (EU) 2016/680 on supervisory authorities. Deployers shall submit annual reports to the relevant market surveillance and national data protection authorities on their use of post-remote biometric identification systems, excluding the disclosure of sensitive operational data related to law enforcement. The reports may be aggregated to cover more than one deployment. Member States may introduce, in accordance with Union law, more restrictive laws on the use of post-remote biometric identification systems.

11. Without prejudice to {{Article 50}} of this Regulation, deployers of high-risk AI systems referred to in Annex III that make decisions or assist in making decisions related to natural persons shall inform the natural persons that they are subject to the use of the high-risk AI system. For high-risk AI systems used for law enforcement purposes Article 13 of Directive (EU) 2016/680 shall apply.

12. Deployers shall cooperate with the relevant competent authorities in any action those authorities take in relation to the high-risk AI system in order to implement this Regulation.`,
    narrative: '',
    crossReferences: [13, 49, 50, 71, 72, 73, 79]
  },
  60: {
    number: 60,
    title: 'Testing of High-Risk AI Systems in Real World Conditions Outside AI Regulatory Sandboxes',
    content: `1. Testing of high-risk AI systems in real world conditions outside AI regulatory sandboxes may be conducted by providers or prospective providers of high-risk AI systems listed in Annex III, in accordance with this Article and the real-world testing plan referred to in this Article, without prejudice to the prohibitions under {{Article 5}}. The Commission shall, by means of implementing acts, specify the detailed elements of the real-world testing plan. Those implementing acts shall be adopted in accordance with the examination procedure referred to in {{Article 98}}(2). This paragraph shall be without prejudice to Union or national law on the testing in real world conditions of high-risk AI systems related to products covered by Union harmonisation legislation listed in Annex I.

2. Providers or prospective providers may conduct testing of high-risk AI systems referred to in Annex III in real world conditions at any time before the placing on the market or the putting into service of the AI system on their own or in partnership with one or more deployers or prospective deployers.

3. The testing of high-risk AI systems in real world conditions under this Article shall be without prejudice to any ethical review that is required by Union or national law.

4. Providers or prospective providers may conduct the testing in real world conditions only where all of the following conditions are met:

(a) the provider or prospective provider has drawn up a real-world testing plan and submitted it to the market surveillance authority in the Member State where the testing in real world conditions is to be conducted;

(b) the market surveillance authority in the Member State where the testing in real world conditions is to be conducted has approved the testing in real world conditions and the real-world testing plan; where the market surveillance authority has not provided an answer within 30 days, the testing in real world conditions and the real-world testing plan shall be understood to have been approved; where national law does not provide for a tacit approval, the testing in real world conditions shall remain subject to an authorisation;

(c) the provider or prospective provider, with the exception of providers or prospective providers of high-risk AI systems referred to in points 1, 6 and 7 of Annex III in the areas of law enforcement, migration, asylum and border control management, and high-risk AI systems referred to in point 2 of Annex III has registered the testing in real world conditions in accordance with {{Article 71}}(4) with a Union-wide unique single identification number and with the information specified in Annex IX; the provider or prospective provider of high-risk AI systems referred to in points 1, 6 and 7 of Annex III in the areas of law enforcement, migration, asylum and border control management, has registered the testing in real-world conditions in the secure non-public section of the EU database according to {{Article 49}}(4), point (d), with a Union-wide unique single identification number and with the information specified therein; the provider or prospective provider of high-risk AI systems referred to in point 2 of Annex III has registered the testing in real-world conditions in accordance with {{Article 49}}(5);

(d) the provider or prospective provider conducting the testing in real world conditions is established in the Union or has appointed a legal representative who is established in the Union;

(e) data collected and processed for the purpose of the testing in real world conditions shall be transferred to third countries only provided that appropriate and applicable safeguards under Union law are implemented;

(f) the testing in real world conditions does not last longer than necessary to achieve its objectives and in any case not longer than six months, which may be extended for an additional period of six months, subject to prior notification by the provider or prospective provider to the market surveillance authority, accompanied by an explanation of the need for such an extension;

(g) the subjects of the testing in real world conditions who are persons belonging to vulnerable groups due to their age or disability, are appropriately protected;

(h) where a provider or prospective provider organises the testing in real world conditions in cooperation with one or more deployers or prospective deployers, the latter have been informed of all aspects of the testing that are relevant to their decision to participate, and given the relevant instructions for use of the AI system referred to in {{Article 13}}; the provider or prospective provider and the deployer or prospective deployer shall conclude an agreement specifying their roles and responsibilities with a view to ensuring compliance with the provisions for testing in real world conditions under this Regulation and under other applicable Union and national law;

(i) the subjects of the testing in real world conditions have given informed consent in accordance with {{Article 61}}, or in the case of law enforcement, where the seeking of informed consent would prevent the AI system from being tested, the testing itself and the outcome of the testing in the real world conditions shall not have any negative effect on the subjects, and their personal data shall be deleted after the test is performed;

(j) the testing in real world conditions is effectively overseen by the provider or prospective provider, as well as by deployers or prospective deployers through persons who are suitably qualified in the relevant field and have the necessary capacity, training and authority to perform their tasks;

(k) the predictions, recommendations or decisions of the AI system can be effectively reversed and disregarded.

5. Any subjects of the testing in real world conditions, or their legally designated representative, as appropriate, may, without any resulting detriment and without having to provide any justification, withdraw from the testing at any time by revoking their informed consent and may request the immediate and permanent deletion of their personal data. The withdrawal of the informed consent shall not affect the activities already carried out.

6. In accordance with {{Article 75}}, Member States shall confer on their market surveillance authorities the powers of requiring providers and prospective providers to provide information, of carrying out unannounced remote or on-site inspections, and of performing checks on the conduct of the testing in real world conditions and the related high-risk AI systems. Market surveillance authorities shall use those powers to ensure the safe development of testing in real world conditions.

7. Any serious incident identified in the course of the testing in real world conditions shall be reported to the national market surveillance authority in accordance with {{Article 73}}. The provider or prospective provider shall adopt immediate mitigation measures or, failing that, shall suspend the testing in real world conditions until such mitigation takes place, or otherwise terminate it. The provider or prospective provider shall establish a procedure for the prompt recall of the AI system upon such termination of the testing in real world conditions.

8. Providers or prospective providers shall notify the national market surveillance authority in the Member State where the testing in real world conditions is to be conducted of the suspension or termination of the testing in real world conditions and of the final outcomes.

9. The provider or prospective provider shall be liable under applicable Union and national liability law for any damage caused in the course of their testing in real world conditions.`,
    narrative: '',
    crossReferences: [5, 13, 49, 61, 71, 73, 75, 98]
  },
  72: {
    number: 72,
    title: 'Post-Market Monitoring by Providers and Post-Market Monitoring Plan for High-Risk AI Systems',
    content: `1. Providers shall establish and document a post-market monitoring system in a manner that is proportionate to the nature of the AI technologies and the risks of the high-risk AI system.

2. The post-market monitoring system shall actively and systematically collect, document and analyse relevant data which may be provided by deployers or which may be collected through other sources on the performance of high-risk AI systems throughout their lifetime, and which allow the provider to evaluate the continuous compliance of AI systems with the requirements set out in Chapter III, Section 2. Where relevant, post-market monitoring shall include an analysis of the interaction with other AI systems. This obligation shall not cover sensitive operational data of deployers which are law enforcement authorities.

3. The post-market monitoring system shall be based on a post-market monitoring plan. The post-market monitoring plan shall be part of the technical documentation referred to in Annex IV. The Commission shall adopt an implementing act laying down detailed provisions establishing a template for the post-market monitoring plan and the list of elements to be included in the plan by 2 February 2026. That implementing act shall be adopted in accordance with the examination procedure referred to in {{Article 98}}(2).

4. For high-risk AI systems covered by the Union harmonisation legislation listed in Section A of Annex I, where a post-market monitoring system and plan are already established under that legislation, in order to ensure consistency, avoid duplications and minimise additional burdens, providers shall have a choice of integrating, as appropriate, the necessary elements described in paragraphs 1, 2 and 3 using the template referred in paragraph 3 into systems and plans already existing under that legislation, provided that it achieves an equivalent level of protection. The first subparagraph of this paragraph shall also apply to high-risk AI systems referred to in point 5 of Annex III placed on the market or put into service by financial institutions that are subject to requirements under Union financial services law regarding their internal governance, arrangements or processes.`,
    narrative: '',
    crossReferences: [98]
  },
  79: {
    number: 79,
    title: 'Procedure at National Level for Dealing with AI Systems Presenting a Risk',
    content: `1. AI systems presenting a risk shall be understood as a "product presenting a risk" as defined in Article 3, point 19 of Regulation (EU) 2019/1020, in so far as they present risks to the health or safety, or to fundamental rights, of persons.

2. Where the market surveillance authority of a Member State has sufficient reason to consider an AI system to present a risk as referred to in paragraph 1 of this Article, it shall carry out an evaluation of the AI system concerned in respect of its compliance with all the requirements and obligations laid down in this Regulation. Particular attention shall be given to AI systems presenting a risk to vulnerable groups. Where risks to fundamental rights are identified, the market surveillance authority shall also inform and fully cooperate with the relevant national public authorities or bodies referred to in {{Article 77}}(1). The relevant operators shall cooperate as necessary with the market surveillance authority and with the other national public authorities or bodies referred to in {{Article 77}}(1). Where, in the course of that evaluation, the market surveillance authority or, where applicable the market surveillance authority in cooperation with the national public authority referred to in {{Article 77}}(1), finds that the AI system does not comply with the requirements and obligations laid down in this Regulation, it shall without undue delay require the relevant operator to take all appropriate corrective actions to bring the AI system into compliance, to withdraw the AI system from the market, or to recall it within a period the market surveillance authority may prescribe, and in any event within the shorter of 15 working days, or as provided for in the relevant Union harmonisation legislation. The market surveillance authority shall inform the relevant notified body accordingly. Article 18 of Regulation (EU) 2019/1020 shall apply to the measures referred to in the second subparagraph of this paragraph.

3. Where the market surveillance authority considers that the non-compliance is not restricted to its national territory, it shall inform the Commission and the other Member States without undue delay of the results of the evaluation and of the actions which it has required the operator to take.

4. The operator shall ensure that all appropriate corrective action is taken in respect of all the AI systems concerned that it has made available on the Union market.

5. Where the operator of an AI system does not take adequate corrective action within the period referred to in paragraph 2, the market surveillance authority shall take all appropriate provisional measures to prohibit or restrict the AI system's being made available on its national market or put into service, to withdraw the product or the standalone AI system from that market or to recall it. That authority shall without undue delay notify the Commission and the other Member States of those measures.

6. The notification referred to in paragraph 5 shall include all available details, in particular the information necessary for the identification of the non-compliant AI system, the origin of the AI system and the supply chain, the nature of the non-compliance alleged and the risk involved, the nature and duration of the national measures taken and the arguments put forward by the relevant operator. In particular, the market surveillance authorities shall indicate whether the non-compliance is due to one or more of the following:

(a) non-compliance with the prohibition of the AI practices referred to in {{Article 5}};

(b) a failure of a high-risk AI system to meet requirements set out in Chapter III, Section 2;

(c) shortcomings in the harmonised standards or common specifications referred to in {{Article 40}} and {{Article 41}} conferring a presumption of conformity;

(d) non-compliance with {{Article 50}}.

7. The market surveillance authorities other than the market surveillance authority of the Member State initiating the procedure shall, without undue delay, inform the Commission and the other Member States of any measures adopted and of any additional information at their disposal relating to the non-compliance of the AI system concerned, and, in the event of disagreement with the notified national measure, of their objections.

8. Where, within three months of receipt of the notification referred to in paragraph 5 of this Article, no objection has been raised by either a market surveillance authority of a Member State or by the Commission in respect of a provisional measure taken by a market surveillance authority of another Member State, that measure shall be deemed justified. This shall be without prejudice to the procedural rights of the concerned operator in accordance with Article 18 of Regulation (EU) 2019/1020. The three-month period referred to in this paragraph shall be reduced to 30 days in the event of non-compliance with the prohibition of the AI practices referred to in {{Article 5}} of this Regulation.

9. The market surveillance authorities shall ensure that appropriate restrictive measures are taken in respect of the product or the AI system concerned, such as withdrawal of the product or the AI system from their market, without undue delay.`,
    narrative: '',
    crossReferences: [5, 40, 41, 50, 77]
  }
};
