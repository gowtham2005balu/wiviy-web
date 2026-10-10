export const G = {
  green: 'linear-gradient(142.41deg, #EFE9C8 0%, #9DB26E 100%)',
  pink: 'linear-gradient(142.41deg, #E6D3E0 0%, #C48FB8 100%)',
  blue: 'linear-gradient(142.41deg, #CFE0F0 0%, #6F93B8 100%)',
  amber: 'linear-gradient(142.41deg, #F0D9C0 0%, #C48F4F 100%)',
  sage: 'linear-gradient(142.41deg, #D7E6C6 0%, #8FAE6E 100%)',
  rose: 'linear-gradient(142.41deg, #F6E0EA 0%, #D488AC 100%)',
  paleBlue: 'linear-gradient(142.41deg, #CFE0F0 0%, #9DB9D6 100%)',
  paleAmber: 'linear-gradient(142.41deg, #F0D9C0 0%, #D8A878 100%)',
};

export const FEATURED_ARTICLE = {
  id: 1,
  slug: 'first-move',
  category: 'Dating',
  title: 'How to make the first move without overthinking it',
  desc: 'A practical guide to making the first move without turning connection into a performance.',
  meta: 'By Wiviy · August 31, 2026 · 6 min read',
  readTime: '6 min read',
  date: 'August 31, 2026',
  gradient: 'linear-gradient(144.18deg, #EFE9C8 0%, #9DB26E 100%)',
  quote: "Connection doesn't usually happen because someone found the perfect sentence. It happens because someone decided to start.",
  sections: [
    {
      heading: 'Start with something real',
      paragraphs: [
        'Making the first move can feel like a performance. You want to say the right thing. You want to seem interesting. You don’t want to come across too strong.',
        'The pressure to be clever usually gets in the way of being clear. A first message doesn’t need to be quotable — it needs to be honest. Reference something in their profile, ask a real question, or simply say what made you want to say hello. Specific beats impressive, almost every time.',
      ],
    },
    {
      heading: 'Forget the perfect opener',
      paragraphs: [
        'There’s no opener that works on everyone, because the goal was never to write something universally charming — it was to start a conversation with one specific person. Read what they’ve shared. Respond to that. If it feels like something you’d actually say out loud, it’s probably a good opener.',
      ],
      callout: 'Three things worth remembering before you hit send: be specific, be yourself, and don’t wait for the "right" moment — there rarely is one.',
    },
    {
      heading: 'Give the conversation somewhere to go',
      paragraphs: [
        'A good first message often does one of two things: it asks something the other person will enjoy answering, or it shares something small about you that invites a reply. Avoid questions that can be answered with a single word — they tend to end conversations rather than start them.',
      ],
      bullets: [
        'Ask about something specific in their profile, not a generic "how’s your day."',
        'Share a short reaction or opinion — it gives them something to respond to.',
        'Keep it short enough that replying feels easy, not like homework.',
      ],
    },
    {
      heading: 'Know when to take it offline',
      paragraphs: [
        'Texting can only carry a connection so far. Once a conversation has a bit of rhythm — you’re both replying quickly, asking questions, finding things to laugh about — that’s usually a good sign it’s ready to move somewhere else, whether that’s a call or meeting in person. Waiting too long to suggest it can drain the momentum you’ve built.',
        'There’s no perfect formula for the first move. But the version that works is almost always the one that sounds like you, sent without waiting for a guarantee.',
      ],
    },
  ],
};

