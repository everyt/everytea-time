'use client';

import WorkInfo from '@/components/work/WorkInfo';
import { motion } from 'framer-motion';
import { useEffect, useState, memo } from 'react';
import WorkSkeletonView from './WorkSkeletonView';
import Image from 'next/image';
import WorkChart from '../work/WorkChart';

function WorkView() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    if (!isMount) {
      setTimeout(() => {
        setIsMount(true);
      }, 4300);
    }
  }, []);

  return (
    <>
      <motion.div
        className='top-0 left-0 h-screen w-screen fixed'
        initial={{ backgroundColor: '#FAFAF9' }}
        animate={{ backgroundColor: '#F0F0EE' }}
        transition={{ ease: 'easeInOut', duration: 7 }}
      />
      <motion.div
        className='fixed top-[43.3vh] left-[48vw] flex flex-col'
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ ease: 'easeInOut', duration: 4 }}>
        <Image src='/svg/projects.svg' alt='' width={160} height={160} />
      </motion.div>
      <motion.div
        className='flex min-w-[95vw] min-h-[90vh] flex-row justify-between xl:py-24 lg:py-20 md:py-16 sm:py-8 py-4'
        initial={{ translateX: '-100vw' }}
        animate={{ translateX: 0 }}
        transition={{ ease: 'easeInOut', duration: 4 }}>
        {isMount ? (
          <>
            <div className='flex min-w-[47vw] min-h-[90vh] flex-col items-baseline content-around justify-start xl:pl-20 lg:pl-16 md:pl-12 sm:pl-8 pl-4 z-[1]'>
              <div className='flex justify-start items-center mb-12 font-black text-3xl md:text-4xl lg:text-5xl'>
                <div className='flex items-center'>
                  <div className='whitespace-pre-wrap'>
                    <span className='text-red-400'>프</span>
                    <span className='tracking-tight mr-[1.95rem]'>로젝트 리스트</span>
                    <span>↓</span>
                  </div>
                  <WorkChart />
                </div>
              </div>

              <WorkInfo
                index={3}
                gitLink='https://github.com/everyt/jsp_parkingLotManager'
                workImg={
                  [
                    '/images/parkingLot1.png',
                    '/images/parkingLot2.png',
                    '/images/parkingLot3.png',
                    '/images/parkingLot4.png',
                    '/images/parkingLot5.png',
                  ] /** 이미지 크기 세로로 줄일 것, 잘라서. */
                }
                workName='주차장 관리 매니저'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span>
                      <span className='text-emerald-500'>JSP</span>를 기반으로 MVC의 구현 없이 DB와 통신하는 원시적인
                      페이지입니다.
                    </span>
                  </div>
                }>
                <div className='whitespace-pre-wrap text-md font-normal'>
                  <span>
                    <span>
                      <span className='text-red-400'>Goal:</span> 고도로 추상화되어있는 현대의{' '}
                      <span className='text-emerald-600'>Java Spring</span>을 이해하기 위해 그 기술이 어디서 시작되었고,
                      어떻게 구성되었는지 알아보고자 함.
                    </span>
                    <br />
                    <span>
                      <span className='text-red-400'>Stacks:</span> JSP, JDBC
                    </span>
                    <br />
                    <span>
                      <span className='text-red-400'>TrobuleShooting:</span>
                      <br />
                      1. JS의 사용에 상당한 제약이 뒤따름: JS 하나만으로는 서버와의 통신도 불가능하고, 무언가 액션을
                      취하려면 무조건 페이지를 변경해야 했습니다. 따라서 스프링을 사용하지 않는 선에서 알고 있는 지식을
                      최대한 짜내 JSP에서의 Java와 병행했습니다. <br />
                      2.
                    </span>
                  </span>
                </div>
              </WorkInfo>
              <WorkInfo
                index={5}
                gitLink='https://github.com/everyt/will-it-rain-tomorrow'
                workImg='/images/WIRT.gif'
                workName='내일은 비가 오려나'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span className='text-emerald-500'>Tauri</span>
                    <span>를 이용해 </span>
                    <span className='text-emerald-500'>Next.js</span>
                    <span>로 게임의 일종인 비주얼 노벨을 구현 시도한 프로젝트입니다.</span>
                  </div>
                }>
                <div className='whitespace-pre-wrap'>
                  <span>
                    개발이 복잡한 네이티브 앱에 비해서 프론트엔드 웹의 형태를 그대로 앱으로 옮길 수 있다는 것에서 큰
                    매력을 느꼈습니다. <br />
                    또한, 웹 그 자체이다 보니
                  </span>
                  <span className='text-emerald-600'> Redux</span>
                  <span>나 </span>
                  <span className='text-emerald-600'>react-animated-cursor</span>
                  <span>같은 라이브러리를 그대로 사용할 수 있었기 때문에, 안드로이드와 IOS를 지원하는 </span>
                  <span className='text-emerald-600'>v2</span>
                  <span>
                    으로의 정식 업데이트가 이루어진다면 새로운 앱을 개발하는데에 있어 상당한 편의성을 가질 것으로
                    보입니다. <br />
                    게다가{' '}
                  </span>
                  <span className='text-emerald-600'>rust</span>
                  <span>를 기반으로, 해당 운영체제의 </span>
                  <span className='text-emerald-600'>webview2</span>
                  <span> 엔진을 사용하기에 </span>
                  <span className='text-emerald-600'>electron</span>
                  <span>과는 꽤 차이가 나는 성능 최적화를 보입니다.</span>
                </div>
              </WorkInfo>
              <WorkInfo
                index={7}
                gitLink='https://github.com/everyt/react-web-clone1'
                workImg={[
                  '/images/React1.png',
                  '/images/React2.png',
                  '/images/React3.png',
                  '/images/React4.png',
                  '/images/React5.png',
                ]}
                workName='리액트 웹 클론'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span></span>
                    <span className='text-emerald-500'>HTML과 CSS, JS</span>
                    <span>의 기초를 다지고 나서 유튜브를 보고 따라한 </span>
                    <span className='text-emerald-500'>React</span>
                    <span>를 사용한 웹 클론 프로젝트입니다.</span>
                  </div>
                }>
                <div className='whitespace-pre-wrap'>
                  <span>
                    아무것도 모르면서 무작정 코드 한줄 한줄 따라 타이핑하던 그때의 노력 덕분에, 지금 제가 앞으로 나아갈
                    원동력을 얻었습니다.
                    <br />
                    특히 이 때, 어떻게 해야 웹을
                  </span>
                  <span className='text-emerald-600'> 반응형</span>
                  <span>으로 제작할 수 있는지에 대한 지식을 상당히 얻었습니다.</span>
                </div>
              </WorkInfo>
            </div>
            <div className='flex min-w-[47vw] min-h-[90vh] flex-col items-baseline content-around justify-start xl:pr-24 lg:pr-20 md:pr-16 sm:pr-8 pr-4 mt-32'>
              <div className='flex justify-start items-center font-black text-3xl md:text-4xl lg:text-5xl mb-32'>
                <div className='whitespace-pre-wrap'>
                  <span>→↓</span>
                </div>
              </div>
              <WorkInfo
                index={2}
                gitLink='https://github.com/everyt/nextagram'
                deployLink='https://everyt-1412.vercel.app/'
                workImg='/images/Nextagram.webp'
                workName='인스타그램 클론'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span className='text-emerald-500'>Next.js</span>
                    <span>가 어떻게 작동하는지에 대해 감을 잡기 위해 진행한 프로젝트입니다.</span>
                  </div>
                }>
                <div className='whitespace-pre-wrap'>
                  <span>
                    내비게이션 바에서 게시글을 서버로 업로드하는 모달을 띄우는 복잡한 컴포넌트를 설계하게 되면서,
                    컴포넌트의 드릴링이 어떻게
                    <span className='text-emerald-600'> Redux</span>나<span className='text-emerald-600'> MobX</span>
                    같은 상태관리 라이브러리의 필요성을 불러왔는지에 대해 큰 공감을 느낄 수 있었고, 하지만 실제로 그러한
                    라이브러리를 적용해 사용해 보니 이런 소규모 프로젝트에서는 오히려 그런 비대한 라이브러리의 도입이
                    오히려 독이 될 수 있다는 점도 배웠습니다.
                    <br />
                    <span className='text-emerald-600'> Framer-motion</span>이라는 사용이 편한 라이브러리의 사용법을
                    익혀 보다 빠른 웹 애니메이션을 구현할 수 있게 되었고,
                    <span className='text-emerald-600'> Firebase</span>와
                    <span className='text-emerald-600'> NextAuth</span>를 통한
                    <span className='text-emerald-600'> 비관계형 데이터베이스(NoSQL)</span>를 통한 데이터 관리에서부터
                    실제로 게시글을 등록하고 삭제하는 등의 구현을 통해 예전부터 궁금해했던 NoSQL DB의 구조에 대해 자세히
                    알게 되었습니다. 또한 사진과 같은 데이터를 어떻게 서버에 저장하는지도,
                    <span className='text-emerald-600'> OAuth2 </span>API를 통한 인증이 어떠한 방식으로 이루어 지는지에
                    대한 윤곽을 잡을 수 있었습니다. (데이터 처리는 NextAuth와 그 플러그인인 @auth/firebase-adapter가 다
                    하도록 추상화되어 있었기 때문에 너무 복잡했습니다.) 나중에는 어떠한 라이브러리에 의존하지 않고 직접
                    구현해보고 싶습니다. 또한 Firebase의 무료 일간 트래픽은 생각보다 적었기 떄문에, 최소한의 트래픽으로
                    사이트를 구현하고 싶었던 저는<span className='text-emerald-600'> 인피니트 스크롤</span>을 구현하려고
                    했고, 옵저버와 Firebase가 제공하는 API를 사용해 구현할 수 있었습니다.
                  </span>
                </div>
              </WorkInfo>
              <WorkInfo
                index={4}
                gitLink='https://github.com/everyt/princess-script'
                workImg='/images/PrincessScript.png'
                workName='프린세스 스크립트'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span className='text-emerald-500'>Json</span>
                    <span>이나 </span>
                    <span className='text-emerald-500'>Yaml</span>
                    <span>로는 불가능한 기능을 구현하기 위해서, </span>
                    <span className='text-emerald-500'>컴파일러</span>
                    <span>를 직접 작성해보기 위해서 진행한 프로젝트입니다.</span>
                  </div>
                }>
                <div className='whitespace-pre-wrap'>
                  <span>
                    컴퓨터 관련 학과를 나오지 못한 저로서는, 프로그래밍 언어가 어떻게 동작하는지 알 길이 막막했습니다.
                    따라서, 프로그래밍 언어를 처리하는 컴파일러를 이해할 수 있는 것을 목표로 삼고 있었습니다.
                    <br />때 마침 '내일은 비가 오려나'를 제작하던 도중, 기존의 데이터를 저장하는 파일로는 보다 복잡한
                    구조를 가진 데이터를 처리하기에는 한계가 있다는 것을 느꼈고, 따라서 예전부터 이해하고자 마음먹고
                    있었던 컴파일러 구현에 도전한 결과입니다. <br />
                  </span>
                  <span className='text-emerald-600'>Node.js</span>
                  <span>의 패키지로서 구현된 프로젝트는 </span>
                  <span className='text-emerald-600'>컴파일러의 토큰 파싱 - AST 트리 구성 - 재배열</span>
                  <span>의 단계로 구성되었고, </span>
                  <span className='text-emerald-600'>VSCode의 문법 하이라이트 익스텐션</span>
                  <span>
                    {' '}
                    또한 구현되었습니다.
                    <br />
                  </span>
                  <span className='text-emerald-600'>하지만</span>
                  <span>
                    {' '}
                    무척이나 아쉬운 점은, 점차 프로젝트가 진행되면서, 이 프로젝트는 단순하게 스크립트를 파싱하는 정도가
                    아니라 새 언어를 구현하고자 하는 목적을 가지게 되어 버렸고, 따라서 엄청난 난이도를 가지게 되어
                    버렸습니다. 현재로서는 나중을 기약하고 있습니다.
                  </span>
                </div>
              </WorkInfo>
              <WorkInfo
                index={6}
                gitLink='https://github.com/everyt/everyt-shop-next'
                workImg={['/images/Shop1.gif', '/images/Shop2.png', '/images/Shop3.png', '/images/Shop4.png']}
                workName='NEXTEA'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span className='text-emerald-500'>Spring</span>
                    <span>기반의 </span>
                    <span className='text-emerald-500'>JPA</span>
                    <span>을 사용하는 </span>
                    <span className='text-emerald-500'>RESTful API</span>
                    <span> 백엔드를 구축해</span>
                    <span className='text-emerald-500'> Next.js</span>
                    <span>로 만들어진 프론트엔드와 회원가입, 로그인 등의 통신을 구현한 프로젝트입니다.</span>
                  </div>
                }>
                <div className='whitespace-pre-wrap'>
                  <span>
                    <br />이 풀 스택 프로젝트를 진행하면서, 웹의 통신 방법에 대해 자세히 알 수 있었습니다. 특히나{' '}
                  </span>
                  <span className='text-emerald-600'>Spring Securiy</span>
                  <span>에 의한 </span>
                  <span className='text-emerald-600'>csrf token</span>
                  <span>과 </span>
                  <span className='text-emerald-600'>CORS 정책</span>
                  <span>의 벽에 가로막혀 상당히 고생했는데, 그 덕분에 </span>
                  <span className='text-emerald-600'>쿠키</span>
                  <span>나 </span>
                  <span className='text-emerald-600'>세션</span>
                  <span>, </span>
                  <span className='text-emerald-600'>jwt token</span>
                  <span>이 어떻게 생성되고 어떻게 암호화되는지, 웹은 어떤 식으로 </span>
                  <span className='text-emerald-600'>에러</span>
                  <span>
                    를 보여주는지, 다양한 지식을 얻을 수 있었습니다. <br />
                    또한,
                  </span>
                  <span className='text-emerald-600'>JAVA의 상속 개념, 캡슐화, 객체지향과 함수지향의 차이</span>
                  <span>를 비롯한 다양한 머리로만 알던 것들을 직접 체득했습니다. 그리고 </span>
                  <span className='text-emerald-600'>Prettier</span>
                  <span>와 </span>
                  <span className='text-emerald-600'>ESLint</span>
                  <span>
                    를 사용하면서, 팀원간의 소통이 왜 중요하고 코딩 스타일의 통일이 중요한지도 조금이나마 알게
                    되었습니다. 앞으로 팀 프로젝트를 진행할 기회가 생긴다면 이러한 점을 적극적으로 반영하려고 합니다.
                  </span>
                </div>
              </WorkInfo>
              <WorkInfo
                index={8}
                gitLink='https://github.com/everyt/Tetris'
                deployLink='https://everyt.github.io/Tetris/'
                workImg='/images/Tetris.gif'
                workName='테트리스'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span>그야말로 정석적인 </span>
                    <span className='text-emerald-500'>테트리스</span>
                    <span>입니다.</span>
                  </div>
                }>
                <div className='whitespace-pre-wrap'>
                  <span>
                    처음 자바스크립트를 접했을 때, 프로그래밍이라는 개념 자체가 너무 어려워서 이해하기 위해서
                    만들었습니다.
                  </span>
                  <span>
                    <br />
                    덕분에{' '}
                  </span>
                  <span className='text-emerald-500'>Spread/Rest</span>
                  <span>와 같은 </span>
                  <span className='text-emerald-500'>ES6</span>
                  <span>
                    {' '}
                    이상의 문법을 습득하고, 2차원 배열에서 더 나아가 추상화된 스택을 공부할 수 있는 기반이 생겼습니다.
                    <br />
                    처음
                  </span>
                  <span className='text-emerald-500'> 스택오버플라이에 질문</span>
                  <span>
                    을 남기고 벌벌 떨었었던 기억이 있습니다. 왜냐하면 -6점을 얻은 질문이었으니까요. 덕분에 어떻게 질문을
                    해야 하는지, 어떻게 글을 써야 하는지에 대한 질문을 스스로에게 항상 하곤 합니다.
                  </span>
                </div>
              </WorkInfo>
            </div>
          </>
        ) : (
          <WorkSkeletonView />
        )}
      </motion.div>
    </>
  );
}

export default memo(WorkView);
