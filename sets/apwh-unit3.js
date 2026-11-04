/* Study set: AP World History: Modern, Unit 3 (topics 3.1 and 3.2).
   Built straight from the class worksheets (WHAP Unit Three "Land-Based Empires"): every key term
   becomes a matching question and every printed worksheet question becomes a short answer, with
   answers checked against the cited sources. Items marked unsure could not be checked against the
   AMSCO textbook. The first topic, Test-style practice, is original AP-style questions
   covering the ideas in her class review; half of each readiness check comes from it. Format: see README.md. Check it with: node tools/check-set.mjs */
(globalThis.GH_SETS = globalThis.GH_SETS || []).push({
  "id": "apwh-unit3",
  "title": "AP World History: Land-Based Empires",
  "subtitle": "AP World History, Unit 3.1 and 3.2 worksheets",
  "testDate": "2026-11-14",
  "topics": [
    {
      "id": "3x-test",
      "name": "Test-style practice",
      "items": [
        {
          "id": "3x-panipat-guns",
          "type": "mc",
          "stimulus": "In 1526, Babur, a ruler from Central Asia, led a smaller army against the Delhi Sultan Ibrahim Lodi at Panipat in northern India. Babur's soldiers used matchlock guns and field cannon placed behind carts and barriers. Lodi's army had far more soldiers and many war elephants. Babur won and went on to found the Mughal Empire.",
          "q": "Which of the following best explains Babur's victory at Panipat?",
          "options": [
            "Babur's larger force of war elephants broke through the Sultan's lines before his cavalry could form up.",
            "Hindu Rajput princes switched sides during the battle, leaving the Sultan without most of his soldiers.",
            "Portuguese ships on India's west coast brought cannon and gunners to Babur's camp before the battle.",
            "Guns and cannon used in a planned defense let a smaller force beat a larger army."
          ],
          "answer": 3,
          "why": "Babur's guns and cannon, protected by carts, made up for having fewer men. The elephant choice is wrong because the elephants belonged to Lodi, whose army was the larger one.",
          "src": {
            "label": "Wikipedia: Battle of Panipat (1526)",
            "url": "https://en.wikipedia.org/wiki/Battle_of_Panipat_(1526)"
          }
        },
        {
          "id": "3x-gunpowder-rivalry",
          "type": "mc",
          "stimulus": "Cannons and muskets were costly. Only rulers who could tax large territories could pay for them, train gunners, and keep them supplied. In the 1500s the Ottoman, Safavid, and Mughal states all built their armies around these weapons.",
          "q": "What was the most common effect of these weapons on how neighboring empires dealt with one another?",
          "options": [
            "Empires that shared Islam formed a lasting alliance and agreed to stop fighting over their borders.",
            "Local nobles bought their own cannon and broke the empires into many small, independent kingdoms.",
            "European kings controlled the supply of weapons and decided which Asian empires could go to war.",
            "Rivalries and wars between neighbors grew as their armies became stronger."
          ],
          "answer": 3,
          "why": "Stronger armies tempted rulers to expand, so wars between neighbors, like the Ottomans against the Safavids, grew. The alliance choice is wrong because the Muslim empires fought each other often.",
          "src": {
            "label": "Wikipedia: Gunpowder empires",
            "url": "https://en.wikipedia.org/wiki/Gunpowder_empires"
          }
        },
        {
          "id": "3x-chaldiran-effect",
          "type": "mc",
          "stimulus": "In 1514, at the Battle of Chaldiran, the Ottoman army of Sultan Selim I faced the Safavid army of Shah Ismail. The Ottomans used many musketeers and cannon. The Safavid army was mostly mounted warriors with swords and bows. The Ottomans won.",
          "q": "This battle best illustrates which major reason for Ottoman expansion in the 1400s and 1500s?",
          "options": [
            "Ottoman cannon and muskets gave their armies an edge over rivals who relied on cavalry.",
            "A shared Shia faith with the Safavids let Ottoman armies march freely through Persian lands.",
            "Ottoman soldiers were mostly steppe archers on horseback.",
            "European kings sent money and ships to help the sultan beat the Safavids."
          ],
          "answer": 0,
          "why": "Ottoman artillery and muskets beat Safavid cavalry here, and the same edge helped them take Constantinople in 1453 and Egypt in 1517. The Shia choice is wrong because the Ottomans were Sunni and the Safavids' enemies.",
          "src": {
            "label": "Wikipedia: Battle of Chaldiran",
            "url": "https://en.wikipedia.org/wiki/Battle_of_Chaldiran"
          }
        },
        {
          "id": "3x-steppe-shift",
          "type": "mc",
          "stimulus": "For centuries, mounted archers from the Central Asian steppe often conquered farming societies. By the 1600s, large settled empires could defend their borders against nomads and even push into the steppe.",
          "q": "Which of the following best explains this change?",
          "options": [
            "Nomadic peoples settled down as farmers in large numbers and joined the empires by choice.",
            "Settled states could pay for and supply gunpowder weapons, which cut the military edge of mounted archers.",
            "A colder climate killed off the steppe horse herds, so nomads could no longer gather large armies.",
            "Nomadic leaders became Buddhist or Christian and gave up raiding."
          ],
          "answer": 1,
          "why": "Guns and cannon needed money, workshops, and steady supplies, which big farming states had and nomads lacked. The climate choice is wrong because nothing in the passage points to a loss of horses.",
          "src": {
            "label": "Wikipedia: Gunpowder empires",
            "url": "https://en.wikipedia.org/wiki/Gunpowder_empires"
          }
        },
        {
          "id": "3x-nerchinsk-expansion",
          "type": "mc",
          "stimulus": "In 1689, Russia and Qing China signed the Treaty of Nerchinsk to set part of their border in northeast Asia. Both empires had been moving into lands once controlled by Mongol and other nomadic and hunting peoples. They did so with forts, cannons, and muskets.",
          "q": "Which of the following does this situation best show?",
          "options": [
            "Mongol and other nomadic peoples united to stop Russian and Qing expansion and kept control of the region.",
            "Settled empires used firearms and forts to take over lands nomads had long controlled.",
            "Both empires agreed to stop expanding, because forts and firearms in such remote lands cost too much to keep.",
            "Russia and Qing China fought mainly over sea trade with Europe."
          ],
          "answer": 1,
          "why": "Both empires pushed into steppe and Siberian lands with forts and gunpowder weapons. The choice about stopping expansion is wrong because both kept expanding after the treaty.",
          "src": {
            "label": "Wikipedia: Treaty of Nerchinsk",
            "url": "https://en.wikipedia.org/wiki/Treaty_of_Nerchinsk"
          }
        },
        {
          "id": "3x-james-divine-right",
          "type": "mc",
          "stimulus": "King James I of England, who ruled from 1603 to 1625, wrote books and gave speeches arguing that a king gets his power from God. He told Parliament that kings answer to God alone and should not be judged by their subjects.",
          "q": "Which of the following best explains how this idea helped James I?",
          "options": [
            "It showed his power came from a vote of the nobles.",
            "It gave his rule a religious basis, so resisting him could be treated as a sin.",
            "It accepted that Parliament could remove a king who broke the law, which won him its members' support.",
            "It placed the Pope above English kings, winning James Catholic support."
          ],
          "answer": 1,
          "why": "If a king's power comes from God, disobeying the king means disobeying God. The vote choice is wrong because divine right says power does not come from nobles or the people.",
          "src": {
            "label": "Wikipedia: James VI and I",
            "url": "https://en.wikipedia.org/wiki/James_VI_and_I"
          }
        },
        {
          "id": "3x-versailles-court",
          "type": "mc",
          "stimulus": "Beginning in the 1680s, King Louis XIV of France made the Palace of Versailles the home of his government. The palace had a Hall of Mirrors and huge gardens. Many French nobles lived there and took part in the king's daily routines, such as watching him wake up and eat.",
          "q": "Which of the following best explains why Louis XIV did this?",
          "options": [
            "It served as a walled fortress where the army could hold out against a Spanish invasion of northern France.",
            "It gave an elected assembly of nobles a permanent place to meet and vote on the kingdom's new laws.",
            "It showed he had agreed to share his power with the nobles in return for their taxes.",
            "It showed off his wealth and power and kept the nobles living near him at court, away from their own estates."
          ],
          "answer": 3,
          "why": "Court life kept nobles busy, dependent on the king, and away from their local power. The assembly choice is wrong because Louis XIV was an absolute monarch who did not share power with an elected body.",
          "src": {
            "label": "Wikipedia: Palace of Versailles",
            "url": "https://en.wikipedia.org/wiki/Palace_of_Versailles"
          }
        },
        {
          "id": "3x-grand-buildings",
          "type": "mc",
          "stimulus": "The Mughal emperor Shah Jahan had the Taj Mahal built in the 1600s as a tomb of white marble. The Ottoman sultan Suleiman had the Suleymaniye Mosque built in the 1500s, with a huge dome and many schools. King Louis XIV of France spent huge sums on the Palace of Versailles in the 1600s.",
          "q": "Which of the following best explains what these building projects had in common?",
          "options": [
            "All three were built mainly as strongholds to protect rulers from attack by cannon and other gunpowder weapons.",
            "All three were paid for mostly with taxes on European merchants who traded in each ruler's ports.",
            "Rulers used grand buildings to show their wealth, power, and glory.",
            "All three were designed by architects from Italy and France who worked for rulers across Eurasia."
          ],
          "answer": 2,
          "why": "Each ruler used a grand building to show that his state was rich and his rule was great. The stronghold choice is wrong because these were a tomb, a mosque, and a palace, not forts.",
          "src": {
            "label": "Wikipedia: Taj Mahal",
            "url": "https://en.wikipedia.org/wiki/Taj_Mahal"
          }
        },
        {
          "id": "3x-akbar-tolerance",
          "type": "mc",
          "stimulus": "The Mughal emperor Akbar ruled from 1556 to 1605, when most people in his empire were Hindu. In 1564 he ended the jizya, a tax on non-Muslims. He brought Hindu Rajput leaders into high posts and held discussions among scholars of many faiths.",
          "q": "Which of the following best describes an effect of Akbar's policies?",
          "options": [
            "They led Muslim nobles to overthrow Akbar and divide the empire among themselves.",
            "They won the loyalty of many Hindu subjects and helped make the empire more stable.",
            "They turned the empire into a Hindu kingdom, with Rajput princes replacing Muslim emperors on the throne.",
            "They angered the Safavid shah so much that he invaded northern India and took Delhi from the Mughals."
          ],
          "answer": 1,
          "why": "Fair treatment gave Hindu subjects and Rajput leaders a reason to support Mughal rule. The Hindu kingdom choice is wrong because Muslim Mughal emperors kept the throne; Akbar gave others a share in government.",
          "src": {
            "label": "Wikipedia: Akbar",
            "url": "https://en.wikipedia.org/wiki/Akbar"
          }
        },
        {
          "id": "3x-spain-vs-akbar",
          "type": "mc",
          "stimulus": "In 1492, King Ferdinand and Queen Isabella of Spain ordered the Jews of Spain to become Christians or leave. Tens of thousands left. In the late 1500s, the Mughal emperor Akbar allowed Hindus, Muslims, Jains, Christians, and others in India to practice their faiths openly.",
          "q": "Which of the following best compares these two policies?",
          "options": [
            "Spain welcomed people of many faiths, while Akbar pushed his subjects to accept Islam.",
            "Both rulers ended special taxes on religious minorities to win their support for costly wars.",
            "Spain demanded that everyone share one faith, while Akbar accepted people of many faiths in his empire.",
            "Both rulers forced religious minorities to leave, because they feared those groups would side with enemies."
          ],
          "answer": 2,
          "why": "Spain's order demanded religious uniformity, while Akbar tolerated many religions. The first choice reverses the two policies.",
          "src": {
            "label": "Wikipedia: Alhambra Decree",
            "url": "https://en.wikipedia.org/wiki/Alhambra_Decree"
          }
        },
        {
          "id": "3x-aurangzeb-jizya",
          "type": "mc",
          "stimulus": "The Mughal emperor Aurangzeb ruled from 1658 to 1707. In 1679 he brought back the jizya, a tax on non-Muslims that Akbar had ended. He also ordered some Hindu temples destroyed. During his reign, revolts by Marathas, Sikhs, and other groups grew stronger.",
          "q": "Which of the following best explains the effect of Aurangzeb's religious policies?",
          "options": [
            "They united Hindu and Muslim subjects behind the emperor, which helped him crush the Maratha revolt quickly.",
            "They angered many non-Muslim subjects and added to the strain on the empire.",
            "They raised so much tax money that the empire became richer and more peaceful than under Akbar.",
            "They ended the wars with the Sikhs by giving Sikh leaders high posts in the government."
          ],
          "answer": 1,
          "why": "Pressure on non-Muslims weakened their loyalty and fed revolts. The choice about crushing the Marathas is wrong because the Maratha revolt grew stronger during his reign.",
          "src": {
            "label": "Wikipedia: Aurangzeb",
            "url": "https://en.wikipedia.org/wiki/Aurangzeb"
          }
        },
        {
          "id": "3x-nanak-blend",
          "type": "mc",
          "stimulus": "Guru Nanak, born in 1469 in Punjab, founded Sikhism. He taught that there is one God, whether people use Hindu or Muslim names for God. He rejected caste divisions and taught through songs in the local language.",
          "q": "Which of the following best explains why Sikhism appealed to many people in northern India?",
          "options": [
            "It was spread by Sikh armies that conquered Punjab and required the people there to convert.",
            "It promised that Mughal emperors would lower taxes for every family that joined the new faith.",
            "It kept the caste system but let lower castes become priests after many years of study.",
            "It blended ideas from nearby Hindu and Muslim traditions and welcomed people of every caste."
          ],
          "answer": 3,
          "why": "Sikh teachings drew on Hindu and Muslim ideas people already knew and welcomed every caste. The caste system choice is wrong because Nanak rejected caste divisions.",
          "src": {
            "label": "Wikipedia: Sikhism",
            "url": "https://en.wikipedia.org/wiki/Sikhism"
          }
        },
        {
          "id": "3x-khalsa-origin",
          "type": "mc",
          "stimulus": "Mughal rulers executed two Sikh Gurus: Guru Arjan in 1606 and Guru Tegh Bahadur in 1675. In 1699, Guru Gobind Singh founded the Khalsa, a community of initiated Sikhs who promised to protect their faith and carry weapons.",
          "q": "Which of the following best explains the founding of the Khalsa?",
          "options": [
            "Mughal persecution pushed Sikhs to organize to defend their community.",
            "Mughal emperors asked the Sikhs to raise an army that would help them fight the Safavids in the west.",
            "Sikh leaders hoped to bring back the Delhi Sultanate, which had ruled northern India before the Mughals.",
            "Sikh leaders planned to force the Mughal emperor to convert, so Sikhism would become the state religion."
          ],
          "answer": 0,
          "why": "After two Gurus were executed, Sikhs built a community that could protect itself. The Safavid choice is wrong because the Khalsa formed against Mughal pressure, not to serve the Mughals.",
          "src": {
            "label": "Wikipedia: Khalsa",
            "url": "https://en.wikipedia.org/wiki/Khalsa"
          }
        },
        {
          "id": "3x-third-rome",
          "type": "mc",
          "stimulus": "The Ottomans captured Constantinople, the Byzantine capital, in 1453. Ivan III of Moscow then married Sophia, a niece of the last Byzantine emperor, and used the Byzantine double-headed eagle as a symbol. Later, a Russian monk described Moscow as the 'Third Rome.'",
          "q": "Which of the following best explains these actions by Moscow's rulers?",
          "options": [
            "They wanted to unite their church with the Catholic Church under the Pope.",
            "They wanted Moscow seen as the heir to Byzantium and the new leader of all Orthodox Christians.",
            "They hoped to win an Ottoman alliance by honoring Byzantium.",
            "They wanted to end Orthodox traditions in Russia and adopt the customs of Western European courts."
          ],
          "answer": 1,
          "why": "With Constantinople gone, Moscow's rulers claimed Byzantine heritage and a duty to lead Orthodox Christians. The Catholic choice is wrong because Russia's rulers saw themselves as defenders of Orthodoxy against Rome.",
          "src": {
            "label": "Wikipedia: Third Rome",
            "url": "https://en.wikipedia.org/wiki/Third_Rome"
          }
        },
        {
          "id": "3x-kazan-astrakhan",
          "type": "mc",
          "stimulus": "In 1552, Tsar Ivan IV of Russia captured the city of Kazan, and in 1556 he took Astrakhan. Both cities were Muslim Tatar states along the Volga River. After these conquests, Russian traders, soldiers, and settlers began moving east into Siberia.",
          "q": "Which of the following was a result of these conquests?",
          "options": [
            "Russia's new Tatar subjects took control of the government in Moscow and made Islam the state religion.",
            "Russia moved its capital from Moscow to Kazan to be closer to the trade on the Volga.",
            "Russia won ports on the Baltic Sea and began building a large navy to trade with Western Europe.",
            "Russia began to rule a large, multiethnic empire that included Muslim Tatars and other non-Russian peoples."
          ],
          "answer": 3,
          "why": "Taking the Volga region added Muslim and other peoples to Russia and opened the way east. The Baltic choice is wrong because Russia had no real Baltic navy until Peter the Great built one in the early 1700s.",
          "src": {
            "label": "Wikipedia: Ivan the Terrible",
            "url": "https://en.wikipedia.org/wiki/Ivan_the_Terrible"
          }
        },
        {
          "id": "3x-peter-west",
          "type": "mc",
          "stimulus": "Tsar Peter the Great traveled in Western Europe in 1697 and 1698. After he returned, he ordered nobles to shave their beards or pay a tax, brought in foreign experts, and built a navy. In 1703 he began building a new city, Saint Petersburg, on the Baltic coast.",
          "q": "Which of the following best explains Peter's goals?",
          "options": [
            "He wanted to cut Russia off from Europe and revive old customs.",
            "He wanted to share power with an elected assembly of nobles, merchants, and peasants, as in Western Europe.",
            "He wanted to strengthen Russia by borrowing Western technology and military methods.",
            "He wanted to replace the Russian Orthodox Church with the Protestant churches he had seen in Holland."
          ],
          "answer": 2,
          "why": "Peter borrowed ideas and skills from Western Europe to make Russia a stronger military power. The assembly choice is wrong because Peter ruled as an absolute monarch and shared power with no elected body.",
          "src": {
            "label": "Wikipedia: Peter the Great",
            "url": "https://en.wikipedia.org/wiki/Peter_the_Great"
          }
        },
        {
          "id": "3x-qing-exams",
          "type": "mc",
          "stimulus": "The Manchus who founded the Qing dynasty in 1644 came from outside China. Yet they kept the civil service examinations, the study of Confucian texts, and much of the Ming system of government.",
          "q": "Which of the following best explains why the Qing kept these Ming institutions?",
          "options": [
            "Keeping familiar systems helped the new Manchu rulers win the cooperation of Han Chinese scholar-officials.",
            "The Manchus had no written language or laws of their own, so they had no other way to run a state.",
            "They planned to replace Confucian learning with Manchu traditions.",
            "They wanted the exams to choose officials for China's growing sea trade with Europe."
          ],
          "answer": 0,
          "why": "The Qing needed Han Chinese officials to help rule, and the old system gave those officials a place. The written language choice is wrong because the Manchus already had their own script and leaders before 1644.",
          "src": {
            "label": "Wikipedia: Imperial examination",
            "url": "https://en.wikipedia.org/wiki/Imperial_examination"
          }
        },
        {
          "id": "3x-tribute-system",
          "type": "mc",
          "stimulus": "Under the Ming dynasty, foreign rulers who wanted to trade with China were expected to send tribute missions to the emperor. Envoys had to perform ceremonies showing respect, and in return they received gifts and trading rights. Trade outside this system was limited by the government.",
          "q": "Which of the following does this system best show about Ming China?",
          "options": [
            "Chinese rulers treated foreign states as equal partners and signed trade treaties with each one.",
            "The Ming government depended mainly on the gold and goods that tribute missions brought to pay its costs.",
            "Chinese rulers saw China as the center of the world and treated other states as lesser.",
            "The Ming hoped to end all contact with Southeast Asia and other nearby regions."
          ],
          "answer": 2,
          "why": "The ceremonies placed the emperor above foreign rulers. The choice about depending on tribute is wrong because the gifts the Ming gave back were often worth more than the tribute.",
          "src": {
            "label": "Wikipedia: Tributary system of China",
            "url": "https://en.wikipedia.org/wiki/Tributary_system_of_China"
          }
        },
        {
          "id": "3x-ricci-jesuits",
          "type": "mc",
          "stimulus": "The Jesuit Matteo Ricci reached China in the 1580s. He learned Chinese, dressed as a scholar, and impressed officials with maps, clocks, and knowledge of mathematics and astronomy. Later Jesuits served at the imperial court, where they helped with the calendar.",
          "q": "Which of the following best explains why the Chinese court accepted the Jesuits?",
          "options": [
            "They arrived with Portuguese soldiers whose guns forced the emperor to let missionaries into the court.",
            "Their skill in astronomy, mathematics, and mapmaking was useful to the emperor and his officials.",
            "The emperor wanted all Chinese officials to become Catholic so they would share one faith.",
            "They were hired to teach Confucian texts, which Chinese scholars had mostly stopped reading."
          ],
          "answer": 1,
          "why": "The court valued Jesuit knowledge, especially for keeping the calendar accurate. The soldiers choice is wrong because the Jesuits relied on learning and respect, not force.",
          "src": {
            "label": "Wikipedia: Matteo Ricci",
            "url": "https://en.wikipedia.org/wiki/Matteo_Ricci"
          }
        },
        {
          "id": "3x-luther-spread",
          "type": "mc",
          "stimulus": "In 1517, the German monk Martin Luther criticized the Church's sale of indulgences. His writings were printed quickly and in large numbers. Within a few years, many people and some rulers in northern Europe supported his ideas, and the unity of Western Christianity broke.",
          "q": "Which of the following best explains why Luther's ideas spread so widely?",
          "options": [
            "The Pope agreed with Luther at first and ordered priests across Europe to read his writings aloud in church.",
            "Luther was a German prince whose army forced neighboring lands to accept his ideas.",
            "Printing made his writings cheap to copy, and some rulers wanted independence from Rome.",
            "The Ottoman sultan paid printers to spread Luther's writings so that Christian Europe would be divided."
          ],
          "answer": 2,
          "why": "Printing spread Luther's ideas fast, and some rulers backed him for their own reasons. The Pope choice is wrong because the Pope condemned Luther and excommunicated him in 1521.",
          "src": {
            "label": "Wikipedia: Protestant Reformation",
            "url": "https://en.wikipedia.org/wiki/Protestant_Reformation"
          }
        },
        {
          "id": "3x-missions-abroad",
          "type": "mc",
          "stimulus": "By the mid-1500s, much of northern Europe had left the authority of the Pope. At the same time, Spanish and Portuguese ships were reaching the Americas, Africa, and Asia. The Catholic Church founded new groups, such as the Jesuits, and sent them overseas.",
          "q": "Which of the following best explains why the Catholic Church sent missionaries abroad?",
          "options": [
            "The Church hoped that winning converts in Africa would persuade Protestant rulers in Europe to return to Rome.",
            "The Church wanted missionaries to stop Spanish and Portuguese merchants from trading in Asia.",
            "The Church sought new followers overseas to replace those it lost in Europe.",
            "The Church had been driven out of Italy and Spain."
          ],
          "answer": 2,
          "why": "After losing members to Protestant churches, Catholic leaders worked to grow their faith in new places. The southern Europe choice is wrong because Spain, Portugal, and Italy stayed Catholic.",
          "src": {
            "label": "Wikipedia: Counter-Reformation",
            "url": "https://en.wikipedia.org/wiki/Counter-Reformation"
          }
        },
        {
          "id": "3x-istanbul-crossroads",
          "type": "mc",
          "stimulus": "The Ottoman capital, Istanbul, sat on the Bosporus strait, where Europe meets Asia. The empire also held ports on the Mediterranean and Black Seas and controlled land routes into the Middle East and North Africa.",
          "q": "Which of the following best explains how this location helped the Ottoman Empire?",
          "options": [
            "Surrounded by water on several sides, the empire was safe from attack and rarely had to fight wars.",
            "The sultans could tax and protect trade moving between Europe, Asia, and Africa.",
            "Control of the straits gave the Ottomans a monopoly on Atlantic trade between Europe and the Americas.",
            "The location cut the empire off from the Mediterranean Sea."
          ],
          "answer": 1,
          "why": "Many trade routes crossed Ottoman lands, which brought the state wealth. The safety choice is wrong because the Ottomans fought many wars, against the Safavids, Habsburgs, and Venice.",
          "src": {
            "label": "Wikipedia: Ottoman Empire",
            "url": "https://en.wikipedia.org/wiki/Ottoman_Empire"
          }
        },
        {
          "id": "3x-sinan-talent",
          "type": "mc",
          "stimulus": "Mimar Sinan was born into a Christian family and was taken into Ottoman service as a boy through the devshirme system. He became a soldier and engineer, and then chief architect for several sultans. He designed hundreds of mosques, schools, bridges, and other buildings.",
          "q": "Which of the following does Sinan's career best show about the Ottoman Empire?",
          "options": [
            "The empire let talented people from many backgrounds, even Christian-born boys, rise to high posts.",
            "Only men born into Turkish Muslim families could hold high posts in the sultan's government.",
            "The sultans relied mainly on architects hired from Italy to design their most important mosques and bridges.",
            "The devshirme system was used mainly to punish Christian families who refused to pay taxes."
          ],
          "answer": 0,
          "why": "Sinan began as a Christian boy yet became one of the most important men in the empire. The Turkish Muslim choice is wrong because his own life shows that high posts were not limited to Turkish-born Muslims.",
          "src": {
            "label": "Wikipedia: Mimar Sinan",
            "url": "https://en.wikipedia.org/wiki/Mimar_Sinan"
          }
        },
        {
          "id": "3x-selim-safavid",
          "type": "mc",
          "stimulus": "In 1501, Shah Ismail made Twelver Shia Islam the official religion of the Safavid state. The Ottoman sultans were Sunni Muslims. Many Safavid supporters, called Qizilbash, lived inside Ottoman Anatolia. In 1514, Sultan Selim I marched against the Safavids.",
          "q": "Which of the following best explains Selim's attack?",
          "options": [
            "He needed to cross Safavid land to reach Mughal India, which he hoped to conquer for its wealth.",
            "The Safavid navy had blocked Ottoman ports in the eastern Mediterranean and cut off grain shipments.",
            "The Safavids had stopped paying tribute to the sultan.",
            "He saw Safavid power and its Shia supporters in Anatolia as a threat to his rule."
          ],
          "answer": 3,
          "why": "Religious difference and Safavid supporters inside Ottoman lands made the Safavids a danger to Ottoman rule. The navy choice is wrong because the Safavids had no Mediterranean coast.",
          "src": {
            "label": "Wikipedia: Safavid dynasty",
            "url": "https://en.wikipedia.org/wiki/Safavid_dynasty"
          }
        },
        {
          "id": "3x-overland-trade-disrupted",
          "type": "mc",
          "stimulus": "For over a century, the Sunni Ottomans and the Shia Safavids fought wars over land in Iraq, the Caucasus, and eastern Anatolia. Silk and other goods from Asia often traveled overland through Safavid territory to Ottoman markets.",
          "q": "Which of the following best explains the effect of this conflict on trade?",
          "options": [
            "Fighting and closed borders made overland trade riskier and more costly.",
            "The wars pushed merchants away from the sea, so nearly all Asian silk went overland through the war zone.",
            "The two empires agreed to share silk profits during the wars, which sharply increased trade between them.",
            "European demand for silk ended during the wars."
          ],
          "answer": 0,
          "why": "War in the border lands made merchants pay more and take more risks. The demand choice is wrong because Persian silk stayed in high demand in Europe while the routes grew harder to use.",
          "src": {
            "label": "Wikipedia: Safavid dynasty",
            "url": "https://en.wikipedia.org/wiki/Safavid_dynasty"
          }
        },
        {
          "id": "3x-jahangir-painting",
          "type": "mc",
          "stimulus": "Around 1615 to 1618, the court painter Bichitr made a painting for the Mughal emperor Jahangir. It shows Jahangir with a glowing halo of sun and moon, seated on a throne shaped like an hourglass. He hands a book to a Sufi holy man, while an Ottoman sultan and King James I of England stand waiting nearby.",
          "q": "The painter's main purpose was most likely to",
          "options": [
            "record a real meeting between Jahangir, James I, and the Ottoman sultan.",
            "show that Jahangir planned to give up the throne to become a Sufi.",
            "warn that Ottoman and English armies would soon conquer the Mughal Empire unless it changed.",
            "show Jahangir as a ruler blessed by God and more important than the other kings of the world."
          ],
          "answer": 3,
          "why": "The halo, the grand throne, and kings left waiting all make Jahangir look blessed and more important than other rulers. The meeting choice is wrong because neither James I nor the Ottoman sultan ever visited Jahangir; the scene is symbolic.",
          "src": {
            "label": "Wikipedia: Jahangir Preferring a Sufi Shaikh to Kings",
            "url": "https://en.wikipedia.org/wiki/Jahangir_Preferring_a_Sufi_Shaikh_to_Kings"
          }
        },
        {
          "id": "3x-akbarnama-pov",
          "type": "mc",
          "stimulus": "The Akbarnama is a long history of the reign of the Mughal emperor Akbar, written in Persian around 1600. It praises Akbar's wisdom and describes his victories in great detail.",
          "q": "All of the following facts are true. Which would be most useful for judging the Akbarnama's point of view about Akbar?",
          "options": [
            "Akbar ordered it, and its author, Abul Fazl, was one of his closest courtiers.",
            "It was written in Persian, which was the main language of writing and government at the Mughal court.",
            "An English translation by Henry Beveridge was published in three volumes between 1902 and 1939.",
            "Copies survive today in museums in India and Britain."
          ],
          "answer": 0,
          "why": "A writer chosen by the emperor and close to him had good reason to praise him, which explains the book's admiring tone. The Persian language fact is true but says nothing about whose side the author was on.",
          "src": {
            "label": "Wikipedia: Akbarnama",
            "url": "https://en.wikipedia.org/wiki/Akbarnama"
          }
        },
        {
          "id": "3x-janissaries",
          "type": "mc",
          "stimulus": "The Janissaries were the Ottoman sultan's own infantry. Most were recruited as boys through the devshirme, trained for years, and paid regular salaries. By the mid-1400s they fought with firearms, and they were meant to be loyal only to the sultan.",
          "q": "Which of the following best explains how a force like the Janissaries helped the sultans hold power?",
          "options": [
            "A trained army loyal to the sultan gave him force that did not depend on local lords.",
            "Elected officers in the corps let ordinary soldiers vote on which prince should become the next sultan.",
            "Most Janissaries came from old Turkish Muslim noble families.",
            "Janissaries were part-time farmers who fought only in wartime."
          ],
          "answer": 0,
          "why": "A paid, full-time army that answered to the sultan let him enforce his rule and show his strength. The Turkish families choice is wrong because most Janissaries were taken as Christian boys through the devshirme.",
          "src": {
            "label": "Wikipedia: Janissary",
            "url": "https://en.wikipedia.org/wiki/Janissary"
          }
        },
        {
          "id": "3x-qianlong-letter",
          "type": "mc",
          "stimulus": "Since 1757, the Qing had allowed European ships to trade only at the port of Canton (Guangzhou). In 1793, a British mission asked the Qianlong Emperor to open more ports and accept a British ambassador in Beijing. In a letter to King George III, the emperor refused and said China already had everything it needed.",
          "q": "The emperor's letter was most likely intended to",
          "options": [
            "assert China's superiority and keep foreign trade under strict control.",
            "invite British merchants to trade at every Chinese port in exchange for silver, which China wanted.",
            "ask Britain for help in defending China's northern borders against the growing Russian Empire.",
            "show that the Qing saw Britain as an equal partner and wanted a formal treaty of friendship."
          ],
          "answer": 0,
          "why": "The emperor refused every request and wrote as if George III were beneath him, which kept trade on Qing terms. The every-port choice is wrong because he rejected opening more ports.",
          "src": {
            "label": "Wikipedia: Macartney Embassy",
            "url": "https://en.wikipedia.org/wiki/Macartney_Embassy"
          }
        },
        {
          "id": "3x-tokugawa-limits",
          "type": "mc",
          "stimulus": "Portuguese and Spanish missionaries converted many Japanese, especially on the island of Kyushu. In 1614 the Tokugawa shogunate ordered missionaries out of Japan. After a large, mostly Christian revolt at Shimabara in 1637 and 1638, it expelled the Portuguese and let only the Dutch and Chinese trade, at Nagasaki.",
          "q": "Which of the following best explains these policies?",
          "options": [
            "Japan's rulers wanted to end all foreign trade, so they closed every port to ships from other countries.",
            "The shogun had become a Protestant and favored the Dutch.",
            "The shogun feared Christianity and foreign influence would weaken his control.",
            "Japan rewarded the Dutch for helping it defeat a Chinese invasion."
          ],
          "answer": 2,
          "why": "The shogunate saw missionaries and their converts as a threat to its power, so it limited contact with outsiders. The choice about ending all trade is wrong because Dutch and Chinese merchants kept trading at Nagasaki.",
          "src": {
            "label": "Wikipedia: Sakoku",
            "url": "https://en.wikipedia.org/wiki/Sakoku"
          }
        },
        {
          "id": "3x-luther-critique",
          "type": "mc",
          "stimulus": "In 1515, Pope Leo X offered a special indulgence, a release from punishment for sins, to raise money for rebuilding St. Peter's Basilica in Rome. In 1517, Martin Luther objected. He argued that buying pardons could not replace real repentance, and he asked why a very rich pope needed money from poor believers.",
          "q": "Luther's objections best reflect which Protestant claim about the Catholic Church?",
          "options": [
            "It had moved too quickly to translate the Bible into German and the other languages people spoke.",
            "It had given kings too little say over choosing bishops.",
            "It should have sold pardons only to the rich.",
            "Its leaders had been corrupted by wealth and power and were using faith to raise money."
          ],
          "answer": 3,
          "why": "Luther's complaint is that Church leaders used faith to raise money, a sign that wealth and power had corrupted them. The translation choice is wrong because Protestants wanted the Bible in everyday languages, and Luther himself translated it into German.",
          "src": {
            "label": "Wikipedia: Ninety-five Theses",
            "url": "https://en.wikipedia.org/wiki/Ninety-five_Theses"
          }
        },
        {
          "id": "3x-med-trade",
          "type": "mc",
          "stimulus": "In the 1500s, Venetian merchants bought spices and silk in eastern Mediterranean ports under Ottoman rule and shipped them to Europe. In 1538, an Ottoman fleet defeated a larger Christian fleet at Preveza, off the coast of Greece. For about 30 years after, the Ottoman navy was the strongest in the Mediterranean.",
          "q": "Which of the following best describes who dominated Mediterranean trade in the 1500s?",
          "options": [
            "English and Dutch trading companies, which had pushed Venetian merchants out of the eastern Mediterranean",
            "The Byzantine Empire, which still controlled the straits between the Black Sea and the Mediterranean",
            "The Ottoman Empire and Italian trading cities such as Venice",
            "Portugal and Spain, whose new sea routes around Africa had made them the main traders in the region"
          ],
          "answer": 2,
          "why": "Venice kept trading through Ottoman ports, and the Ottoman navy ruled the sea after 1538. The English and Dutch choice is wrong because their companies did not become major Mediterranean traders until the 1600s.",
          "src": {
            "label": "Wikipedia: Battle of Preveza",
            "url": "https://en.wikipedia.org/wiki/Battle_of_Preveza"
          }
        }
      ]
    },
    {
      "id": "31-overview",
      "name": "Gunpowder empires and Europe in 1450",
      "items": [
        {
          "id": "31-term-gunpowder-empires",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Name for the large land-based empires of about 1450 to 1750 that used cannons and muskets to conquer neighbors and hold their land.",
          "options": [
            "Gunpowder Empires",
            "Gutenberg Printing Press",
            "Ghazi Ideal",
            "Caste"
          ],
          "answer": 0,
          "why": "Your worksheet names Russia, the Mughals, the Ottomans and the Safavids. Many historians count only the three Islamic ones.",
          "src": {
            "label": "Wikipedia: Gunpowder empires",
            "url": "https://en.wikipedia.org/wiki/Gunpowder_empires"
          }
        },
        {
          "id": "31-term-gutenberg",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Machine with movable metal type built in Germany around 1450 that made books cheaper and helped ideas spread quickly across Europe.",
          "options": [
            "Gutenberg Printing Press",
            "Gunpowder Empires",
            "Volga River",
            "Ghazi Ideal"
          ],
          "answer": 0,
          "why": "It is one of the events that marks the start of the early modern period.",
          "src": {
            "label": "Wikipedia: Printing press",
            "url": "https://en.wikipedia.org/wiki/Printing_press"
          }
        },
        {
          "id": "31-q-four-empires",
          "type": "short",
          "q": "Who were the four Gunpowder Empires?",
          "answer": "Russia, the Mughal Empire, the Ottoman Empire and the Safavid Empire.",
          "accept": [
            "russia, mughal, ottoman, safavid"
          ],
          "why": "That is the worksheet's list. Many historians count only the three Islamic ones (Ottoman, Safavid, Mughal), but teach the four on your worksheet.",
          "src": {
            "label": "Wikipedia: Gunpowder empires",
            "url": "https://en.wikipedia.org/wiki/Gunpowder_empires"
          }
        },
        {
          "id": "31-q-art-legacies",
          "type": "short",
          "q": "Why did the Gunpowder Empires craft artistic and architectural legacies?",
          "answer": "To show off the ruler's power, wealth and right to rule, and to glorify their religion.",
          "accept": [
            "to show power"
          ],
          "why": "Grand mosques, palaces and paintings told subjects and rivals that the ruler was strong and legitimate.",
          "src": {
            "label": "Wikipedia: Gunpowder empires",
            "url": "https://en.wikipedia.org/wiki/Gunpowder_empires"
          }
        },
        {
          "id": "31-q-europe-unique",
          "type": "short",
          "q": "What did Europe's expansion involve that was unique from the Gunpowder Empires?",
          "answer": "Europeans expanded overseas by sea, building colonies and trade networks across oceans, while the Gunpowder Empires grew over land.",
          "accept": [
            "overseas",
            "by sea"
          ],
          "why": "Gunpowder empires were land-based. Europe's new empires crossed the Atlantic and Indian Oceans.",
          "src": {
            "label": "Wikipedia: Early modern period",
            "url": "https://en.wikipedia.org/wiki/Early_modern_period"
          }
        },
        {
          "id": "31-q-year-1450",
          "type": "short",
          "q": "What is significant about the year 1450?",
          "answer": "It is about when the early modern period begins, as the Gutenberg printing press appears and the Ottomans are about to take Constantinople.",
          "accept": [
            "start of early modern period"
          ],
          "why": "Historians use the mid-1400s as the dividing line between the medieval period and the early modern period.",
          "src": {
            "label": "Wikipedia: Early modern period",
            "url": "https://en.wikipedia.org/wiki/Early_modern_period"
          }
        },
        {
          "id": "31-q-early-modern-events",
          "type": "short",
          "q": "What events signal the beginning of the early modern period (the mid-1450s)?",
          "answer": "The Ottoman capture of Constantinople in 1453 and the invention of the Gutenberg printing press around 1450.",
          "accept": [
            "fall of constantinople",
            "printing press"
          ],
          "why": "The 1453 fall of Constantinople ended the Byzantine Empire, and printing spread ideas faster than ever.",
          "src": {
            "label": "Wikipedia: Early modern period",
            "url": "https://en.wikipedia.org/wiki/Early_modern_period"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-monarchs-control",
          "type": "short",
          "q": "Monarchies in Europe in 1450 wanted to control:",
          "answer": "Taxes, trade and their powerful nobles, so they could build stronger central governments.",
          "accept": [
            "taxes"
          ],
          "why": "Kings wanted money and armies they controlled, instead of depending on nobles.",
          "src": {
            "label": "Wikipedia: Early modern period",
            "url": "https://en.wikipedia.org/wiki/Early_modern_period"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-rising-class",
          "type": "short",
          "q": "Which social class was becoming more powerful in Europe?",
          "answer": "The merchant (middle) class, who grew rich from trade and banking.",
          "accept": [
            "merchants",
            "middle class"
          ],
          "why": "Trade made merchants wealthy, and kings often allied with them against the old nobility.",
          "src": {
            "label": "Wikipedia: Bourgeoisie",
            "url": "https://en.wikipedia.org/wiki/Bourgeoisie"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        }
      ]
    },
    {
      "id": "31-russia",
      "name": "Russia expands",
      "items": [
        {
          "id": "31-term-ivan-iv",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Russian ruler of the 1500s, the first to be crowned tsar, nicknamed 'the Terrible', who conquered Kazan and Astrakhan and pushed Russia's border east.",
          "options": [
            "Ivan IV",
            "Mehmed II",
            "Suleiman I",
            "Akbar"
          ],
          "answer": 0,
          "why": "His conquests opened the Volga River and the road to Siberia.",
          "src": {
            "label": "Wikipedia: Ivan the Terrible",
            "url": "https://en.wikipedia.org/wiki/Ivan_the_Terrible"
          }
        },
        {
          "id": "31-term-volga",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Longest river in Europe, flowing south into the Caspian Sea, and a key trade route that Russia wanted to control.",
          "options": [
            "Volga River",
            "Tamerlane",
            "Caste",
            "Shah"
          ],
          "answer": 0,
          "why": "Controlling it gave Russia trade with Central Asia and Persia.",
          "src": {
            "label": "Wikipedia: Volga",
            "url": "https://en.wikipedia.org/wiki/Volga"
          }
        },
        {
          "id": "31-q-influenced-by",
          "type": "short",
          "q": "Which two regions was Russia influenced by?",
          "answer": "Europe and Asia.",
          "accept": [
            "europe and asia"
          ],
          "why": "Russia sits across both, with Orthodox Christian and Byzantine ties to the west and Mongol rule from the east.",
          "src": {
            "label": "Wikipedia: Muscovy",
            "url": "https://en.wikipedia.org/wiki/Muscovy"
          }
        },
        {
          "id": "31-q-ivan-east",
          "type": "short",
          "q": "How did Ivan IV extend the border of Russia eastward?",
          "answer": "He conquered the Tatar khanates of Kazan and Astrakhan using gunpowder weapons, which opened the way into Siberia.",
          "accept": [
            "conquered kazan and astrakhan"
          ],
          "why": "Muskets and cannons gave his army the edge over the Tatar forces.",
          "src": {
            "label": "Wikipedia: Ivan the Terrible",
            "url": "https://en.wikipedia.org/wiki/Ivan_the_Terrible"
          }
        },
        {
          "id": "31-q-expansion-depend",
          "type": "short",
          "q": "What did Russia's expansion depend on?",
          "answer": "Gunpowder weapons and the Cossacks who fought for the tsar.",
          "accept": [
            "gunpowder",
            "gunpowder weapons"
          ],
          "why": "Firearms let small Russian forces beat larger groups in Siberia.",
          "src": {
            "label": "Wikipedia: Russian conquest of Siberia",
            "url": "https://en.wikipedia.org/wiki/Russian_conquest_of_Siberia"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-cossacks",
          "type": "short",
          "q": "Who were the Cossacks and what did they do?",
          "answer": "Free warrior-settlers of the steppe frontier who served the Russian tsars as soldiers and explorers and helped conquer Siberia.",
          "accept": [
            "warriors",
            "soldiers"
          ],
          "why": "They pushed the border east and guarded it.",
          "src": {
            "label": "Wikipedia: Cossacks",
            "url": "https://en.wikipedia.org/wiki/Cossacks"
          }
        },
        {
          "id": "31-q-volga-why",
          "type": "short",
          "q": "Why did Russia want to control the Volga River?",
          "answer": "It was a major trade route, so controlling it gave Russia trade with Central Asia and Persia and access to the Caspian Sea.",
          "accept": [
            "trade",
            "trade route"
          ],
          "why": "Whoever held the Volga controlled the flow of goods across that region.",
          "src": {
            "label": "Wikipedia: Volga",
            "url": "https://en.wikipedia.org/wiki/Volga"
          }
        },
        {
          "id": "31-q-religion-siberia",
          "type": "short",
          "q": "What religion did Russian missionaries want to convert Siberian tribes to?",
          "answer": "Eastern Orthodox Christianity.",
          "accept": [
            "eastern orthodox",
            "orthodox christianity"
          ],
          "why": "Russia's rulers tied their state to the Russian Orthodox Church.",
          "src": {
            "label": "Wikipedia: Russian Orthodox Church",
            "url": "https://en.wikipedia.org/wiki/Russian_Orthodox_Church"
          }
        },
        {
          "id": "31-q-by-1639",
          "type": "short",
          "q": "Where did the Russian Empire extend to by 1639?",
          "answer": "Across Siberia to the Pacific Ocean.",
          "accept": [
            "pacific ocean"
          ],
          "why": "Russian explorers reached the Pacific coast in 1639. Alaska came much later, in the 1700s.",
          "src": {
            "label": "Wikipedia: Russian conquest of Siberia",
            "url": "https://en.wikipedia.org/wiki/Russian_conquest_of_Siberia"
          }
        }
      ]
    },
    {
      "id": "31-eastasia",
      "name": "East Asia (Ming and Qing)",
      "items": [
        {
          "id": "31-term-ming",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Chinese ruling family that took power in 1368 after driving out the Mongols and kept China stable for about 300 years.",
          "options": [
            "Ming Dynasty",
            "Qing Dynasty",
            "Safavid Empire",
            "Mughal Empire"
          ],
          "answer": 0,
          "why": "They rebuilt the Great Wall and restored Chinese rule.",
          "src": {
            "label": "Wikipedia: Ming dynasty",
            "url": "https://en.wikipedia.org/wiki/Ming_dynasty"
          }
        },
        {
          "id": "31-term-qing",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Last ruling family of China, set up by Manchus from the northeast, which took over China in 1644 and greatly enlarged its territory.",
          "options": [
            "Qing Dynasty",
            "Ming Dynasty",
            "Ottoman Empire",
            "Safavid Empire"
          ],
          "answer": 0,
          "why": "It replaced the Ming and ruled until 1912.",
          "src": {
            "label": "Wikipedia: Qing dynasty",
            "url": "https://en.wikipedia.org/wiki/Qing_dynasty"
          }
        },
        {
          "id": "31-term-kangxi",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Qing emperor who ruled 61 years (to 1722), the longest reign in Chinese history, and brought Taiwan, Mongolia and Tibet under Qing control.",
          "options": [
            "Kangxi",
            "Suleiman I",
            "Mehmed II",
            "Ivan IV"
          ],
          "answer": 0,
          "why": "His long, steady rule made the Qing strong and larger.",
          "src": {
            "label": "Wikipedia: Kangxi Emperor",
            "url": "https://en.wikipedia.org/wiki/Kangxi_Emperor"
          }
        },
        {
          "id": "31-term-qianlong",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Qing emperor of the late 1700s who pushed the empire into Central Asia and Tibet, but whose last years brought corruption and money trouble.",
          "options": [
            "Emperor Qianlong",
            "Mehmed II",
            "Shah Abbas I",
            "Ivan IV"
          ],
          "answer": 0,
          "why": "The empire peaked under him, then began to weaken.",
          "src": {
            "label": "Wikipedia: Qianlong Emperor",
            "url": "https://en.wikipedia.org/wiki/Qianlong_Emperor"
          }
        },
        {
          "id": "31-q-ming-result",
          "type": "short",
          "q": "The Ming Dynasty was established after the Mongols were pushed out of China. What was the result of the Ming Dynasty?",
          "answer": "Chinese rule was restored, and China enjoyed about 300 years of stability and prosperity.",
          "accept": [
            "stability for 300 years"
          ],
          "why": "The Ming ruled from 1368 to 1644 and rebuilt the Great Wall.",
          "src": {
            "label": "Wikipedia: Ming dynasty",
            "url": "https://en.wikipedia.org/wiki/Ming_dynasty"
          }
        },
        {
          "id": "31-q-qing-who",
          "type": "short",
          "q": "Who established the Qing Dynasty?",
          "answer": "The Manchus, from Manchuria.",
          "accept": [
            "manchus",
            "manchu"
          ],
          "why": "They took Beijing in 1644 after the Ming collapsed.",
          "src": {
            "label": "Wikipedia: Qing dynasty",
            "url": "https://en.wikipedia.org/wiki/Qing_dynasty"
          }
        },
        {
          "id": "31-q-great-wall",
          "type": "short",
          "q": "What caused China to rebuild the Great Wall of China for protection?",
          "answer": "The threat of Mongol raids from the north.",
          "accept": [
            "mongols",
            "mongol threat"
          ],
          "why": "The Ming rebuilt it in stone and brick to keep Mongol invaders out.",
          "src": {
            "label": "Wikipedia: Great Wall of China",
            "url": "https://en.wikipedia.org/wiki/Great_Wall_of_China"
          }
        },
        {
          "id": "31-q-kangxi-rule",
          "type": "short",
          "q": "What was significant about Emperor Kangxi's rule AND what regions did he incorporate into China's rule?",
          "answer": "He had the longest reign in Chinese history (61 years) and brought Taiwan, Mongolia and Tibet into Qing rule.",
          "accept": [
            "taiwan, mongolia, tibet"
          ],
          "why": "A long reign gave the Qing stability while the empire grew.",
          "src": {
            "label": "Wikipedia: Kangxi Emperor",
            "url": "https://en.wikipedia.org/wiki/Kangxi_Emperor"
          }
        },
        {
          "id": "31-q-qianlong-rule",
          "type": "short",
          "q": "What was notable about Emperor Qianlong's rule? (where did he expand, what was the reaction to his expansion, etc.)",
          "answer": "He expanded Qing rule into Central Asia and Tibet, which made the empire its largest, but the wars were costly and not every campaign worked.",
          "accept": [
            "expanded into central asia and tibet"
          ],
          "why": "The empire reached its peak under him.",
          "src": {
            "label": "Wikipedia: Qianlong Emperor",
            "url": "https://en.wikipedia.org/wiki/Qianlong_Emperor"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-tibet-burma-vietnam",
          "type": "short",
          "q": "Were the following expansion efforts by China successful or unsuccessful: Tibet, Burma, Vietnam?",
          "answer": "Tibet: successful. Burma: unsuccessful. Vietnam: unsuccessful.",
          "accept": [
            "tibet successful burma and vietnam unsuccessful"
          ],
          "why": "Qing armies held Tibet but failed against Burma (1765 to 1769) and Vietnam (1788 to 1789).",
          "src": {
            "label": "Wikipedia: Sino-Burmese War",
            "url": "https://en.wikipedia.org/wiki/Sino-Burmese_War"
          }
        },
        {
          "id": "31-q-expansion-result",
          "type": "short",
          "q": "What was the result of these efforts to expand?",
          "answer": "The Qing Empire grew to its largest size, but the long wars were expensive and strained its money.",
          "accept": [
            "largest empire"
          ],
          "why": "Big conquests brought land but also heavy costs.",
          "src": {
            "label": "Wikipedia: Qing dynasty",
            "url": "https://en.wikipedia.org/wiki/Qing_dynasty"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-qianlong-late",
          "type": "short",
          "q": "Describe the late years of Emperor Qianlong's reign.",
          "answer": "The government became corrupt, money problems grew, and unrest rose, as shown by favorites like Heshen who stole from the state.",
          "accept": [
            "corruption"
          ],
          "why": "His final years began the Qing decline.",
          "src": {
            "label": "Wikipedia: Qianlong Emperor",
            "url": "https://en.wikipedia.org/wiki/Qianlong_Emperor"
          }
        },
        {
          "id": "31-q-white-lotus",
          "type": "short",
          "q": "Why was the White Lotus Society reinstated? Where have we heard of them before?",
          "answer": "Poverty, heavy taxes and corrupt officials made people rebel. They were also behind a rebellion against the Mongol Yuan dynasty, which led to the Ming.",
          "accept": [
            "rebellion",
            "taxes and corruption"
          ],
          "why": "The White Lotus was a Buddhist-inspired secret society that rebelled in hard times.",
          "src": {
            "label": "Wikipedia: White Lotus Rebellion",
            "url": "https://en.wikipedia.org/wiki/White_Lotus_Rebellion"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-white-lotus-result",
          "type": "short",
          "q": "What was the result of their uprising?",
          "answer": "The Qing crushed it after about eight years (1796 to 1804), with some 100,000 rebels killed, and it badly weakened the dynasty.",
          "accept": [
            "weakened the qing",
            "100,000 killed"
          ],
          "why": "The costs showed how weak the Qing had become.",
          "src": {
            "label": "Wikipedia: White Lotus Rebellion",
            "url": "https://en.wikipedia.org/wiki/White_Lotus_Rebellion"
          }
        }
      ]
    },
    {
      "id": "31-islamic",
      "name": "Islamic gunpowder empires and Tamerlane",
      "items": [
        {
          "id": "31-term-tamerlane",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Turkic-Mongol conqueror of the late 1300s, ruling from Samarkand, who conquered Persia, Central Asia and Delhi but left no lasting government.",
          "options": [
            "Tamerlane",
            "Mehmed II",
            "Akbar",
            "Ivan IV"
          ],
          "answer": 0,
          "why": "His empire fell apart soon after his death in 1405.",
          "src": {
            "label": "Wikipedia: Timur",
            "url": "https://en.wikipedia.org/wiki/Timur"
          }
        },
        {
          "id": "31-term-ghazi",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Belief that a Muslim warrior who fights to spread and defend Islam deserves honor, which inspired fighters to expand the early Ottoman state.",
          "options": [
            "Ghazi Ideal",
            "Caste",
            "Gunpowder Empires",
            "Shah"
          ],
          "answer": 0,
          "why": "It gave conquest a religious purpose and a loyal army.",
          "src": {
            "label": "Wikipedia: Ghazi (warrior)",
            "url": "https://en.wikipedia.org/wiki/Ghazi_(warrior)"
          }
        },
        {
          "id": "31-q-in-common",
          "type": "short",
          "q": "What did the Gunpowder Empires have in common?",
          "answer": "They used gunpowder weapons, strong armies and strong rulers to conquer and control large territories.",
          "accept": [
            "gunpowder weapons"
          ],
          "why": "Cannons and muskets helped central rulers beat rivals.",
          "src": {
            "label": "Wikipedia: Gunpowder empires",
            "url": "https://en.wikipedia.org/wiki/Gunpowder_empires"
          }
        },
        {
          "id": "31-q-successful",
          "type": "short",
          "q": "What made the Gunpowder Empires successful?",
          "answer": "Gunpowder weapons, strong armies, and strong rulers with organized governments.",
          "accept": [
            "gunpowder weapons"
          ],
          "why": "Guns, big armies and good administrators let them hold huge lands.",
          "src": {
            "label": "Wikipedia: Gunpowder empires",
            "url": "https://en.wikipedia.org/wiki/Gunpowder_empires"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-tamerlane-who",
          "type": "short",
          "q": "Who was Tamerlane and where did he conquer?",
          "answer": "A Turkic-Mongol conqueror (1336 to 1405) who ruled from Samarkand and conquered Persia, Central Asia, parts of India and the Middle East.",
          "accept": [
            "turkic-mongol conqueror"
          ],
          "why": "He even defeated the Ottomans at Ankara in 1402.",
          "src": {
            "label": "Wikipedia: Timur",
            "url": "https://en.wikipedia.org/wiki/Timur"
          }
        },
        {
          "id": "31-q-ghazi-help",
          "type": "short",
          "q": "How did the Ghazi Ideal help the Gunpowder Empires grow?",
          "answer": "It gave warriors a religious reason to fight and spread Islam, which built loyal armies and justified conquest.",
          "accept": [
            "holy war",
            "religious warriors"
          ],
          "why": "Fighting for the faith made soldiers eager and rulers legitimate.",
          "src": {
            "label": "Wikipedia: Ghazi (warrior)",
            "url": "https://en.wikipedia.org/wiki/Ghazi_(warrior)"
          }
        },
        {
          "id": "31-q-conquests-marked",
          "type": "short",
          "q": "Conquests led by the Gunpowder Empires were marked by what?",
          "answer": "Violence and destruction, though later rulers often ruled their new lands more tolerantly.",
          "accept": [
            "violence"
          ],
          "why": "Tamerlane in particular was known for massacres.",
          "src": {
            "label": "Wikipedia: Timur",
            "url": "https://en.wikipedia.org/wiki/Timur"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-tamerlane-arts",
          "type": "short",
          "q": "How did Tamerlane encourage the arts?",
          "answer": "He brought skilled artists and builders from conquered lands to Samarkand and built grand mosques and buildings.",
          "accept": [
            "brought artists to samarkand"
          ],
          "why": "The fine buildings of Samarkand showed his power.",
          "src": {
            "label": "Wikipedia: Timur",
            "url": "https://en.wikipedia.org/wiki/Timur"
          }
        },
        {
          "id": "31-q-tamerlane-testament",
          "type": "short",
          "q": "Tamerlane's invasions were a testament to what?",
          "answer": "The power of fast nomadic cavalry armies and strong military leadership.",
          "accept": [
            "nomadic cavalry"
          ],
          "why": "His conquests relied on horsemen and skilled command, not mainly on guns.",
          "src": {
            "label": "Wikipedia: Timur",
            "url": "https://en.wikipedia.org/wiki/Timur"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-tamerlane-government",
          "type": "short",
          "q": "Tamerlane's government depended on what?",
          "answer": "His personal leadership and his army.",
          "accept": [
            "his army"
          ],
          "why": "With no lasting system, it needed him to hold it together.",
          "src": {
            "label": "Wikipedia: Timurid Empire",
            "url": "https://en.wikipedia.org/wiki/Timurid_Empire"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-tamerlane-fail",
          "type": "short",
          "q": "How did Tamerlane fail?",
          "answer": "He did not build a lasting government, so his empire split apart among his heirs after he died in 1405.",
          "accept": [
            "empire fell apart after his death"
          ],
          "why": "Rule by one man's strength did not outlive him.",
          "src": {
            "label": "Wikipedia: Timurid Empire",
            "url": "https://en.wikipedia.org/wiki/Timurid_Empire"
          }
        },
        {
          "id": "31-q-two-forces",
          "type": "short",
          "q": "Which two major forces would continue to battle with each other into the 14th century?",
          "answer": "The Ottoman (Sunni) and Safavid (Shia) empires, who fought for centuries.",
          "accept": [
            "ottomans and safavids"
          ],
          "why": "The worksheet says 14th century, which is probably a typo, since the Safavids only began in 1501. The two empires fought from 1514 into the 1700s.",
          "src": {
            "label": "Wikipedia: Ottoman-Persian Wars",
            "url": "https://en.wikipedia.org/wiki/Ottoman%E2%80%93Persian_Wars"
          },
          "unsure": true,
          "note": "The worksheet wording is odd (the 14th century is too early for these empires), so the intended answer is a best guess."
        }
      ]
    },
    {
      "id": "31-ottoman",
      "name": "Ottoman Empire",
      "items": [
        {
          "id": "31-term-ottoman",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Muslim empire that began in Anatolia around 1300, took Constantinople in 1453 and ruled southeast Europe, the Middle East and North Africa until 1922.",
          "options": [
            "Ottoman Empire",
            "Safavid Empire",
            "Mughal Empire",
            "Qing Dynasty"
          ],
          "answer": 0,
          "why": "It was one of the largest and longest-lasting Islamic empires.",
          "src": {
            "label": "Wikipedia: Ottoman Empire",
            "url": "https://en.wikipedia.org/wiki/Ottoman_Empire"
          }
        },
        {
          "id": "31-term-mehmed",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Ottoman sultan nicknamed 'the Conqueror' who captured Constantinople in 1453, ending the Byzantine Empire.",
          "options": [
            "Mehmed II",
            "Suleiman I",
            "Shah Abbas I",
            "Akbar"
          ],
          "answer": 0,
          "why": "He made Constantinople the Ottoman capital.",
          "src": {
            "label": "Wikipedia: Mehmed II",
            "url": "https://en.wikipedia.org/wiki/Mehmed_II"
          }
        },
        {
          "id": "31-term-suleiman",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Ottoman sultan (1520 to 1566), called 'the Magnificent', who led the empire at its height and besieged Vienna in 1529.",
          "options": [
            "Suleiman I",
            "Mehmed II",
            "Akbar",
            "Kangxi"
          ],
          "answer": 0,
          "why": "Under him the empire peaked in size, wealth and art.",
          "src": {
            "label": "Wikipedia: Suleiman the Magnificent",
            "url": "https://en.wikipedia.org/wiki/Suleiman_the_Magnificent"
          }
        },
        {
          "id": "31-q-ott-where",
          "type": "short",
          "q": "Where was the Ottoman Empire located?",
          "answer": "In Anatolia (modern Turkey), stretching across southeast Europe, the Middle East and North Africa.",
          "accept": [
            "turkey",
            "anatolia"
          ],
          "why": "It sat where Europe, Asia and Africa meet.",
          "src": {
            "label": "Wikipedia: Ottoman Empire",
            "url": "https://en.wikipedia.org/wiki/Ottoman_Empire"
          }
        },
        {
          "id": "31-q-ott-significant",
          "type": "short",
          "q": "Why is the Ottoman Empire significant?",
          "answer": "It was one of the largest and longest-lasting Islamic empires (about 1300 to 1922) and controlled key trade routes between Europe, Asia and Africa.",
          "accept": [
            "largest islamic empire"
          ],
          "why": "It also ended the Byzantine Empire in 1453.",
          "src": {
            "label": "Wikipedia: Ottoman Empire",
            "url": "https://en.wikipedia.org/wiki/Ottoman_Empire"
          }
        },
        {
          "id": "31-q-mehmed-capital",
          "type": "short",
          "q": "Under Mehmed II, where was the capital city of the Ottoman Empire?",
          "answer": "Constantinople (today's Istanbul), the old Byzantine capital.",
          "accept": [
            "constantinople",
            "istanbul"
          ],
          "why": "He captured it in 1453.",
          "src": {
            "label": "Wikipedia: Fall of Constantinople",
            "url": "https://en.wikipedia.org/wiki/Fall_of_Constantinople"
          }
        },
        {
          "id": "31-q-capital-significant",
          "type": "short",
          "q": "Why was the location of the capital city significant?",
          "answer": "It sat on the strait between the Black Sea and the Mediterranean, where Europe meets Asia, so the Ottomans controlled key trade routes.",
          "accept": [
            "controlled trade routes"
          ],
          "why": "It was a perfect spot for trade and defense.",
          "src": {
            "label": "Wikipedia: Fall of Constantinople",
            "url": "https://en.wikipedia.org/wiki/Fall_of_Constantinople"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-venice",
          "type": "short",
          "q": "What was the Ottoman relationship with Venice?",
          "answer": "They were rivals who fought wars over the Mediterranean, but also trading partners.",
          "accept": [
            "rivals and trade partners"
          ],
          "why": "Venice fought several wars with the Ottomans but still wanted to trade with them.",
          "src": {
            "label": "Wikipedia: Ottoman-Venetian wars",
            "url": "https://en.wikipedia.org/wiki/Ottoman%E2%80%93Venetian_wars"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-siege",
          "type": "short",
          "q": "Why was Suleiman I's siege of Vienna significant?",
          "answer": "It was the farthest the Ottomans pushed into central Europe in 1529, and they failed to take the city.",
          "accept": [
            "farthest ottoman advance"
          ],
          "why": "Your worksheet says Venice, but Suleiman's famous siege was of Vienna in 1529.",
          "src": {
            "label": "Wikipedia: Siege of Vienna (1529)",
            "url": "https://en.wikipedia.org/wiki/Siege_of_Vienna_(1529)"
          }
        },
        {
          "id": "31-q-ott-fall-1922",
          "type": "short",
          "q": "What led to the eventual fall of the Ottoman Empire in 1922?",
          "answer": "The empire's defeat in World War I, after which the Allies occupied it and Turkish nationalists ended the sultanate in 1922.",
          "accept": [
            "world war one",
            "first world war",
            "wwi",
            "world war 1",
            "defeat in world war one"
          ],
          "why": "It was World War I (1914 to 1918). The empire was gone before World War II began.",
          "src": {
            "label": "Wikipedia: Dissolution of the Ottoman Empire",
            "url": "https://en.wikipedia.org/wiki/Dissolution_of_the_Ottoman_Empire"
          }
        }
      ]
    },
    {
      "id": "31-safavid",
      "name": "Safavid Empire",
      "items": [
        {
          "id": "31-term-shah",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Persian title for a king, used by the rulers of Iran such as the Safavid leaders.",
          "options": [
            "Shah",
            "Tamerlane",
            "Caste",
            "Ivan IV"
          ],
          "answer": 0,
          "why": "The Safavid shahs held both political and religious authority.",
          "src": {
            "label": "Wikipedia: Shah",
            "url": "https://en.wikipedia.org/wiki/Shah"
          }
        },
        {
          "id": "31-term-safavid",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Empire founded in 1501 in Iran by Ismail I that made Shia Islam the state religion and clashed with the Sunni Ottomans.",
          "options": [
            "Safavid Empire",
            "Ottoman Empire",
            "Mughal Empire",
            "Ming Dynasty"
          ],
          "answer": 0,
          "why": "Its religion still shapes Iran today.",
          "src": {
            "label": "Wikipedia: Safavid Iran",
            "url": "https://en.wikipedia.org/wiki/Safavid_Iran"
          }
        },
        {
          "id": "31-term-abbas",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Safavid ruler (1588 to 1629) who built a strong army with cannons and muskets, moved the capital to Isfahan and boosted trade.",
          "options": [
            "Shah Abbas I",
            "Akbar",
            "Suleiman I",
            "Mehmed II"
          ],
          "answer": 0,
          "why": "Under him the empire reached its height.",
          "src": {
            "label": "Wikipedia: Abbas the Great",
            "url": "https://en.wikipedia.org/wiki/Abbas_the_Great"
          }
        },
        {
          "id": "31-q-saf-origin",
          "type": "short",
          "q": "What was the origin of the Safavid Empire?",
          "answer": "It began in 1501 when Ismail I, leader of the Safavid Sufi order, conquered Iran and made Twelver Shia Islam the state religion.",
          "accept": [
            "ismail i",
            "safavid order"
          ],
          "why": "The Safavids had been a religious order before they became rulers.",
          "src": {
            "label": "Wikipedia: Safavid Iran",
            "url": "https://en.wikipedia.org/wiki/Safavid_Iran"
          }
        },
        {
          "id": "31-q-saf-problems",
          "type": "short",
          "q": "List two problems the Safavid Empire faced.",
          "answer": "Constant wars with the Ottomans, and a weak navy and little access to the sea.",
          "accept": [
            "wars with ottomans"
          ],
          "why": "The Sunni Ottomans pressed from the west, and tribal rivalries also caused trouble.",
          "src": {
            "label": "Wikipedia: Safavid Iran",
            "url": "https://en.wikipedia.org/wiki/Safavid_Iran"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-saf-europe",
          "type": "short",
          "q": "How did Europe assist the Safavid Empire?",
          "answer": "European advisers (such as the English Sherley brothers, according to traditional accounts) helped train and arm the Safavid army, since Europe also wanted an ally against the Ottomans.",
          "accept": [
            "military advisers",
            "advisers"
          ],
          "why": "Shah Abbas I used Western help to modernize his army.",
          "src": {
            "label": "Wikipedia: Abbas the Great",
            "url": "https://en.wikipedia.org/wiki/Abbas_the_Great"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-saf-controlled",
          "type": "short",
          "q": "Safavid shahs controlled what two things?",
          "answer": "Overland trade routes such as the Silk Road, and the silk trade.",
          "accept": [
            "trade routes and silk"
          ],
          "why": "Their land sat between Europe and Asia, which brought wealth.",
          "src": {
            "label": "Wikipedia: Safavid Iran",
            "url": "https://en.wikipedia.org/wiki/Safavid_Iran"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book. Your book may say political and religious power instead."
        },
        {
          "id": "31-q-saf-tension",
          "type": "short",
          "q": "What two things caused tension between the Safavid and Ottoman Empires?",
          "answer": "Religion (Shia versus Sunni) and rivalry over land and trade routes.",
          "accept": [
            "religion and trade"
          ],
          "why": "The Ottomans were Sunni and the Safavids Shia, and both wanted the same lands.",
          "src": {
            "label": "Wikipedia: Ottoman–Persian Wars",
            "url": "https://en.wikipedia.org/wiki/Ottoman%E2%80%93Persian_Wars"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-ott-dominance",
          "type": "short",
          "q": "How did the Ottomans try to assert dominance over the Safavid Empire?",
          "answer": "They defeated the Safavids in battle (Chaldiran, 1514) and also cut off trade with them.",
          "accept": [
            "trade embargo",
            "war"
          ],
          "why": "The Ottomans had better artillery and also used trade bans.",
          "src": {
            "label": "Wikipedia: Battle of Chaldiran",
            "url": "https://en.wikipedia.org/wiki/Battle_of_Chaldiran"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-saf-women",
          "type": "short",
          "q": "Describe the place of women in the Safavid Empire.",
          "answer": "Upper-class women could be educated and have political influence, and women could own property and travel, but their freedom shrank after Shah Abbas I.",
          "accept": [
            "some political influence"
          ],
          "why": "Women had real roles early on, but later shahs placed more limits on them.",
          "src": {
            "label": "Wikipedia: Women in Safavid Iran",
            "url": "https://en.wikipedia.org/wiki/Women_in_Safavid_Iran"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        }
      ]
    },
    {
      "id": "31-mughal",
      "name": "Mughal India",
      "items": [
        {
          "id": "31-term-akbar",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Mughal emperor of the late 1500s who expanded the empire across northern India and won Hindu support by tolerating other religions.",
          "options": [
            "Akbar",
            "Shah Abbas I",
            "Suleiman I",
            "Kangxi"
          ],
          "answer": 0,
          "why": "His fair policies helped hold the empire together.",
          "src": {
            "label": "Wikipedia: Akbar",
            "url": "https://en.wikipedia.org/wiki/Akbar"
          }
        },
        {
          "id": "31-term-mughal",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Muslim empire that ruled most of India from 1526 until the 1700s, famous for its wealth and for the Taj Mahal.",
          "options": [
            "Mughal Empire",
            "Ottoman Empire",
            "Safavid Empire",
            "Qing Dynasty"
          ],
          "answer": 0,
          "why": "It blended Persian, Islamic and Indian culture.",
          "src": {
            "label": "Wikipedia: Mughal Empire",
            "url": "https://en.wikipedia.org/wiki/Mughal_Empire"
          }
        },
        {
          "id": "31-term-caste",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Hereditary social group in India that decides a person's job and who they can marry, passed down from parents.",
          "options": [
            "Caste",
            "Ghazi Ideal",
            "Shah",
            "Gunpowder Empires"
          ],
          "answer": 0,
          "why": "Caste shaped daily life in Hindu India.",
          "src": {
            "label": "Wikipedia: Caste",
            "url": "https://en.wikipedia.org/wiki/Caste"
          }
        },
        {
          "id": "31-q-mughal-significant",
          "type": "short",
          "q": "What was significant about the Mughal Empire?",
          "answer": "It was one of the richest and most powerful empires, uniting most of India under Muslim rulers and blending Muslim and Hindu cultures.",
          "accept": [
            "richest empire"
          ],
          "why": "It ruled a huge, wealthy population.",
          "src": {
            "label": "Wikipedia: Mughal Empire",
            "url": "https://en.wikipedia.org/wiki/Mughal_Empire"
          }
        },
        {
          "id": "31-q-arab-traders",
          "type": "short",
          "q": "What was the role of Arab traders in the Mughal Empire?",
          "answer": "They carried goods across the Indian Ocean, helping Mughal commerce by trading Indian goods abroad.",
          "accept": [
            "commerce",
            "trade"
          ],
          "why": "Muslim merchants linked India to Arabia, Africa and Southeast Asia.",
          "src": {
            "label": "Wikipedia: Economy of the Mughal Empire",
            "url": "https://en.wikipedia.org/wiki/Economy_of_the_Mughal_Empire"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-goods",
          "type": "short",
          "q": "What goods were imported and exported in the Mughal Empire?",
          "answer": "Imported silver (and horses); exported cotton textiles, spices and other goods.",
          "accept": [
            "silver and textiles"
          ],
          "why": "Foreign traders paid in silver for Indian cloth.",
          "src": {
            "label": "Wikipedia: Economy of the Mughal Empire",
            "url": "https://en.wikipedia.org/wiki/Economy_of_the_Mughal_Empire"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-hindu-castes",
          "type": "short",
          "q": "What were the Hindu castes?",
          "answer": "Social groups you are born into: Brahmins (priests), Kshatriyas (warriors and rulers), Vaishyas (merchants) and Shudras (laborers).",
          "accept": [
            "brahmin, kshatriya, vaishya, shudra"
          ],
          "why": "People outside the four groups were treated as lowest and were often left out.",
          "src": {
            "label": "Wikipedia: Caste system in India",
            "url": "https://en.wikipedia.org/wiki/Caste_system_in_India"
          }
        },
        {
          "id": "31-q-architecture",
          "type": "short",
          "q": "Why is the architecture of the Mughal Empire significant?",
          "answer": "Buildings like the Taj Mahal blended Persian, Islamic and Indian styles and showed the empire's wealth and power.",
          "accept": [
            "taj mahal"
          ],
          "why": "Mughal architecture shows both their wealth and their cultural mix.",
          "src": {
            "label": "Wikipedia: Mughal architecture",
            "url": "https://en.wikipedia.org/wiki/Mughal_architecture"
          }
        }
      ]
    },
    {
      "id": "31-decline",
      "name": "Decline of the gunpowder empires",
      "items": [
        {
          "id": "31-q-why-decline",
          "type": "short",
          "q": "Why did the Gunpowder Empires decline?",
          "answer": "Weak rulers, corruption and rebellions inside, and falling behind Europe in military technology and industry.",
          "accept": [
            "failed to modernize"
          ],
          "why": "Europe kept improving its armies and economy while these empires stayed the same.",
          "src": {
            "label": "Wikipedia: Decline and modernization of the Ottoman Empire",
            "url": "https://en.wikipedia.org/wiki/Decline_and_modernization_of_the_Ottoman_Empire"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-russia-remained",
          "type": "short",
          "q": "Why did Russia remain despite the other Gunpowder Empires falling?",
          "answer": "Russia modernized and copied western Europe, starting with Peter the Great, and kept a strong central government.",
          "accept": [
            "modernized"
          ],
          "why": "Russia adopted western armies and technology.",
          "src": {
            "label": "Wikipedia: Peter the Great",
            "url": "https://en.wikipedia.org/wiki/Peter_the_Great"
          },
          "unsure": true,
          "note": "This answer depends on how the AMSCO textbook words it, so check it against your book."
        },
        {
          "id": "31-q-ott-decline",
          "type": "short",
          "q": "Summarize why the Ottoman Empire eventually declined.",
          "answer": "Weak sultans, corruption, loss of military edge, and economic trouble as European powers grew stronger.",
          "accept": [
            "weak rulers and corruption"
          ],
          "why": "Europeans pulled ahead in technology and trade.",
          "src": {
            "label": "Wikipedia: Decline and modernization of the Ottoman Empire",
            "url": "https://en.wikipedia.org/wiki/Decline_and_modernization_of_the_Ottoman_Empire"
          }
        },
        {
          "id": "31-q-harem",
          "type": "short",
          "q": "What were 'Harem Politics' and how did they contribute to the fall of the Ottoman Empire?",
          "answer": "Wives and mothers of sultans fought to put their own sons on the throne, which gave the empire weak, inexperienced rulers.",
          "accept": [
            "women choosing sultans"
          ],
          "why": "Some historians call this period the Sultanate of Women.",
          "src": {
            "label": "Wikipedia: Sultanate of Women",
            "url": "https://en.wikipedia.org/wiki/Sultanate_of_Women"
          }
        },
        {
          "id": "31-q-saf-decline",
          "type": "short",
          "q": "Summarize why the Safavid Empire declined.",
          "answer": "After Shah Abbas I, weaker shahs, rebellions and pressure from neighbors broke it down, ending with an Afghan invasion in 1722.",
          "accept": [
            "weak shahs and rebellion"
          ],
          "why": "The Afghan capture of Isfahan in 1722 is often called the end.",
          "src": {
            "label": "Wikipedia: Safavid Iran",
            "url": "https://en.wikipedia.org/wiki/Safavid_Iran"
          }
        },
        {
          "id": "31-q-mughal-decline",
          "type": "short",
          "q": "Summarize why the Mughal Empire declined.",
          "answer": "Costly wars and religious intolerance under Aurangzeb, revolts, corruption and weak successors, and growing European (British) power.",
          "accept": [
            "corruption and weak rulers"
          ],
          "why": "By the 1700s the empire had shrunk to a shadow of itself.",
          "src": {
            "label": "Wikipedia: Decline of the Mughal Empire",
            "url": "https://en.wikipedia.org/wiki/Decline_of_the_Mughal_Empire"
          }
        }
      ]
    },
    {
      "id": "32-england",
      "name": "England",
      "items": [
        {
          "id": "32-term-divine-right",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "The belief that a monarch's right to rule comes straight from God, so the ruler answers to God and not to Parliament or the people.",
          "options": [
            "Divine Right of Kings",
            "Justice of the Peace",
            "English Bill of Rights",
            "Zamindars"
          ],
          "answer": 0,
          "why": "Divine Right of Kings is the idea that God chose the monarch, which kings like James I used to justify their power.",
          "src": {
            "label": "Wikipedia: Divine right of kings",
            "url": "https://en.wikipedia.org/wiki/Divine_right_of_kings"
          }
        },
        {
          "id": "32-term-justice-peace",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "A local official in England, usually from the gentry, chosen by the Tudor monarchs to keep order and enforce the king's laws in the counties.",
          "options": [
            "Tax Farmers",
            "Justice of the Peace",
            "Boyars",
            "Zamindars"
          ],
          "answer": 1,
          "why": "Justices of the peace let the Tudors extend royal authority into the countryside without a big paid bureaucracy.",
          "src": {
            "label": "Wikipedia: Justice of the peace",
            "url": "https://en.wikipedia.org/wiki/Justice_of_the_peace"
          }
        },
        {
          "id": "32-term-english-bill-rights",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "A 1689 law, passed after the Glorious Revolution, that limited the monarch's powers and protected Parliament's role, including regular meetings and approving taxes.",
          "options": [
            "Divine Right of Kings",
            "Absolutism",
            "English Bill of Rights",
            "Justice of the Peace"
          ],
          "answer": 2,
          "why": "The English Bill of Rights made Parliament a lasting check on the king, the opposite of absolutism.",
          "src": {
            "label": "Wikipedia: Bill of Rights 1689",
            "url": "https://en.wikipedia.org/wiki/Bill_of_Rights_1689"
          }
        },
        {
          "id": "32-q-james-divine-right",
          "type": "short",
          "q": "How did King James I use the Divine Right of Kings to justify his rule?",
          "answer": "He argued that God chose kings, so a king answers only to God and Parliament and the people cannot judge or limit him.",
          "accept": [
            "god chose the king",
            "kings are chosen by god"
          ],
          "why": "James I wrote about divine right and used it to resist Parliament's attempts to limit his power.",
          "src": {
            "label": "Wikipedia: James VI and I",
            "url": "https://en.wikipedia.org/wiki/James_VI_and_I"
          }
        },
        {
          "id": "32-q-justices-role",
          "type": "short",
          "q": "What was the role of the justices of the peace in Tudor England and why were they so important?",
          "answer": "They kept order in their local areas by enforcing laws and hearing minor cases. They were important because they carried out the monarch's rule locally without a large paid bureaucracy.",
          "accept": [
            "keep order",
            "enforce laws"
          ],
          "why": "They tied local gentry to the Tudor crown and made royal power reach every county.",
          "src": {
            "label": "Wikipedia: Justice of the peace",
            "url": "https://en.wikipedia.org/wiki/Justice_of_the_peace"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-tudor-feudalism",
          "type": "short",
          "q": "What was the effect of a stronger Tudor rule on feudalism in England?",
          "answer": "It weakened feudalism. Nobles lost their private armies and local power, and the crown became the main source of power.",
          "accept": [
            "weakened feudalism",
            "weakened it"
          ],
          "why": "Strong Tudor monarchs took power from great lords, which centralized the government.",
          "src": {
            "label": "Wikipedia: Tudor period",
            "url": "https://en.wikipedia.org/wiki/Tudor_period"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-parliament-role",
          "type": "short",
          "q": "What was the role of Parliament?",
          "answer": "Parliament made laws and approved taxes, which gave it a way to check the monarch's power.",
          "accept": [
            "approve taxes",
            "make laws"
          ],
          "why": "Parliament's power over money and laws let it limit the king, especially after 1689.",
          "src": {
            "label": "Wikipedia: Parliament of England",
            "url": "https://en.wikipedia.org/wiki/Parliament_of_England"
          }
        },
        {
          "id": "32-q-bill-rights-two",
          "type": "short",
          "q": "List two things the English Bill of Rights accomplished.",
          "answer": "It required Parliament's consent for taxes and for suspending laws, and it guaranteed regular meetings, free elections and free speech in Parliament.",
          "accept": [
            "parliament approves taxes",
            "free speech in parliament"
          ],
          "why": "Other points included a ban on cruel punishments and the right to petition the king.",
          "src": {
            "label": "Wikipedia: Bill of Rights 1689",
            "url": "https://en.wikipedia.org/wiki/Bill_of_Rights_1689"
          }
        }
      ]
    },
    {
      "id": "32-france",
      "name": "France and European monarchs",
      "items": [
        {
          "id": "32-term-absolutism",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "A kind of 17th-century government in Western Europe where monarchs passed laws without parliaments, built professional armies and bureaucracies, set up state churches and set economic policy.",
          "options": [
            "Serfdom",
            "English Bill of Rights",
            "Justice of the Peace",
            "Absolutism"
          ],
          "answer": 3,
          "why": "Absolutism put nearly all power in the monarch's hands.",
          "src": {
            "label": "Wikipedia: Absolutism (European history)",
            "url": "https://en.wikipedia.org/wiki/Absolutism_(European_history)"
          }
        },
        {
          "id": "32-term-tax-farmers",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Private individuals who paid the government up front for the right to collect taxes in an area and kept what they collected beyond that amount.",
          "options": [
            "Tax Farmers",
            "Boyars",
            "Justice of the Peace",
            "Janissaries"
          ],
          "answer": 0,
          "why": "Tax farming gave rulers cash quickly but often let collectors overcharge people.",
          "src": {
            "label": "Wikipedia: Tax farming",
            "url": "https://en.wikipedia.org/wiki/Tax_farming"
          }
        },
        {
          "id": "32-term-louis-xiv",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "The French king who ruled from 1643 to 1715, built the palace of Versailles and became the best-known example of an absolute monarch.",
          "options": [
            "Ivan IV",
            "Louis XIV",
            "Askia the Great",
            "Tokugawa Shogunate"
          ],
          "answer": 1,
          "why": "Louis XIV, the Sun King, gathered power in his own hands and ruled without sharing it.",
          "src": {
            "label": "Wikipedia: Louis XIV",
            "url": "https://en.wikipedia.org/wiki/Louis_XIV"
          }
        },
        {
          "id": "32-q-french-growth",
          "type": "short",
          "q": "How did the French government grow in comparison to the English?",
          "answer": "The French government grew by giving the king complete (absolute) authority, while the English government grew by giving Parliament power that limited the king.",
          "accept": [
            "complete authority",
            "absolute power"
          ],
          "why": "France moved toward absolutism and England toward limited monarchy.",
          "src": {
            "label": "Wikipedia: Absolutism (European history)",
            "url": "https://en.wikipedia.org/wiki/Absolutism_(European_history)"
          }
        },
        {
          "id": "32-q-louis-change",
          "type": "short",
          "q": "How did Louis XIV change the French government?",
          "answer": "He centralized power in the king. He sent out royal officials called intendants, weakened the nobles, and ruled without calling the Estates General.",
          "accept": [
            "power to the king",
            "absolute power"
          ],
          "why": "Your worksheet says Louis XVIII, but it means Louis XIV.",
          "src": {
            "label": "Wikipedia: Louis XIV",
            "url": "https://en.wikipedia.org/wiki/Louis_XIV"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-intendants-tax-farmers",
          "type": "short",
          "q": "Why were intendants called tax farmers?",
          "answer": "Intendants were royal officials who collected taxes and ran the provinces for the king. Strictly, tax farmers were private collectors, so the textbook is linking the two because both collected taxes.",
          "accept": [
            "collected taxes"
          ],
          "why": "The worksheet question treats intendants as tax farmers; they were really royal officials, while tax farmers were private contractors.",
          "src": {
            "label": "Wikipedia: Intendant",
            "url": "https://en.wikipedia.org/wiki/Intendant"
          },
          "unsure": true,
          "note": "The worksheet's premise mixes two groups, and I could not check how AMSCO words it."
        },
        {
          "id": "32-q-louis-dictator",
          "type": "short",
          "q": "Why was Louis XIV considered a dictator?",
          "answer": "He held all the power himself and would not share it with nobles or any parliament. He is often quoted as saying \"I am the state.\"",
          "accept": [
            "did not share power",
            "absolute power"
          ],
          "why": "He was an absolute monarch, not a true dictator in the modern sense, but he ruled with no limits.",
          "src": {
            "label": "Wikipedia: Louis XIV",
            "url": "https://en.wikipedia.org/wiki/Louis_XIV"
          }
        },
        {
          "id": "32-q-versailles-nobles",
          "type": "short",
          "q": "How did Versailles give Louis XIV power over his nobles?",
          "answer": "He made the nobles live at his palace, where they competed for his favor. That kept them close and busy, so they could not build their own power at home.",
          "accept": [
            "kept them close",
            "nobles lived there"
          ],
          "why": "Versailles turned powerful nobles into courtiers who depended on the king.",
          "src": {
            "label": "Wikipedia: Palace of Versailles",
            "url": "https://en.wikipedia.org/wiki/Palace_of_Versailles"
          }
        },
        {
          "id": "32-q-legitimize-monarchs",
          "type": "short",
          "q": "Describe two ways in which European monarchs sought to legitimize the authority of their monarchs.",
          "answer": "They claimed the divine right to rule, saying God chose them. They also built grand palaces and supported art and architecture, like Versailles, to show their power.",
          "accept": [
            "divine right",
            "palaces"
          ],
          "why": "Monarchs also used state churches and court ceremony to look legitimate.",
          "src": {
            "label": "Wikipedia: Absolutism (European history)",
            "url": "https://en.wikipedia.org/wiki/Absolutism_(European_history)"
          }
        }
      ]
    },
    {
      "id": "32-russia",
      "name": "Russia: ruling the empire",
      "items": [
        {
          "id": "32-term-boyars",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "The high-ranking landowning nobles of Russia who advised the ruler and held great local power until Ivan IV and later tsars cut it back.",
          "options": [
            "Janissaries",
            "Justice of the Peace",
            "Boyars",
            "Tax Farmers"
          ],
          "answer": 2,
          "why": "Boyars were Russia's top nobles, and tsars worked to control them.",
          "src": {
            "label": "Wikipedia: Boyar",
            "url": "https://en.wikipedia.org/wiki/Boyar"
          }
        },
        {
          "id": "32-term-serfdom",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "A labor system where workers farm the land in return for protection but are bound to it and cannot leave or choose a new job.",
          "options": [
            "Tax Farmers",
            "Zamindars",
            "Janissaries",
            "Serfdom"
          ],
          "answer": 3,
          "why": "Serfdom tied Russian peasants to the land and grew stronger in this era.",
          "src": {
            "label": "Wikipedia: Serfdom",
            "url": "https://en.wikipedia.org/wiki/Serfdom"
          }
        },
        {
          "id": "32-term-ivan-iv",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "A cruel 16th-century Russian ruler who terrorized his people and earned a nickname meaning \"the Terrible.\"",
          "options": [
            "Ivan IV",
            "Louis XIV",
            "Askia the Great",
            "Tokugawa Shogunate"
          ],
          "answer": 0,
          "why": "Ivan IV, also called Ivan the Terrible, was the first to take the title tsar.",
          "src": {
            "label": "Wikipedia: Ivan the Terrible",
            "url": "https://en.wikipedia.org/wiki/Ivan_the_Terrible"
          }
        },
        {
          "id": "32-term-romanov",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "The ruling family that took over Russia in 1613 after a period of chaos and ruled until 1917.",
          "options": [
            "Tokugawa Shogunate",
            "Romanov Dynasty",
            "Louis XIV",
            "Boyars"
          ],
          "answer": 1,
          "why": "The Romanovs, including Peter the Great, ruled Russia for over 300 years.",
          "src": {
            "label": "Wikipedia: House of Romanov",
            "url": "https://en.wikipedia.org/wiki/House_of_Romanov"
          }
        },
        {
          "id": "32-q-peter-industrialize",
          "type": "short",
          "q": "How did Peter the Great attempt to industrialize Russia?",
          "answer": "He built state-supported factories, mines and ironworks, mostly to make weapons and ships, and brought in Western experts to help.",
          "accept": [
            "built factories",
            "factories"
          ],
          "why": "Russian industry grew under Peter, but it did not earn as much as he wanted.",
          "src": {
            "label": "Wikipedia: Peter the Great",
            "url": "https://en.wikipedia.org/wiki/Peter_the_Great"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-peter-revenue",
          "type": "short",
          "q": "How did Peter the Great increase revenue for Russia when industrialization didn't bring in as much money as he wanted?",
          "answer": "He raised taxes, adding a poll tax on every male peasant and taxing many everyday goods.",
          "accept": [
            "poll tax",
            "raised taxes"
          ],
          "why": "The poll tax was a main source of money for his wars and new army.",
          "src": {
            "label": "Wikipedia: Peter the Great",
            "url": "https://en.wikipedia.org/wiki/Peter_the_Great"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-peter-lands",
          "type": "short",
          "q": "What is the significance of the new lands Peter the Great conquered?",
          "answer": "They gave Russia ports on the Baltic Sea, opening trade and contact with Western Europe. Peter's larger goal was warm-water ports that stayed open all year.",
          "accept": [
            "warm-water ports",
            "ports"
          ],
          "why": "Russia's old main port, Arkhangelsk, was far north and iced in for months. Baltic ports were much closer to Western Europe. Your class may call them warm-water ports.",
          "src": {
            "label": "Wikipedia: Peter the Great",
            "url": "https://en.wikipedia.org/wiki/Peter_the_Great"
          }
        },
        {
          "id": "32-q-st-petersburg",
          "type": "short",
          "q": "Describe St. Petersburg.",
          "answer": "A new capital city that Peter the Great built on the Baltic coast starting in 1703. It was designed in a European style as Russia's \"window to the West.\"",
          "accept": [
            "new capital",
            "window to the west"
          ],
          "why": "Building it showed Peter's push to modernize and look toward Europe.",
          "src": {
            "label": "Wikipedia: Saint Petersburg",
            "url": "https://en.wikipedia.org/wiki/Saint_Petersburg"
          }
        }
      ]
    },
    {
      "id": "32-china",
      "name": "China (Ming)",
      "items": [
        {
          "id": "32-q-ming-mongol",
          "type": "short",
          "q": "How did the Ming Dynasty erase Mongol influence in China? (3 examples)",
          "answer": "They banned Mongol dress, names and language, brought back the Confucian civil service exams, and rebuilt the Great Wall.",
          "accept": [
            "banned mongol dress",
            "civil service exams",
            "great wall"
          ],
          "why": "These steps restored Han Chinese traditions after the Mongol Yuan dynasty.",
          "src": {
            "label": "Wikipedia: Hongwu Emperor",
            "url": "https://en.wikipedia.org/wiki/Hongwu_Emperor"
          },
          "unsure": true,
          "note": "Your textbook may list different three examples; these are the standard ones."
        },
        {
          "id": "32-q-ming-tax-collector",
          "type": "short",
          "q": "Who was responsible for collecting taxes in the Ming Dynasty?",
          "answer": "Local officials, the government's scholar-bureaucrats, with help from village leaders.",
          "accept": [
            "local officials",
            "scholar-officials"
          ],
          "why": "The Ming ran taxes through the civil service rather than through tax farmers.",
          "src": {
            "label": "Wikipedia: Ming dynasty",
            "url": "https://en.wikipedia.org/wiki/Ming_dynasty"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, and my source is only a general article; compare it with your notes."
        },
        {
          "id": "32-q-ming-tax-form",
          "type": "short",
          "q": "Taxes were collected in what form?",
          "answer": "Mostly in silver in the later Ming period, after an earlier system of grain and labor service.",
          "accept": [
            "silver",
            "grain"
          ],
          "why": "The Single Whip reform in the 1500s moved taxes to silver payments.",
          "src": {
            "label": "Wikipedia: Single whip law",
            "url": "https://en.wikipedia.org/wiki/Single_whip_law"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, and it may say grain."
        },
        {
          "id": "32-q-tribute-system",
          "type": "short",
          "q": "Describe the tribute system. What empires have we learned about that utilized the tribute system?",
          "answer": "Weaker states gave gifts and showed respect to a stronger ruler, and in return they got trade and protection. Ming China, the Aztec Empire and Songhai used tribute.",
          "accept": [
            "gifts for protection",
            "ming china"
          ],
          "why": "Tribute let large empires gain wealth and loyalty without ruling every place directly.",
          "src": {
            "label": "Wikipedia: Tributary system of China",
            "url": "https://en.wikipedia.org/wiki/Tributary_system_of_China"
          },
          "unsure": true,
          "note": "I could not check which empires your class listed; compare it with your notes."
        }
      ]
    },
    {
      "id": "32-japan",
      "name": "Japan and Songhai",
      "items": [
        {
          "id": "32-term-daimyo",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Powerful regional lords in Japan who controlled large areas of land and kept their own samurai armies.",
          "options": [
            "Zamindars",
            "Janissaries",
            "Daimyo",
            "Justice of the Peace"
          ],
          "answer": 2,
          "why": "Daimyo split power in Japan, which is why it was decentralized.",
          "src": {
            "label": "Wikipedia: Daimyo",
            "url": "https://en.wikipedia.org/wiki/Daimyo"
          }
        },
        {
          "id": "32-term-period-great-peace",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "The more than 250 years, from 1603 to 1868, when Japan had almost no civil war.",
          "options": [
            "Daimyo",
            "Romanov Dynasty",
            "English Bill of Rights",
            "Period of Great Peace"
          ],
          "answer": 3,
          "why": "Strong, steady rule kept Japan stable and at peace for a long time.",
          "src": {
            "label": "Wikipedia: Edo period",
            "url": "https://en.wikipedia.org/wiki/Edo_period"
          }
        },
        {
          "id": "32-term-tokugawa",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "The military government that ruled Japan from Edo from 1603 to 1868, where the shogun held real power and the emperor was only a symbol.",
          "options": [
            "Tokugawa Shogunate",
            "Daimyo",
            "Romanov Dynasty",
            "Janissaries"
          ],
          "answer": 0,
          "why": "The Tokugawa shoguns centralized Japan and kept the daimyo under control.",
          "src": {
            "label": "Wikipedia: Tokugawa shogunate",
            "url": "https://en.wikipedia.org/wiki/Tokugawa_shogunate"
          }
        },
        {
          "id": "32-q-daimyo-decentral",
          "type": "short",
          "q": "How did the daimyo contribute to decentralization in Japan?",
          "answer": "Each daimyo ruled his own lands with his own samurai army, laws and taxes, so power was spread among many lords instead of one central government.",
          "accept": [
            "ruled their own lands",
            "own armies"
          ],
          "why": "A land of many daimyo meant weak central control until the Tokugawa.",
          "src": {
            "label": "Wikipedia: Daimyo",
            "url": "https://en.wikipedia.org/wiki/Daimyo"
          }
        },
        {
          "id": "32-q-samurai-economic",
          "type": "short",
          "q": "Why did the samurai have significant economic power in Japan?",
          "answer": "They were the warrior class serving the daimyo and were paid in rice from the land, so they held wealth and controlled the land and taxes.",
          "accept": [
            "paid in rice",
            "controlled land"
          ],
          "why": "Rice stipends tied the samurai's income to the land they served.",
          "src": {
            "label": "Wikipedia: Samurai",
            "url": "https://en.wikipedia.org/wiki/Samurai"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-oda-nobunaga",
          "type": "short",
          "q": "Summarize the role of Oda Nobunaga.",
          "answer": "He was a daimyo who began unifying Japan in the late 1500s, using firearms to defeat rival daimyo and ending the old Ashikaga shogunate.",
          "accept": [
            "began unifying japan",
            "started unification"
          ],
          "why": "Others finished his work, ending with Tokugawa Ieyasu.",
          "src": {
            "label": "Wikipedia: Oda Nobunaga",
            "url": "https://en.wikipedia.org/wiki/Oda_Nobunaga"
          }
        },
        {
          "id": "32-q-tokugawa-reorganize",
          "type": "short",
          "q": "How did the Tokugawa shogunate reorganize the government of Japan?",
          "answer": "It centralized power under the shogun in Edo, kept the emperor as a figurehead, and let daimyo run their domains under the shogun's control.",
          "accept": [
            "power to the shogun",
            "shogun in edo"
          ],
          "why": "This ended the era of constant fighting among daimyo.",
          "src": {
            "label": "Wikipedia: Tokugawa shogunate",
            "url": "https://en.wikipedia.org/wiki/Tokugawa_shogunate"
          }
        },
        {
          "id": "32-q-tokugawa-daimyo",
          "type": "short",
          "q": "How did the Tokugawa Shogunate control the aristocratic daimyos?",
          "answer": "Daimyo had to spend every other year in Edo and leave their families there as hostages (alternate attendance, or sankin-kotai).",
          "accept": [
            "alternate attendance",
            "sankin-kotai",
            "hostages"
          ],
          "why": "The system kept daimyo watched and spending money on travel instead of fighting.",
          "src": {
            "label": "Wikipedia: Sankin-kōtai",
            "url": "https://en.wikipedia.org/wiki/Sankin-k%C5%8Dtai"
          }
        },
        {
          "id": "32-term-askia",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "A Songhai ruler who overthrew Sunni Baru, and whose reign was the high point of Songhai culture.",
          "options": [
            "Askia the Great",
            "Ivan IV",
            "Louis XIV",
            "Tokugawa Shogunate"
          ],
          "answer": 0,
          "why": "Askia Muhammad strengthened Islam and the government of Songhai.",
          "src": {
            "label": "Wikipedia: Askia Mohammad I",
            "url": "https://en.wikipedia.org/wiki/Askia_Mohammad_I"
          }
        },
        {
          "id": "32-q-askia-changes",
          "type": "short",
          "q": "Describe two ways Askia the Great of Songhai changed his empire in order to legitimize his rule.",
          "answer": "He strengthened Islam, going on a pilgrimage to Mecca and backing Muslim scholars and judges. He also reorganized the government with provinces, governors and a professional army.",
          "accept": [
            "strengthened islam",
            "reorganized government"
          ],
          "why": "Both steps made his rule look legitimate and made the empire easier to control.",
          "src": {
            "label": "Wikipedia: Askia Mohammad I",
            "url": "https://en.wikipedia.org/wiki/Askia_Mohammad_I"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        }
      ]
    },
    {
      "id": "32-ottoman-mughal",
      "name": "Mughal and Ottoman administration",
      "items": [
        {
          "id": "32-term-janissaries",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Elite Ottoman soldiers, mostly Christian boys taken from conquered lands, raised as Muslims and trained to be loyal only to the sultan.",
          "options": [
            "Daimyo",
            "Janissaries",
            "Boyars",
            "Zamindars"
          ],
          "answer": 1,
          "why": "The janissaries were a loyal standing army that helped the sultan control the empire.",
          "src": {
            "label": "Wikipedia: Janissary",
            "url": "https://en.wikipedia.org/wiki/Janissary"
          }
        },
        {
          "id": "32-term-zamindars",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "Local landholding lords in the Mughal Empire who collected tribute from peasants for the emperor.",
          "options": [
            "Boyars",
            "Janissaries",
            "Zamindars",
            "Justice of the Peace"
          ],
          "answer": 2,
          "why": "Zamindars kept a share of the money, and over time their power weakened the Mughal government.",
          "src": {
            "label": "Wikipedia: Zamindar",
            "url": "https://en.wikipedia.org/wiki/Zamindar"
          }
        },
        {
          "id": "32-term-taj-mahal",
          "type": "mc",
          "q": "Which term matches this description?",
          "stimulus": "A white marble tomb built at Agra in the 1600s by the Mughal emperor Shah Jahan for his wife, famous for its Islamic, Persian and Indian design.",
          "options": [
            "Tokugawa Shogunate",
            "Romanov Dynasty",
            "Absolutism",
            "Taj Mahal"
          ],
          "answer": 3,
          "why": "The Taj Mahal is the best-known example of Mughal architecture.",
          "src": {
            "label": "Wikipedia: Taj Mahal",
            "url": "https://en.wikipedia.org/wiki/Taj_Mahal"
          }
        },
        {
          "id": "32-q-akbar",
          "type": "short",
          "q": "Summarize how Akbar established an efficient government in India.",
          "answer": "He built a ranked bureaucracy of officials (the mansabdar system), set a steady tax system, and was tolerant of Hindus, which won loyalty across the empire.",
          "accept": [
            "mansabdar system",
            "tolerance",
            "tolerated hindus"
          ],
          "why": "Akbar ended the tax on non-Muslims and gave Hindus government jobs.",
          "src": {
            "label": "Wikipedia: Akbar",
            "url": "https://en.wikipedia.org/wiki/Akbar"
          }
        },
        {
          "id": "32-q-zamindars-impact",
          "type": "short",
          "q": "How did Zamindars eventually impact the Mughal Empire?",
          "answer": "They collected taxes, kept a large share and grew powerful with local armies. This weakened the emperor's control and the empire's finances.",
          "accept": [
            "weakened central control",
            "gained power"
          ],
          "why": "Zamindars helped decentralize the empire as the emperor lost power.",
          "src": {
            "label": "Wikipedia: Zamindar",
            "url": "https://en.wikipedia.org/wiki/Zamindar"
          }
        },
        {
          "id": "32-q-mughal-decline-economic",
          "type": "short",
          "q": "What eventually contributed to the economic decline of the Mughal empire?",
          "answer": "Costly wars, heavy taxes on peasants, and corrupt tax collectors cut the empire's income and weakened it.",
          "accept": [
            "costly wars",
            "heavy taxes",
            "corruption"
          ],
          "why": "Aurangzeb's long wars in the south were especially expensive.",
          "src": {
            "label": "Wikipedia: Mughal Empire",
            "url": "https://en.wikipedia.org/wiki/Mughal_Empire"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-mughal-architecture",
          "type": "short",
          "q": "Mughal India was marked by magnificent architectural accomplishments. What were they?",
          "answer": "Examples include the Taj Mahal, the Red Fort, Humayun's Tomb and Fatehpur Sikri.",
          "accept": [
            "taj mahal",
            "red fort"
          ],
          "why": "Mughal builders mixed Persian, Islamic and Indian styles.",
          "src": {
            "label": "Wikipedia: Mughal architecture",
            "url": "https://en.wikipedia.org/wiki/Mughal_architecture"
          }
        },
        {
          "id": "32-q-mughal-islamic-art",
          "type": "short",
          "q": "How did the Mughal Empire use art from Islam?",
          "answer": "They used geometric patterns, calligraphy, domes and arches in their buildings, and painted detailed miniatures in a Persian style.",
          "accept": [
            "geometric patterns",
            "calligraphy"
          ],
          "why": "Islamic art avoided pictures of God, so patterns and writing were common.",
          "src": {
            "label": "Wikipedia: Mughal architecture",
            "url": "https://en.wikipedia.org/wiki/Mughal_architecture"
          }
        },
        {
          "id": "32-q-mughal-art-show",
          "type": "short",
          "q": "What did the artistic accomplishments of Mughal India show?",
          "answer": "They showed the rulers' wealth and power and a blend of Islamic, Persian and Hindu cultures.",
          "accept": [
            "wealth and power",
            "blend of cultures"
          ],
          "why": "Grand art and buildings helped make Mughal rule look legitimate.",
          "src": {
            "label": "Wikipedia: Mughal architecture",
            "url": "https://en.wikipedia.org/wiki/Mughal_architecture"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-ottoman-taxes",
          "type": "short",
          "q": "How did the Ottomans raise taxes to support their empire and military?",
          "answer": "They used tax farming, taxed land and trade, and charged non-Muslims a special tax (the jizya).",
          "accept": [
            "tax farming",
            "tax farmers"
          ],
          "why": "Tax farming gave the government cash up front for its army.",
          "src": {
            "label": "Wikipedia: Iltizam",
            "url": "https://en.wikipedia.org/wiki/Iltizam"
          }
        },
        {
          "id": "32-q-tax-farmers-wealth",
          "type": "short",
          "q": "How did tax farmers grow wealthy? Were they corrupt?",
          "answer": "They bought the right to collect taxes, paid the state a set sum, and kept the extra. Many were corrupt because they overcharged peasants.",
          "accept": [
            "kept the extra",
            "kept part of the taxes"
          ],
          "why": "Yes, many squeezed peasants to raise their own profit.",
          "src": {
            "label": "Wikipedia: Tax farming",
            "url": "https://en.wikipedia.org/wiki/Tax_farming"
          }
        },
        {
          "id": "32-q-ottoman-change",
          "type": "short",
          "q": "How did the Ottoman Empire change at this time?",
          "answer": "It grew into a huge, wealthy empire with a strong central government. Later, power shifted to local leaders and tax farmers.",
          "accept": [
            "expanded",
            "grew"
          ],
          "why": "Conquests like Constantinople in 1453 started a long period of growth.",
          "src": {
            "label": "Wikipedia: Ottoman Empire",
            "url": "https://en.wikipedia.org/wiki/Ottoman_Empire"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-ottoman-continuity",
          "type": "short",
          "q": "What were some continuities in the Ottoman Empire at the time?",
          "answer": "The sultan stayed the supreme ruler, Islam stayed the state religion, and non-Muslims were allowed to run their own communities (the millet system).",
          "accept": [
            "sultan ruled",
            "islam"
          ],
          "why": "These things stayed steady even as the empire grew.",
          "src": {
            "label": "Wikipedia: Millet (Ottoman Empire)",
            "url": "https://en.wikipedia.org/wiki/Millet_(Ottoman_Empire)"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-grand-bazaar",
          "type": "short",
          "q": "What was the Grand Bazaar and why was it important?",
          "answer": "A huge covered market in Istanbul, started after the 1453 conquest. It was a hub of trade between Europe and Asia and brought wealth and taxes to the empire.",
          "accept": [
            "covered market",
            "marketplace"
          ],
          "why": "It showed Istanbul's role at the center of world trade.",
          "src": {
            "label": "Wikipedia: Grand Bazaar, Istanbul",
            "url": "https://en.wikipedia.org/wiki/Grand_Bazaar,_Istanbul"
          }
        },
        {
          "id": "32-q-istanbul-center",
          "type": "short",
          "q": "Istanbul was a center of what?",
          "answer": "Trade, culture, religion and government in the Ottoman Empire.",
          "accept": [
            "trade",
            "culture"
          ],
          "why": "Istanbul linked Europe and Asia, and was the Ottoman capital.",
          "src": {
            "label": "Wikipedia: Istanbul",
            "url": "https://en.wikipedia.org/wiki/Istanbul"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        },
        {
          "id": "32-q-ottoman-culture",
          "type": "short",
          "q": "Describe the cultural contributions of the Ottoman Empire.",
          "answer": "They built great mosques and palaces, such as the Suleymaniye Mosque by Sinan and Topkapi Palace, and made fine tiles, calligraphy and miniature paintings.",
          "accept": [
            "mosques",
            "architecture"
          ],
          "why": "Ottoman architecture blended Byzantine, Islamic and Persian styles.",
          "src": {
            "label": "Wikipedia: Ottoman architecture",
            "url": "https://en.wikipedia.org/wiki/Ottoman_architecture"
          },
          "unsure": true,
          "note": "I could not check this against the AMSCO textbook, so this is the standard answer; compare it with your notes."
        }
      ]
    }
  ],
  "checkFocus": {
    "topic": "3x-test",
    "share": 0.5
  }
});
