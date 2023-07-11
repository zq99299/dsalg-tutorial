/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d4ef7d474c00521b021c6db9476e6ab2"
  },
  {
    "url": "assets/css/0.styles.c775139a.css",
    "revision": "415dd0113e9fd066c0b8147a5bce2285"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold-Italic.a0475780.woff2",
    "revision": "a04757804840e4e870b5310e37fcbc37"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold.c318a45b.woff2",
    "revision": "c318a45b45be019ffdeb8c9ac6a41283"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold-Italic.045b7ab8.woff2",
    "revision": "045b7ab8d749812c052e9eca1ec5db07"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold.c3c08fc9.woff2",
    "revision": "c3c08fc9f418f827eb3eed1b0ebe48c8"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Italic.06bf2228.woff2",
    "revision": "06bf22283c831651e111b08000e502fc"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium-Italic.dd0da6de.woff2",
    "revision": "dd0da6de6c2340f4bf0aa4108f98a63f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium.54b68275.woff2",
    "revision": "54b6827550ef145b4c1968518a96070f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Regular.3eacd637.woff2",
    "revision": "3eacd63796de4b39bc102dae7b143ca5"
  },
  {
    "url": "assets/img/203947383.22907ea0.gif",
    "revision": "22907ea00e5b3d6ec8c1f62e9f99d281"
  },
  {
    "url": "assets/img/image-20200627190342488.36d57cc2.png",
    "revision": "36d57cc2db5f458ade6aac3300f547ed"
  },
  {
    "url": "assets/img/image-20200627191411507.b77985bf.png",
    "revision": "b77985bf2ab21c13b481250c3cc16d15"
  },
  {
    "url": "assets/img/image-20200627193219662.945b8544.png",
    "revision": "945b8544ee237688ff09623d33f70274"
  },
  {
    "url": "assets/img/image-20200627194020031.0fb81db6.png",
    "revision": "0fb81db69693ab6804034f28c8f80777"
  },
  {
    "url": "assets/img/image-20200702230738787.888c90b5.png",
    "revision": "888c90b5dc955324df3e29bdf89db01c"
  },
  {
    "url": "assets/img/image-20200702231655495.86f87b0b.png",
    "revision": "86f87b0b18545782f536067e82ac0320"
  },
  {
    "url": "assets/img/image-20200702235120016.2db774e9.png",
    "revision": "2db774e997003d4f95126bddad4c6c08"
  },
  {
    "url": "assets/img/image-20200702235213223.1b70f55b.png",
    "revision": "1b70f55be074f79d721aaf85c3f03ea9"
  },
  {
    "url": "assets/img/image-20200703215903031.8ffc1996.png",
    "revision": "8ffc1996dc054cb04759c47e311bccbc"
  },
  {
    "url": "assets/img/image-20200703221437344.19a0a264.png",
    "revision": "19a0a2646640e7819619f385dedec589"
  },
  {
    "url": "assets/img/image-20200703223528941.02cbe7fb.png",
    "revision": "02cbe7fbb963bd5e845c211ecfc4a042"
  },
  {
    "url": "assets/img/image-20200705160412938.9df997f2.png",
    "revision": "9df997f259658d4f3b7cc63070b5f4a1"
  },
  {
    "url": "assets/img/image-20200705160945310.965a3851.png",
    "revision": "965a385193b38ae0f0d27215ee2aba72"
  },
  {
    "url": "assets/img/image-20200705231038781.c4f9a217.png",
    "revision": "c4f9a217e93fac71f076247f5d5c33dc"
  },
  {
    "url": "assets/img/image-20200709222310216.64b405b0.png",
    "revision": "64b405b0867d56c1fcc22cd3a61ca1c7"
  },
  {
    "url": "assets/img/image-20200709225824174.90c1b47b.png",
    "revision": "90c1b47bce359af3df84e29b3ea85eb9"
  },
  {
    "url": "assets/img/image-20200709232553514.94f7f759.png",
    "revision": "94f7f759d7ace9ab784bb164bd78232d"
  },
  {
    "url": "assets/img/image-20200711162831664.29e97a9f.png",
    "revision": "29e97a9f89cb1aff6dfa1a0bda276e50"
  },
  {
    "url": "assets/img/image-20200711171643328.ec31e13b.png",
    "revision": "ec31e13b226987786d616b4fcf0bd225"
  },
  {
    "url": "assets/img/image-20200711205035714.30a7bed8.png",
    "revision": "30a7bed824cc088c8361ade038539d82"
  },
  {
    "url": "assets/img/image-20200711205412367.9dc6fe6b.png",
    "revision": "9dc6fe6b9980ecedb11aacf3dee212ca"
  },
  {
    "url": "assets/img/image-20200711213451604.9bd4f6cb.png",
    "revision": "9bd4f6cb8e8811614f84fb5d1f79206f"
  },
  {
    "url": "assets/img/image-20200711220623424.af16c2c1.png",
    "revision": "af16c2c1cfa456cd8d3ce267a818c7ca"
  },
  {
    "url": "assets/img/image-20200711221339098.c4fd26e1.png",
    "revision": "c4fd26e1bda8213fdfd94d4fed3f4fcb"
  },
  {
    "url": "assets/img/image-20200713162018274.19487c48.png",
    "revision": "19487c480463aedc6be60e706ef71ccf"
  },
  {
    "url": "assets/img/image-20200713163829412.1863fa65.png",
    "revision": "1863fa65204d2e1e3e7c4aa68d123b10"
  },
  {
    "url": "assets/img/image-20200713165341858.925519f0.png",
    "revision": "925519f0a6cd4642694fc236933131d3"
  },
  {
    "url": "assets/img/image-20200713165636281.04c71557.png",
    "revision": "04c715570f34c5216c9420208010e257"
  },
  {
    "url": "assets/img/image-20200713165758669.9f4a1358.png",
    "revision": "9f4a1358d26262427a8fe64cc4fb7879"
  },
  {
    "url": "assets/img/image-20200713201716641.1aa4f180.png",
    "revision": "1aa4f180216385df6ebdbc31e57571ee"
  },
  {
    "url": "assets/img/image-20200713201822143.26bbdc49.png",
    "revision": "26bbdc4990294556bfc979f9bff7c029"
  },
  {
    "url": "assets/img/image-20200713202539691.5dae3a30.png",
    "revision": "5dae3a309a154695e525f7b9845613f8"
  },
  {
    "url": "assets/img/image-20200715221248050.8e68b5b1.png",
    "revision": "8e68b5b1ece6289d267cbd8b4f094859"
  },
  {
    "url": "assets/img/image-20200715223005566.610aef49.png",
    "revision": "610aef49d4bc6441443095f35c7fdbf8"
  },
  {
    "url": "assets/img/image-20200715223033152.d7e82b07.png",
    "revision": "d7e82b07a472b6776bbc7257732c0c2a"
  },
  {
    "url": "assets/img/image-20200717225215349.a45f9eda.png",
    "revision": "a45f9edac1a2c3a5ae55581895b35699"
  },
  {
    "url": "assets/img/image-20200805220942252.eb73deea.png",
    "revision": "eb73deeaaedc237e6b8c2a0e2aa58516"
  },
  {
    "url": "assets/img/image-20200805222417998.8457996b.png",
    "revision": "8457996b98cc34a8e5cfa4ae477fcb9e"
  },
  {
    "url": "assets/img/image-20200805223200472.6446d1a3.png",
    "revision": "6446d1a3cca2743c1aa7ba1a6983627f"
  },
  {
    "url": "assets/img/image-20200816230100524.4d3f188f.png",
    "revision": "4d3f188fe8985f8807f5e70610b01bce"
  },
  {
    "url": "assets/img/image-20200816230724232.8f14688b.png",
    "revision": "8f14688b664372f2e0e33850736bc47f"
  },
  {
    "url": "assets/img/image-20200816231058264.f58606f8.png",
    "revision": "f58606f88b8e493586df5a441187d2b1"
  },
  {
    "url": "assets/img/image-20200830144951559.1a5309dd.png",
    "revision": "1a5309dd38f1dd1ba052463c6615a2db"
  },
  {
    "url": "assets/img/image-20200830150132228.fd1365c5.png",
    "revision": "fd1365c58d2c5ef6cbb4270a17877d50"
  },
  {
    "url": "assets/img/image-20200831223506200.7f06f826.png",
    "revision": "7f06f826ebfd01b0fb0f195261920745"
  },
  {
    "url": "assets/img/image-20200904215151961.fb7ae2c7.png",
    "revision": "fb7ae2c79e1fbb9595051445f4ba0240"
  },
  {
    "url": "assets/img/image-20200906214408546.595119b0.png",
    "revision": "595119b0d9d65f901069cb7fc1d977c9"
  },
  {
    "url": "assets/img/image-20200906214834101.e71e058f.png",
    "revision": "e71e058f8c478426b1ca674febb0a452"
  },
  {
    "url": "assets/img/image-20200907212010601.01bae15c.png",
    "revision": "01bae15cd49c8081345dda6436c1f6c3"
  },
  {
    "url": "assets/img/image-20200908221124876.9441d088.png",
    "revision": "9441d088f24fd77884ca847688b17b26"
  },
  {
    "url": "assets/img/image-20200908221355406.11dea125.png",
    "revision": "11dea12546a540c838dea6c3250bbb5d"
  },
  {
    "url": "assets/img/image-20200908222439882.133c23e8.png",
    "revision": "133c23e8df61efb8ca50207ef2083379"
  },
  {
    "url": "assets/img/image-20200908223049160.e60a4e06.png",
    "revision": "e60a4e06f22684d379140fe8b821828a"
  },
  {
    "url": "assets/img/image-20200916220031140.8be7da73.png",
    "revision": "8be7da73a1284ac3030a802daf4ca342"
  },
  {
    "url": "assets/img/image-20200916235619927.b4590f48.png",
    "revision": "b4590f4836913fc5a93d7ba65fda005e"
  },
  {
    "url": "assets/img/image-20200922221107753.dbfc01a7.png",
    "revision": "dbfc01a7dbc11a55ed98fd2882662bae"
  },
  {
    "url": "assets/img/image-20201002133112701.daddf5cf.png",
    "revision": "daddf5cf6e6d5ae32c827d10f5888b40"
  },
  {
    "url": "assets/img/image-20201002133509574.638efa5e.png",
    "revision": "638efa5ed457b3623f7505cf6fa20e31"
  },
  {
    "url": "assets/img/image-20201002134006867.108effbe.png",
    "revision": "108effbe947bb3765cf454b850305c0c"
  },
  {
    "url": "assets/img/image-20201018220112517.76308f3b.png",
    "revision": "76308f3bce4588b9e6727e8bc033f400"
  },
  {
    "url": "assets/img/image-20201018220112518.184d0a16.png",
    "revision": "184d0a16cfdf2de13450c4270de9ee73"
  },
  {
    "url": "assets/img/image-20201018220112519.cb204ad1.png",
    "revision": "cb204ad1e18cba964fa369c77e9249de"
  },
  {
    "url": "assets/img/image-20201018220112519.dcaacab3.png",
    "revision": "dcaacab3923da324b2c2113e63155c3b"
  },
  {
    "url": "assets/img/image-20201111223533738.7221c92f.png",
    "revision": "7221c92f059d5f611942755fac762a87"
  },
  {
    "url": "assets/img/image-20201111225349487.b6ae695f.png",
    "revision": "b6ae695f9baf4ed4572d923f688017be"
  },
  {
    "url": "assets/img/image-20201116143825510.f9c5f617.png",
    "revision": "f9c5f617953b3ebe89fea5591a9d74d5"
  },
  {
    "url": "assets/img/image-20201116144728699.b13209fe.png",
    "revision": "b13209fe2babc03a91aa21a70f4d90fc"
  },
  {
    "url": "assets/img/image-20201116145853845.a27667aa.png",
    "revision": "a27667aa0a1de438e178deab056dc12c"
  },
  {
    "url": "assets/img/image-20201116150501717.c8b6ae4c.png",
    "revision": "c8b6ae4c8d07273982e9ef74da8ccf5c"
  },
  {
    "url": "assets/img/image-20201116151129752.2d1490b6.png",
    "revision": "2d1490b6c3961d994460aae5dbde3681"
  },
  {
    "url": "assets/img/image-20201116151616119.b0856543.png",
    "revision": "b0856543184c881c8f9c319bc2a4ab94"
  },
  {
    "url": "assets/img/image-20201116151828693.5f9c3d69.png",
    "revision": "5f9c3d69489533ff6c16b92e284379e1"
  },
  {
    "url": "assets/img/image-20201116152811909.2516f1d3.png",
    "revision": "2516f1d39638bb619382a68100ad8edf"
  },
  {
    "url": "assets/img/image-20201116163114510.8a97540e.png",
    "revision": "8a97540e974da58a9fc191291d4d5f07"
  },
  {
    "url": "assets/img/image-20201129163427823.6a261a22.png",
    "revision": "6a261a22b4f9311a0cdb4f1686d0f3fb"
  },
  {
    "url": "assets/img/image-20201201224945859.80f58250.png",
    "revision": "80f582500627b36015f4913d5c056855"
  },
  {
    "url": "assets/img/image-20201202223735706.e82092fa.png",
    "revision": "e82092fa8dcc6fc816a2867b719e024f"
  },
  {
    "url": "assets/img/image-20201202225302702.8c95a6d4.png",
    "revision": "8c95a6d4df5596af292c42be93f2c66b"
  },
  {
    "url": "assets/img/image-20201202230643686.f3691332.png",
    "revision": "f3691332bc9c9d6c80699d1d3c62cc4f"
  },
  {
    "url": "assets/img/image-20201206220455853.ea7b0cd6.png",
    "revision": "ea7b0cd6c6499e9d3ba8117c607ef2b0"
  },
  {
    "url": "assets/img/image-20201206220557693.583d6ae8.png",
    "revision": "583d6ae8f1e128446d6a43c1c9479ee8"
  },
  {
    "url": "assets/img/image-20201206220902251.e01d9c82.png",
    "revision": "e01d9c82f9e323f83d56c654c18d72ea"
  },
  {
    "url": "assets/img/image-20201206222442413.5b760741.png",
    "revision": "5b7607416d70993ed3abe2eea78eab88"
  },
  {
    "url": "assets/img/image-20201206222914140.202f9def.png",
    "revision": "202f9def9780fe90e7315a593a4fd2bf"
  },
  {
    "url": "assets/img/image-20201206223207361.ba4f6e75.png",
    "revision": "ba4f6e75c5d4d4dd8f9bba0175a2c450"
  },
  {
    "url": "assets/img/image-20201206223333533.608f1d62.png",
    "revision": "608f1d6235c1ea17819ef87c781b69ec"
  },
  {
    "url": "assets/img/image-20201206223617296.e756160b.png",
    "revision": "e756160b00759220902cfebbc3697e29"
  },
  {
    "url": "assets/img/image-20201206223650661.cddf4a8a.png",
    "revision": "cddf4a8a88fc451c14486cc441a6e9fb"
  },
  {
    "url": "assets/img/image-20201206223852022.eeea349c.png",
    "revision": "eeea349ca29911a7ff09020adcfdd141"
  },
  {
    "url": "assets/img/image-20201206223932290.03af2c98.png",
    "revision": "03af2c987be2e980d4caeea0272cdb8a"
  },
  {
    "url": "assets/img/image-20201212161501335.f1a13430.png",
    "revision": "f1a13430902e1dd9b97c59def7a6c209"
  },
  {
    "url": "assets/img/image-20201212163112945.7f485921.png",
    "revision": "7f4859212260aa3ae919d09b842ba22f"
  },
  {
    "url": "assets/img/image-20201212163237572.b51a6016.png",
    "revision": "b51a60164690b0e40a77b8934d4e1f15"
  },
  {
    "url": "assets/img/image-20201212163552818.d82103bf.png",
    "revision": "d82103bf3f6f2e88b08a3e2f1a9cd4f3"
  },
  {
    "url": "assets/img/image-20201213093040271.e007f859.png",
    "revision": "e007f8596495dfbc9d42b7c4e032b1c5"
  },
  {
    "url": "assets/img/image-20201213095733801.0e923fd5.png",
    "revision": "0e923fd55fe4988634e38685520a1e24"
  },
  {
    "url": "assets/img/image-20201214221333991.3c1471de.png",
    "revision": "3c1471de29320f7dfbefb2ec26c36397"
  },
  {
    "url": "assets/img/image-20201216231821371.0cae25c0.png",
    "revision": "0cae25c0bf08715d7c327bcb927da15a"
  },
  {
    "url": "assets/img/image-20201216231850849.c6a35866.png",
    "revision": "c6a358666a85afd6e3848a80a6083bad"
  },
  {
    "url": "assets/img/image-20201216231906429.eb08c53a.png",
    "revision": "eb08c53a34b63699cc13d0a9bef66d87"
  },
  {
    "url": "assets/img/image-20201220170837577.f34edfc5.png",
    "revision": "f34edfc5144b1ae770ad8ad8347474db"
  },
  {
    "url": "assets/img/image-20201220171853831.2a28f89d.png",
    "revision": "2a28f89d9b99f8e650288657483537bb"
  },
  {
    "url": "assets/img/image-20201220190245453.52d20e0f.png",
    "revision": "52d20e0f7857aaeac518341aef3122e9"
  },
  {
    "url": "assets/img/image-20201220190309542.624d0bf6.png",
    "revision": "624d0bf6b3323248cd0a3974f9c1bfe6"
  },
  {
    "url": "assets/img/image-20201220190339273.a872bf3e.png",
    "revision": "a872bf3eb6fe24dbf38001bcd3b4aea4"
  },
  {
    "url": "assets/img/image-20201220203654437.ed835ffd.png",
    "revision": "ed835ffd6a2144f6d56979aef529bbb0"
  },
  {
    "url": "assets/img/image-20201220203955282.e86e5c40.png",
    "revision": "e86e5c40938f5a3b3e8988d99ef7e6ea"
  },
  {
    "url": "assets/img/image-20201220205945279.0506657c.png",
    "revision": "0506657c423aa657dd1c4abe090ffdff"
  },
  {
    "url": "assets/img/image-20201221215732016.9dd5394e.png",
    "revision": "9dd5394ea8842b4f3bc00aa32fc3d991"
  },
  {
    "url": "assets/img/image-20201221222129296.134b58be.png",
    "revision": "134b58be741d988c0ec2f707e164d3bc"
  },
  {
    "url": "assets/img/image-20201222211717542.b4ba77d6.png",
    "revision": "b4ba77d66157a67cd76a2f9516bee495"
  },
  {
    "url": "assets/img/image-20201222212402348.0a394a57.png",
    "revision": "0a394a57768a911e35f21ec303f71c8b"
  },
  {
    "url": "assets/img/image-20201222213006536.6ba634ed.png",
    "revision": "6ba634edbfa313a13b94dcaffe354874"
  },
  {
    "url": "assets/img/image-20201222220054922.4bb0c572.png",
    "revision": "4bb0c572199349c1d4ee97a649b56c44"
  },
  {
    "url": "assets/img/image-20201222220658607.7e19b48d.png",
    "revision": "7e19b48d9ba6e5384fd4d57d1b8f30a0"
  },
  {
    "url": "assets/img/image-20201222220819603.47306946.png",
    "revision": "4730694677862b67108af83c0f1cd4d0"
  },
  {
    "url": "assets/img/image-20201222221007671.4cd4fac3.png",
    "revision": "4cd4fac3dd7a711fac21c476cb2083df"
  },
  {
    "url": "assets/img/image-20201222221737672.96aa55f1.png",
    "revision": "96aa55f1dcf028ae6cbfc77cd7a6e6f5"
  },
  {
    "url": "assets/img/image-20201222222211562.e35fc788.png",
    "revision": "e35fc788e704ea7e4d811f8e8c39f33d"
  },
  {
    "url": "assets/img/image-20201222223140613.44b569bb.png",
    "revision": "44b569bb35cdd339fdd3882bc06e666e"
  },
  {
    "url": "assets/img/image-20201222223425500.4f29c845.png",
    "revision": "4f29c845611e6411f8d45b6ac992ee04"
  },
  {
    "url": "assets/img/image-20201222223829797.1834a017.png",
    "revision": "1834a0174bff35e72597957f0831cbbe"
  },
  {
    "url": "assets/img/image-20201222223916961.448151e2.png",
    "revision": "448151e2e4cde73696581939039a2856"
  },
  {
    "url": "assets/img/image-20201223212903438.4e8c218e.png",
    "revision": "4e8c218e81633fdda32b5fa71f6925e5"
  },
  {
    "url": "assets/img/image-20201223214612995.cbe59331.png",
    "revision": "cbe59331938f2d90b49c8283c9f3e04f"
  },
  {
    "url": "assets/img/image-20201223215140821.2410bce6.png",
    "revision": "2410bce6cbdf23d006030a4893679d2f"
  },
  {
    "url": "assets/img/image-20201223220236107.a72d6e7a.png",
    "revision": "a72d6e7a16acd8f040f00922bfcb6c92"
  },
  {
    "url": "assets/img/image-20210101151015156.a926927f.png",
    "revision": "a926927f53db4691348737eb14c7f8aa"
  },
  {
    "url": "assets/img/image-20210101151050990.52bd2bd3.png",
    "revision": "52bd2bd3ed27bc2aa943fdb3306d636c"
  },
  {
    "url": "assets/img/image-20210101151445645.b111931f.png",
    "revision": "b111931fe99b676df3f2dfe2c5a1c59b"
  },
  {
    "url": "assets/img/image-20210101152209177.0ae3fbdc.png",
    "revision": "0ae3fbdc34de0dfc2619aeeeb751444f"
  },
  {
    "url": "assets/img/image-20210101152944505.b9a8fac8.png",
    "revision": "b9a8fac8eb0c7e646e1e887fd8073008"
  },
  {
    "url": "assets/img/image-20210101153834105.59375a8a.png",
    "revision": "59375a8a238be0cff5c65a2177a1cc6b"
  },
  {
    "url": "assets/img/image-20210101154657256.e47f87b1.png",
    "revision": "e47f87b1a827709ff7c116ec563a370d"
  },
  {
    "url": "assets/img/image-20210101173349039.6492184a.png",
    "revision": "6492184a6edc82d15a541696f4cffe0b"
  },
  {
    "url": "assets/img/image-20210102141247460.c140af98.png",
    "revision": "c140af98d6811936036bf1a052d6926b"
  },
  {
    "url": "assets/img/image-20210102151953031.de99b9d6.png",
    "revision": "de99b9d6e9e652672e1dfc29c77285d0"
  },
  {
    "url": "assets/img/image-20210102224320581.a7812e0c.png",
    "revision": "a7812e0c7b00f1958a014c8d43ab66ce"
  },
  {
    "url": "assets/img/image-20210103123733067.ca318d67.png",
    "revision": "ca318d6739b185e94b46cf9c0dcb05e7"
  },
  {
    "url": "assets/img/image-20210103124813651.827c4b5f.png",
    "revision": "827c4b5fa6306bc527e4047342029b34"
  },
  {
    "url": "assets/img/image-20210103214314948.57bca6e9.png",
    "revision": "57bca6e965980347d297af53637a8c11"
  },
  {
    "url": "assets/img/image-20210103214344856.616b9ff4.png",
    "revision": "616b9ff4f26193baf661b02e4cf3f1e0"
  },
  {
    "url": "assets/img/image-20210103214429270.71cb0b69.png",
    "revision": "71cb0b699e8dd110ad344d84e0d48d09"
  },
  {
    "url": "assets/img/image-20210103214507570.c7aa65fa.png",
    "revision": "c7aa65fa942df6d598f8cfd4eac5ac99"
  },
  {
    "url": "assets/img/image-20210103214551781.c92cf601.png",
    "revision": "c92cf601a965e2c6dd20a9e141f72330"
  },
  {
    "url": "assets/img/image-20210103214636453.98b47f20.png",
    "revision": "98b47f2067e5191d37013fa3f227d6aa"
  },
  {
    "url": "assets/img/image-20210103214808419.e8e4378c.png",
    "revision": "e8e4378c187b9cf05bcaef2c1129c10e"
  },
  {
    "url": "assets/img/image-20210103215655806.02bd6ae8.png",
    "revision": "02bd6ae80e5192bf5b0f7892c0e7ee19"
  },
  {
    "url": "assets/img/image-20210103220912929.4da32422.png",
    "revision": "4da3242204af87506a8363bc726bf00a"
  },
  {
    "url": "assets/img/image-20210103221319413.7a26aa89.png",
    "revision": "7a26aa89af5163282c38f67fa04d3a1d"
  },
  {
    "url": "assets/img/image-20210103221650411.83f71473.png",
    "revision": "83f71473335271c89c6272796f8faff8"
  },
  {
    "url": "assets/img/image-20210103222000752.7c53f913.png",
    "revision": "7c53f9137d347905958e5dff6c1b19d1"
  },
  {
    "url": "assets/img/image-20210104140833558.70890b15.png",
    "revision": "70890b154ba6b3de04ff7a6af0f80844"
  },
  {
    "url": "assets/img/image-20210104141937284.0c6d4a0c.png",
    "revision": "0c6d4a0c6f80c068b4f19114c0ad95f6"
  },
  {
    "url": "assets/img/image-20210104144759316.855b8c32.png",
    "revision": "855b8c32ae66581947c60cd5f31d1d0b"
  },
  {
    "url": "assets/img/image-20210105095414229.8bc8203f.png",
    "revision": "8bc8203fb3fe3ffef360dcdd93a96812"
  },
  {
    "url": "assets/img/image-20210105100343828.0de8f27a.png",
    "revision": "0de8f27a8c913fb3cd6daa883b29c3b7"
  },
  {
    "url": "assets/img/image-20210105100437798.2eca0c17.png",
    "revision": "2eca0c177e776e4784dd4fd2e7c2336d"
  },
  {
    "url": "assets/img/image-20210105100618462.6d9ac0e3.png",
    "revision": "6d9ac0e37a23ad5c349d8d14722006f4"
  },
  {
    "url": "assets/img/image-20210105103652693.48fe357e.png",
    "revision": "48fe357eba53cf9e1381a4b86c501162"
  },
  {
    "url": "assets/img/image-20210105135521375.681fb39d.png",
    "revision": "681fb39d07bab3009cd21e9539647850"
  },
  {
    "url": "assets/img/image-20210105135627931.3ba7de7a.png",
    "revision": "3ba7de7a11c526839bcd8ad5c32a0e91"
  },
  {
    "url": "assets/img/image-20210105140059987.bb6542de.png",
    "revision": "bb6542de28db6cab09d2fff9390fe90d"
  },
  {
    "url": "assets/img/image-20210105140826290.dbc6fdd7.png",
    "revision": "dbc6fdd752217ffa57a75ff4684e2c32"
  },
  {
    "url": "assets/img/image-20210105181333340.2593f8ad.png",
    "revision": "2593f8ad958bfd0f5a78f431211c993c"
  },
  {
    "url": "assets/img/image-20210105181340256.2593f8ad.png",
    "revision": "2593f8ad958bfd0f5a78f431211c993c"
  },
  {
    "url": "assets/img/image-20210105202655674.9f5e5c95.png",
    "revision": "9f5e5c954889d8b28da101f3cd13f1fd"
  },
  {
    "url": "assets/img/image-20210110171534255.e479a789.png",
    "revision": "e479a7890f53cc6ddce72f12223320a1"
  },
  {
    "url": "assets/img/image-20210110171628121.d4b42ca9.png",
    "revision": "d4b42ca9636d6edfd493f252a1435034"
  },
  {
    "url": "assets/img/image-20210110172409026.7c57dece.png",
    "revision": "7c57dece4f3325e5fbc987cf03d2a1dd"
  },
  {
    "url": "assets/img/image-20210110202919199.5b222549.png",
    "revision": "5b222549612e29a78b9e1a23c6ec15eb"
  },
  {
    "url": "assets/img/image-20210110215938801.99322b3f.png",
    "revision": "99322b3f4b917391e5e6b0782a9ae552"
  },
  {
    "url": "assets/img/image-20210111001913357.9cd7ae7b.png",
    "revision": "9cd7ae7b1f2eb1814c3b947cde162a1e"
  },
  {
    "url": "assets/img/image-20210111002248408.457cbe72.png",
    "revision": "457cbe721bdc91b7b8cbb04a172ed5f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/t1.aa020c76.png",
    "revision": "aa020c769da6187b328e60a27ef3975f"
  },
  {
    "url": "assets/img/t2.e1a2dace.png",
    "revision": "e1a2dace6414dbd197561880e19f6222"
  },
  {
    "url": "assets/js/10.3ff626af.js",
    "revision": "06cbc5d3dcdb231b76bc01a7086217c1"
  },
  {
    "url": "assets/js/11.5004ccf5.js",
    "revision": "fe46f81ee1bd6c4bc1aec00ede644f4e"
  },
  {
    "url": "assets/js/12.23aedd65.js",
    "revision": "1e9ad1e743a13f6445b0ac68c6286a66"
  },
  {
    "url": "assets/js/13.aed7de4c.js",
    "revision": "468941293a80870a1464c2ff23f74311"
  },
  {
    "url": "assets/js/14.879cca43.js",
    "revision": "080893d89e3b5b769dd4ffa7612b0982"
  },
  {
    "url": "assets/js/15.fc47c435.js",
    "revision": "c547e0c273c8042ac866136b373b0701"
  },
  {
    "url": "assets/js/16.118fd0ae.js",
    "revision": "8ae7b9349b5c6fbf01fef66667f0994e"
  },
  {
    "url": "assets/js/17.e84004ce.js",
    "revision": "ef899cc17b8057bc1c873f9df0e7a537"
  },
  {
    "url": "assets/js/18.30714318.js",
    "revision": "ad9b0efd9923ca431675610286273822"
  },
  {
    "url": "assets/js/19.11750b8b.js",
    "revision": "51f8857cf3eee13631f247a27f49d3d4"
  },
  {
    "url": "assets/js/2.536adad5.js",
    "revision": "043f79d2a469adaf820b390f3432f990"
  },
  {
    "url": "assets/js/20.b863b6fa.js",
    "revision": "66ad88864d536327cbaa0149fd51f540"
  },
  {
    "url": "assets/js/21.2137d97a.js",
    "revision": "ad92aff47e40657a8bddecdf827553d4"
  },
  {
    "url": "assets/js/22.80669c22.js",
    "revision": "be35519e0f08b8e396ce19a429d53c91"
  },
  {
    "url": "assets/js/23.72848772.js",
    "revision": "f3b45fb7e1b5c816b6c79850979b60b7"
  },
  {
    "url": "assets/js/24.1bfedeca.js",
    "revision": "87a08a80a528bf706d1546167e1f4717"
  },
  {
    "url": "assets/js/25.e2601a21.js",
    "revision": "29b786a4f46ed42d68018d0ce07ed7c2"
  },
  {
    "url": "assets/js/26.e702edb4.js",
    "revision": "3a5537c5bd3f5adf5eeafc9431fa5e32"
  },
  {
    "url": "assets/js/27.ad8a7c18.js",
    "revision": "dfd5244bd9d9c97b3d78902d1a7f5d1b"
  },
  {
    "url": "assets/js/28.1a99ac84.js",
    "revision": "85b258172fa1279bacc3c7c5477d46ab"
  },
  {
    "url": "assets/js/29.5b4e07d0.js",
    "revision": "8006b74e42eb865ddda4dee52eff8e5c"
  },
  {
    "url": "assets/js/3.9077a884.js",
    "revision": "40cccb2cc198bb7e7324ea7cb05be21c"
  },
  {
    "url": "assets/js/30.ff8db3bd.js",
    "revision": "70c7e990b9f00add073f0cc4eda25b8e"
  },
  {
    "url": "assets/js/31.2b1ed55c.js",
    "revision": "9e3ffac9e050c537399e0275d7ebfd24"
  },
  {
    "url": "assets/js/32.0b2d028a.js",
    "revision": "6c314a4e12610ce765fb1440e4a4d08c"
  },
  {
    "url": "assets/js/33.575680f8.js",
    "revision": "c1fb4e10a3fecea76e0a3cfa8d9f9193"
  },
  {
    "url": "assets/js/34.afb1225f.js",
    "revision": "402553bc0ebf8a9a1d9b81c5c9f8e354"
  },
  {
    "url": "assets/js/35.ff23ab9c.js",
    "revision": "21d97da8ae55c7e9ad425c8241b1b9b8"
  },
  {
    "url": "assets/js/36.966af213.js",
    "revision": "8b3b211f9809b3bdd8ce46360dd4eb83"
  },
  {
    "url": "assets/js/37.1532f63d.js",
    "revision": "dc4d5b7ae6e07ff3cd39d87bfd222a6f"
  },
  {
    "url": "assets/js/38.c5d19f3a.js",
    "revision": "39370c5d075d81031d8c2617f43eeba2"
  },
  {
    "url": "assets/js/39.74bbba40.js",
    "revision": "203a945a3a5cb57cb9357735e1125199"
  },
  {
    "url": "assets/js/4.1e9539df.js",
    "revision": "1b98e97084ea96d881b1cc2e9a05c99f"
  },
  {
    "url": "assets/js/40.88c2da1f.js",
    "revision": "f219468233ce15a859be78a4ee5e9e29"
  },
  {
    "url": "assets/js/41.8e03ff24.js",
    "revision": "b2ded82683781d7c5794187e8877fffc"
  },
  {
    "url": "assets/js/42.3b5bd9a1.js",
    "revision": "ca18202e4d9cefebbd7f1d3f47124338"
  },
  {
    "url": "assets/js/43.fb907a45.js",
    "revision": "9afdf76715b7b4dea6e7bbcd7fdd3fd5"
  },
  {
    "url": "assets/js/44.a569314b.js",
    "revision": "d71b7a74319caa352ca9669c189bc678"
  },
  {
    "url": "assets/js/45.a60de9bb.js",
    "revision": "513cdb7f1eb77392280805b0ecbb5263"
  },
  {
    "url": "assets/js/46.d95071d0.js",
    "revision": "5a8b9aa2cf97fea96ecdd98bc6b042b0"
  },
  {
    "url": "assets/js/47.880335c1.js",
    "revision": "c641529418c60cb9cda1e7d30927ca47"
  },
  {
    "url": "assets/js/48.02c3ff97.js",
    "revision": "24101e7b7f490f04c488bcf5567d599c"
  },
  {
    "url": "assets/js/49.2d482c07.js",
    "revision": "dac9740fc73ffa9a012bfbf5866e18cf"
  },
  {
    "url": "assets/js/5.c7039330.js",
    "revision": "31c07bef7edf891946e40ffb6a3ee4fd"
  },
  {
    "url": "assets/js/50.9de303c0.js",
    "revision": "9d4179a16848ae59ea0a117c1425e4a0"
  },
  {
    "url": "assets/js/51.3c1c6891.js",
    "revision": "c6948da515682757b597b701fdba22ff"
  },
  {
    "url": "assets/js/52.884af6fd.js",
    "revision": "6d8a871193aa6b91f39960b391f04035"
  },
  {
    "url": "assets/js/53.bf432221.js",
    "revision": "c77e5656b694ae8d299bd72bf686e910"
  },
  {
    "url": "assets/js/54.4fb4af27.js",
    "revision": "bf8c625e7635baab389fe8021cf3094d"
  },
  {
    "url": "assets/js/55.2ea06681.js",
    "revision": "41df00b6822d9cf243f77d36fb41a09b"
  },
  {
    "url": "assets/js/56.4e6df2a4.js",
    "revision": "789bd134e339f78ba8550f1cec981de2"
  },
  {
    "url": "assets/js/57.ae752045.js",
    "revision": "69bfddd0eea7c91179f4924af8db6115"
  },
  {
    "url": "assets/js/58.4468f657.js",
    "revision": "042411691226cd4ba160806a0896c3ac"
  },
  {
    "url": "assets/js/59.669915bf.js",
    "revision": "ad2ed4e9bf941f7b3aaf9b7f5922627d"
  },
  {
    "url": "assets/js/6.60f1f064.js",
    "revision": "518bfed827ecb5db2e36dfd03a49f721"
  },
  {
    "url": "assets/js/60.4d66bd2d.js",
    "revision": "ada2c2f41b2f08f9f11971a16d54540c"
  },
  {
    "url": "assets/js/61.660abed2.js",
    "revision": "70c56e4a0383c0d678b9b4d619065bb9"
  },
  {
    "url": "assets/js/62.c0b906b2.js",
    "revision": "e2999b2d546a277a4c84e5813c300112"
  },
  {
    "url": "assets/js/63.a0dc0f05.js",
    "revision": "d16d8ada184ad8aeabc4eb5adb5fe89d"
  },
  {
    "url": "assets/js/64.f36cd2b6.js",
    "revision": "9510d4245aa87322d8c120357367dcfb"
  },
  {
    "url": "assets/js/65.7a82dcaf.js",
    "revision": "5148cd1aef43882bf574a94c6e15209d"
  },
  {
    "url": "assets/js/66.8754f6de.js",
    "revision": "bfd95b536337a2eb9f1eb0e5e2502ea9"
  },
  {
    "url": "assets/js/67.d3e225ea.js",
    "revision": "91266bf36bb1dafd61d9abb30e438f3a"
  },
  {
    "url": "assets/js/68.030b474b.js",
    "revision": "f9495b8e50d08fdfb3a2df105c370081"
  },
  {
    "url": "assets/js/69.fd9a462f.js",
    "revision": "93a0ca1c3d225b440948451f67bc3cd0"
  },
  {
    "url": "assets/js/7.a38db74b.js",
    "revision": "ae264333af006e16a8fdcf5cd9261bc1"
  },
  {
    "url": "assets/js/70.cf2d81c3.js",
    "revision": "994db823ed2fd85ce8eea449795bbece"
  },
  {
    "url": "assets/js/71.125b9bb8.js",
    "revision": "308d034df65bc2380432a306c90af327"
  },
  {
    "url": "assets/js/72.a6c442e1.js",
    "revision": "0391b635a961ea5df45b2cb2759426d6"
  },
  {
    "url": "assets/js/73.58a2763a.js",
    "revision": "5510cc15f4089733a8e4a72a8f358112"
  },
  {
    "url": "assets/js/74.ba0df329.js",
    "revision": "195fc71c715d79c685c5a746d1fffd19"
  },
  {
    "url": "assets/js/75.8a88d87c.js",
    "revision": "adf4b2c8d30fc865cb2edb0fcc86f52b"
  },
  {
    "url": "assets/js/76.06d41bea.js",
    "revision": "2fd6624ea17fa543fd81450d6a199378"
  },
  {
    "url": "assets/js/77.f9b51c70.js",
    "revision": "2415e28b605e7b1e3323ef39f4388741"
  },
  {
    "url": "assets/js/78.19aaa208.js",
    "revision": "653bdf9a9ecb00e1a9097b20e661d335"
  },
  {
    "url": "assets/js/79.afc7b02d.js",
    "revision": "d5ebb9ff604da058d23cc73b417a6579"
  },
  {
    "url": "assets/js/8.57ff1192.js",
    "revision": "2abd759dab4b4c149db2bf1942f123f5"
  },
  {
    "url": "assets/js/80.f632c51b.js",
    "revision": "60ee6cc50d702b068d3f3e79f2e8057b"
  },
  {
    "url": "assets/js/9.aa6a27fa.js",
    "revision": "ccc451e88628c0823c488f5e5d0bae49"
  },
  {
    "url": "assets/js/app.7b8ea701.js",
    "revision": "7e40d02da2bbb6655bce06a86fe2833f"
  },
  {
    "url": "dsalg-java-hsp/01/index.html",
    "revision": "91ff6a0dc86eb584002c21d5ffd1d38b"
  },
  {
    "url": "dsalg-java-hsp/02/index.html",
    "revision": "c18d45532110bb79f7fd119a0bde5466"
  },
  {
    "url": "dsalg-java-hsp/03/01.html",
    "revision": "71cd67ca4b5d952611b57c4e1449a7ec"
  },
  {
    "url": "dsalg-java-hsp/03/02.html",
    "revision": "ecf7f20b092c3eda9415218f475be211"
  },
  {
    "url": "dsalg-java-hsp/03/index.html",
    "revision": "2032537b5badf86fdd4445af31e5831e"
  },
  {
    "url": "dsalg-java-hsp/04/01.html",
    "revision": "4f71acf200b38a3da7049a858865b851"
  },
  {
    "url": "dsalg-java-hsp/04/02.html",
    "revision": "dd99d52fee33b5312da83f5c7e1e1140"
  },
  {
    "url": "dsalg-java-hsp/04/03.html",
    "revision": "26f256acffbe76aef0a5e7b97b3cdae9"
  },
  {
    "url": "dsalg-java-hsp/04/04.html",
    "revision": "c1b232b7d0268e5f3c31ee364097bef7"
  },
  {
    "url": "dsalg-java-hsp/04/index.html",
    "revision": "d25db5a0a1b0584ff4ba9e671265ae86"
  },
  {
    "url": "dsalg-java-hsp/05/01.html",
    "revision": "a265e9bacd22abdb76cd8b9a03a6dcd5"
  },
  {
    "url": "dsalg-java-hsp/05/02.html",
    "revision": "09e14ccf8474c01f7b33e3e6c944a9a5"
  },
  {
    "url": "dsalg-java-hsp/05/03.html",
    "revision": "9025fb6f0630839bcabf58947eacbd06"
  },
  {
    "url": "dsalg-java-hsp/05/04.html",
    "revision": "3d5f43b9f1757e3d8bdca470636ec733"
  },
  {
    "url": "dsalg-java-hsp/05/05.html",
    "revision": "866af07dca2c9100520c83d260ad509f"
  },
  {
    "url": "dsalg-java-hsp/05/index.html",
    "revision": "64220037051c70c988d306690b26404c"
  },
  {
    "url": "dsalg-java-hsp/06/01.html",
    "revision": "d7c472ab83ef4e4bc01c3ab469bb58c0"
  },
  {
    "url": "dsalg-java-hsp/06/02.html",
    "revision": "3ccca3ff622a830db1fdf4fd33fc7082"
  },
  {
    "url": "dsalg-java-hsp/06/03.html",
    "revision": "6b3b1aee876799c63fadc4906608f209"
  },
  {
    "url": "dsalg-java-hsp/06/index.html",
    "revision": "be285b76f48516e07e7cfc28310ea589"
  },
  {
    "url": "dsalg-java-hsp/07/01.html",
    "revision": "ce2f71d205293adf70c64f34a9367de3"
  },
  {
    "url": "dsalg-java-hsp/07/02.html",
    "revision": "cb52c93474c021d27c862293e82e7b29"
  },
  {
    "url": "dsalg-java-hsp/07/03.html",
    "revision": "f9cb2056ad68fb0beb25e7289633877b"
  },
  {
    "url": "dsalg-java-hsp/07/04.html",
    "revision": "04146dc4d27da441ed28423bcd76393f"
  },
  {
    "url": "dsalg-java-hsp/07/05.html",
    "revision": "4951ce747577c92908bb1c0419884898"
  },
  {
    "url": "dsalg-java-hsp/07/06.html",
    "revision": "b2e31d818f14482268266b9019c98d68"
  },
  {
    "url": "dsalg-java-hsp/07/07.html",
    "revision": "c83279cd407707d6649e40ef4778faac"
  },
  {
    "url": "dsalg-java-hsp/07/08.html",
    "revision": "8262416cec3498a1a77b21a6f0b1847c"
  },
  {
    "url": "dsalg-java-hsp/07/09.html",
    "revision": "c1e3c205d8d0031d61c3cc5a2cde6df1"
  },
  {
    "url": "dsalg-java-hsp/07/10.html",
    "revision": "8f303718038339c56a8868616b42490c"
  },
  {
    "url": "dsalg-java-hsp/07/index.html",
    "revision": "b547bb2efc43589c0d113a69fe22800c"
  },
  {
    "url": "dsalg-java-hsp/08/01.html",
    "revision": "5c13ba30e4bbc95b69a929447aee37d2"
  },
  {
    "url": "dsalg-java-hsp/08/02.html",
    "revision": "675d379b83b0973509c7651c9c55270c"
  },
  {
    "url": "dsalg-java-hsp/08/03.html",
    "revision": "6015749d3193e41131ec390d41e2b956"
  },
  {
    "url": "dsalg-java-hsp/08/04.html",
    "revision": "b134eabd7defd672bc7b87e663f00d29"
  },
  {
    "url": "dsalg-java-hsp/08/index.html",
    "revision": "fb1cb4e1f955754f5393571707d6a5f1"
  },
  {
    "url": "dsalg-java-hsp/09/index.html",
    "revision": "188a7bc8b939ed28475749152f3a67a3"
  },
  {
    "url": "dsalg-java-hsp/10/01.html",
    "revision": "1359ab0bbd8ecb459f7a1132dadc115f"
  },
  {
    "url": "dsalg-java-hsp/10/02.html",
    "revision": "62c695442b7324a05bb29f62248e87fb"
  },
  {
    "url": "dsalg-java-hsp/10/03.html",
    "revision": "6d7294d2d9c2b4c1fbe959d4dd94d4dd"
  },
  {
    "url": "dsalg-java-hsp/10/index.html",
    "revision": "050c9ab9af95e4787c447b61225489e2"
  },
  {
    "url": "dsalg-java-hsp/11/01.html",
    "revision": "7e58e1e0d444f2a4064f8b12f788ce38"
  },
  {
    "url": "dsalg-java-hsp/11/02.html",
    "revision": "fed5aaef8f7dbe5ec6a76452c72b83c1"
  },
  {
    "url": "dsalg-java-hsp/11/03.html",
    "revision": "b6af2bd8fc49634307a911b823384a41"
  },
  {
    "url": "dsalg-java-hsp/11/04.html",
    "revision": "ab7b4fb7d05a84b8547c46c2a14e0459"
  },
  {
    "url": "dsalg-java-hsp/11/05.html",
    "revision": "7007e8625622877e8d09a94d2e978bf6"
  },
  {
    "url": "dsalg-java-hsp/11/index.html",
    "revision": "2c1d4f6df12a94d6654ef0c9bce31daf"
  },
  {
    "url": "dsalg-java-hsp/12/01.html",
    "revision": "6fe9c95e24d2f19d479319218ae8a089"
  },
  {
    "url": "dsalg-java-hsp/12/02.html",
    "revision": "ef06f113c6463d355c5cd85eae0b3afc"
  },
  {
    "url": "dsalg-java-hsp/12/03.html",
    "revision": "d378d00551cd2a5f0bcf99a338a443db"
  },
  {
    "url": "dsalg-java-hsp/12/index.html",
    "revision": "f8219199318a3bf699e21e6aab1a94ec"
  },
  {
    "url": "dsalg-java-hsp/13/01.html",
    "revision": "de18a04e3e476e1cedcd9c801461bf17"
  },
  {
    "url": "dsalg-java-hsp/13/02.html",
    "revision": "a0df91a070e1b0f037e12676dab8cfdb"
  },
  {
    "url": "dsalg-java-hsp/13/03.html",
    "revision": "9635aff71acd5f7e532339401fd2007b"
  },
  {
    "url": "dsalg-java-hsp/13/04.html",
    "revision": "898687bdcae1c8f737605dc625a525df"
  },
  {
    "url": "dsalg-java-hsp/13/05.html",
    "revision": "eb6ab4fbada16519ddc8e45ea9a1dcb0"
  },
  {
    "url": "dsalg-java-hsp/13/06.html",
    "revision": "668ca5f2ff3a3dd83364c4f76e8c9934"
  },
  {
    "url": "dsalg-java-hsp/13/07.html",
    "revision": "69a2cc93b0790402cf7ad75185832917"
  },
  {
    "url": "dsalg-java-hsp/13/index.html",
    "revision": "d718eedeaffedf0513c4232565fb718e"
  },
  {
    "url": "dsalg-java-hsp/14/01.html",
    "revision": "d0ec97c363e5339a91b56ec17c4417d6"
  },
  {
    "url": "dsalg-java-hsp/14/02.html",
    "revision": "dc55bb45a1010a086d6416b371f9bdc0"
  },
  {
    "url": "dsalg-java-hsp/14/03.html",
    "revision": "84f27f7677cadd597e9e85e4a3a94061"
  },
  {
    "url": "dsalg-java-hsp/14/04.html",
    "revision": "7c39d34798398c2d8121a12057921215"
  },
  {
    "url": "dsalg-java-hsp/14/05.html",
    "revision": "e7f8da609a49232825710111fe1452f9"
  },
  {
    "url": "dsalg-java-hsp/14/06.html",
    "revision": "8a2a7a8138c1caeefadfa30ce929c6da"
  },
  {
    "url": "dsalg-java-hsp/14/07.html",
    "revision": "0f0baed33e1aeae7899e0199f5035d00"
  },
  {
    "url": "dsalg-java-hsp/14/08.html",
    "revision": "c0da495413998ae658b48b30eaacea86"
  },
  {
    "url": "dsalg-java-hsp/14/09.html",
    "revision": "e4d31e15339399ba339cb66c79309a4a"
  },
  {
    "url": "dsalg-java-hsp/14/10.html",
    "revision": "9ee475bd0191e2264d52af8efee5f6af"
  },
  {
    "url": "dsalg-java-hsp/14/index.html",
    "revision": "c7da6a22203aeaa16920bdf8dfb48512"
  },
  {
    "url": "dsalg-java-hsp/index.html",
    "revision": "056cb02be9cd749649bdfceca21b175a"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "4f63c5eb02dd790e1d137d200ffea78a"
  },
  {
    "url": "mlogo.svg",
    "revision": "ac847ef8c526f385e7288c4808a7b830"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
