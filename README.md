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
├── src/
│   ├── App.tsx              # 메인 앱 컴포넌트
│   ├── main.tsx             # 앱 진입점
│   ├── index.css            # 글로벌 스타일 (Tailwind)
│   └── vite-env.d.ts        # TypeScript 타입 정의
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.cjs
└── .prettierrc
```

## 📦 주요 의존성

- `react` & `react-dom` - React 라이브러리
- `tailwindcss` - 유틸리티 우선 CSS 프레임워크
- `typescript` - 타입 안정성
- `vite` - 빠른 빌드 도구
- `eslint` & `prettier` - 코드 품질 도구

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

