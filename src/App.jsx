import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music, Mail, ImageIcon, ChevronLeft, ChevronRight, X, Play, Pause } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [musicOpen, setMusicOpen] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [letterText, setLetterText] = useState('');

  // Placeholder images - replace with your actual images
  const memories = [
    '/pictures/1754036774416.jpg',
    '/pictures/1754036791994.jpg',
    '/pictures/1754036804384.jpg',
    '/pictures/1754036812515.jpg',
    '/pictures/1754036819358.jpg',
    '/pictures/1754036827053.jpg',
    '/pictures/IMG20230621093455_transcpr.jpg',
    '/pictures/IMG_20240822_164951.jpg',
    '/pictures/IMG_20240822_164957.jpg',
    '/pictures/IMG_20240822_165004.jpg',
    '/pictures/IMG_20240822_165056.jpg',
    '/pictures/IMG_20240822_165106.jpg',
    '/pictures/IMG_20240822_165110.jpg',
    '/pictures/IMG_20240822_165122.jpg',
    '/pictures/IMG_20240822_165123.jpg',
    '/pictures/IMG_20240822_165530.jpg',
    '/pictures/IMG_20240826_110144.jpg',
    '/pictures/IMG_20240826_163714.jpg',
    '/pictures/IMG_20240826_163732.jpg',
    '/pictures/IMG_20240826_163740.jpg',
    '/pictures/IMG_20240826_163747.jpg',
    '/pictures/IMG_20240827_124934.jpg',
    '/pictures/IMG_20240827_124936.jpg',
    '/pictures/IMG_20240827_124938.jpg',
    '/pictures/IMG_20240827_124941.jpg',
    '/pictures/IMG_20240827_125027.jpg',
    '/pictures/IMG_20240827_125029.jpg',
    '/pictures/IMG_20240827_125132.jpg',
    '/pictures/IMG_20240827_125138.jpg',
    '/pictures/IMG_20240827_125150.jpg',
    '/pictures/IMG_20240827_125157.jpg',
    '/pictures/IMG_20240827_125218.jpg',
    '/pictures/IMG_20240827_125228.jpg',
    '/pictures/IMG_20240827_125241.jpg',
    '/pictures/IMG_20240827_125252.jpg',
    '/pictures/IMG_20240827_125301.jpg',
    '/pictures/IMG_20240827_125302.jpg',
    '/pictures/IMG_20240827_125314.jpg',
    '/pictures/IMG_20240827_125319.jpg',
    '/pictures/IMG_20240827_125447.jpg',
    '/pictures/IMG_20240827_125451.jpg',
    '/pictures/IMG_20240829_120449.jpg',
    '/pictures/IMG_20240829_155149.jpg',
    '/pictures/IMG_20240829_155155.jpg',
    '/pictures/IMG_20240829_155204.jpg',
    '/pictures/IMG_20240829_155238.jpg',
    '/pictures/IMG_20240829_155416.jpg',
    '/pictures/IMG_20240829_155424.jpg',
    '/pictures/IMG_20240829_155432.jpg',
    '/pictures/IMG_20240829_155441.jpg',
    '/pictures/IMG_20240829_155445.jpg',
    '/pictures/IMG_20240829_155448.jpg',
    '/pictures/IMG_20240829_155503.jpg',
    '/pictures/IMG_20240829_155624.jpg',
    '/pictures/IMG_20240829_155631.jpg',
    '/pictures/IMG_20240829_155651.jpg',
    '/pictures/IMG_20240829_155707.jpg',
    '/pictures/IMG_20240829_155805.jpg',
    '/pictures/IMG_20240829_155840.jpg',
    '/pictures/IMG_20240829_155844.jpg',
    '/pictures/IMG_20240829_155852.jpg',
    '/pictures/IMG_20240829_155857.jpg',
    '/pictures/IMG_20240829_155911.jpg',
    '/pictures/IMG_20240829_155942.jpg',
    '/pictures/IMG_20240829_155947.jpg',
    '/pictures/IMG_20240829_160130.jpg',
    '/pictures/IMG_20240829_160137.jpg',
    '/pictures/IMG_20240829_160145.jpg',
    '/pictures/IMG_20240829_160150.jpg',
    '/pictures/IMG_20240829_161610.jpg',
    '/pictures/IMG_20240903_131736.jpg',
    '/pictures/IMG_20240903_131741.jpg',
    '/pictures/IMG_20240903_131748.jpg',
    '/pictures/IMG_20240908_144748.jpg',
    '/pictures/IMG_20240908_144750.jpg',
    '/pictures/IMG_20240908_144912.jpg',
    '/pictures/IMG_20240915_103502.jpg',
    '/pictures/IMG_20240915_103509.jpg',
    '/pictures/IMG_20241014_123533.jpg',
    '/pictures/IMG_20241014_123538.jpg',
    '/pictures/IMG_20241014_123610.jpg',
    '/pictures/IMG_20241014_123733.jpg',
    '/pictures/IMG_20250114_122109.jpg',
    '/pictures/IMG_20250114_122115.jpg',
    '/pictures/IMG_20250114_122122.jpg',
    '/pictures/IMG_20250114_122135.jpg',
    '/pictures/IMG_20250114_122137.jpg',
    '/pictures/IMG_20250114_122154.jpg',
    '/pictures/IMG_20250114_122156.jpg',
    '/pictures/IMG_20250115_121108.jpg',
    '/pictures/IMG_20250116_130837.jpg',
    '/pictures/IMG_20250116_130843.jpg',
    '/pictures/IMG_20250116_130844.jpg',
    '/pictures/IMG_20250116_130845.jpg',
    '/pictures/IMG_20250116_130847.jpg',
    '/pictures/IMG_20250116_130957.jpg',
    '/pictures/IMG_20250116_131003.jpg',
    '/pictures/IMG_20250116_131009.jpg',
    '/pictures/IMG_20250116_131013.jpg',
    '/pictures/IMG_20250116_131016.jpg',
    '/pictures/IMG_20250116_131054.jpg',
    '/pictures/IMG_20250116_131058.jpg',
    '/pictures/IMG_20250116_131105.jpg',
    '/pictures/IMG_20250116_131134.jpg',
    '/pictures/IMG_20250303_115351.jpg',
    '/pictures/IMG_20250303_115400.jpg',
    '/pictures/IMG_20250310_094348.jpg',
    '/pictures/IMG_20250310_094410.jpg',
    '/pictures/IMG_20250310_094422.jpg',
    '/pictures/IMG_20250310_094444.jpg',
    '/pictures/IMG_20250312_144449.jpg',
    '/pictures/IMG_20250312_144454.jpg',
    '/pictures/IMG_20250312_144504.jpg',
    '/pictures/IMG_20250312_144513.jpg',
    '/pictures/IMG_20250312_144527.jpg',
    '/pictures/IMG_20250314_155835.jpg',
    '/pictures/IMG_20250314_155848.jpg',
    '/pictures/IMG_20250314_155852.jpg',
    '/pictures/IMG_20250314_155854.jpg',
    '/pictures/IMG_20250314_155858.jpg',
    '/pictures/IMG_20250314_155906.jpg',
    '/pictures/IMG_20250314_155952.jpg',
    '/pictures/IMG_20250314_160019.jpg',
    '/pictures/IMG_20250314_160030.jpg',
    '/pictures/IMG_20250314_160114.jpg',
    '/pictures/IMG_20250331_121041.jpg',
    '/pictures/IMG_20250404_132712.jpg',
    '/pictures/IMG_20250623_124439.jpg',
    '/pictures/IMG_20250623_124508.jpg',
    '/pictures/IMG_20250722_152356.jpg',
    '/pictures/IMG_20250722_152419.jpg',
    '/pictures/IMG_20250722_152426.jpg',
    '/pictures/IMG_20250722_152454.jpg',
    '/pictures/IMG_20250722_152510.jpg',
    '/pictures/IMG_20250722_152516.jpg',
    '/pictures/IMG_20250722_152521.jpg',
    '/pictures/IMG_20250722_152913.jpg',
    '/pictures/IMG_20250804_111002.jpg',
    '/pictures/IMG_20250804_111534.jpg',
    '/pictures/IMG_20250804_111547.jpg',
    '/pictures/IMG_20250804_111553.jpg',
    '/pictures/IMG_20250804_111559.jpg',
    '/pictures/IMG_20250804_112039.jpg',
    '/pictures/IMG_20250804_114109.jpg',
    '/pictures/IMG_20250804_124829.jpg',
    '/pictures/IMG_20250804_124830.jpg',
    '/pictures/IMG_20250804_124831.jpg',
    '/pictures/IMG_20250818_175839.jpg',
    '/pictures/IMG_20250818_175856.jpg',
    '/pictures/IMG_20250818_175935.jpg',
    '/pictures/IMG_20250818_180050.jpg',
    '/pictures/IMG_20250818_180055.jpg',
    '/pictures/IMG_20250818_180127.jpg',
    '/pictures/IMG_20250818_180237.jpg',
    '/pictures/IMG_20250818_180435.jpg',
    '/pictures/IMG_20250818_182131.jpg',
    '/pictures/IMG_20250818_191344.jpg',
    '/pictures/IMG_20250818_191503.jpg',
    '/pictures/IMG_20250818_191530.jpg',
    '/pictures/IMG_20250818_191546.jpg',
    '/pictures/IMG_20250818_191703.jpg',
    '/pictures/IMG_20250818_191709.jpg',
    '/pictures/IMG_20250818_191746.jpg',
    '/pictures/IMG_20250818_191751.jpg',
    '/pictures/IMG_20250818_191755.jpg',
    '/pictures/IMG_20250818_191758.jpg',
    '/pictures/IMG_20250818_191850.jpg',
    '/pictures/IMG_20250818_192656.jpg',
    '/pictures/IMG_20250818_192659.jpg',
    '/pictures/IMG_20250818_192705.jpg',
    '/pictures/IMG_20250818_192707.jpg',
    '/pictures/IMG_20250818_192710.jpg',
    '/pictures/IMG_20250818_192840.jpg',
    '/pictures/IMG_20250818_192846.jpg',
    '/pictures/IMG_20250818_192849.jpg',
    '/pictures/IMG_20250818_192904.jpg',
    '/pictures/IMG_20250818_192929.jpg',
    '/pictures/IMG_20250818_192947.jpg',
    '/pictures/IMG_20250818_192953.jpg',
    '/pictures/IMG_20250818_192957.jpg',
    '/pictures/IMG_20250818_193000.jpg',
    '/pictures/IMG_20250818_193007.jpg',
    '/pictures/IMG_20250818_193011.jpg',
    '/pictures/IMG_20250818_193019.jpg',
    '/pictures/IMG_20250818_193039.jpg',
    '/pictures/IMG_20250818_193043.jpg',
    '/pictures/IMG_20250818_193047.jpg',
    '/pictures/IMG_20250818_193059.jpg',
    '/pictures/IMG_20250818_193143.jpg',
    '/pictures/IMG_20250818_193149.jpg',
    '/pictures/IMG_20250818_193155.jpg',
    '/pictures/IMG_20250818_193310.jpg',
    '/pictures/IMG_20250818_193313.jpg',
    '/pictures/IMG_20250818_193317.jpg',
    '/pictures/IMG_20250818_193320.jpg',
    '/pictures/IMG_20250905_195024.jpg',
    '/pictures/IMG_20250905_195030.jpg',
    '/pictures/IMG_20250905_195031.jpg',
    '/pictures/IMG_20250905_204401.jpg',
    '/pictures/IMG_20250905_204404.jpg',
    '/pictures/IMG_20250905_204407.jpg',
    '/pictures/IMG_20250905_204410.jpg',
    '/pictures/IMG_20250908_164800.jpg',
    '/pictures/IMG_20250908_164802.jpg',
    '/pictures/IMG_20250911_131550.jpg',
    '/pictures/received_1002079730960852.jpeg',
    '/pictures/received_1029064125111407.jpeg',
    '/pictures/received_1035825584066654.jpeg',
    '/pictures/received_1041761127188842.jpeg',
    '/pictures/received_1089965805297653.jpeg',
    '/pictures/received_115907618196196.jpeg',
    '/pictures/received_1198121597549343.jpeg',
    '/pictures/received_1210382429670202.jpeg',
    '/pictures/received_1214485909116737.jpeg',
    '/pictures/received_1218954295476631.jpeg',
    '/pictures/received_1304592766814215.jpeg',
    '/pictures/received_1311905419700342.jpeg',
    '/pictures/received_1341954583024720.jpeg',
    '/pictures/received_1350762192506243.jpeg',
    '/pictures/received_1365179044323743.jpeg',
    '/pictures/received_1422788558556337.jpeg',
    '/pictures/received_1451686955600315.jpeg',
    '/pictures/received_1461639527905173.jpeg',
    '/pictures/received_1478814392852020.jpeg',
    '/pictures/received_1494270868069327.jpeg',
    '/pictures/received_152284044523037.jpeg',
    '/pictures/received_1600461267110743.jpeg',
    '/pictures/received_1615249655620751.jpeg',
    '/pictures/received_162626346675854.jpeg',
    '/pictures/received_174161969034643.jpeg',
    '/pictures/received_1769123663489875.jpeg',
    '/pictures/received_177326635096822.jpeg',
    '/pictures/received_183290311355590.jpeg',
    '/pictures/received_205740012457339.jpeg',
    '/pictures/received_210657181906379.jpeg',
    '/pictures/received_213620414959847.jpeg',
    '/pictures/received_225890206970550.jpeg',
    '/pictures/received_234164156062956.jpeg',
    '/pictures/received_236294055608265.jpeg',
    '/pictures/received_238084111948118.jpeg',
    '/pictures/received_257130057001077.jpeg',
    '/pictures/received_257671323440804.jpeg',
    '/pictures/received_257817153272990.jpeg',
    '/pictures/received_261034693179166.jpeg',
    '/pictures/received_266897839279785.jpeg',
    '/pictures/received_268749419096362.jpeg',
    '/pictures/received_273534835187860.jpeg',
    '/pictures/received_287519007131899.jpeg',
    '/pictures/received_290971383362276.jpeg',
    '/pictures/received_308448554860813.jpeg',
    '/pictures/received_3215472008753894.jpeg',
    '/pictures/received_3388721658050696.jpeg',
    '/pictures/received_553168850143626.jpeg',
    '/pictures/received_588025223502753.jpeg',
    '/pictures/received_588379583438130.jpeg',
    '/pictures/received_614424550635647.jpeg',
    '/pictures/received_622019733223243.jpeg',
    '/pictures/received_630758585647039.jpeg',
    '/pictures/received_636973745112630.jpeg',
    '/pictures/received_648950607287442.jpeg',
    '/pictures/received_650860699820499.jpeg',
    '/pictures/received_656932309612697.jpeg',
    '/pictures/received_6729594963798879.jpeg',
    '/pictures/received_695713199057366.jpeg',
    '/pictures/received_704200541711158.jpeg',
    '/pictures/received_714639727086151.jpeg',
    '/pictures/received_719452286854657.jpeg',
    '/pictures/received_750438833203671.jpeg',
    '/pictures/received_762020295645665.jpeg',
    '/pictures/received_796095708722058.jpeg',
    '/pictures/received_796900148507947.jpeg',
    '/pictures/received_798361301776168.jpeg',
    '/pictures/received_806797357680182.jpeg',
    '/pictures/received_810822140394120.jpeg',
    '/pictures/received_836879628035838.jpeg',
    '/pictures/received_847555083396231.jpeg',
    '/pictures/received_905241647217533.jpeg',
    '/pictures/received_914081876340968.jpeg',
    '/pictures/received_935078930916452.jpeg',
    '/pictures/received_939953807258044.jpeg',
    '/pictures/received_941017087152284.jpeg',
    '/pictures/received_941017087152284_1.jpeg',
    '/pictures/received_965374384571771.jpeg',
    '/pictures/received_977621616711650.jpeg',
    '/pictures/received_988132272602107.jpeg',
    '/pictures/received_996612994813940.jpeg',
  ];

  const loveLetterContent = `Hi mommy ko aram ko poe waray ko pa maihahatag haim yana kaya yanhi anay poe tak naisip mommy this i can't be deleted mommy permanent na poe in mommy ko😘 yes finally mommy we made it😘😘 3 years na kit mommy 😘😘 happy happy anniversary mommy ko😘😘 yehayy masaya ak mommy kasi nakaabot kita hin sugad hin ka iha sana poe mommy ko more pa it years tat ma count mommy ko😘 

oummmmmm there words i want to say mommy ko Thank you , Sorry, Then I love you😘 

FIRST - Thank you😘 
thank you po kasi everytime na aadi han walang wala ak inupdan ak nim han mga time na halos naak sumoko 😞 ikaw lah poe an nag papakusog haak na umato mommy thank you liwat mommy ko😘 kasi ikaw an nagsilbi na na ilaw para malamrag an ak dalan thank you liwat han oag guide haak minsan mommy ko😘 

oummmm thank you liwat kasi bisan gaano kakuri makaintindi imo lah gihap gin liliwat paraa lah makaintindi ak mommy 😘 hindi ka la poe naging GF paraa haak naging best friend , mommy etc mommy ikaw lah poee talaga an nag hatag haak hin sugad hin Mommy kayaa thank you😘 thank you ever so much😘 ngann mommy ko thank you liwat han pag pa experience han mga first time mommy koo😘 hehe mahal na mahal kanak subraa mommy ko😘 

SECOND - Sorry mommy ko😔 
Sorry kon dakoo man poe an akon pagkukulang haimm mommy aram ko poe hindi ko masyado na nagampanan an pagiging BF haim mommy ko aram ko damo an ak pagkukulang mommy ko inaaro ko it hin pasensya mommy aram poe it nimmm mommy ko😔 sorry kasi kon han yana poe nagdadara poe ak hin akon emotion mommy ko😔 sorry kon poe kon minsan nakakapagyakan ak hin masuol na mga yakan mommy pasensya na poe minsan dre ko poe nacocontrol tak sarili mommy ko 😞 🥺 

sorry por daman han mga times na nasul an ka poe han sulod han 3 years mommy ko🥺 sorry poe talaga mommy peroo mommy ko always remember mommy ko na mahal na mahal kanak🥺 aram it nimmm na dree ko poe kayan bayaan ka poe mommy koo🥺 dba ngani damo pa poe tat plan mommy ko🥺 

oummmm magpapahimo pa kit balai tapos mag aasawa maghihimo hin happy family sana poe matupad ta it mommy ko dbaa🥺 aadi laak always mommy ko haaa if you need me poe mommy ko thank you poe ulit mommy ko😘😘 

THIRD - I love you so much 😘 
i love you always 😘😘
i love you 😘😘😘
i love you so much 😘💘😘😘😘
i love you most 😘😘😘
I love you more 😘😘😘
mahal na mahal kanak subraa mommy ko😘

Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘
Muwah 😘 muwah 😘 muwah 😘 muwah 😘

Once again mommy ko happy happy 3rd anniversary mommy koo more anniversary to come mommy come haat I love you so much 😘 muwah 😘

--from daddy kim❣️`;

  // Animate letter text on open
  useEffect(() => {
    if (letterOpen) {
      // Display message immediately without animation for long text
      setLetterText(loveLetterContent);
    }
  }, [letterOpen]);

  // Animated background hearts
  const FloatingHearts = () => {
    const hearts = Array.from({ length: 20 });
    return (
      <>
        {hearts.map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300 opacity-20 text-4xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 0.5, 0],
              rotate: Math.random() * 360,
            }}
            transition={{
              duration: Math.random() * 3 + 3,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            ❤️
          </motion.div>
        ))}
      </>
    );
  };

  // Page 1: Landing Page
  const LandingPage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-full overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-pink-100/20 to-purple-100/30 animate-pulse" />
        <FloatingHearts />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* Animated main title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-center mb-6"
        >
          Happy Anniversary
        </motion.h1>

        {/* Subtitle with heart */}
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-3xl md:text-4xl font-display font-bold text-rose-500 mb-8 text-center"
        >
          My Love ❤️
        </motion.h2>

        {/* Greeting message */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 text-center max-w-2xl mb-12 font-light leading-relaxed"
        >
          Today I celebrate not just another year together, but the infinite moments of joy, laughter, and love you bring into my life every single day.
        </motion.p>

        {/* Animated heart icon */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mb-12"
        >
          <Heart className="w-20 h-20 text-rose-400 fill-rose-400" />
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage(1)}
          className="px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
        >
          <span>Open My Surprise</span>
          <span>🌹</span>
        </motion.button>
      </div>
    </motion.div>
  );

  // Page 1: Flower Page
  const FlowerPage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-full overflow-hidden bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200/40 via-pink-200/30 to-purple-200/40 animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 gap-8">
        {/* Title */}
        <motion.h2
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-5xl md:text-6xl font-display font-bold text-rose-600 text-center"
        >
          A Rose For You 🌹
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-700 text-center max-w-2xl"
        >
          Just like this rose, my love for you is beautiful, pure, and eternal. Every petal represents a moment of happiness with you.
        </motion.p>

        {/* Animated Rose */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.6, duration: 1, type: 'spring', stiffness: 100 }}
          className="text-9xl md:text-[200px]"
        >
          🌹
        </motion.div>

        {/* Floating particles around rose */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <motion.div
                animate={{
                  x: Math.cos((i / 8) * Math.PI * 2) * 150,
                  y: Math.sin((i / 8) * Math.PI * 2) * 150,
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                💕
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center text-gray-700 space-y-4"
        >
          <p className="text-lg md:text-xl font-semibold text-rose-600">
            You are my queen, my love, my everything.
          </p>
        </motion.div>

        {/* Next Button */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setCurrentPage(2)}
          className="px-8 py-4 md:px-12 md:py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Continue to Surprises ➜
        </motion.button>
      </div>
    </motion.div>
  );

  // Page 2: Surprise Page with 3 Cards
  const SurprisePage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative w-full h-full overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-pink-100/20 to-rose-100/20 animate-pulse" />
        <FloatingHearts />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 py-8">
        {/* Title */}
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display font-bold text-rose-500 mb-16 text-center"
        >
          Your Special Surprises 💝
        </motion.h2>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Song Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            onClick={() => setMusicOpen(true)}
            whileHover={{ y: -10 }}
            className="cursor-pointer"
          >
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <motion.div
                className="relative bg-gradient-to-br from-white to-rose-50 rounded-2xl p-8 backdrop-blur-lg border border-white/40 shadow-lg h-full flex flex-col items-center justify-center gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  <Music className="w-16 h-16 text-rose-500" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-rose-600">Our Song</h3>
                <p className="text-sm text-gray-600 text-center">Listen to our special music</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Love Letter Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onClick={() => setLetterOpen(true)}
            whileHover={{ y: -10 }}
            className="cursor-pointer"
          >
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-purple-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <motion.div
                className="relative bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 backdrop-blur-lg border border-white/40 shadow-lg h-full flex flex-col items-center justify-center gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                  <Mail className="w-16 h-16 text-pink-500" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-pink-600">Love Letter</h3>
                <p className="text-sm text-gray-600 text-center">Read my heartfelt message</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Memories Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onClick={() => setGalleryOpen(true)}
            whileHover={{ y: -10 }}
            className="cursor-pointer"
          >
            <div className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-rose-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
              <motion.div
                className="relative bg-gradient-to-br from-white to-purple-50 rounded-2xl p-8 backdrop-blur-lg border border-white/40 shadow-lg h-full flex flex-col items-center justify-center gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity }}>
                  <ImageIcon className="w-16 h-16 text-purple-500" />
                </motion.div>
                <h3 className="text-2xl font-display font-bold text-purple-600">Memories</h3>
                <p className="text-sm text-gray-600 text-center">Our beautiful moments together</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Back Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          onClick={() => setCurrentPage(1)}
          className="mt-16 px-6 py-3 bg-white text-rose-500 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 border-2 border-rose-200 hover:border-rose-400"
        >
          ← Back to Flower
        </motion.button>
      </div>
    </motion.div>
  );

  // Music Player Modal
  const MusicModal = () => (
    <AnimatePresence>
      {musicOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setMusicOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-white to-rose-50 rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl border border-white/40"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-display font-bold text-rose-600">Our Song</h3>
              <button
                onClick={() => setMusicOpen(false)}
                className="p-2 hover:bg-rose-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Music Player - YouTube Embed */}
            <div className="bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl p-4 mb-6">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/oxsY8GvoQQE?autoplay=1"
                title="Our Special Song"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>

            {/* Info */}
            <div className="text-center text-sm text-gray-600">
              <p>🎵 Enjoy our special song together 💕</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Love Letter Modal
  const LoveLetterModal = () => (
    <AnimatePresence>
      {letterOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setLetterOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-white to-pink-50 rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-white/40 max-h-[80vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-display font-bold text-pink-600">A Letter From My Heart</h3>
              <button
                onClick={() => setLetterOpen(false)}
                className="p-2 hover:bg-pink-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Letter Content */}
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 font-body text-gray-700 whitespace-pre-wrap leading-relaxed text-sm">
              {letterText}
            </div>

            {/* Decorative hearts */}
            <div className="flex justify-center gap-4 mt-6">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                >
                  <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Photo Gallery Modal
  const PhotoGalleryModal = () => (
    <AnimatePresence>
      {galleryOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setGalleryOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-white to-purple-50 rounded-3xl p-8 max-w-2xl w-full mx-4 shadow-2xl border border-white/40"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-display font-bold text-purple-600">Our Beautiful Memories</h3>
              <button
                onClick={() => setGalleryOpen(false)}
                className="p-2 hover:bg-purple-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Image Display */}
            <div className="relative rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-purple-100 to-rose-100 aspect-video flex items-center justify-center">
              <motion.img
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                src={memories[currentImageIndex]}
                alt={`Memory ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mb-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentImageIndex((prev) => (prev - 1 + memories.length) % memories.length)}
                className="p-3 bg-gradient-to-r from-purple-500 to-rose-500 text-white rounded-full shadow-lg hover:shadow-xl"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <p className="text-center text-gray-600 font-semibold">
                {currentImageIndex + 1} / {memories.length}
              </p>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentImageIndex((prev) => (prev + 1) % memories.length)}
                className="p-3 bg-gradient-to-r from-purple-500 to-rose-500 text-white rounded-full shadow-lg hover:shadow-xl"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {memories.map((image, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    idx === currentImageIndex ? 'border-purple-500' : 'border-transparent'
                  }`}
                >
                  <img src={image} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="w-screen h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {currentPage === 0 ? (
          <LandingPage key="landing" />
        ) : currentPage === 1 ? (
          <FlowerPage key="flower" />
        ) : (
          <SurprisePage key="surprise" />
        )}
      </AnimatePresence>
      <MusicModal />
      <LoveLetterModal />
      <PhotoGalleryModal />
    </div>
  );
}
