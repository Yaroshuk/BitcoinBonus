// TODO: fill messages
export const externalLink = "https://www.google.com/"

export const collectorMaxStep = 450

export const bitcoinCourse = 28085.37

export const memberChatMessages = [
  "Cras eget diam ac nunc suscipit pulvinar.",
  "Donec faucibus, elit vitae ultricies scelerisque, velit ligula vestibulum justo, eget congue justo ex in tellus. Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
  "Donec faucibus, elit vitae ultricies scelerisque, velit ligula vestibulum justo, eget congue justo ex in tellus.",
  "11Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
  "22 Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
  "33 Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
  "44  Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
  "55  Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
  "66  Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
  "77  Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
  "88  Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
  "99  Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat.",
  "100  Quisque fermentum semper eros sed lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In hac habitasse platea dictumst. Nam vel fringilla mauris, ut fermentum erat."
]

export const memberChatNiknames = [
  "Andy",
  "Jane",
  "Flix-11",
  "CoinKreeper",
  "Rob_13",
  "Trixter",
  "Anna_01",
  "F1rst",
  "Jackye",
  "Davit"
]

export const userState = {
  login: "user-1123454",
  password: "p34kjhjy!ee5",
  balance: 24356.45,
  rate: bitcoinCourse
}

export const managerFirstStep = [
  {
    text: "My name is Amelia, and I am the lead manager of the Service Payments Department 'Bitcoin Bonus' .Judging by the information I have, you have not been on the site for 364 days. Related to this question, have you previously received notice that you are entitled to payment from Bitcoin Bonus?"
  },
  {
    text: "Looking forward to hearing from you"
  },
  {
    text: " ",
    btn: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
      { label: "I don't rememder", value: "dont_remember" }
    ]
  }
]

export const managerSecondStep = [
  // don't remember
  {
    text: "I have an approved active request from your account to withdraw bitcoin bonuses earned by you. In order to transfer funds from the service to your card or wallet, it is necessary to have your application form. I will now look for this questionnaire, it will not take more than a minute."
  },
  {
    wait: true,
    text: "Thank you for the wait. I checked and I couldn't find your profile in our database. It means that you haven't withdrawn your bitcoins from the service yet."
  },
  {
    text: "Now I will bring out for you a special form for filling out the questionnaire and receiving funds."
  },
  {
    text: " ",
    btn: [{ label: "Fill out the form", value: "fill_form" }]
  }
]

export const managerThirdStep = [
  // No
  {
    text: "Thank you for your response. Your account has an approved request to withdraw bitcoin bonuses earned. To proceed with the transfer to your card or wallet, we need the completed withdrawal application form. I'll quickly retrieve it for you. It should take no more than a minute."
  },
  {
    wait: true,
    text: "Thank you for your patience. After reviewing our database, I couldn't locate your profile, indicating that you haven't yet withdrawn your bitcoins from our service."
  },
  {
    text: "I'll now present to you the special form for completing the withdrawal application and receiving your funds."
  },
  {
    text: " ",
    btn: [{ label: "Fill out the form", value: "fill_form" }]
  }
]

export const managerFourthStep = [
  // YES
  {
    text: "Thank you for your response. Your account has an approved request to withdraw bitcoin bonuses earned. To proceed with the transfer to your card or wallet, we need the completed withdrawal application form. I'll quickly retrieve it for you. It should take no more than a minute."
  },
  {
    wait: true,
    text: "Thank you for your patience. After reviewing our database, I couldn't locate your profile, indicating that you haven't yet withdrawn your bitcoins from our service."
  },
  {
    text: "I'll now present to you the special form for completing the withdrawal application and receiving your funds."
  },
  {
    text: " ",
    btn: [{ label: "Fill out the form", value: "fill_form" }]
  }
]

export const managerFifthStep = [
  // Currency exchange
  {
    text: "I received a questionnaire from you"
  },
  {
    text: "To complete the payout, you and I must now exchange your bitcoins."
  },
  {
    text: "Minimum exchange rate by special service Binance, which amounts to 0,25%"
  },
  {
    balance: true,
    text: "After the currency conversion you will receive $-balance-"
  },
  {
    text: " ",
    btn: [{ label: "Convert currency", value: "convert" }]
  }
]

