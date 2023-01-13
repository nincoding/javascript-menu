# 디렉터리 구조

```bash
.
├── __tests__
│   ├── ApplicationTest.js    // 점심 메뉴 추천 기능 테스트
│   ├── CoachHateMenusValidatorTest.js  // CoachHateMenusValidator 객체 테스트
│   ├── CoachNameValidatorTest.js       // CoachNameValidator 객체 테스트
│   └── RecommenderTest.js    // Recommender 객체 테스트
│
├── docs
│   └── README.md                // 구현할 기능 목록, 디렉터리 구조에 대한 도큐먼트
│
└── src
    └── validators                          // 유효성을 검사하는 객체 관리
    │    ├── CoachHateMenusValidator.js     // 코치가 못 먹는 메뉴 목록 입력값의 유효성 검사
    │    └── CoachNameValidator.js          // 코치 이름 목록 입력값의 유효성 검사
    │
    └── views                    // UI 로직과 관련된 객체 관리
    │    ├── InputView.js        // 사용자로부터 입력을 받는 역할을 담당
    │    └── OutputView.js       // 사용자에게 게임 진행 상황과 결과를 출력
    │
    ├── App.js          // 도메인, 유효성 검사, UI 로직을 중간에서 조율하는 컨트롤러
    ├── constants.js    // 공통적으로 사용되는 상수 관리
    └── Recommender.js  // 추천 기능을 담당하는 객체
```