export const BLOG_ARTICLES = [
  FEATURED_ARTICLE,
  {
    id: 2,
    slug: 'better-questions',
    category: 'Conversation',
    title: 'Why good conversations start with better questions',
    desc: 'How asking specific, open-ended questions can turn awkward small talk into genuine connection.',
    meta: 'By Wiviy · August 24, 2026 · 5 min read',
    readTime: '5 min read',
    date: 'August 24, 2026',
    gradient: G.pink,
    quote: 'The questions we ask signal how curious we are about someone’s world, not just their resume.',
    sections: [
      {
        heading: 'Moving past the interview trap',
        paragraphs: [
          'Most early conversations stall because they feel like polite interrogations. "Where are you from?" and "What do you do?" rarely ignite genuine enthusiasm.',
          'Instead of asking for facts, ask for stories or perspectives. Ask about the favorite part of their week, an unexpected obsession, or the thing they are most excited about right now.',
        ],
      },
      {
        heading: 'Listening for the unspoken hook',
        paragraphs: [
          'Great conversationalists aren’t thinking about what to say next while the other person is talking. They listen for energy shifts and follow up on details that sparked excitement.',
        ],
        callout: 'Curiosity is magnetic. When you listen to understand rather than to impress, conversations flow effortlessly.',
      },
      {
        heading: 'Three questions that spark real momentum',
        paragraphs: [
          'Here are simple frameworks you can use to skip small talk and discover shared interests organically:',
        ],
        bullets: [
          '"What’s something you’ve been completely hooked on lately?"',
          '"If you had a completely free weekend with zero obligations, where would you be?"',
          '"What’s an opinion you hold that most people disagree with?"',
        ],
      },
    ],
  },
  {
    id: 3,
    slug: 'profile-tips',
    category: 'Wiviy',
    title: "Your profile doesn't have to say everything about you",
    desc: 'Leaving room for curiosity is often the best way to invite someone in.',
    meta: 'By Wiviy · August 20, 2026 · 4 min read',
    readTime: '4 min read',
    date: 'August 20, 2026',
    gradient: G.blue,
    quote: 'A great profile is an open invitation, not an exhaustive autobiography.',
    sections: [
      {
        heading: 'Leave room for discovery',
        paragraphs: [
          'When crafting your profile, it’s tempting to squeeze every hobby, travel photo, and personality test into limited space.',
          'The most memorable profiles leave conversational doorways — small clues that invite someone to ask, "Tell me more about that."',
        ],
      },
      {
        heading: 'Show, don’t just summarize',
        paragraphs: [
          'Instead of saying "I love food and travel," show a candid photo grabbing street tacos or mention the obscure dish you’ve been trying to master.',
        ],
        callout: 'Specific details create natural icebreakers. Broad statements blend into the background.',
      },
    ],
  },
  {
    id: 4,
    slug: 'meeting-irl',
    category: 'IRL',
    title: 'What makes someone worth meeting IRL?',
    desc: 'Moving past the screen: the signals that someone is worth meeting in real life.',
    meta: 'By Wiviy · August 15, 2026 · 5 min read',
    readTime: '5 min read',
    date: 'August 15, 2026',
    gradient: G.amber,
    quote: 'Real chemistry can only truly be discovered when you step out from behind the screen.',
    sections: [
      {
        heading: 'Beyond endless messaging',
        paragraphs: [
          'Digital banter can be addictive, but endless pen pal relationships often create unrealistic expectations.',
          'Look for mutual effort, shared curiosity, and consistent enthusiasm as your green lights to suggest a low-pressure in-person coffee or walk.',
        ],
      },
      {
        heading: 'Keep the first meet-up low stakes',
        paragraphs: [
          'A first meet-up doesn’t need to be a formal three-course dinner. Pick a comfortable spot with an easy natural ending time so both of you can relax.',
        ],
      },
    ],
  },
  {
    id: 5,
    slug: 'first-message',
    category: 'Conversation',
    title: 'The art of sending a first message',
    desc: 'Skip the generic greetings and craft messages that spark memorable exchanges.',
    meta: 'By Wiviy · August 10, 2026 · 4 min read',
    readTime: '4 min read',
    date: 'August 10, 2026',
    gradient: G.sage,
    quote: 'A message that feels tailor-made always stands out in a sea of generic "hey"s.',
    sections: [
      {
        heading: 'Find the single detail that caught your eye',
        paragraphs: [
          'The easiest way to start is by picking one distinct element in their photos or prompts and reacting with warmth and curiosity.',
          'Keep your note concise, playful, and easy to reply to in thirty seconds or less.',
        ],
      },
    ],
  },
  {
    id: 6,
    slug: 'dating-rules',
    category: 'Dating',
    title: "Dating without following someone else's rules",
    desc: 'Unlearning dating advice that feels unnatural and creating connections on your own terms.',
    meta: 'By Wiviy · August 6, 2026 · 5 min read',
    readTime: '5 min read',
    date: 'August 6, 2026',
    gradient: G.rose,
    quote: 'Connection works best when it feels true to who you actually are, not a script.',
    sections: [
      {
        heading: 'Ditch the artificial waiting games',
        paragraphs: [
          'Waiting three days to text back or pretending not to care is exhausting. Directness and authenticity save time and attract people who value clear communication.',
        ],
      },
    ],
  },
  {
    id: 7,
    slug: 'when-to-meet',
    category: 'Dating',
    title: 'When should you actually meet someone?',
    desc: 'Reading the signs that a conversation is ready to move offline.',
    meta: 'By Wiviy · July 12, 2026 · 4 min read',
    readTime: '4 min read',
    date: 'July 12, 2026',
    gradient: G.paleBlue,
    quote: 'Timing is about rhythm and mutual responsiveness, not an arbitrary number of days.',
    sections: [
      {
        heading: 'Catch the wave of enthusiasm',
        paragraphs: [
          'When conversations are quick, laughter is easy, and both people are asking engaging questions, suggest meeting up before the natural momentum fades.',
        ],
      },
    ],
  },
  {
    id: 8,
    slug: 'modern-dating',
    category: 'Culture',
    title: 'A better way to think about modern dating',
    desc: 'Less performance, more curiosity. How changing your mindset changes your experience.',
    meta: 'By Wiviy · July 5, 2026 · 5 min read',
    readTime: '5 min read',
    date: 'July 5, 2026',
    gradient: G.paleAmber,
    quote: 'Treat dating as an opportunity to discover interesting humans rather than a test of worth.',
    sections: [
      {
        heading: 'Shifting from evaluation to connection',
        paragraphs: [
          'When you stop worrying whether someone approves of you and start focusing on whether you enjoy their company, dating becomes substantially lighter and more enjoyable.',
        ],
      },
    ],
  },
  {
    id: 9,
    slug: 'connection-styles',
    category: 'Relationships',
    title: "Why connection doesn't always look the same",
    desc: 'There is no single right way to meet someone. Embracing different rhythms of connection.',
    meta: 'By Wiviy · June 28, 2026 · 4 min read',
    readTime: '4 min read',
    date: 'June 28, 2026',
    gradient: G.sage,
    quote: 'Everyone moves at their own pace, and the right match will meet you where you are.',
    sections: [
      {
        heading: 'Honoring your pace and boundaries',
        paragraphs: [
          'Some connections spark instantly, while others build steadily over time. Giving yourself permission to find your natural tempo is key to lasting fulfillment.',
        ],
      },
    ],
  },
];

export const MORE_FROM_WIVIY = [
  {
    slug: 'when-to-meet',
    category: 'Dating',
    title: 'When should you actually meet someone?',
    desc: 'Reading the signs that a conversation is ready to move offline.',
    date: 'Jul 12, 2026',
    gradient: G.paleBlue,
  },
  {
    slug: 'modern-dating',
    category: 'Culture',
    title: 'A better way to think about modern dating',
    desc: 'Less performance, more curiosity.',
    date: 'Jul 5, 2026',
    gradient: G.paleAmber,
  },
  {
    slug: 'connection-styles',
    category: 'Relationships',
    title: "Why connection doesn't always look the same",
    desc: 'There is no single right way to meet someone.',
    date: 'Jun 28, 2026',
    gradient: G.sage,
  },
];