export const managerBonuses = [
  {
    text: "My name is Amelia, and I am the lead manager of the Service Payments Department 'Bitcoin Bonus' .Judging by the information I have, you have not been on the site for 364 days. Related to this question, have you previously received notice that you are entitled to payment from Bitcoin Bonus?"
  },
  {
    text: "Looking forward to hearing from you"
  },
  // I don't remember btn
  {
    wait: true,
    text: "I have an approved active request from your account to withdraw bitcoin bonuses earned by you. In order to transfer funds from the service to your card or wallet, it is necessary to have your application form. I will now look for this questionnaire, it will not take more than a minute."
  },
  {
    text: "Thank you for the wait. I checked and I couldn't find your profile in our database. It means that you haven't withdrawn your bitcoins from the service yet."
  },
  {
    text: "Now I will bring out for you a special form for filling out the questionnaire and receiving funds."
  },
  // Fill out the form btn
  {
    text: "I received a questionnaire from you"
  },
  {
    text: "To complete the payout, you and I must now exchange your bitcoins."
  },
  {
    text: "Minimum exchange rate by special service Binance, which amounts to 0,25%"
  },
  {
    text: "After the currency conversion you will receive $37065.26"
  }
  // Convert currency btn
]

export const originalMessages = [
  {
    user: "people",
    colorText: "",
    name: "Rahim",
    text: "MAXiMUS, I'm more than sure that you do the same))) It's stupid to mine from one device, there is never enough money)😁",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Emma",
    text: "😳I have not been so happy for a long time, today's bitcoin rate is just happy!",
    attach: {
      img: "qiwi.jpg"
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Andrew",
    text: "Wow, what can really overheat the phone???🤭",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "NOiSy",
    text: "Andrew, no, he won't get anything! You listen to more of these idiots that they write here! I have been making money on my iPhone for the 2nd year at full capacity and nothing to it!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "John",
    text: "Emma, well, no matter what anyone says, but I am sure that the future belongs to cryptocurrencies. Soon paper money will lose its value in this world!🤫",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "David J.",
    text: "Of course nothing will happen! Who writes this, he quietly buys a bunch of phones and computers in order to collect more crypto with the help of this service!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Andrew",
    text: "Thank you! Convinced me! I will keep farming.😋",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "HotPepper05",
    text: "!!! I'm here 100 phones 📱📱📱 I can connect yours",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Olga",
    text: "No thanks!😤",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Akmal",
    text: "HotPepper05, you again drunk strong drinks and wake up here 'clownado' show?🤡",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "HotPepper05",
    text: "Ys, I d't care",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "HotPepper05",
    text: "how many ordinary onlookers I registered here - you can’t even imagine 🤬",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "NOiSy",
    text: "HotPepper05, let me guess. Mining crypto from their phones without them knowing?",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "System message",
    text: "HotPepper05 - user with this login has been blocked",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "WhiteT: (Administrator)",
    text: "User ID:55901228 was blocked for violating the rules of service. The IP of the blocked device is not available for cloud mining. Enjoy Bitcoin Bonus!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Olga",
    text: "Thank you! And that spoils the mood, and today is a great day for withdrawal!🤑",
    attach: {
      img: "alfa1.jpg"
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "NOiSy",
    text: "WhiteT, I almost got to the bottom of it, I had to wait)",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "WhiteT: (Administrator)",
    text: "NOiSy, we understand everything about this character. We try to maintain on the Bitcoin Bonus servers not only uninterrupted operation, but also pleasant communication.",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "NOiSy",
    text: "Understand! I joke like that))",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Kaylee",
    text: "Hello! I'm new here, I just switched to the site, and it turns out I've been here for like a whole month. And accumulated 5,000! How to withdraw? Tell me please!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "NOiSy",
    text: "Kaylee, oh you're not the first person to write about this today))",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Mary",
    text: "Kaylee, you're lucky you found out in time! This happens when the phone is either new or connected to Bitcoin Bonus through some downloaded application. And scammers grumble from your phone in this way! If you logged in, they either forgot or haven't gotten to your phone yet",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Andrew",
    text: "NOiSy, that's lucky!)) I would like that from the beginning, I went in and immediately 45k))",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Kaylee",
    text: "but how to get it out ??? Fraudsters won't take it?!!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Rahim",
    text: "Kaylee, you need to enter my card))😈",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Mary",
    text: "Kaylee, don’t worry, if you were able to enter your personal account, then they will lose access. This is the security system",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Bryan",
    text: "All the best! How are you doing?)) What about the course, why has it grown so much?? Did you withdraw all the money today?",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "NOiSy",
    text: "Rahim, you are the richest and most cunning here, what is your secret?!🤠",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Andrew",
    text: "It has begun, it will again argue about who has the income, phone, etc. is better!! Enough please",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Kaylee",
    text: "Mary, HOW TO BRING HELP! I will pay you!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Mary",
    text: "Kaylee, I don't want your money! I make good money here🙄",
    attach: {
      img: "qiwi2.jpg"
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Mary",
    text: "Kaylee, first, collect all the bitcoin bonuses that the system asks for withdrawal!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Kaylee",
    text: "Okay, I'll do it now!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Rahim",
    text: "No one here is going to argue with him. I already told him my opinion about him! I think we understand each other!))",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "NOiSy",
    text: "Rahim, of course my dear friend!)",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Andrew",
    text: "Kaylee, everything is very simple there! It's time to ask the administration to create new chats! so that newcomers do not chirp here!)",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Kaylee",
    text: "Mary, I did! Should I press output??",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Mary",
    text: "Andrew, Not everyone understands what's what from the very beginning! Be patient please! Or if you know how to earn a lot here, share your experience with newbies! Chat will be more enjoyable!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Mary",
    text: "Kaylee, yes, you press the button to withdraw. Then follow the instructions of the system. If you do not have a personal Swift gateway, you can rent it on the site, a very convenient thing. especially if Plus",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "NOiSy",
    text: "I support you! There are, of course, a bunch of 'Standards', they are all unanimous, will there be payments today)) Poor damn",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Vlad",
    text: "People! Hi everyone! And how to get to the Russian site Bitcoin Bonus. I want to chat about mining with Russians)",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "LolaBTC",
    text: "Vlad, write to the manager, they can send you to western servers. Only this is not accurate, your IP is here",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Alexander",
    text: "Vlad, friend, what to do there ?! They have the same stupid flood there, there would be moderators!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Arianna",
    text: "Hello! Can you please tell me if I can withdraw bitcoins immediately to my wallet in binance?",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "NOiSy",
    text: "Arianna No. Such a function is not available on BTCuPAY yet it is possible. But they pay less for mining there... And they don’t give Swift there, - 'look for youruser, as they say, how to withdraw from us!'",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Kaylee",
    text: "THANK YOU VERY MUCH! I still managed to get all $4500 on the card now! Thank you bitcoin bonus",
    attach: {
      img: "sber.jpg"
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Daud78",
    text: "All Health and Kindness!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Jscience0",
    text: "Daud, and you are a kind person! Ready to withdraw a bunch of bonuses today?)",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Max Pavlov",
    text: "Kaylee, will you continue to use the service?",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Kaylee",
    text: "Maxim, of course! It would be foolish to refuse to still not believe in such luck!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "David",
    text: "Kaylee, there is even more than just luck) 45 thousand today, next time you will withdraw 15 thousand dollars! We are saving everything here and we are waiting for a good course)",
    attach: {
      img: "tinkof1.jpg"
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "MaryMaru",
    text: "I try not to tell anyone I know that you can earn money this way! I usually just link their phones to my account and earn on it))",
    attach: {
      img: "qiwi1.jpg"
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Nikola19",
    text: "MaryMaru, don't you find this a bit mean?!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Roberto",
    text: "oooh. I didn’t expect such a game here, so this is what those who abuse other people’s phones look like",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Kaylee",
    text: "MaryMaru, I'm lucky that I saw during the SMS in the mail about blocking the account!",
    attach: {
      img: "tinkof2.jpg"
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "MaryMaru",
    text: "Congratulations)))",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "FranklinRus",
    text: "be like that!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "MaryMaru",
    text: "fuck you all! I have a lot of money as well as accounts here!",
    attach: {
      img: "qiwi3.jpg"
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "System message",
    text: "MaryMaru - user with this login has been blocked",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "WhiteT: (Administrator) ",
    text: "User ID:19901228 was blocked for violating the rules of the service. The IP of the blocked device is not available for cloud mining. Enjoy Bitcoin Bonus!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "FranklinRus",
    text: "Here comes the ban!))",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Roberto",
    text: "WhiteT, very timely thanks!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "WhiteT: (Administrator)",
    text: "We make sure that the servers have a pleasant atmosphere in everything.",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Daud78",
    text: "WhiteT, noticeably!",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Daud78",
    text: "Friends! The course is just amazing! Output",
    attach: {
      img: "tinkof3.jpg"
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "NOiSy",
    text: "Daud78, It is already slowly declining, better hurry up, everything has already been withdrawn here))",
    attach: {
      img: null
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Erin",
    text: "Daud78, Get it out soon! You will lose a lot, I have already lost 2 thousand",
    attach: {
      img: "sber1.jpg"
    },
    time: null
  },
  {
    user: "people",
    colorText: "",
    name: "Rich",
    text: "I earned more than 17000 dollars on this service! Get rich now!",
    attach: {
      img: "sber2.jpg"
    },
    time: null
  }
]
