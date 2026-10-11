/**
 * 김선경 크리에이티브 스튜디오 - 데이터 설정 파일
 * 
 * 빌드 도구 없이 이 파일만 수정하면 웹사이트의 텍스트, 프로젝트 목록, 연락처, SNS 링크 등이 즉시 변경됩니다.
 * (index.html을 더블 클릭하여 바로 열 수 있는 순수 JavaScript 파일입니다.)
 */

window.studioData = {
  // 1. 브랜드 및 기본 정보
  brand: {
    nameKo: "김선경",
    nameEn: "SUNKYUNG KIM",
    studioTitle: "CREATIVE STUDIO",
    sloganKo: "감각적인 상상을, 나만의 작품으로.",
    sloganEn: "Where Imagination Becomes Creation."
  },

  // 2. 상단 내비게이션 메뉴
  navigation: [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "EXPLORE", href: "#explore" },
    { label: "WORKS", href: "#works" },
    { label: "CONTACT", href: "#contact" }
  ],

  // 3. 히어로 섹션 설정
  hero: {
    badge: "MY CREATIVE UNIVERSE",
    titleLine1: "상상에 감성을 더해,",
    titleLine2: "나만의 세계를 만들다.",
    subtitleEn: "Where Imagination Becomes Creation.",
    description: "AI 비주얼부터 캐릭터, 디지털 콘텐츠까지.\n작은 영감을 나만의 감각으로 표현합니다.",
    artworkImage: "assets/images/hero-artwork.jpg",
    primaryButton: { label: "EXPLORE MY WORKS", href: "#works" },
    secondaryButton: { label: "ABOUT ME", href: "#about" }
  },

  // 4. 소개(About) 섹션 설정
  about: {
    label: "ABOUT THE CREATOR",
    title: "감각적인 아이디어를\n나만의 방식으로 표현합니다.",
    introText: [
      "안녕하세요, 김선경입니다.",
      "저는 일상 속에서 발견한 작은 영감과 새로운 아이디어를 감각적인 콘텐츠와 디자인으로 표현합니다.",
      "AI 이미지와 캐릭터, 디지털 콘텐츠, 라이프스타일 디자인 등 다양한 분야를 탐색하며 머릿속의 아이디어를 실제 결과물로 발전시키고 있습니다.",
      "저에게 창작은 단순히 아름다운 것을 만드는 일이 아닙니다. 익숙한 것에 새로운 시선을 더하고, 감성과 실용성을 연결하며, 사람들에게 새로운 영감을 전달하는 과정입니다.",
      "앞으로도 다양한 시도와 실험을 통해 저만의 창작 세계를 확장해 나가고 싶습니다."
    ],
    features: [
      {
        number: "CARD 01",
        tag: "IMAGINATION",
        title: "새로운 시선",
        description: "일상에서 영감을 발견하고 새로운 아이디어를 시각적으로 표현합니다."
      },
      {
        number: "CARD 02",
        tag: "CREATION",
        title: "직접 만드는 즐거움",
        description: "다양한 도구와 기술을 활용해 아이디어를 실제 결과물로 구현합니다."
      },
      {
        number: "CARD 03",
        tag: "EXPLORATION",
        title: "끝없는 탐색",
        description: "새로운 분야와 표현 방식을 배우며 창작의 가능성을 넓혀 갑니다."
      }
    ]
  },

  // 5. 창작 탐색 분야 (Creative Fields)
  creativeFields: {
    label: "WHAT I EXPLORE",
    title: "다양한 영감이 만나는 곳",
    description: "확정된 사업 실적이 아닌, 감성과 호기심으로 넓혀가는 창작의 관심사와 탐색 영역입니다.",
    fields: [
      {
        id: "ai-visual",
        number: "01",
        category: "AI VISUAL",
        title: "AI 이미지 & 감각적 비주얼",
        description: "AI 이미지, 감각적인 비주얼, 디지털 아트, 캐릭터 디자인에 대한 탐색.",
        details: ["AI Prompt Crafting", "Digital Art Composition", "Visual Mood Experiment"]
      },
      {
        id: "character-story",
        number: "02",
        category: "CHARACTER & STORY",
        title: "캐릭터 & 시각적 스토리텔링",
        description: "캐릭터를 활용한 콘텐츠와 개성 있는 시각적 스토리텔링.",
        details: ["Character Persona", "Emotive Visuals", "Worldbuilding Concept"]
      },
      {
        id: "digital-content",
        number: "03",
        category: "DIGITAL CONTENT",
        title: "숏폼 & 디지털 콘텐츠 기획",
        description: "유튜브 쇼츠, SNS 콘텐츠, 숏폼 영상 아이디어와 구성 기획.",
        details: ["Short-form Direction", "Pacing & Mood", "Visual Hook Planning"]
      },
      {
        id: "lifestyle-design",
        number: "04",
        category: "LIFESTYLE & DESIGN",
        title: "라이프스타일 & 디자인 아이디어",
        description: "생활용품 콘텐츠, 일상 속 디자인, 실용성과 감성을 연결하는 아이디어.",
        details: ["Object Aesthetics", "Sensible Curation", "Harmonious Daily Life"]
      }
    ]
  },

  // 6. 창작 철학 (Creative Philosophy)
  philosophy: {
    quoteKoLine1: "좋은 아이디어는",
    quoteKoLine2: "감성에서 시작되고,",
    quoteKoLine3: "나만의 표현을 통해 완성됩니다.",
    quoteEn: "Create with feeling. Express with purpose.",
    creatorSign: "SUNKYUNG KIM — CREATIVE STUDIO"
  },

  // 7. 연락처 및 소셜 링크 (Contact)
  contact: {
    label: "LET'S CONNECT",
    title: "새로운 아이디어를 함께 나눠요.",
    description: "콘텐츠와 창작에 관한 이야기, 새로운 프로젝트 제안, 협업 문의를 환영합니다.\n작은 아이디어가 새로운 가능성으로 이어질 수 있도록 다양한 연결을 기다립니다.",
    // 주소가 입력되어 있으면 활성화되고, 빈 문자열("")이면 버튼이 자동으로 숨겨집니다.
    email: "sunkyung.studio@gmail.com",
    instagram: "", // 예: "https://instagram.com/sunkyung_studio"
    youtube: "",   // 예: "https://youtube.com/@sunkyung_studio"
    statusBadge: "창작 제안 및 협업 문의 열려있음"
  },

  // 8. 포트폴리오 카테고리 목록
  categories: [
    { id: "ALL", label: "ALL WORKS" },
    { id: "AI ART", label: "AI ART" },
    { id: "CHARACTER", label: "CHARACTER" },
    { id: "SHORT-FORM", label: "SHORT-FORM" },
    { id: "LIFESTYLE", label: "LIFESTYLE" },
    { id: "CREATIVE EXPERIMENT", label: "EXPERIMENT" }
  ],

  // 9. 포트폴리오 프로젝트 목록
  projects: [
    {
      id: "proj-01",
      title: "DREAM IN LAVENDER",
      category: "AI ART",
      summary: "라벤더 컬러를 중심으로 한 몽환적인 비주얼 탐색.",
      description: "라벤더빛 유기적 곡선과 크리스탈 형태의 조화를 탐구한 디지털 비주얼 아트워크입니다. 은은하게 퍼지는 빛과 투명한 유리 질감을 활용하여 몽환적이고 감각적인 무드를 시각화했습니다. 다양한 프롬프트 조합과 후가공을 거쳐 완성된 아트워크 샘플입니다.",
      image: "assets/images/project-lavender.jpg",
      statusBadge: "EXPLORATION SAMPLE",
      statusNote: "본 프로젝트는 감각적 비주얼 표현을 위한 콘셉트 아트워크 샘플입니다.",
      tools: ["AI Generative Art", "Digital Compositing", "Color Grading"],
      year: "2026",
      link: ""
    },
    {
      id: "proj-02",
      title: "MY LITTLE CHARACTER",
      category: "CHARACTER",
      summary: "캐릭터의 개성과 감성을 활용한 시각적 표현.",
      description: "포근한 파스텔 라벤더 후디를 입은 감성 캐릭터 콘셉트 디자인입니다. 차분하면서도 친근한 시선을 담아내어 보는 이에게 위로와 미소를 선사하는 시각적 스토리텔링을 실험하고 있습니다. 향후 굿즈 및 디지털 스티커 확장을 염두에 둔 프로토타입입니다.",
      image: "assets/images/project-character.jpg",
      statusBadge: "CHARACTER PROTOTYPE",
      statusNote: "창작 세계관 확장을 위해 기획 중인 오리지널 캐릭터 샘플입니다.",
      tools: ["Character Concepting", "3D Art Toy Styling", "Lighting Study"],
      year: "2026",
      link: ""
    },
    {
      id: "proj-03",
      title: "MOMENTS IN MOTION",
      category: "SHORT-FORM",
      summary: "짧은 영상 안에 아이디어와 분위기를 담는 숏폼 콘텐츠 실험.",
      description: "유연하게 흐르는 키네틱 웨이브와 빛의 궤적을 3연작 프레임 형태로 재해석한 숏폼 모션 아트워크 기획입니다. 찰나의 순간에도 감각적인 여운을 남기는 화면 구도와 무드 연출 방식을 탐색합니다.",
      image: "assets/images/project-motion.jpg",
      statusBadge: "MOTION STUDY",
      statusNote: "숏폼 콘텐츠의 감각적 비주얼 훅을 연구하기 위한 모션 실험작입니다.",
      tools: ["Short-form Moodboard", "Motion Aesthetics", "Visual Pacing"],
      year: "2026",
      link: ""
    },
    {
      id: "proj-04",
      title: "EVERYDAY INSPIRATION",
      category: "LIFESTYLE",
      summary: "일상 속 제품과 아이디어를 감각적으로 표현하는 콘텐츠 탐색.",
      description: "정갈한 화이트 린넨 테이블 위, 라벤더 향기가 은은하게 퍼지는 세라믹 디퓨저를 정갈한 톤으로 담아낸 라이프스타일 비주얼입니다. 일상의 소소한 사물에 감성적인 시선을 불어넣어 실용성과 아름다움의 조화를 표현했습니다.",
      image: "assets/images/project-lifestyle.jpg",
      statusBadge: "LIFESTYLE SERIES",
      statusNote: "일상 속 소품의 감각적 스타일링과 스토리텔링을 위한 기획입니다.",
      tools: ["Visual Styling", "Editorial Photography", "Content Direction"],
      year: "2026",
      link: ""
    }
  ]
};
