# 중등 도덕2 디지털 교과서 (Junior High History 2)

이 프로젝트는 **중학교 역사 2과목의 디지털 교과서 콘텐츠**를 웹 기반 인터페이스로 구성하여 학습에 활용할 수 있도록 정리한 자료입니다.  
웹페이지 형식으로 구현된 콘텐츠는 다양한 멀티미디어 요소(CSS, JS, MP3, OTF/WOFF 폰트 등)를 포함하고 있으며, 플러그인 기반의 학습 기능도 포함되어 있습니다.

---

## 📁 주요 폴더 구조

```
├── installimg/               # 설치화면용 리소스 (버튼, 배경 등)
├── contents/
│   ├── com/                  # 공통 모듈 (css, js, datas, plugins 등)
│   ├── files/                # 효과음, 글꼴, 사운드, 자료실 등
│   ├── html/
│   │   ├── ebook/            # 이북 뷰어 html, css, js, ui 등
│   │   ├── fileroom/         # 자료실 뷰
│   │   ├── home/, intro/     # 홈, 인트로 등 진입 화면
│   │   ├── popup/, popup-view/  # 학습 팝업 콘텐츠
│   │   └── step/             # 학습단계별 화면 구성
```

---

## 🧠 구성 특징

- **학습 기능 중심**의 플러그인 구조 (blackboard, quiz, drawing 등)
- **사운드, 효과음, 이미지 포함된 리치 콘텐츠**
- **이북 기반 학습 페이지 구성** (`contents/html/ebook`)
- **사전 학습/사후 정리 기능** (`자료실`, `step`)
- **모바일 호환 가능성 확보**, 웹 표준 기반 개발

---

## 🚀 실행 방법

1. 웹서버 루트로 이동 또는 배포

2. 웹 브라우저에서 `index.html` 실행

---

## ✅ 디렉토리 별 요약

- `installimg/`: 설치 프로그램 이미지 리소스
- `contents/com/`: 공통 스타일, 자바스크립트, 데이터, 플러그인 구성
- `contents/files/`: 효과음, 폰트, 자료실(단원별 정리자료 포함)
- `contents/html/ebook/`: 이북 뷰어 기반 html 콘텐츠
- `contents/html/popup-view/`: 단원별 상세 학습 자료

---

## 🛠️ 정보

- **콘텐츠명**: 중등 도덕2 
- **형식**: HTML + JS + CSS + MP3 + 폰트(OTF/WOFF)
