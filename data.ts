const data = [
  {
    id: 1,
    en: "be",
    az: "olmaq",
  },
  {
    id: 2,
    en: "and",
    az: "və",
  },
  {
    id: 3,
    en: "in",
    az: "içində",
  },
  {
    id: 4,
    en: "to",
    az: "üçün",
  },
  {
    id: 5,
    en: "have",
    az: "var",
  },
  {
    id: 6,
    en: "it",
    az: "o",
  },
  {
    id: 7,
    en: "I",
    az: "Mən",
  },
  {
    id: 8,
    en: "that",
    az: "ki",
  },
  {
    id: 9,
    en: "for",
    az: "üçün",
  },
  {
    id: 10,
    en: "you",
    az: "Sən",
  },
  {
    id: 11,
    en: "he",
    az: "o",
  },
  {
    id: 12,
    en: "with",
    az: "ilə",
  },
  {
    id: 13,
    en: "on",
    az: "yandır",
  },
  {
    id: 14,
    en: "do",
    az: "etmək",
  },
  {
    id: 15,
    en: "say",
    az: "deyin",
  },
  {
    id: 16,
    en: "this",
    az: "bu",
  },
  {
    id: 17,
    en: "they",
    az: "onlar",
  },
  {
    id: 18,
    en: "but",
    az: "Amma",
  },
  {
    id: 19,
    en: "we",
    az: "Biz",
  },
  {
    id: 20,
    en: "his",
    az: "onun",
  },
  {
    id: 21,
    en: "from",
    az: "dən",
  },
  {
    id: 22,
    en: "not",
    az: "deyil",
  },
  {
    id: 23,
    en: "n't",
    az: "n",
  },
  {
    id: 24,
    en: "by",
    az: "tərəfindən",
  },
  {
    id: 25,
    en: "she",
    az: "o",
  },
  {
    id: 26,
    en: "or",
    az: "və ya",
  },
  {
    id: 27,
    en: "as",
    az: "kimi",
  },
  {
    id: 28,
    en: "what",
    az: "nə",
  },
  {
    id: 29,
    en: "go",
    az: "get",
  },
  {
    id: 30,
    en: "their",
    az: "onların",
  },
  {
    id: 31,
    en: "can",
    az: "bacarmaq",
  },
  {
    id: 32,
    en: "who",
    az: "kim",
  },
  {
    id: 33,
    en: "get",
    az: "almaq",
  },
  {
    id: 34,
    en: "if",
    az: "əgər",
  },
  {
    id: 35,
    en: "would",
    az: "olardı",
  },
  {
    id: 36,
    en: "her",
    az: "onun",
  },
  {
    id: 37,
    en: "all",
    az: "hamısı",
  },
  {
    id: 38,
    en: "my",
    az: "mənim",
  },
  {
    id: 39,
    en: "make",
    az: "etmək",
  },
  {
    id: 40,
    en: "about",
    az: "haqqında",
  },
  {
    id: 41,
    en: "know",
    az: "bilin",
  },
  {
    id: 42,
    en: "will",
    az: "edəcək",
  },
  {
    id: 43,
    en: "up",
    az: "yuxarı",
  },
  {
    id: 44,
    en: "one",
    az: "biri",
  },
  {
    id: 45,
    en: "time",
    az: "vaxt",
  },
  {
    id: 46,
    en: "there",
    az: "orada",
  },
  {
    id: 47,
    en: "year",
    az: "il",
  },
  {
    id: 48,
    en: "so",
    az: "belə ki",
  },
  {
    id: 49,
    en: "think",
    az: "düşün",
  },
  {
    id: 50,
    en: "when",
    az: "nə vaxt",
  },
  {
    id: 51,
    en: "which",
    az: "hansı",
  },
  {
    id: 52,
    en: "them",
    az: "onları",
  },
  {
    id: 53,
    en: "some",
    az: "bəzi",
  },
  {
    id: 54,
    en: "me",
    az: "menim",
  },
  {
    id: 55,
    en: "people",
    az: "Xalq",
  },
  {
    id: 56,
    en: "take",
    az: "götürmək",
  },
  {
    id: 57,
    en: "out",
    az: "çöldə",
  },
  {
    id: 58,
    en: "into",
    az: "daxil",
  },
  {
    id: 59,
    en: "just",
    az: "sadəcə",
  },
  {
    id: 60,
    en: "see",
    az: "görmək",
  },
  {
    id: 61,
    en: "him",
    az: "Ona",
  },
  {
    id: 62,
    en: "your",
    az: "sənin",
  },
  {
    id: 63,
    en: "come",
    az: "gəl",
  },
  {
    id: 64,
    en: "could",
    az: "bilərdi",
  },
  {
    id: 65,
    en: "now",
    az: "İndi",
  },
  {
    id: 66,
    en: "than",
    az: "daha çox",
  },
  {
    id: 67,
    en: "like",
    az: "kimi",
  },
  {
    id: 68,
    en: "other",
    az: "digərləri",
  },
  {
    id: 69,
    en: "how",
    az: "Necə",
  },
  {
    id: 70,
    en: "then",
    az: "sonra",
  },
  {
    id: 71,
    en: "its",
    az: "onun",
  },
  {
    id: 72,
    en: "our",
    az: "bizim",
  },
  {
    id: 73,
    en: "two",
    az: "iki",
  },
  {
    id: 74,
    en: "more",
    az: "daha çox",
  },
  {
    id: 75,
    en: "these",
    az: "bunlar",
  },
  {
    id: 76,
    en: "want",
    az: "istəmək",
  },
  {
    id: 77,
    en: "way",
    az: "yol",
  },
  {
    id: 78,
    en: "look",
    az: "baxmaq",
  },
  {
    id: 79,
    en: "first",
    az: "əvvəlcə",
  },
  {
    id: 80,
    en: "also",
    az: "həmçinin",
  },
  {
    id: 81,
    en: "new",
    az: "yeni",
  },
  {
    id: 82,
    en: "because",
    az: "çünki",
  },
  {
    id: 83,
    en: "day",
    az: "gün",
  },
  {
    id: 84,
    en: "use",
    az: "istifadə etmək",
  },
  {
    id: 85,
    en: "no",
    az: "yox",
  },
  {
    id: 86,
    en: "man",
    az: "adam",
  },
  {
    id: 87,
    en: "find",
    az: "tapmaq",
  },
  {
    id: 88,
    en: "here",
    az: "burada",
  },
  {
    id: 89,
    en: "thing",
    az: "şey",
  },
  {
    id: 90,
    en: "give",
    az: "vermək",
  },
  {
    id: 91,
    en: "many",
    az: "çoxu",
  },
  {
    id: 92,
    en: "well",
    az: "yaxşı",
  },
  {
    id: 93,
    en: "only",
    az: "yalnız",
  },
  {
    id: 94,
    en: "those",
    az: "olanlar",
  },
  {
    id: 95,
    en: "tell",
    az: "söylə",
  },
  {
    id: 96,
    en: "very",
    az: "çox",
  },
  {
    id: 97,
    en: "even",
    az: "hətta",
  },
  {
    id: 98,
    en: "back",
    az: "geri",
  },
  {
    id: 99,
    en: "any",
    az: "hər hansı",
  },
  {
    id: 100,
    en: "good",
    az: "yaxşı",
  },
  {
    id: 101,
    en: "woman",
    az: "qadın",
  },
  {
    id: 102,
    en: "through",
    az: "vasitəsilə",
  },
  {
    id: 103,
    en: "us",
    az: "bizi",
  },
  {
    id: 104,
    en: "life",
    az: "həyat",
  },
  {
    id: 105,
    en: "child",
    az: "uşaq",
  },
  {
    id: 106,
    en: "work",
    az: "işləmək",
  },
  {
    id: 107,
    en: "down",
    az: "aşağı",
  },
  {
    id: 108,
    en: "may",
    az: "bilər",
  },
  {
    id: 109,
    en: "after",
    az: "sonra",
  },
  {
    id: 110,
    en: "should",
    az: "olmalıdır",
  },
  {
    id: 111,
    en: "call",
    az: "zəng edin",
  },
  {
    id: 112,
    en: "world",
    az: "dünya",
  },
  {
    id: 113,
    en: "over",
    az: "üzərində",
  },
  {
    id: 114,
    en: "school",
    az: "məktəb",
  },
  {
    id: 115,
    en: "still",
    az: "yenə də",
  },
  {
    id: 116,
    en: "try",
    az: "cəhd edin",
  },
  {
    id: 117,
    en: "last",
    az: "son",
  },
  {
    id: 118,
    en: "ask",
    az: "soruş",
  },
  {
    id: 119,
    en: "need",
    az: "ehtiyac",
  },
  {
    id: 120,
    en: "too",
    az: "də",
  },
  {
    id: 121,
    en: "feel",
    az: "hiss etmək",
  },
  {
    id: 122,
    en: "three",
    az: "üç",
  },
  {
    id: 123,
    en: "state",
    az: "dövlət",
  },
  {
    id: 124,
    en: "never",
    az: "heç vaxt",
  },
  {
    id: 125,
    en: "become",
    az: "olmaq",
  },
  {
    id: 126,
    en: "between",
    az: "arasında",
  },
  {
    id: 127,
    en: "high",
    az: "yüksəkdir",
  },
  {
    id: 128,
    en: "really",
    az: "həqiqətən",
  },
  {
    id: 129,
    en: "something",
    az: "bir şey",
  },
  {
    id: 130,
    en: "most",
    az: "ən çox",
  },
  {
    id: 131,
    en: "another",
    az: "başqa",
  },
  {
    id: 132,
    en: "much",
    az: "çox",
  },
  {
    id: 133,
    en: "family",
    az: "ailə",
  },
  {
    id: 134,
    en: "own",
    az: "sahibi",
  },
  {
    id: 135,
    en: "leave",
    az: "buraxmaq",
  },
  {
    id: 136,
    en: "put",
    az: "qoy",
  },
  {
    id: 137,
    en: "old",
    az: "köhnə",
  },
  {
    id: 138,
    en: "while",
    az: "edərkən",
  },
  {
    id: 139,
    en: "mean",
    az: "deməkdir",
  },
  {
    id: 140,
    en: "keep",
    az: "saxlamaq",
  },
  {
    id: 141,
    en: "student",
    az: "tələbə",
  },
  {
    id: 142,
    en: "why",
    az: "niyə",
  },
  {
    id: 143,
    en: "let",
    az: "qoy",
  },
  {
    id: 144,
    en: "great",
    az: "əla",
  },
  {
    id: 145,
    en: "same",
    az: "eyni",
  },
  {
    id: 146,
    en: "big",
    az: "böyük",
  },
  {
    id: 147,
    en: "group",
    az: "qrup",
  },
  {
    id: 148,
    en: "begin",
    az: "başlamaq",
  },
  {
    id: 149,
    en: "seem",
    az: "görünür",
  },
  {
    id: 150,
    en: "country",
    az: "ölkə",
  },
  {
    id: 151,
    en: "help",
    az: "kömək",
  },
  {
    id: 152,
    en: "talk",
    az: "danışmaq",
  },
  {
    id: 153,
    en: "where",
    az: "harada",
  },
  {
    id: 154,
    en: "turn",
    az: "dönmək",
  },
  {
    id: 155,
    en: "problem",
    az: "problem",
  },
  {
    id: 156,
    en: "every",
    az: "hər",
  },
  {
    id: 157,
    en: "start",
    az: "başlamaq",
  },
  {
    id: 158,
    en: "hand",
    az: "əl",
  },
  {
    id: 159,
    en: "might",
    az: "ola bilər",
  },
  {
    id: 160,
    en: "American",
    az: "Amerika",
  },
  {
    id: 161,
    en: "show",
    az: "şou",
  },
  {
    id: 162,
    en: "part",
    az: "hissəsi",
  },
  {
    id: 163,
    en: "against",
    az: "əleyhinə",
  },
  {
    id: 164,
    en: "place",
    az: "yer",
  },
  {
    id: 165,
    en: "such",
    az: "bu cür",
  },
  {
    id: 166,
    en: "again",
    az: "yenidən",
  },
  {
    id: 167,
    en: "few",
    az: "az",
  },
  {
    id: 168,
    en: "case",
    az: "dava",
  },
  {
    id: 169,
    en: "week",
    az: "həftə",
  },
  {
    id: 170,
    en: "company",
    az: "şirkəti",
  },
  {
    id: 171,
    en: "system",
    az: "sistemi",
  },
  {
    id: 172,
    en: "each",
    az: "hər biri",
  },
  {
    id: 173,
    en: "right",
    az: "sağ",
  },
  {
    id: 174,
    en: "program",
    az: "proqramı",
  },
  {
    id: 175,
    en: "hear",
    az: "eşitmək",
  },
  {
    id: 176,
    en: "question",
    az: "sual",
  },
  {
    id: 177,
    en: "during",
    az: "zamanı",
  },
  {
    id: 178,
    en: "play",
    az: "oynamaq",
  },
  {
    id: 179,
    en: "government",
    az: "hökumət",
  },
  {
    id: 180,
    en: "run",
    az: "qaçmaq",
  },
  {
    id: 181,
    en: "small",
    az: "kiçik",
  },
  {
    id: 182,
    en: "number",
    az: "nömrə",
  },
  {
    id: 183,
    en: "always",
    az: "həmişə",
  },
  {
    id: 184,
    en: "move",
    az: "hərəkət etmək",
  },
  {
    id: 185,
    en: "night",
    az: "gecə",
  },
  {
    id: 186,
    en: "live",
    az: "yaşamaq",
  },
  {
    id: 187,
    en: "Mr",
    az: "Cənab",
  },
  {
    id: 188,
    en: "point",
    az: "nöqtə",
  },
  {
    id: 189,
    en: "believe",
    az: "inanmaq",
  },
  {
    id: 190,
    en: "hold",
    az: "tutun",
  },
  {
    id: 191,
    en: "today",
    az: "bu gün",
  },
  {
    id: 192,
    en: "bring",
    az: "gətir",
  },
  {
    id: 193,
    en: "happen",
    az: "baş verir",
  },
  {
    id: 194,
    en: "next",
    az: "sonrakı",
  },
  {
    id: 195,
    en: "without",
    az: "olmadan",
  },
  {
    id: 196,
    en: "before",
    az: "əvvəl",
  },
  {
    id: 197,
    en: "large",
    az: "böyük",
  },
  {
    id: 198,
    en: "million",
    az: "milyon",
  },
  {
    id: 199,
    en: "must",
    az: "olmalıdır",
  },
  {
    id: 200,
    en: "home",
    az: "ev",
  },
  {
    id: 201,
    en: "under",
    az: "altında",
  },
  {
    id: 202,
    en: "water",
    az: "su",
  },
  {
    id: 203,
    en: "room",
    az: "otaq",
  },
  {
    id: 204,
    en: "write",
    az: "yazmaq",
  },
  {
    id: 205,
    en: "mother",
    az: "ana",
  },
  {
    id: 206,
    en: "area",
    az: "sahəsi",
  },
  {
    id: 207,
    en: "national",
    az: "milli",
  },
  {
    id: 208,
    en: "money",
    az: "pul",
  },
  {
    id: 209,
    en: "story",
    az: "hekayə",
  },
  {
    id: 210,
    en: "young",
    az: "cavan",
  },
  {
    id: 211,
    en: "fact",
    az: "fakt",
  },
  {
    id: 212,
    en: "month",
    az: "ay",
  },
  {
    id: 213,
    en: "different",
    az: "fərqli",
  },
  {
    id: 214,
    en: "lot",
    az: "çox",
  },
  {
    id: 215,
    en: "study",
    az: "öyrənmək",
  },
  {
    id: 216,
    en: "book",
    az: "kitab",
  },
  {
    id: 217,
    en: "eye",
    az: "göz",
  },
  {
    id: 218,
    en: "job",
    az: "iş",
  },
  {
    id: 219,
    en: "word",
    az: "söz",
  },
  {
    id: 220,
    en: "though",
    az: "baxmayaraq",
  },
  {
    id: 221,
    en: "business",
    az: "Biznes",
  },
  {
    id: 222,
    en: "issue",
    az: "problem",
  },
  {
    id: 223,
    en: "side",
    az: "tərəfi",
  },
  {
    id: 224,
    en: "kind",
    az: "mehriban",
  },
  {
    id: 225,
    en: "four",
    az: "dörd",
  },
  {
    id: 226,
    en: "head",
    az: "baş",
  },
  {
    id: 227,
    en: "far",
    az: "uzaqda",
  },
  {
    id: 228,
    en: "black",
    az: "qara",
  },
  {
    id: 229,
    en: "long",
    az: "uzun",
  },
  {
    id: 230,
    en: "both",
    az: "hər ikisi",
  },
  {
    id: 231,
    en: "little",
    az: "az",
  },
  {
    id: 232,
    en: "house",
    az: "ev",
  },
  {
    id: 233,
    en: "since",
    az: "bəri",
  },
  {
    id: 234,
    en: "provide",
    az: "təmin etmək",
  },
  {
    id: 235,
    en: "service",
    az: "xidmət",
  },
  {
    id: 236,
    en: "around",
    az: "ətrafında",
  },
  {
    id: 237,
    en: "friend",
    az: "dost",
  },
  {
    id: 238,
    en: "important",
    az: "vacibdir",
  },
  {
    id: 239,
    en: "father",
    az: "ata",
  },
  {
    id: 240,
    en: "sit",
    az: "oturmaq",
  },
  {
    id: 241,
    en: "away",
    az: "uzaqda",
  },
  {
    id: 242,
    en: "until",
    az: "qədər",
  },
  {
    id: 243,
    en: "power",
    az: "güc",
  },
  {
    id: 244,
    en: "hour",
    az: "saat",
  },
  {
    id: 245,
    en: "game",
    az: "oyunu",
  },
  {
    id: 246,
    en: "often",
    az: "tez-tez",
  },
  {
    id: 247,
    en: "yet",
    az: "hələ",
  },
  {
    id: 248,
    en: "line",
    az: "xətti",
  },
  {
    id: 249,
    en: "political",
    az: "siyasi",
  },
  {
    id: 250,
    en: "end",
    az: "son",
  },
  {
    id: 251,
    en: "among",
    az: "arasında",
  },
  {
    id: 252,
    en: "ever",
    az: "heç",
  },
  {
    id: 253,
    en: "stand",
    az: "durmaq",
  },
  {
    id: 254,
    en: "bad",
    az: "pis",
  },
  {
    id: 255,
    en: "lose",
    az: "itirmək",
  },
  {
    id: 256,
    en: "however",
    az: "lakin",
  },
  {
    id: 257,
    en: "member",
    az: "üzvü",
  },
  {
    id: 258,
    en: "pay",
    az: "ödəmək",
  },
  {
    id: 259,
    en: "law",
    az: "qanun",
  },
  {
    id: 260,
    en: "meet",
    az: "görüşmək",
  },
  {
    id: 261,
    en: "car",
    az: "maşın",
  },
  {
    id: 262,
    en: "city",
    az: "şəhər",
  },
  {
    id: 263,
    en: "almost",
    az: "təxminən",
  },
  {
    id: 264,
    en: "include",
    az: "daxildir",
  },
  {
    id: 265,
    en: "continue",
    az: "davam edin",
  },
  {
    id: 266,
    en: "set",
    az: "dəsti",
  },
  {
    id: 267,
    en: "later",
    az: "sonradan",
  },
  {
    id: 268,
    en: "community",
    az: "icma",
  },
  {
    id: 269,
    en: "name",
    az: "adı",
  },
  {
    id: 270,
    en: "five",
    az: "beş",
  },
  {
    id: 271,
    en: "once",
    az: "bir dəfə",
  },
  {
    id: 272,
    en: "white",
    az: "ağ",
  },
  {
    id: 273,
    en: "least",
    az: "ən azı",
  },
  {
    id: 274,
    en: "president",
    az: "prezident",
  },
  {
    id: 275,
    en: "learn",
    az: "öyrənmək",
  },
  {
    id: 276,
    en: "real",
    az: "real",
  },
  {
    id: 277,
    en: "change",
    az: "dəyişmək",
  },
  {
    id: 278,
    en: "team",
    az: "komanda",
  },
  {
    id: 279,
    en: "minute",
    az: "dəqiqə",
  },
  {
    id: 280,
    en: "best",
    az: "ən yaxşısı",
  },
  {
    id: 281,
    en: "several",
    az: "bir neçə",
  },
  {
    id: 282,
    en: "idea",
    az: "fikir",
  },
  {
    id: 283,
    en: "kid",
    az: "uşaq",
  },
  {
    id: 284,
    en: "body",
    az: "bədən",
  },
  {
    id: 285,
    en: "information",
    az: "məlumat",
  },
  {
    id: 286,
    en: "nothing",
    az: "heç nə",
  },
  {
    id: 287,
    en: "ago",
    az: "əvvəllər",
  },
  {
    id: 288,
    en: "lead",
    az: "qurğuşun",
  },
  {
    id: 289,
    en: "social",
    az: "sosial",
  },
  {
    id: 290,
    en: "understand",
    az: "başa düşmək",
  },
  {
    id: 291,
    en: "whether",
    az: "olsun",
  },
  {
    id: 292,
    en: "watch",
    az: "baxın",
  },
  {
    id: 293,
    en: "together",
    az: "birlikdə",
  },
  {
    id: 294,
    en: "follow",
    az: "təqib edin",
  },
  {
    id: 295,
    en: "parent",
    az: "valideyn",
  },
  {
    id: 296,
    en: "stop",
    az: "dayan",
  },
  {
    id: 297,
    en: "face",
    az: "üz",
  },
  {
    id: 298,
    en: "anything",
    az: "bir şey",
  },
  {
    id: 299,
    en: "create",
    az: "yaratmaq",
  },
  {
    id: 300,
    en: "public",
    az: "ictimai",
  },
  {
    id: 301,
    en: "already",
    az: "onsuz da",
  },
  {
    id: 302,
    en: "speak",
    az: "danışmaq",
  },
  {
    id: 303,
    en: "others",
    az: "digərləri",
  },
  {
    id: 304,
    en: "read",
    az: "oxumaq",
  },
  {
    id: 305,
    en: "level",
    az: "səviyyə",
  },
  {
    id: 306,
    en: "allow",
    az: "icazə verin",
  },
  {
    id: 307,
    en: "add",
    az: "əlavə edin",
  },
  {
    id: 308,
    en: "office",
    az: "ofis",
  },
  {
    id: 309,
    en: "spend",
    az: "sərf etmək",
  },
  {
    id: 310,
    en: "door",
    az: "qapı",
  },
  {
    id: 311,
    en: "health",
    az: "sağlamlıq",
  },
  {
    id: 312,
    en: "person",
    az: "şəxs",
  },
  {
    id: 313,
    en: "art",
    az: "incəsənət",
  },
  {
    id: 314,
    en: "sure",
    az: "əmin",
  },
  {
    id: 315,
    en: "war",
    az: "müharibə",
  },
  {
    id: 316,
    en: "history",
    az: "tarixi",
  },
  {
    id: 317,
    en: "party",
    az: "tərəf",
  },
  {
    id: 318,
    en: "within",
    az: "daxilində",
  },
  {
    id: 319,
    en: "grow",
    az: "böyümək",
  },
  {
    id: 320,
    en: "result",
    az: "nəticə",
  },
  {
    id: 321,
    en: "open",
    az: "açıq",
  },
  {
    id: 322,
    en: "morning",
    az: "səhər",
  },
  {
    id: 323,
    en: "walk",
    az: "gəzmək",
  },
  {
    id: 324,
    en: "reason",
    az: "səbəb",
  },
  {
    id: 325,
    en: "low",
    az: "aşağı",
  },
  {
    id: 326,
    en: "win",
    az: "qazanmaq",
  },
  {
    id: 327,
    en: "research",
    az: "tədqiqat",
  },
  {
    id: 328,
    en: "girl",
    az: "qız",
  },
  {
    id: 329,
    en: "guy",
    az: "oğlan",
  },
  {
    id: 330,
    en: "early",
    az: "erkən",
  },
  {
    id: 331,
    en: "food",
    az: "yemək",
  },
  {
    id: 332,
    en: "moment",
    az: "an",
  },
  {
    id: 333,
    en: "himself",
    az: "özü",
  },
  {
    id: 334,
    en: "air",
    az: "hava",
  },
  {
    id: 335,
    en: "teacher",
    az: "müəllim",
  },
  {
    id: 336,
    en: "force",
    az: "güc",
  },
  {
    id: 337,
    en: "offer",
    az: "təklif",
  },
  {
    id: 338,
    en: "enough",
    az: "yetər",
  },
  {
    id: 339,
    en: "education",
    az: "təhsil",
  },
  {
    id: 340,
    en: "across",
    az: "arasında",
  },
  {
    id: 341,
    en: "although",
    az: "baxmayaraq",
  },
  {
    id: 342,
    en: "remember",
    az: "yadda saxla",
  },
  {
    id: 343,
    en: "foot",
    az: "ayaq",
  },
  {
    id: 344,
    en: "second",
    az: "ikinci",
  },
  {
    id: 345,
    en: "boy",
    az: "oğlan",
  },
  {
    id: 346,
    en: "maybe",
    az: "ola bilər",
  },
  {
    id: 347,
    en: "toward",
    az: "doğru",
  },
  {
    id: 348,
    en: "able",
    az: "bacarır",
  },
  {
    id: 349,
    en: "age",
    az: "yaş",
  },
  {
    id: 350,
    en: "everything",
    az: "hər şey",
  },
  {
    id: 351,
    en: "love",
    az: "sevgi",
  },
  {
    id: 352,
    en: "process",
    az: "proses",
  },
  {
    id: 353,
    en: "music",
    az: "musiqi",
  },
  {
    id: 354,
    en: "including",
    az: "daxil olmaqla",
  },
  {
    id: 355,
    en: "consider",
    az: "düşünmək",
  },
  {
    id: 356,
    en: "appear",
    az: "görünür",
  },
  {
    id: 357,
    en: "actually",
    az: "əslində",
  },
  {
    id: 358,
    en: "buy",
    az: "almaq",
  },
  {
    id: 359,
    en: "probably",
    az: "yəqin ki",
  },
  {
    id: 360,
    en: "human",
    az: "insan",
  },
  {
    id: 361,
    en: "wait",
    az: "Gözləmək",
  },
  {
    id: 362,
    en: "serve",
    az: "xidmət etmək",
  },
  {
    id: 363,
    en: "market",
    az: "bazar",
  },
  {
    id: 364,
    en: "die",
    az: "ölmək",
  },
  {
    id: 365,
    en: "send",
    az: "göndər",
  },
  {
    id: 366,
    en: "expect",
    az: "gözləmək",
  },
  {
    id: 367,
    en: "sense",
    az: "mənada",
  },
  {
    id: 368,
    en: "build",
    az: "qurmaq",
  },
  {
    id: 369,
    en: "stay",
    az: "qalmaq",
  },
  {
    id: 370,
    en: "fall",
    az: "düşmək",
  },
  {
    id: 371,
    en: "nation",
    az: "Millət",
  },
  {
    id: 372,
    en: "plan",
    az: "plan",
  },
  {
    id: 373,
    en: "cut",
    az: "kəsmək",
  },
  {
    id: 374,
    en: "college",
    az: "kollec",
  },
  {
    id: 375,
    en: "interest",
    az: "maraq",
  },
  {
    id: 376,
    en: "death",
    az: "ölüm",
  },
  {
    id: 377,
    en: "course",
    az: "kurs",
  },
  {
    id: 378,
    en: "someone",
    az: "kimsə",
  },
  {
    id: 379,
    en: "experience",
    az: "təcrübə",
  },
  {
    id: 380,
    en: "behind",
    az: "arxada",
  },
  {
    id: 381,
    en: "reach",
    az: "çatmaq",
  },
  {
    id: 382,
    en: "local",
    az: "yerli",
  },
  {
    id: 383,
    en: "kill",
    az: "öldürmək",
  },
  {
    id: 384,
    en: "six",
    az: "altı",
  },
  {
    id: 385,
    en: "remain",
    az: "qalmaq",
  },
  {
    id: 386,
    en: "effect",
    az: "təsiri",
  },
  {
    id: 387,
    en: "yeah",
    az: "bəli",
  },
  {
    id: 388,
    en: "suggest",
    az: "təklif",
  },
  {
    id: 389,
    en: "class",
    az: "sinif",
  },
  {
    id: 390,
    en: "control",
    az: "nəzarət",
  },
  {
    id: 391,
    en: "raise",
    az: "yüksəltmək",
  },
  {
    id: 392,
    en: "care",
    az: "qayğı",
  },
  {
    id: 393,
    en: "perhaps",
    az: "bəlkə",
  },
  {
    id: 394,
    en: "late",
    az: "gec",
  },
  {
    id: 395,
    en: "hard",
    az: "çətin",
  },
  {
    id: 396,
    en: "field",
    az: "sahə",
  },
  {
    id: 397,
    en: "else",
    az: "başqa",
  },
  {
    id: 398,
    en: "pass",
    az: "keçmək",
  },
  {
    id: 399,
    en: "former",
    az: "keçmiş",
  },
  {
    id: 400,
    en: "sell",
    az: "satmaq",
  },
  {
    id: 401,
    en: "major",
    az: "əsas",
  },
  {
    id: 402,
    en: "sometimes",
    az: "bəzən",
  },
  {
    id: 403,
    en: "require",
    az: "tələb edir",
  },
  {
    id: 404,
    en: "along",
    az: "boyunca",
  },
  {
    id: 405,
    en: "development",
    az: "inkişaf",
  },
  {
    id: 406,
    en: "themselves",
    az: "özləri",
  },
  {
    id: 407,
    en: "report",
    az: "hesabat",
  },
  {
    id: 408,
    en: "role",
    az: "rolu",
  },
  {
    id: 409,
    en: "better",
    az: "daha yaxşı",
  },
  {
    id: 410,
    en: "economic",
    az: "iqtisadi",
  },
  {
    id: 411,
    en: "effort",
    az: "səy",
  },
  {
    id: 412,
    en: "decide",
    az: "qərar verin",
  },
  {
    id: 413,
    en: "rate",
    az: "dərəcəsi",
  },
  {
    id: 414,
    en: "strong",
    az: "güclü",
  },
  {
    id: 415,
    en: "possible",
    az: "mümkün",
  },
  {
    id: 416,
    en: "heart",
    az: "ürək",
  },
  {
    id: 417,
    en: "drug",
    az: "dərman",
  },
  {
    id: 418,
    en: "leader",
    az: "lider",
  },
  {
    id: 419,
    en: "light",
    az: "işıq",
  },
  {
    id: 420,
    en: "voice",
    az: "səs",
  },
  {
    id: 421,
    en: "wife",
    az: "arvad",
  },
  {
    id: 422,
    en: "whole",
    az: "bütöv",
  },
  {
    id: 423,
    en: "police",
    az: "polis",
  },
  {
    id: 424,
    en: "mind",
    az: "ağıl",
  },
  {
    id: 425,
    en: "finally",
    az: "nəhayət",
  },
  {
    id: 426,
    en: "pull",
    az: "çəkmək",
  },
  {
    id: 427,
    en: "return",
    az: "qayıtmaq",
  },
  {
    id: 428,
    en: "free",
    az: "sərbəst",
  },
  {
    id: 429,
    en: "military",
    az: "hərbi",
  },
  {
    id: 430,
    en: "price",
    az: "qiymət",
  },
  {
    id: 431,
    en: "less",
    az: "az",
  },
  {
    id: 432,
    en: "according",
    az: "görə",
  },
  {
    id: 433,
    en: "decision",
    az: "qərar",
  },
  {
    id: 434,
    en: "explain",
    az: "izah edin",
  },
  {
    id: 435,
    en: "son",
    az: "oğul",
  },
  {
    id: 436,
    en: "hope",
    az: "ümid",
  },
  {
    id: 437,
    en: "develop",
    az: "inkişaf",
  },
  {
    id: 438,
    en: "view",
    az: "görünüşü",
  },
  {
    id: 439,
    en: "relationship",
    az: "münasibətlər",
  },
  {
    id: 440,
    en: "carry",
    az: "aparmaq",
  },
  {
    id: 441,
    en: "town",
    az: "qəsəbə",
  },
  {
    id: 442,
    en: "road",
    az: "Yol",
  },
  {
    id: 443,
    en: "drive",
    az: "sürmək",
  },
  {
    id: 444,
    en: "arm",
    az: "qolu",
  },
  {
    id: 445,
    en: "true",
    az: "doğru",
  },
  {
    id: 446,
    en: "federal",
    az: "federal",
  },
  {
    id: 447,
    en: "break",
    az: "fasilə",
  },
  {
    id: 448,
    en: "difference",
    az: "fərqlilik",
  },
  {
    id: 449,
    en: "thank",
    az: "təşəkkür edirəm",
  },
  {
    id: 450,
    en: "receive",
    az: "almaq",
  },
  {
    id: 451,
    en: "value",
    az: "dəyəri",
  },
  {
    id: 452,
    en: "international",
    az: "beynəlxalq",
  },
  {
    id: 453,
    en: "building",
    az: "bina",
  },
  {
    id: 454,
    en: "action",
    az: "fəaliyyət",
  },
  {
    id: 455,
    en: "full",
    az: "dolu",
  },
  {
    id: 456,
    en: "model",
    az: "model",
  },
  {
    id: 457,
    en: "join",
    az: "qoşulmaq",
  },
  {
    id: 458,
    en: "season",
    az: "Mövsüm",
  },
  {
    id: 459,
    en: "society",
    az: "cəmiyyət",
  },
  {
    id: 460,
    en: "tax",
    az: "vergi",
  },
  {
    id: 461,
    en: "director",
    az: "direktor",
  },
  {
    id: 462,
    en: "position",
    az: "mövqe",
  },
  {
    id: 463,
    en: "player",
    az: "pleyer",
  },
  {
    id: 464,
    en: "agree",
    az: "razılaşmaq",
  },
  {
    id: 465,
    en: "especially",
    az: "xüsusilə",
  },
  {
    id: 466,
    en: "record",
    az: "qeyd",
  },
  {
    id: 467,
    en: "wear",
    az: "köhnəlmək",
  },
  {
    id: 468,
    en: "paper",
    az: "kağız",
  },
  {
    id: 469,
    en: "special",
    az: "xüsusi",
  },
  {
    id: 470,
    en: "space",
    az: "boşluq",
  },
  {
    id: 471,
    en: "ground",
    az: "torpaq",
  },
  {
    id: 472,
    en: "form",
    az: "forma",
  },
  {
    id: 473,
    en: "support",
    az: "dəstək",
  },
  {
    id: 474,
    en: "event",
    az: "hadisə",
  },
  {
    id: 475,
    en: "official",
    az: "rəsmi",
  },
  {
    id: 476,
    en: "whose",
    az: "kimin",
  },
  {
    id: 477,
    en: "matter",
    az: "məsələ",
  },
  {
    id: 478,
    en: "everyone",
    az: "hər kəs",
  },
  {
    id: 479,
    en: "center",
    az: "Mərkəz",
  },
  {
    id: 480,
    en: "couple",
    az: "cütlük",
  },
  {
    id: 481,
    en: "site",
    az: "Sayt",
  },
  {
    id: 482,
    en: "project",
    az: "layihə",
  },
  {
    id: 483,
    en: "hit",
    az: "vurdu",
  },
  {
    id: 484,
    en: "base",
    az: "baza",
  },
  {
    id: 485,
    en: "activity",
    az: "fəaliyyət",
  },
  {
    id: 486,
    en: "star",
    az: "ulduz",
  },
  {
    id: 487,
    en: "table",
    az: "masa",
  },
  {
    id: 488,
    en: "court",
    az: "məhkəmə",
  },
  {
    id: 489,
    en: "produce",
    az: "istehsal edir",
  },
  {
    id: 490,
    en: "eat",
    az: "yemək",
  },
  {
    id: 491,
    en: "teach",
    az: "öyrətmək",
  },
  {
    id: 492,
    en: "oil",
    az: "yağ",
  },
  {
    id: 493,
    en: "half",
    az: "yarım",
  },
  {
    id: 494,
    en: "situation",
    az: "vəziyyət",
  },
  {
    id: 495,
    en: "easy",
    az: "asan",
  },
  {
    id: 496,
    en: "cost",
    az: "dəyəri",
  },
  {
    id: 497,
    en: "industry",
    az: "sənaye",
  },
  {
    id: 498,
    en: "figure",
    az: "fiqur",
  },
  {
    id: 499,
    en: "street",
    az: "küçə",
  },
  {
    id: 500,
    en: "image",
    az: "şəkil",
  },
  {
    id: 501,
    en: "itself",
    az: "özü",
  },
  {
    id: 502,
    en: "phone",
    az: "telefon",
  },
  {
    id: 503,
    en: "either",
    az: "ya da",
  },
  {
    id: 504,
    en: "data",
    az: "məlumatları",
  },
  {
    id: 505,
    en: "cover",
    az: "örtmək",
  },
  {
    id: 506,
    en: "quite",
    az: "olduqca",
  },
  {
    id: 507,
    en: "picture",
    az: "şəkil",
  },
  {
    id: 508,
    en: "clear",
    az: "aydın",
  },
  {
    id: 509,
    en: "practice",
    az: "təcrübə",
  },
  {
    id: 510,
    en: "piece",
    az: "hissə",
  },
  {
    id: 511,
    en: "land",
    az: "torpaq",
  },
  {
    id: 512,
    en: "recent",
    az: "yaxınlarda",
  },
  {
    id: 513,
    en: "describe",
    az: "təsvir etmək",
  },
  {
    id: 514,
    en: "product",
    az: "məhsul",
  },
  {
    id: 515,
    en: "doctor",
    az: "həkim",
  },
  {
    id: 516,
    en: "wall",
    az: "divar",
  },
  {
    id: 517,
    en: "patient",
    az: "xəstə",
  },
  {
    id: 518,
    en: "worker",
    az: "işçi",
  },
  {
    id: 519,
    en: "news",
    az: "xəbərlər",
  },
  {
    id: 520,
    en: "test",
    az: "test",
  },
  {
    id: 521,
    en: "movie",
    az: "film",
  },
  {
    id: 522,
    en: "certain",
    az: "müəyyən",
  },
  {
    id: 523,
    en: "north",
    az: "şimal",
  },
  {
    id: 524,
    en: "personal",
    az: "şəxsi",
  },
  {
    id: 525,
    en: "simply",
    az: "sadəcə",
  },
  {
    id: 526,
    en: "third",
    az: "üçüncü",
  },
  {
    id: 527,
    en: "technology",
    az: "texnologiya",
  },
  {
    id: 528,
    en: "catch",
    az: "tutmaq",
  },
  {
    id: 529,
    en: "step",
    az: "addım",
  },
  {
    id: 530,
    en: "baby",
    az: "bala",
  },
  {
    id: 531,
    en: "computer",
    az: "kompüter",
  },
  {
    id: 532,
    en: "type",
    az: "növü",
  },
  {
    id: 533,
    en: "attention",
    az: "diqqət",
  },
  {
    id: 534,
    en: "draw",
    az: "çəkmək",
  },
  {
    id: 535,
    en: "film",
    az: "film",
  },
  {
    id: 536,
    en: "tree",
    az: "ağac",
  },
  {
    id: 537,
    en: "source",
    az: "mənbə",
  },
  {
    id: 538,
    en: "red",
    az: "qırmızı",
  },
  {
    id: 539,
    en: "nearly",
    az: "təxminən",
  },
  {
    id: 540,
    en: "organization",
    az: "təşkilat",
  },
  {
    id: 541,
    en: "choose",
    az: "seçmək",
  },
  {
    id: 542,
    en: "cause",
    az: "səbəb",
  },
  {
    id: 543,
    en: "hair",
    az: "saç",
  },
  {
    id: 544,
    en: "century",
    az: "əsr",
  },
  {
    id: 545,
    en: "evidence",
    az: "dəlil",
  },
  {
    id: 546,
    en: "window",
    az: "pəncərə",
  },
  {
    id: 547,
    en: "difficult",
    az: "çətin",
  },
  {
    id: 548,
    en: "listen",
    az: "dinləmək",
  },
  {
    id: 549,
    en: "soon",
    az: "tezliklə",
  },
  {
    id: 550,
    en: "culture",
    az: "mədəniyyət",
  },
  {
    id: 551,
    en: "billion",
    az: "milyard",
  },
  {
    id: 552,
    en: "chance",
    az: "şans",
  },
  {
    id: 553,
    en: "brother",
    az: "qardaşı",
  },
  {
    id: 554,
    en: "energy",
    az: "enerji",
  },
  {
    id: 555,
    en: "period",
    az: "dövrü",
  },
  {
    id: 556,
    en: "summer",
    az: "yay",
  },
  {
    id: 557,
    en: "realize",
    az: "dərk etmək",
  },
  {
    id: 558,
    en: "hundred",
    az: "yüz",
  },
  {
    id: 559,
    en: "available",
    az: "mövcuddur",
  },
  {
    id: 560,
    en: "plant",
    az: "bitki",
  },
  {
    id: 561,
    en: "likely",
    az: "ehtimal ki",
  },
  {
    id: 562,
    en: "opportunity",
    az: "fürsət",
  },
  {
    id: 563,
    en: "term",
    az: "müddət",
  },
  {
    id: 564,
    en: "short",
    az: "qısa",
  },
  {
    id: 565,
    en: "letter",
    az: "məktub",
  },
  {
    id: 566,
    en: "condition",
    az: "şərtdir",
  },
  {
    id: 567,
    en: "choice",
    az: "seçim",
  },
  {
    id: 568,
    en: "single",
    az: "tək",
  },
  {
    id: 569,
    en: "rule",
    az: "qayda",
  },
  {
    id: 570,
    en: "daughter",
    az: "qızı",
  },
  {
    id: 571,
    en: "administration",
    az: "idarəetmə",
  },
  {
    id: 572,
    en: "south",
    az: "cənub",
  },
  {
    id: 573,
    en: "husband",
    az: "ər",
  },
  {
    id: 574,
    en: "Congress",
    az: "Konqres",
  },
  {
    id: 575,
    en: "floor",
    az: "mərtəbə",
  },
  {
    id: 576,
    en: "campaign",
    az: "kampaniya",
  },
  {
    id: 577,
    en: "material",
    az: "material",
  },
  {
    id: 578,
    en: "population",
    az: "əhali",
  },
  {
    id: 579,
    en: "medical",
    az: "tibbi",
  },
  {
    id: 580,
    en: "hospital",
    az: "xəstəxana",
  },
  {
    id: 581,
    en: "church",
    az: "kilsə",
  },
  {
    id: 582,
    en: "close",
    az: "yaxın",
  },
  {
    id: 583,
    en: "thousand",
    az: "min",
  },
  {
    id: 584,
    en: "risk",
    az: "risk",
  },
  {
    id: 585,
    en: "current",
    az: "cari",
  },
  {
    id: 586,
    en: "fire",
    az: "atəş",
  },
  {
    id: 587,
    en: "future",
    az: "gələcək",
  },
  {
    id: 588,
    en: "wrong",
    az: "səhv",
  },
  {
    id: 589,
    en: "involve",
    az: "əhatə etmək",
  },
  {
    id: 590,
    en: "defense",
    az: "müdafiə",
  },
  {
    id: 591,
    en: "anyone",
    az: "hər kəs",
  },
  {
    id: 592,
    en: "increase",
    az: "artırmaq",
  },
  {
    id: 593,
    en: "security",
    az: "təhlükəsizlik",
  },
  {
    id: 594,
    en: "bank",
    az: "bank",
  },
  {
    id: 595,
    en: "myself",
    az: "özüm",
  },
  {
    id: 596,
    en: "certainly",
    az: "əlbətdə",
  },
  {
    id: 597,
    en: "west",
    az: "qərb",
  },
  {
    id: 598,
    en: "sport",
    az: "idman",
  },
  {
    id: 599,
    en: "board",
    az: "lövhə",
  },
  {
    id: 600,
    en: "seek",
    az: "axtarmaq",
  },
  {
    id: 601,
    en: "per",
    az: "başına",
  },
  {
    id: 602,
    en: "subject",
    az: "mövzu",
  },
  {
    id: 603,
    en: "officer",
    az: "məmur",
  },
  {
    id: 604,
    en: "private",
    az: "özəl",
  },
  {
    id: 605,
    en: "rest",
    az: "istirahət",
  },
  {
    id: 606,
    en: "behavior",
    az: "davranış",
  },
  {
    id: 607,
    en: "deal",
    az: "sövdələşmə",
  },
  {
    id: 608,
    en: "performance",
    az: "performans",
  },
  {
    id: 609,
    en: "fight",
    az: "mübarizə",
  },
  {
    id: 610,
    en: "throw",
    az: "atmaq",
  },
  {
    id: 611,
    en: "top",
    az: "üst",
  },
  {
    id: 612,
    en: "quickly",
    az: "tez",
  },
  {
    id: 613,
    en: "past",
    az: "keçmiş",
  },
  {
    id: 614,
    en: "goal",
    az: "qol",
  },
  {
    id: 615,
    en: "bed",
    az: "yataq",
  },
  {
    id: 616,
    en: "order",
    az: "sifariş",
  },
  {
    id: 617,
    en: "author",
    az: "müəllif",
  },
  {
    id: 618,
    en: "fill",
    az: "doldurmaq",
  },
  {
    id: 619,
    en: "represent",
    az: "təqdim etmək",
  },
  {
    id: 620,
    en: "focus",
    az: "diqqət",
  },
  {
    id: 621,
    en: "foreign",
    az: "xarici",
  },
  {
    id: 622,
    en: "drop",
    az: "damcı",
  },
  {
    id: 623,
    en: "blood",
    az: "qan",
  },
  {
    id: 624,
    en: "upon",
    az: "üzərində",
  },
  {
    id: 625,
    en: "agency",
    az: "agentlik",
  },
  {
    id: 626,
    en: "push",
    az: "itələmək",
  },
  {
    id: 627,
    en: "nature",
    az: "təbiət",
  },
  {
    id: 628,
    en: "color",
    az: "rəngi",
  },
  {
    id: 629,
    en: "recently",
    az: "bu yaxınlarda",
  },
  {
    id: 630,
    en: "store",
    az: "mağaza",
  },
  {
    id: 631,
    en: "reduce",
    az: "azaltmaq",
  },
  {
    id: 632,
    en: "sound",
    az: "səs",
  },
  {
    id: 633,
    en: "note",
    az: "Qeyd",
  },
  {
    id: 634,
    en: "fine",
    az: "gözəl",
  },
  {
    id: 635,
    en: "near",
    az: "yaxınlığında",
  },
  {
    id: 636,
    en: "movement",
    az: "hərəkat",
  },
  {
    id: 637,
    en: "page",
    az: "səhifə",
  },
  {
    id: 638,
    en: "enter",
    az: "girmək",
  },
  {
    id: 639,
    en: "share",
    az: "paylaşmaq",
  },
  {
    id: 640,
    en: "common",
    az: "ümumi",
  },
  {
    id: 641,
    en: "poor",
    az: "kasıb",
  },
  {
    id: 642,
    en: "natural",
    az: "təbii",
  },
  {
    id: 643,
    en: "race",
    az: "irqi",
  },
  {
    id: 644,
    en: "concern",
    az: "qayğı",
  },
  {
    id: 645,
    en: "series",
    az: "seriyası",
  },
  {
    id: 646,
    en: "significant",
    az: "mənalı",
  },
  {
    id: 647,
    en: "similar",
    az: "oxşar",
  },
  {
    id: 648,
    en: "hot",
    az: "isti",
  },
  {
    id: 649,
    en: "language",
    az: "dil",
  },
  {
    id: 650,
    en: "usually",
    az: "adətən",
  },
  {
    id: 651,
    en: "response",
    az: "cavab",
  },
  {
    id: 652,
    en: "dead",
    az: "ölü",
  },
  {
    id: 653,
    en: "rise",
    az: "qalxmaq",
  },
  {
    id: 654,
    en: "animal",
    az: "heyvan",
  },
  {
    id: 655,
    en: "factor",
    az: "amil",
  },
  {
    id: 656,
    en: "decade",
    az: "onillik",
  },
  {
    id: 657,
    en: "article",
    az: "məqalə",
  },
  {
    id: 658,
    en: "shoot",
    az: "vurmaq",
  },
  {
    id: 659,
    en: "east",
    az: "şərq",
  },
  {
    id: 660,
    en: "save",
    az: "yadda saxla",
  },
  {
    id: 661,
    en: "seven",
    az: "yeddi",
  },
  {
    id: 662,
    en: "artist",
    az: "rəssam",
  },
  {
    id: 663,
    en: "scene",
    az: "səhnə",
  },
  {
    id: 664,
    en: "stock",
    az: "fond",
  },
  {
    id: 665,
    en: "career",
    az: "karyera",
  },
  {
    id: 666,
    en: "despite",
    az: "rəğmən",
  },
  {
    id: 667,
    en: "central",
    az: "mərkəzi",
  },
  {
    id: 668,
    en: "eight",
    az: "səkkiz",
  },
  {
    id: 669,
    en: "thus",
    az: "beləliklə",
  },
  {
    id: 670,
    en: "treatment",
    az: "müalicə",
  },
  {
    id: 671,
    en: "beyond",
    az: "kənarda",
  },
  {
    id: 672,
    en: "happy",
    az: "xoşbəxt",
  },
  {
    id: 673,
    en: "exactly",
    az: "tam olaraq",
  },
  {
    id: 674,
    en: "protect",
    az: "qorumaq",
  },
  {
    id: 675,
    en: "approach",
    az: "yanaşma",
  },
  {
    id: 676,
    en: "lie",
    az: "yalan",
  },
  {
    id: 677,
    en: "size",
    az: "ölçüsü",
  },
  {
    id: 678,
    en: "dog",
    az: "köpək",
  },
  {
    id: 679,
    en: "fund",
    az: "Fond",
  },
  {
    id: 680,
    en: "serious",
    az: "ciddi",
  },
  {
    id: 681,
    en: "occur",
    az: "baş verir",
  },
  {
    id: 682,
    en: "media",
    az: "media",
  },
  {
    id: 683,
    en: "ready",
    az: "hazırdır",
  },
  {
    id: 684,
    en: "sign",
    az: "işarəsi",
  },
  {
    id: 685,
    en: "thought",
    az: "düşündü",
  },
  {
    id: 686,
    en: "list",
    az: "siyahısı",
  },
  {
    id: 687,
    en: "individual",
    az: "fərdi",
  },
  {
    id: 688,
    en: "simple",
    az: "sadə",
  },
  {
    id: 689,
    en: "quality",
    az: "keyfiyyət",
  },
  {
    id: 690,
    en: "pressure",
    az: "təzyiq",
  },
  {
    id: 691,
    en: "accept",
    az: "qəbul edin",
  },
  {
    id: 692,
    en: "answer",
    az: "cavab",
  },
  {
    id: 693,
    en: "resource",
    az: "resurs",
  },
  {
    id: 694,
    en: "identify",
    az: "müəyyənləşdirin",
  },
  {
    id: 695,
    en: "left",
    az: "qalıb",
  },
  {
    id: 696,
    en: "meeting",
    az: "görüş",
  },
  {
    id: 697,
    en: "determine",
    az: "müəyyənləşdirin",
  },
  {
    id: 698,
    en: "disease",
    az: "xəstəlikdir",
  },
  {
    id: 699,
    en: "whatever",
    az: "nəysə",
  },
  {
    id: 700,
    en: "success",
    az: "uğur",
  },
  {
    id: 701,
    en: "argue",
    az: "mübahisə",
  },
  {
    id: 702,
    en: "cup",
    az: "kubok",
  },
  {
    id: 703,
    en: "particularly",
    az: "xüsusilə",
  },
  {
    id: 704,
    en: "amount",
    az: "məbləği",
  },
  {
    id: 705,
    en: "ability",
    az: "qabiliyyət",
  },
  {
    id: 706,
    en: "staff",
    az: "heyət",
  },
  {
    id: 707,
    en: "recognize",
    az: "tanımaq",
  },
  {
    id: 708,
    en: "indicate",
    az: "göstərir",
  },
  {
    id: 709,
    en: "character",
    az: "xarakteri",
  },
  {
    id: 710,
    en: "growth",
    az: "böyümə",
  },
  {
    id: 711,
    en: "loss",
    az: "zərər",
  },
  {
    id: 712,
    en: "degree",
    az: "dərəcəsi",
  },
  {
    id: 713,
    en: "wonder",
    az: "görəsən",
  },
  {
    id: 714,
    en: "attack",
    az: "hücum",
  },
  {
    id: 715,
    en: "herself",
    az: "özü",
  },
  {
    id: 716,
    en: "region",
    az: "bölgə",
  },
  {
    id: 717,
    en: "television",
    az: "televiziya",
  },
  {
    id: 718,
    en: "box",
    az: "Qutu",
  },
  {
    id: 719,
    en: "TV",
    az: "TV",
  },
  {
    id: 720,
    en: "training",
    az: "təlim",
  },
  {
    id: 721,
    en: "pretty",
    az: "yaraşıqlı",
  },
  {
    id: 722,
    en: "trade",
    az: "ticarət",
  },
  {
    id: 723,
    en: "election",
    az: "seçki",
  },
  {
    id: 724,
    en: "everybody",
    az: "hamı",
  },
  {
    id: 725,
    en: "physical",
    az: "fiziki",
  },
  {
    id: 726,
    en: "lay",
    az: "yatmaq",
  },
  {
    id: 727,
    en: "general",
    az: "ümumi",
  },
  {
    id: 728,
    en: "feeling",
    az: "hissi",
  },
  {
    id: 729,
    en: "standard",
    az: "standart",
  },
  {
    id: 730,
    en: "bill",
    az: "faktura",
  },
  {
    id: 731,
    en: "message",
    az: "mesaj",
  },
  {
    id: 732,
    en: "fail",
    az: "uğursuz",
  },
  {
    id: 733,
    en: "outside",
    az: "kənarda",
  },
  {
    id: 734,
    en: "arrive",
    az: "gəlmək",
  },
  {
    id: 735,
    en: "analysis",
    az: "analiz",
  },
  {
    id: 736,
    en: "benefit",
    az: "fayda",
  },
  {
    id: 737,
    en: "sex",
    az: "cinsi",
  },
  {
    id: 738,
    en: "forward",
    az: "irəli",
  },
  {
    id: 739,
    en: "lawyer",
    az: "hüquqşünas",
  },
  {
    id: 740,
    en: "present",
    az: "indiki",
  },
  {
    id: 741,
    en: "section",
    az: "bölmə",
  },
  {
    id: 742,
    en: "environmental",
    az: "ətraf mühit",
  },
  {
    id: 743,
    en: "glass",
    az: "şüşə",
  },
  {
    id: 744,
    en: "skill",
    az: "bacarıq",
  },
  {
    id: 745,
    en: "sister",
    az: "bacı",
  },
  {
    id: 746,
    en: "professor",
    az: "professor",
  },
  {
    id: 747,
    en: "operation",
    az: "əməliyyat",
  },
  {
    id: 748,
    en: "financial",
    az: "maliyyə",
  },
  {
    id: 749,
    en: "crime",
    az: "cinayət",
  },
  {
    id: 750,
    en: "stage",
    az: "mərhələ",
  },
  {
    id: 751,
    en: "ok",
    az: "tamam",
  },
  {
    id: 752,
    en: "compare",
    az: "müqayisə et",
  },
  {
    id: 753,
    en: "authority",
    az: "səlahiyyət",
  },
  {
    id: 754,
    en: "miss",
    az: "darıxmaq",
  },
  {
    id: 755,
    en: "design",
    az: "dizayn",
  },
  {
    id: 756,
    en: "sort",
    az: "növ",
  },
  {
    id: 757,
    en: "act",
    az: "hərəkət etmək",
  },
  {
    id: 758,
    en: "ten",
    az: "on",
  },
  {
    id: 759,
    en: "knowledge",
    az: "bilik",
  },
  {
    id: 760,
    en: "gun",
    az: "silah",
  },
  {
    id: 761,
    en: "station",
    az: "stansiyası",
  },
  {
    id: 762,
    en: "blue",
    az: "mavi",
  },
  {
    id: 763,
    en: "strategy",
    az: "strategiya",
  },
  {
    id: 764,
    en: "clearly",
    az: "aydın şəkildə",
  },
  {
    id: 765,
    en: "discuss",
    az: "müzakirə etmək",
  },
  {
    id: 766,
    en: "indeed",
    az: "həqiqətən",
  },
  {
    id: 767,
    en: "truth",
    az: "həqiqət",
  },
  {
    id: 768,
    en: "song",
    az: "mahnı",
  },
  {
    id: 769,
    en: "example",
    az: "nümunə",
  },
  {
    id: 770,
    en: "democratic",
    az: "demokratik",
  },
  {
    id: 771,
    en: "check",
    az: "yoxlamaq",
  },
  {
    id: 772,
    en: "environment",
    az: "mühit",
  },
  {
    id: 773,
    en: "leg",
    az: "ayaq",
  },
  {
    id: 774,
    en: "dark",
    az: "qaranlıq",
  },
  {
    id: 775,
    en: "various",
    az: "müxtəlif",
  },
  {
    id: 776,
    en: "rather",
    az: "əksinə",
  },
  {
    id: 777,
    en: "laugh",
    az: "gülmək",
  },
  {
    id: 778,
    en: "guess",
    az: "tapmaq",
  },
  {
    id: 779,
    en: "executive",
    az: "icraçı",
  },
  {
    id: 780,
    en: "prove",
    az: "sübut et",
  },
  {
    id: 781,
    en: "hang",
    az: "asmaq",
  },
  {
    id: 782,
    en: "entire",
    az: "bütöv",
  },
  {
    id: 783,
    en: "rock",
    az: "qaya",
  },
  {
    id: 784,
    en: "forget",
    az: "unutmaq",
  },
  {
    id: 785,
    en: "claim",
    az: "iddia",
  },
  {
    id: 786,
    en: "remove",
    az: "çıxarın",
  },
  {
    id: 787,
    en: "manager",
    az: "menecer",
  },
  {
    id: 788,
    en: "enjoy",
    az: "zövq alın",
  },
  {
    id: 789,
    en: "network",
    az: "şəbəkə",
  },
  {
    id: 790,
    en: "legal",
    az: "qanuni",
  },
  {
    id: 791,
    en: "religious",
    az: "dindar",
  },
  {
    id: 792,
    en: "cold",
    az: "soyuq",
  },
  {
    id: 793,
    en: "final",
    az: "final",
  },
  {
    id: 794,
    en: "main",
    az: "ana",
  },
  {
    id: 795,
    en: "science",
    az: "Elm",
  },
  {
    id: 796,
    en: "green",
    az: "yaşıl",
  },
  {
    id: 797,
    en: "memory",
    az: "yaddaş",
  },
  {
    id: 798,
    en: "card",
    az: "kart",
  },
  {
    id: 799,
    en: "above",
    az: "yuxarıda",
  },
  {
    id: 800,
    en: "seat",
    az: "oturacaq",
  },
  {
    id: 801,
    en: "cell",
    az: "hücrə",
  },
  {
    id: 802,
    en: "establish",
    az: "qurmaq",
  },
  {
    id: 803,
    en: "nice",
    az: "gözəl",
  },
  {
    id: 804,
    en: "trial",
    az: "sınaq",
  },
  {
    id: 805,
    en: "expert",
    az: "mütəxəssis",
  },
  {
    id: 806,
    en: "firm",
    az: "möhkəm",
  },
  {
    id: 807,
    en: "Democrat",
    az: "Demokrat",
  },
  {
    id: 808,
    en: "radio",
    az: "radio",
  },
  {
    id: 809,
    en: "visit",
    az: "ziyarət",
  },
  {
    id: 810,
    en: "management",
    az: "idarəetmə",
  },
  {
    id: 811,
    en: "avoid",
    az: "çəkinin",
  },
  {
    id: 812,
    en: "imagine",
    az: "təsəvvür edin",
  },
  {
    id: 813,
    en: "tonight",
    az: "bu axşam",
  },
  {
    id: 814,
    en: "huge",
    az: "böyük",
  },
  {
    id: 815,
    en: "ball",
    az: "top",
  },
  {
    id: 816,
    en: "finish",
    az: "bitirmək",
  },
  {
    id: 817,
    en: "yourself",
    az: "özünüz",
  },
  {
    id: 818,
    en: "theory",
    az: "nəzəriyyə",
  },
  {
    id: 819,
    en: "impact",
    az: "təsir",
  },
  {
    id: 820,
    en: "respond",
    az: "cavab verin",
  },
  {
    id: 821,
    en: "statement",
    az: "ifadəsi",
  },
  {
    id: 822,
    en: "maintain",
    az: "qorumaq",
  },
  {
    id: 823,
    en: "charge",
    az: "şarj edin",
  },
  {
    id: 824,
    en: "popular",
    az: "məşhur",
  },
  {
    id: 825,
    en: "traditional",
    az: "ənənəvi",
  },
  {
    id: 826,
    en: "onto",
    az: "üzərinə",
  },
  {
    id: 827,
    en: "reveal",
    az: "aşkar etmək",
  },
  {
    id: 828,
    en: "direction",
    az: "istiqamət",
  },
  {
    id: 829,
    en: "weapon",
    az: "silah",
  },
  {
    id: 830,
    en: "employee",
    az: "işçi",
  },
  {
    id: 831,
    en: "cultural",
    az: "mədəni",
  },
  {
    id: 832,
    en: "contain",
    az: "ehtiva edir",
  },
  {
    id: 833,
    en: "peace",
    az: "barış",
  },
  {
    id: 834,
    en: "pain",
    az: "ağrı",
  },
  {
    id: 835,
    en: "apply",
    az: "müraciət edin",
  },
  {
    id: 836,
    en: "measure",
    az: "ölçü",
  },
  {
    id: 837,
    en: "wide",
    az: "geniş",
  },
  {
    id: 838,
    en: "shake",
    az: "silkələmək",
  },
  {
    id: 839,
    en: "fly",
    az: "uçmaq",
  },
  {
    id: 840,
    en: "interview",
    az: "reportaj",
  },
  {
    id: 841,
    en: "manage",
    az: "idarə etmək",
  },
  {
    id: 842,
    en: "chair",
    az: "stul",
  },
  {
    id: 843,
    en: "fish",
    az: "balıq",
  },
  {
    id: 844,
    en: "particular",
    az: "xüsusi",
  },
  {
    id: 845,
    en: "camera",
    az: "kamera",
  },
  {
    id: 846,
    en: "structure",
    az: "quruluşu",
  },
  {
    id: 847,
    en: "politics",
    az: "siyasət",
  },
  {
    id: 848,
    en: "perform",
    az: "ifa etmək",
  },
  {
    id: 849,
    en: "weight",
    az: "çəki",
  },
  {
    id: 850,
    en: "suddenly",
    az: "birdən",
  },
  {
    id: 851,
    en: "discover",
    az: "kəşf etmək",
  },
  {
    id: 852,
    en: "candidate",
    az: "namizəd",
  },
  {
    id: 853,
    en: "production",
    az: "istehsal",
  },
  {
    id: 854,
    en: "treat",
    az: "müalicə etmək",
  },
  {
    id: 855,
    en: "trip",
    az: "səyahət",
  },
  {
    id: 856,
    en: "evening",
    az: "axşam",
  },
  {
    id: 857,
    en: "affect",
    az: "təsir edir",
  },
  {
    id: 858,
    en: "inside",
    az: "içəri",
  },
  {
    id: 859,
    en: "conference",
    az: "konfrans",
  },
  {
    id: 860,
    en: "unit",
    az: "bölmə",
  },
  {
    id: 861,
    en: "style",
    az: "tərzi",
  },
  {
    id: 862,
    en: "adult",
    az: "yetkin",
  },
  {
    id: 863,
    en: "worry",
    az: "narahat",
  },
  {
    id: 864,
    en: "range",
    az: "menzil",
  },
  {
    id: 865,
    en: "mention",
    az: "qeyd etmək",
  },
  {
    id: 866,
    en: "deep",
    az: "dərin",
  },
  {
    id: 867,
    en: "edge",
    az: "kənar",
  },
  {
    id: 868,
    en: "specific",
    az: "spesifik",
  },
  {
    id: 869,
    en: "writer",
    az: "yazıçı",
  },
  {
    id: 870,
    en: "trouble",
    az: "dərd",
  },
  {
    id: 871,
    en: "necessary",
    az: "zəruri",
  },
  {
    id: 872,
    en: "throughout",
    az: "boyunca",
  },
  {
    id: 873,
    en: "challenge",
    az: "meydan",
  },
  {
    id: 874,
    en: "fear",
    az: "qorxu",
  },
  {
    id: 875,
    en: "shoulder",
    az: "çiyin",
  },
  {
    id: 876,
    en: "institution",
    az: "qurum",
  },
  {
    id: 877,
    en: "middle",
    az: "orta",
  },
  {
    id: 878,
    en: "sea",
    az: "dəniz",
  },
  {
    id: 879,
    en: "dream",
    az: "yuxu",
  },
  {
    id: 880,
    en: "bar",
    az: "bar",
  },
  {
    id: 881,
    en: "beautiful",
    az: "gözəl",
  },
  {
    id: 882,
    en: "property",
    az: "əmlak",
  },
  {
    id: 883,
    en: "instead",
    az: "əvəzinə",
  },
  {
    id: 884,
    en: "improve",
    az: "yaxşılaşdırmaq",
  },
  {
    id: 885,
    en: "stuff",
    az: "əşyalar",
  },
  {
    id: 886,
    en: "detail",
    az: "detal",
  },
  {
    id: 887,
    en: "method",
    az: "metodu",
  },
  {
    id: 888,
    en: "somebody",
    az: "kimsə",
  },
  {
    id: 889,
    en: "magazine",
    az: "jurnal",
  },
  {
    id: 890,
    en: "hotel",
    az: "otel",
  },
  {
    id: 891,
    en: "soldier",
    az: "əsgər",
  },
  {
    id: 892,
    en: "reflect",
    az: "əks etdirir",
  },
  {
    id: 893,
    en: "heavy",
    az: "ağır",
  },
  {
    id: 894,
    en: "sexual",
    az: "cinsi",
  },
  {
    id: 895,
    en: "bag",
    az: "çanta",
  },
  {
    id: 896,
    en: "heat",
    az: "istilik",
  },
  {
    id: 897,
    en: "marriage",
    az: "evlilik",
  },
  {
    id: 898,
    en: "tough",
    az: "sərt",
  },
  {
    id: 899,
    en: "sing",
    az: "oxumaq",
  },
  {
    id: 900,
    en: "surface",
    az: "səthi",
  },
  {
    id: 901,
    en: "purpose",
    az: "məqsədi",
  },
  {
    id: 902,
    en: "exist",
    az: "mövcüd olmaq",
  },
  {
    id: 903,
    en: "pattern",
    az: "naxış",
  },
  {
    id: 904,
    en: "whom",
    az: "kimə",
  },
  {
    id: 905,
    en: "skin",
    az: "dəri",
  },
  {
    id: 906,
    en: "agent",
    az: "agent",
  },
  {
    id: 907,
    en: "owner",
    az: "sahibi",
  },
  {
    id: 908,
    en: "machine",
    az: "maşın",
  },
  {
    id: 909,
    en: "gas",
    az: "qaz",
  },
  {
    id: 910,
    en: "ahead",
    az: "qabaqda",
  },
  {
    id: 911,
    en: "generation",
    az: "nəsil",
  },
  {
    id: 912,
    en: "commercial",
    az: "kommersiya",
  },
  {
    id: 913,
    en: "address",
    az: "ünvanı",
  },
  {
    id: 914,
    en: "item",
    az: "maddə",
  },
  {
    id: 915,
    en: "reality",
    az: "reallıq",
  },
  {
    id: 916,
    en: "coach",
    az: "məşqçi",
  },
  {
    id: 917,
    en: "Mrs",
    az: "xanım",
  },
  {
    id: 918,
    en: "yard",
    az: "həyət",
  },
  {
    id: 919,
    en: "beat",
    az: "qalib gəlmək",
  },
  {
    id: 920,
    en: "violence",
    az: "zorakılıq",
  },
  {
    id: 921,
    en: "total",
    az: "ümumi",
  },
  {
    id: 922,
    en: "tend",
    az: "meyl etmək",
  },
  {
    id: 923,
    en: "investment",
    az: "investisiya",
  },
  {
    id: 924,
    en: "discussion",
    az: "müzakirə",
  },
  {
    id: 925,
    en: "finger",
    az: "barmaq",
  },
  {
    id: 926,
    en: "garden",
    az: "bağ",
  },
  {
    id: 927,
    en: "notice",
    az: "xəbərdarlıq",
  },
  {
    id: 928,
    en: "collection",
    az: "kolleksiya",
  },
  {
    id: 929,
    en: "modern",
    az: "müasir",
  },
  {
    id: 930,
    en: "task",
    az: "tapşırıq",
  },
  {
    id: 931,
    en: "partner",
    az: "tərəfdaş",
  },
  {
    id: 932,
    en: "positive",
    az: "müsbət",
  },
  {
    id: 933,
    en: "civil",
    az: "mülki",
  },
  {
    id: 934,
    en: "kitchen",
    az: "mətbəx",
  },
  {
    id: 935,
    en: "consumer",
    az: "istehlakçı",
  },
  {
    id: 936,
    en: "shot",
    az: "vurdu",
  },
  {
    id: 937,
    en: "budget",
    az: "büdcə",
  },
  {
    id: 938,
    en: "wish",
    az: "arzulamaq",
  },
  {
    id: 939,
    en: "painting",
    az: "rəsm",
  },
  {
    id: 940,
    en: "scientist",
    az: "alim",
  },
  {
    id: 941,
    en: "safe",
    az: "təhlükəsiz",
  },
  {
    id: 942,
    en: "agreement",
    az: "razılaşma",
  },
  {
    id: 943,
    en: "capital",
    az: "kapital",
  },
  {
    id: 944,
    en: "mouth",
    az: "Ağız",
  },
  {
    id: 945,
    en: "nor",
    az: "nə də",
  },
  {
    id: 946,
    en: "victim",
    az: "qurban",
  },
  {
    id: 947,
    en: "newspaper",
    az: "qəzet",
  },
  {
    id: 948,
    en: "threat",
    az: "təhdid",
  },
  {
    id: 949,
    en: "responsibility",
    az: "məsuliyyət",
  },
  {
    id: 950,
    en: "smile",
    az: "gülümsəmək",
  },
  {
    id: 951,
    en: "attorney",
    az: "müvəkkil",
  },
  {
    id: 952,
    en: "score",
    az: "hesab",
  },
  {
    id: 953,
    en: "account",
    az: "hesabı",
  },
  {
    id: 954,
    en: "interesting",
    az: "maraqlıdır",
  },
  {
    id: 955,
    en: "audience",
    az: "tamaşaçı",
  },
  {
    id: 956,
    en: "rich",
    az: "zəngin",
  },
  {
    id: 957,
    en: "dinner",
    az: "şam yeməyi",
  },
  {
    id: 958,
    en: "vote",
    az: "səs verin",
  },
  {
    id: 959,
    en: "western",
    az: "qərb",
  },
  {
    id: 960,
    en: "relate",
    az: "aid etmək",
  },
  {
    id: 961,
    en: "travel",
    az: "səyahət etmək",
  },
  {
    id: 962,
    en: "debate",
    az: "debat",
  },
  {
    id: 963,
    en: "prevent",
    az: "qarşısını almaq",
  },
  {
    id: 964,
    en: "citizen",
    az: "vətəndaş",
  },
  {
    id: 965,
    en: "majority",
    az: "əksəriyyət",
  },
  {
    id: 966,
    en: "none",
    az: "heç biri",
  },
  {
    id: 967,
    en: "front",
    az: "ön",
  },
  {
    id: 968,
    en: "born",
    az: "doğulub",
  },
  {
    id: 969,
    en: "admit",
    az: "etiraf etmək",
  },
  {
    id: 970,
    en: "senior",
    az: "böyük",
  },
  {
    id: 971,
    en: "assume",
    az: "fərz etmək",
  },
  {
    id: 972,
    en: "wind",
    az: "külək",
  },
  {
    id: 973,
    en: "key",
    az: "açar",
  },
  {
    id: 974,
    en: "professional",
    az: "peşəkar",
  },
  {
    id: 975,
    en: "mission",
    az: "missiya",
  },
  {
    id: 976,
    en: "fast",
    az: "sürətli",
  },
  {
    id: 977,
    en: "alone",
    az: "tək",
  },
  {
    id: 978,
    en: "customer",
    az: "müştəri",
  },
  {
    id: 979,
    en: "suffer",
    az: "əziyyət çəkmək",
  },
  {
    id: 980,
    en: "speech",
    az: "nitq",
  },
  {
    id: 981,
    en: "successful",
    az: "uğurlu",
  },
  {
    id: 982,
    en: "option",
    az: "seçim",
  },
  {
    id: 983,
    en: "participant",
    az: "iştirakçı",
  },
  {
    id: 984,
    en: "southern",
    az: "cənub",
  },
  {
    id: 985,
    en: "fresh",
    az: "təzə",
  },
  {
    id: 986,
    en: "eventually",
    az: "nəhayət",
  },
  {
    id: 987,
    en: "forest",
    az: "meşə",
  },
  {
    id: 988,
    en: "video",
    az: "video",
  },
  {
    id: 989,
    en: "global",
    az: "qlobal",
  },
  {
    id: 990,
    en: "Senate",
    az: "Senat",
  },
  {
    id: 991,
    en: "reform",
    az: "islahat",
  },
  {
    id: 992,
    en: "access",
    az: "Giriş",
  },
  {
    id: 993,
    en: "restaurant",
    az: "restoran",
  },
  {
    id: 994,
    en: "judge",
    az: "hakim",
  },
  {
    id: 995,
    en: "publish",
    az: "dərc etmək",
  },
  {
    id: 996,
    en: "relation",
    az: "münasibət",
  },
  {
    id: 997,
    en: "release",
    az: "buraxmaq",
  },
  {
    id: 998,
    en: "bird",
    az: "quş",
  },
  {
    id: 999,
    en: "opinion",
    az: "rəy",
  },
  {
    id: 1000,
    en: "credit",
    az: "kredit",
  },
  {
    id: 1001,
    en: "critical",
    az: "tənqidi",
  },
  {
    id: 1002,
    en: "corner",
    az: "künc",
  },
  {
    id: 1003,
    en: "concerned",
    az: "narahat",
  },
  {
    id: 1004,
    en: "recall",
    az: "geri çağırmaq",
  },
  {
    id: 1005,
    en: "version",
    az: "versiya",
  },
  {
    id: 1006,
    en: "stare",
    az: "nəzər salmaq",
  },
  {
    id: 1007,
    en: "safety",
    az: "təhlükəsizlik",
  },
  {
    id: 1008,
    en: "effective",
    az: "təsirli",
  },
  {
    id: 1009,
    en: "neighborhood",
    az: "qonşuluq",
  },
  {
    id: 1010,
    en: "original",
    az: "orijinal",
  },
  {
    id: 1011,
    en: "troop",
    az: "qoşun",
  },
  {
    id: 1012,
    en: "income",
    az: "gəlir",
  },
  {
    id: 1013,
    en: "directly",
    az: "birbaşa",
  },
  {
    id: 1014,
    en: "hurt",
    az: "incidir",
  },
  {
    id: 1015,
    en: "species",
    az: "növlər",
  },
  {
    id: 1016,
    en: "immediately",
    az: "dərhal",
  },
  {
    id: 1017,
    en: "basic",
    az: "əsas",
  },
  {
    id: 1018,
    en: "strike",
    az: "tətil",
  },
  {
    id: 1019,
    en: "sky",
    az: "səma",
  },
  {
    id: 1020,
    en: "freedom",
    az: "azadlıq",
  },
  {
    id: 1021,
    en: "absolutely",
    az: "tamamilə",
  },
  {
    id: 1022,
    en: "plane",
    az: "təyyarə",
  },
  {
    id: 1023,
    en: "nobody",
    az: "heç kim",
  },
  {
    id: 1024,
    en: "achieve",
    az: "nail olmaq",
  },
  {
    id: 1025,
    en: "object",
    az: "obyekt",
  },
  {
    id: 1026,
    en: "attitude",
    az: "münasibət",
  },
  {
    id: 1027,
    en: "labor",
    az: "əmək",
  },
  {
    id: 1028,
    en: "concept",
    az: "konsepsiya",
  },
  {
    id: 1029,
    en: "client",
    az: "müştəri",
  },
  {
    id: 1030,
    en: "powerful",
    az: "güclü",
  },
  {
    id: 1031,
    en: "perfect",
    az: "mükəmməl",
  },
  {
    id: 1032,
    en: "nine",
    az: "doqquz",
  },
  {
    id: 1033,
    en: "therefore",
    az: "buna görə",
  },
  {
    id: 1034,
    en: "conduct",
    az: "davranış",
  },
  {
    id: 1035,
    en: "announce",
    az: "elan edin",
  },
  {
    id: 1036,
    en: "conversation",
    az: "söhbət",
  },
  {
    id: 1037,
    en: "examine",
    az: "yoxlamaq",
  },
  {
    id: 1038,
    en: "touch",
    az: "toxunmaq",
  },
  {
    id: 1039,
    en: "please",
    az: "xahiş edirəm",
  },
  {
    id: 1040,
    en: "attend",
    az: "iştirak etmək",
  },
  {
    id: 1041,
    en: "completely",
    az: "tamamilə",
  },
  {
    id: 1042,
    en: "variety",
    az: "müxtəliflik",
  },
  {
    id: 1043,
    en: "sleep",
    az: "yuxu",
  },
  {
    id: 1044,
    en: "involved",
    az: "cəlb olunur",
  },
  {
    id: 1045,
    en: "investigation",
    az: "istintaq",
  },
  {
    id: 1046,
    en: "nuclear",
    az: "nüvə",
  },
  {
    id: 1047,
    en: "researcher",
    az: "tədqiqatçı",
  },
  {
    id: 1048,
    en: "press",
    az: "mətbuat",
  },
  {
    id: 1049,
    en: "conflict",
    az: "münaqişə",
  },
  {
    id: 1050,
    en: "spirit",
    az: "ruh",
  },
  {
    id: 1051,
    en: "replace",
    az: "əvəz etmək",
  },
  {
    id: 1052,
    en: "British",
    az: "İngilis",
  },
  {
    id: 1053,
    en: "encourage",
    az: "təşviq etmək",
  },
  {
    id: 1054,
    en: "argument",
    az: "mübahisə",
  },
  {
    id: 1055,
    en: "camp",
    az: "düşərgə",
  },
  {
    id: 1056,
    en: "brain",
    az: "beyin",
  },
  {
    id: 1057,
    en: "feature",
    az: "xüsusiyyət",
  },
  {
    id: 1058,
    en: "afternoon",
    az: "günortadan sonra",
  },
  {
    id: 1059,
    en: "weekend",
    az: "həftə sonu",
  },
  {
    id: 1060,
    en: "dozen",
    az: "çoxdur",
  },
  {
    id: 1061,
    en: "possibility",
    az: "ehtimal",
  },
  {
    id: 1062,
    en: "insurance",
    az: "sığorta",
  },
  {
    id: 1063,
    en: "department",
    az: "şöbə",
  },
  {
    id: 1064,
    en: "battle",
    az: "döyüş",
  },
  {
    id: 1065,
    en: "beginning",
    az: "Başlanğıc",
  },
  {
    id: 1066,
    en: "date",
    az: "Tarix",
  },
  {
    id: 1067,
    en: "generally",
    az: "ümumiyyətlə",
  },
  {
    id: 1068,
    en: "African",
    az: "Afrika",
  },
  {
    id: 1069,
    en: "sorry",
    az: "üzr istəyirəm",
  },
  {
    id: 1070,
    en: "crisis",
    az: "böhran",
  },
  {
    id: 1071,
    en: "complete",
    az: "tamamlandı",
  },
  {
    id: 1072,
    en: "fan",
    az: "fanat",
  },
  {
    id: 1073,
    en: "stick",
    az: "çubuq",
  },
  {
    id: 1074,
    en: "define",
    az: "müəyyənləşdirmək",
  },
  {
    id: 1075,
    en: "easily",
    az: "asanlıqla",
  },
  {
    id: 1076,
    en: "hole",
    az: "dəlik",
  },
  {
    id: 1077,
    en: "element",
    az: "element",
  },
  {
    id: 1078,
    en: "vision",
    az: "görmə",
  },
  {
    id: 1079,
    en: "status",
    az: "status",
  },
  {
    id: 1080,
    en: "normal",
    az: "normal",
  },
  {
    id: 1081,
    en: "Chinese",
    az: "Çin",
  },
  {
    id: 1082,
    en: "ship",
    az: "gəmi",
  },
  {
    id: 1083,
    en: "solution",
    az: "həll",
  },
  {
    id: 1084,
    en: "stone",
    az: "daş",
  },
  {
    id: 1085,
    en: "slowly",
    az: "yavaş-yavaş",
  },
  {
    id: 1086,
    en: "scale",
    az: "miqyaslı",
  },
  {
    id: 1087,
    en: "university",
    az: "universitet",
  },
  {
    id: 1088,
    en: "introduce",
    az: "tanıtmaq",
  },
  {
    id: 1089,
    en: "driver",
    az: "sürücü",
  },
  {
    id: 1090,
    en: "attempt",
    az: "cəhd",
  },
  {
    id: 1091,
    en: "park",
    az: "park",
  },
  {
    id: 1092,
    en: "spot",
    az: "ləkə",
  },
  {
    id: 1093,
    en: "lack",
    az: "çatışmazlığı",
  },
  {
    id: 1094,
    en: "ice",
    az: "buz",
  },
  {
    id: 1095,
    en: "boat",
    az: "qayıq",
  },
  {
    id: 1096,
    en: "drink",
    az: "içmək",
  },
  {
    id: 1097,
    en: "sun",
    az: "günəş",
  },
  {
    id: 1098,
    en: "distance",
    az: "məsafə",
  },
  {
    id: 1099,
    en: "wood",
    az: "odun",
  },
  {
    id: 1100,
    en: "handle",
    az: "qolu",
  },
  {
    id: 1101,
    en: "truck",
    az: "yük maşını",
  },
  {
    id: 1102,
    en: "mountain",
    az: "dağ",
  },
  {
    id: 1103,
    en: "survey",
    az: "sorğu",
  },
  {
    id: 1104,
    en: "supposed",
    az: "ehtimal olunur",
  },
  {
    id: 1105,
    en: "tradition",
    az: "ənənə",
  },
  {
    id: 1106,
    en: "winter",
    az: "qış",
  },
  {
    id: 1107,
    en: "village",
    az: "kənd",
  },
  {
    id: 1108,
    en: "Soviet",
    az: "Sovet",
  },
  {
    id: 1109,
    en: "refuse",
    az: "imtina etmək",
  },
  {
    id: 1110,
    en: "sales",
    az: "satış",
  },
  {
    id: 1111,
    en: "roll",
    az: "rulon",
  },
  {
    id: 1112,
    en: "communication",
    az: "rabitə",
  },
  {
    id: 1113,
    en: "screen",
    az: "ekran",
  },
  {
    id: 1114,
    en: "gain",
    az: "qazanc",
  },
  {
    id: 1115,
    en: "resident",
    az: "rezident",
  },
  {
    id: 1116,
    en: "hide",
    az: "gizlət",
  },
  {
    id: 1117,
    en: "gold",
    az: "qızıl",
  },
  {
    id: 1118,
    en: "club",
    az: "klub",
  },
  {
    id: 1119,
    en: "farm",
    az: "ferma",
  },
  {
    id: 1120,
    en: "potential",
    az: "potensial",
  },
  {
    id: 1121,
    en: "European",
    az: "Avropa",
  },
  {
    id: 1122,
    en: "presence",
    az: "varlığı",
  },
  {
    id: 1123,
    en: "independent",
    az: "müstəqil",
  },
  {
    id: 1124,
    en: "district",
    az: "rayonu",
  },
  {
    id: 1125,
    en: "shape",
    az: "forma",
  },
  {
    id: 1126,
    en: "reader",
    az: "oxucu",
  },
  {
    id: 1127,
    en: "Ms",
    az: "Xanım",
  },
  {
    id: 1128,
    en: "contract",
    az: "müqavilə",
  },
  {
    id: 1129,
    en: "crowd",
    az: "izdiham",
  },
  {
    id: 1130,
    en: "Christian",
    az: "Xristian",
  },
  {
    id: 1131,
    en: "express",
    az: "ifadə edin",
  },
  {
    id: 1132,
    en: "apartment",
    az: "mənzil",
  },
  {
    id: 1133,
    en: "willing",
    az: "istəkli",
  },
  {
    id: 1134,
    en: "strength",
    az: "güc",
  },
  {
    id: 1135,
    en: "band",
    az: "qrup",
  },
  {
    id: 1136,
    en: "obviously",
    az: "açıq-aydın",
  },
  {
    id: 1137,
    en: "horse",
    az: "at",
  },
  {
    id: 1138,
    en: "interested",
    az: "maraqlandirir",
  },
  {
    id: 1139,
    en: "target",
    az: "hədəf",
  },
  {
    id: 1140,
    en: "prison",
    az: "həbsxana",
  },
  {
    id: 1141,
    en: "ride",
    az: "Sürmək",
  },
  {
    id: 1142,
    en: "guard",
    az: "gözətçi",
  },
  {
    id: 1143,
    en: "terms",
    az: "şərtləri",
  },
  {
    id: 1144,
    en: "demand",
    az: "tələb",
  },
  {
    id: 1145,
    en: "reporter",
    az: "müxbir",
  },
  {
    id: 1146,
    en: "deliver",
    az: "çatdırmaq",
  },
  {
    id: 1147,
    en: "text",
    az: "mətn",
  },
  {
    id: 1148,
    en: "tool",
    az: "vasitə",
  },
  {
    id: 1149,
    en: "wild",
    az: "vəhşi",
  },
  {
    id: 1150,
    en: "vehicle",
    az: "vasitə",
  },
  {
    id: 1151,
    en: "observe",
    az: "müşahidə etmək",
  },
  {
    id: 1152,
    en: "flight",
    az: "uçuş",
  },
  {
    id: 1153,
    en: "facility",
    az: "Təsis",
  },
  {
    id: 1154,
    en: "understanding",
    az: "anlayış",
  },
  {
    id: 1155,
    en: "average",
    az: "orta",
  },
  {
    id: 1156,
    en: "emerge",
    az: "ortaya çıxmaq",
  },
  {
    id: 1157,
    en: "advantage",
    az: "üstünlüyü",
  },
  {
    id: 1158,
    en: "quick",
    az: "tez",
  },
  {
    id: 1159,
    en: "leadership",
    az: "rəhbərlik",
  },
  {
    id: 1160,
    en: "earn",
    az: "qazanmaq",
  },
  {
    id: 1161,
    en: "pound",
    az: "funt",
  },
  {
    id: 1162,
    en: "basis",
    az: "əsas",
  },
  {
    id: 1163,
    en: "bright",
    az: "parlaq",
  },
  {
    id: 1164,
    en: "operate",
    az: "fəaliyyət göstərir",
  },
  {
    id: 1165,
    en: "guest",
    az: "Qonaq",
  },
  {
    id: 1166,
    en: "sample",
    az: "nümunə",
  },
  {
    id: 1167,
    en: "contribute",
    az: "töhfə vermək",
  },
  {
    id: 1168,
    en: "tiny",
    az: "kiçik",
  },
  {
    id: 1169,
    en: "block",
    az: "blok",
  },
  {
    id: 1170,
    en: "protection",
    az: "qoruma",
  },
  {
    id: 1171,
    en: "settle",
    az: "həll etmək",
  },
  {
    id: 1172,
    en: "feed",
    az: "yem",
  },
  {
    id: 1173,
    en: "collect",
    az: "toplamaq",
  },
  {
    id: 1174,
    en: "additional",
    az: "əlavə",
  },
  {
    id: 1175,
    en: "highly",
    az: "yüksək dərəcədə",
  },
  {
    id: 1176,
    en: "identity",
    az: "şəxsiyyət",
  },
  {
    id: 1177,
    en: "title",
    az: "başlıq",
  },
  {
    id: 1178,
    en: "mostly",
    az: "əsasən",
  },
  {
    id: 1179,
    en: "lesson",
    az: "dərs",
  },
  {
    id: 1180,
    en: "faith",
    az: "iman",
  },
  {
    id: 1181,
    en: "river",
    az: "çay",
  },
  {
    id: 1182,
    en: "promote",
    az: "təşviq etmək",
  },
  {
    id: 1183,
    en: "living",
    az: "yaşayan",
  },
  {
    id: 1184,
    en: "count",
    az: "saymaq",
  },
  {
    id: 1185,
    en: "unless",
    az: "istisna olmaqla",
  },
  {
    id: 1186,
    en: "marry",
    az: "evlənmək",
  },
  {
    id: 1187,
    en: "tomorrow",
    az: "sabah",
  },
  {
    id: 1188,
    en: "technique",
    az: "texnika",
  },
  {
    id: 1189,
    en: "path",
    az: "yol",
  },
  {
    id: 1190,
    en: "ear",
    az: "qulaq",
  },
  {
    id: 1191,
    en: "shop",
    az: "dükan",
  },
  {
    id: 1192,
    en: "folk",
    az: "xalq",
  },
  {
    id: 1193,
    en: "principle",
    az: "prinsipi",
  },
  {
    id: 1194,
    en: "survive",
    az: "sağ qal",
  },
  {
    id: 1195,
    en: "lift",
    az: "qaldırmaq",
  },
  {
    id: 1196,
    en: "border",
    az: "haşiyə",
  },
  {
    id: 1197,
    en: "competition",
    az: "rəqabət",
  },
  {
    id: 1198,
    en: "jump",
    az: "tullanmaq",
  },
  {
    id: 1199,
    en: "gather",
    az: "toplamaq",
  },
  {
    id: 1200,
    en: "limit",
    az: "həddi",
  },
  {
    id: 1201,
    en: "fit",
    az: "uyğun",
  },
  {
    id: 1202,
    en: "cry",
    az: "ağlamaq",
  },
  {
    id: 1203,
    en: "equipment",
    az: "avadanlıqlar",
  },
  {
    id: 1204,
    en: "worth",
    az: "dəyər",
  },
  {
    id: 1205,
    en: "associate",
    az: "şərik",
  },
  {
    id: 1206,
    en: "critic",
    az: "tənqidçi",
  },
  {
    id: 1207,
    en: "warm",
    az: "isti",
  },
  {
    id: 1208,
    en: "aspect",
    az: "aspekt",
  },
  {
    id: 1209,
    en: "insist",
    az: "israr et",
  },
  {
    id: 1210,
    en: "failure",
    az: "uğursuzluq",
  },
  {
    id: 1211,
    en: "annual",
    az: "illik",
  },
  {
    id: 1212,
    en: "French",
    az: "Fransız dili",
  },
  {
    id: 1213,
    en: "Christmas",
    az: "Milad",
  },
  {
    id: 1214,
    en: "comment",
    az: "Şərh",
  },
  {
    id: 1215,
    en: "responsible",
    az: "cavabdehdir",
  },
  {
    id: 1216,
    en: "affair",
    az: "iş",
  },
  {
    id: 1217,
    en: "procedure",
    az: "proseduru",
  },
  {
    id: 1218,
    en: "regular",
    az: "müntəzəm",
  },
  {
    id: 1219,
    en: "spread",
    az: "yaymaq",
  },
  {
    id: 1220,
    en: "chairman",
    az: "sədri",
  },
  {
    id: 1221,
    en: "baseball",
    az: "beysbol",
  },
  {
    id: 1222,
    en: "soft",
    az: "yumşaq",
  },
  {
    id: 1223,
    en: "ignore",
    az: "gözdən salmaq",
  },
  {
    id: 1224,
    en: "egg",
    az: "yumurta",
  },
  {
    id: 1225,
    en: "belief",
    az: "inanc",
  },
  {
    id: 1226,
    en: "demonstrate",
    az: "nümayiş etdirmək",
  },
  {
    id: 1227,
    en: "anybody",
    az: "heç kim",
  },
  {
    id: 1228,
    en: "murder",
    az: "qətl",
  },
  {
    id: 1229,
    en: "gift",
    az: "hədiyyə",
  },
  {
    id: 1230,
    en: "religion",
    az: "din",
  },
  {
    id: 1231,
    en: "review",
    az: "baxış-icmal",
  },
  {
    id: 1232,
    en: "editor",
    az: "Redaktor",
  },
  {
    id: 1233,
    en: "engage",
    az: "məşğul",
  },
  {
    id: 1234,
    en: "coffee",
    az: "qəhvə",
  },
  {
    id: 1235,
    en: "document",
    az: "sənəd",
  },
  {
    id: 1236,
    en: "speed",
    az: "sürət",
  },
  {
    id: 1237,
    en: "cross",
    az: "xaç",
  },
  {
    id: 1238,
    en: "influence",
    az: "təsir",
  },
  {
    id: 1239,
    en: "anyway",
    az: "hər halda",
  },
  {
    id: 1240,
    en: "threaten",
    az: "təhdid etmək",
  },
  {
    id: 1241,
    en: "commit",
    az: "törətmək",
  },
  {
    id: 1242,
    en: "female",
    az: "qadın",
  },
  {
    id: 1243,
    en: "youth",
    az: "gənclik",
  },
  {
    id: 1244,
    en: "wave",
    az: "dalğa",
  },
  {
    id: 1245,
    en: "afraid",
    az: "qorxur",
  },
  {
    id: 1246,
    en: "quarter",
    az: "dörddəbir",
  },
  {
    id: 1247,
    en: "background",
    az: "fon",
  },
  {
    id: 1248,
    en: "broad",
    az: "geniş",
  },
  {
    id: 1249,
    en: "wonderful",
    az: "gözəl",
  },
  {
    id: 1250,
    en: "deny",
    az: "inkar etmək",
  },
  {
    id: 1251,
    en: "apparently",
    az: "yəqin",
  },
  {
    id: 1252,
    en: "slightly",
    az: "biraz",
  },
  {
    id: 1253,
    en: "reaction",
    az: "reaksiya",
  },
  {
    id: 1254,
    en: "twice",
    az: "iki dəfə",
  },
  {
    id: 1255,
    en: "suit",
    az: "kostyum",
  },
  {
    id: 1256,
    en: "perspective",
    az: "perspektiv",
  },
  {
    id: 1257,
    en: "growing",
    az: "böyüyür",
  },
  {
    id: 1258,
    en: "blow",
    az: "zərbə",
  },
  {
    id: 1259,
    en: "construction",
    az: "Tikinti",
  },
  {
    id: 1260,
    en: "intelligence",
    az: "zəka",
  },
  {
    id: 1261,
    en: "destroy",
    az: "məhv etmək",
  },
  {
    id: 1262,
    en: "cook",
    az: "bişirmək",
  },
  {
    id: 1263,
    en: "connection",
    az: "əlaqə",
  },
  {
    id: 1264,
    en: "burn",
    az: "yandırmaq",
  },
  {
    id: 1265,
    en: "shoe",
    az: "Ayaqqabı",
  },
  {
    id: 1266,
    en: "grade",
    az: "sinif",
  },
  {
    id: 1267,
    en: "context",
    az: "Kontekst",
  },
  {
    id: 1268,
    en: "committee",
    az: "komitə",
  },
  {
    id: 1269,
    en: "hey",
    az: "heyif",
  },
  {
    id: 1270,
    en: "mistake",
    az: "səhv",
  },
  {
    id: 1271,
    en: "location",
    az: "yeri",
  },
  {
    id: 1272,
    en: "clothes",
    az: "paltar",
  },
  {
    id: 1273,
    en: "Indian",
    az: "Hind",
  },
  {
    id: 1274,
    en: "quiet",
    az: "sakit",
  },
  {
    id: 1275,
    en: "dress",
    az: "geyinmək",
  },
  {
    id: 1276,
    en: "promise",
    az: "söz",
  },
  {
    id: 1277,
    en: "aware",
    az: "xəbərdar",
  },
  {
    id: 1278,
    en: "neighbor",
    az: "qonşu",
  },
  {
    id: 1279,
    en: "function",
    az: "funksiyası",
  },
  {
    id: 1280,
    en: "bone",
    az: "sümük",
  },
  {
    id: 1281,
    en: "active",
    az: "aktivdir",
  },
  {
    id: 1282,
    en: "extend",
    az: "uzatmaq",
  },
  {
    id: 1283,
    en: "chief",
    az: "rəis",
  },
  {
    id: 1284,
    en: "combine",
    az: "birləşdirmək",
  },
  {
    id: 1285,
    en: "wine",
    az: "şərab",
  },
  {
    id: 1286,
    en: "below",
    az: "aşağıda",
  },
  {
    id: 1287,
    en: "cool",
    az: "sərin",
  },
  {
    id: 1288,
    en: "voter",
    az: "seçici",
  },
  {
    id: 1289,
    en: "learning",
    az: "öyrənmək",
  },
  {
    id: 1290,
    en: "bus",
    az: "avtobus",
  },
  {
    id: 1291,
    en: "hell",
    az: "cəhənnəm",
  },
  {
    id: 1292,
    en: "dangerous",
    az: "təhlükəli",
  },
  {
    id: 1293,
    en: "remind",
    az: "xatırlatmaq",
  },
  {
    id: 1294,
    en: "moral",
    az: "mənəvi",
  },
  {
    id: 1295,
    en: "United",
    az: "Birləşmiş",
  },
  {
    id: 1296,
    en: "category",
    az: "kateqoriya",
  },
  {
    id: 1297,
    en: "relatively",
    az: "nisbətən",
  },
  {
    id: 1298,
    en: "victory",
    az: "qələbə",
  },
  {
    id: 1299,
    en: "academic",
    az: "akademik",
  },
  {
    id: 1300,
    en: "Internet",
    az: "İnternet",
  },
  {
    id: 1301,
    en: "healthy",
    az: "sağlam",
  },
  {
    id: 1302,
    en: "negative",
    az: "mənfi",
  },
  {
    id: 1303,
    en: "following",
    az: "aşağıdakı",
  },
  {
    id: 1304,
    en: "historical",
    az: "tarixi",
  },
  {
    id: 1305,
    en: "medicine",
    az: "dərman",
  },
  {
    id: 1306,
    en: "tour",
    az: "tur",
  },
  {
    id: 1307,
    en: "depend",
    az: "asılıdır",
  },
  {
    id: 1308,
    en: "photo",
    az: "Şəkil",
  },
  {
    id: 1309,
    en: "finding",
    az: "tapmaq",
  },
  {
    id: 1310,
    en: "grab",
    az: "tutmaq",
  },
  {
    id: 1311,
    en: "direct",
    az: "birbaşa",
  },
  {
    id: 1312,
    en: "classroom",
    az: "sinif otağı",
  },
  {
    id: 1313,
    en: "contact",
    az: "əlaqə",
  },
  {
    id: 1314,
    en: "justice",
    az: "ədalət",
  },
  {
    id: 1315,
    en: "participate",
    az: "iştirak etmək",
  },
  {
    id: 1316,
    en: "daily",
    az: "gündəlik",
  },
  {
    id: 1317,
    en: "fair",
    az: "ədalətli",
  },
  {
    id: 1318,
    en: "pair",
    az: "cütlük",
  },
  {
    id: 1319,
    en: "famous",
    az: "məşhurdur",
  },
  {
    id: 1320,
    en: "exercise",
    az: "məşq",
  },
  {
    id: 1321,
    en: "knee",
    az: "diz",
  },
  {
    id: 1322,
    en: "flower",
    az: "çiçək",
  },
  {
    id: 1323,
    en: "hire",
    az: "kirayə vermək",
  },
  {
    id: 1324,
    en: "familiar",
    az: "tanış",
  },
  {
    id: 1325,
    en: "appropriate",
    az: "uyğun",
  },
  {
    id: 1326,
    en: "supply",
    az: "təchizatı",
  },
  {
    id: 1327,
    en: "fully",
    az: "tam",
  },
  {
    id: 1328,
    en: "actor",
    az: "aktyor",
  },
  {
    id: 1329,
    en: "birth",
    az: "doğuş",
  },
  {
    id: 1330,
    en: "search",
    az: "axtarış",
  },
  {
    id: 1331,
    en: "tie",
    az: "qalustuk",
  },
  {
    id: 1332,
    en: "democracy",
    az: "demokratiya",
  },
  {
    id: 1333,
    en: "eastern",
    az: "şərq",
  },
  {
    id: 1334,
    en: "primary",
    az: "ibtidai",
  },
  {
    id: 1335,
    en: "yesterday",
    az: "dünən",
  },
  {
    id: 1336,
    en: "circle",
    az: "dairə",
  },
  {
    id: 1337,
    en: "device",
    az: "qurğu",
  },
  {
    id: 1338,
    en: "progress",
    az: "tərəqqi",
  },
  {
    id: 1339,
    en: "bottom",
    az: "alt",
  },
  {
    id: 1340,
    en: "island",
    az: "ada",
  },
  {
    id: 1341,
    en: "exchange",
    az: "mübadilə",
  },
  {
    id: 1342,
    en: "clean",
    az: "təmiz",
  },
  {
    id: 1343,
    en: "studio",
    az: "studiya",
  },
  {
    id: 1344,
    en: "train",
    az: "qatar",
  },
  {
    id: 1345,
    en: "lady",
    az: "xanim",
  },
  {
    id: 1346,
    en: "colleague",
    az: "həmkar",
  },
  {
    id: 1347,
    en: "application",
    az: "tətbiqi",
  },
  {
    id: 1348,
    en: "neck",
    az: "boyun",
  },
  {
    id: 1349,
    en: "lean",
    az: "arıq",
  },
  {
    id: 1350,
    en: "damage",
    az: "zərər",
  },
  {
    id: 1351,
    en: "plastic",
    az: "plastik",
  },
  {
    id: 1352,
    en: "tall",
    az: "hündür",
  },
  {
    id: 1353,
    en: "plate",
    az: "boşqab",
  },
  {
    id: 1354,
    en: "hate",
    az: "nifrət",
  },
  {
    id: 1355,
    en: "otherwise",
    az: "başqa cür",
  },
  {
    id: 1356,
    en: "writing",
    az: "yazmaq",
  },
  {
    id: 1357,
    en: "male",
    az: "kişi",
  },
  {
    id: 1358,
    en: "alive",
    az: "diri",
  },
  {
    id: 1359,
    en: "expression",
    az: "ifadəsi",
  },
  {
    id: 1360,
    en: "football",
    az: "futbol",
  },
  {
    id: 1361,
    en: "intend",
    az: "niyyət etmək",
  },
  {
    id: 1362,
    en: "chicken",
    az: "toyuq",
  },
  {
    id: 1363,
    en: "army",
    az: "ordu",
  },
  {
    id: 1364,
    en: "abuse",
    az: "sui-istifadə",
  },
  {
    id: 1365,
    en: "theater",
    az: "teatr",
  },
  {
    id: 1366,
    en: "shut",
    az: "bağlamaq",
  },
  {
    id: 1367,
    en: "map",
    az: "xəritə",
  },
  {
    id: 1368,
    en: "extra",
    az: "əlavə",
  },
  {
    id: 1369,
    en: "session",
    az: "iclas",
  },
  {
    id: 1370,
    en: "danger",
    az: "təhlükə",
  },
  {
    id: 1371,
    en: "welcome",
    az: "xoş gəldin",
  },
  {
    id: 1372,
    en: "domestic",
    az: "yerli",
  },
  {
    id: 1373,
    en: "lots",
    az: "çoxlu",
  },
  {
    id: 1374,
    en: "literature",
    az: "ədəbiyyat",
  },
  {
    id: 1375,
    en: "rain",
    az: "yağış",
  },
  {
    id: 1376,
    en: "desire",
    az: "istək",
  },
  {
    id: 1377,
    en: "assessment",
    az: "qiymətləndirilməsi",
  },
  {
    id: 1378,
    en: "injury",
    az: "zədə",
  },
  {
    id: 1379,
    en: "respect",
    az: "hörmət",
  },
  {
    id: 1380,
    en: "northern",
    az: "şimal",
  },
  {
    id: 1381,
    en: "nod",
    az: "qarmaq",
  },
  {
    id: 1382,
    en: "paint",
    az: "çəkmək",
  },
  {
    id: 1383,
    en: "fuel",
    az: "yanacaq",
  },
  {
    id: 1384,
    en: "leaf",
    az: "yarpaq",
  },
  {
    id: 1385,
    en: "dry",
    az: "quru",
  },
  {
    id: 1386,
    en: "Russian",
    az: "Rus",
  },
  {
    id: 1387,
    en: "instruction",
    az: "təlimat",
  },
  {
    id: 1388,
    en: "pool",
    az: "hovuz",
  },
  {
    id: 1389,
    en: "climb",
    az: "qalxmaq",
  },
  {
    id: 1390,
    en: "sweet",
    az: "şirin",
  },
  {
    id: 1391,
    en: "engine",
    az: "mühərrik",
  },
  {
    id: 1392,
    en: "fourth",
    az: "dördüncü",
  },
  {
    id: 1393,
    en: "salt",
    az: "duz",
  },
  {
    id: 1394,
    en: "expand",
    az: "genişləndirmək",
  },
  {
    id: 1395,
    en: "importance",
    az: "əhəmiyyəti",
  },
  {
    id: 1396,
    en: "metal",
    az: "Metal",
  },
  {
    id: 1397,
    en: "fat",
    az: "yağ",
  },
  {
    id: 1398,
    en: "ticket",
    az: "bilet",
  },
  {
    id: 1399,
    en: "software",
    az: "proqram təminatı",
  },
  {
    id: 1400,
    en: "disappear",
    az: "yox olur",
  },
  {
    id: 1401,
    en: "corporate",
    az: "korporativ",
  },
  {
    id: 1402,
    en: "strange",
    az: "qəribə",
  },
  {
    id: 1403,
    en: "lip",
    az: "dodaq",
  },
  {
    id: 1404,
    en: "reading",
    az: "oxu",
  },
  {
    id: 1405,
    en: "urban",
    az: "şəhər",
  },
  {
    id: 1406,
    en: "mental",
    az: "zehni",
  },
  {
    id: 1407,
    en: "increasingly",
    az: "getdikcə artır",
  },
  {
    id: 1408,
    en: "lunch",
    az: "nahar",
  },
  {
    id: 1409,
    en: "educational",
    az: "təhsil",
  },
  {
    id: 1410,
    en: "somewhere",
    az: "haradasa",
  },
  {
    id: 1411,
    en: "farmer",
    az: "əkinçi",
  },
  {
    id: 1412,
    en: "sugar",
    az: "şəkər",
  },
  {
    id: 1413,
    en: "planet",
    az: "planet",
  },
  {
    id: 1414,
    en: "favorite",
    az: "Sevimli",
  },
  {
    id: 1415,
    en: "explore",
    az: "araşdırmaq",
  },
  {
    id: 1416,
    en: "obtain",
    az: "əldə etmək",
  },
  {
    id: 1417,
    en: "enemy",
    az: "düşmən",
  },
  {
    id: 1418,
    en: "greatest",
    az: "ən böyük",
  },
  {
    id: 1419,
    en: "complex",
    az: "kompleks",
  },
  {
    id: 1420,
    en: "surround",
    az: "əhatə etmək",
  },
  {
    id: 1421,
    en: "athlete",
    az: "atlet",
  },
  {
    id: 1422,
    en: "invite",
    az: "dəvət etmək",
  },
  {
    id: 1423,
    en: "repeat",
    az: "təkrarlamaq",
  },
  {
    id: 1424,
    en: "carefully",
    az: "diqqətlə",
  },
  {
    id: 1425,
    en: "soul",
    az: "ruh",
  },
  {
    id: 1426,
    en: "scientific",
    az: "elmi",
  },
  {
    id: 1427,
    en: "impossible",
    az: "qeyri-mümkün",
  },
  {
    id: 1428,
    en: "panel",
    az: "panel",
  },
  {
    id: 1429,
    en: "meaning",
    az: "məna",
  },
  {
    id: 1430,
    en: "mom",
    az: "ana",
  },
  {
    id: 1431,
    en: "married",
    az: "evli",
  },
  {
    id: 1432,
    en: "instrument",
    az: "alət",
  },
  {
    id: 1433,
    en: "predict",
    az: "proqnozlaşdırmaq",
  },
  {
    id: 1434,
    en: "weather",
    az: "hava",
  },
  {
    id: 1435,
    en: "presidential",
    az: "prezident",
  },
  {
    id: 1436,
    en: "emotional",
    az: "emosional",
  },
  {
    id: 1437,
    en: "commitment",
    az: "bağlılıq",
  },
  {
    id: 1438,
    en: "Supreme",
    az: "Ali",
  },
  {
    id: 1439,
    en: "bear",
    az: "ayı",
  },
  {
    id: 1440,
    en: "pocket",
    az: "cib",
  },
  {
    id: 1441,
    en: "thin",
    az: "incə",
  },
  {
    id: 1442,
    en: "temperature",
    az: "temperatur",
  },
  {
    id: 1443,
    en: "surprise",
    az: "sürpriz",
  },
  {
    id: 1444,
    en: "poll",
    az: "anket",
  },
  {
    id: 1445,
    en: "proposal",
    az: "təklif",
  },
  {
    id: 1446,
    en: "consequence",
    az: "nəticəsi",
  },
  {
    id: 1447,
    en: "breath",
    az: "nəfəs",
  },
  {
    id: 1448,
    en: "sight",
    az: "mənzərə",
  },
  {
    id: 1449,
    en: "balance",
    az: "balans",
  },
  {
    id: 1450,
    en: "adopt",
    az: "övladlığa götürmək",
  },
  {
    id: 1451,
    en: "minority",
    az: "azlıq",
  },
  {
    id: 1452,
    en: "straight",
    az: "düz",
  },
  {
    id: 1453,
    en: "connect",
    az: "qoşulmaq",
  },
  {
    id: 1454,
    en: "works",
    az: "işləyir",
  },
  {
    id: 1455,
    en: "teaching",
    az: "tədris",
  },
  {
    id: 1456,
    en: "belong",
    az: "aiddir",
  },
  {
    id: 1457,
    en: "aid",
    az: "yardım",
  },
  {
    id: 1458,
    en: "advice",
    az: "nəsihət",
  },
  {
    id: 1459,
    en: "okay",
    az: "tamam",
  },
  {
    id: 1460,
    en: "photograph",
    az: "fotoşəkil",
  },
  {
    id: 1461,
    en: "empty",
    az: "boş",
  },
  {
    id: 1462,
    en: "regional",
    az: "regional",
  },
  {
    id: 1463,
    en: "trail",
    az: "cığır",
  },
  {
    id: 1464,
    en: "novel",
    az: "roman",
  },
  {
    id: 1465,
    en: "code",
    az: "kodu",
  },
  {
    id: 1466,
    en: "somehow",
    az: "birtəhər",
  },
  {
    id: 1467,
    en: "organize",
    az: "təşkil etmək",
  },
  {
    id: 1468,
    en: "jury",
    az: "münsiflər heyəti",
  },
  {
    id: 1469,
    en: "breast",
    az: "döş",
  },
  {
    id: 1470,
    en: "Iraqi",
    az: "İraqlı",
  },
  {
    id: 1471,
    en: "acknowledge",
    az: "etiraf edin",
  },
  {
    id: 1472,
    en: "storm",
    az: "fırtına",
  },
  {
    id: 1473,
    en: "union",
    az: "birlik",
  },
  {
    id: 1474,
    en: "desk",
    az: "Yazı masası",
  },
  {
    id: 1475,
    en: "thanks",
    az: "təşəkkür edirəm",
  },
  {
    id: 1476,
    en: "fruit",
    az: "meyvə",
  },
  {
    id: 1477,
    en: "expensive",
    az: "bahalı",
  },
  {
    id: 1478,
    en: "yellow",
    az: "sarı",
  },
  {
    id: 1479,
    en: "conclusion",
    az: "nəticə",
  },
  {
    id: 1480,
    en: "prime",
    az: "əsas",
  },
  {
    id: 1481,
    en: "shadow",
    az: "kölgə",
  },
  {
    id: 1482,
    en: "struggle",
    az: "mübarizə",
  },
  {
    id: 1483,
    en: "conclude",
    az: "bağlamaq",
  },
  {
    id: 1484,
    en: "analyst",
    az: "analitik",
  },
  {
    id: 1485,
    en: "dance",
    az: "rəqs etmək",
  },
  {
    id: 1486,
    en: "regulation",
    az: "tənzimləmə",
  },
  {
    id: 1487,
    en: "being",
    az: "olmaq",
  },
  {
    id: 1488,
    en: "ring",
    az: "üzük",
  },
  {
    id: 1489,
    en: "largely",
    az: "geniş",
  },
  {
    id: 1490,
    en: "shift",
    az: "növbə",
  },
  {
    id: 1491,
    en: "revenue",
    az: "gəlir",
  },
  {
    id: 1492,
    en: "mark",
    az: "işarəsi",
  },
  {
    id: 1493,
    en: "locate",
    az: "tapmaq",
  },
  {
    id: 1494,
    en: "county",
    az: "mahal",
  },
  {
    id: 1495,
    en: "appearance",
    az: "görünüşü",
  },
  {
    id: 1496,
    en: "package",
    az: "paket",
  },
  {
    id: 1497,
    en: "difficulty",
    az: "çətinlik",
  },
  {
    id: 1498,
    en: "bridge",
    az: "körpü",
  },
  {
    id: 1499,
    en: "recommend",
    az: "tövsiyə",
  },
  {
    id: 1500,
    en: "obvious",
    az: "aydındır",
  },
  {
    id: 1501,
    en: "basically",
    az: "əsasən",
  },
  {
    id: 1502,
    en: "e-mail",
    az: "elektron poçt",
  },
  {
    id: 1503,
    en: "generate",
    az: "yaratmaq",
  },
  {
    id: 1504,
    en: "anymore",
    az: "artıq",
  },
  {
    id: 1505,
    en: "propose",
    az: "təklif etmək",
  },
  {
    id: 1506,
    en: "thinking",
    az: "düşüncə",
  },
  {
    id: 1507,
    en: "possibly",
    az: "ola bilsin",
  },
  {
    id: 1508,
    en: "trend",
    az: "trend",
  },
  {
    id: 1509,
    en: "visitor",
    az: "qonaq",
  },
  {
    id: 1510,
    en: "loan",
    az: "kredit",
  },
  {
    id: 1511,
    en: "currently",
    az: "hal hazırda",
  },
  {
    id: 1512,
    en: "comfortable",
    az: "rahat",
  },
  {
    id: 1513,
    en: "investor",
    az: "investor",
  },
  {
    id: 1514,
    en: "profit",
    az: "qazanc",
  },
  {
    id: 1515,
    en: "angry",
    az: "hirsli",
  },
  {
    id: 1516,
    en: "crew",
    az: "heyət",
  },
  {
    id: 1517,
    en: "accident",
    az: "qəza",
  },
  {
    id: 1518,
    en: "meal",
    az: "yemək",
  },
  {
    id: 1519,
    en: "hearing",
    az: "eşitmə",
  },
  {
    id: 1520,
    en: "traffic",
    az: "trafik",
  },
  {
    id: 1521,
    en: "muscle",
    az: "əzələ",
  },
  {
    id: 1522,
    en: "notion",
    az: "anlayışı",
  },
  {
    id: 1523,
    en: "capture",
    az: "tutmaq",
  },
  {
    id: 1524,
    en: "prefer",
    az: "üstünlük verirlər",
  },
  {
    id: 1525,
    en: "truly",
    az: "həqiqətən",
  },
  {
    id: 1526,
    en: "earth",
    az: "torpaq",
  },
  {
    id: 1527,
    en: "Japanese",
    az: "Yapon",
  },
  {
    id: 1528,
    en: "chest",
    az: "sinə",
  },
  {
    id: 1529,
    en: "thick",
    az: "qalın",
  },
  {
    id: 1530,
    en: "cash",
    az: "nağd",
  },
  {
    id: 1531,
    en: "museum",
    az: "muzey",
  },
  {
    id: 1532,
    en: "beauty",
    az: "gözəllik",
  },
  {
    id: 1533,
    en: "emergency",
    az: "təcili",
  },
  {
    id: 1534,
    en: "unique",
    az: "unikal",
  },
  {
    id: 1535,
    en: "internal",
    az: "daxili",
  },
  {
    id: 1536,
    en: "ethnic",
    az: "etnik",
  },
  {
    id: 1537,
    en: "link",
    az: "link",
  },
  {
    id: 1538,
    en: "stress",
    az: "stres",
  },
  {
    id: 1539,
    en: "content",
    az: "məzmunu",
  },
  {
    id: 1540,
    en: "select",
    az: "seçin",
  },
  {
    id: 1541,
    en: "root",
    az: "kök",
  },
  {
    id: 1542,
    en: "nose",
    az: "burun",
  },
  {
    id: 1543,
    en: "declare",
    az: "bildirmək",
  },
  {
    id: 1544,
    en: "appreciate",
    az: "qiymətləndirirəm",
  },
  {
    id: 1545,
    en: "actual",
    az: "faktiki",
  },
  {
    id: 1546,
    en: "bottle",
    az: "şüşə",
  },
  {
    id: 1547,
    en: "hardly",
    az: "hardasa",
  },
  {
    id: 1548,
    en: "setting",
    az: "qəbulu",
  },
  {
    id: 1549,
    en: "launch",
    az: "başlamaq",
  },
  {
    id: 1550,
    en: "file",
    az: "fayl",
  },
  {
    id: 1551,
    en: "sick",
    az: "xəstə",
  },
  {
    id: 1552,
    en: "outcome",
    az: "nəticə",
  },
  {
    id: 1553,
    en: "ad",
    az: "elan",
  },
  {
    id: 1554,
    en: "defend",
    az: "müdafiə etmək",
  },
  {
    id: 1555,
    en: "duty",
    az: "vəzifə",
  },
  {
    id: 1556,
    en: "sheet",
    az: "vərəq",
  },
  {
    id: 1557,
    en: "ought",
    az: "gərək",
  },
  {
    id: 1558,
    en: "ensure",
    az: "təmin etmək",
  },
  {
    id: 1559,
    en: "Catholic",
    az: "Katolik",
  },
  {
    id: 1560,
    en: "extremely",
    az: "son dərəcə",
  },
  {
    id: 1561,
    en: "extent",
    az: "dərəcədə",
  },
  {
    id: 1562,
    en: "component",
    az: "komponent",
  },
  {
    id: 1563,
    en: "mix",
    az: "qarışdırın",
  },
  {
    id: 1564,
    en: "long-term",
    az: "uzun müddətli",
  },
  {
    id: 1565,
    en: "slow",
    az: "yavaş",
  },
  {
    id: 1566,
    en: "contrast",
    az: "əksinə",
  },
  {
    id: 1567,
    en: "zone",
    az: "zona",
  },
  {
    id: 1568,
    en: "wake",
    az: "oyan",
  },
  {
    id: 1569,
    en: "airport",
    az: "hava limanı",
  },
  {
    id: 1570,
    en: "brown",
    az: "qəhvəyi",
  },
  {
    id: 1571,
    en: "shirt",
    az: "köynək",
  },
  {
    id: 1572,
    en: "pilot",
    az: "pilot",
  },
  {
    id: 1573,
    en: "warn",
    az: "xəbərdarlıq edin",
  },
  {
    id: 1574,
    en: "ultimately",
    az: "nəticədə",
  },
  {
    id: 1575,
    en: "cat",
    az: "pişik",
  },
  {
    id: 1576,
    en: "contribution",
    az: "töhfə",
  },
  {
    id: 1577,
    en: "capacity",
    az: "tutumu",
  },
  {
    id: 1578,
    en: "ourselves",
    az: "özümüz",
  },
  {
    id: 1579,
    en: "estate",
    az: "əmlak",
  },
  {
    id: 1580,
    en: "circumstance",
    az: "Hal",
  },
  {
    id: 1581,
    en: "snow",
    az: "qar",
  },
  {
    id: 1582,
    en: "English",
    az: "İngilis",
  },
  {
    id: 1583,
    en: "politician",
    az: "siyasətçi",
  },
  {
    id: 1584,
    en: "steal",
    az: "oğurlamaq",
  },
  {
    id: 1585,
    en: "pursue",
    az: "təqib etmək",
  },
  {
    id: 1586,
    en: "slip",
    az: "sürüşmək",
  },
  {
    id: 1587,
    en: "percentage",
    az: "faiz",
  },
  {
    id: 1588,
    en: "meat",
    az: "ət",
  },
  {
    id: 1589,
    en: "funny",
    az: "gülməli",
  },
  {
    id: 1590,
    en: "neither",
    az: "nə də",
  },
  {
    id: 1591,
    en: "soil",
    az: "torpaq",
  },
  {
    id: 1592,
    en: "surgery",
    az: "əməliyyat",
  },
  {
    id: 1593,
    en: "correct",
    az: "düzəldin",
  },
  {
    id: 1594,
    en: "Jewish",
    az: "Yəhudi",
  },
  {
    id: 1595,
    en: "blame",
    az: "günahkar",
  },
  {
    id: 1596,
    en: "estimate",
    az: "qiymətləndirmək",
  },
  {
    id: 1597,
    en: "due",
    az: "görə",
  },
  {
    id: 1598,
    en: "basketball",
    az: "Basketbol",
  },
  {
    id: 1599,
    en: "golf",
    az: "qolf",
  },
  {
    id: 1600,
    en: "investigate",
    az: "araşdırmaq",
  },
  {
    id: 1601,
    en: "crazy",
    az: "dəli",
  },
  {
    id: 1602,
    en: "significantly",
    az: "əhəmiyyətli dərəcədə",
  },
  {
    id: 1603,
    en: "chain",
    az: "zəncir",
  },
  {
    id: 1604,
    en: "branch",
    az: "filial",
  },
  {
    id: 1605,
    en: "combination",
    az: "birləşmə",
  },
  {
    id: 1606,
    en: "frequently",
    az: "tez-tez",
  },
  {
    id: 1607,
    en: "governor",
    az: "qubernator",
  },
  {
    id: 1608,
    en: "relief",
    az: "relyef",
  },
  {
    id: 1609,
    en: "user",
    az: "istifadəçi",
  },
  {
    id: 1610,
    en: "dad",
    az: "baba",
  },
  {
    id: 1611,
    en: "kick",
    az: "vurmaq",
  },
  {
    id: 1612,
    en: "manner",
    az: "qaydada",
  },
  {
    id: 1613,
    en: "ancient",
    az: "qədim",
  },
  {
    id: 1614,
    en: "silence",
    az: "sükut",
  },
  {
    id: 1615,
    en: "rating",
    az: "reytinq",
  },
  {
    id: 1616,
    en: "golden",
    az: "qızıl",
  },
  {
    id: 1617,
    en: "motion",
    az: "hərəkət",
  },
  {
    id: 1618,
    en: "German",
    az: "Alman",
  },
  {
    id: 1619,
    en: "gender",
    az: "cinsi",
  },
  {
    id: 1620,
    en: "solve",
    az: "həll etmək",
  },
  {
    id: 1621,
    en: "fee",
    az: "haqq",
  },
  {
    id: 1622,
    en: "landscape",
    az: "mənzərə",
  },
  {
    id: 1623,
    en: "used",
    az: "istifadə olunur",
  },
  {
    id: 1624,
    en: "bowl",
    az: "qab",
  },
  {
    id: 1625,
    en: "equal",
    az: "bərabərdir",
  },
  {
    id: 1626,
    en: "forth",
    az: "irəli",
  },
  {
    id: 1627,
    en: "frame",
    az: "çərçivə",
  },
  {
    id: 1628,
    en: "typical",
    az: "tipik",
  },
  {
    id: 1629,
    en: "except",
    az: "istisna olmaqla",
  },
  {
    id: 1630,
    en: "conservative",
    az: "mühafizəkar",
  },
  {
    id: 1631,
    en: "eliminate",
    az: "aradan qaldırmaq",
  },
  {
    id: 1632,
    en: "host",
    az: "ev sahibi",
  },
  {
    id: 1633,
    en: "hall",
    az: "zal",
  },
  {
    id: 1634,
    en: "trust",
    az: "güvənmək",
  },
  {
    id: 1635,
    en: "ocean",
    az: "okean",
  },
  {
    id: 1636,
    en: "row",
    az: "sıra",
  },
  {
    id: 1637,
    en: "producer",
    az: "istehsalçı",
  },
  {
    id: 1638,
    en: "afford",
    az: "imkan verir",
  },
  {
    id: 1639,
    en: "meanwhile",
    az: "bu vaxt",
  },
  {
    id: 1640,
    en: "regime",
    az: "rejim",
  },
  {
    id: 1641,
    en: "division",
    az: "bölmə",
  },
  {
    id: 1642,
    en: "confirm",
    az: "təsdiqləyin",
  },
  {
    id: 1643,
    en: "fix",
    az: "düzəltmək",
  },
  {
    id: 1644,
    en: "appeal",
    az: "müraciət",
  },
  {
    id: 1645,
    en: "mirror",
    az: "güzgü",
  },
  {
    id: 1646,
    en: "tooth",
    az: "diş",
  },
  {
    id: 1647,
    en: "smart",
    az: "ağıllı",
  },
  {
    id: 1648,
    en: "length",
    az: "uzunluğu",
  },
  {
    id: 1649,
    en: "entirely",
    az: "bütövlükdə",
  },
  {
    id: 1650,
    en: "rely",
    az: "etibar etmək",
  },
  {
    id: 1651,
    en: "topic",
    az: "mövzu",
  },
  {
    id: 1652,
    en: "complain",
    az: "şikayət",
  },
  {
    id: 1653,
    en: "variable",
    az: "dəyişən",
  },
  {
    id: 1654,
    en: "telephone",
    az: "telefon",
  },
  {
    id: 1655,
    en: "perception",
    az: "qavrayış",
  },
  {
    id: 1656,
    en: "attract",
    az: "cəlb etmək",
  },
  {
    id: 1657,
    en: "confidence",
    az: "etimad",
  },
  {
    id: 1658,
    en: "bedroom",
    az: "yataq otağı",
  },
  {
    id: 1659,
    en: "secret",
    az: "gizli",
  },
  {
    id: 1660,
    en: "debt",
    az: "borc",
  },
  {
    id: 1661,
    en: "rare",
    az: "nadir",
  },
  {
    id: 1662,
    en: "tank",
    az: "tank",
  },
  {
    id: 1663,
    en: "nurse",
    az: "tibb bacısı",
  },
  {
    id: 1664,
    en: "coverage",
    az: "əhatə dairəsi",
  },
  {
    id: 1665,
    en: "opposition",
    az: "müxalifət",
  },
  {
    id: 1666,
    en: "aside",
    az: "kənara",
  },
  {
    id: 1667,
    en: "anywhere",
    az: "hər yerdə",
  },
  {
    id: 1668,
    en: "bond",
    az: "bağ",
  },
  {
    id: 1669,
    en: "pleasure",
    az: "zovq",
  },
  {
    id: 1670,
    en: "master",
    az: "usta",
  },
  {
    id: 1671,
    en: "era",
    az: "dövrü",
  },
  {
    id: 1672,
    en: "requirement",
    az: "tələbi",
  },
  {
    id: 1673,
    en: "fun",
    az: "əyləncəli",
  },
  {
    id: 1674,
    en: "expectation",
    az: "gözləmə",
  },
  {
    id: 1675,
    en: "wing",
    az: "qanad",
  },
  {
    id: 1676,
    en: "separate",
    az: "ayrı",
  },
  {
    id: 1677,
    en: "somewhat",
    az: "bir qədər",
  },
  {
    id: 1678,
    en: "pour",
    az: "tökmək",
  },
  {
    id: 1679,
    en: "stir",
    az: "qarışdırmaq",
  },
  {
    id: 1680,
    en: "judgment",
    az: "hökm",
  },
  {
    id: 1681,
    en: "beer",
    az: "pivə",
  },
  {
    id: 1682,
    en: "reference",
    az: "arayış",
  },
  {
    id: 1683,
    en: "tear",
    az: "göz yaşı",
  },
  {
    id: 1684,
    en: "grant",
    az: "qrant",
  },
  {
    id: 1685,
    en: "seriously",
    az: "ciddi",
  },
  {
    id: 1686,
    en: "minister",
    az: "nazir",
  },
  {
    id: 1687,
    en: "totally",
    az: "tamamilə",
  },
  {
    id: 1688,
    en: "hero",
    az: "qəhrəman",
  },
  {
    id: 1689,
    en: "industrial",
    az: "sənaye",
  },
  {
    id: 1690,
    en: "cloud",
    az: "bulud",
  },
  {
    id: 1691,
    en: "stretch",
    az: "uzanmaq",
  },
  {
    id: 1692,
    en: "winner",
    az: "qalib",
  },
  {
    id: 1693,
    en: "volume",
    az: "həcmi",
  },
  {
    id: 1694,
    en: "seed",
    az: "toxum",
  },
  {
    id: 1695,
    en: "surprised",
    az: "təəccübləndi",
  },
  {
    id: 1696,
    en: "fashion",
    az: "moda",
  },
  {
    id: 1697,
    en: "pepper",
    az: "istiot",
  },
  {
    id: 1698,
    en: "busy",
    az: "məşğul",
  },
  {
    id: 1699,
    en: "intervention",
    az: "müdaxilə",
  },
  {
    id: 1700,
    en: "copy",
    az: "surəti",
  },
  {
    id: 1701,
    en: "tip",
    az: "ucu",
  },
  {
    id: 1702,
    en: "cheap",
    az: "ucuz",
  },
  {
    id: 1703,
    en: "aim",
    az: "məqsədi",
  },
  {
    id: 1704,
    en: "cite",
    az: "sitat gətir",
  },
  {
    id: 1705,
    en: "welfare",
    az: "rifah",
  },
  {
    id: 1706,
    en: "vegetable",
    az: "tərəvəz",
  },
  {
    id: 1707,
    en: "gray",
    az: "Boz",
  },
  {
    id: 1708,
    en: "dish",
    az: "yeməyi",
  },
  {
    id: 1709,
    en: "beach",
    az: "çimərlik",
  },
  {
    id: 1710,
    en: "improvement",
    az: "təkmilləşdirilməsi",
  },
  {
    id: 1711,
    en: "everywhere",
    az: "hər yerdə",
  },
  {
    id: 1712,
    en: "opening",
    az: "açılış",
  },
  {
    id: 1713,
    en: "overall",
    az: "Ümumilikdə",
  },
  {
    id: 1714,
    en: "divide",
    az: "bölmək",
  },
  {
    id: 1715,
    en: "initial",
    az: "ilkin",
  },
  {
    id: 1716,
    en: "terrible",
    az: "dəhşətli",
  },
  {
    id: 1717,
    en: "oppose",
    az: "qarşı çıxmaq",
  },
  {
    id: 1718,
    en: "contemporary",
    az: "çağdaş",
  },
  {
    id: 1719,
    en: "route",
    az: "marşrut",
  },
  {
    id: 1720,
    en: "multiple",
    az: "çoxsaylı",
  },
  {
    id: 1721,
    en: "essential",
    az: "vacibdir",
  },
  {
    id: 1722,
    en: "league",
    az: "liqası",
  },
  {
    id: 1723,
    en: "criminal",
    az: "cinayətkar",
  },
  {
    id: 1724,
    en: "careful",
    az: "ehtiyatlı",
  },
  {
    id: 1725,
    en: "core",
    az: "əsas",
  },
  {
    id: 1726,
    en: "upper",
    az: "yuxarı",
  },
  {
    id: 1727,
    en: "rush",
    az: "tələsmək",
  },
  {
    id: 1728,
    en: "necessarily",
    az: "mütləq",
  },
  {
    id: 1729,
    en: "specifically",
    az: "xüsusi olaraq",
  },
  {
    id: 1730,
    en: "tired",
    az: "yorğun",
  },
  {
    id: 1731,
    en: "employ",
    az: "işə götürmək",
  },
  {
    id: 1732,
    en: "holiday",
    az: "tətil",
  },
  {
    id: 1733,
    en: "vast",
    az: "geniş",
  },
  {
    id: 1734,
    en: "resolution",
    az: "görüntü imkanı",
  },
  {
    id: 1735,
    en: "household",
    az: "məişət",
  },
  {
    id: 1736,
    en: "fewer",
    az: "daha az",
  },
  {
    id: 1737,
    en: "abortion",
    az: "abort",
  },
  {
    id: 1738,
    en: "apart",
    az: "ayrı",
  },
  {
    id: 1739,
    en: "witness",
    az: "şahid",
  },
  {
    id: 1740,
    en: "match",
    az: "uyğunluq",
  },
  {
    id: 1741,
    en: "barely",
    az: "çətinliklə",
  },
  {
    id: 1742,
    en: "sector",
    az: "sektor",
  },
  {
    id: 1743,
    en: "representative",
    az: "nümayəndəsi",
  },
  {
    id: 1744,
    en: "beneath",
    az: "altındadır",
  },
  {
    id: 1745,
    en: "beside",
    az: "yanında",
  },
  {
    id: 1746,
    en: "incident",
    az: "Hadisə",
  },
  {
    id: 1747,
    en: "limited",
    az: "məhduddur",
  },
  {
    id: 1748,
    en: "proud",
    az: "qürurlu",
  },
  {
    id: 1749,
    en: "flow",
    az: "axın",
  },
  {
    id: 1750,
    en: "faculty",
    az: "fakültə",
  },
  {
    id: 1751,
    en: "increased",
    az: "artdı",
  },
  {
    id: 1752,
    en: "waste",
    az: "israf",
  },
  {
    id: 1753,
    en: "merely",
    az: "sadəcə",
  },
  {
    id: 1754,
    en: "mass",
    az: "kütlə",
  },
  {
    id: 1755,
    en: "emphasize",
    az: "vurğulamaq",
  },
  {
    id: 1756,
    en: "experiment",
    az: "təcrübə",
  },
  {
    id: 1757,
    en: "definitely",
    az: "mütləq",
  },
  {
    id: 1758,
    en: "bomb",
    az: "bomba",
  },
  {
    id: 1759,
    en: "enormous",
    az: "böyük",
  },
  {
    id: 1760,
    en: "tone",
    az: "ton",
  },
  {
    id: 1761,
    en: "liberal",
    az: "liberal",
  },
  {
    id: 1762,
    en: "massive",
    az: "kütləvi",
  },
  {
    id: 1763,
    en: "engineer",
    az: "mühəndis",
  },
  {
    id: 1764,
    en: "wheel",
    az: "təkər",
  },
  {
    id: 1765,
    en: "decline",
    az: "azalma",
  },
  {
    id: 1766,
    en: "invest",
    az: "investisiya qoymaq",
  },
  {
    id: 1767,
    en: "cable",
    az: "kabel",
  },
  {
    id: 1768,
    en: "towards",
    az: "tərəfə",
  },
  {
    id: 1769,
    en: "expose",
    az: "ifşa etmək",
  },
  {
    id: 1770,
    en: "rural",
    az: "kənd",
  },
  {
    id: 1771,
    en: "AIDS",
    az: "QİÇS",
  },
  {
    id: 1772,
    en: "Jew",
    az: "Yəhudi",
  },
  {
    id: 1773,
    en: "narrow",
    az: "dar",
  },
  {
    id: 1774,
    en: "cream",
    az: "qaymaq",
  },
  {
    id: 1775,
    en: "secretary",
    az: "katib",
  },
  {
    id: 1776,
    en: "gate",
    az: "qapısı",
  },
  {
    id: 1777,
    en: "solid",
    az: "bərk",
  },
  {
    id: 1778,
    en: "hill",
    az: "təpə",
  },
  {
    id: 1779,
    en: "typically",
    az: "adətən",
  },
  {
    id: 1780,
    en: "noise",
    az: "səs-küy",
  },
  {
    id: 1781,
    en: "grass",
    az: "ot",
  },
  {
    id: 1782,
    en: "unfortunately",
    az: "təəssüf ki",
  },
  {
    id: 1783,
    en: "hat",
    az: "şapka",
  },
  {
    id: 1784,
    en: "legislation",
    az: "qanunvericilik",
  },
  {
    id: 1785,
    en: "succeed",
    az: "bacar",
  },
  {
    id: 1786,
    en: "celebrate",
    az: "qeyd etmək",
  },
  {
    id: 1787,
    en: "achievement",
    az: "nail olmaq",
  },
  {
    id: 1788,
    en: "fishing",
    az: "balıqçılıq",
  },
  {
    id: 1789,
    en: "accuse",
    az: "ittiham etmək",
  },
  {
    id: 1790,
    en: "useful",
    az: "faydalıdır",
  },
  {
    id: 1791,
    en: "reject",
    az: "rədd et",
  },
  {
    id: 1792,
    en: "taste",
    az: "dadına baxın",
  },
  {
    id: 1793,
    en: "characteristic",
    az: "xarakterikdir",
  },
  {
    id: 1794,
    en: "milk",
    az: "süd",
  },
  {
    id: 1795,
    en: "escape",
    az: "qaçmaq",
  },
  {
    id: 1796,
    en: "cast",
    az: "tökmə",
  },
  {
    id: 1797,
    en: "sentence",
    az: "cümlə",
  },
  {
    id: 1798,
    en: "unusual",
    az: "qeyri-adi",
  },
  {
    id: 1799,
    en: "closely",
    az: "yaxından",
  },
  {
    id: 1800,
    en: "convince",
    az: "inandırmaq",
  },
  {
    id: 1801,
    en: "height",
    az: "hündürlük",
  },
  {
    id: 1802,
    en: "physician",
    az: "həkim",
  },
  {
    id: 1803,
    en: "assess",
    az: "qiymətləndirmək",
  },
  {
    id: 1804,
    en: "plenty",
    az: "bol",
  },
  {
    id: 1805,
    en: "virtually",
    az: "faktiki olaraq",
  },
  {
    id: 1806,
    en: "addition",
    az: "əlavə",
  },
  {
    id: 1807,
    en: "sharp",
    az: "kəskin",
  },
  {
    id: 1808,
    en: "creative",
    az: "yaradıcı",
  },
  {
    id: 1809,
    en: "lower",
    az: "aşağı",
  },
  {
    id: 1810,
    en: "approve",
    az: "təsdiq etmək",
  },
  {
    id: 1811,
    en: "explanation",
    az: "izahat",
  },
  {
    id: 1812,
    en: "gay",
    az: "gey",
  },
  {
    id: 1813,
    en: "campus",
    az: "şəhərcik",
  },
  {
    id: 1814,
    en: "proper",
    az: "uyğun",
  },
  {
    id: 1815,
    en: "guilty",
    az: "günahkar",
  },
  {
    id: 1816,
    en: "acquire",
    az: "əldə etmek",
  },
  {
    id: 1817,
    en: "compete",
    az: "yarışmaq",
  },
  {
    id: 1818,
    en: "technical",
    az: "texniki",
  },
  {
    id: 1819,
    en: "plus",
    az: "üstəgəl",
  },
  {
    id: 1820,
    en: "immigrant",
    az: "immiqrant",
  },
  {
    id: 1821,
    en: "weak",
    az: "zəifdir",
  },
  {
    id: 1822,
    en: "illegal",
    az: "qanunsuz",
  },
  {
    id: 1823,
    en: "hi",
    az: "salam",
  },
  {
    id: 1824,
    en: "alternative",
    az: "alternativ",
  },
  {
    id: 1825,
    en: "interaction",
    az: "qarşılıqlı əlaqə",
  },
  {
    id: 1826,
    en: "column",
    az: "sütun",
  },
  {
    id: 1827,
    en: "personality",
    az: "şəxsiyyət",
  },
  {
    id: 1828,
    en: "signal",
    az: "siqnal",
  },
  {
    id: 1829,
    en: "curriculum",
    az: "tədris planı",
  },
  {
    id: 1830,
    en: "honor",
    az: "şərəf",
  },
  {
    id: 1831,
    en: "passenger",
    az: "sərnişin",
  },
  {
    id: 1832,
    en: "assistance",
    az: "yardım",
  },
  {
    id: 1833,
    en: "forever",
    az: "əbədi",
  },
  {
    id: 1834,
    en: "regard",
    az: "nəzərə",
  },
  {
    id: 1835,
    en: "Israeli",
    az: "İsrail",
  },
  {
    id: 1836,
    en: "association",
    az: "dərnək",
  },
  {
    id: 1837,
    en: "twenty",
    az: "iyirmi",
  },
  {
    id: 1838,
    en: "knock",
    az: "döymək",
  },
  {
    id: 1839,
    en: "wrap",
    az: "bükmək",
  },
  {
    id: 1840,
    en: "lab",
    az: "laboratoriya",
  },
  {
    id: 1841,
    en: "display",
    az: "ekranı",
  },
  {
    id: 1842,
    en: "criticism",
    az: "tənqid",
  },
  {
    id: 1843,
    en: "asset",
    az: "aktiv",
  },
  {
    id: 1844,
    en: "depression",
    az: "depressiya",
  },
  {
    id: 1845,
    en: "spiritual",
    az: "mənəvi",
  },
  {
    id: 1846,
    en: "musical",
    az: "musiqili",
  },
  {
    id: 1847,
    en: "journalist",
    az: "jurnalist",
  },
  {
    id: 1848,
    en: "prayer",
    az: "dua",
  },
  {
    id: 1849,
    en: "suspect",
    az: "şübhəli",
  },
  {
    id: 1850,
    en: "scholar",
    az: "alim",
  },
  {
    id: 1851,
    en: "warning",
    az: "xəbərdarlıq",
  },
  {
    id: 1852,
    en: "climate",
    az: "iqlim",
  },
  {
    id: 1853,
    en: "cheese",
    az: "Pendir",
  },
  {
    id: 1854,
    en: "observation",
    az: "müşahidə",
  },
  {
    id: 1855,
    en: "childhood",
    az: "uşaqlıq",
  },
  {
    id: 1856,
    en: "payment",
    az: "ödəniş",
  },
  {
    id: 1857,
    en: "sir",
    az: "ser",
  },
  {
    id: 1858,
    en: "permit",
    az: "icazə",
  },
  {
    id: 1859,
    en: "cigarette",
    az: "siqaret",
  },
  {
    id: 1860,
    en: "definition",
    az: "tərif",
  },
  {
    id: 1861,
    en: "priority",
    az: "prioritet",
  },
  {
    id: 1862,
    en: "bread",
    az: "çörək",
  },
  {
    id: 1863,
    en: "creation",
    az: "yaradılması",
  },
  {
    id: 1864,
    en: "graduate",
    az: "məzun",
  },
  {
    id: 1865,
    en: "request",
    az: "istək",
  },
  {
    id: 1866,
    en: "emotion",
    az: "duyğu",
  },
  {
    id: 1867,
    en: "scream",
    az: "fəryad",
  },
  {
    id: 1868,
    en: "dramatic",
    az: "dramatik",
  },
  {
    id: 1869,
    en: "universe",
    az: "kainat",
  },
  {
    id: 1870,
    en: "gap",
    az: "boşluq",
  },
  {
    id: 1871,
    en: "excellent",
    az: "əla",
  },
  {
    id: 1872,
    en: "deeply",
    az: "dərindən",
  },
  {
    id: 1873,
    en: "prosecutor",
    az: "ittihamçı",
  },
  {
    id: 1874,
    en: "lucky",
    az: "şanslı",
  },
  {
    id: 1875,
    en: "drag",
    az: "sürükləmək",
  },
  {
    id: 1876,
    en: "airline",
    az: "hava yolu",
  },
  {
    id: 1877,
    en: "library",
    az: "kitabxana",
  },
  {
    id: 1878,
    en: "agenda",
    az: "gündəliyi",
  },
  {
    id: 1879,
    en: "recover",
    az: "sağalmaq",
  },
  {
    id: 1880,
    en: "factory",
    az: "zavod",
  },
  {
    id: 1881,
    en: "selection",
    az: "seçim",
  },
  {
    id: 1882,
    en: "primarily",
    az: "ilk növbədə",
  },
  {
    id: 1883,
    en: "roof",
    az: "dam",
  },
  {
    id: 1884,
    en: "unable",
    az: "edə bilmir",
  },
  {
    id: 1885,
    en: "expense",
    az: "xərc",
  },
  {
    id: 1886,
    en: "initiative",
    az: "təşəbbüs",
  },
  {
    id: 1887,
    en: "diet",
    az: "pəhriz",
  },
  {
    id: 1888,
    en: "arrest",
    az: "həbs",
  },
  {
    id: 1889,
    en: "funding",
    az: "maliyyələşdirmə",
  },
  {
    id: 1890,
    en: "therapy",
    az: "terapiya",
  },
  {
    id: 1891,
    en: "wash",
    az: "yumaq",
  },
  {
    id: 1892,
    en: "schedule",
    az: "cədvəli",
  },
  {
    id: 1893,
    en: "sad",
    az: "kədərli",
  },
  {
    id: 1894,
    en: "brief",
    az: "qısa",
  },
  {
    id: 1895,
    en: "housing",
    az: "mənzil",
  },
  {
    id: 1896,
    en: "post",
    az: "post",
  },
  {
    id: 1897,
    en: "purchase",
    az: "Alış",
  },
  {
    id: 1898,
    en: "existing",
    az: "mövcuddur",
  },
  {
    id: 1899,
    en: "steel",
    az: "polad",
  },
  {
    id: 1900,
    en: "regarding",
    az: "ilə bağlı",
  },
  {
    id: 1901,
    en: "shout",
    az: "qışqırmaq",
  },
  {
    id: 1902,
    en: "visual",
    az: "əyani",
  },
  {
    id: 1903,
    en: "fairly",
    az: "ədalətlə",
  },
  {
    id: 1904,
    en: "chip",
    az: "çip",
  },
  {
    id: 1905,
    en: "violent",
    az: "zorakı",
  },
  {
    id: 1906,
    en: "silent",
    az: "səssiz",
  },
  {
    id: 1907,
    en: "suppose",
    az: "güman",
  },
  {
    id: 1908,
    en: "self",
    az: "özünü",
  },
  {
    id: 1909,
    en: "bike",
    az: "velosiped",
  },
  {
    id: 1910,
    en: "tea",
    az: "çay",
  },
  {
    id: 1911,
    en: "perceive",
    az: "qavramaq",
  },
  {
    id: 1912,
    en: "comparison",
    az: "müqayisə",
  },
  {
    id: 1913,
    en: "settlement",
    az: "qəsəbə",
  },
  {
    id: 1914,
    en: "layer",
    az: "qat",
  },
  {
    id: 1915,
    en: "planning",
    az: "planlaşdırma",
  },
  {
    id: 1916,
    en: "description",
    az: "təsviri",
  },
  {
    id: 1917,
    en: "slide",
    az: "sürüşdürmək",
  },
  {
    id: 1918,
    en: "widely",
    az: "geniş",
  },
  {
    id: 1919,
    en: "wedding",
    az: "toy",
  },
  {
    id: 1920,
    en: "inform",
    az: "məlumat verin",
  },
  {
    id: 1921,
    en: "portion",
    az: "hissə",
  },
  {
    id: 1922,
    en: "territory",
    az: "ərazi",
  },
  {
    id: 1923,
    en: "immediate",
    az: "dərhal",
  },
  {
    id: 1924,
    en: "opponent",
    az: "rəqib",
  },
  {
    id: 1925,
    en: "abandon",
    az: "tərk etmək",
  },
  {
    id: 1926,
    en: "lake",
    az: "göl",
  },
  {
    id: 1927,
    en: "transform",
    az: "çevirmək",
  },
  {
    id: 1928,
    en: "tension",
    az: "gərginlik",
  },
  {
    id: 1929,
    en: "leading",
    az: "aparıcı",
  },
  {
    id: 1930,
    en: "bother",
    az: "narahat olmaq",
  },
  {
    id: 1931,
    en: "consist",
    az: "ibarətdir",
  },
  {
    id: 1932,
    en: "alcohol",
    az: "alkoqol",
  },
  {
    id: 1933,
    en: "enable",
    az: "imkan verir",
  },
  {
    id: 1934,
    en: "bend",
    az: "əyilmək",
  },
  {
    id: 1935,
    en: "saving",
    az: "qənaət",
  },
  {
    id: 1936,
    en: "desert",
    az: "səhra",
  },
  {
    id: 1937,
    en: "shall",
    az: "edəcək",
  },
  {
    id: 1938,
    en: "error",
    az: "səhv",
  },
  {
    id: 1939,
    en: "cop",
    az: "polis",
  },
  {
    id: 1940,
    en: "Arab",
    az: "Ərəb",
  },
  {
    id: 1941,
    en: "double",
    az: "ikiqat",
  },
  {
    id: 1942,
    en: "sand",
    az: "qum",
  },
  {
    id: 1943,
    en: "Spanish",
    az: "İspan",
  },
  {
    id: 1944,
    en: "print",
    az: "çap",
  },
  {
    id: 1945,
    en: "preserve",
    az: "qorumaq",
  },
  {
    id: 1946,
    en: "passage",
    az: "keçid",
  },
  {
    id: 1947,
    en: "formal",
    az: "formal",
  },
  {
    id: 1948,
    en: "transition",
    az: "keçid",
  },
  {
    id: 1949,
    en: "existence",
    az: "varlıq",
  },
  {
    id: 1950,
    en: "album",
    az: "albom",
  },
  {
    id: 1951,
    en: "participation",
    az: "iştirak",
  },
  {
    id: 1952,
    en: "arrange",
    az: "təşkil etmək",
  },
  {
    id: 1953,
    en: "atmosphere",
    az: "atmosfer",
  },
  {
    id: 1954,
    en: "joint",
    az: "birgə",
  },
  {
    id: 1955,
    en: "reply",
    az: "cavab verin",
  },
  {
    id: 1956,
    en: "cycle",
    az: "dövrü",
  },
  {
    id: 1957,
    en: "opposite",
    az: "əksinə",
  },
  {
    id: 1958,
    en: "lock",
    az: "bağlamaq",
  },
  {
    id: 1959,
    en: "deserve",
    az: "layiq olmaq",
  },
  {
    id: 1960,
    en: "consistent",
    az: "ardıcıl",
  },
  {
    id: 1961,
    en: "resistance",
    az: "müqavimət",
  },
  {
    id: 1962,
    en: "discovery",
    az: "kəşf",
  },
  {
    id: 1963,
    en: "exposure",
    az: "ifşa",
  },
  {
    id: 1964,
    en: "pose",
    az: "duruş",
  },
  {
    id: 1965,
    en: "stream",
    az: "axın",
  },
  {
    id: 1966,
    en: "sale",
    az: "satış",
  },
  {
    id: 1967,
    en: "pot",
    az: "qazan",
  },
  {
    id: 1968,
    en: "grand",
    az: "böyük",
  },
  {
    id: 1969,
    en: "mine",
    az: "mina",
  },
  {
    id: 1970,
    en: "hello",
    az: "Salam",
  },
  {
    id: 1971,
    en: "coalition",
    az: "koalisiya",
  },
  {
    id: 1972,
    en: "tale",
    az: "nağıl",
  },
  {
    id: 1973,
    en: "knife",
    az: "bıçaq",
  },
  {
    id: 1974,
    en: "resolve",
    az: "həll etmək",
  },
  {
    id: 1975,
    en: "racial",
    az: "irqi",
  },
  {
    id: 1976,
    en: "phase",
    az: "faza",
  },
  {
    id: 1977,
    en: "joke",
    az: "zarafat",
  },
  {
    id: 1978,
    en: "coat",
    az: "palto",
  },
  {
    id: 1979,
    en: "Mexican",
    az: "Meksikalı",
  },
  {
    id: 1980,
    en: "symptom",
    az: "simptom",
  },
  {
    id: 1981,
    en: "manufacturer",
    az: "istehsalçı",
  },
  {
    id: 1982,
    en: "philosophy",
    az: "fəlsəfə",
  },
  {
    id: 1983,
    en: "potato",
    az: "kartof",
  },
  {
    id: 1984,
    en: "foundation",
    az: "təməli",
  },
  {
    id: 1985,
    en: "quote",
    az: "sitat",
  },
  {
    id: 1986,
    en: "online",
    az: "onlayn",
  },
  {
    id: 1987,
    en: "negotiation",
    az: "danışıqlar",
  },
  {
    id: 1988,
    en: "urge",
    az: "çağırmaq",
  },
  {
    id: 1989,
    en: "occasion",
    az: "münasibətilə",
  },
  {
    id: 1990,
    en: "dust",
    az: "toz",
  },
  {
    id: 1991,
    en: "breathe",
    az: "nəfəs al",
  },
  {
    id: 1992,
    en: "elect",
    az: "seçir",
  },
  {
    id: 1993,
    en: "investigator",
    az: "müstəntiq",
  },
  {
    id: 1994,
    en: "jacket",
    az: "gödəkçə",
  },
  {
    id: 1995,
    en: "glad",
    az: "sevinir",
  },
  {
    id: 1996,
    en: "ordinary",
    az: "adi siravi",
  },
  {
    id: 1997,
    en: "reduction",
    az: "azalma",
  },
  {
    id: 1998,
    en: "rarely",
    az: "nadir hallarda",
  },
  {
    id: 1999,
    en: "pack",
    az: "qablaşdırma",
  },
  {
    id: 2000,
    en: "suicide",
    az: "intihar",
  },
  {
    id: 2001,
    en: "numerous",
    az: "çoxsaylı",
  },
  {
    id: 2002,
    en: "substance",
    az: "maddə",
  },
  {
    id: 2003,
    en: "discipline",
    az: "intizam",
  },
  {
    id: 2004,
    en: "elsewhere",
    az: "başqa yerdə",
  },
  {
    id: 2005,
    en: "iron",
    az: "dəmir",
  },
  {
    id: 2006,
    en: "practical",
    az: "praktik",
  },
  {
    id: 2007,
    en: "moreover",
    az: "üstəlik",
  },
  {
    id: 2008,
    en: "passion",
    az: "ehtiras",
  },
  {
    id: 2009,
    en: "volunteer",
    az: "könüllü",
  },
  {
    id: 2010,
    en: "implement",
    az: "həyata keçirmək",
  },
  {
    id: 2011,
    en: "essentially",
    az: "mahiyyətcə",
  },
  {
    id: 2012,
    en: "gene",
    az: "gen",
  },
  {
    id: 2013,
    en: "enforcement",
    az: "mühafizə",
  },
  {
    id: 2014,
    en: "sauce",
    az: "sous",
  },
  {
    id: 2015,
    en: "independence",
    az: "müstəqillik",
  },
  {
    id: 2016,
    en: "marketing",
    az: "marketinq",
  },
  {
    id: 2017,
    en: "priest",
    az: "keşiş",
  },
  {
    id: 2018,
    en: "amazing",
    az: "heyrətamiz",
  },
  {
    id: 2019,
    en: "intense",
    az: "sıx",
  },
  {
    id: 2020,
    en: "advance",
    az: "əvvəlcədən",
  },
  {
    id: 2021,
    en: "employer",
    az: "işəgötürən",
  },
  {
    id: 2022,
    en: "shock",
    az: "şok",
  },
  {
    id: 2023,
    en: "inspire",
    az: "ilham verin",
  },
  {
    id: 2024,
    en: "adjust",
    az: "tənzimləmək",
  },
  {
    id: 2025,
    en: "retire",
    az: "təqaüdə çıxmaq",
  },
  {
    id: 2026,
    en: "visible",
    az: "görünən",
  },
  {
    id: 2027,
    en: "kiss",
    az: "öpmək",
  },
  {
    id: 2028,
    en: "illness",
    az: "xəstəlik",
  },
  {
    id: 2029,
    en: "cap",
    az: "qapaq",
  },
  {
    id: 2030,
    en: "habit",
    az: "vərdiş",
  },
  {
    id: 2031,
    en: "competitive",
    az: "rəqabətli",
  },
  {
    id: 2032,
    en: "juice",
    az: "suyu",
  },
  {
    id: 2033,
    en: "congressional",
    az: "qurultay",
  },
  {
    id: 2034,
    en: "involvement",
    az: "iştirak",
  },
  {
    id: 2035,
    en: "dominate",
    az: "üstünlük təşkil etmək",
  },
  {
    id: 2036,
    en: "previously",
    az: "əvvəllər",
  },
  {
    id: 2037,
    en: "whenever",
    az: "hər zaman",
  },
  {
    id: 2038,
    en: "transfer",
    az: "köçürmə",
  },
  {
    id: 2039,
    en: "analyze",
    az: "təhlil etmək",
  },
  {
    id: 2040,
    en: "attach",
    az: "əlavə edin",
  },
  {
    id: 2041,
    en: "disaster",
    az: "fəlakət",
  },
  {
    id: 2042,
    en: "parking",
    az: "parkinq",
  },
  {
    id: 2043,
    en: "prospect",
    az: "perspektiv",
  },
  {
    id: 2044,
    en: "boss",
    az: "patron",
  },
  {
    id: 2045,
    en: "complaint",
    az: "şikayət",
  },
  {
    id: 2046,
    en: "championship",
    az: "çempionat",
  },
  {
    id: 2047,
    en: "fundamental",
    az: "Əsas",
  },
  {
    id: 2048,
    en: "severe",
    az: "şiddətli",
  },
  {
    id: 2049,
    en: "enhance",
    az: "artırmaq",
  },
  {
    id: 2050,
    en: "mystery",
    az: "sirr",
  },
  {
    id: 2051,
    en: "impose",
    az: "tətbiq",
  },
  {
    id: 2052,
    en: "poverty",
    az: "yoxsulluq",
  },
  {
    id: 2053,
    en: "entry",
    az: "giriş",
  },
  {
    id: 2054,
    en: "spending",
    az: "xərcləmə",
  },
  {
    id: 2055,
    en: "king",
    az: "padşah",
  },
  {
    id: 2056,
    en: "evaluate",
    az: "qiymətləndirmək",
  },
  {
    id: 2057,
    en: "symbol",
    az: "simvolu",
  },
  {
    id: 2058,
    en: "maker",
    az: "istehsalçı",
  },
  {
    id: 2059,
    en: "mood",
    az: "əhval",
  },
  {
    id: 2060,
    en: "accomplish",
    az: "yerinə yetirmək",
  },
  {
    id: 2061,
    en: "emphasis",
    az: "vurğu",
  },
  {
    id: 2062,
    en: "illustrate",
    az: "təsvir etmək",
  },
  {
    id: 2063,
    en: "boot",
    az: "çəkmə",
  },
  {
    id: 2064,
    en: "monitor",
    az: "ekran",
  },
  {
    id: 2065,
    en: "Asian",
    az: "Asiyalı",
  },
  {
    id: 2066,
    en: "entertainment",
    az: "əyləncə",
  },
  {
    id: 2067,
    en: "bean",
    az: "lobya",
  },
  {
    id: 2068,
    en: "evaluation",
    az: "qiymətləndirmə",
  },
  {
    id: 2069,
    en: "creature",
    az: "məxluq",
  },
  {
    id: 2070,
    en: "commander",
    az: "komandir",
  },
  {
    id: 2071,
    en: "digital",
    az: "rəqəmsal",
  },
  {
    id: 2072,
    en: "arrangement",
    az: "tənzimləmə",
  },
  {
    id: 2073,
    en: "concentrate",
    az: "konsentrat",
  },
  {
    id: 2074,
    en: "usual",
    az: "adi",
  },
  {
    id: 2075,
    en: "anger",
    az: "qəzəb",
  },
  {
    id: 2076,
    en: "psychological",
    az: "psixoloji",
  },
  {
    id: 2077,
    en: "heavily",
    az: "ağır",
  },
  {
    id: 2078,
    en: "peak",
    az: "zirvəsi",
  },
  {
    id: 2079,
    en: "approximately",
    az: "təxminən",
  },
  {
    id: 2080,
    en: "increasing",
    az: "artan",
  },
  {
    id: 2081,
    en: "disorder",
    az: "pozğunluq",
  },
  {
    id: 2082,
    en: "missile",
    az: "mərmi",
  },
  {
    id: 2083,
    en: "equally",
    az: "bərabər dərəcədə",
  },
  {
    id: 2084,
    en: "vary",
    az: "dəyişmək",
  },
  {
    id: 2085,
    en: "wire",
    az: "tel",
  },
  {
    id: 2086,
    en: "round",
    az: "yuvarlaq",
  },
  {
    id: 2087,
    en: "distribution",
    az: "paylanması",
  },
  {
    id: 2088,
    en: "transportation",
    az: "nəqliyyat",
  },
  {
    id: 2089,
    en: "holy",
    az: "müqəddəs",
  },
  {
    id: 2090,
    en: "twin",
    az: "əkiz",
  },
  {
    id: 2091,
    en: "command",
    az: "əmr",
  },
  {
    id: 2092,
    en: "commission",
    az: "komissiya",
  },
  {
    id: 2093,
    en: "interpretation",
    az: "təfsir",
  },
  {
    id: 2094,
    en: "breakfast",
    az: "səhər yeməyi",
  },
  {
    id: 2095,
    en: "strongly",
    az: "güclü",
  },
  {
    id: 2096,
    en: "engineering",
    az: "mühəndislik",
  },
  {
    id: 2097,
    en: "luck",
    az: "şans",
  },
  {
    id: 2098,
    en: "so-called",
    az: "sözdə",
  },
  {
    id: 2099,
    en: "constant",
    az: "Sabit",
  },
  {
    id: 2100,
    en: "clinic",
    az: "Klinika",
  },
  {
    id: 2101,
    en: "veteran",
    az: "veteran",
  },
  {
    id: 2102,
    en: "smell",
    az: "iy",
  },
  {
    id: 2103,
    en: "tablespoon",
    az: "kaşığı",
  },
  {
    id: 2104,
    en: "capable",
    az: "qadirdir",
  },
  {
    id: 2105,
    en: "nervous",
    az: "əsəbi",
  },
  {
    id: 2106,
    en: "tourist",
    az: "turist",
  },
  {
    id: 2107,
    en: "toss",
    az: "silkələmək",
  },
  {
    id: 2108,
    en: "crucial",
    az: "vacibdir",
  },
  {
    id: 2109,
    en: "bury",
    az: "basdırmaq",
  },
  {
    id: 2110,
    en: "pray",
    az: "dua etmək",
  },
  {
    id: 2111,
    en: "tomato",
    az: "pomidor",
  },
  {
    id: 2112,
    en: "exception",
    az: "istisna",
  },
  {
    id: 2113,
    en: "butter",
    az: "kərə yağı",
  },
  {
    id: 2114,
    en: "deficit",
    az: "kəsiri",
  },
  {
    id: 2115,
    en: "bathroom",
    az: "vanna otağı",
  },
  {
    id: 2116,
    en: "objective",
    az: "obyektiv",
  },
  {
    id: 2117,
    en: "electronic",
    az: "elektron",
  },
  {
    id: 2118,
    en: "ally",
    az: "müttəfiq",
  },
  {
    id: 2119,
    en: "journey",
    az: "səyahət",
  },
  {
    id: 2120,
    en: "reputation",
    az: "nüfuz",
  },
  {
    id: 2121,
    en: "mixture",
    az: "qarışıq",
  },
  {
    id: 2122,
    en: "surely",
    az: "şübhəsiz",
  },
  {
    id: 2123,
    en: "tower",
    az: "qüllə",
  },
  {
    id: 2124,
    en: "smoke",
    az: "tüstü",
  },
  {
    id: 2125,
    en: "confront",
    az: "qarşıdurma",
  },
  {
    id: 2126,
    en: "pure",
    az: "təmiz",
  },
  {
    id: 2127,
    en: "glance",
    az: "nəzər",
  },
  {
    id: 2128,
    en: "dimension",
    az: "ölçü",
  },
  {
    id: 2129,
    en: "toy",
    az: "oyuncaq",
  },
  {
    id: 2130,
    en: "prisoner",
    az: "məhbus",
  },
  {
    id: 2131,
    en: "fellow",
    az: "yoldaş",
  },
  {
    id: 2132,
    en: "smooth",
    az: "hamar",
  },
  {
    id: 2133,
    en: "nearby",
    az: "yaxınlıqda",
  },
  {
    id: 2134,
    en: "peer",
    az: "həmyaşıd",
  },
  {
    id: 2135,
    en: "designer",
    az: "dizayner",
  },
  {
    id: 2136,
    en: "personnel",
    az: "kadrlar",
  },
  {
    id: 2137,
    en: "educator",
    az: "pedaqoq",
  },
  {
    id: 2138,
    en: "relative",
    az: "nisbi",
  },
  {
    id: 2139,
    en: "immigration",
    az: "immiqrasiya",
  },
  {
    id: 2140,
    en: "belt",
    az: "kəmər",
  },
  {
    id: 2141,
    en: "teaspoon",
    az: "çay qaşığı",
  },
  {
    id: 2142,
    en: "birthday",
    az: "Ad günü",
  },
  {
    id: 2143,
    en: "implication",
    az: "təsiri",
  },
  {
    id: 2144,
    en: "perfectly",
    az: "mükəmməl",
  },
  {
    id: 2145,
    en: "coast",
    az: "sahil",
  },
  {
    id: 2146,
    en: "supporter",
    az: "tərəfdarı",
  },
  {
    id: 2147,
    en: "accompany",
    az: "müşayiət et",
  },
  {
    id: 2148,
    en: "silver",
    az: "gümüş",
  },
  {
    id: 2149,
    en: "teenager",
    az: "yeniyetmə",
  },
  {
    id: 2150,
    en: "recognition",
    az: "tanınması",
  },
  {
    id: 2151,
    en: "retirement",
    az: "pensiya",
  },
  {
    id: 2152,
    en: "flag",
    az: "bayraq",
  },
  {
    id: 2153,
    en: "recovery",
    az: "bərpa",
  },
  {
    id: 2154,
    en: "whisper",
    az: "pıçıltı",
  },
  {
    id: 2155,
    en: "gentleman",
    az: "bəy",
  },
  {
    id: 2156,
    en: "corn",
    az: "qarğıdalı",
  },
  {
    id: 2157,
    en: "moon",
    az: "ay",
  },
  {
    id: 2158,
    en: "inner",
    az: "daxili",
  },
  {
    id: 2159,
    en: "junior",
    az: "cavan",
  },
  {
    id: 2160,
    en: "throat",
    az: "boğaz",
  },
  {
    id: 2161,
    en: "salary",
    az: "maaş",
  },
  {
    id: 2162,
    en: "swing",
    az: "yellənmək",
  },
  {
    id: 2163,
    en: "observer",
    az: "müşahidəçi",
  },
  {
    id: 2164,
    en: "publication",
    az: "nəşr",
  },
  {
    id: 2165,
    en: "crop",
    az: "məhsul",
  },
  {
    id: 2166,
    en: "dig",
    az: "qazmaq",
  },
  {
    id: 2167,
    en: "permanent",
    az: "daimi",
  },
  {
    id: 2168,
    en: "phenomenon",
    az: "fenomen",
  },
  {
    id: 2169,
    en: "anxiety",
    az: "narahatlıq",
  },
  {
    id: 2170,
    en: "unlike",
    az: "fərqli olaraq",
  },
  {
    id: 2171,
    en: "wet",
    az: "nəm",
  },
  {
    id: 2172,
    en: "literally",
    az: "eynən",
  },
  {
    id: 2173,
    en: "resist",
    az: "müqavimət göstərin",
  },
  {
    id: 2174,
    en: "convention",
    az: "konvensiya",
  },
  {
    id: 2175,
    en: "embrace",
    az: "qucaqlamaq",
  },
  {
    id: 2176,
    en: "assist",
    az: "kömək etmək",
  },
  {
    id: 2177,
    en: "exhibition",
    az: "sərgi",
  },
  {
    id: 2178,
    en: "construct",
    az: "tikmək",
  },
  {
    id: 2179,
    en: "viewer",
    az: "tamaşaçı",
  },
  {
    id: 2180,
    en: "pan",
    az: "tava",
  },
  {
    id: 2181,
    en: "consultant",
    az: "məsləhətçi",
  },
  {
    id: 2182,
    en: "administrator",
    az: "idarəçi",
  },
  {
    id: 2183,
    en: "occasionally",
    az: "ara-sıra",
  },
  {
    id: 2184,
    en: "mayor",
    az: "bələdiyyə başçısı",
  },
  {
    id: 2185,
    en: "consideration",
    az: "nəzərə alınması",
  },
  {
    id: 2186,
    en: "CEO",
    az: "CEO",
  },
  {
    id: 2187,
    en: "secure",
    az: "etibarlı",
  },
  {
    id: 2188,
    en: "pink",
    az: "çəhrayı",
  },
  {
    id: 2189,
    en: "buck",
    az: "dollar",
  },
  {
    id: 2190,
    en: "historic",
    az: "tarixi",
  },
  {
    id: 2191,
    en: "poem",
    az: "şeir",
  },
  {
    id: 2192,
    en: "grandmother",
    az: "nənə",
  },
  {
    id: 2193,
    en: "bind",
    az: "bağlamaq",
  },
  {
    id: 2194,
    en: "fifth",
    az: "beşinci",
  },
  {
    id: 2195,
    en: "constantly",
    az: "daim",
  },
  {
    id: 2196,
    en: "enterprise",
    az: "müəssisə",
  },
  {
    id: 2197,
    en: "favor",
    az: "xeyir",
  },
  {
    id: 2198,
    en: "testing",
    az: "sınaq",
  },
  {
    id: 2199,
    en: "stomach",
    az: "mədə",
  },
  {
    id: 2200,
    en: "apparent",
    az: "aydın",
  },
  {
    id: 2201,
    en: "weigh",
    az: "çəkin",
  },
  {
    id: 2202,
    en: "install",
    az: "yüklemek",
  },
  {
    id: 2203,
    en: "sensitive",
    az: "həssas",
  },
  {
    id: 2204,
    en: "suggestion",
    az: "təklif",
  },
  {
    id: 2205,
    en: "mail",
    az: "poçt",
  },
  {
    id: 2206,
    en: "recipe",
    az: "resept",
  },
  {
    id: 2207,
    en: "reasonable",
    az: "məqbul",
  },
  {
    id: 2208,
    en: "preparation",
    az: "hazırlıq",
  },
  {
    id: 2209,
    en: "wooden",
    az: "taxta",
  },
  {
    id: 2210,
    en: "elementary",
    az: "ibtidai",
  },
  {
    id: 2211,
    en: "concert",
    az: "konsert",
  },
  {
    id: 2212,
    en: "aggressive",
    az: "aqressiv",
  },
  {
    id: 2213,
    en: "false",
    az: "yalan",
  },
  {
    id: 2214,
    en: "intention",
    az: "niyyət",
  },
  {
    id: 2215,
    en: "channel",
    az: "kanal",
  },
  {
    id: 2216,
    en: "extreme",
    az: "həddindən artıq",
  },
  {
    id: 2217,
    en: "tube",
    az: "boru",
  },
  {
    id: 2218,
    en: "drawing",
    az: "rəsm",
  },
  {
    id: 2219,
    en: "protein",
    az: "zülal",
  },
  {
    id: 2220,
    en: "quit",
    az: "burax",
  },
  {
    id: 2221,
    en: "absence",
    az: "yoxluğu",
  },
  {
    id: 2222,
    en: "Latin",
    az: "Latınca",
  },
  {
    id: 2223,
    en: "rapidly",
    az: "sürətlə",
  },
  {
    id: 2224,
    en: "jail",
    az: "həbsxanada",
  },
  {
    id: 2225,
    en: "diversity",
    az: "müxtəliflik",
  },
  {
    id: 2226,
    en: "honest",
    az: "dürüst",
  },
  {
    id: 2227,
    en: "pace",
    az: "tempi",
  },
  {
    id: 2228,
    en: "employment",
    az: "məşğulluq",
  },
  {
    id: 2229,
    en: "speaker",
    az: "natiq",
  },
  {
    id: 2230,
    en: "impression",
    az: "təəssürat",
  },
  {
    id: 2231,
    en: "essay",
    az: "esse",
  },
  {
    id: 2232,
    en: "respondent",
    az: "cavabdeh",
  },
  {
    id: 2233,
    en: "giant",
    az: "nəhəng",
  },
  {
    id: 2234,
    en: "cake",
    az: "tort",
  },
  {
    id: 2235,
    en: "historian",
    az: "tarixçi",
  },
  {
    id: 2236,
    en: "negotiate",
    az: "danışıqlar aparmaq",
  },
  {
    id: 2237,
    en: "restore",
    az: "bərpa edin",
  },
  {
    id: 2238,
    en: "substantial",
    az: "əsaslı",
  },
  {
    id: 2239,
    en: "pop",
    az: "pop",
  },
  {
    id: 2240,
    en: "specialist",
    az: "mütəxəssis",
  },
  {
    id: 2241,
    en: "origin",
    az: "mənşəli",
  },
  {
    id: 2242,
    en: "approval",
    az: "təsdiq",
  },
  {
    id: 2243,
    en: "quietly",
    az: "sakitcə",
  },
  {
    id: 2244,
    en: "advise",
    az: "məsləhət verin",
  },
  {
    id: 2245,
    en: "conventional",
    az: "şərti",
  },
  {
    id: 2246,
    en: "depth",
    az: "dərinlik",
  },
  {
    id: 2247,
    en: "wealth",
    az: "sərvət",
  },
  {
    id: 2248,
    en: "disability",
    az: "əlillik",
  },
  {
    id: 2249,
    en: "shell",
    az: "qabıq",
  },
  {
    id: 2250,
    en: "criticize",
    az: "tənqid etmək",
  },
  {
    id: 2251,
    en: "effectively",
    az: "təsirli",
  },
  {
    id: 2252,
    en: "biological",
    az: "bioloji",
  },
  {
    id: 2253,
    en: "onion",
    az: "soğan",
  },
  {
    id: 2254,
    en: "deputy",
    az: "deputat",
  },
  {
    id: 2255,
    en: "flat",
    az: "düz",
  },
  {
    id: 2256,
    en: "brand",
    az: "marka",
  },
  {
    id: 2257,
    en: "assure",
    az: "təmin etmək",
  },
  {
    id: 2258,
    en: "mad",
    az: "dəli",
  },
  {
    id: 2259,
    en: "award",
    az: "mükafat",
  },
  {
    id: 2260,
    en: "criteria",
    az: "meyarlar",
  },
  {
    id: 2261,
    en: "dealer",
    az: "satıcı",
  },
  {
    id: 2262,
    en: "via",
    az: "vasitəsilə",
  },
  {
    id: 2263,
    en: "utility",
    az: "yardım",
  },
  {
    id: 2264,
    en: "precisely",
    az: "dəqiqliklə",
  },
  {
    id: 2265,
    en: "arise",
    az: "yaranır",
  },
  {
    id: 2266,
    en: "armed",
    az: "silahlı",
  },
  {
    id: 2267,
    en: "nevertheless",
    az: "buna baxmayaraq",
  },
  {
    id: 2268,
    en: "highway",
    az: "magistral yol",
  },
  {
    id: 2269,
    en: "clinical",
    az: "klinik",
  },
  {
    id: 2270,
    en: "routine",
    az: "rutin",
  },
  {
    id: 2271,
    en: "wage",
    az: "əmək haqqı",
  },
  {
    id: 2272,
    en: "normally",
    az: "normalda",
  },
  {
    id: 2273,
    en: "phrase",
    az: "ifade",
  },
  {
    id: 2274,
    en: "ingredient",
    az: "tərkib hissəsi",
  },
  {
    id: 2275,
    en: "stake",
    az: "pay",
  },
  {
    id: 2276,
    en: "Muslim",
    az: "Müsəlman",
  },
  {
    id: 2277,
    en: "fiber",
    az: "lif",
  },
  {
    id: 2278,
    en: "activist",
    az: "aktivist",
  },
  {
    id: 2279,
    en: "Islamic",
    az: "İslami",
  },
  {
    id: 2280,
    en: "snap",
    az: "snap",
  },
  {
    id: 2281,
    en: "terrorism",
    az: "terrorizm",
  },
  {
    id: 2282,
    en: "refugee",
    az: "qaçqın",
  },
  {
    id: 2283,
    en: "incorporate",
    az: "daxil etmək",
  },
  {
    id: 2284,
    en: "hip",
    az: "kalça",
  },
  {
    id: 2285,
    en: "ultimate",
    az: "son",
  },
  {
    id: 2286,
    en: "switch",
    az: "keçid",
  },
  {
    id: 2287,
    en: "corporation",
    az: "korporasiya",
  },
  {
    id: 2288,
    en: "valuable",
    az: "dəyərlidir",
  },
  {
    id: 2289,
    en: "assumption",
    az: "fərziyyə",
  },
  {
    id: 2290,
    en: "gear",
    az: "dişli",
  },
  {
    id: 2291,
    en: "barrier",
    az: "maneə",
  },
  {
    id: 2292,
    en: "minor",
    az: "kiçik",
  },
  {
    id: 2293,
    en: "provision",
    az: "təmin",
  },
  {
    id: 2294,
    en: "killer",
    az: "qatil",
  },
  {
    id: 2295,
    en: "assign",
    az: "təyin etmək",
  },
  {
    id: 2296,
    en: "gang",
    az: "Banda",
  },
  {
    id: 2297,
    en: "developing",
    az: "inkişaf edir",
  },
  {
    id: 2298,
    en: "classic",
    az: "klassik",
  },
  {
    id: 2299,
    en: "chemical",
    az: "kimyəvi",
  },
  {
    id: 2300,
    en: "label",
    az: "etiket",
  },
  {
    id: 2301,
    en: "teen",
    az: "cavan",
  },
  {
    id: 2302,
    en: "index",
    az: "indeks",
  },
  {
    id: 2303,
    en: "vacation",
    az: "tətil",
  },
  {
    id: 2304,
    en: "advocate",
    az: "vəkil",
  },
  {
    id: 2305,
    en: "draft",
    az: "qaralama",
  },
  {
    id: 2306,
    en: "extraordinary",
    az: "qeyri-adi",
  },
  {
    id: 2307,
    en: "heaven",
    az: "Cənnət",
  },
  {
    id: 2308,
    en: "rough",
    az: "kobud",
  },
  {
    id: 2309,
    en: "yell",
    az: "qışqırmaq",
  },
  {
    id: 2310,
    en: "pregnant",
    az: "hamilə",
  },
  {
    id: 2311,
    en: "distant",
    az: "uzaq",
  },
  {
    id: 2312,
    en: "drama",
    az: "Drama",
  },
  {
    id: 2313,
    en: "satellite",
    az: "peyk",
  },
  {
    id: 2314,
    en: "personally",
    az: "şəxsən",
  },
  {
    id: 2315,
    en: "clock",
    az: "saat",
  },
  {
    id: 2316,
    en: "chocolate",
    az: "şokolad",
  },
  {
    id: 2317,
    en: "Italian",
    az: "İtalyan",
  },
  {
    id: 2318,
    en: "Canadian",
    az: "Kanada",
  },
  {
    id: 2319,
    en: "ceiling",
    az: "tavan",
  },
  {
    id: 2320,
    en: "sweep",
    az: "süpürmək",
  },
  {
    id: 2321,
    en: "advertising",
    az: "reklam",
  },
  {
    id: 2322,
    en: "universal",
    az: "universaldır",
  },
  {
    id: 2323,
    en: "spin",
    az: "fırlatmaq",
  },
  {
    id: 2324,
    en: "button",
    az: "düyməsini basın",
  },
  {
    id: 2325,
    en: "bell",
    az: "zəng",
  },
  {
    id: 2326,
    en: "rank",
    az: "rütbə",
  },
  {
    id: 2327,
    en: "darkness",
    az: "qaranlıq",
  },
  {
    id: 2328,
    en: "clothing",
    az: "geyim",
  },
  {
    id: 2329,
    en: "super",
    az: "super",
  },
  {
    id: 2330,
    en: "yield",
    az: "məhsuldarlıq",
  },
  {
    id: 2331,
    en: "fence",
    az: "hasar",
  },
  {
    id: 2332,
    en: "portrait",
    az: "portret",
  },
  {
    id: 2333,
    en: "survival",
    az: "yaşamaq",
  },
  {
    id: 2334,
    en: "roughly",
    az: "kobud",
  },
  {
    id: 2335,
    en: "lawsuit",
    az: "dava",
  },
  {
    id: 2336,
    en: "testimony",
    az: "şəhadət",
  },
  {
    id: 2337,
    en: "bunch",
    az: "dəstə",
  },
  {
    id: 2338,
    en: "found",
    az: "tapdı",
  },
  {
    id: 2339,
    en: "burden",
    az: "yük",
  },
  {
    id: 2340,
    en: "react",
    az: "reaksiya verin",
  },
  {
    id: 2341,
    en: "chamber",
    az: "kamera",
  },
  {
    id: 2342,
    en: "furniture",
    az: "mebel",
  },
  {
    id: 2343,
    en: "cooperation",
    az: "əməkdaşlıq",
  },
  {
    id: 2344,
    en: "string",
    az: "simli",
  },
  {
    id: 2345,
    en: "ceremony",
    az: "mərasimi",
  },
  {
    id: 2346,
    en: "communicate",
    az: "ünsiyyət",
  },
  {
    id: 2347,
    en: "cheek",
    az: "Yanaq",
  },
  {
    id: 2348,
    en: "lost",
    az: "itirdi",
  },
  {
    id: 2349,
    en: "profile",
    az: "profil",
  },
  {
    id: 2350,
    en: "mechanism",
    az: "mexanizm",
  },
  {
    id: 2351,
    en: "disagree",
    az: "razı deyiləm",
  },
  {
    id: 2352,
    en: "penalty",
    az: "cəza",
  },
  {
    id: 2353,
    en: "ie",
    az: "yəni",
  },
  {
    id: 2354,
    en: "resort",
    az: "kurort",
  },
  {
    id: 2355,
    en: "destruction",
    az: "məhv",
  },
  {
    id: 2356,
    en: "unlikely",
    az: "mümkünsüz",
  },
  {
    id: 2357,
    en: "tissue",
    az: "toxuma",
  },
  {
    id: 2358,
    en: "constitutional",
    az: "konstitusiya",
  },
  {
    id: 2359,
    en: "pant",
    az: "şalvar",
  },
  {
    id: 2360,
    en: "stranger",
    az: "qərib",
  },
  {
    id: 2361,
    en: "infection",
    az: "infeksiya",
  },
  {
    id: 2362,
    en: "cabinet",
    az: "kabinet",
  },
  {
    id: 2363,
    en: "broken",
    az: "qırıq",
  },
  {
    id: 2364,
    en: "apple",
    az: "alma",
  },
  {
    id: 2365,
    en: "electric",
    az: "elektrik",
  },
  {
    id: 2366,
    en: "proceed",
    az: "davam edin",
  },
  {
    id: 2367,
    en: "bet",
    az: "bahis",
  },
  {
    id: 2368,
    en: "literary",
    az: "ədəbi",
  },
  {
    id: 2369,
    en: "virus",
    az: "virus",
  },
  {
    id: 2370,
    en: "stupid",
    az: "axmaq",
  },
  {
    id: 2371,
    en: "dispute",
    az: "münaqişə",
  },
  {
    id: 2372,
    en: "fortune",
    az: "bəxt",
  },
  {
    id: 2373,
    en: "strategic",
    az: "strateji",
  },
  {
    id: 2374,
    en: "assistant",
    az: "köməkçi",
  },
  {
    id: 2375,
    en: "overcome",
    az: "aşmaq",
  },
  {
    id: 2376,
    en: "remarkable",
    az: "diqqətəlayiqdir",
  },
  {
    id: 2377,
    en: "occupy",
    az: "işğal etmək",
  },
  {
    id: 2378,
    en: "statistics",
    az: "statistika",
  },
  {
    id: 2379,
    en: "shopping",
    az: "alış-veriş",
  },
  {
    id: 2380,
    en: "cousin",
    az: "əmiuşağı",
  },
  {
    id: 2381,
    en: "encounter",
    az: "qarşılaşma",
  },
  {
    id: 2382,
    en: "wipe",
    az: "silmək",
  },
  {
    id: 2383,
    en: "initially",
    az: "əvvəlcə",
  },
  {
    id: 2384,
    en: "blind",
    az: "kor",
  },
  {
    id: 2385,
    en: "port",
    az: "liman",
  },
  {
    id: 2386,
    en: "electricity",
    az: "elektrik enerjisi",
  },
  {
    id: 2387,
    en: "genetic",
    az: "genetik",
  },
  {
    id: 2388,
    en: "adviser",
    az: "məsləhətçi",
  },
  {
    id: 2389,
    en: "spokesman",
    az: "sözçüsü",
  },
  {
    id: 2390,
    en: "retain",
    az: "saxlamaq",
  },
  {
    id: 2391,
    en: "latter",
    az: "sonuncu",
  },
  {
    id: 2392,
    en: "incentive",
    az: "təşviq",
  },
  {
    id: 2393,
    en: "slave",
    az: "kölə",
  },
  {
    id: 2394,
    en: "translate",
    az: "tərcümə etmək",
  },
  {
    id: 2395,
    en: "accurate",
    az: "dəqiq",
  },
  {
    id: 2396,
    en: "whereas",
    az: "Halbuki",
  },
  {
    id: 2397,
    en: "terror",
    az: "terror",
  },
  {
    id: 2398,
    en: "expansion",
    az: "genişlənməsi",
  },
  {
    id: 2399,
    en: "elite",
    az: "elit",
  },
  {
    id: 2400,
    en: "Olympic",
    az: "Olimpiya",
  },
  {
    id: 2401,
    en: "dirt",
    az: "kir",
  },
  {
    id: 2402,
    en: "odd",
    az: "tək",
  },
  {
    id: 2403,
    en: "rice",
    az: "düyü",
  },
  {
    id: 2404,
    en: "bullet",
    az: "güllə",
  },
  {
    id: 2405,
    en: "tight",
    az: "sıx",
  },
  {
    id: 2406,
    en: "Bible",
    az: "Müqəddəs Kitab",
  },
  {
    id: 2407,
    en: "chart",
    az: "qrafik",
  },
  {
    id: 2408,
    en: "solar",
    az: "günəş",
  },
  {
    id: 2409,
    en: "square",
    az: "kvadrat",
  },
  {
    id: 2410,
    en: "concentration",
    az: "konsentrasiyası",
  },
  {
    id: 2411,
    en: "complicated",
    az: "mürəkkəbdir",
  },
  {
    id: 2412,
    en: "gently",
    az: "nəzakətlə",
  },
  {
    id: 2413,
    en: "champion",
    az: "çempion",
  },
  {
    id: 2414,
    en: "scenario",
    az: "ssenari",
  },
  {
    id: 2415,
    en: "telescope",
    az: "teleskop",
  },
  {
    id: 2416,
    en: "reflection",
    az: "əks olunması",
  },
  {
    id: 2417,
    en: "revolution",
    az: "inqilab",
  },
  {
    id: 2418,
    en: "strip",
    az: "zolaq",
  },
  {
    id: 2419,
    en: "interpret",
    az: "şərh etmək",
  },
  {
    id: 2420,
    en: "friendly",
    az: "mehriban",
  },
  {
    id: 2421,
    en: "tournament",
    az: "turnir",
  },
  {
    id: 2422,
    en: "fiction",
    az: "uydurma",
  },
  {
    id: 2423,
    en: "detect",
    az: "aşkar etmək",
  },
  {
    id: 2424,
    en: "tremendous",
    az: "böyük",
  },
  {
    id: 2425,
    en: "lifetime",
    az: "ömür boyu",
  },
  {
    id: 2426,
    en: "recommendation",
    az: "tövsiyə",
  },
  {
    id: 2427,
    en: "senator",
    az: "senator",
  },
  {
    id: 2428,
    en: "hunting",
    az: "ovçuluq",
  },
  {
    id: 2429,
    en: "salad",
    az: "salat",
  },
  {
    id: 2430,
    en: "guarantee",
    az: "zəmanət",
  },
  {
    id: 2431,
    en: "innocent",
    az: "günahsız",
  },
  {
    id: 2432,
    en: "boundary",
    az: "sərhədi",
  },
  {
    id: 2433,
    en: "pause",
    az: "fasilə",
  },
  {
    id: 2434,
    en: "remote",
    az: "uzaq",
  },
  {
    id: 2435,
    en: "satisfaction",
    az: "məmnuniyyət",
  },
  {
    id: 2436,
    en: "journal",
    az: "jurnal",
  },
  {
    id: 2437,
    en: "bench",
    az: "dəzgah",
  },
  {
    id: 2438,
    en: "lover",
    az: "aşiq",
  },
  {
    id: 2439,
    en: "raw",
    az: "xam",
  },
  {
    id: 2440,
    en: "awareness",
    az: "maarifləndirmə",
  },
  {
    id: 2441,
    en: "withdraw",
    az: "çəkilmək",
  },
  {
    id: 2442,
    en: "deck",
    az: "göyərtə",
  },
  {
    id: 2443,
    en: "similarly",
    az: "oxşar",
  },
  {
    id: 2444,
    en: "newly",
    az: "yeni",
  },
  {
    id: 2445,
    en: "pole",
    az: "dirək",
  },
  {
    id: 2446,
    en: "testify",
    az: "şəhadət verin",
  },
  {
    id: 2447,
    en: "mode",
    az: "rejimi",
  },
  {
    id: 2448,
    en: "dialogue",
    az: "dialoq",
  },
  {
    id: 2449,
    en: "imply",
    az: "deməkdir",
  },
  {
    id: 2450,
    en: "naturally",
    az: "təbii olaraq",
  },
  {
    id: 2451,
    en: "mutual",
    az: "qarşılıqlı",
  },
  {
    id: 2452,
    en: "founder",
    az: "qurucusu",
  },
  {
    id: 2453,
    en: "advanced",
    az: "qabaqcıl",
  },
  {
    id: 2454,
    en: "pride",
    az: "qürur",
  },
  {
    id: 2455,
    en: "dismiss",
    az: "işdən çıxarmaq",
  },
  {
    id: 2456,
    en: "aircraft",
    az: "təyyarə",
  },
  {
    id: 2457,
    en: "delivery",
    az: "çatdırılma",
  },
  {
    id: 2458,
    en: "mainly",
    az: "əsasən",
  },
  {
    id: 2459,
    en: "bake",
    az: "bişirmək",
  },
  {
    id: 2460,
    en: "freeze",
    az: "dondurmaq",
  },
  {
    id: 2461,
    en: "platform",
    az: "platforma",
  },
  {
    id: 2462,
    en: "finance",
    az: "maliyyə",
  },
  {
    id: 2463,
    en: "sink",
    az: "batmaq",
  },
  {
    id: 2464,
    en: "attractive",
    az: "cəlbedici",
  },
  {
    id: 2465,
    en: "diverse",
    az: "rəngarəng",
  },
  {
    id: 2466,
    en: "relevant",
    az: "aiddir",
  },
  {
    id: 2467,
    en: "ideal",
    az: "ideal",
  },
  {
    id: 2468,
    en: "joy",
    az: "sevinc",
  },
  {
    id: 2469,
    en: "regularly",
    az: "müntəzəm olaraq",
  },
  {
    id: 2470,
    en: "working",
    az: "işləyir",
  },
  {
    id: 2471,
    en: "singer",
    az: "müğənni",
  },
  {
    id: 2472,
    en: "evolve",
    az: "inkişaf edir",
  },
  {
    id: 2473,
    en: "shooting",
    az: "atəş",
  },
  {
    id: 2474,
    en: "partly",
    az: "qismən",
  },
  {
    id: 2475,
    en: "unknown",
    az: "naməlum",
  },
  {
    id: 2476,
    en: "offense",
    az: "cinayət",
  },
  {
    id: 2477,
    en: "counter",
    az: "sayğac",
  },
  {
    id: 2478,
    en: "DNA",
    az: "DNT",
  },
  {
    id: 2479,
    en: "potentially",
    az: "potensial olaraq",
  },
  {
    id: 2480,
    en: "thirty",
    az: "otuz",
  },
  {
    id: 2481,
    en: "justify",
    az: "haqq qazandırmaq",
  },
  {
    id: 2482,
    en: "protest",
    az: "etiraz",
  },
  {
    id: 2483,
    en: "crash",
    az: "qəza",
  },
  {
    id: 2484,
    en: "craft",
    az: "sənətkarlıq",
  },
  {
    id: 2485,
    en: "treaty",
    az: "müqavilə",
  },
  {
    id: 2486,
    en: "terrorist",
    az: "terrorçu",
  },
  {
    id: 2487,
    en: "insight",
    az: "fikir",
  },
  {
    id: 2488,
    en: "possess",
    az: "sahib olmaq",
  },
  {
    id: 2489,
    en: "politically",
    az: "siyasi",
  },
  {
    id: 2490,
    en: "tap",
    az: "vurun",
  },
  {
    id: 2491,
    en: "extensive",
    az: "genişdir",
  },
  {
    id: 2492,
    en: "episode",
    az: "epizod",
  },
  {
    id: 2493,
    en: "swim",
    az: "üzmək",
  },
  {
    id: 2494,
    en: "tire",
    az: "şin",
  },
  {
    id: 2495,
    en: "fault",
    az: "nöqsan",
  },
  {
    id: 2496,
    en: "loose",
    az: "boş",
  },
  {
    id: 2497,
    en: "shortly",
    az: "qısa müddətdə",
  },
  {
    id: 2498,
    en: "originally",
    az: "ilkin olaraq",
  },
  {
    id: 2499,
    en: "considerable",
    az: "xeyli",
  },
  {
    id: 2500,
    en: "prior",
    az: "əvvəl",
  },
  {
    id: 2501,
    en: "intellectual",
    az: "ziyalı",
  },
  {
    id: 2502,
    en: "assault",
    az: "basqın",
  },
  {
    id: 2503,
    en: "relax",
    az: "rahatlanmaq",
  },
  {
    id: 2504,
    en: "stair",
    az: "pilləkən",
  },
  {
    id: 2505,
    en: "adventure",
    az: "macəra",
  },
  {
    id: 2506,
    en: "external",
    az: "xarici",
  },
  {
    id: 2507,
    en: "proof",
    az: "sübut",
  },
  {
    id: 2508,
    en: "confident",
    az: "inamlı",
  },
  {
    id: 2509,
    en: "headquarters",
    az: "qərargah",
  },
  {
    id: 2510,
    en: "sudden",
    az: "qəfil",
  },
  {
    id: 2511,
    en: "dirty",
    az: "çirkli",
  },
  {
    id: 2512,
    en: "violation",
    az: "pozuntu",
  },
  {
    id: 2513,
    en: "tongue",
    az: "dil",
  },
  {
    id: 2514,
    en: "license",
    az: "lisenziyası",
  },
  {
    id: 2515,
    en: "shelter",
    az: "sığınacaq",
  },
  {
    id: 2516,
    en: "rub",
    az: "ovuşdurmaq",
  },
  {
    id: 2517,
    en: "controversy",
    az: "mübahisə",
  },
  {
    id: 2518,
    en: "entrance",
    az: "giriş",
  },
  {
    id: 2519,
    en: "properly",
    az: "düzgün şəkildə",
  },
  {
    id: 2520,
    en: "fade",
    az: "solğun",
  },
  {
    id: 2521,
    en: "defensive",
    az: "müdafiə",
  },
  {
    id: 2522,
    en: "tragedy",
    az: "faciə",
  },
  {
    id: 2523,
    en: "net",
    az: "xalis",
  },
  {
    id: 2524,
    en: "characterize",
    az: "xarakterizə etmək",
  },
  {
    id: 2525,
    en: "funeral",
    az: "cənazə",
  },
  {
    id: 2526,
    en: "profession",
    az: "peşə",
  },
  {
    id: 2527,
    en: "alter",
    az: "dəyişdirmək",
  },
  {
    id: 2528,
    en: "constitute",
    az: "təşkil edir",
  },
  {
    id: 2529,
    en: "establishment",
    az: "müəssisə",
  },
  {
    id: 2530,
    en: "squeeze",
    az: "sıxmaq",
  },
  {
    id: 2531,
    en: "imagination",
    az: "təxəyyül",
  },
  {
    id: 2532,
    en: "mask",
    az: "maska",
  },
  {
    id: 2533,
    en: "convert",
    az: "çevirmək",
  },
  {
    id: 2534,
    en: "comprehensive",
    az: "hərtərəfli",
  },
  {
    id: 2535,
    en: "prominent",
    az: "görkəmli",
  },
  {
    id: 2536,
    en: "presentation",
    az: "təqdimat",
  },
  {
    id: 2537,
    en: "regardless",
    az: "asılı olmayaraq",
  },
  {
    id: 2538,
    en: "load",
    az: "yük",
  },
  {
    id: 2539,
    en: "stable",
    az: "sabitdir",
  },
  {
    id: 2540,
    en: "introduction",
    az: "giriş",
  },
  {
    id: 2541,
    en: "pretend",
    az: "iddia",
  },
  {
    id: 2542,
    en: "elderly",
    az: "yaşlı",
  },
  {
    id: 2543,
    en: "representation",
    az: "nümayəndəliyi",
  },
  {
    id: 2544,
    en: "deer",
    az: "maral",
  },
  {
    id: 2545,
    en: "split",
    az: "parçalanmaq",
  },
  {
    id: 2546,
    en: "violate",
    az: "pozmaq",
  },
  {
    id: 2547,
    en: "pollution",
    az: "çirklənmə",
  },
  {
    id: 2548,
    en: "emission",
    az: "emissiya",
  },
  {
    id: 2549,
    en: "steady",
    az: "dayanıqlı",
  },
  {
    id: 2550,
    en: "vital",
    az: "həyati",
  },
  {
    id: 2551,
    en: "fate",
    az: "taleyi",
  },
  {
    id: 2552,
    en: "earnings",
    az: "qazanc",
  },
  {
    id: 2553,
    en: "oven",
    az: "Soba",
  },
  {
    id: 2554,
    en: "distinction",
    az: "fərqləndirmə",
  },
  {
    id: 2555,
    en: "segment",
    az: "seqment",
  },
  {
    id: 2556,
    en: "nowhere",
    az: "heç bir yerdə",
  },
  {
    id: 2557,
    en: "poet",
    az: "şair",
  },
  {
    id: 2558,
    en: "mere",
    az: "sadəcə",
  },
  {
    id: 2559,
    en: "exciting",
    az: "həyəcan verici",
  },
  {
    id: 2560,
    en: "variation",
    az: "dəyişkənlik",
  },
  {
    id: 2561,
    en: "comfort",
    az: "rahatlıq",
  },
  {
    id: 2562,
    en: "radical",
    az: "radikal",
  },
  {
    id: 2563,
    en: "adapt",
    az: "uyğunlaşmaq",
  },
  {
    id: 2564,
    en: "Irish",
    az: "İrland",
  },
  {
    id: 2565,
    en: "honey",
    az: "bal",
  },
  {
    id: 2566,
    en: "correspondent",
    az: "müxbir",
  },
  {
    id: 2567,
    en: "pale",
    az: "solğun",
  },
  {
    id: 2568,
    en: "musician",
    az: "musiqiçi",
  },
  {
    id: 2569,
    en: "significance",
    az: "əhəmiyyəti",
  },
  {
    id: 2570,
    en: "vessel",
    az: "gəmi",
  },
  {
    id: 2571,
    en: "storage",
    az: "saxlama",
  },
  {
    id: 2572,
    en: "flee",
    az: "qaçmaq",
  },
  {
    id: 2573,
    en: "mm-hmm",
    az: "mm-hmm",
  },
  {
    id: 2574,
    en: "leather",
    az: "dəri",
  },
  {
    id: 2575,
    en: "distribute",
    az: "paylamaq",
  },
  {
    id: 2576,
    en: "evolution",
    az: "təkamül",
  },
  {
    id: 2577,
    en: "ill",
    az: "xəstə",
  },
  {
    id: 2578,
    en: "tribe",
    az: "qəbilə",
  },
  {
    id: 2579,
    en: "shelf",
    az: "rəf",
  },
  {
    id: 2580,
    en: "grandfather",
    az: "baba",
  },
  {
    id: 2581,
    en: "lawn",
    az: "qazon",
  },
  {
    id: 2582,
    en: "buyer",
    az: "alıcı",
  },
  {
    id: 2583,
    en: "dining",
    az: "yemək",
  },
  {
    id: 2584,
    en: "wisdom",
    az: "hikmət",
  },
  {
    id: 2585,
    en: "council",
    az: "məclis",
  },
  {
    id: 2586,
    en: "vulnerable",
    az: "həssas",
  },
  {
    id: 2587,
    en: "instance",
    az: "misal",
  },
  {
    id: 2588,
    en: "garlic",
    az: "sarımsaq",
  },
  {
    id: 2589,
    en: "capability",
    az: "qabiliyyət",
  },
  {
    id: 2590,
    en: "poetry",
    az: "şeir",
  },
  {
    id: 2591,
    en: "celebrity",
    az: "ünlü",
  },
  {
    id: 2592,
    en: "gradually",
    az: "tədricən",
  },
  {
    id: 2593,
    en: "stability",
    az: "sabitlik",
  },
  {
    id: 2594,
    en: "doubt",
    az: "şübhə",
  },
  {
    id: 2595,
    en: "fantasy",
    az: "fantaziya",
  },
  {
    id: 2596,
    en: "scared",
    az: "qorxurdu",
  },
  {
    id: 2597,
    en: "guide",
    az: "bələdçi",
  },
  {
    id: 2598,
    en: "plot",
    az: "süjet",
  },
  {
    id: 2599,
    en: "framework",
    az: "çərçivə",
  },
  {
    id: 2600,
    en: "gesture",
    az: "jest",
  },
  {
    id: 2601,
    en: "depending",
    az: "asılı olaraq",
  },
  {
    id: 2602,
    en: "ongoing",
    az: "davam edir",
  },
  {
    id: 2603,
    en: "psychology",
    az: "psixologiya",
  },
  {
    id: 2604,
    en: "counselor",
    az: "məsləhətçi",
  },
  {
    id: 2605,
    en: "chapter",
    az: "fəsil",
  },
  {
    id: 2606,
    en: "divorce",
    az: "boşanma",
  },
  {
    id: 2607,
    en: "owe",
    az: "borclu",
  },
  {
    id: 2608,
    en: "pipe",
    az: "boru",
  },
  {
    id: 2609,
    en: "athletic",
    az: "atletik",
  },
  {
    id: 2610,
    en: "slight",
    az: "yüngül",
  },
  {
    id: 2611,
    en: "math",
    az: "riyaziyyat",
  },
  {
    id: 2612,
    en: "shade",
    az: "kölgə",
  },
  {
    id: 2613,
    en: "tail",
    az: "quyruq",
  },
  {
    id: 2614,
    en: "sustain",
    az: "davam etdirmək",
  },
  {
    id: 2615,
    en: "mount",
    az: "montaj etmək",
  },
  {
    id: 2616,
    en: "obligation",
    az: "öhdəlik",
  },
  {
    id: 2617,
    en: "angle",
    az: "bucaq",
  },
  {
    id: 2618,
    en: "palm",
    az: "xurma",
  },
  {
    id: 2619,
    en: "differ",
    az: "fərqli",
  },
  {
    id: 2620,
    en: "custom",
    az: "adət",
  },
  {
    id: 2621,
    en: "economist",
    az: "iqtisadçı",
  },
  {
    id: 2622,
    en: "fifteen",
    az: "on beş",
  },
  {
    id: 2623,
    en: "soup",
    az: "şorba",
  },
  {
    id: 2624,
    en: "celebration",
    az: "qeyd etmək",
  },
  {
    id: 2625,
    en: "efficient",
    az: "səmərəli",
  },
  {
    id: 2626,
    en: "composition",
    az: "tərkibi",
  },
  {
    id: 2627,
    en: "satisfy",
    az: "məmnun etmək",
  },
  {
    id: 2628,
    en: "pile",
    az: "xovlu",
  },
  {
    id: 2629,
    en: "briefly",
    az: "qısaca",
  },
  {
    id: 2630,
    en: "carbon",
    az: "karbon",
  },
  {
    id: 2631,
    en: "closer",
    az: "yaxınlaşdı",
  },
  {
    id: 2632,
    en: "consume",
    az: "istehlak",
  },
  {
    id: 2633,
    en: "scheme",
    az: "sxem",
  },
  {
    id: 2634,
    en: "crack",
    az: "çatlaq",
  },
  {
    id: 2635,
    en: "frequency",
    az: "tezliyi",
  },
  {
    id: 2636,
    en: "tobacco",
    az: "tütün",
  },
  {
    id: 2637,
    en: "survivor",
    az: "sağ qalan",
  },
  {
    id: 2638,
    en: "besides",
    az: "başqa",
  },
  {
    id: 2639,
    en: "psychologist",
    az: "psixoloq",
  },
  {
    id: 2640,
    en: "wealthy",
    az: "varlı",
  },
  {
    id: 2641,
    en: "galaxy",
    az: "qalaktika",
  },
  {
    id: 2642,
    en: "given",
    az: "verilmişdir",
  },
  {
    id: 2643,
    en: "ski",
    az: "xizək",
  },
  {
    id: 2644,
    en: "limitation",
    az: "məhdudiyyət",
  },
  {
    id: 2645,
    en: "trace",
    az: "iz",
  },
  {
    id: 2646,
    en: "appointment",
    az: "təyinat",
  },
  {
    id: 2647,
    en: "preference",
    az: "üstünlük",
  },
  {
    id: 2648,
    en: "meter",
    az: "metr",
  },
  {
    id: 2649,
    en: "explosion",
    az: "partlayış",
  },
  {
    id: 2650,
    en: "publicly",
    az: "açıq şəkildə",
  },
  {
    id: 2651,
    en: "incredible",
    az: "inanılmaz",
  },
  {
    id: 2652,
    en: "fighter",
    az: "döyüşçü",
  },
  {
    id: 2653,
    en: "rapid",
    az: "sürətli",
  },
  {
    id: 2654,
    en: "admission",
    az: "qəbul",
  },
  {
    id: 2655,
    en: "hunter",
    az: "ovçu",
  },
  {
    id: 2656,
    en: "educate",
    az: "maarifləndirmək",
  },
  {
    id: 2657,
    en: "painful",
    az: "ağrılı",
  },
  {
    id: 2658,
    en: "friendship",
    az: "dostluq",
  },
  {
    id: 2659,
    en: "infant",
    az: "körpə",
  },
  {
    id: 2660,
    en: "calculate",
    az: "hesablamaq",
  },
  {
    id: 2661,
    en: "fifty",
    az: "əlli",
  },
  {
    id: 2662,
    en: "rid",
    az: "qurtarmaq",
  },
  {
    id: 2663,
    en: "porch",
    az: "eyvan",
  },
  {
    id: 2664,
    en: "tendency",
    az: "meyl",
  },
  {
    id: 2665,
    en: "uniform",
    az: "forma",
  },
  {
    id: 2666,
    en: "formation",
    az: "formalaşması",
  },
  {
    id: 2667,
    en: "scholarship",
    az: "təqaüd",
  },
  {
    id: 2668,
    en: "reservation",
    az: "rezervasiya",
  },
  {
    id: 2669,
    en: "efficiency",
    az: "səmərəlilik",
  },
  {
    id: 2670,
    en: "qualify",
    az: "uyğun olmaq",
  },
  {
    id: 2671,
    en: "mall",
    az: "ticarət mərkəzi",
  },
  {
    id: 2672,
    en: "derive",
    az: "əldə etmək",
  },
  {
    id: 2673,
    en: "scandal",
    az: "qalmaqal",
  },
  {
    id: 2674,
    en: "helpful",
    az: "faydalıdır",
  },
  {
    id: 2675,
    en: "impress",
    az: "heyran et",
  },
  {
    id: 2676,
    en: "heel",
    az: "daban",
  },
  {
    id: 2677,
    en: "resemble",
    az: "bənzəyir",
  },
  {
    id: 2678,
    en: "privacy",
    az: "gizlilik",
  },
  {
    id: 2679,
    en: "fabric",
    az: "parça",
  },
  {
    id: 2680,
    en: "contest",
    az: "müsabiqə",
  },
  {
    id: 2681,
    en: "proportion",
    az: "nisbət",
  },
  {
    id: 2682,
    en: "guideline",
    az: "təlimat",
  },
  {
    id: 2683,
    en: "rifle",
    az: "tüfəng",
  },
  {
    id: 2684,
    en: "maintenance",
    az: "baxım",
  },
  {
    id: 2685,
    en: "conviction",
    az: "məhkumluq",
  },
  {
    id: 2686,
    en: "trick",
    az: "hiylə",
  },
  {
    id: 2687,
    en: "organic",
    az: "üzvi",
  },
  {
    id: 2688,
    en: "tent",
    az: "çadır",
  },
  {
    id: 2689,
    en: "examination",
    az: "müayinə",
  },
  {
    id: 2690,
    en: "publisher",
    az: "naşir",
  },
  {
    id: 2691,
    en: "strengthen",
    az: "gücləndirmək",
  },
  {
    id: 2692,
    en: "proposed",
    az: "təklif etdi",
  },
  {
    id: 2693,
    en: "myth",
    az: "mif",
  },
  {
    id: 2694,
    en: "sophisticated",
    az: "incə",
  },
  {
    id: 2695,
    en: "cow",
    az: "inək",
  },
  {
    id: 2696,
    en: "etc",
    az: "və s",
  },
  {
    id: 2697,
    en: "standing",
    az: "ayaqda",
  },
  {
    id: 2698,
    en: "asleep",
    az: "yuxuda",
  },
  {
    id: 2699,
    en: "tennis",
    az: "tennis",
  },
  {
    id: 2700,
    en: "nerve",
    az: "sinir",
  },
  {
    id: 2701,
    en: "barrel",
    az: "barel",
  },
  {
    id: 2702,
    en: "bombing",
    az: "bombalama",
  },
  {
    id: 2703,
    en: "membership",
    az: "üzvlük",
  },
  {
    id: 2704,
    en: "ratio",
    az: "nisbət",
  },
  {
    id: 2705,
    en: "menu",
    az: "menyusu",
  },
  {
    id: 2706,
    en: "controversial",
    az: "mübahisəli",
  },
  {
    id: 2707,
    en: "desperate",
    az: "ümidsiz",
  },
  {
    id: 2708,
    en: "lifestyle",
    az: "həyat tərzi",
  },
  {
    id: 2709,
    en: "humor",
    az: "yumor",
  },
  {
    id: 2710,
    en: "loud",
    az: "ucadan",
  },
  {
    id: 2711,
    en: "glove",
    az: "əlcək",
  },
  {
    id: 2712,
    en: "sufficient",
    az: "kifayətdir",
  },
  {
    id: 2713,
    en: "narrative",
    az: "povest",
  },
  {
    id: 2714,
    en: "photographer",
    az: "fotoqraf",
  },
  {
    id: 2715,
    en: "helicopter",
    az: "vertolyot",
  },
  {
    id: 2716,
    en: "modest",
    az: "təvazökar",
  },
  {
    id: 2717,
    en: "provider",
    az: "provayder",
  },
  {
    id: 2718,
    en: "delay",
    az: "gecikmə",
  },
  {
    id: 2719,
    en: "agricultural",
    az: "kənd təsərrüfatı",
  },
  {
    id: 2720,
    en: "explode",
    az: "partlamaq",
  },
  {
    id: 2721,
    en: "stroke",
    az: "vuruş",
  },
  {
    id: 2722,
    en: "scope",
    az: "əhatə dairəsi",
  },
  {
    id: 2723,
    en: "punishment",
    az: "cəza",
  },
  {
    id: 2724,
    en: "handful",
    az: "ovuc",
  },
  {
    id: 2725,
    en: "badly",
    az: "pis",
  },
  {
    id: 2726,
    en: "horizon",
    az: "Üfüq",
  },
  {
    id: 2727,
    en: "curious",
    az: "maraqli",
  },
  {
    id: 2728,
    en: "downtown",
    az: "şəhərin mərkəzində",
  },
  {
    id: 2729,
    en: "girlfriend",
    az: "rəfiqə",
  },
  {
    id: 2730,
    en: "prompt",
    az: "tez",
  },
  {
    id: 2731,
    en: "cholesterol",
    az: "xolesterol",
  },
  {
    id: 2732,
    en: "absorb",
    az: "udmaq",
  },
  {
    id: 2733,
    en: "adjustment",
    az: "tənzimləmə",
  },
  {
    id: 2734,
    en: "taxpayer",
    az: "vergi ödəyicisi",
  },
  {
    id: 2735,
    en: "eager",
    az: "həvəsli",
  },
  {
    id: 2736,
    en: "principal",
    az: "müdir",
  },
  {
    id: 2737,
    en: "detailed",
    az: "ətraflı",
  },
  {
    id: 2738,
    en: "motivation",
    az: "motivasiya",
  },
  {
    id: 2739,
    en: "assignment",
    az: "tapşırıq",
  },
  {
    id: 2740,
    en: "restriction",
    az: "məhdudlaşdırma",
  },
  {
    id: 2741,
    en: "Palestinian",
    az: "Fələstinli",
  },
  {
    id: 2742,
    en: "laboratory",
    az: "laboratoriya",
  },
  {
    id: 2743,
    en: "workshop",
    az: "atelye",
  },
  {
    id: 2744,
    en: "differently",
    az: "fərqli şəkildə",
  },
  {
    id: 2745,
    en: "auto",
    az: "avtomatik",
  },
  {
    id: 2746,
    en: "romantic",
    az: "romantik",
  },
  {
    id: 2747,
    en: "cotton",
    az: "pambıq",
  },
  {
    id: 2748,
    en: "motor",
    az: "motor",
  },
  {
    id: 2749,
    en: "sue",
    az: "dava",
  },
  {
    id: 2750,
    en: "flavor",
    az: "ləzzət",
  },
  {
    id: 2751,
    en: "overlook",
    az: "gözdən salmaq",
  },
  {
    id: 2752,
    en: "float",
    az: "sal",
  },
  {
    id: 2753,
    en: "undergo",
    az: "keçmək",
  },
  {
    id: 2754,
    en: "sequence",
    az: "ardıcıllıq",
  },
  {
    id: 2755,
    en: "demonstration",
    az: "nümayiş",
  },
  {
    id: 2756,
    en: "jet",
    az: "reaktiv",
  },
  {
    id: 2757,
    en: "orange",
    az: "narıncı",
  },
  {
    id: 2758,
    en: "consumption",
    az: "istehlak",
  },
  {
    id: 2759,
    en: "assert",
    az: "təsdiq etmək",
  },
  {
    id: 2760,
    en: "blade",
    az: "bıçaq",
  },
  {
    id: 2761,
    en: "temporary",
    az: "müvəqqəti",
  },
  {
    id: 2762,
    en: "medication",
    az: "dərman",
  },
  {
    id: 2763,
    en: "cabin",
    az: "kabin",
  },
  {
    id: 2764,
    en: "bite",
    az: "dişləmək",
  },
  {
    id: 2765,
    en: "edition",
    az: "nəşr",
  },
  {
    id: 2766,
    en: "valley",
    az: "dərə",
  },
  {
    id: 2767,
    en: "yours",
    az: "sizin",
  },
  {
    id: 2768,
    en: "pitch",
    az: "meydança",
  },
  {
    id: 2769,
    en: "pine",
    az: "şam",
  },
  {
    id: 2770,
    en: "brilliant",
    az: "parlaq",
  },
  {
    id: 2771,
    en: "versus",
    az: "qarşı",
  },
  {
    id: 2772,
    en: "manufacturing",
    az: "istehsal",
  },
  {
    id: 2773,
    en: "absolute",
    az: "mütləq",
  },
  {
    id: 2774,
    en: "chef",
    az: "aşpaz",
  },
  {
    id: 2775,
    en: "discrimination",
    az: "ayrıseçkilik",
  },
  {
    id: 2776,
    en: "offensive",
    az: "təhqiramiz",
  },
  {
    id: 2777,
    en: "boom",
    az: "partlama",
  },
  {
    id: 2778,
    en: "register",
    az: "qeyd edin",
  },
  {
    id: 2779,
    en: "appoint",
    az: "təyin etmək",
  },
  {
    id: 2780,
    en: "heritage",
    az: "irsi",
  },
  {
    id: 2781,
    en: "God",
    az: "Allah",
  },
  {
    id: 2782,
    en: "dominant",
    az: "dominant",
  },
  {
    id: 2783,
    en: "successfully",
    az: "uğurla",
  },
  {
    id: 2784,
    en: "shit",
    az: "bağırlamaq",
  },
  {
    id: 2785,
    en: "lemon",
    az: "limon",
  },
  {
    id: 2786,
    en: "hungry",
    az: "ac",
  },
  {
    id: 2787,
    en: "wander",
    az: "gəzmək",
  },
  {
    id: 2788,
    en: "submit",
    az: "təqdim",
  },
  {
    id: 2789,
    en: "economics",
    az: "iqtisadiyyat",
  },
  {
    id: 2790,
    en: "naked",
    az: "çılpaq",
  },
  {
    id: 2791,
    en: "anticipate",
    az: "qabaqlamaq",
  },
  {
    id: 2792,
    en: "nut",
    az: "qoz",
  },
  {
    id: 2793,
    en: "legacy",
    az: "miras",
  },
  {
    id: 2794,
    en: "extension",
    az: "uzadılması",
  },
  {
    id: 2795,
    en: "shrug",
    az: "büzmək",
  },
  {
    id: 2796,
    en: "battery",
    az: "batareya",
  },
  {
    id: 2797,
    en: "arrival",
    az: "gəliş",
  },
  {
    id: 2798,
    en: "legitimate",
    az: "qanuni",
  },
  {
    id: 2799,
    en: "orientation",
    az: "oriyentasiya",
  },
  {
    id: 2800,
    en: "inflation",
    az: "inflyasiya",
  },
  {
    id: 2801,
    en: "cope",
    az: "öhdəsindən gəlmək",
  },
  {
    id: 2802,
    en: "flame",
    az: "alov",
  },
  {
    id: 2803,
    en: "cluster",
    az: "çoxluq",
  },
  {
    id: 2804,
    en: "wound",
    az: "yara",
  },
  {
    id: 2805,
    en: "dependent",
    az: "asılıdır",
  },
  {
    id: 2806,
    en: "shower",
    az: "duş",
  },
  {
    id: 2807,
    en: "institutional",
    az: "institusional",
  },
  {
    id: 2808,
    en: "depict",
    az: "təsvir etmək",
  },
  {
    id: 2809,
    en: "operating",
    az: "fəaliyyət göstərir",
  },
  {
    id: 2810,
    en: "flesh",
    az: "ət",
  },
  {
    id: 2811,
    en: "garage",
    az: "qaraj",
  },
  {
    id: 2812,
    en: "operator",
    az: "operator",
  },
  {
    id: 2813,
    en: "instructor",
    az: "təlimatçı",
  },
  {
    id: 2814,
    en: "collapse",
    az: "dağılmaq",
  },
  {
    id: 2815,
    en: "borrow",
    az: "borc almaq",
  },
  {
    id: 2816,
    en: "furthermore",
    az: "bundan əlavə",
  },
  {
    id: 2817,
    en: "comedy",
    az: "komediya",
  },
  {
    id: 2818,
    en: "mortgage",
    az: "ipoteka",
  },
  {
    id: 2819,
    en: "sanction",
    az: "sanksiya",
  },
  {
    id: 2820,
    en: "civilian",
    az: "mülki",
  },
  {
    id: 2821,
    en: "twelve",
    az: "on iki",
  },
  {
    id: 2822,
    en: "weekly",
    az: "həftəlik",
  },
  {
    id: 2823,
    en: "habitat",
    az: "yaşayış yeri",
  },
  {
    id: 2824,
    en: "grain",
    az: "taxıl",
  },
  {
    id: 2825,
    en: "brush",
    az: "fırça",
  },
  {
    id: 2826,
    en: "consciousness",
    az: "şüur",
  },
  {
    id: 2827,
    en: "devote",
    az: "həsr etmək",
  },
  {
    id: 2828,
    en: "measurement",
    az: "ölçmə",
  },
  {
    id: 2829,
    en: "province",
    az: "vilayət",
  },
  {
    id: 2830,
    en: "ease",
    az: "rahatlıq",
  },
  {
    id: 2831,
    en: "seize",
    az: "ələ keçirmək",
  },
  {
    id: 2832,
    en: "ethics",
    az: "etik",
  },
  {
    id: 2833,
    en: "nomination",
    az: "nominasiya",
  },
  {
    id: 2834,
    en: "permission",
    az: "icazə",
  },
  {
    id: 2835,
    en: "wise",
    az: "müdrik",
  },
  {
    id: 2836,
    en: "actress",
    az: "aktrisa",
  },
  {
    id: 2837,
    en: "summit",
    az: "zirvə",
  },
  {
    id: 2838,
    en: "acid",
    az: "turşu",
  },
  {
    id: 2839,
    en: "odds",
    az: "bahis",
  },
  {
    id: 2840,
    en: "gifted",
    az: "hədiyyə",
  },
  {
    id: 2841,
    en: "frustration",
    az: "məyusluq",
  },
  {
    id: 2842,
    en: "medium",
    az: "orta",
  },
  {
    id: 2843,
    en: "physically",
    az: "fiziki",
  },
  {
    id: 2844,
    en: "distinguish",
    az: "fərqləndirmək",
  },
  {
    id: 2845,
    en: "shore",
    az: "sahil",
  },
  {
    id: 2846,
    en: "repeatedly",
    az: "dəfələrlə",
  },
  {
    id: 2847,
    en: "lung",
    az: "ağciyər",
  },
  {
    id: 2848,
    en: "running",
    az: "qaçış",
  },
  {
    id: 2849,
    en: "distinct",
    az: "fərqlidir",
  },
  {
    id: 2850,
    en: "artistic",
    az: "bədii",
  },
  {
    id: 2851,
    en: "discourse",
    az: "diskurs",
  },
  {
    id: 2852,
    en: "basket",
    az: "səbət",
  },
  {
    id: 2853,
    en: "fighting",
    az: "döyüşür",
  },
  {
    id: 2854,
    en: "impressive",
    az: "təsir edici",
  },
  {
    id: 2855,
    en: "competitor",
    az: "rəqib",
  },
  {
    id: 2856,
    en: "ugly",
    az: "çirkin",
  },
  {
    id: 2857,
    en: "worried",
    az: "narahat",
  },
  {
    id: 2858,
    en: "portray",
    az: "təsvir etmək",
  },
  {
    id: 2859,
    en: "powder",
    az: "toz",
  },
  {
    id: 2860,
    en: "ghost",
    az: "xəyal",
  },
  {
    id: 2861,
    en: "persuade",
    az: "inandırmaq",
  },
  {
    id: 2862,
    en: "moderate",
    az: "mülayim",
  },
  {
    id: 2863,
    en: "subsequent",
    az: "sonrakı",
  },
  {
    id: 2864,
    en: "continued",
    az: "davam etdi",
  },
  {
    id: 2865,
    en: "cookie",
    az: "peçenye",
  },
  {
    id: 2866,
    en: "carrier",
    az: "daşıyıcı",
  },
  {
    id: 2867,
    en: "cooking",
    az: "yemək",
  },
  {
    id: 2868,
    en: "frequent",
    az: "tez-tez",
  },
  {
    id: 2869,
    en: "ban",
    az: "qadağan",
  },
  {
    id: 2870,
    en: "awful",
    az: "dəhşətli",
  },
  {
    id: 2871,
    en: "admire",
    az: "heyran qalmaq",
  },
  {
    id: 2872,
    en: "pet",
    az: "ev heyvanı",
  },
  {
    id: 2873,
    en: "miracle",
    az: "möcüzə",
  },
  {
    id: 2874,
    en: "exceed",
    az: "aşmaq",
  },
  {
    id: 2875,
    en: "rhythm",
    az: "ritm",
  },
  {
    id: 2876,
    en: "widespread",
    az: "geniş yayılmışdır",
  },
  {
    id: 2877,
    en: "killing",
    az: "öldürən",
  },
  {
    id: 2878,
    en: "lovely",
    az: "sevimli",
  },
  {
    id: 2879,
    en: "sin",
    az: "günah",
  },
  {
    id: 2880,
    en: "charity",
    az: "xeyriyyə",
  },
  {
    id: 2881,
    en: "tactic",
    az: "taktika",
  },
  {
    id: 2882,
    en: "identification",
    az: "şəxsiyyət",
  },
  {
    id: 2883,
    en: "transformation",
    az: "çevrilmə",
  },
  {
    id: 2884,
    en: "everyday",
    az: "hər gün",
  },
  {
    id: 2885,
    en: "headline",
    az: "başlıq",
  },
  {
    id: 2886,
    en: "venture",
    az: "müəssisə",
  },
  {
    id: 2887,
    en: "invasion",
    az: "istila",
  },
  {
    id: 2888,
    en: "nonetheless",
    az: "buna baxmayaraq",
  },
  {
    id: 2889,
    en: "adequate",
    az: "adekvat",
  },
  {
    id: 2890,
    en: "piano",
    az: "fortepiano",
  },
  {
    id: 2891,
    en: "grocery",
    az: "baqqal",
  },
  {
    id: 2892,
    en: "intensity",
    az: "intensivliyi",
  },
  {
    id: 2893,
    en: "exhibit",
    az: "sərgi",
  },
  {
    id: 2894,
    en: "blanket",
    az: "yorğan",
  },
  {
    id: 2895,
    en: "margin",
    az: "marj",
  },
  {
    id: 2896,
    en: "quarterback",
    az: "dörddəbir",
  },
  {
    id: 2897,
    en: "mouse",
    az: "siçan",
  },
  {
    id: 2898,
    en: "rope",
    az: "ip",
  },
  {
    id: 2899,
    en: "concrete",
    az: "beton",
  },
  {
    id: 2900,
    en: "prescription",
    az: "resept",
  },
  {
    id: 2901,
    en: "African-American",
    az: "Afrika-Amerika",
  },
  {
    id: 2902,
    en: "chase",
    az: "təqib etmək",
  },
  {
    id: 2903,
    en: "brick",
    az: "kərpic",
  },
  {
    id: 2904,
    en: "recruit",
    az: "işə götürmək",
  },
  {
    id: 2905,
    en: "patch",
    az: "yamaq",
  },
  {
    id: 2906,
    en: "consensus",
    az: "konsensus",
  },
  {
    id: 2907,
    en: "horror",
    az: "dəhşət",
  },
  {
    id: 2908,
    en: "recording",
    az: "qeyd",
  },
  {
    id: 2909,
    en: "changing",
    az: "dəyişən",
  },
  {
    id: 2910,
    en: "painter",
    az: "rəssam",
  },
  {
    id: 2911,
    en: "colonial",
    az: "müstəmləkə",
  },
  {
    id: 2912,
    en: "pie",
    az: "pasta",
  },
  {
    id: 2913,
    en: "sake",
    az: "xatirinə",
  },
  {
    id: 2914,
    en: "gaze",
    az: "baxış",
  },
  {
    id: 2915,
    en: "courage",
    az: "cəsarət",
  },
  {
    id: 2916,
    en: "pregnancy",
    az: "hamiləlik",
  },
  {
    id: 2917,
    en: "swear",
    az: "and içmək",
  },
  {
    id: 2918,
    en: "defeat",
    az: "məğlub etmək",
  },
  {
    id: 2919,
    en: "clue",
    az: "ipucu",
  },
  {
    id: 2920,
    en: "reinforce",
    az: "gücləndirmək",
  },
  {
    id: 2921,
    en: "confusion",
    az: "qarışıqlıq",
  },
  {
    id: 2922,
    en: "slice",
    az: "dilim",
  },
  {
    id: 2923,
    en: "occupation",
    az: "işğal",
  },
  {
    id: 2924,
    en: "dear",
    az: "Əziz",
  },
  {
    id: 2925,
    en: "coal",
    az: "kömür",
  },
  {
    id: 2926,
    en: "sacred",
    az: "müqəddəs",
  },
  {
    id: 2927,
    en: "formula",
    az: "düstur",
  },
  {
    id: 2928,
    en: "cognitive",
    az: "idraklı",
  },
  {
    id: 2929,
    en: "collective",
    az: "kollektiv",
  },
  {
    id: 2930,
    en: "exact",
    az: "dəqiq",
  },
  {
    id: 2931,
    en: "uncle",
    az: "əmi",
  },
  {
    id: 2932,
    en: "captain",
    az: "kapitan",
  },
  {
    id: 2933,
    en: "sigh",
    az: "ah çəkmək",
  },
  {
    id: 2934,
    en: "attribute",
    az: "atributu",
  },
  {
    id: 2935,
    en: "dare",
    az: "cəsarət etmək",
  },
  {
    id: 2936,
    en: "homeless",
    az: "evsiz",
  },
  {
    id: 2937,
    en: "gallery",
    az: "qalereya",
  },
  {
    id: 2938,
    en: "soccer",
    az: "futbol",
  },
  {
    id: 2939,
    en: "defendant",
    az: "müttəhim",
  },
  {
    id: 2940,
    en: "tunnel",
    az: "tunel",
  },
  {
    id: 2941,
    en: "fitness",
    az: "fitnes",
  },
  {
    id: 2942,
    en: "lap",
    az: "qucaqlamaq",
  },
  {
    id: 2943,
    en: "grave",
    az: "qəbir",
  },
  {
    id: 2944,
    en: "toe",
    az: "ayaq",
  },
  {
    id: 2945,
    en: "container",
    az: "konteyner",
  },
  {
    id: 2946,
    en: "virtue",
    az: "fəzilət",
  },
  {
    id: 2947,
    en: "abroad",
    az: "xaricdə",
  },
  {
    id: 2948,
    en: "architect",
    az: "memar",
  },
  {
    id: 2949,
    en: "dramatically",
    az: "kəskin şəkildə",
  },
  {
    id: 2950,
    en: "makeup",
    az: "makiyaj",
  },
  {
    id: 2951,
    en: "inquiry",
    az: "sorğu",
  },
  {
    id: 2952,
    en: "rose",
    az: "gül",
  },
  {
    id: 2953,
    en: "surprisingly",
    az: "təəccüblü",
  },
  {
    id: 2954,
    en: "highlight",
    az: "vurğulamaq",
  },
  {
    id: 2955,
    en: "decrease",
    az: "azalmaq",
  },
  {
    id: 2956,
    en: "indication",
    az: "göstəriş",
  },
  {
    id: 2957,
    en: "rail",
    az: "dəmir yolu",
  },
  {
    id: 2958,
    en: "anniversary",
    az: "ildönümü",
  },
  {
    id: 2959,
    en: "couch",
    az: "taxt",
  },
  {
    id: 2960,
    en: "alliance",
    az: "ittifaq",
  },
  {
    id: 2961,
    en: "hypothesis",
    az: "fərziyyə",
  },
  {
    id: 2962,
    en: "boyfriend",
    az: "sevgilim",
  },
  {
    id: 2963,
    en: "compose",
    az: "bəstələmək",
  },
  {
    id: 2964,
    en: "mess",
    az: "qarışıqlıq",
  },
  {
    id: 2965,
    en: "legend",
    az: "əfsanə",
  },
  {
    id: 2966,
    en: "regulate",
    az: "tənzimləmək",
  },
  {
    id: 2967,
    en: "adolescent",
    az: "yetkin",
  },
  {
    id: 2968,
    en: "shine",
    az: "parlaq",
  },
  {
    id: 2969,
    en: "norm",
    az: "norma",
  },
  {
    id: 2970,
    en: "upset",
    az: "üzülmək",
  },
  {
    id: 2971,
    en: "remark",
    az: "qeyd",
  },
  {
    id: 2972,
    en: "resign",
    az: "istefa",
  },
  {
    id: 2973,
    en: "reward",
    az: "mükafat",
  },
  {
    id: 2974,
    en: "gentle",
    az: "incə",
  },
  {
    id: 2975,
    en: "related",
    az: "bağlıdır",
  },
  {
    id: 2976,
    en: "organ",
    az: "orqan",
  },
  {
    id: 2977,
    en: "lightly",
    az: "yüngülcə",
  },
  {
    id: 2978,
    en: "concerning",
    az: "ilə bağlı",
  },
  {
    id: 2979,
    en: "invent",
    az: "icad et",
  },
  {
    id: 2980,
    en: "laughter",
    az: "gülüş",
  },
  {
    id: 2981,
    en: "northwest",
    az: "şimal qərb",
  },
  {
    id: 2982,
    en: "counseling",
    az: "məsləhət",
  },
  {
    id: 2983,
    en: "receiver",
    az: "qəbuledici",
  },
  {
    id: 2984,
    en: "ritual",
    az: "ritual",
  },
  {
    id: 2985,
    en: "insect",
    az: "həşərat",
  },
  {
    id: 2986,
    en: "interrupt",
    az: "kəsmək",
  },
  {
    id: 2987,
    en: "salmon",
    az: "qızılbalıq",
  },
  {
    id: 2988,
    en: "trading",
    az: "ticarət",
  },
  {
    id: 2989,
    en: "magic",
    az: "sehrli",
  },
  {
    id: 2990,
    en: "superior",
    az: "üstündür",
  },
  {
    id: 2991,
    en: "stem",
    az: "kök",
  },
  {
    id: 2992,
    en: "surgeon",
    az: "cərrah",
  },
  {
    id: 2993,
    en: "acceptable",
    az: "məqbuldur",
  },
  {
    id: 2994,
    en: "physics",
    az: "fizika",
  },
  {
    id: 2995,
    en: "rape",
    az: "zorlama",
  },
  {
    id: 2996,
    en: "counsel",
    az: "nəsihət",
  },
  {
    id: 2997,
    en: "jeans",
    az: "jeans",
  },
  {
    id: 2998,
    en: "hunt",
    az: "ovlamaq",
  },
  {
    id: 2999,
    en: "continuous",
    az: "davamlı",
  },
  {
    id: 3000,
    en: "echo",
    az: "əks-səda",
  },
  {
    id: 3001,
    en: "pill",
    az: "həb",
  },
  {
    id: 3002,
    en: "excited",
    az: "həyəcanlandı",
  },
  {
    id: 3003,
    en: "sculpture",
    az: "heykəl",
  },
  {
    id: 3004,
    en: "compound",
    az: "mürəkkəb",
  },
  {
    id: 3005,
    en: "integrate",
    az: "inteqrasiya etmək",
  },
  {
    id: 3006,
    en: "flour",
    az: "un",
  },
  {
    id: 3007,
    en: "bitter",
    az: "acı",
  },
  {
    id: 3008,
    en: "bare",
    az: "çılpaq",
  },
  {
    id: 3009,
    en: "slope",
    az: "yamac",
  },
  {
    id: 3010,
    en: "rent",
    az: "icarə",
  },
  {
    id: 3011,
    en: "presidency",
    az: "prezidentlik",
  },
  {
    id: 3012,
    en: "serving",
    az: "xidmət edir",
  },
  {
    id: 3013,
    en: "subtle",
    az: "incə",
  },
  {
    id: 3014,
    en: "greatly",
    az: "böyük dərəcədə",
  },
  {
    id: 3015,
    en: "bishop",
    az: "yepiskop",
  },
  {
    id: 3016,
    en: "drinking",
    az: "içmək",
  },
  {
    id: 3017,
    en: "acceptance",
    az: "qəbul",
  },
  {
    id: 3018,
    en: "pump",
    az: "nasos",
  },
  {
    id: 3019,
    en: "candy",
    az: "konfet",
  },
  {
    id: 3020,
    en: "evil",
    az: "pis",
  },
  {
    id: 3021,
    en: "pleased",
    az: "məmnun",
  },
  {
    id: 3022,
    en: "medal",
    az: "medal",
  },
  {
    id: 3023,
    en: "beg",
    az: "yalvarmaq",
  },
  {
    id: 3024,
    en: "sponsor",
    az: "sponsor",
  },
  {
    id: 3025,
    en: "ethical",
    az: "etik",
  },
  {
    id: 3026,
    en: "secondary",
    az: "orta",
  },
  {
    id: 3027,
    en: "slam",
    az: "slam",
  },
  {
    id: 3028,
    en: "export",
    az: "ixrac",
  },
  {
    id: 3029,
    en: "experimental",
    az: "eksperimental",
  },
  {
    id: 3030,
    en: "melt",
    az: "əridir",
  },
  {
    id: 3031,
    en: "midnight",
    az: "gecə yarısı",
  },
  {
    id: 3032,
    en: "curve",
    az: "əyri",
  },
  {
    id: 3033,
    en: "integrity",
    az: "bütövlüyü",
  },
  {
    id: 3034,
    en: "entitle",
    az: "hüququ",
  },
  {
    id: 3035,
    en: "evident",
    az: "aşkar",
  },
  {
    id: 3036,
    en: "logic",
    az: "məntiq",
  },
  {
    id: 3037,
    en: "essence",
    az: "mahiyyəti",
  },
  {
    id: 3038,
    en: "exclude",
    az: "xaric etmək",
  },
  {
    id: 3039,
    en: "harsh",
    az: "sərt",
  },
  {
    id: 3040,
    en: "closet",
    az: "gizli",
  },
  {
    id: 3041,
    en: "suburban",
    az: "şəhərətrafı",
  },
  {
    id: 3042,
    en: "greet",
    az: "salamlayin",
  },
  {
    id: 3043,
    en: "interior",
    az: "daxili",
  },
  {
    id: 3044,
    en: "corridor",
    az: "dəhliz",
  },
  {
    id: 3045,
    en: "retail",
    az: "pərakəndə",
  },
  {
    id: 3046,
    en: "pitcher",
    az: "küp",
  },
  {
    id: 3047,
    en: "march",
    az: "mart",
  },
  {
    id: 3048,
    en: "snake",
    az: "ilan",
  },
  {
    id: 3049,
    en: "excuse",
    az: "bəhanə",
  },
  {
    id: 3050,
    en: "weakness",
    az: "zəiflik",
  },
  {
    id: 3051,
    en: "pig",
    az: "donuz",
  },
  {
    id: 3052,
    en: "classical",
    az: "klassik",
  },
  {
    id: 3053,
    en: "estimated",
    az: "təxmini",
  },
  {
    id: 3054,
    en: "T-shirt",
    az: "T-shirt",
  },
  {
    id: 3055,
    en: "unemployment",
    az: "işsizlik",
  },
  {
    id: 3056,
    en: "civilization",
    az: "sivilizasiya",
  },
  {
    id: 3057,
    en: "fold",
    az: "qatlanmaq",
  },
  {
    id: 3058,
    en: "reverse",
    az: "tərs",
  },
  {
    id: 3059,
    en: "missing",
    az: "itkin",
  },
  {
    id: 3060,
    en: "correlation",
    az: "korrelyasiya",
  },
  {
    id: 3061,
    en: "humanity",
    az: "insanlıq",
  },
  {
    id: 3062,
    en: "flash",
    az: "flaş",
  },
  {
    id: 3063,
    en: "developer",
    az: "inkişaf etdirici",
  },
  {
    id: 3064,
    en: "reliable",
    az: "etibarlıdır",
  },
  {
    id: 3065,
    en: "excitement",
    az: "həyəcan",
  },
  {
    id: 3066,
    en: "beef",
    az: "mal əti",
  },
  {
    id: 3067,
    en: "Islam",
    az: "İslam",
  },
  {
    id: 3068,
    en: "Roman",
    az: "Roman",
  },
  {
    id: 3069,
    en: "architecture",
    az: "memarlıq",
  },
  {
    id: 3070,
    en: "occasional",
    az: "təsadüfi",
  },
  {
    id: 3071,
    en: "administrative",
    az: "inzibati",
  },
  {
    id: 3072,
    en: "elbow",
    az: "dirsək",
  },
  {
    id: 3073,
    en: "deadly",
    az: "ölümcül",
  },
  {
    id: 3074,
    en: "Hispanic",
    az: "İspan",
  },
  {
    id: 3075,
    en: "allegation",
    az: "iddiası",
  },
  {
    id: 3076,
    en: "confuse",
    az: "qarışıq e",
  },
  {
    id: 3077,
    en: "airplane",
    az: "təyyarə",
  },
  {
    id: 3078,
    en: "monthly",
    az: "aylıq",
  },
  {
    id: 3079,
    en: "duck",
    az: "ördək",
  },
  {
    id: 3080,
    en: "dose",
    az: "doza",
  },
  {
    id: 3081,
    en: "Korean",
    az: "Koreyalı",
  },
  {
    id: 3082,
    en: "plead",
    az: "yalvarmaq",
  },
  {
    id: 3083,
    en: "initiate",
    az: "təşəbbüs etmək",
  },
  {
    id: 3084,
    en: "lecture",
    az: "mühazirə",
  },
  {
    id: 3085,
    en: "van",
    az: "mikroavtobus",
  },
  {
    id: 3086,
    en: "sixth",
    az: "altıncı",
  },
  {
    id: 3087,
    en: "bay",
    az: "bəy",
  },
  {
    id: 3088,
    en: "mainstream",
    az: "əsas",
  },
  {
    id: 3089,
    en: "suburb",
    az: "şəhərətrafı",
  },
  {
    id: 3090,
    en: "sandwich",
    az: "sendviç",
  },
  {
    id: 3091,
    en: "trunk",
    az: "magistral",
  },
  {
    id: 3092,
    en: "rumor",
    az: "şayiə",
  },
  {
    id: 3093,
    en: "implementation",
    az: "həyata keçirilməsi",
  },
  {
    id: 3094,
    en: "motivate",
    az: "həvəsləndirmək",
  },
  {
    id: 3095,
    en: "render",
    az: "göstərmək",
  },
  {
    id: 3096,
    en: "longtime",
    az: "uzun müddət",
  },
  {
    id: 3097,
    en: "trap",
    az: "tələ",
  },
  {
    id: 3098,
    en: "restrict",
    az: "məhdudlaşdırmaq",
  },
  {
    id: 3099,
    en: "cloth",
    az: "parça",
  },
  {
    id: 3100,
    en: "seemingly",
    az: "zahirən",
  },
  {
    id: 3101,
    en: "legislative",
    az: "qanunverici",
  },
  {
    id: 3102,
    en: "effectiveness",
    az: "səmərəliliyi",
  },
  {
    id: 3103,
    en: "enforce",
    az: "tətbiq etmək",
  },
  {
    id: 3104,
    en: "lens",
    az: "lens",
  },
  {
    id: 3105,
    en: "inspector",
    az: "müfəttiş",
  },
  {
    id: 3106,
    en: "lend",
    az: "borc vermək",
  },
  {
    id: 3107,
    en: "plain",
    az: "düzənlik",
  },
  {
    id: 3108,
    en: "fraud",
    az: "fırıldaqçılıq",
  },
  {
    id: 3109,
    en: "companion",
    az: "yoldaş",
  },
  {
    id: 3110,
    en: "contend",
    az: "mübahisə etmək",
  },
  {
    id: 3111,
    en: "nail",
    az: "dırnaq",
  },
  {
    id: 3112,
    en: "array",
    az: "serial",
  },
  {
    id: 3113,
    en: "strict",
    az: "sərt",
  },
  {
    id: 3114,
    en: "assemble",
    az: "toplaşmaq",
  },
  {
    id: 3115,
    en: "frankly",
    az: "səmimi deyim",
  },
  {
    id: 3116,
    en: "rat",
    az: "siçovul",
  },
  {
    id: 3117,
    en: "burst",
    az: "partlamaq",
  },
  {
    id: 3118,
    en: "hallway",
    az: "koridor",
  },
  {
    id: 3119,
    en: "cave",
    az: "mağara",
  },
  {
    id: 3120,
    en: "inevitable",
    az: "qaçılmaz",
  },
  {
    id: 3121,
    en: "southwest",
    az: "cənub-qərb",
  },
  {
    id: 3122,
    en: "monster",
    az: "canavar",
  },
  {
    id: 3123,
    en: "unexpected",
    az: "gözlənilməz",
  },
  {
    id: 3124,
    en: "obstacle",
    az: "maneə",
  },
  {
    id: 3125,
    en: "facilitate",
    az: "asanlaşdırmaq",
  },
  {
    id: 3126,
    en: "herb",
    az: "ot",
  },
  {
    id: 3127,
    en: "overwhelming",
    az: "Əzici",
  },
  {
    id: 3128,
    en: "integration",
    az: "inteqrasiya",
  },
  {
    id: 3129,
    en: "crystal",
    az: "büllur",
  },
  {
    id: 3130,
    en: "recession",
    az: "tənəzzül",
  },
  {
    id: 3131,
    en: "written",
    az: "yazılıb",
  },
  {
    id: 3132,
    en: "motive",
    az: "motivli",
  },
  {
    id: 3133,
    en: "flood",
    az: "sel",
  },
  {
    id: 3134,
    en: "pen",
    az: "qələm",
  },
  {
    id: 3135,
    en: "ownership",
    az: "sahiblik",
  },
  {
    id: 3136,
    en: "nightmare",
    az: "kabus",
  },
  {
    id: 3137,
    en: "inspection",
    az: "müayinə",
  },
  {
    id: 3138,
    en: "supervisor",
    az: "nəzarətçi",
  },
  {
    id: 3139,
    en: "consult",
    az: "məsləhətləşin",
  },
  {
    id: 3140,
    en: "arena",
    az: "arena",
  },
  {
    id: 3141,
    en: "diagnosis",
    az: "diaqnoz",
  },
  {
    id: 3142,
    en: "possession",
    az: "sahiblik",
  },
  {
    id: 3143,
    en: "forgive",
    az: "bağışla",
  },
  {
    id: 3144,
    en: "consistently",
    az: "ardıcıl olaraq",
  },
  {
    id: 3145,
    en: "basement",
    az: "zirzəmi",
  },
  {
    id: 3146,
    en: "drift",
    az: "sürüşmək",
  },
  {
    id: 3147,
    en: "drain",
    az: "qurutmaq",
  },
  {
    id: 3148,
    en: "prosecution",
    az: "ittiham",
  },
  {
    id: 3149,
    en: "maximum",
    az: "maksimum",
  },
  {
    id: 3150,
    en: "announcement",
    az: "elan",
  },
  {
    id: 3151,
    en: "warrior",
    az: "döyüşçü",
  },
  {
    id: 3152,
    en: "prediction",
    az: "proqnozlaşdırma",
  },
  {
    id: 3153,
    en: "bacteria",
    az: "bakteriya",
  },
  {
    id: 3154,
    en: "questionnaire",
    az: "anket",
  },
  {
    id: 3155,
    en: "mud",
    az: "palçıq",
  },
  {
    id: 3156,
    en: "infrastructure",
    az: "infrastruktur",
  },
  {
    id: 3157,
    en: "hurry",
    az: "tələsmək",
  },
  {
    id: 3158,
    en: "privilege",
    az: "imtiyaz",
  },
  {
    id: 3159,
    en: "temple",
    az: "məbəd",
  },
  {
    id: 3160,
    en: "outdoor",
    az: "bayır",
  },
  {
    id: 3161,
    en: "suck",
    az: "əmmək",
  },
  {
    id: 3162,
    en: "and/or",
    az: "və / və ya",
  },
  {
    id: 3163,
    en: "broadcast",
    az: "yayımlandı",
  },
  {
    id: 3164,
    en: "re",
    az: "yenidən",
  },
  {
    id: 3165,
    en: "leap",
    az: "sıçrayış",
  },
  {
    id: 3166,
    en: "random",
    az: "təsadüfi",
  },
  {
    id: 3167,
    en: "wrist",
    az: "bilək",
  },
  {
    id: 3168,
    en: "curtain",
    az: "pərdə",
  },
  {
    id: 3169,
    en: "pond",
    az: "gölməçə",
  },
  {
    id: 3170,
    en: "domain",
    az: "domen",
  },
  {
    id: 3171,
    en: "guilt",
    az: "təqsir",
  },
  {
    id: 3172,
    en: "cattle",
    az: "mal-qara",
  },
  {
    id: 3173,
    en: "walking",
    az: "gəzinti",
  },
  {
    id: 3174,
    en: "playoff",
    az: "pley-off",
  },
  {
    id: 3175,
    en: "minimum",
    az: "minimum",
  },
  {
    id: 3176,
    en: "fiscal",
    az: "maliyyə",
  },
  {
    id: 3177,
    en: "skirt",
    az: "ətək",
  },
  {
    id: 3178,
    en: "dump",
    az: "tökmək",
  },
  {
    id: 3179,
    en: "hence",
    az: "deməli",
  },
  {
    id: 3180,
    en: "database",
    az: "verilənlər bazası",
  },
  {
    id: 3181,
    en: "uncomfortable",
    az: "narahatdır",
  },
  {
    id: 3182,
    en: "execute",
    az: "icra etmək",
  },
  {
    id: 3183,
    en: "limb",
    az: "əza",
  },
  {
    id: 3184,
    en: "ideology",
    az: "ideologiya",
  },
  {
    id: 3185,
    en: "continuing",
    az: "davam edir",
  },
  {
    id: 3186,
    en: "harm",
    az: "zərər",
  },
  {
    id: 3187,
    en: "railroad",
    az: "dəmir yolu",
  },
  {
    id: 3188,
    en: "endure",
    az: "dözmək",
  },
  {
    id: 3189,
    en: "radiation",
    az: "radiasiya",
  },
  {
    id: 3190,
    en: "horn",
    az: "buynuz",
  },
  {
    id: 3191,
    en: "chronic",
    az: "xroniki",
  },
  {
    id: 3192,
    en: "peaceful",
    az: "dinc",
  },
  {
    id: 3193,
    en: "innovation",
    az: "yenilik",
  },
  {
    id: 3194,
    en: "strain",
    az: "gərginlik",
  },
  {
    id: 3195,
    en: "guitar",
    az: "gitara",
  },
  {
    id: 3196,
    en: "replacement",
    az: "yerdəyişmə",
  },
  {
    id: 3197,
    en: "behave",
    az: "davranmaq",
  },
  {
    id: 3198,
    en: "administer",
    az: "idarə etmək",
  },
  {
    id: 3199,
    en: "dancer",
    az: "rəqqasə",
  },
  {
    id: 3200,
    en: "amendment",
    az: "düzəliş",
  },
  {
    id: 3201,
    en: "transmission",
    az: "Transmissiya",
  },
  {
    id: 3202,
    en: "await",
    az: "gözləmək",
  },
  {
    id: 3203,
    en: "retired",
    az: "təqaüdçü",
  },
  {
    id: 3204,
    en: "trigger",
    az: "tetikleyici",
  },
  {
    id: 3205,
    en: "spill",
    az: "tökülmək",
  },
  {
    id: 3206,
    en: "grateful",
    az: "minnətdaram",
  },
  {
    id: 3207,
    en: "grace",
    az: "lütf",
  },
  {
    id: 3208,
    en: "virtual",
    az: "virtual",
  },
  {
    id: 3209,
    en: "colony",
    az: "koloniya",
  },
  {
    id: 3210,
    en: "adoption",
    az: "övladlığa götürmə",
  },
  {
    id: 3211,
    en: "indigenous",
    az: "yerli",
  },
  {
    id: 3212,
    en: "closed",
    az: "Bağlı",
  },
  {
    id: 3213,
    en: "convict",
    az: "məhkum",
  },
  {
    id: 3214,
    en: "towel",
    az: "dəsmal",
  },
  {
    id: 3215,
    en: "modify",
    az: "dəyişdirmək",
  },
  {
    id: 3216,
    en: "particle",
    az: "hissəcik",
  },
  {
    id: 3217,
    en: "prize",
    az: "Hədiyyə",
  },
  {
    id: 3218,
    en: "landing",
    az: "eniş",
  },
  {
    id: 3219,
    en: "boost",
    az: "təkan",
  },
  {
    id: 3220,
    en: "bat",
    az: "yarasa",
  },
  {
    id: 3221,
    en: "alarm",
    az: "siqnalizasiya",
  },
  {
    id: 3222,
    en: "festival",
    az: "festival",
  },
  {
    id: 3223,
    en: "grip",
    az: "tutmaq",
  },
  {
    id: 3224,
    en: "weird",
    az: "qəribə",
  },
  {
    id: 3225,
    en: "undermine",
    az: "sarsıtmaq",
  },
  {
    id: 3226,
    en: "freshman",
    az: "təzə gələn",
  },
  {
    id: 3227,
    en: "sweat",
    az: "tərləmə",
  },
  {
    id: 3228,
    en: "outer",
    az: "xarici",
  },
  {
    id: 3229,
    en: "drunk",
    az: "sərxoş",
  },
  {
    id: 3230,
    en: "separation",
    az: "ayrılıq",
  },
  {
    id: 3231,
    en: "traditionally",
    az: "ənənəvi olaraq",
  },
  {
    id: 3232,
    en: "govern",
    az: "idarə etmək",
  },
  {
    id: 3233,
    en: "southeast",
    az: "cənub-şərqdə",
  },
  {
    id: 3234,
    en: "intelligent",
    az: "ağıllı",
  },
  {
    id: 3235,
    en: "wherever",
    az: "hər yerdə",
  },
  {
    id: 3236,
    en: "ballot",
    az: "səsvermə",
  },
  {
    id: 3237,
    en: "rhetoric",
    az: "ritorika",
  },
  {
    id: 3238,
    en: "convinced",
    az: "razı",
  },
  {
    id: 3239,
    en: "driving",
    az: "sürücülük",
  },
  {
    id: 3240,
    en: "vitamin",
    az: "vitamin",
  },
  {
    id: 3241,
    en: "enthusiasm",
    az: "həvəs",
  },
  {
    id: 3242,
    en: "accommodate",
    az: "yerləşdirmək",
  },
  {
    id: 3243,
    en: "praise",
    az: "tərifləmək",
  },
  {
    id: 3244,
    en: "injure",
    az: "xəsarət almaq",
  },
  {
    id: 3245,
    en: "wilderness",
    az: "səhralıq",
  },
  {
    id: 3246,
    en: "endless",
    az: "sonsuz",
  },
  {
    id: 3247,
    en: "mandate",
    az: "mandat",
  },
  {
    id: 3248,
    en: "respectively",
    az: "müvafiq olaraq",
  },
  {
    id: 3249,
    en: "uncertainty",
    az: "qeyri-müəyyənlik",
  },
  {
    id: 3250,
    en: "chaos",
    az: "xaos",
  },
  {
    id: 3251,
    en: "mechanical",
    az: "mexaniki",
  },
  {
    id: 3252,
    en: "canvas",
    az: "kətan",
  },
  {
    id: 3253,
    en: "forty",
    az: "qırx",
  },
  {
    id: 3254,
    en: "lobby",
    az: "lobbi",
  },
  {
    id: 3255,
    en: "profound",
    az: "dərin",
  },
  {
    id: 3256,
    en: "format",
    az: "format",
  },
  {
    id: 3257,
    en: "trait",
    az: "xasiyyət",
  },
  {
    id: 3258,
    en: "currency",
    az: "Valyuta",
  },
  {
    id: 3259,
    en: "turkey",
    az: "hinduşka",
  },
  {
    id: 3260,
    en: "reserve",
    az: "ehtiyat",
  },
  {
    id: 3261,
    en: "beam",
    az: "şüa",
  },
  {
    id: 3262,
    en: "astronomer",
    az: "astronom",
  },
  {
    id: 3263,
    en: "corruption",
    az: "korrupsiya",
  },
  {
    id: 3264,
    en: "contractor",
    az: "podratçı",
  },
  {
    id: 3265,
    en: "apologize",
    az: "üzr istəmək",
  },
  {
    id: 3266,
    en: "doctrine",
    az: "Doktrina",
  },
  {
    id: 3267,
    en: "genuine",
    az: "həqiqi",
  },
  {
    id: 3268,
    en: "thumb",
    az: "baş barmağı",
  },
  {
    id: 3269,
    en: "unity",
    az: "birlik",
  },
  {
    id: 3270,
    en: "compromise",
    az: "güzəştə getmək",
  },
  {
    id: 3271,
    en: "horrible",
    az: "dəhşətli",
  },
  {
    id: 3272,
    en: "behavioral",
    az: "davranış",
  },
  {
    id: 3273,
    en: "exclusive",
    az: "eksklüziv",
  },
  {
    id: 3274,
    en: "scatter",
    az: "dağılmaq",
  },
  {
    id: 3275,
    en: "commonly",
    az: "ümumiyyətlə",
  },
  {
    id: 3276,
    en: "convey",
    az: "çatdırmaq",
  },
  {
    id: 3277,
    en: "twist",
    az: "bükmək",
  },
  {
    id: 3278,
    en: "complexity",
    az: "mürəkkəblik",
  },
  {
    id: 3279,
    en: "fork",
    az: "çəngəl",
  },
  {
    id: 3280,
    en: "disk",
    az: "disk",
  },
  {
    id: 3281,
    en: "relieve",
    az: "rahatlaşdırmaq",
  },
  {
    id: 3282,
    en: "suspicion",
    az: "şübhə",
  },
  {
    id: 3283,
    en: "health-care",
    az: "sağlamlıq",
  },
  {
    id: 3284,
    en: "residence",
    az: "yaşayış yeri",
  },
  {
    id: 3285,
    en: "shame",
    az: "ayıb",
  },
  {
    id: 3286,
    en: "meaningful",
    az: "mənalı",
  },
  {
    id: 3287,
    en: "sidewalk",
    az: "səkiyə",
  },
  {
    id: 3288,
    en: "Olympics",
    az: "Olimpiya",
  },
  {
    id: 3289,
    en: "technological",
    az: "texnoloji",
  },
  {
    id: 3290,
    en: "signature",
    az: "imza",
  },
  {
    id: 3291,
    en: "pleasant",
    az: "xoş",
  },
  {
    id: 3292,
    en: "wow",
    az: "Heyrət! Vay",
  },
  {
    id: 3293,
    en: "suspend",
    az: "dayandırmaq",
  },
  {
    id: 3294,
    en: "rebel",
    az: "üsyançı",
  },
  {
    id: 3295,
    en: "frozen",
    az: "donmuş",
  },
  {
    id: 3296,
    en: "spouse",
    az: "həyat yoldaşı",
  },
  {
    id: 3297,
    en: "fluid",
    az: "maye",
  },
  {
    id: 3298,
    en: "resume",
    az: "xülasə",
  },
  {
    id: 3299,
    en: "theoretical",
    az: "nəzəri",
  },
  {
    id: 3300,
    en: "sodium",
    az: "natrium",
  },
  {
    id: 3301,
    en: "promotion",
    az: "təşviqi",
  },
  {
    id: 3302,
    en: "delicate",
    az: "incə",
  },
  {
    id: 3303,
    en: "forehead",
    az: "aln",
  },
  {
    id: 3304,
    en: "rebuild",
    az: "yenidən qurmaq",
  },
  {
    id: 3305,
    en: "bounce",
    az: "sıçramaq",
  },
  {
    id: 3306,
    en: "electrical",
    az: "elektrik",
  },
  {
    id: 3307,
    en: "hook",
    az: "çəngəl",
  },
  {
    id: 3308,
    en: "detective",
    az: "dedektiv",
  },
  {
    id: 3309,
    en: "traveler",
    az: "səyyah",
  },
  {
    id: 3310,
    en: "click",
    az: "vurun",
  },
  {
    id: 3311,
    en: "compensation",
    az: "kompensasiya",
  },
  {
    id: 3312,
    en: "exit",
    az: "çıxmaq",
  },
  {
    id: 3313,
    en: "attraction",
    az: "cazibə",
  },
  {
    id: 3314,
    en: "dedicate",
    az: "həsr etmək",
  },
  {
    id: 3315,
    en: "altogether",
    az: "ümumilikdə",
  },
  {
    id: 3316,
    en: "pickup",
    az: "alma",
  },
  {
    id: 3317,
    en: "carve",
    az: "oymaq",
  },
  {
    id: 3318,
    en: "needle",
    az: "iynə",
  },
  {
    id: 3319,
    en: "belly",
    az: "qarın",
  },
  {
    id: 3320,
    en: "scare",
    az: "qorxutmaq",
  },
  {
    id: 3321,
    en: "portfolio",
    az: "portfeli",
  },
  {
    id: 3322,
    en: "shuttle",
    az: "servis",
  },
  {
    id: 3323,
    en: "invisible",
    az: "görünməz",
  },
  {
    id: 3324,
    en: "timing",
    az: "vaxtı",
  },
  {
    id: 3325,
    en: "engagement",
    az: "nişan",
  },
  {
    id: 3326,
    en: "ankle",
    az: "ayaq biləyi",
  },
  {
    id: 3327,
    en: "transaction",
    az: "əməliyyat",
  },
  {
    id: 3328,
    en: "rescue",
    az: "xilasetmə",
  },
  {
    id: 3329,
    en: "counterpart",
    az: "həmkarı",
  },
  {
    id: 3330,
    en: "historically",
    az: "tarixən",
  },
  {
    id: 3331,
    en: "firmly",
    az: "möhkəm",
  },
  {
    id: 3332,
    en: "mild",
    az: "mülayim",
  },
  {
    id: 3333,
    en: "rider",
    az: "atlı",
  },
  {
    id: 3334,
    en: "doll",
    az: "kukla",
  },
  {
    id: 3335,
    en: "noon",
    az: "günorta",
  },
  {
    id: 3336,
    en: "amid",
    az: "arasında",
  },
  {
    id: 3337,
    en: "identical",
    az: "eynidir",
  },
  {
    id: 3338,
    en: "precise",
    az: "dəqiq",
  },
  {
    id: 3339,
    en: "anxious",
    az: "narahat",
  },
  {
    id: 3340,
    en: "structural",
    az: "struktur",
  },
  {
    id: 3341,
    en: "residential",
    az: "yaşayış",
  },
  {
    id: 3342,
    en: "diagnose",
    az: "diaqnoz qoyun",
  },
  {
    id: 3343,
    en: "carbohydrate",
    az: "karbohidrat",
  },
  {
    id: 3344,
    en: "liberty",
    az: "azadlıq",
  },
  {
    id: 3345,
    en: "poster",
    az: "Afişa",
  },
  {
    id: 3346,
    en: "theology",
    az: "ilahiyyat",
  },
  {
    id: 3347,
    en: "nonprofit",
    az: "qeyri-kommersiya",
  },
  {
    id: 3348,
    en: "crawl",
    az: "sürünmək",
  },
  {
    id: 3349,
    en: "oxygen",
    az: "oksigen",
  },
  {
    id: 3350,
    en: "handsome",
    az: "yaraşıqlı",
  },
  {
    id: 3351,
    en: "sum",
    az: "cəmi",
  },
  {
    id: 3352,
    en: "provided",
    az: "təmin olunur",
  },
  {
    id: 3353,
    en: "businessman",
    az: "iş adamı",
  },
  {
    id: 3354,
    en: "promising",
    az: "vəd verən",
  },
  {
    id: 3355,
    en: "conscious",
    az: "şüurlu",
  },
  {
    id: 3356,
    en: "determination",
    az: "qətiyyət",
  },
  {
    id: 3357,
    en: "donor",
    az: "donor",
  },
  {
    id: 3358,
    en: "hers",
    az: "onun",
  },
  {
    id: 3359,
    en: "jazz",
    az: "caz",
  },
  {
    id: 3360,
    en: "opera",
    az: "opera",
  },
  {
    id: 3361,
    en: "acquisition",
    az: "əldə edilməsi",
  },
  {
    id: 3362,
    en: "pit",
    az: "çuxur",
  },
  {
    id: 3363,
    en: "hug",
    az: "qucaqlamaq",
  },
  {
    id: 3364,
    en: "wildlife",
    az: "vəhşi təbiət",
  },
  {
    id: 3365,
    en: "punish",
    az: "cəzalandırmaq",
  },
  {
    id: 3366,
    en: "equity",
    az: "kapital",
  },
  {
    id: 3367,
    en: "doorway",
    az: "qapı",
  },
  {
    id: 3368,
    en: "departure",
    az: "gediş",
  },
  {
    id: 3369,
    en: "elevator",
    az: "lift",
  },
  {
    id: 3370,
    en: "teenage",
    az: "yeniyetmə",
  },
  {
    id: 3371,
    en: "guidance",
    az: "rəhbərlik",
  },
  {
    id: 3372,
    en: "happiness",
    az: "xoşbəxtlik",
  },
  {
    id: 3373,
    en: "statue",
    az: "heykəli",
  },
  {
    id: 3374,
    en: "pursuit",
    az: "təqib",
  },
  {
    id: 3375,
    en: "repair",
    az: "təmir",
  },
  {
    id: 3376,
    en: "decent",
    az: "layiqli",
  },
  {
    id: 3377,
    en: "gym",
    az: "idman zalı",
  },
  {
    id: 3378,
    en: "oral",
    az: "şifahi",
  },
  {
    id: 3379,
    en: "clerk",
    az: "vəzir",
  },
  {
    id: 3380,
    en: "envelope",
    az: "zərf",
  },
  {
    id: 3381,
    en: "reporting",
    az: "hesabat vermək",
  },
  {
    id: 3382,
    en: "destination",
    az: "təyinat",
  },
  {
    id: 3383,
    en: "fist",
    az: "yumruq",
  },
  {
    id: 3384,
    en: "endorse",
    az: "təsdiqləyin",
  },
  {
    id: 3385,
    en: "exploration",
    az: "kəşfiyyat",
  },
  {
    id: 3386,
    en: "generous",
    az: "səxavətli",
  },
  {
    id: 3387,
    en: "bath",
    az: "hamam",
  },
  {
    id: 3388,
    en: "thereby",
    az: "bununla",
  },
  {
    id: 3389,
    en: "indicator",
    az: "göstərici",
  },
  {
    id: 3390,
    en: "sunlight",
    az: "günəş işığı",
  },
  {
    id: 3391,
    en: "feedback",
    az: "rəy",
  },
  {
    id: 3392,
    en: "spectrum",
    az: "spektri",
  },
  {
    id: 3393,
    en: "purple",
    az: "bənövşəyi",
  },
  {
    id: 3394,
    en: "laser",
    az: "lazer",
  },
  {
    id: 3395,
    en: "bold",
    az: "cəsur",
  },
  {
    id: 3396,
    en: "reluctant",
    az: "istəksiz",
  },
  {
    id: 3397,
    en: "starting",
    az: "başlanğıc",
  },
  {
    id: 3398,
    en: "expertise",
    az: "ekspertiza",
  },
  {
    id: 3399,
    en: "practically",
    az: "praktik olaraq",
  },
  {
    id: 3400,
    en: "eating",
    az: "yemək",
  },
  {
    id: 3401,
    en: "hint",
    az: "işarə",
  },
  {
    id: 3402,
    en: "sharply",
    az: "kəskin",
  },
  {
    id: 3403,
    en: "parade",
    az: "parad",
  },
  {
    id: 3404,
    en: "realm",
    az: "səltənət",
  },
  {
    id: 3405,
    en: "cancel",
    az: "ləğv et",
  },
  {
    id: 3406,
    en: "blend",
    az: "qarışıq",
  },
  {
    id: 3407,
    en: "therapist",
    az: "terapevt",
  },
  {
    id: 3408,
    en: "peel",
    az: "qabığı",
  },
  {
    id: 3409,
    en: "pizza",
    az: "pizza",
  },
  {
    id: 3410,
    en: "recipient",
    az: "alıcı",
  },
  {
    id: 3411,
    en: "hesitate",
    az: "tərəddüd etmək",
  },
  {
    id: 3412,
    en: "flip",
    az: "çevirmək",
  },
  {
    id: 3413,
    en: "accounting",
    az: "mühasibat uçotu",
  },
  {
    id: 3414,
    en: "bias",
    az: "qərəz",
  },
  {
    id: 3415,
    en: "huh",
    az: "hə",
  },
  {
    id: 3416,
    en: "metaphor",
    az: "metafora",
  },
  {
    id: 3417,
    en: "candle",
    az: "şam",
  },
  {
    id: 3418,
    en: "judicial",
    az: "məhkəmə",
  },
  {
    id: 3419,
    en: "entity",
    az: "varlıq",
  },
  {
    id: 3420,
    en: "suffering",
    az: "əzab",
  },
  {
    id: 3421,
    en: "full-time",
    az: "tam işləyir",
  },
  {
    id: 3422,
    en: "lamp",
    az: "lampa",
  },
  {
    id: 3423,
    en: "garbage",
    az: "zibil",
  },
  {
    id: 3424,
    en: "servant",
    az: "qulluqçu",
  },
  {
    id: 3425,
    en: "regulatory",
    az: "tənzimləyici",
  },
  {
    id: 3426,
    en: "diplomatic",
    az: "diplomatik",
  },
  {
    id: 3427,
    en: "elegant",
    az: "zərif",
  },
  {
    id: 3428,
    en: "reception",
    az: "qəbul",
  },
  {
    id: 3429,
    en: "vanish",
    az: "vani ş",
  },
  {
    id: 3430,
    en: "automatically",
    az: "avtomatik olaraq",
  },
  {
    id: 3431,
    en: "chin",
    az: "buxaq",
  },
  {
    id: 3432,
    en: "necessity",
    az: "zərurət",
  },
  {
    id: 3433,
    en: "confess",
    az: "etiraf edin",
  },
  {
    id: 3434,
    en: "racism",
    az: "irqçilik",
  },
  {
    id: 3435,
    en: "starter",
    az: "başlanğıc",
  },
  {
    id: 3436,
    en: "banking",
    az: "bankçılıq",
  },
  {
    id: 3437,
    en: "casual",
    az: "Gündəlik",
  },
  {
    id: 3438,
    en: "gravity",
    az: "ağırlıq",
  },
  {
    id: 3439,
    en: "enroll",
    az: "qeydiyyatdan keçin",
  },
  {
    id: 3440,
    en: "diminish",
    az: "azalmaq",
  },
  {
    id: 3441,
    en: "prevention",
    az: "qarşısının alınması",
  },
  {
    id: 3442,
    en: "minimize",
    az: "azaltmaq",
  },
  {
    id: 3443,
    en: "chop",
    az: "doğramaq",
  },
  {
    id: 3444,
    en: "performer",
    az: "ifaçı",
  },
  {
    id: 3445,
    en: "intent",
    az: "niyyət",
  },
  {
    id: 3446,
    en: "isolate",
    az: "təcrid etmək",
  },
  {
    id: 3447,
    en: "inventory",
    az: "inventar",
  },
  {
    id: 3448,
    en: "productive",
    az: "məhsuldar",
  },
  {
    id: 3449,
    en: "assembly",
    az: "toplaşmaq",
  },
  {
    id: 3450,
    en: "civic",
    az: "vətəndaş",
  },
  {
    id: 3451,
    en: "silk",
    az: "ipək",
  },
  {
    id: 3452,
    en: "magnitude",
    az: "böyüklük",
  },
  {
    id: 3453,
    en: "steep",
    az: "dik",
  },
  {
    id: 3454,
    en: "hostage",
    az: "girov",
  },
  {
    id: 3455,
    en: "collector",
    az: "kollektor",
  },
  {
    id: 3456,
    en: "popularity",
    az: "populyarlıq",
  },
  {
    id: 3457,
    en: "alien",
    az: "yad",
  },
  {
    id: 3458,
    en: "dynamic",
    az: "dinamik",
  },
  {
    id: 3459,
    en: "scary",
    az: "qorxudan",
  },
  {
    id: 3460,
    en: "equation",
    az: "tənlik",
  },
  {
    id: 3461,
    en: "angel",
    az: "mələk",
  },
  {
    id: 3462,
    en: "offering",
    az: "təklif edir",
  },
  {
    id: 3463,
    en: "rage",
    az: "qəzəb",
  },
  {
    id: 3464,
    en: "photography",
    az: "fotoqrafiya",
  },
  {
    id: 3465,
    en: "toilet",
    az: "tualet",
  },
  {
    id: 3466,
    en: "disappointed",
    az: "məyus",
  },
  {
    id: 3467,
    en: "precious",
    az: "qiymətli",
  },
  {
    id: 3468,
    en: "prohibit",
    az: "qadağan etmək",
  },
  {
    id: 3469,
    en: "realistic",
    az: "realist",
  },
  {
    id: 3470,
    en: "hidden",
    az: "gizli",
  },
  {
    id: 3471,
    en: "tender",
    az: "tender",
  },
  {
    id: 3472,
    en: "gathering",
    az: "toplamaq",
  },
  {
    id: 3473,
    en: "outstanding",
    az: "görkəmli",
  },
  {
    id: 3474,
    en: "stumble",
    az: "büdrəmək",
  },
  {
    id: 3475,
    en: "lonely",
    az: "tənha",
  },
  {
    id: 3476,
    en: "automobile",
    az: "avtomobil",
  },
  {
    id: 3477,
    en: "artificial",
    az: "süni",
  },
  {
    id: 3478,
    en: "dawn",
    az: "şəfəq",
  },
  {
    id: 3479,
    en: "abstract",
    az: "mücərrəd",
  },
  {
    id: 3480,
    en: "descend",
    az: "enmək",
  },
  {
    id: 3481,
    en: "silly",
    az: "axmaq",
  },
  {
    id: 3482,
    en: "tide",
    az: "gelgit",
  },
  {
    id: 3483,
    en: "shared",
    az: "paylaşdı",
  },
  {
    id: 3484,
    en: "hopefully",
    az: "inşallah",
  },
  {
    id: 3485,
    en: "readily",
    az: "asanlıqla",
  },
  {
    id: 3486,
    en: "cooperate",
    az: "əməkdaşlıq etmək",
  },
  {
    id: 3487,
    en: "revolutionary",
    az: "inqilabçı",
  },
  {
    id: 3488,
    en: "romance",
    az: "romantika",
  },
  {
    id: 3489,
    en: "hardware",
    az: "aparat",
  },
  {
    id: 3490,
    en: "pillow",
    az: "yastıq",
  },
  {
    id: 3491,
    en: "kit",
    az: "dəst",
  },
  {
    id: 3492,
    en: "continent",
    az: "qitə",
  },
  {
    id: 3493,
    en: "seal",
    az: "möhür",
  },
  {
    id: 3494,
    en: "circuit",
    az: "dövrə",
  },
  {
    id: 3495,
    en: "ruling",
    az: "hökm",
  },
  {
    id: 3496,
    en: "shortage",
    az: "çatışmazlıq",
  },
  {
    id: 3497,
    en: "annually",
    az: "hər il",
  },
  {
    id: 3498,
    en: "lately",
    az: "son vaxtlar",
  },
  {
    id: 3499,
    en: "scan",
    az: "tarama",
  },
  {
    id: 3500,
    en: "deadline",
    az: "son tarix",
  },
  {
    id: 3501,
    en: "rear",
    az: "arxa",
  },
  {
    id: 3502,
    en: "processing",
    az: "emal",
  },
  {
    id: 3503,
    en: "coastal",
    az: "sahil",
  },
  {
    id: 3504,
    en: "undertake",
    az: "götürmək",
  },
  {
    id: 3505,
    en: "softly",
    az: "yumşaq",
  },
  {
    id: 3506,
    en: "burning",
    az: "yanan",
  },
  {
    id: 3507,
    en: "verbal",
    az: "şifahi",
  },
  {
    id: 3508,
    en: "tribal",
    az: "qəbilə",
  },
  {
    id: 3509,
    en: "ridiculous",
    az: "gülünc",
  },
  {
    id: 3510,
    en: "automatic",
    az: "avtomatik",
  },
  {
    id: 3511,
    en: "diamond",
    az: "almaz",
  },
  {
    id: 3512,
    en: "credibility",
    az: "etibarlılıq",
  },
  {
    id: 3513,
    en: "import",
    az: "idxal",
  },
  {
    id: 3514,
    en: "sexually",
    az: "cinsi",
  },
  {
    id: 3515,
    en: "spring",
    az: "yaz",
  },
  {
    id: 3516,
    en: "divine",
    az: "d ivine",
  },
  {
    id: 3517,
    en: "sentiment",
    az: "hiss",
  },
  {
    id: 3518,
    en: "cart",
    az: "səbət",
  },
  {
    id: 3519,
    en: "oversee",
    az: "nəzarət etmək",
  },
  {
    id: 3520,
    en: "o'clock",
    az: "saat",
  },
  {
    id: 3521,
    en: "elder",
    az: "ağsaqqal",
  },
  {
    id: 3522,
    en: "inspiration",
    az: "ilham",
  },
  {
    id: 3523,
    en: "Dutch",
    az: "Holland",
  },
  {
    id: 3524,
    en: "quantity",
    az: "kəmiyyət",
  },
  {
    id: 3525,
    en: "trailer",
    az: "qoşqu",
  },
  {
    id: 3526,
    en: "mate",
    az: "ər",
  },
  {
    id: 3527,
    en: "Greek",
    az: "Yunan",
  },
  {
    id: 3528,
    en: "genius",
    az: "dahi",
  },
  {
    id: 3529,
    en: "monument",
    az: "abidə",
  },
  {
    id: 3530,
    en: "bid",
    az: "teklif",
  },
  {
    id: 3531,
    en: "quest",
    az: "axtarmaq",
  },
  {
    id: 3532,
    en: "sacrifice",
    az: "qurban",
  },
  {
    id: 3533,
    en: "invitation",
    az: "dəvətnamə",
  },
  {
    id: 3534,
    en: "accuracy",
    az: "dəqiqlik",
  },
  {
    id: 3535,
    en: "juror",
    az: "münsif",
  },
  {
    id: 3536,
    en: "officially",
    az: "rəsmi olaraq",
  },
  {
    id: 3537,
    en: "broker",
    az: "vasitəçi",
  },
  {
    id: 3538,
    en: "treasure",
    az: "xəzinə",
  },
  {
    id: 3539,
    en: "loyalty",
    az: "sədaqət",
  },
  {
    id: 3540,
    en: "talented",
    az: "istedadlı",
  },
  {
    id: 3541,
    en: "gasoline",
    az: "benzin",
  },
  {
    id: 3542,
    en: "stiff",
    az: "sərt",
  },
  {
    id: 3543,
    en: "output",
    az: "çıxış",
  },
  {
    id: 3544,
    en: "nominee",
    az: "namizəd",
  },
  {
    id: 3545,
    en: "extended",
    az: "uzadıldı",
  },
  {
    id: 3546,
    en: "diabetes",
    az: "diabet",
  },
  {
    id: 3547,
    en: "slap",
    az: "yumruqlamaq",
  },
  {
    id: 3548,
    en: "toxic",
    az: "Toksik",
  },
  {
    id: 3549,
    en: "alleged",
    az: "iddia olunur",
  },
  {
    id: 3550,
    en: "jaw",
    az: "çənə",
  },
  {
    id: 3551,
    en: "grief",
    az: "qəm",
  },
  {
    id: 3552,
    en: "mysterious",
    az: "sirli",
  },
  {
    id: 3553,
    en: "rocket",
    az: "raket",
  },
  {
    id: 3554,
    en: "donate",
    az: "bağışlamaq",
  },
  {
    id: 3555,
    en: "inmate",
    az: "məhkum",
  },
  {
    id: 3556,
    en: "tackle",
    az: "toxunmaq",
  },
  {
    id: 3557,
    en: "dynamics",
    az: "dinamika",
  },
  {
    id: 3558,
    en: "bow",
    az: "rüku",
  },
  {
    id: 3559,
    en: "ours",
    az: "bizimki",
  },
  {
    id: 3560,
    en: "dignity",
    az: "ləyaqət",
  },
  {
    id: 3561,
    en: "carpet",
    az: "xalça",
  },
  {
    id: 3562,
    en: "parental",
    az: "par ental",
  },
  {
    id: 3563,
    en: "bubble",
    az: "köpük",
  },
  {
    id: 3564,
    en: "buddy",
    az: "dostum",
  },
  {
    id: 3565,
    en: "barn",
    az: "anbar",
  },
  {
    id: 3566,
    en: "sword",
    az: "qılınc",
  },
  {
    id: 3567,
    en: "seventh",
    az: "yeddinci",
  },
  {
    id: 3568,
    en: "glory",
    az: "şöhrət",
  },
  {
    id: 3569,
    en: "tightly",
    az: "sıx",
  },
  {
    id: 3570,
    en: "protective",
    az: "qoruyucu",
  },
  {
    id: 3571,
    en: "tuck",
    az: "toxunmaq",
  },
  {
    id: 3572,
    en: "drum",
    az: "nağara",
  },
  {
    id: 3573,
    en: "faint",
    az: "halsız",
  },
  {
    id: 3574,
    en: "queen",
    az: "kraliça",
  },
  {
    id: 3575,
    en: "dilemma",
    az: "dilemma",
  },
  {
    id: 3576,
    en: "input",
    az: "giriş",
  },
  {
    id: 3577,
    en: "specialize",
    az: "ixtisaslaşmaq",
  },
  {
    id: 3578,
    en: "northeast",
    az: "şimal-şərqdə",
  },
  {
    id: 3579,
    en: "shallow",
    az: "dayaz",
  },
  {
    id: 3580,
    en: "liability",
    az: "məsuliyyət",
  },
  {
    id: 3581,
    en: "sail",
    az: "yelkən",
  },
  {
    id: 3582,
    en: "merchant",
    az: "tacir",
  },
  {
    id: 3583,
    en: "stadium",
    az: "stadion",
  },
  {
    id: 3584,
    en: "improved",
    az: "təkmilləşdirilmiş",
  },
  {
    id: 3585,
    en: "bloody",
    az: "qanlı",
  },
  {
    id: 3586,
    en: "associated",
    az: "bağlıdır",
  },
  {
    id: 3587,
    en: "withdrawal",
    az: "çəkilmə",
  },
  {
    id: 3588,
    en: "refrigerator",
    az: "soyuducu",
  },
  {
    id: 3589,
    en: "nest",
    az: "yuva",
  },
  {
    id: 3590,
    en: "thoroughly",
    az: "hərtərəfli",
  },
  {
    id: 3591,
    en: "lane",
    az: "zolaq",
  },
  {
    id: 3592,
    en: "ancestor",
    az: "ata",
  },
  {
    id: 3593,
    en: "condemn",
    az: "qınamaq",
  },
  {
    id: 3594,
    en: "steam",
    az: "buxar",
  },
  {
    id: 3595,
    en: "accent",
    az: "vurğu",
  },
  {
    id: 3596,
    en: "optimistic",
    az: "nikbin",
  },
  {
    id: 3597,
    en: "unite",
    az: "birləşmək",
  },
  {
    id: 3598,
    en: "cage",
    az: "qəfəs",
  },
  {
    id: 3599,
    en: "equip",
    az: "təchiz etmək",
  },
  {
    id: 3600,
    en: "shrimp",
    az: "karides",
  },
  {
    id: 3601,
    en: "homeland",
    az: "vətən",
  },
  {
    id: 3602,
    en: "rack",
    az: "raf",
  },
  {
    id: 3603,
    en: "costume",
    az: "kostyum",
  },
  {
    id: 3604,
    en: "wolf",
    az: "qurd",
  },
  {
    id: 3605,
    en: "courtroom",
    az: "məhkəmə salonu",
  },
  {
    id: 3606,
    en: "statute",
    az: "nizamnamə",
  },
  {
    id: 3607,
    en: "productivity",
    az: "məhsuldarlıq",
  },
  {
    id: 3608,
    en: "symbolic",
    az: "simvolik",
  },
  {
    id: 3609,
    en: "bug",
    az: "səhv",
  },
  {
    id: 3610,
    en: "bless",
    az: "xeyir versin",
  },
  {
    id: 3611,
    en: "aunt",
    az: "xala",
  },
  {
    id: 3612,
    en: "agriculture",
    az: "Kənd təsərrüfatı",
  },
  {
    id: 3613,
    en: "hostile",
    az: "düşmən",
  },
  {
    id: 3614,
    en: "conceive",
    az: "düşünmək",
  },
  {
    id: 3615,
    en: "combined",
    az: "birləşdirilmişdir",
  },
  {
    id: 3616,
    en: "instantly",
    az: "dərhal",
  },
  {
    id: 3617,
    en: "bankruptcy",
    az: "iflas",
  },
  {
    id: 3618,
    en: "vaccine",
    az: "peyvənd",
  },
  {
    id: 3619,
    en: "bonus",
    az: "bonus",
  },
  {
    id: 3620,
    en: "collaboration",
    az: "əməkdaşlıq",
  },
  {
    id: 3621,
    en: "mixed",
    az: "qarışıq",
  },
  {
    id: 3622,
    en: "opposed",
    az: "qarşı çıxdı",
  },
  {
    id: 3623,
    en: "orbit",
    az: "orbit",
  },
  {
    id: 3624,
    en: "grasp",
    az: "tutmaq",
  },
  {
    id: 3625,
    en: "patience",
    az: "səbr",
  },
  {
    id: 3626,
    en: "spite",
    az: "xəsislik",
  },
  {
    id: 3627,
    en: "tropical",
    az: "tropik",
  },
  {
    id: 3628,
    en: "voting",
    az: "səsvermə",
  },
  {
    id: 3629,
    en: "patrol",
    az: "patrul",
  },
  {
    id: 3630,
    en: "willingness",
    az: "hazırlıq",
  },
  {
    id: 3631,
    en: "revelation",
    az: "vəhy",
  },
  {
    id: 3632,
    en: "calm",
    az: "sakit",
  },
  {
    id: 3633,
    en: "jewelry",
    az: "zərgərlik",
  },
  {
    id: 3634,
    en: "Cuban",
    az: "Kuba",
  },
  {
    id: 3635,
    en: "haul",
    az: "ovlamaq",
  },
  {
    id: 3636,
    en: "concede",
    az: "güzəştə getmək",
  },
  {
    id: 3637,
    en: "wagon",
    az: "vaqon",
  },
  {
    id: 3638,
    en: "afterward",
    az: "sonradan",
  },
  {
    id: 3639,
    en: "spectacular",
    az: "möhtəşəm",
  },
  {
    id: 3640,
    en: "ruin",
    az: "xarabalıq",
  },
  {
    id: 3641,
    en: "sheer",
    az: "şəffaf",
  },
  {
    id: 3642,
    en: "immune",
    az: "immunitetlidir",
  },
  {
    id: 3643,
    en: "reliability",
    az: "etibarlılıq",
  },
  {
    id: 3644,
    en: "ass",
    az: "eşşək",
  },
  {
    id: 3645,
    en: "alongside",
    az: "yanaşı",
  },
  {
    id: 3646,
    en: "bush",
    az: "kol",
  },
  {
    id: 3647,
    en: "exotic",
    az: "ekzotik",
  },
  {
    id: 3648,
    en: "fascinating",
    az: "füsunkar",
  },
  {
    id: 3649,
    en: "clip",
    az: "klip",
  },
  {
    id: 3650,
    en: "thigh",
    az: "bud",
  },
  {
    id: 3651,
    en: "bull",
    az: "öküz",
  },
  {
    id: 3652,
    en: "drawer",
    az: "çekmece",
  },
  {
    id: 3653,
    en: "sheep",
    az: "qoyun",
  },
  {
    id: 3654,
    en: "discourage",
    az: "ruhdan salmaq",
  },
  {
    id: 3655,
    en: "coordinator",
    az: "koordinator",
  },
  {
    id: 3656,
    en: "ideological",
    az: "ideoloji",
  },
  {
    id: 3657,
    en: "runner",
    az: "qaçışçı",
  },
  {
    id: 3658,
    en: "secular",
    az: "dünyəvi",
  },
  {
    id: 3659,
    en: "intimate",
    az: "Intim",
  },
  {
    id: 3660,
    en: "empire",
    az: "imperiya",
  },
  {
    id: 3661,
    en: "cab",
    az: "kabinə",
  },
  {
    id: 3662,
    en: "exam",
    az: "imtahan",
  },
  {
    id: 3663,
    en: "documentary",
    az: "sənədli",
  },
  {
    id: 3664,
    en: "neutral",
    az: "neytral",
  },
  {
    id: 3665,
    en: "biology",
    az: "biologiya",
  },
  {
    id: 3666,
    en: "flexible",
    az: "çevik",
  },
  {
    id: 3667,
    en: "progressive",
    az: "mütərəqqi",
  },
  {
    id: 3668,
    en: "web",
    az: "veb",
  },
  {
    id: 3669,
    en: "conspiracy",
    az: "sui-qəsd",
  },
  {
    id: 3670,
    en: "casualty",
    az: "itki",
  },
  {
    id: 3671,
    en: "republic",
    az: "respublika",
  },
  {
    id: 3672,
    en: "execution",
    az: "edam",
  },
  {
    id: 3673,
    en: "terrific",
    az: "dəhşətli",
  },
  {
    id: 3674,
    en: "whale",
    az: "balina",
  },
  {
    id: 3675,
    en: "functional",
    az: "funksional",
  },
  {
    id: 3676,
    en: "instinct",
    az: "instinkt",
  },
  {
    id: 3677,
    en: "teammate",
    az: "komanda yoldaşı",
  },
  {
    id: 3678,
    en: "aluminum",
    az: "alüminium",
  },
  {
    id: 3679,
    en: "whoever",
    az: "kim",
  },
  {
    id: 3680,
    en: "ministry",
    az: "nazirlik",
  },
  {
    id: 3681,
    en: "verdict",
    az: "hökm",
  },
  {
    id: 3682,
    en: "instruct",
    az: "təlimatlandırmaq",
  },
  {
    id: 3683,
    en: "skull",
    az: "kəllə",
  },
  {
    id: 3684,
    en: "self-esteem",
    az: "özünə hörmət",
  },
  {
    id: 3685,
    en: "cooperative",
    az: "kooperativ",
  },
  {
    id: 3686,
    en: "manipulate",
    az: "manipulyasiya etmək",
  },
  {
    id: 3687,
    en: "bee",
    az: "arı",
  },
  {
    id: 3688,
    en: "practitioner",
    az: "praktikant",
  },
  {
    id: 3689,
    en: "loop",
    az: "döngə",
  },
  {
    id: 3690,
    en: "edit",
    az: "redaktə edin",
  },
  {
    id: 3691,
    en: "whip",
    az: "qamçı",
  },
  {
    id: 3692,
    en: "puzzle",
    az: "tapmaca",
  },
  {
    id: 3693,
    en: "mushroom",
    az: "göbələk",
  },
  {
    id: 3694,
    en: "subsidy",
    az: "subsidiya",
  },
  {
    id: 3695,
    en: "boil",
    az: "Qaynamaq",
  },
  {
    id: 3696,
    en: "tragic",
    az: "tra gic",
  },
  {
    id: 3697,
    en: "mathematics",
    az: "riyaziyyat",
  },
  {
    id: 3698,
    en: "mechanic",
    az: "mexanik",
  },
  {
    id: 3699,
    en: "jar",
    az: "banka",
  },
  {
    id: 3700,
    en: "earthquake",
    az: "zəlzələ",
  },
  {
    id: 3701,
    en: "pork",
    az: "donuz əti",
  },
  {
    id: 3702,
    en: "creativity",
    az: "yaradıcılıq",
  },
  {
    id: 3703,
    en: "safely",
    az: "təhlükəsiz",
  },
  {
    id: 3704,
    en: "underlying",
    az: "əsas",
  },
  {
    id: 3705,
    en: "dessert",
    az: "desert",
  },
  {
    id: 3706,
    en: "sympathy",
    az: "rəğbət",
  },
  {
    id: 3707,
    en: "fisherman",
    az: "balıqçı",
  },
  {
    id: 3708,
    en: "incredibly",
    az: "inanılmaz dərəcədə",
  },
  {
    id: 3709,
    en: "isolation",
    az: "izolyasiya",
  },
  {
    id: 3710,
    en: "sock",
    az: "corab",
  },
  {
    id: 3711,
    en: "eleven",
    az: "on bir",
  },
  {
    id: 3712,
    en: "sexy",
    az: "seksual",
  },
  {
    id: 3713,
    en: "syndrome",
    az: "sindromu",
  },
  {
    id: 3714,
    en: "bureau",
    az: "büro",
  },
  {
    id: 3715,
    en: "workplace",
    az: "iş yeri",
  },
  {
    id: 3716,
    en: "ambition",
    az: "iddialı",
  },
  {
    id: 3717,
    en: "touchdown",
    az: "toxunma",
  },
  {
    id: 3718,
    en: "utilize",
    az: "istifadə etmək",
  },
  {
    id: 3719,
    en: "breeze",
    az: "meh",
  },
  {
    id: 3720,
    en: "costly",
    az: "bahalı",
  },
  {
    id: 3721,
    en: "ambitious",
    az: "iddialı",
  },
  {
    id: 3722,
    en: "Christianity",
    az: "Xristianlıq",
  },
  {
    id: 3723,
    en: "presumably",
    az: "ehtimal ki",
  },
  {
    id: 3724,
    en: "influential",
    az: "təsirli",
  },
  {
    id: 3725,
    en: "translation",
    az: "tərcümə",
  },
  {
    id: 3726,
    en: "uncertain",
    az: "qeyri-müəyyən",
  },
  {
    id: 3727,
    en: "dissolve",
    az: "həll etmək",
  },
  {
    id: 3728,
    en: "statistical",
    az: "statistik",
  },
  {
    id: 3729,
    en: "gut",
    az: "bağırsaq",
  },
  {
    id: 3730,
    en: "metropolitan",
    az: "metropoliten",
  },
  {
    id: 3731,
    en: "rolling",
    az: "yuvarlanan",
  },
  {
    id: 3732,
    en: "aesthetic",
    az: "estetik",
  },
  {
    id: 3733,
    en: "spell",
    az: "yazım",
  },
  {
    id: 3734,
    en: "insert",
    az: "daxil edin",
  },
  {
    id: 3735,
    en: "booth",
    az: "köşk",
  },
  {
    id: 3736,
    en: "helmet",
    az: "dəbilqə",
  },
  {
    id: 3737,
    en: "waist",
    az: "bel",
  },
  {
    id: 3738,
    en: "expected",
    az: "gözlənilir",
  },
  {
    id: 3739,
    en: "lion",
    az: "aslan",
  },
  {
    id: 3740,
    en: "accomplishment",
    az: "uğur qazananlar t",
  },
  {
    id: 3741,
    en: "royal",
    az: "kral",
  },
  {
    id: 3742,
    en: "panic",
    az: "çaxnaşma",
  },
  {
    id: 3743,
    en: "crush",
    az: "əzmək",
  },
  {
    id: 3744,
    en: "actively",
    az: "fəal şəkildə",
  },
  {
    id: 3745,
    en: "cliff",
    az: "uçurum",
  },
  {
    id: 3746,
    en: "minimal",
    az: "minimal",
  },
  {
    id: 3747,
    en: "cord",
    az: "şnur",
  },
  {
    id: 3748,
    en: "fortunately",
    az: "xoşbəxtlikdən",
  },
  {
    id: 3749,
    en: "cocaine",
    az: "kokain",
  },
  {
    id: 3750,
    en: "illusion",
    az: "illüziya",
  },
  {
    id: 3751,
    en: "anonymous",
    az: "anonim",
  },
  {
    id: 3752,
    en: "tolerate",
    az: "dözmək",
  },
  {
    id: 3753,
    en: "appreciation",
    az: "qiymətləndirmə",
  },
  {
    id: 3754,
    en: "commissioner",
    az: "komissar",
  },
  {
    id: 3755,
    en: "flexibility",
    az: "rahatlıq",
  },
  {
    id: 3756,
    en: "instructional",
    az: "təlimatlı",
  },
  {
    id: 3757,
    en: "scramble",
    az: "dırmaşmaq",
  },
  {
    id: 3758,
    en: "casino",
    az: "kazino",
  },
  {
    id: 3759,
    en: "tumor",
    az: "şiş",
  },
  {
    id: 3760,
    en: "decorate",
    az: "bəzəmək",
  },
  {
    id: 3761,
    en: "pulse",
    az: "nəbz",
  },
  {
    id: 3762,
    en: "equivalent",
    az: "ekvivalentdir",
  },
  {
    id: 3763,
    en: "fixed",
    az: "sabit",
  },
  {
    id: 3764,
    en: "experienced",
    az: "təcrübəli",
  },
  {
    id: 3765,
    en: "donation",
    az: "hədiyyə",
  },
  {
    id: 3766,
    en: "diary",
    az: "gündəlik",
  },
  {
    id: 3767,
    en: "sibling",
    az: "bacı",
  },
  {
    id: 3768,
    en: "irony",
    az: "istehza",
  },
  {
    id: 3769,
    en: "spoon",
    az: "qaşıq",
  },
  {
    id: 3770,
    en: "midst",
    az: "ortada",
  },
  {
    id: 3771,
    en: "alley",
    az: "xiyaban",
  },
  {
    id: 3772,
    en: "interact",
    az: "qarşılıqlı əlaqə",
  },
  {
    id: 3773,
    en: "soap",
    az: "sabun",
  },
  {
    id: 3774,
    en: "cute",
    az: "yaraşıqlı",
  },
  {
    id: 3775,
    en: "rival",
    az: "rəqib",
  },
  {
    id: 3776,
    en: "short-term",
    az: "qısa müddət",
  },
  {
    id: 3777,
    en: "punch",
    az: "yumruq",
  },
  {
    id: 3778,
    en: "hockey",
    az: "xokkey",
  },
  {
    id: 3779,
    en: "passing",
    az: "keçən",
  },
  {
    id: 3780,
    en: "persist",
    az: "israrla",
  },
  {
    id: 3781,
    en: "supplier",
    az: "təchizatçı",
  },
  {
    id: 3782,
    en: "known",
    az: "məlumdur",
  },
  {
    id: 3783,
    en: "momentum",
    az: "təcil",
  },
  {
    id: 3784,
    en: "purse",
    az: "pul kisəsi",
  },
  {
    id: 3785,
    en: "shed",
    az: "tökmək",
  },
  {
    id: 3786,
    en: "liquid",
    az: "maye",
  },
  {
    id: 3787,
    en: "icon",
    az: "simge",
  },
  {
    id: 3788,
    en: "elephant",
    az: "fil",
  },
  {
    id: 3789,
    en: "consequently",
    az: "c nəticədə",
  },
  {
    id: 3790,
    en: "legislature",
    az: "qanunverici orqan",
  },
  {
    id: 3791,
    en: "franchise",
    az: "franchise",
  },
  {
    id: 3792,
    en: "correctly",
    az: "düzgün",
  },
  {
    id: 3793,
    en: "mentally",
    az: "zehni",
  },
  {
    id: 3794,
    en: "foster",
    az: "tərbiyəçi",
  },
  {
    id: 3795,
    en: "bicycle",
    az: "velosiped",
  },
  {
    id: 3796,
    en: "encouraging",
    az: "həvəsləndirici",
  },
  {
    id: 3797,
    en: "cheat",
    az: "fırıldaqçı",
  },
  {
    id: 3798,
    en: "heal",
    az: "sağal",
  },
  {
    id: 3799,
    en: "fever",
    az: "qızdırma",
  },
  {
    id: 3800,
    en: "filter",
    az: "süzgəc",
  },
  {
    id: 3801,
    en: "rabbit",
    az: "dovşan",
  },
  {
    id: 3802,
    en: "coin",
    az: "sikkə",
  },
  {
    id: 3803,
    en: "exploit",
    az: "istismar etmək",
  },
  {
    id: 3804,
    en: "accessible",
    az: "əlçatan",
  },
  {
    id: 3805,
    en: "organism",
    az: "orqanizm",
  },
  {
    id: 3806,
    en: "sensation",
    az: "sensasiya",
  },
  {
    id: 3807,
    en: "partially",
    az: "qismən",
  },
  {
    id: 3808,
    en: "upstairs",
    az: "yuxarıda",
  },
  {
    id: 3809,
    en: "dried",
    az: "qurudulur",
  },
  {
    id: 3810,
    en: "conservation",
    az: "konservasiya",
  },
  {
    id: 3811,
    en: "shove",
    az: "çırpmaq",
  },
  {
    id: 3812,
    en: "backyard",
    az: "həyət",
  },
  {
    id: 3813,
    en: "charter",
    az: "nizamnamə",
  },
  {
    id: 3814,
    en: "stove",
    az: "soba",
  },
  {
    id: 3815,
    en: "consent",
    az: "razılıq",
  },
  {
    id: 3816,
    en: "comprise",
    az: "ibarətdir",
  },
  {
    id: 3817,
    en: "reminder",
    az: "xatırlatma",
  },
  {
    id: 3818,
    en: "alike",
    az: "eyni",
  },
  {
    id: 3819,
    en: "placement",
    az: "yerləşdirmə",
  },
  {
    id: 3820,
    en: "dough",
    az: "xəmir",
  },
  {
    id: 3821,
    en: "grandchild",
    az: "nəvə",
  },
  {
    id: 3822,
    en: "dam",
    az: "bənd",
  },
  {
    id: 3823,
    en: "reportedly",
    az: "bildirildi",
  },
  {
    id: 3824,
    en: "well-known",
    az: "tanınmış",
  },
  {
    id: 3825,
    en: "surrounding",
    az: "ətrafı",
  },
  {
    id: 3826,
    en: "outfit",
    az: "materialı",
  },
  {
    id: 3827,
    en: "unprecedented",
    az: "misli görünməmiş",
  },
  {
    id: 3828,
    en: "columnist",
    az: "köşə yazarı",
  },
  {
    id: 3829,
    en: "workout",
    az: "çalışmaq",
  },
  {
    id: 3830,
    en: "preliminary",
    az: "ilkin",
  },
  {
    id: 3831,
    en: "patent",
    az: "patent",
  },
  {
    id: 3832,
    en: "shy",
    az: "utancaq",
  },
  {
    id: 3833,
    en: "trash",
    az: "zibil",
  },
  {
    id: 3834,
    en: "disabled",
    az: "əlil",
  },
  {
    id: 3835,
    en: "gross",
    az: "gro ss",
  },
  {
    id: 3836,
    en: "damn",
    az: "lənətləmək",
  },
  {
    id: 3837,
    en: "hormone",
    az: "hormon",
  },
  {
    id: 3838,
    en: "texture",
    az: "toxuması",
  },
  {
    id: 3839,
    en: "pencil",
    az: "qələm",
  },
  {
    id: 3840,
    en: "frontier",
    az: "sərhəddi",
  },
  {
    id: 3841,
    en: "spray",
    az: "sprey",
  },
  {
    id: 3842,
    en: "disclose",
    az: "açıqlamaq",
  },
  {
    id: 3843,
    en: "custody",
    az: "qəyyumluq",
  },
  {
    id: 3844,
    en: "banker",
    az: "bankir",
  },
  {
    id: 3845,
    en: "beast",
    az: "heyvan",
  },
  {
    id: 3846,
    en: "interfere",
    az: "qarışmaq",
  },
  {
    id: 3847,
    en: "oak",
    az: "palıd",
  },
  {
    id: 3848,
    en: "eighth",
    az: "səkkizinci",
  },
  {
    id: 3849,
    en: "notebook",
    az: "notebook",
  },
  {
    id: 3850,
    en: "outline",
    az: "kontur",
  },
  {
    id: 3851,
    en: "attendance",
    az: "davamiyyət",
  },
  {
    id: 3852,
    en: "speculation",
    az: "fərziyyə",
  },
  {
    id: 3853,
    en: "uncover",
    az: "açmaq",
  },
  {
    id: 3854,
    en: "behalf",
    az: "adından",
  },
  {
    id: 3855,
    en: "innovative",
    az: "yenilikçi",
  },
  {
    id: 3856,
    en: "shark",
    az: "köpək balığı",
  },
  {
    id: 3857,
    en: "mill",
    az: "dəyirman",
  },
  {
    id: 3858,
    en: "installation",
    az: "quraşdırma",
  },
  {
    id: 3859,
    en: "stimulate",
    az: "stimullaşdırmaq",
  },
  {
    id: 3860,
    en: "tag",
    az: "etiket",
  },
  {
    id: 3861,
    en: "vertical",
    az: "şaquli",
  },
  {
    id: 3862,
    en: "swimming",
    az: "üzgüçülük",
  },
  {
    id: 3863,
    en: "fleet",
    az: "donanma",
  },
  {
    id: 3864,
    en: "catalog",
    az: "kataloqu",
  },
  {
    id: 3865,
    en: "outsider",
    az: "kənar",
  },
  {
    id: 3866,
    en: "desperately",
    az: "naəlaclıqdan",
  },
  {
    id: 3867,
    en: "stance",
    az: "duruş",
  },
  {
    id: 3868,
    en: "compel",
    az: "məcbur etmək",
  },
  {
    id: 3869,
    en: "sensitivity",
    az: "həssaslıq",
  },
  {
    id: 3870,
    en: "someday",
    az: "bir gün",
  },
  {
    id: 3871,
    en: "instant",
    az: "ani",
  },
  {
    id: 3872,
    en: "debut",
    az: "debüt",
  },
  {
    id: 3873,
    en: "proclaim",
    az: "elan edin",
  },
  {
    id: 3874,
    en: "worldwide",
    az: "dünyada",
  },
  {
    id: 3875,
    en: "hike",
    az: "zam",
  },
  {
    id: 3876,
    en: "required",
    az: "tələb olunur",
  },
  {
    id: 3877,
    en: "confrontation",
    az: "qarşıdurma",
  },
  {
    id: 3878,
    en: "colorful",
    az: "rəngfu l",
  },
  {
    id: 3879,
    en: "constitution",
    az: "konstitusiya",
  },
  {
    id: 3880,
    en: "trainer",
    az: "məşqçi",
  },
  {
    id: 3881,
    en: "Thanksgiving",
    az: "Şükran günü",
  },
  {
    id: 3882,
    en: "scent",
    az: "qoxu",
  },
  {
    id: 3883,
    en: "stack",
    az: "yığın",
  },
  {
    id: 3884,
    en: "eyebrow",
    az: "qaş",
  },
  {
    id: 3885,
    en: "sack",
    az: "çuval",
  },
  {
    id: 3886,
    en: "cease",
    az: "dayandırmaq",
  },
  {
    id: 3887,
    en: "inherit",
    az: "miras almaq",
  },
  {
    id: 3888,
    en: "tray",
    az: "qab",
  },
  {
    id: 3889,
    en: "pioneer",
    az: "pioner",
  },
  {
    id: 3890,
    en: "organizational",
    az: "təşkilati",
  },
  {
    id: 3891,
    en: "textbook",
    az: "dərs kitabı",
  },
  {
    id: 3892,
    en: "nasty",
    az: "murdar",
  },
  {
    id: 3893,
    en: "shrink",
    az: "büzülmək",
  },
  {
    id: 3894,
    en: "emerging",
    az: "yaranan",
  },
  {
    id: 3895,
    en: "dot",
    az: "nöqtə",
  },
  {
    id: 3896,
    en: "wheat",
    az: "buğda",
  },
  {
    id: 3897,
    en: "fierce",
    az: "şiddətli",
  },
  {
    id: 3898,
    en: "envision",
    az: "təsəvvür etmək",
  },
  {
    id: 3899,
    en: "rational",
    az: "rasional",
  },
  {
    id: 3900,
    en: "kingdom",
    az: "səltənət",
  },
  {
    id: 3901,
    en: "aisle",
    az: "koridorda",
  },
  {
    id: 3902,
    en: "weaken",
    az: "zəiflətmək",
  },
  {
    id: 3903,
    en: "protocol",
    az: "protokolu",
  },
  {
    id: 3904,
    en: "exclusively",
    az: "müstəsna olaraq",
  },
  {
    id: 3905,
    en: "vocal",
    az: "vokal",
  },
  {
    id: 3906,
    en: "marketplace",
    az: "bazarda",
  },
  {
    id: 3907,
    en: "openly",
    az: "açıq şəkildə",
  },
  {
    id: 3908,
    en: "unfair",
    az: "haqsız",
  },
  {
    id: 3909,
    en: "terrain",
    az: "Ərazi",
  },
  {
    id: 3910,
    en: "deploy",
    az: "yerləşdirmək",
  },
  {
    id: 3911,
    en: "risky",
    az: "riskli",
  },
  {
    id: 3912,
    en: "pasta",
    az: "makaron",
  },
  {
    id: 3913,
    en: "genre",
    az: "janr",
  },
  {
    id: 3914,
    en: "distract",
    az: "yayındırmaq",
  },
  {
    id: 3915,
    en: "merit",
    az: "ləyaqət",
  },
  {
    id: 3916,
    en: "planner",
    az: "planlayıcı",
  },
  {
    id: 3917,
    en: "depressed",
    az: "məzlum",
  },
  {
    id: 3918,
    en: "chunk",
    az: "yığın",
  },
  {
    id: 3919,
    en: "closest",
    az: "ən yaxın",
  },
  {
    id: 3920,
    en: "discount",
    az: "güzəşt",
  },
  {
    id: 3921,
    en: "ladder",
    az: "nərdivan",
  },
  {
    id: 3922,
    en: "jungle",
    az: "cəngəllik",
  },
  {
    id: 3923,
    en: "migration",
    az: "köç",
  },
  {
    id: 3924,
    en: "breathing",
    az: "nəfəs alır",
  },
  {
    id: 3925,
    en: "invade",
    az: "işğal etmək",
  },
  {
    id: 3926,
    en: "hurricane",
    az: "qasırğa",
  },
  {
    id: 3927,
    en: "retailer",
    az: "pərakəndə satıcı",
  },
  {
    id: 3928,
    en: "classify",
    az: "təsnifləşdirmək",
  },
  {
    id: 3929,
    en: "coup",
    az: "zərbə",
  },
  {
    id: 3930,
    en: "ambassador",
    az: "səfir",
  },
  {
    id: 3931,
    en: "density",
    az: "sıxlığı",
  },
  {
    id: 3932,
    en: "supportive",
    az: "dəstəkləyən",
  },
  {
    id: 3933,
    en: "curiosity",
    az: "maraq",
  },
  {
    id: 3934,
    en: "skip",
    az: "atmaq",
  },
  {
    id: 3935,
    en: "aggression",
    az: "təcavüz",
  },
  {
    id: 3936,
    en: "stimulus",
    az: "stimul",
  },
  {
    id: 3937,
    en: "robot",
    az: "robot",
  },
  {
    id: 3938,
    en: "dip",
    az: "batırmaq",
  },
  {
    id: 3939,
    en: "likewise",
    az: "eyni şəkildə",
  },
  {
    id: 3940,
    en: "informal",
    az: "qeyri-rəsmi",
  },
  {
    id: 3941,
    en: "Persian",
    az: "Fars",
  },
  {
    id: 3942,
    en: "feather",
    az: "lələk",
  },
  {
    id: 3943,
    en: "sphere",
    az: "sahə",
  },
  {
    id: 3944,
    en: "tighten",
    az: "bərkidin",
  },
  {
    id: 3945,
    en: "boast",
    az: "öyünmək",
  },
  {
    id: 3946,
    en: "pat",
    az: "astadan əl çalma",
  },
  {
    id: 3947,
    en: "perceived",
    az: "hiss olunur",
  },
  {
    id: 3948,
    en: "sole",
    az: "yeganə",
  },
  {
    id: 3949,
    en: "publicity",
    az: "aşkarlıq",
  },
  {
    id: 3950,
    en: "unfold",
    az: "açmaq",
  },
  {
    id: 3951,
    en: "well-being",
    az: "rifah",
  },
  {
    id: 3952,
    en: "validity",
    az: "etibarlılıq",
  },
  {
    id: 3953,
    en: "ecosystem",
    az: "ekosistem",
  },
  {
    id: 3954,
    en: "strictly",
    az: "ciddi şəkildə",
  },
  {
    id: 3955,
    en: "partial",
    az: "qismən",
  },
  {
    id: 3956,
    en: "collar",
    az: "yaxası",
  },
  {
    id: 3957,
    en: "weed",
    az: "alaq",
  },
  {
    id: 3958,
    en: "compliance",
    az: "uyğunluq",
  },
  {
    id: 3959,
    en: "streak",
    az: "zolaq",
  },
  {
    id: 3960,
    en: "supposedly",
    az: "guya",
  },
  {
    id: 3961,
    en: "added",
    az: "əlavə etdi",
  },
  {
    id: 3962,
    en: "builder",
    az: "inşaatçı",
  },
  {
    id: 3963,
    en: "glimpse",
    az: "nəzər salmaq",
  },
  {
    id: 3964,
    en: "premise",
    az: "otaq",
  },
  {
    id: 3965,
    en: "specialty",
    az: "ixtisas",
  },
  {
    id: 3966,
    en: "deem",
    az: "hesab edir",
  },
  {
    id: 3967,
    en: "artifact",
    az: "artefakt",
  },
  {
    id: 3968,
    en: "sneak",
    az: "gizlətmək",
  },
  {
    id: 3969,
    en: "monkey",
    az: "meymun",
  },
  {
    id: 3970,
    en: "mentor",
    az: "tərbiyəçi",
  },
  {
    id: 3971,
    en: "two-thirds",
    az: "üçdə ikisi",
  },
  {
    id: 3972,
    en: "listener",
    az: "dinləyici",
  },
  {
    id: 3973,
    en: "lightning",
    az: "ildırım",
  },
  {
    id: 3974,
    en: "legally",
    az: "qanuni olaraq",
  },
  {
    id: 3975,
    en: "sleeve",
    az: "qolu",
  },
  {
    id: 3976,
    en: "disappointment",
    az: "məyusluq",
  },
  {
    id: 3977,
    en: "disturb",
    az: "narahat etmək",
  },
  {
    id: 3978,
    en: "rib",
    az: "qabırğa",
  },
  {
    id: 3979,
    en: "excessive",
    az: "həddindən artıq",
  },
  {
    id: 3980,
    en: "high-tech",
    az: "yüksək texnologiya",
  },
  {
    id: 3981,
    en: "debris",
    az: "zibil",
  },
  {
    id: 3982,
    en: "rod",
    az: "çubuq",
  },
  {
    id: 3983,
    en: "logical",
    az: "məntiqi",
  },
  {
    id: 3984,
    en: "ash",
    az: "kül",
  },
  {
    id: 3985,
    en: "socially",
    az: "sosial",
  },
  {
    id: 3986,
    en: "parish",
    az: "kilise",
  },
  {
    id: 3987,
    en: "slavery",
    az: "köləlik",
  },
  {
    id: 3988,
    en: "blank",
    az: "boş",
  },
  {
    id: 3989,
    en: "commodity",
    az: "əmtəə",
  },
  {
    id: 3990,
    en: "cure",
    az: "müalicə",
  },
  {
    id: 3991,
    en: "mineral",
    az: "mineral",
  },
  {
    id: 3992,
    en: "hunger",
    az: "aclıq",
  },
  {
    id: 3993,
    en: "dying",
    az: "ölmək",
  },
  {
    id: 3994,
    en: "developmental",
    az: "inkişaf",
  },
  {
    id: 3995,
    en: "faster",
    az: "Daha sürətli",
  },
  {
    id: 3996,
    en: "spare",
    az: "ehtiyat",
  },
  {
    id: 3997,
    en: "halfway",
    az: "yarı yolda",
  },
  {
    id: 3998,
    en: "equality",
    az: "bərabərlik",
  },
  {
    id: 3999,
    en: "cemetery",
    az: "məzarlıq",
  },
  {
    id: 4000,
    en: "harassment",
    az: "təcavüz",
  },
  {
    id: 4001,
    en: "deliberately",
    az: "qəsdən",
  },
  {
    id: 4002,
    en: "fame",
    az: "şöhrət",
  },
  {
    id: 4003,
    en: "regret",
    az: "təəssüf",
  },
  {
    id: 4004,
    en: "striking",
    az: "təəccüblü",
  },
  {
    id: 4005,
    en: "likelihood",
    az: "ehtimal",
  },
  {
    id: 4006,
    en: "carrot",
    az: "yerkökü",
  },
  {
    id: 4007,
    en: "toll",
    az: "ödəmək",
  },
  {
    id: 4008,
    en: "rim",
    az: "üzük",
  },
  {
    id: 4009,
    en: "embarrassed",
    az: "utanir",
  },
  {
    id: 4010,
    en: "fucking",
    az: "cılız",
  },
  {
    id: 4011,
    en: "cling",
    az: "yapışmaq",
  },
  {
    id: 4012,
    en: "isolated",
    az: "təcrid olunmuşdur",
  },
  {
    id: 4013,
    en: "blink",
    az: "yanıb-sönmək",
  },
  {
    id: 4014,
    en: "suspicious",
    az: "şübhəli",
  },
  {
    id: 4015,
    en: "wheelchair",
    az: "əlil arabası",
  },
  {
    id: 4016,
    en: "squad",
    az: "heyet",
  },
  {
    id: 4017,
    en: "eligible",
    az: "uyğun",
  },
  {
    id: 4018,
    en: "processor",
    az: "prosessor",
  },
  {
    id: 4019,
    en: "plunge",
    az: "qərq olmaq",
  },
  {
    id: 4020,
    en: "demographic",
    az: "demoqrafik",
  },
  {
    id: 4021,
    en: "chill",
    az: "soyuq",
  },
  {
    id: 4022,
    en: "refuge",
    az: "sığınmaq",
  },
  {
    id: 4023,
    en: "steer",
    az: "sükan arxasında oturmaq",
  },
  {
    id: 4024,
    en: "legislator",
    az: "qanunverici",
  },
  {
    id: 4025,
    en: "rally",
    az: "mitinq",
  },
  {
    id: 4026,
    en: "programming",
    az: "proqramlaşdırma",
  },
  {
    id: 4027,
    en: "cheer",
    az: "şadlanmaq",
  },
  {
    id: 4028,
    en: "outlet",
    az: "çıxış",
  },
  {
    id: 4029,
    en: "intact",
    az: "bütöv",
  },
  {
    id: 4030,
    en: "vendor",
    az: "satıcı",
  },
  {
    id: 4031,
    en: "thrive",
    az: "inkişaf etmək",
  },
  {
    id: 4032,
    en: "peanut",
    az: "fıstıq",
  },
  {
    id: 4033,
    en: "chew",
    az: "çeynəmək",
  },
  {
    id: 4034,
    en: "elaborate",
    az: "mükəmməl",
  },
  {
    id: 4035,
    en: "conception",
    az: "konsepsiya",
  },
  {
    id: 4036,
    en: "auction",
    az: "auksion",
  },
  {
    id: 4037,
    en: "steak",
    az: "tikə",
  },
  {
    id: 4038,
    en: "comply",
    az: "uyğun olmaq",
  },
  {
    id: 4039,
    en: "triumph",
    az: "zəfər",
  },
  {
    id: 4040,
    en: "shareholder",
    az: "səhmdar",
  },
  {
    id: 4041,
    en: "comparable",
    az: "müqayisə edilə bilər",
  },
  {
    id: 4042,
    en: "transport",
    az: "nəqliyyat",
  },
  {
    id: 4043,
    en: "conscience",
    az: "vicdan",
  },
  {
    id: 4044,
    en: "calculation",
    az: "hesablama",
  },
  {
    id: 4045,
    en: "considerably",
    az: "xeyli dərəcədə",
  },
  {
    id: 4046,
    en: "interval",
    az: "aralıq",
  },
  {
    id: 4047,
    en: "scratch",
    az: "cızıq",
  },
  {
    id: 4048,
    en: "awake",
    az: "oyaq",
  },
  {
    id: 4049,
    en: "jurisdiction",
    az: "yurisdiksiyası",
  },
  {
    id: 4050,
    en: "inevitably",
    az: "qaçılmaz",
  },
  {
    id: 4051,
    en: "feminist",
    az: "feminist",
  },
  {
    id: 4052,
    en: "constraint",
    az: "məhdudlaşdırmaq",
  },
  {
    id: 4053,
    en: "emotionally",
    az: "emosional olaraq",
  },
  {
    id: 4054,
    en: "expedition",
    az: "ekspedisiya",
  },
  {
    id: 4055,
    en: "hay",
    az: "ot",
  },
  {
    id: 4056,
    en: "similarity",
    az: "oxşarlıq",
  },
  {
    id: 4057,
    en: "butt",
    az: "bud",
  },
  {
    id: 4058,
    en: "lid",
    az: "qapaq",
  },
  {
    id: 4059,
    en: "dumb",
    az: "lal",
  },
  {
    id: 4060,
    en: "bulk",
    az: "toplu",
  },
  {
    id: 4061,
    en: "sprinkle",
    az: "səpmək",
  },
  {
    id: 4062,
    en: "mortality",
    az: "ölüm",
  },
  {
    id: 4063,
    en: "philosophical",
    az: "fəlsəfi",
  },
  {
    id: 4064,
    en: "conversion",
    az: "dönüşüm",
  },
  {
    id: 4065,
    en: "patron",
    az: "himayəçi",
  },
  {
    id: 4066,
    en: "municipal",
    az: "bələdiyyə",
  },
  {
    id: 4067,
    en: "liver",
    az: "qaraciyər",
  },
  {
    id: 4068,
    en: "harmony",
    az: "harmoniya",
  },
  {
    id: 4069,
    en: "solely",
    az: "təkcə",
  },
  {
    id: 4070,
    en: "tolerance",
    az: "dözümlülük",
  },
  {
    id: 4071,
    en: "goat",
    az: "keçi",
  },
  {
    id: 4072,
    en: "blessing",
    az: "xeyir",
  },
  {
    id: 4073,
    en: "banana",
    az: "banan",
  },
  {
    id: 4074,
    en: "palace",
    az: "Saray",
  },
  {
    id: 4075,
    en: "formerly",
    az: "əvvəllər",
  },
  {
    id: 4076,
    en: "peasant",
    az: "kəndli",
  },
  {
    id: 4077,
    en: "neat",
    az: "səliqəli",
  },
  {
    id: 4078,
    en: "grandparent",
    az: "nənə və baba",
  },
  {
    id: 4079,
    en: "lawmaker",
    az: "millət vəkili",
  },
  {
    id: 4080,
    en: "supermarket",
    az: "supermarket",
  },
  {
    id: 4081,
    en: "cruise",
    az: "kruiz",
  },
  {
    id: 4082,
    en: "mobile",
    az: "mobil",
  },
  {
    id: 4083,
    en: "calendar",
    az: "təqvim",
  },
  {
    id: 4084,
    en: "widow",
    az: "dul",
  },
  {
    id: 4085,
    en: "deposit",
    az: "depozit",
  },
  {
    id: 4086,
    en: "beard",
    az: "saqqal",
  },
  {
    id: 4087,
    en: "brake",
    az: "əyləc",
  },
  {
    id: 4088,
    en: "screening",
    az: "ekranlaşdırma",
  },
  {
    id: 4089,
    en: "impulse",
    az: "impuls",
  },
  {
    id: 4090,
    en: "forbid",
    az: "yasaqlamaq",
  },
  {
    id: 4091,
    en: "fur",
    az: "Xəz",
  },
  {
    id: 4092,
    en: "brutal",
    az: "qəddar",
  },
  {
    id: 4093,
    en: "predator",
    az: "yırtıcı",
  },
  {
    id: 4094,
    en: "poke",
    az: "soxmaq",
  },
  {
    id: 4095,
    en: "voluntary",
    az: "könüllü",
  },
  {
    id: 4096,
    en: "valid",
    az: "etibarlıdır",
  },
  {
    id: 4097,
    en: "forum",
    az: "forum",
  },
  {
    id: 4098,
    en: "dancing",
    az: "rəqs edir",
  },
  {
    id: 4099,
    en: "happily",
    az: "xoşbəxtlikdən",
  },
  {
    id: 4100,
    en: "soar",
    az: "uçmaq",
  },
  {
    id: 4101,
    en: "removal",
    az: "çıxarılması",
  },
  {
    id: 4102,
    en: "autonomy",
    az: "muxtariyyət",
  },
  {
    id: 4103,
    en: "enact",
    az: "qüvvəyə minir",
  },
  {
    id: 4104,
    en: "thread",
    az: "iplik",
  },
  {
    id: 4105,
    en: "landmark",
    az: "əlamət",
  },
  {
    id: 4106,
    en: "unhappy",
    az: "bədbəxt",
  },
  {
    id: 4107,
    en: "offender",
    az: "cinayətkar",
  },
  {
    id: 4108,
    en: "coming",
    az: "gələn",
  },
  {
    id: 4109,
    en: "privately",
    az: "özəl",
  },
  {
    id: 4110,
    en: "fraction",
    az: "fraksiya",
  },
  {
    id: 4111,
    en: "distinctive",
    az: "fərqləndirici",
  },
  {
    id: 4112,
    en: "tourism",
    az: "turizm",
  },
  {
    id: 4113,
    en: "threshold",
    az: "eşik",
  },
  {
    id: 4114,
    en: "routinely",
    az: "müntəzəm olaraq",
  },
  {
    id: 4115,
    en: "regulator",
    az: "tənzimləyici",
  },
  {
    id: 4116,
    en: "straw",
    az: "saman",
  },
  {
    id: 4117,
    en: "theological",
    az: "teoloji",
  },
  {
    id: 4118,
    en: "exhaust",
    az: "tükənmək",
  },
  {
    id: 4119,
    en: "globe",
    az: "kürə",
  },
  {
    id: 4120,
    en: "fragile",
    az: "kövrək",
  },
  {
    id: 4121,
    en: "objection",
    az: "etiraz",
  },
  {
    id: 4122,
    en: "chemistry",
    az: "kimya",
  },
  {
    id: 4123,
    en: "old-fashioned",
    az: "köhnə",
  },
  {
    id: 4124,
    en: "crowded",
    az: "izdihamlı",
  },
  {
    id: 4125,
    en: "blast",
    az: "partlayış",
  },
  {
    id: 4126,
    en: "prevail",
    az: "üstünlük təşkil edir",
  },
  {
    id: 4127,
    en: "overnight",
    az: "gecədə",
  },
  {
    id: 4128,
    en: "denial",
    az: "inkar",
  },
  {
    id: 4129,
    en: "rental",
    az: "Avtomobil kirayəsi",
  },
  {
    id: 4130,
    en: "fantastic",
    az: "fantastik",
  },
  {
    id: 4131,
    en: "fragment",
    az: "fraqment",
  },
  {
    id: 4132,
    en: "screw",
    az: "vida",
  },
  {
    id: 4133,
    en: "warmth",
    az: "isti",
  },
  {
    id: 4134,
    en: "undergraduate",
    az: "bakalavr",
  },
  {
    id: 4135,
    en: "headache",
    az: "Baş ağrısı",
  },
  {
    id: 4136,
    en: "policeman",
    az: "polis",
  },
  {
    id: 4137,
    en: "projection",
    az: "proyeksiya",
  },
  {
    id: 4138,
    en: "suitable",
    az: "uyğun",
  },
  {
    id: 4139,
    en: "graduation",
    az: "bitirmə",
  },
  {
    id: 4140,
    en: "drill",
    az: "qazma",
  },
  {
    id: 4141,
    en: "cruel",
    az: "qəddar",
  },
  {
    id: 4142,
    en: "mansion",
    az: "malikanə",
  },
  {
    id: 4143,
    en: "grape",
    az: "üzüm",
  },
  {
    id: 4144,
    en: "authorize",
    az: "icazə vermək",
  },
  {
    id: 4145,
    en: "cottage",
    az: "kottec",
  },
  {
    id: 4146,
    en: "driveway",
    az: "sürücülük yolu",
  },
  {
    id: 4147,
    en: "charm",
    az: "cazibədarlıq",
  },
  {
    id: 4148,
    en: "sexuality",
    az: "cinsəllik",
  },
  {
    id: 4149,
    en: "loyal",
    az: "sadiq",
  },
  {
    id: 4150,
    en: "clay",
    az: "gil",
  },
  {
    id: 4151,
    en: "invention",
    az: "ixtira",
  },
  {
    id: 4152,
    en: "ego",
    az: "eqo",
  },
  {
    id: 4153,
    en: "fare",
    az: "gediş haqqı",
  },
  {
    id: 4154,
    en: "homework",
    az: "ev tapşırığı",
  },
  {
    id: 4155,
    en: "disc",
    az: "disk",
  },
  {
    id: 4156,
    en: "sofa",
    az: "divan",
  },
  {
    id: 4157,
    en: "availability",
    az: "mövcudluğu",
  },
  {
    id: 4158,
    en: "radar",
    az: "radar",
  },
  {
    id: 4159,
    en: "frown",
    az: "qaşqabaq",
  },
  {
    id: 4160,
    en: "regain",
    az: "geri almaq",
  },
  {
    id: 4161,
    en: "sweater",
    az: "kazak",
  },
  {
    id: 4162,
    en: "rehabilitation",
    az: "reabilitasiya",
  },
  {
    id: 4163,
    en: "rubber",
    az: "rezin",
  },
  {
    id: 4164,
    en: "retreat",
    az: "geri çəkilmək",
  },
  {
    id: 4165,
    en: "molecule",
    az: "molekul",
  },
  {
    id: 4166,
    en: "freely",
    az: "sərbəst",
  },
  {
    id: 4167,
    en: "favorable",
    az: "əlverişli",
  },
  {
    id: 4168,
    en: "steadily",
    az: "dayanmadan",
  },
  {
    id: 4169,
    en: "integrated",
    az: "inteqrasiya olunmuşdur",
  },
  {
    id: 4170,
    en: "youngster",
    az: "cavan",
  },
  {
    id: 4171,
    en: "premium",
    az: "mükafat",
  },
  {
    id: 4172,
    en: "accountability",
    az: "hesabatlılıq",
  },
  {
    id: 4173,
    en: "overwhelm",
    az: "əzmək",
  },
  {
    id: 4174,
    en: "one-third",
    az: "Üçdə bir",
  },
  {
    id: 4175,
    en: "contemplate",
    az: "düşünmək",
  },
  {
    id: 4176,
    en: "update",
    az: "yeniləmə",
  },
  {
    id: 4177,
    en: "spark",
    az: "qığılcım",
  },
  {
    id: 4178,
    en: "ironically",
    az: "istehzalı şəkildə",
  },
  {
    id: 4179,
    en: "fatigue",
    az: "yorğunluq",
  },
  {
    id: 4180,
    en: "speculate",
    az: "fərziyyə",
  },
  {
    id: 4181,
    en: "marker",
    az: "marker",
  },
  {
    id: 4182,
    en: "preach",
    az: "təbliğ etmək",
  },
  {
    id: 4183,
    en: "bucket",
    az: "vedrə",
  },
  {
    id: 4184,
    en: "blond",
    az: "sarışın",
  },
  {
    id: 4185,
    en: "confession",
    az: "etiraf",
  },
  {
    id: 4186,
    en: "provoke",
    az: "təhrik etmək",
  },
  {
    id: 4187,
    en: "marble",
    az: "mərmər",
  },
  {
    id: 4188,
    en: "substantially",
    az: "əhəmiyyətli dərəcədə",
  },
  {
    id: 4189,
    en: "defender",
    az: "müdafiəçi",
  },
  {
    id: 4190,
    en: "explicit",
    az: "açıq-aşkar",
  },
  {
    id: 4191,
    en: "disturbing",
    az: "narahat edir",
  },
  {
    id: 4192,
    en: "surveillance",
    az: "nəzarət",
  },
  {
    id: 4193,
    en: "magnetic",
    az: "maqnit",
  },
  {
    id: 4194,
    en: "technician",
    az: "texnoloq",
  },
  {
    id: 4195,
    en: "mutter",
    az: "səssizcə",
  },
  {
    id: 4196,
    en: "devastating",
    az: "dağıdıcı",
  },
  {
    id: 4197,
    en: "depart",
    az: "yola düşmək",
  },
  {
    id: 4198,
    en: "arrow",
    az: "ox",
  },
  {
    id: 4199,
    en: "trauma",
    az: "travma",
  },
  {
    id: 4200,
    en: "neighboring",
    az: "qonşu",
  },
  {
    id: 4201,
    en: "soak",
    az: "islatmaq",
  },
  {
    id: 4202,
    en: "ribbon",
    az: "lent",
  },
  {
    id: 4203,
    en: "meantime",
    az: "bu vaxt",
  },
  {
    id: 4204,
    en: "transmit",
    az: "ötürmək",
  },
  {
    id: 4205,
    en: "harvest",
    az: "məhsul",
  },
  {
    id: 4206,
    en: "consecutive",
    az: "ardıcıl",
  },
  {
    id: 4207,
    en: "coordinate",
    az: "əlaqələndirmək",
  },
  {
    id: 4208,
    en: "spy",
    az: "casus",
  },
  {
    id: 4209,
    en: "slot",
    az: "yuva",
  },
  {
    id: 4210,
    en: "riot",
    az: "iğtişaş",
  },
  {
    id: 4211,
    en: "nutrient",
    az: "qida",
  },
  {
    id: 4212,
    en: "citizenship",
    az: "vətəndaşlıq",
  },
  {
    id: 4213,
    en: "severely",
    az: "ciddi şəkildə",
  },
  {
    id: 4214,
    en: "sovereignty",
    az: "suverenlik",
  },
  {
    id: 4215,
    en: "ridge",
    az: "silsiləsi",
  },
  {
    id: 4216,
    en: "brave",
    az: "cəsur",
  },
  {
    id: 4217,
    en: "lighting",
    az: "işıqlandırma",
  },
  {
    id: 4218,
    en: "specify",
    az: "göstərin",
  },
  {
    id: 4219,
    en: "contributor",
    az: "töhfə verən",
  },
  {
    id: 4220,
    en: "frustrate",
    az: "incitmək",
  },
  {
    id: 4221,
    en: "articulate",
    az: "diktə etmək",
  },
  {
    id: 4222,
    en: "importantly",
    az: "vacibdir",
  },
  {
    id: 4223,
    en: "transit",
    az: "tranzit",
  },
  {
    id: 4224,
    en: "dense",
    az: "sıx",
  },
  {
    id: 4225,
    en: "seminar",
    az: "seminar",
  },
  {
    id: 4226,
    en: "electronics",
    az: "elektronika",
  },
  {
    id: 4227,
    en: "sunny",
    az: "günəşli",
  },
  {
    id: 4228,
    en: "shorts",
    az: "şort",
  },
  {
    id: 4229,
    en: "swell",
    az: "şişmək",
  },
  {
    id: 4230,
    en: "accusation",
    az: "ittiham",
  },
  {
    id: 4231,
    en: "soften",
    az: "yumşalmaq",
  },
  {
    id: 4232,
    en: "straighten",
    az: "düzəldin",
  },
  {
    id: 4233,
    en: "terribly",
    az: "dəhşətli",
  },
  {
    id: 4234,
    en: "cue",
    az: "replika",
  },
  {
    id: 4235,
    en: "bride",
    az: "gəlin",
  },
  {
    id: 4236,
    en: "biography",
    az: "tərcümeyi-hal",
  },
  {
    id: 4237,
    en: "hazard",
    az: "təhlükə",
  },
  {
    id: 4238,
    en: "compelling",
    az: "məcburedici",
  },
  {
    id: 4239,
    en: "seldom",
    az: "Nadir hallarda",
  },
  {
    id: 4240,
    en: "tile",
    az: "kafel",
  },
  {
    id: 4241,
    en: "economically",
    az: "iqtisadi cəhətdən",
  },
  {
    id: 4242,
    en: "honestly",
    az: "vicdanla",
  },
  {
    id: 4243,
    en: "troubled",
    az: "dərdli",
  },
  {
    id: 4244,
    en: "twentieth",
    az: "iyirminci",
  },
  {
    id: 4245,
    en: "balanced",
    az: "balanslıdır",
  },
  {
    id: 4246,
    en: "foreigner",
    az: "xarici",
  },
  {
    id: 4247,
    en: "convenience",
    az: "rahatlıq",
  },
  {
    id: 4248,
    en: "delight",
    az: "zövq",
  },
  {
    id: 4249,
    en: "weave",
    az: "hörmək",
  },
  {
    id: 4250,
    en: "timber",
    az: "taxta",
  },
  {
    id: 4251,
    en: "till",
    az: "qədər",
  },
  {
    id: 4252,
    en: "accurately",
    az: "dəqiqliklə",
  },
  {
    id: 4253,
    en: "plea",
    az: "yalvariram",
  },
  {
    id: 4254,
    en: "bulb",
    az: "ampul",
  },
  {
    id: 4255,
    en: "flying",
    az: "uçan",
  },
  {
    id: 4256,
    en: "sustainable",
    az: "davamlı",
  },
  {
    id: 4257,
    en: "devil",
    az: "şeytan",
  },
  {
    id: 4258,
    en: "bolt",
    az: "bolt",
  },
  {
    id: 4259,
    en: "cargo",
    az: "yük",
  },
  {
    id: 4260,
    en: "spine",
    az: "onurğa",
  },
  {
    id: 4261,
    en: "seller",
    az: "satıcı",
  },
  {
    id: 4262,
    en: "skilled",
    az: "bacarıqlı",
  },
  {
    id: 4263,
    en: "managing",
    az: "idarəetmə",
  },
  {
    id: 4264,
    en: "marine",
    az: "dəniz",
  },
  {
    id: 4265,
    en: "dock",
    az: "dok",
  },
  {
    id: 4266,
    en: "organized",
    az: "mütəşəkkil",
  },
  {
    id: 4267,
    en: "fog",
    az: "duman",
  },
  {
    id: 4268,
    en: "diplomat",
    az: "diplomat",
  },
  {
    id: 4269,
    en: "boring",
    az: "darıxdırıcı",
  },
  {
    id: 4270,
    en: "sometime",
    az: "nə vaxtsa",
  },
  {
    id: 4271,
    en: "summary",
    az: "xülasə",
  },
  {
    id: 4272,
    en: "missionary",
    az: "missioner",
  },
  {
    id: 4273,
    en: "epidemic",
    az: "epidemiya",
  },
  {
    id: 4274,
    en: "fatal",
    az: "ölümcül",
  },
  {
    id: 4275,
    en: "trim",
    az: "bezmək",
  },
  {
    id: 4276,
    en: "warehouse",
    az: "anbar",
  },
  {
    id: 4277,
    en: "accelerate",
    az: "sürətləndirmək",
  },
  {
    id: 4278,
    en: "butterfly",
    az: "kəpənək",
  },
  {
    id: 4279,
    en: "bronze",
    az: "bürünc",
  },
  {
    id: 4280,
    en: "drown",
    az: "boğulmaq",
  },
  {
    id: 4281,
    en: "inherent",
    az: "xas olan",
  },
  {
    id: 4282,
    en: "nationwide",
    az: "ümummilli",
  },
  {
    id: 4283,
    en: "spit",
    az: "tüpürmək",
  },
  {
    id: 4284,
    en: "kneel",
    az: "diz çökmək",
  },
  {
    id: 4285,
    en: "vacuum",
    az: "vakuum",
  },
  {
    id: 4286,
    en: "selected",
    az: "seçilib",
  },
  {
    id: 4287,
    en: "dictate",
    az: "diktə edin",
  },
  {
    id: 4288,
    en: "stereotype",
    az: "stereotip",
  },
  {
    id: 4289,
    en: "sensor",
    az: "sensor",
  },
  {
    id: 4290,
    en: "laundry",
    az: "camaşırxana",
  },
  {
    id: 4291,
    en: "manual",
    az: "dərslik",
  },
  {
    id: 4292,
    en: "pistol",
    az: "tapança",
  },
  {
    id: 4293,
    en: "naval",
    az: "dəniz",
  },
  {
    id: 4294,
    en: "plaintiff",
    az: "iddiaçı",
  },
  {
    id: 4295,
    en: "middle-class",
    az: "orta sinif",
  },
  {
    id: 4296,
    en: "apology",
    az: "üzr istəmək",
  },
  {
    id: 4297,
    en: "be",
    az: "olmaq",
  },
  {
    id: 4298,
    en: "and",
    az: "və",
  },
  {
    id: 4299,
    en: "in",
    az: "içində",
  },
  {
    id: 4300,
    en: "to",
    az: "üçün",
  },
  {
    id: 4301,
    en: "have",
    az: "var",
  },
  {
    id: 4302,
    en: "it",
    az: "o",
  },
  {
    id: 4303,
    en: "I",
    az: "Mən",
  },
  {
    id: 4304,
    en: "that",
    az: "ki",
  },
  {
    id: 4305,
    en: "for",
    az: "üçün",
  },
  {
    id: 4306,
    en: "you",
    az: "Sən",
  },
  {
    id: 4307,
    en: "he",
    az: "o",
  },
  {
    id: 4308,
    en: "with",
    az: "ilə",
  },
  {
    id: 4309,
    en: "on",
    az: "yandır",
  },
  {
    id: 4310,
    en: "do",
    az: "etmək",
  },
  {
    id: 4311,
    en: "say",
    az: "deyin",
  },
  {
    id: 4312,
    en: "this",
    az: "bu",
  },
  {
    id: 4313,
    en: "they",
    az: "onlar",
  },
  {
    id: 4314,
    en: "but",
    az: "Amma",
  },
  {
    id: 4315,
    en: "we",
    az: "Biz",
  },
  {
    id: 4316,
    en: "his",
    az: "onun",
  },
  {
    id: 4317,
    en: "from",
    az: "dən",
  },
  {
    id: 4318,
    en: "not",
    az: "deyil",
  },
  {
    id: 4319,
    en: "n't",
    az: "n",
  },
  {
    id: 4320,
    en: "by",
    az: "tərəfindən",
  },
  {
    id: 4321,
    en: "she",
    az: "o",
  },
  {
    id: 4322,
    en: "or",
    az: "və ya",
  },
  {
    id: 4323,
    en: "as",
    az: "kimi",
  },
  {
    id: 4324,
    en: "what",
    az: "nə",
  },
  {
    id: 4325,
    en: "go",
    az: "get",
  },
  {
    id: 4326,
    en: "their",
    az: "onların",
  },
  {
    id: 4327,
    en: "can",
    az: "bacarmaq",
  },
  {
    id: 4328,
    en: "who",
    az: "kim",
  },
  {
    id: 4329,
    en: "get",
    az: "almaq",
  },
  {
    id: 4330,
    en: "if",
    az: "əgər",
  },
  {
    id: 4331,
    en: "would",
    az: "olardı",
  },
  {
    id: 4332,
    en: "her",
    az: "onun",
  },
  {
    id: 4333,
    en: "all",
    az: "hamısı",
  },
  {
    id: 4334,
    en: "my",
    az: "mənim",
  },
  {
    id: 4335,
    en: "make",
    az: "etmək",
  },
  {
    id: 4336,
    en: "about",
    az: "haqqında",
  },
  {
    id: 4337,
    en: "know",
    az: "bilin",
  },
  {
    id: 4338,
    en: "will",
    az: "edəcək",
  },
  {
    id: 4339,
    en: "up",
    az: "yuxarı",
  },
  {
    id: 4340,
    en: "one",
    az: "biri",
  },
  {
    id: 4341,
    en: "time",
    az: "vaxt",
  },
  {
    id: 4342,
    en: "there",
    az: "orada",
  },
  {
    id: 4343,
    en: "year",
    az: "il",
  },
  {
    id: 4344,
    en: "so",
    az: "belə ki",
  },
  {
    id: 4345,
    en: "think",
    az: "düşün",
  },
  {
    id: 4346,
    en: "when",
    az: "nə vaxt",
  },
  {
    id: 4347,
    en: "which",
    az: "hansı",
  },
  {
    id: 4348,
    en: "them",
    az: "onları",
  },
  {
    id: 4349,
    en: "some",
    az: "bəzi",
  },
  {
    id: 4350,
    en: "me",
    az: "menim",
  },
  {
    id: 4351,
    en: "people",
    az: "Xalq",
  },
  {
    id: 4352,
    en: "take",
    az: "götürmək",
  },
  {
    id: 4353,
    en: "out",
    az: "çöldə",
  },
  {
    id: 4354,
    en: "into",
    az: "daxil",
  },
  {
    id: 4355,
    en: "just",
    az: "sadəcə",
  },
  {
    id: 4356,
    en: "see",
    az: "görmək",
  },
  {
    id: 4357,
    en: "him",
    az: "Ona",
  },
  {
    id: 4358,
    en: "your",
    az: "sənin",
  },
  {
    id: 4359,
    en: "come",
    az: "gəl",
  },
  {
    id: 4360,
    en: "could",
    az: "bilərdi",
  },
  {
    id: 4361,
    en: "now",
    az: "İndi",
  },
  {
    id: 4362,
    en: "than",
    az: "daha çox",
  },
  {
    id: 4363,
    en: "like",
    az: "kimi",
  },
  {
    id: 4364,
    en: "other",
    az: "digərləri",
  },
  {
    id: 4365,
    en: "how",
    az: "Necə",
  },
  {
    id: 4366,
    en: "then",
    az: "sonra",
  },
  {
    id: 4367,
    en: "its",
    az: "onun",
  },
  {
    id: 4368,
    en: "our",
    az: "bizim",
  },
  {
    id: 4369,
    en: "two",
    az: "iki",
  },
  {
    id: 4370,
    en: "more",
    az: "daha çox",
  },
  {
    id: 4371,
    en: "these",
    az: "bunlar",
  },
  {
    id: 4372,
    en: "want",
    az: "istəmək",
  },
  {
    id: 4373,
    en: "way",
    az: "yol",
  },
  {
    id: 4374,
    en: "look",
    az: "baxmaq",
  },
  {
    id: 4375,
    en: "first",
    az: "əvvəlcə",
  },
  {
    id: 4376,
    en: "also",
    az: "həmçinin",
  },
  {
    id: 4377,
    en: "new",
    az: "yeni",
  },
  {
    id: 4378,
    en: "because",
    az: "çünki",
  },
  {
    id: 4379,
    en: "day",
    az: "gün",
  },
  {
    id: 4380,
    en: "use",
    az: "istifadə etmək",
  },
  {
    id: 4381,
    en: "no",
    az: "yox",
  },
  {
    id: 4382,
    en: "man",
    az: "adam",
  },
  {
    id: 4383,
    en: "find",
    az: "tapmaq",
  },
  {
    id: 4384,
    en: "here",
    az: "burada",
  },
  {
    id: 4385,
    en: "thing",
    az: "şey",
  },
  {
    id: 4386,
    en: "give",
    az: "vermək",
  },
  {
    id: 4387,
    en: "many",
    az: "çoxu",
  },
  {
    id: 4388,
    en: "well",
    az: "yaxşı",
  },
  {
    id: 4389,
    en: "only",
    az: "yalnız",
  },
  {
    id: 4390,
    en: "those",
    az: "olanlar",
  },
  {
    id: 4391,
    en: "tell",
    az: "söylə",
  },
  {
    id: 4392,
    en: "very",
    az: "çox",
  },
  {
    id: 4393,
    en: "even",
    az: "hətta",
  },
  {
    id: 4394,
    en: "back",
    az: "geri",
  },
  {
    id: 4395,
    en: "any",
    az: "hər hansı",
  },
  {
    id: 4396,
    en: "good",
    az: "yaxşı",
  },
  {
    id: 4397,
    en: "be",
    az: "olmaq",
  },
  {
    id: 4398,
    en: "and",
    az: "və",
  },
  {
    id: 4399,
    en: "in",
    az: "içində",
  },
  {
    id: 4400,
    en: "to",
    az: "üçün",
  },
  {
    id: 4401,
    en: "have",
    az: "var",
  },
  {
    id: 4402,
    en: "it",
    az: "o",
  },
  {
    id: 4403,
    en: "I",
    az: "Mən",
  },
  {
    id: 4404,
    en: "that",
    az: "ki",
  },
  {
    id: 4405,
    en: "for",
    az: "üçün",
  },
  {
    id: 4406,
    en: "you",
    az: "Sən",
  },
  {
    id: 4407,
    en: "he",
    az: "o",
  },
  {
    id: 4408,
    en: "with",
    az: "ilə",
  },
  {
    id: 4409,
    en: "on",
    az: "yandır",
  },
  {
    id: 4410,
    en: "do",
    az: "etmək",
  },
  {
    id: 4411,
    en: "say",
    az: "deyin",
  },
  {
    id: 4412,
    en: "this",
    az: "bu",
  },
  {
    id: 4413,
    en: "they",
    az: "onlar",
  },
  {
    id: 4414,
    en: "but",
    az: "Amma",
  },
  {
    id: 4415,
    en: "we",
    az: "Biz",
  },
  {
    id: 4416,
    en: "his",
    az: "onun",
  },
  {
    id: 4417,
    en: "from",
    az: "dən",
  },
  {
    id: 4418,
    en: "not",
    az: "deyil",
  },
  {
    id: 4419,
    en: "n't",
    az: "n",
  },
  {
    id: 4420,
    en: "by",
    az: "tərəfindən",
  },
  {
    id: 4421,
    en: "she",
    az: "o",
  },
  {
    id: 4422,
    en: "or",
    az: "və ya",
  },
  {
    id: 4423,
    en: "as",
    az: "kimi",
  },
  {
    id: 4424,
    en: "what",
    az: "nə",
  },
  {
    id: 4425,
    en: "go",
    az: "get",
  },
  {
    id: 4426,
    en: "their",
    az: "onların",
  },
  {
    id: 4427,
    en: "can",
    az: "bacarmaq",
  },
  {
    id: 4428,
    en: "who",
    az: "kim",
  },
  {
    id: 4429,
    en: "get",
    az: "almaq",
  },
  {
    id: 4430,
    en: "if",
    az: "əgər",
  },
  {
    id: 4431,
    en: "would",
    az: "olardı",
  },
  {
    id: 4432,
    en: "her",
    az: "onun",
  },
  {
    id: 4433,
    en: "all",
    az: "hamısı",
  },
  {
    id: 4434,
    en: "my",
    az: "mənim",
  },
  {
    id: 4435,
    en: "make",
    az: "etmək",
  },
  {
    id: 4436,
    en: "about",
    az: "haqqında",
  },
  {
    id: 4437,
    en: "know",
    az: "bilin",
  },
  {
    id: 4438,
    en: "will",
    az: "edəcək",
  },
  {
    id: 4439,
    en: "up",
    az: "yuxarı",
  },
  {
    id: 4440,
    en: "one",
    az: "biri",
  },
  {
    id: 4441,
    en: "time",
    az: "vaxt",
  },
  {
    id: 4442,
    en: "there",
    az: "orada",
  },
  {
    id: 4443,
    en: "year",
    az: "il",
  },
  {
    id: 4444,
    en: "so",
    az: "belə ki",
  },
  {
    id: 4445,
    en: "think",
    az: "düşün",
  },
  {
    id: 4446,
    en: "when",
    az: "nə vaxt",
  },
  {
    id: 4447,
    en: "which",
    az: "hansı",
  },
  {
    id: 4448,
    en: "them",
    az: "onları",
  },
  {
    id: 4449,
    en: "some",
    az: "bəzi",
  },
  {
    id: 4450,
    en: "me",
    az: "menim",
  },
  {
    id: 4451,
    en: "people",
    az: "Xalq",
  },
  {
    id: 4452,
    en: "take",
    az: "götürmək",
  },
  {
    id: 4453,
    en: "out",
    az: "çöldə",
  },
  {
    id: 4454,
    en: "into",
    az: "daxil",
  },
  {
    id: 4455,
    en: "just",
    az: "sadəcə",
  },
  {
    id: 4456,
    en: "see",
    az: "görmək",
  },
  {
    id: 4457,
    en: "him",
    az: "Ona",
  },
  {
    id: 4458,
    en: "your",
    az: "sənin",
  },
  {
    id: 4459,
    en: "come",
    az: "gəl",
  },
  {
    id: 4460,
    en: "could",
    az: "bilərdi",
  },
  {
    id: 4461,
    en: "now",
    az: "İndi",
  },
  {
    id: 4462,
    en: "than",
    az: "daha çox",
  },
  {
    id: 4463,
    en: "like",
    az: "kimi",
  },
  {
    id: 4464,
    en: "other",
    az: "digərləri",
  },
  {
    id: 4465,
    en: "how",
    az: "Necə",
  },
  {
    id: 4466,
    en: "then",
    az: "sonra",
  },
  {
    id: 4467,
    en: "its",
    az: "onun",
  },
  {
    id: 4468,
    en: "our",
    az: "bizim",
  },
  {
    id: 4469,
    en: "two",
    az: "iki",
  },
  {
    id: 4470,
    en: "more",
    az: "daha çox",
  },
  {
    id: 4471,
    en: "these",
    az: "bunlar",
  },
  {
    id: 4472,
    en: "want",
    az: "istəmək",
  },
  {
    id: 4473,
    en: "way",
    az: "yol",
  },
  {
    id: 4474,
    en: "look",
    az: "baxmaq",
  },
  {
    id: 4475,
    en: "first",
    az: "əvvəlcə",
  },
  {
    id: 4476,
    en: "also",
    az: "həmçinin",
  },
  {
    id: 4477,
    en: "new",
    az: "yeni",
  },
  {
    id: 4478,
    en: "because",
    az: "çünki",
  },
  {
    id: 4479,
    en: "day",
    az: "gün",
  },
  {
    id: 4480,
    en: "use",
    az: "istifadə etmək",
  },
  {
    id: 4481,
    en: "no",
    az: "yox",
  },
  {
    id: 4482,
    en: "man",
    az: "adam",
  },
  {
    id: 4483,
    en: "find",
    az: "tapmaq",
  },
  {
    id: 4484,
    en: "here",
    az: "burada",
  },
  {
    id: 4485,
    en: "thing",
    az: "şey",
  },
  {
    id: 4486,
    en: "give",
    az: "vermək",
  },
  {
    id: 4487,
    en: "many",
    az: "çoxu",
  },
  {
    id: 4488,
    en: "well",
    az: "yaxşı",
  },
  {
    id: 4489,
    en: "only",
    az: "yalnız",
  },
  {
    id: 4490,
    en: "those",
    az: "olanlar",
  },
  {
    id: 4491,
    en: "tell",
    az: "söylə",
  },
  {
    id: 4492,
    en: "very",
    az: "çox",
  },
  {
    id: 4493,
    en: "even",
    az: "hətta",
  },
  {
    id: 4494,
    en: "back",
    az: "geri",
  },
  {
    id: 4495,
    en: "any",
    az: "hər hansı",
  },
  {
    id: 4496,
    en: "good",
    az: "yaxşı",
  },
  {
    id: 4497,
    en: "be",
    az: "olmaq",
  },
  {
    id: 4498,
    en: "and",
    az: "və",
  },
  {
    id: 4499,
    en: "in",
    az: "içində",
  },
  {
    id: 4500,
    en: "to",
    az: "üçün",
  },
  {
    id: 4501,
    en: "have",
    az: "var",
  },
  {
    id: 4502,
    en: "it",
    az: "o",
  },
  {
    id: 4503,
    en: "I",
    az: "Mən",
  },
  {
    id: 4504,
    en: "that",
    az: "ki",
  },
  {
    id: 4505,
    en: "for",
    az: "üçün",
  },
  {
    id: 4506,
    en: "you",
    az: "Sən",
  },
  {
    id: 4507,
    en: "he",
    az: "o",
  },
  {
    id: 4508,
    en: "with",
    az: "ilə",
  },
  {
    id: 4509,
    en: "on",
    az: "yandır",
  },
  {
    id: 4510,
    en: "do",
    az: "etmək",
  },
  {
    id: 4511,
    en: "say",
    az: "deyin",
  },
  {
    id: 4512,
    en: "this",
    az: "bu",
  },
  {
    id: 4513,
    en: "they",
    az: "onlar",
  },
  {
    id: 4514,
    en: "but",
    az: "Amma",
  },
  {
    id: 4515,
    en: "we",
    az: "Biz",
  },
  {
    id: 4516,
    en: "his",
    az: "onun",
  },
  {
    id: 4517,
    en: "from",
    az: "dən",
  },
  {
    id: 4518,
    en: "not",
    az: "deyil",
  },
  {
    id: 4519,
    en: "n't",
    az: "n",
  },
  {
    id: 4520,
    en: "by",
    az: "tərəfindən",
  },
  {
    id: 4521,
    en: "she",
    az: "o",
  },
  {
    id: 4522,
    en: "or",
    az: "və ya",
  },
  {
    id: 4523,
    en: "as",
    az: "kimi",
  },
  {
    id: 4524,
    en: "what",
    az: "nə",
  },
  {
    id: 4525,
    en: "go",
    az: "get",
  },
  {
    id: 4526,
    en: "their",
    az: "onların",
  },
  {
    id: 4527,
    en: "can",
    az: "bacarmaq",
  },
  {
    id: 4528,
    en: "who",
    az: "kim",
  },
  {
    id: 4529,
    en: "get",
    az: "almaq",
  },
  {
    id: 4530,
    en: "if",
    az: "əgər",
  },
  {
    id: 4531,
    en: "would",
    az: "olardı",
  },
  {
    id: 4532,
    en: "her",
    az: "onun",
  },
  {
    id: 4533,
    en: "all",
    az: "hamısı",
  },
  {
    id: 4534,
    en: "my",
    az: "mənim",
  },
  {
    id: 4535,
    en: "make",
    az: "etmək",
  },
  {
    id: 4536,
    en: "about",
    az: "haqqında",
  },
  {
    id: 4537,
    en: "know",
    az: "bilin",
  },
  {
    id: 4538,
    en: "will",
    az: "edəcək",
  },
  {
    id: 4539,
    en: "up",
    az: "yuxarı",
  },
  {
    id: 4540,
    en: "one",
    az: "biri",
  },
  {
    id: 4541,
    en: "time",
    az: "vaxt",
  },
  {
    id: 4542,
    en: "there",
    az: "orada",
  },
  {
    id: 4543,
    en: "year",
    az: "il",
  },
  {
    id: 4544,
    en: "so",
    az: "belə ki",
  },
  {
    id: 4545,
    en: "think",
    az: "düşün",
  },
  {
    id: 4546,
    en: "when",
    az: "nə vaxt",
  },
  {
    id: 4547,
    en: "which",
    az: "hansı",
  },
  {
    id: 4548,
    en: "them",
    az: "onları",
  },
  {
    id: 4549,
    en: "some",
    az: "bəzi",
  },
  {
    id: 4550,
    en: "me",
    az: "menim",
  },
  {
    id: 4551,
    en: "people",
    az: "Xalq",
  },
  {
    id: 4552,
    en: "take",
    az: "götürmək",
  },
  {
    id: 4553,
    en: "out",
    az: "çöldə",
  },
  {
    id: 4554,
    en: "into",
    az: "daxil",
  },
  {
    id: 4555,
    en: "just",
    az: "sadəcə",
  },
  {
    id: 4556,
    en: "see",
    az: "görmək",
  },
  {
    id: 4557,
    en: "him",
    az: "Ona",
  },
  {
    id: 4558,
    en: "your",
    az: "sənin",
  },
  {
    id: 4559,
    en: "come",
    az: "gəl",
  },
  {
    id: 4560,
    en: "could",
    az: "bilərdi",
  },
  {
    id: 4561,
    en: "now",
    az: "İndi",
  },
  {
    id: 4562,
    en: "than",
    az: "daha çox",
  },
  {
    id: 4563,
    en: "like",
    az: "kimi",
  },
  {
    id: 4564,
    en: "other",
    az: "digərləri",
  },
  {
    id: 4565,
    en: "how",
    az: "Necə",
  },
  {
    id: 4566,
    en: "then",
    az: "sonra",
  },
  {
    id: 4567,
    en: "its",
    az: "onun",
  },
  {
    id: 4568,
    en: "our",
    az: "bizim",
  },
  {
    id: 4569,
    en: "two",
    az: "iki",
  },
  {
    id: 4570,
    en: "more",
    az: "daha çox",
  },
  {
    id: 4571,
    en: "these",
    az: "bunlar",
  },
  {
    id: 4572,
    en: "want",
    az: "istəmək",
  },
  {
    id: 4573,
    en: "way",
    az: "yol",
  },
  {
    id: 4574,
    en: "look",
    az: "baxmaq",
  },
  {
    id: 4575,
    en: "first",
    az: "əvvəlcə",
  },
  {
    id: 4576,
    en: "also",
    az: "həmçinin",
  },
  {
    id: 4577,
    en: "new",
    az: "yeni",
  },
  {
    id: 4578,
    en: "because",
    az: "çünki",
  },
  {
    id: 4579,
    en: "day",
    az: "gün",
  },
  {
    id: 4580,
    en: "use",
    az: "istifadə etmək",
  },
  {
    id: 4581,
    en: "no",
    az: "yox",
  },
  {
    id: 4582,
    en: "man",
    az: "adam",
  },
  {
    id: 4583,
    en: "find",
    az: "tapmaq",
  },
  {
    id: 4584,
    en: "here",
    az: "burada",
  },
  {
    id: 4585,
    en: "thing",
    az: "şey",
  },
  {
    id: 4586,
    en: "give",
    az: "vermək",
  },
  {
    id: 4587,
    en: "many",
    az: "çoxu",
  },
  {
    id: 4588,
    en: "well",
    az: "yaxşı",
  },
  {
    id: 4589,
    en: "only",
    az: "yalnız",
  },
  {
    id: 4590,
    en: "those",
    az: "olanlar",
  },
  {
    id: 4591,
    en: "tell",
    az: "söylə",
  },
  {
    id: 4592,
    en: "very",
    az: "çox",
  },
  {
    id: 4593,
    en: "even",
    az: "hətta",
  },
  {
    id: 4594,
    en: "back",
    az: "geri",
  },
  {
    id: 4595,
    en: "any",
    az: "hər hansı",
  },
  {
    id: 4596,
    en: "good",
    az: "yaxşı",
  },
  {
    id: 4597,
    en: "be",
    az: "olmaq",
  },
  {
    id: 4598,
    en: "and",
    az: "və",
  },
  {
    id: 4599,
    en: "in",
    az: "içində",
  },
  {
    id: 4600,
    en: "to",
    az: "üçün",
  },
  {
    id: 4601,
    en: "have",
    az: "var",
  },
  {
    id: 4602,
    en: "it",
    az: "o",
  },
  {
    id: 4603,
    en: "I",
    az: "Mən",
  },
  {
    id: 4604,
    en: "that",
    az: "ki",
  },
  {
    id: 4605,
    en: "for",
    az: "üçün",
  },
  {
    id: 4606,
    en: "you",
    az: "Sən",
  },
  {
    id: 4607,
    en: "he",
    az: "o",
  },
  {
    id: 4608,
    en: "with",
    az: "ilə",
  },
  {
    id: 4609,
    en: "on",
    az: "yandır",
  },
  {
    id: 4610,
    en: "do",
    az: "etmək",
  },
  {
    id: 4611,
    en: "say",
    az: "deyin",
  },
  {
    id: 4612,
    en: "this",
    az: "bu",
  },
  {
    id: 4613,
    en: "they",
    az: "onlar",
  },
  {
    id: 4614,
    en: "but",
    az: "Amma",
  },
  {
    id: 4615,
    en: "we",
    az: "Biz",
  },
  {
    id: 4616,
    en: "his",
    az: "onun",
  },
  {
    id: 4617,
    en: "from",
    az: "dən",
  },
  {
    id: 4618,
    en: "not",
    az: "deyil",
  },
  {
    id: 4619,
    en: "n't",
    az: "n",
  },
  {
    id: 4620,
    en: "by",
    az: "tərəfindən",
  },
  {
    id: 4621,
    en: "she",
    az: "o",
  },
  {
    id: 4622,
    en: "or",
    az: "və ya",
  },
  {
    id: 4623,
    en: "as",
    az: "kimi",
  },
  {
    id: 4624,
    en: "what",
    az: "nə",
  },
  {
    id: 4625,
    en: "go",
    az: "get",
  },
  {
    id: 4626,
    en: "their",
    az: "onların",
  },
  {
    id: 4627,
    en: "can",
    az: "bacarmaq",
  },
  {
    id: 4628,
    en: "who",
    az: "kim",
  },
  {
    id: 4629,
    en: "get",
    az: "almaq",
  },
  {
    id: 4630,
    en: "if",
    az: "əgər",
  },
  {
    id: 4631,
    en: "would",
    az: "olardı",
  },
  {
    id: 4632,
    en: "her",
    az: "onun",
  },
  {
    id: 4633,
    en: "all",
    az: "hamısı",
  },
  {
    id: 4634,
    en: "my",
    az: "mənim",
  },
  {
    id: 4635,
    en: "make",
    az: "etmək",
  },
  {
    id: 4636,
    en: "about",
    az: "haqqında",
  },
  {
    id: 4637,
    en: "know",
    az: "bilin",
  },
  {
    id: 4638,
    en: "will",
    az: "edəcək",
  },
  {
    id: 4639,
    en: "up",
    az: "yuxarı",
  },
  {
    id: 4640,
    en: "one",
    az: "biri",
  },
  {
    id: 4641,
    en: "time",
    az: "vaxt",
  },
  {
    id: 4642,
    en: "there",
    az: "orada",
  },
  {
    id: 4643,
    en: "year",
    az: "il",
  },
  {
    id: 4644,
    en: "so",
    az: "belə ki",
  },
  {
    id: 4645,
    en: "think",
    az: "düşün",
  },
  {
    id: 4646,
    en: "when",
    az: "nə vaxt",
  },
  {
    id: 4647,
    en: "which",
    az: "hansı",
  },
  {
    id: 4648,
    en: "them",
    az: "onları",
  },
  {
    id: 4649,
    en: "some",
    az: "bəzi",
  },
  {
    id: 4650,
    en: "me",
    az: "menim",
  },
  {
    id: 4651,
    en: "people",
    az: "Xalq",
  },
  {
    id: 4652,
    en: "take",
    az: "götürmək",
  },
  {
    id: 4653,
    en: "out",
    az: "çöldə",
  },
  {
    id: 4654,
    en: "into",
    az: "daxil",
  },
  {
    id: 4655,
    en: "just",
    az: "sadəcə",
  },
  {
    id: 4656,
    en: "see",
    az: "görmək",
  },
  {
    id: 4657,
    en: "him",
    az: "Ona",
  },
  {
    id: 4658,
    en: "your",
    az: "sənin",
  },
  {
    id: 4659,
    en: "come",
    az: "gəl",
  },
  {
    id: 4660,
    en: "could",
    az: "bilərdi",
  },
  {
    id: 4661,
    en: "now",
    az: "İndi",
  },
  {
    id: 4662,
    en: "than",
    az: "daha çox",
  },
  {
    id: 4663,
    en: "like",
    az: "kimi",
  },
  {
    id: 4664,
    en: "other",
    az: "digərləri",
  },
  {
    id: 4665,
    en: "how",
    az: "Necə",
  },
  {
    id: 4666,
    en: "then",
    az: "sonra",
  },
  {
    id: 4667,
    en: "its",
    az: "onun",
  },
  {
    id: 4668,
    en: "our",
    az: "bizim",
  },
  {
    id: 4669,
    en: "two",
    az: "iki",
  },
  {
    id: 4670,
    en: "more",
    az: "daha çox",
  },
  {
    id: 4671,
    en: "these",
    az: "bunlar",
  },
  {
    id: 4672,
    en: "want",
    az: "istəmək",
  },
  {
    id: 4673,
    en: "way",
    az: "yol",
  },
  {
    id: 4674,
    en: "look",
    az: "baxmaq",
  },
  {
    id: 4675,
    en: "first",
    az: "əvvəlcə",
  },
  {
    id: 4676,
    en: "also",
    az: "həmçinin",
  },
  {
    id: 4677,
    en: "new",
    az: "yeni",
  },
  {
    id: 4678,
    en: "because",
    az: "çünki",
  },
  {
    id: 4679,
    en: "day",
    az: "gün",
  },
  {
    id: 4680,
    en: "use",
    az: "istifadə etmək",
  },
  {
    id: 4681,
    en: "no",
    az: "yox",
  },
  {
    id: 4682,
    en: "man",
    az: "adam",
  },
  {
    id: 4683,
    en: "find",
    az: "tapmaq",
  },
  {
    id: 4684,
    en: "here",
    az: "burada",
  },
  {
    id: 4685,
    en: "thing",
    az: "şey",
  },
  {
    id: 4686,
    en: "give",
    az: "vermək",
  },
  {
    id: 4687,
    en: "many",
    az: "çoxu",
  },
  {
    id: 4688,
    en: "well",
    az: "yaxşı",
  },
  {
    id: 4689,
    en: "only",
    az: "yalnız",
  },
  {
    id: 4690,
    en: "those",
    az: "olanlar",
  },
  {
    id: 4691,
    en: "tell",
    az: "söylə",
  },
  {
    id: 4692,
    en: "very",
    az: "çox",
  },
  {
    id: 4693,
    en: "even",
    az: "hətta",
  },
  {
    id: 4694,
    en: "back",
    az: "geri",
  },
  {
    id: 4695,
    en: "any",
    az: "hər hansı",
  },
  {
    id: 4696,
    en: "good",
    az: "yaxşı",
  },
  {
    id: 4697,
    en: "be",
    az: "olmaq",
  },
  {
    id: 4698,
    en: "and",
    az: "və",
  },
  {
    id: 4699,
    en: "in",
    az: "içində",
  },
  {
    id: 4700,
    en: "to",
    az: "üçün",
  },
  {
    id: 4701,
    en: "have",
    az: "var",
  },
  {
    id: 4702,
    en: "it",
    az: "o",
  },
  {
    id: 4703,
    en: "I",
    az: "Mən",
  },
  {
    id: 4704,
    en: "that",
    az: "ki",
  },
  {
    id: 4705,
    en: "for",
    az: "üçün",
  },
  {
    id: 4706,
    en: "you",
    az: "Sən",
  },
  {
    id: 4707,
    en: "he",
    az: "o",
  },
  {
    id: 4708,
    en: "with",
    az: "ilə",
  },
  {
    id: 4709,
    en: "on",
    az: "yandır",
  },
  {
    id: 4710,
    en: "do",
    az: "etmək",
  },
  {
    id: 4711,
    en: "say",
    az: "deyin",
  },
  {
    id: 4712,
    en: "this",
    az: "bu",
  },
  {
    id: 4713,
    en: "they",
    az: "onlar",
  },
  {
    id: 4714,
    en: "but",
    az: "Amma",
  },
  {
    id: 4715,
    en: "we",
    az: "Biz",
  },
  {
    id: 4716,
    en: "his",
    az: "onun",
  },
  {
    id: 4717,
    en: "from",
    az: "dən",
  },
  {
    id: 4718,
    en: "not",
    az: "deyil",
  },
  {
    id: 4719,
    en: "n't",
    az: "n",
  },
  {
    id: 4720,
    en: "by",
    az: "tərəfindən",
  },
  {
    id: 4721,
    en: "she",
    az: "o",
  },
  {
    id: 4722,
    en: "or",
    az: "və ya",
  },
  {
    id: 4723,
    en: "as",
    az: "kimi",
  },
  {
    id: 4724,
    en: "what",
    az: "nə",
  },
  {
    id: 4725,
    en: "go",
    az: "get",
  },
  {
    id: 4726,
    en: "their",
    az: "onların",
  },
  {
    id: 4727,
    en: "can",
    az: "bacarmaq",
  },
  {
    id: 4728,
    en: "who",
    az: "kim",
  },
  {
    id: 4729,
    en: "get",
    az: "almaq",
  },
  {
    id: 4730,
    en: "if",
    az: "əgər",
  },
  {
    id: 4731,
    en: "would",
    az: "olardı",
  },
  {
    id: 4732,
    en: "her",
    az: "onun",
  },
  {
    id: 4733,
    en: "all",
    az: "hamısı",
  },
  {
    id: 4734,
    en: "my",
    az: "mənim",
  },
  {
    id: 4735,
    en: "make",
    az: "etmək",
  },
  {
    id: 4736,
    en: "about",
    az: "haqqında",
  },
  {
    id: 4737,
    en: "know",
    az: "bilin",
  },
  {
    id: 4738,
    en: "will",
    az: "edəcək",
  },
  {
    id: 4739,
    en: "up",
    az: "yuxarı",
  },
  {
    id: 4740,
    en: "one",
    az: "biri",
  },
  {
    id: 4741,
    en: "time",
    az: "vaxt",
  },
  {
    id: 4742,
    en: "there",
    az: "orada",
  },
  {
    id: 4743,
    en: "year",
    az: "il",
  },
  {
    id: 4744,
    en: "so",
    az: "belə ki",
  },
  {
    id: 4745,
    en: "think",
    az: "düşün",
  },
  {
    id: 4746,
    en: "when",
    az: "nə vaxt",
  },
  {
    id: 4747,
    en: "which",
    az: "hansı",
  },
  {
    id: 4748,
    en: "them",
    az: "onları",
  },
  {
    id: 4749,
    en: "some",
    az: "bəzi",
  },
  {
    id: 4750,
    en: "me",
    az: "menim",
  },
  {
    id: 4751,
    en: "people",
    az: "Xalq",
  },
  {
    id: 4752,
    en: "take",
    az: "götürmək",
  },
  {
    id: 4753,
    en: "out",
    az: "çöldə",
  },
  {
    id: 4754,
    en: "into",
    az: "daxil",
  },
  {
    id: 4755,
    en: "just",
    az: "sadəcə",
  },
  {
    id: 4756,
    en: "see",
    az: "görmək",
  },
  {
    id: 4757,
    en: "him",
    az: "Ona",
  },
  {
    id: 4758,
    en: "your",
    az: "sənin",
  },
  {
    id: 4759,
    en: "come",
    az: "gəl",
  },
  {
    id: 4760,
    en: "could",
    az: "bilərdi",
  },
  {
    id: 4761,
    en: "now",
    az: "İndi",
  },
  {
    id: 4762,
    en: "than",
    az: "daha çox",
  },
  {
    id: 4763,
    en: "like",
    az: "kimi",
  },
  {
    id: 4764,
    en: "other",
    az: "digərləri",
  },
  {
    id: 4765,
    en: "how",
    az: "Necə",
  },
  {
    id: 4766,
    en: "then",
    az: "sonra",
  },
  {
    id: 4767,
    en: "its",
    az: "onun",
  },
  {
    id: 4768,
    en: "our",
    az: "bizim",
  },
  {
    id: 4769,
    en: "two",
    az: "iki",
  },
  {
    id: 4770,
    en: "more",
    az: "daha çox",
  },
  {
    id: 4771,
    en: "these",
    az: "bunlar",
  },
  {
    id: 4772,
    en: "want",
    az: "istəmək",
  },
  {
    id: 4773,
    en: "way",
    az: "yol",
  },
  {
    id: 4774,
    en: "look",
    az: "baxmaq",
  },
  {
    id: 4775,
    en: "first",
    az: "əvvəlcə",
  },
  {
    id: 4776,
    en: "also",
    az: "həmçinin",
  },
  {
    id: 4777,
    en: "new",
    az: "yeni",
  },
  {
    id: 4778,
    en: "because",
    az: "çünki",
  },
  {
    id: 4779,
    en: "day",
    az: "gün",
  },
  {
    id: 4780,
    en: "use",
    az: "istifadə etmək",
  },
  {
    id: 4781,
    en: "no",
    az: "yox",
  },
  {
    id: 4782,
    en: "man",
    az: "adam",
  },
  {
    id: 4783,
    en: "find",
    az: "tapmaq",
  },
  {
    id: 4784,
    en: "here",
    az: "burada",
  },
  {
    id: 4785,
    en: "thing",
    az: "şey",
  },
  {
    id: 4786,
    en: "give",
    az: "vermək",
  },
  {
    id: 4787,
    en: "many",
    az: "çoxu",
  },
  {
    id: 4788,
    en: "well",
    az: "yaxşı",
  },
  {
    id: 4789,
    en: "only",
    az: "yalnız",
  },
  {
    id: 4790,
    en: "those",
    az: "olanlar",
  },
  {
    id: 4791,
    en: "tell",
    az: "söylə",
  },
  {
    id: 4792,
    en: "very",
    az: "çox",
  },
  {
    id: 4793,
    en: "even",
    az: "hətta",
  },
  {
    id: 4794,
    en: "back",
    az: "geri",
  },
  {
    id: 4795,
    en: "any",
    az: "hər hansı",
  },
  {
    id: 4796,
    en: "good",
    az: "yaxşı",
  },
  {
    id: 4797,
    en: "be",
    az: "olmaq",
  },
  {
    id: 4798,
    en: "and",
    az: "və",
  },
  {
    id: 4799,
    en: "in",
    az: "içində",
  },
  {
    id: 4800,
    en: "to",
    az: "üçün",
  },
  {
    id: 4801,
    en: "have",
    az: "var",
  },
  {
    id: 4802,
    en: "it",
    az: "o",
  },
  {
    id: 4803,
    en: "I",
    az: "Mən",
  },
  {
    id: 4804,
    en: "that",
    az: "ki",
  },
  {
    id: 4805,
    en: "for",
    az: "üçün",
  },
  {
    id: 4806,
    en: "you",
    az: "Sən",
  },
  {
    id: 4807,
    en: "he",
    az: "o",
  },
  {
    id: 4808,
    en: "with",
    az: "ilə",
  },
  {
    id: 4809,
    en: "on",
    az: "yandır",
  },
  {
    id: 4810,
    en: "do",
    az: "etmək",
  },
  {
    id: 4811,
    en: "say",
    az: "deyin",
  },
  {
    id: 4812,
    en: "this",
    az: "bu",
  },
  {
    id: 4813,
    en: "they",
    az: "onlar",
  },
  {
    id: 4814,
    en: "but",
    az: "Amma",
  },
  {
    id: 4815,
    en: "we",
    az: "Biz",
  },
  {
    id: 4816,
    en: "his",
    az: "onun",
  },
  {
    id: 4817,
    en: "from",
    az: "dən",
  },
  {
    id: 4818,
    en: "not",
    az: "deyil",
  },
  {
    id: 4819,
    en: "n't",
    az: "n",
  },
  {
    id: 4820,
    en: "by",
    az: "tərəfindən",
  },
  {
    id: 4821,
    en: "she",
    az: "o",
  },
  {
    id: 4822,
    en: "or",
    az: "və ya",
  },
  {
    id: 4823,
    en: "as",
    az: "kimi",
  },
  {
    id: 4824,
    en: "what",
    az: "nə",
  },
  {
    id: 4825,
    en: "go",
    az: "get",
  },
  {
    id: 4826,
    en: "their",
    az: "onların",
  },
  {
    id: 4827,
    en: "can",
    az: "bacarmaq",
  },
  {
    id: 4828,
    en: "who",
    az: "kim",
  },
  {
    id: 4829,
    en: "get",
    az: "almaq",
  },
  {
    id: 4830,
    en: "if",
    az: "əgər",
  },
  {
    id: 4831,
    en: "would",
    az: "olardı",
  },
  {
    id: 4832,
    en: "her",
    az: "onun",
  },
  {
    id: 4833,
    en: "all",
    az: "hamısı",
  },
  {
    id: 4834,
    en: "my",
    az: "mənim",
  },
  {
    id: 4835,
    en: "make",
    az: "etmək",
  },
  {
    id: 4836,
    en: "about",
    az: "haqqında",
  },
  {
    id: 4837,
    en: "know",
    az: "bilin",
  },
  {
    id: 4838,
    en: "will",
    az: "edəcək",
  },
  {
    id: 4839,
    en: "up",
    az: "yuxarı",
  },
  {
    id: 4840,
    en: "one",
    az: "biri",
  },
  {
    id: 4841,
    en: "time",
    az: "vaxt",
  },
  {
    id: 4842,
    en: "there",
    az: "orada",
  },
  {
    id: 4843,
    en: "year",
    az: "il",
  },
  {
    id: 4844,
    en: "so",
    az: "belə ki",
  },
  {
    id: 4845,
    en: "think",
    az: "düşün",
  },
  {
    id: 4846,
    en: "when",
    az: "nə vaxt",
  },
  {
    id: 4847,
    en: "which",
    az: "hansı",
  },
  {
    id: 4848,
    en: "them",
    az: "onları",
  },
  {
    id: 4849,
    en: "some",
    az: "bəzi",
  },
  {
    id: 4850,
    en: "me",
    az: "menim",
  },
  {
    id: 4851,
    en: "people",
    az: "Xalq",
  },
  {
    id: 4852,
    en: "take",
    az: "götürmək",
  },
  {
    id: 4853,
    en: "out",
    az: "çöldə",
  },
  {
    id: 4854,
    en: "into",
    az: "daxil",
  },
  {
    id: 4855,
    en: "just",
    az: "sadəcə",
  },
  {
    id: 4856,
    en: "see",
    az: "görmək",
  },
  {
    id: 4857,
    en: "him",
    az: "Ona",
  },
  {
    id: 4858,
    en: "your",
    az: "sənin",
  },
  {
    id: 4859,
    en: "come",
    az: "gəl",
  },
  {
    id: 4860,
    en: "could",
    az: "bilərdi",
  },
  {
    id: 4861,
    en: "now",
    az: "İndi",
  },
  {
    id: 4862,
    en: "than",
    az: "daha çox",
  },
  {
    id: 4863,
    en: "like",
    az: "kimi",
  },
  {
    id: 4864,
    en: "other",
    az: "digərləri",
  },
  {
    id: 4865,
    en: "how",
    az: "Necə",
  },
  {
    id: 4866,
    en: "then",
    az: "sonra",
  },
  {
    id: 4867,
    en: "its",
    az: "onun",
  },
  {
    id: 4868,
    en: "our",
    az: "bizim",
  },
  {
    id: 4869,
    en: "two",
    az: "iki",
  },
  {
    id: 4870,
    en: "more",
    az: "daha çox",
  },
  {
    id: 4871,
    en: "these",
    az: "bunlar",
  },
  {
    id: 4872,
    en: "want",
    az: "istəmək",
  },
  {
    id: 4873,
    en: "way",
    az: "yol",
  },
  {
    id: 4874,
    en: "look",
    az: "baxmaq",
  },
  {
    id: 4875,
    en: "first",
    az: "əvvəlcə",
  },
  {
    id: 4876,
    en: "also",
    az: "həmçinin",
  },
  {
    id: 4877,
    en: "new",
    az: "yeni",
  },
  {
    id: 4878,
    en: "because",
    az: "çünki",
  },
  {
    id: 4879,
    en: "day",
    az: "gün",
  },
  {
    id: 4880,
    en: "use",
    az: "istifadə etmək",
  },
  {
    id: 4881,
    en: "no",
    az: "yox",
  },
  {
    id: 4882,
    en: "man",
    az: "adam",
  },
  {
    id: 4883,
    en: "find",
    az: "tapmaq",
  },
  {
    id: 4884,
    en: "here",
    az: "burada",
  },
  {
    id: 4885,
    en: "thing",
    az: "şey",
  },
  {
    id: 4886,
    en: "give",
    az: "vermək",
  },
  {
    id: 4887,
    en: "many",
    az: "çoxu",
  },
  {
    id: 4888,
    en: "well",
    az: "yaxşı",
  },
  {
    id: 4889,
    en: "only",
    az: "yalnız",
  },
  {
    id: 4890,
    en: "those",
    az: "olanlar",
  },
  {
    id: 4891,
    en: "tell",
    az: "söylə",
  },
  {
    id: 4892,
    en: "very",
    az: "çox",
  },
  {
    id: 4893,
    en: "even",
    az: "hətta",
  },
  {
    id: 4894,
    en: "back",
    az: "geri",
  },
  {
    id: 4895,
    en: "any",
    az: "hər hansı",
  },
  {
    id: 4896,
    en: "good",
    az: "yaxşı",
  },
  {
    id: 4897,
    en: "be",
    az: "olmaq",
  },
  {
    id: 4898,
    en: "and",
    az: "və",
  },
  {
    id: 4899,
    en: "in",
    az: "içində",
  },
  {
    id: 4900,
    en: "to",
    az: "üçün",
  },
  {
    id: 4901,
    en: "have",
    az: "var",
  },
  {
    id: 4902,
    en: "it",
    az: "o",
  },
  {
    id: 4903,
    en: "I",
    az: "Mən",
  },
  {
    id: 4904,
    en: "that",
    az: "ki",
  },
  {
    id: 4905,
    en: "for",
    az: "üçün",
  },
  {
    id: 4906,
    en: "you",
    az: "Sən",
  },
  {
    id: 4907,
    en: "he",
    az: "o",
  },
  {
    id: 4908,
    en: "with",
    az: "ilə",
  },
  {
    id: 4909,
    en: "on",
    az: "yandır",
  },
  {
    id: 4910,
    en: "do",
    az: "etmək",
  },
  {
    id: 4911,
    en: "say",
    az: "deyin",
  },
  {
    id: 4912,
    en: "this",
    az: "bu",
  },
  {
    id: 4913,
    en: "they",
    az: "onlar",
  },
  {
    id: 4914,
    en: "but",
    az: "Amma",
  },
  {
    id: 4915,
    en: "we",
    az: "Biz",
  },
  {
    id: 4916,
    en: "his",
    az: "onun",
  },
  {
    id: 4917,
    en: "from",
    az: "dən",
  },
  {
    id: 4918,
    en: "not",
    az: "deyil",
  },
  {
    id: 4919,
    en: "n't",
    az: "n",
  },
  {
    id: 4920,
    en: "by",
    az: "tərəfindən",
  },
  {
    id: 4921,
    en: "she",
    az: "o",
  },
  {
    id: 4922,
    en: "or",
    az: "və ya",
  },
  {
    id: 4923,
    en: "as",
    az: "kimi",
  },
  {
    id: 4924,
    en: "what",
    az: "nə",
  },
  {
    id: 4925,
    en: "go",
    az: "get",
  },
  {
    id: 4926,
    en: "their",
    az: "onların",
  },
  {
    id: 4927,
    en: "can",
    az: "bacarmaq",
  },
  {
    id: 4928,
    en: "who",
    az: "kim",
  },
  {
    id: 4929,
    en: "get",
    az: "almaq",
  },
  {
    id: 4930,
    en: "if",
    az: "əgər",
  },
  {
    id: 4931,
    en: "would",
    az: "olardı",
  },
  {
    id: 4932,
    en: "her",
    az: "onun",
  },
  {
    id: 4933,
    en: "all",
    az: "hamısı",
  },
  {
    id: 4934,
    en: "my",
    az: "mənim",
  },
  {
    id: 4935,
    en: "make",
    az: "etmək",
  },
  {
    id: 4936,
    en: "about",
    az: "haqqında",
  },
  {
    id: 4937,
    en: "know",
    az: "bilin",
  },
  {
    id: 4938,
    en: "will",
    az: "edəcək",
  },
  {
    id: 4939,
    en: "up",
    az: "yuxarı",
  },
  {
    id: 4940,
    en: "one",
    az: "biri",
  },
  {
    id: 4941,
    en: "time",
    az: "vaxt",
  },
  {
    id: 4942,
    en: "there",
    az: "orada",
  },
  {
    id: 4943,
    en: "year",
    az: "il",
  },
  {
    id: 4944,
    en: "so",
    az: "belə ki",
  },
  {
    id: 4945,
    en: "think",
    az: "düşün",
  },
  {
    id: 4946,
    en: "when",
    az: "nə vaxt",
  },
  {
    id: 4947,
    en: "which",
    az: "hansı",
  },
  {
    id: 4948,
    en: "them",
    az: "onları",
  },
  {
    id: 4949,
    en: "some",
    az: "bəzi",
  },
  {
    id: 4950,
    en: "me",
    az: "menim",
  },
  {
    id: 4951,
    en: "people",
    az: "Xalq",
  },
  {
    id: 4952,
    en: "take",
    az: "götürmək",
  },
  {
    id: 4953,
    en: "out",
    az: "çöldə",
  },
  {
    id: 4954,
    en: "into",
    az: "daxil",
  },
  {
    id: 4955,
    en: "just",
    az: "sadəcə",
  },
  {
    id: 4956,
    en: "see",
    az: "görmək",
  },
  {
    id: 4957,
    en: "him",
    az: "Ona",
  },
  {
    id: 4958,
    en: "your",
    az: "sənin",
  },
  {
    id: 4959,
    en: "come",
    az: "gəl",
  },
  {
    id: 4960,
    en: "could",
    az: "bilərdi",
  },
  {
    id: 4961,
    en: "now",
    az: "İndi",
  },
  {
    id: 4962,
    en: "than",
    az: "daha çox",
  },
  {
    id: 4963,
    en: "like",
    az: "kimi",
  },
  {
    id: 4964,
    en: "other",
    az: "digərləri",
  },
  {
    id: 4965,
    en: "how",
    az: "Necə",
  },
  {
    id: 4966,
    en: "then",
    az: "sonra",
  },
  {
    id: 4967,
    en: "its",
    az: "onun",
  },
  {
    id: 4968,
    en: "our",
    az: "bizim",
  },
  {
    id: 4969,
    en: "two",
    az: "iki",
  },
  {
    id: 4970,
    en: "more",
    az: "daha çox",
  },
  {
    id: 4971,
    en: "these",
    az: "bunlar",
  },
  {
    id: 4972,
    en: "want",
    az: "istəmək",
  },
  {
    id: 4973,
    en: "way",
    az: "yol",
  },
  {
    id: 4974,
    en: "look",
    az: "baxmaq",
  },
  {
    id: 4975,
    en: "first",
    az: "əvvəlcə",
  },
  {
    id: 4976,
    en: "also",
    az: "həmçinin",
  },
  {
    id: 4977,
    en: "new",
    az: "yeni",
  },
  {
    id: 4978,
    en: "because",
    az: "çünki",
  },
  {
    id: 4979,
    en: "day",
    az: "gün",
  },
  {
    id: 4980,
    en: "use",
    az: "istifadə etmək",
  },
  {
    id: 4981,
    en: "no",
    az: "yox",
  },
  {
    id: 4982,
    en: "man",
    az: "adam",
  },
  {
    id: 4983,
    en: "find",
    az: "tapmaq",
  },
  {
    id: 4984,
    en: "here",
    az: "burada",
  },
  {
    id: 4985,
    en: "thing",
    az: "şey",
  },
  {
    id: 4986,
    en: "give",
    az: "vermək",
  },
  {
    id: 4987,
    en: "many",
    az: "çoxu",
  },
  {
    id: 4988,
    en: "well",
    az: "yaxşı",
  },
  {
    id: 4989,
    en: "only",
    az: "yalnız",
  },
  {
    id: 4990,
    en: "those",
    az: "olanlar",
  },
  {
    id: 4991,
    en: "tell",
    az: "söylə",
  },
  {
    id: 4992,
    en: "very",
    az: "çox",
  },
  {
    id: 4993,
    en: "even",
    az: "hətta",
  },
  {
    id: 4994,
    en: "back",
    az: "geri",
  },
  {
    id: 4995,
    en: "any",
    az: "hər hansı",
  },
  {
    id: 4996,
    en: "good",
    az: "yaxşı",
  },
] as const;
