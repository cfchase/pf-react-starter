const mockDocument = ({
  id: 1,
  originalTextArray: [
    "President Hoover, Mr. Chief Justice, my friends:",
    "This is a day of national consecration. And I am certain that on this day my fellow Americans expect that on my induction into the Presidency I will address them with a candor and a decision which the present situation of our people impels. This is preeminently the time to speak the truth, the whole truth, frankly and boldly. Nor need we shrink from honestly facing conditions in our country today. This great Nation will endure as it has endured, will revive and will prosper. So, first of all, let me assert my firm belief that the only thing we have to fear is fear itself—nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance. In every dark hour of our national life a leadership of frankness and vigor has met with that understanding and support of the people themselves which is essential to victory. I am convinced that you will again give that support to leadership in these critical days.",
    "In such a spirit on my part and on yours we face our common difficulties. They concern, thank God, only material things. Values have shrunken to fantastic levels; taxes have risen; our ability to pay has fallen; government of all kinds is faced by serious curtailment of income; the means of exchange are frozen in the currents of trade; the withered leaves of industrial enterprise lie on every side; farmers find no markets for their produce; the savings of many years in thousands of families are gone.",
    "More important, a host of unemployed citizens face the grim problem of existence, and an equally great number toil with little return. Only a foolish optimist can deny the dark realities of the moment.",
    "Yet our distress comes from no failure of substance. We are stricken by no plague of locusts. Compared with the perils which our forefathers conquered because they believed and were not afraid, we have still much to be thankful for. Nature still offers her bounty and human efforts have multiplied it. Plenty is at our doorstep, but a generous use of it languishes in the very sight of the supply. Primarily this is because rulers of the exchange of mankind's goods have failed through their own stubbornness and their own incompetence, have admitted their failure, and have abdicated. Practices of the unscrupulous money changers stand indicted in the court of public opinion, rejected by the hearts and minds of men.",
    "True they have tried, but their efforts have been cast in the pattern of an outworn tradition. Faced by failure of credit they have proposed only the lending of more money. Stripped of the lure of profit by which to induce our people to follow their false leadership, they have resorted to exhortations, pleading tearfully for restored confidence. They know only the rules of a generation of self-seekers. They have no vision, and when there is no vision the people perish.",
    "The money changers have fled from their high seats in the temple of our civilization. We may now restore that temple to the ancient truths. The measure of the restoration lies in the extent to which we apply social values more noble than mere monetary profit.",
    "Happiness lies not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort. The joy and moral stimulation of work no longer must be forgotten in the mad chase of evanescent profits. These dark days will be worth all they cost us if they teach us that our true destiny is not to be ministered unto but to minister to ourselves and to our fellow men.",
    "Recognition of the falsity of material wealth as the standard of success goes hand in hand with the abandonment of the false belief that public office and high political position are to be valued only by the standards of pride of place and personal profit; and there must be an end to a conduct in banking and in business which too often has given to a sacred trust the likeness of callous and selfish wrongdoing. Small wonder that confidence languishes, for it thrives only on honesty, on honor, on the sacredness of obligations, on faithful protection, on unselfish performance; without them it cannot live. Restoration calls, however, not for changes in ethics alone. This Nation asks for action, and action now.",
    "Our greatest primary task is to put people to work. This is no unsolvable problem if we face it wisely and courageously. It can be accomplished in part by direct recruiting by the Government itself, treating the task as we would treat the emergency of a war, but at the same time, through this employment, accomplishing greatly needed projects to stimulate and reorganize the use of our natural resources.",
    "Hand in hand with this we must frankly recognize the overbalance of population in our industrial centers and, by engaging on a national scale in a redistribution, endeavor to provide a better use of the land for those best fitted for the land. The task can be helped by definite efforts to raise the values of agricultural products and with this the power to purchase the output of our cities. It can be helped by preventing realistically the tragedy of the growing loss through foreclosure of our small homes and our farms. It can be helped by insistence that the Federal, State, and local governments act forthwith on the demand that their cost be drastically reduced. It can be helped by the unifying of relief activities which today are often scattered, uneconomical, and unequal. It can be helped by national planning for and supervision of all forms of transportation and of communications and other utilities which have a definitely public character. There are many ways in which it can be helped, but it can never be helped merely by talking about it. We must act and act quickly.",
    "Finally, in our progress toward a resumption of work we require two safeguards against a return of the evils of the old order: there must be a strict supervision of all banking and credits and investments, so that there will be an end to speculation with other people's money; and there must be provision for an adequate but sound currency.",
    "These are the lines of attack. I shall presently urge upon a new Congress, in special session, detailed measures for their fulfillment, and I shall seek the immediate assistance of the several States.",
    "Through this program of action we address ourselves to putting our own national house in order and making income balance outgo. Our international trade relations, though vastly important, are in point of time and necessity secondary to the establishment of a sound national economy. I favor as a practical policy the putting of first things first. I shall spare no effort to restore world trade by international economic readjustment, but the emergency at home cannot wait on that accomplishment.",
    "The basic thought that guides these specific means of national recovery is not narrowly nationalistic. It is the insistence, as a first considerations, upon the interdependence of the various elements in and parts of the United States-a recognition of the old and permanently important manifestation of the American spirit of the pioneer. It is the way to recovery. It is the immediate way. It is the strongest assurance that the recovery will endure.",
    "In the field of world policy I would dedicate this Nation to the policy of the good neighbor—the neighbor who resolutely respects himself and, because he does so, respects the rights of others—the neighbor who respects his obligations and respects the sanctity of his agreements in and with a world of neighbors.",
    "If I read the temper of our people correctly, we now realize as we have never realized before our interdependence on each other; that we cannot merely take but we must give as well; that if we are to go forward, we must move as a trained and loyal army willing to sacrifice for the good of a common discipline, because without such discipline no progress is made, no leadership becomes effective. We are, I know, ready and willing to submit our lives and property to such discipline, because it makes possible a leadership which aims at a larger good. This I propose to offer, pledging that the larger purposes will bind upon us all as a sacred obligation with a unity of duty hitherto evoked only in time of armed strife.",
    "With this pledge taken, I assume unhesitatingly the leadership of this great army of our people dedicated to a disciplined attack upon our common problems.",
    "Action in this image and to this end is feasible under the form of government which we have inherited from our ancestors. Our Constitution is so simple and practical that it is possible always to meet extraordinary needs by changes in emphasis and arrangement without loss of essential form. That is why our constitutional system has proved itself the most superbly enduring political mechanism the modern world has produced. It has met every stress of vast expansion of territory, of foreign wars, of bitter internal strife, of world relations.",
    "It is to be hoped that the normal balance of Executive and legislative authority may be wholly adequate to meet the unprecedented task before us. But it may be that an unprecedented demand and need for undelayed action may call for temporary departure from that normal balance of public procedure.",
    "I am prepared under my constitutional duty to recommend the measures that a stricken Nation in the midst of a stricken world may require. These measures, or such other measures as the Congress may build out of its experience and wisdom, I shall seek, within my constitutional authority, to bring to speedy adoption.",
    "But in the event that the Congress shall fail to take one of these two courses, and in the event that the national emergency is still critical, I shall not evade the clear course of duty that will then confront me. I shall ask the Congress for the one remaining instrument to meet the crisis—broad Executive power to wage a war against the emergency, as great as the power that would be given to me if we were in fact invaded by a foreign foe.",
    "For the trust reposed in me I will return the courage and the devotion that befit the time. I can do no less.",
    "We face the arduous days that lie before us in the warm courage of national unity; with the clear consciousness of seeking old and precious moral values; with the clean satisfaction that comes from the stern performance of duty by old and young alike. We aim at the assurance of a rounded and permanent national life.",
    "We do not distrust the future of essential democracy. The people of the United States have not failed. In their need they have registered a mandate that they want direct, vigorous action. They have asked for discipline and direction under leadership. They have made me the present instrument of their wishes. In the spirit of the gift I take it.",
    "In this dedication of a Nation we humbly ask the blessing of God. May He protect each and every one of us. May He guide me in the days to come."
  ],
  sentiment: [
    {
      "category": ["PERSON"],
      "count": 1,
      "name": "Hoover",
      "sentiment": {"negative": 1}
    },
    {
      "category": ["PERSON"], "count": 1, "name": "Chief Justice", "sentiment": {"negative": 1}
    },
    {
      "category": ["NORP"],
      "count": 1,
      "name": "Americans",
      "sentiment": {"negative": 1}
    },
    {
      "category": ["ORG"], "count": 2, "name": "Nation", "sentiment": {"negative": 2}
    },
    {
      "category": ["ORG"],
      "count": 1,
      "name": "Nature",
      "sentiment": {"positive": 1}
    },
    {
      "category": ["ORG"], "count": 1, "name": "Plenty", "sentiment": {"positive": 1}
    },
    {
      "category": ["ORG"],
      "count": 1,
      "name": "This Nation",
      "sentiment": {"neutral": 1}
    },
    {
      "category": ["GPE"], "count": 1, "name": "Hand", "sentiment": {"negative": 1}
    },
    {
      "category": ["ORG"],
      "count": 4,
      "name": "Congress",
      "sentiment": {"negative": 3, "verypositive": 1}
    },
    {
      "category": ["GPE"], "count": 1, "name": "States", "sentiment": {"verypositive": 1}
    },
    {
      "category": ["GPE"],
      "count": 2,
      "name": "the United States",
      "sentiment": {"negative": 1, "positive": 1}
    },
    {
      "category": ["NORP"], "count": 1, "name": "American", "sentiment": {"positive": 1}
    },
    {
      "category": ["LAW"],
      "count": 1,
      "name": "Constitution",
      "sentiment": {"positive": 1}
    },
    {
      "category": ["ORG"], "count": 1, "name": "Executive", "sentiment": {"negative": 1}
    }]
});

export default mockDocument;