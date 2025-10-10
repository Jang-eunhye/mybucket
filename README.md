# MyBucket

React + TypeScript + TailwindCSS 프로젝트

## 🛠️ 기술 스택

- **프론트엔드**: React 18, TypeScript
- **빌드 도구**: Vite
- **스타일링**: TailwindCSS
- **코드 품질**: ESLint, Prettier

## 🚀 시작하기

### 1. 패키지 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:5173` 으로 접속하세요.

## 📝 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행
- `npm run build` - 프로덕션 빌드
- `npm run preview` - 빌드된 앱 미리보기
- `npm run lint` - ESLint 실행
- `npm run format` - Prettier로 코드 포맷팅

## 📁 프로젝트 구조

```
mybucket/
├── public/
│   ├── images/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx       # 상단 네비게이션
│   │   │   └── Sidebar.tsx      # 왼쪽 사이드바
│   │   └── ui/                  # shadcn/ui 컴포넌트
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── input.tsx
│   │       ├── progress.tsx
│   │       ├── scroll-area.tsx
│   │       ├── badge.tsx
│   │       ├── label.tsx
│   │       └── textarea.tsx
│   ├── lib/
│   │   └── utils.ts             # 유틸리티 함수
│   ├── pages/
│   │   ├── Home.tsx             # 홈 대시보드
│   │   ├── Empty.tsx            # 비어있는 버킷 리스트
│   │   ├── Filled.tsx           # 완료한 버킷 리스트
│   │   ├── Stats.tsx            # 통계 페이지
│   │   └── Add.tsx              # 새 목표 추가
│   ├── api/                     # API 함수 (빈 폴더)
│   ├── hooks/                   # Custom Hooks (빈 폴더)
│   ├── types/                   # TypeScript 타입 (빈 폴더)
│   ├── utils/                   # 유틸리티 (빈 폴더)
│   ├── constants/               # 상수 (빈 폴더)
│   ├── App.tsx                  # 메인 앱 컴포넌트
│   ├── main.tsx                 # 앱 진입점
│   ├── index.css                # 글로벌 스타일
│   └── vite-env.d.ts            # TypeScript 타입 정의
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.cjs
└── .prettierrc
```

## 📄 페이지 구성

- **홈 (`/`)** - 전체 통계, 빠른 액션, 최근 활동
- **비어있는 버킷 (`/empty`)** - 아직 완료하지 않은 목표들
- **채워진 버킷 (`/filled`)** - 완료한 목표들과 후기
- **통계 (`/stats`)** - 카테고리별 달성률, 월별 요약
- **새 목표 추가 (`/add`)** - 버킷리스트 목표 추가 폼

## 📦 주요 의존성

- `react` & `react-dom` - React 라이브러리
- `tailwindcss` - 유틸리티 우선 CSS 프레임워크
- `typescript` - 타입 안정성
- `vite` - 빠른 빌드 도구
- `eslint` & `prettier` - 코드 품질 도구
- `lucide-react` - 아이콘 라이브러리
- `@radix-ui/*` - Headless UI 컴포넌트
- `class-variance-authority` - 컴포넌트 variant 관리
- `tailwind-merge` & `clsx` - CSS 클래스 유틸리티

## 🔧 추가 패키지 설치 (필요시)

### Supabase

```bash
npm install @supabase/supabase-js
```

### React Router

```bash
npm install react-router-dom
npm install -D @types/react-router-dom
```

### Zustand (상태관리)

```bash
npm install zustand
```
