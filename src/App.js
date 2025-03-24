import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects'

function App(){
  const projectList = [
    {
      title: "JmAuto 중고차 거래 사이트",
      description : "Spring MVC2 구조로 만든 첫 번째 프로젝트 . 백엔드/프론트 역할 분리와 구조 설계 연습.",
    },
    {
     title: "중삼대학교 lms 사이트",
      description: "REST API & JSON 비동기 통신을 활용한 백엔드 중심 프로젝트. PostgreSQL 연동 경험 포함.",
    },
  ];

  return (
    <div>
      <Header />
      <About
        summary="안녕하세요! 저는 백엔드와 프론트엔드하고 있는 개발자 지망생 입니다."
        detail="Spring Boot와 React를 활용한 포트폴리오를 만들고 있으며, 백엔드 API, 데이터베이스, 보안, 프론트까지 모두 경험하고 있습니다."

      />
      <Projects projects={projectList}/>
    </div>
  );
}

export default App;
