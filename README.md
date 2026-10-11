# 김선경 크리에이티브 스튜디오 (SUNKYUNG KIM — CREATIVE STUDIO)

> **"감각적인 상상을, 나만의 작품으로."**  
> *Where Imagination Becomes Creation.*

감성과 실용성을 연결하는 크리에이티브 스튜디오 웹사이트입니다.  
빌드 프레임워크나 로컬 웹 서버 없이, **`index.html` 파일을 더블 클릭하여 바로 열 수 있는 순수 HTML5, CSS3, JavaScript 구조**로 제작되었습니다.

---

## 🌟 주요 특징 및 장점

1. **더블 클릭 즉시 실행 (Zero Build & Zero Server)**
   - Node.js, npm, Vite 등 빌드 도구가 전혀 필요 없습니다.
   - 로컬 웹 서버(`http://localhost`)를 켤 필요 없이, Windows 파일 탐색기에서 **`index.html`을 더블 클릭**하면 크롬, 엣지(Edge), 웨일, 파이어폭스 등 어떤 브라우저에서든 100% 정상 작동합니다.
   - 브라우저의 로컬 보안 정책(`file://` CORS 제약)에 걸리는 모듈 import나 비동기 fetch를 배제하고 클라이언트 PC 메모리 내에서 직접 연산하도록 설계되었습니다.

2. **라벤더 & 화이트 감성 디자인 시스템 (`css/style.css`)**
   - 메인 배경: `#FFFFFF`, 서브 배경: `#F8F6FC`
   - 라벤더 포인트: `#C8B8F0`, 딥 라벤더: `#8C78C6`, 연한 보라색: `#EAE4FA`
   - 본문 텍스트: `#302B3A`, 보조 텍스트: `#777184`
   - CSS 변수로 일괄 관리되어 원하는 색상으로 언제든 쉽게 변경 가능합니다.

3. **8대 핵심 섹션 완벽 구현**
   - **Header**: 상단 고정 글래스모피즘, 스크롤 감지 배경 전환, 모바일 반응형 햄버거 메뉴 & 드로어
   - **Hero**: `MY CREATIVE UNIVERSE` 배지, 감성 슬로건 타이포그래피, 3D 유리 구체 아트워크 부유 애니메이션
   - **About**: 창작자 김선경의 진솔한 소개글과 3대 핵심 특징 카드 (`IMAGINATION`, `CREATION`, `EXPLORATION`)
   - **Creative Fields**: 4대 탐색 영역 (`AI VISUAL`, `CHARACTER & STORY`, `DIGITAL CONTENT`, `LIFESTYLE & DESIGN`)과 커스텀 SVG 아이콘
   - **Selected Works**: 반응형 2열 갤러리 그리드, 6개 카테고리 필터(`ALL`, `AI ART`, `CHARACTER`, `SHORT-FORM`, `LIFESTYLE`, `EXPERIMENT`), 미제작 카테고리 빈 상태 안내(Empty State)
   - **Project Detail Modal**: 카드 클릭 시 열리는 상세 팝업 창, 키보드 `ESC` 및 배경 클릭 닫기, 제작 도구 칩, 콘셉트 상태 배지
   - **Creative Philosophy**: 감성적인 캘리그라피형 문구와 은은한 라벤더 방사형 그라데이션 휴식 구간
   - **Contact**: 가짜 폼 없는 안전한 `mailto` 이메일 발송, 원클릭 이메일 주소 복사, 안전한 SNS 링크
   - **Footer**: 브랜드 로고, 영문 슬로건, 자동 연도 계산(`new Date().getFullYear()`), 부드러운 최상단 이동 버튼

4. **100% 로컬 고화질 아트워크 자산 탑재**
   - 플레이스홀더 대신 브랜드 분위기에 특화된 5종의 고품질 아트워크가 `assets/images/`에 로컬 저장되어 있어 인터넷 연결이 불안정해도 화면이 깨지지 않습니다.

---

## 📁 프로젝트 폴더 구조

```text
c:\ai_study\web_3\
├── index.html                   # 메인 웹페이지 (더블 클릭하여 실행)
├── css/
│   └── style.css                # 디자인 토큰, 애니메이션, 컴포넌트, 반응형 스타일
├── js/
│   ├── data.js                  # 사이트 문구, 프로젝트 목록, 연락처 설정 파일
│   └── app.js                   # 필터링, 모달 팝업, 이메일 복사 등 클라이언트 연산 로직
├── assets/
│   └── images/                  # 로컬 고화질 아트워크 이미지
│       ├── hero-artwork.jpg     # 히어로 대표 아트워크
│       ├── project-lavender.jpg # Project 01: DREAM IN LAVENDER
│       ├── project-character.jpg# Project 02: MY LITTLE CHARACTER
│       ├── project-motion.jpg   # Project 03: MOMENTS IN MOTION
│       └── project-lifestyle.jpg# Project 04: EVERYDAY INSPIRATION
└── README.md                    # 안내 문서
```

---

## 🚀 실행 방법

1. Windows 파일 탐색기에서 `c:\ai_study\web_3` 폴더로 이동합니다.
2. **`index.html` 파일을 마우스로 더블 클릭**합니다.
3. 기본 웹 브라우저(Edge, Chrome 등)가 열리며 웹사이트가 즉시 실행됩니다.

---

## 🛠 데이터 수정 및 커스터마이징

### 1. 문구, 연락처, 프로젝트 수정 (`js/data.js`)
텍스트 에디터나 메모장으로 `js/data.js` 파일을 열어 원하는 내용을 수정하고 저장하면 끝입니다.
- **연락처 변경**:
  ```javascript
  contact: {
    email: "sunkyung.studio@gmail.com", // 본인 이메일로 변경 (비워두면 버튼 자동 숨김)
    instagram: "",                       // 인스타그램 주소 입력 시 버튼 활성화
    youtube: "",                         // 유튜브 채널 주소 입력 시 버튼 활성화
    statusBadge: "창작 제안 및 협업 문의 열려있음"
  }
  ```
- **프로젝트 추가 및 수정**: `projects` 배열에 새 프로젝트를 추가하거나 기존 프로젝트 내용 수정.

### 2. 색상 테마 변경 (`css/style.css`)
파일 상단의 `:root` 영역에서 `--lavender-point`, `--lavender-deep` 등의 색상 코드만 변경하면 사이트 전체에 자동 반영됩니다.
