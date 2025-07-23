# Sync Desktop App Landing Page

Sync 데스크탑 애플리케이션을 소개하고 다운로드할 수 있는 웹사이트입니다.

## 🚀 Features

- 📱 반응형 디자인
- 🖥️ 데스크탑 앱 소개 및 다운로드
- 💻 macOS 및 Windows 지원
- ⚡ Vite + React + TypeScript로 구축

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

## 🚀 Deploy

GitHub Pages 배포:

```bash
npm run deploy
```

## 📁 Project Structure

```
src/
├── Components/          # 재사용 가능한 컴포넌트
│   ├── Header/
│   └── Footer/
├── page/               # 페이지 컴포넌트
│   ├── Desktop/        # 메인 소개 페이지
│   ├── Download/       # 다운로드 페이지
│   └── Product/        # 제품 소개 페이지
├── Assets/             # 이미지 및 아이콘
└── global.css          # 전역 스타일
```

## 📥 Download Files

다운로드 파일은 `public/downloads/` 폴더에 위치합니다:

- `sync-mac.dmg` - macOS용 설치 파일
- `sync-windows.exe` - Windows용 설치 파일

## 🔧 Tech Stack

- React 19
- TypeScript
- Vite
- Styled Components
- React Router DOM
- Bootstrap
