'use client';

import WorkInfo from '@/components/work/WorkInfo';
import { motion } from 'framer-motion';
import { useEffect, useState, memo } from 'react';
import WorkSkeletonView from './WorkSkeletonView';
import Image from 'next/image';
import WorkChart from '../work/WorkChart';
import WorkText from '../work/WorkText';

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
        className='fixed top-[43.3vh] xl:left-[48vw] lg:left-[47vw] md:left-[46vw] sm:left-[44vw] left-[40vw] flex flex-col'
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
              <div className='flex justify-start items-center mb-12 font-black text-3xl md:text-4xl lg:text-[2.625rem] xl:text-5xl'>
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
                index={1}
                gitLink='https://github.com/everyt/green_kiosk'
                workImg={[
                  '/images/kiosk1.png',
                  '/images/kiosk2.png',
                  '/images/kiosk3.png',
                  '/images/kiosk4.png',
                  '/images/kiosk5.png',
                  '/images/kiosk6.png',
                  '/images/kiosk7.png',
                  '/images/kiosk8.png',
                  '/images/kiosk9.png',
                  '/images/kiosk0.png',
                ]}
                workName='그린 키오스크'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span>키오스크와, 키오스크에 대한 관리자, 사용자 페이지를 만드는 프로젝트.</span>
                  </div>
                }>
                <WorkText
                  label='Goal'
                  value='#G#협업#E##B#을 경험하고 어떠한 능력이 필요한지를 알아봄과 동시에 서블릿을 통한 #G#RESTfull API#E#의 구현과 통신을 통한 검증#E#'
                  colon={true}
                />
                <WorkText label='Stacks' value='#G#JSP, JDBC, Spring, Typescript#E#' colon={true} />
                <WorkText
                  label='Trobule shooting'
                  value={
                    <>
                      <WorkText
                        label='1. #B#소통의 부재#E#'
                        value='#D2#처음 프로젝트를 시작했을 때,<br />적극적으로 팀원들의 의견을 모아서 취합해보려고 했지만 의견을 제시하지도 않고 의견이 제시되면 부정하는 인원과, 아무런 의견도 제시하지 않는 인원이 있었던 탓에 시작부터 어긋나는 것처럼 느껴졌습니다.<br />다행히도 협업이 아닌 개인 프로젝트를 진행하려고 했던 다른 인원이 참가하고, 그 인원이 의견을 적극적으로 밀어붙인 덕택에 무언가 시작되었다는 것을 고려할 때,<br />모든 팀원의 의견을 고려하려고 했던 제 방향보다는 새로 합류한 인원의 제일 나아보이는 한가지 선택지에 대한 집중이 옳아 보입니다.#E#'
                        colon={true}
                        fold={true}
                        blank={false}
                      />
                      <WorkText
                        label='2. #B#문서화되지 않는 작업#E#'
                        value='#D2#제대로 문서화되지 않고, 문서를 따르지 않는 작업이 너무나 많았습니다.<br />이를 지키고 이를 적용하려고 여러번 대화를 나눠보았지만 개선되지 않았기에, 제가 처음부터 원만하게 팀원들과 인간관계를 구축하지 않았기 떄문이라고 생각합니다. 불찰이었습니다.#E#'
                        colon={true}
                        fold={true}
                        blank={false}
                      />
                      <WorkText
                        label='3. #B#JSP의 한계#E#'
                        value='#D2#이는 개인적으로 타입스크립트를 도입한 이유와도 일맥상통합니다.<br />이전에 홀로 진행했던 주차장 관리자에서도 느꼈듯이, RESTfull하지 않은 API나 서버에 대한 접근은 유지보수에 대한 상당한 애로를 만들어내기에 제 작업 분량 하에서는 전부 서블릿을 통해 갈아엎었습니다.#E#'
                        colon={true}
                        fold={true}
                        blank={false}
                      />
                    </>
                  }
                  colon={true}
                  color={false}
                />
              </WorkInfo>
              <WorkInfo
                index={3}
                gitLink='https://github.com/everyt/jsp_parkingLotManager'
                workImg={[
                  '/images/parkingLot1.png',
                  '/images/parkingLot2.png',
                  '/images/parkingLot3.png',
                  '/images/parkingLot4.png',
                  '/images/parkingLot5.png',
                ]}
                workName='주차장 관리 매니저'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span>
                      <span className='text-emerald-500'>JSP</span>를 기반으로 MVC의 구현 없이 DB와 통신하는 원시적인
                      페이지
                    </span>
                  </div>
                }>
                <WorkText
                  label='Goal'
                  value='#B#고도로 #G#추상화 #E#되어있는 현대의#G# Java Spring#E#을 이해하기 위해 그 기술이 어디서 시작되었고, 어떻게 구성되었는지 알아보고자 함.#E#'
                  colon={true}
                />
                <WorkText label='Stacks' value='#G#JSP, JDBC#E#' colon={true} />
                <WorkText
                  label='Trobule shooting'
                  value={
                    <>
                      <WorkText
                        label='1. #B#프론트엔드 백엔드 미구분#E#'
                        value='#D2#JSP의 특성상, 무언가의 액션을 취하려면 페이지를 이동해야 했고, 이도 저도 아닌 어정쩡한 Java와 혼합해 사용해야 했습니다.<br />그래서 어째서 이런 기술이 등장하게 되었는지 찾아보게 되었고, 제가 느낀 이러한 불편함이 REST API를 탄생시켰다는 걸 알게 되어 그 지식을 활용할 수 있었습니다.#E#'
                        colon={true}
                        fold={true}
                        blank={false}
                      />
                      <WorkText
                        label='2. #B#실시간 미반영#E#'
                        value='#D2#현대적인 웹 개발에서는 수정한 내용이 개발 서버에 실시간으로 적용되어 무슨 에러가 있는지 확인하기 쉽기 때문에, JSP 웹 개발에서는 상당한 제약이 있다고 생각했습니다. 따라서 에러를 내지 않기 위한 반복적인 학습을 통한 문법과 알고리즘의 숙달을 넘어, 새로운 코드와 알고리즘을 작성하기 위해서는 컴퓨터 공학에 대한 이해도가 높아야 한다고 생각해 현재 가지고 있는 정보처리기능사 자격증을 넘어서 기사 자격증, 더 나아가 관련 학과에 진학할 필요성이 있다고 생각합니다.#E#'
                        colon={true}
                        fold={true}
                        blank={false}
                      />
                      <WorkText
                        label='3. #B#ES6 이상의 문법#E#'
                        value='#D2#분명하게도 JS는 브라우저에서 해석하는 스크립트 언어일지언데, 삼항연산자와 같은 최신 문법을 사용하면 동작하지 않는 문제가 있었습니whf다. 따라서 일부러 비효율적이고 반복적인 코드를 반복해야 했습니다. 이는 추후에 팀 프로젝트에서 타입스크립트를 도입하는 것으로 해결했습니다, 또한 웹팩과 같은 모듈 번들러를 통해서도 해결이 가능할 것으로 기대됩니다.#E#'
                        colon={true}
                        fold={true}
                        blank={false}
                      />
                    </>
                  }
                  colon={true}
                  color={false}
                />
              </WorkInfo>
              <WorkInfo
                index={5}
                gitLink='https://github.com/everyt/will-it-rain-tomorrow'
                workImg='/images/WIRT.gif'
                workName='내일은 비가 오려나'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span>
                      <span className='text-emerald-500'>Tauri</span>를 이용해{' '}
                      <span className='text-emerald-500'>Next.js</span>로 게임의 일종인 비주얼 노벨의 구현 시도
                    </span>
                  </div>
                }>
                <div className='whitespace-pre-wrap text-base font-normal'>
                  <WorkText
                    label='Goal'
                    value='#B#네이티브 언어로 만들어진 앱을 대체할 수 있을 정도의 퀄리티를 가진 웹 앱 제작#E#'
                    colon={true}
                  />
                  <WorkText
                    label='Stacks'
                    value='#G#Typescript, Prettier, Eslint<br />Next.js, React, Redux<br />Framer-motion, Tailwindcss<br />Tauri, Moment, Iconify, Yml#E#'
                    colon={true}
                  />
                  <WorkText
                    label='Trobule shooting'
                    value={
                      <>
                        <WorkText
                          label='1. #B#불안정한 스택#E#'
                          value='#D2#새로운 기술은 그 특성상, 무언가를 시도하기에는 너무나 많은 장벽이 가로막고 있습니다. 현재 1.0 버전에서는 윈도우와 맥으로의 컴파일밖에 지원하지 않으며, 2.0이 릴리즈 되기까지에는 상당한 시간이 걸릴 것으로 보여 현재로서는 React-Native와 같은 다른 스택을 사용하는 것이 나아 보입니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                        <WorkText
                          label='2. #B#전용 데이터 구조를 가진 파일을 요구#E#'
                          value='#D2#게임이 필요로 하는 데이터는 단순하지 않습니다. 1차원적으로 생각한다면 YML과 같은 기존의 데이터 저장 파일과, 하드코딩하는 방식으로 그 요건을 채울 수는 있겠지만 그렇게 된다면 유지보수하는 게 상당히 까다로울 것이라고 생각해, 위에서 아래로 흘러가는 함수형 언어의 특징을 가진 데이터를 저장하는 스크립트 언어를 설계하고 적용했지만, 점점 요구사항이 과대해지자 (ex, 함수, 조건문, 반복문 등) 차라리 TS처럼 JS에 의존한 새로운 언어를 만들어내는 게 타당하다고 판단하고 컴퓨터공학과 전산언어학을 공부한 뒤에 다시 도전할 계획입니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                        <WorkText
                          label='3. #B#컴퓨터 언어에 대한 이해 부족#E#'
                          value='#D2#당시로서는 제 능력 부족을 실감하지 못하고 있었습니다만, 다시 돌아보면 어떻게 해야 함수나 컴포넌트가 재귀적인 사용이 가능케 할지, 시간에 의존하는 함수를 어떻게 설계해야 할지 전혀 감도 잡지 못하고 있었습니다. 이 문제를 해결하기 위해서는 전문적인 공부가 필요하다고 생각합니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                      </>
                    }
                    colon={true}
                    color={false}
                  />
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
                    <span>
                      <span className='text-emerald-500'>HTML과 CSS, JS</span>의 기초를 다지고 나서 유튜브를 보고 따라한
                      <span className='text-emerald-500'> React</span>를 사용한 리액트 웹 클론 프로젝트
                    </span>
                  </div>
                }>
                <div className='whitespace-pre-wrap text-base font-normal'>
                  <WorkText label='Goal' value='#B#리액트라는 미지의 세계에 대한 도전#E#' colon={true} />
                  <WorkText label='Stacks' value='#G#React#E#' colon={true} />
                  <WorkText
                    label='Trobule shooting'
                    value={
                      <>
                        <WorkText
                          label='1. #B#알고 있는 지식의 부재#E#'
                          value='#D2#리액트라는 게 뭔지, 컴퓨터 공학이 뭔지 배운 적도 없고 앞으로 배울 일도 없었겠죠. 그래서 그냥 무작정 해외 유튜브를 찾아 화면에 나와있는 코드를 전부 일일이 따라하면서 작동 원리를 이해하려고 노력했습니다. 그러다보니 지금은 이렇게 넥스트로 개인 포트폴리오 사이트를 만들 수 있는 수준에 도달했습니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                      </>
                    }
                    colon={true}
                    color={false}
                  />
                </div>
              </WorkInfo>
            </div>
            <div className='flex min-w-[47vw] min-h-[90vh] flex-col items-baseline content-around justify-start xl:pr-20 lg:pr-16 md:pr-12 sm:pr-4 mt-32'>
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
                <div className='whitespace-pre-wrap text-base font-normal'>
                  <WorkText label='Goal' value='#B#인스타그램의 클론 코딩#E#' colon={true} />
                  <WorkText
                    label='Stacks'
                    value='#G#Typescript, Prettier, Eslint<br />Next.js, React, Redux<br />Framer-motion, Tailwindcss<br />Moment, Iconify#E#'
                    colon={true}
                  />
                  <WorkText
                    label='Trobule shooting'
                    value={
                      <>
                        <WorkText
                          label='1. #B#컴포넌트의 드릴링#E#'
                          value='#D2#때는 모달을 구현했었을 때였습니다.<br />모달의 생명주기를 관리하는 스테이트는 부모가 가지고 있어야 하기 때문에 자식에게 프롭을 통해 해당 스테이트를 계속해서 넘겨주게 되었는데, 이 과정을 통해 한 스테이트가 무려 3개 이상의 컴포넌트를 넘나들면서 상태관리의 어려움을 겪게 만들었습니다. 이를 통해 Redux와 같은 글로벌 상태 관리 라이브러리의 필요성을 체감했고, 실제로 적용도 해 봤지만 필요로 하는 기능에 비해 Redux의 크기는 보일러 플레이트를 과도하게 요구하는 둥 너무 비대해서, 장점만이 존재하는 게 아니라는 것도 확인했습니다. 다음 프로젝트를 진행할 때에는 MobX를 도입해 볼 생각입니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                        <WorkText
                          label='2. #B#CSS 애니메이션 라이브러리#E#'
                          value='#D2#TailwindCSS를 사용하게 되면서 빠르게 작업할 수 있게 되었지만 여전히 애니메이션은 시간이 많이 들어가는 고 비용 작업이었습니다. 하지만 Framer-Motion 라이브러리를 적극 도입하게 되면서 보다 빠르고 효율적인 애니메이션을 프로젝트에 적용할 수 있었습니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                        <WorkText
                          label='3. #B#SPA로만 구현된 반쪽짜리 반응형 SSR#E#'
                          value='#D2#리액트와는 다르게 넥스트는 SSR을 기반으로 하지만, 이 프로젝트를 진행할 때의 저는 쿠키나 세션 스토리지, 세션 같은 웹 지식이 빈약했기 때문에 오로지 깃허브와 구글을 뒤져가며 당장 닥친 문제를 해결하기에만 급급했습니다. 이 프로젝트를 진행했기 때문에 더 앞으로 나아갈 수 있었지만, 발전했기 때문에 부족함이 보여서 아쉽네요. 언젠가 다시 한번 재시도해볼 것 같습니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                        <WorkText
                          label='4. #B#인피니트 스크롤#E#'
                          value='#D2#이러한 목적을 달성하기 위해서는 옵저버라는 개념을 이해할 필요가 있었습니다. 그 과정에서 옵저버가 어떤 상태냐를 인식하기 위해 상태관리의 중요성을 다시 한번 꺠달았고, 파이어베이스의 공식 문서를 참고해 완성할 수 있었습니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                      </>
                    }
                    colon={true}
                    color={false}
                  />
                </div>
              </WorkInfo>
              <WorkInfo
                index={4}
                gitLink='https://github.com/everyt/princess-script'
                workImg='/images/PrincessScript.png'
                workName='프린세스 스크립트'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span>
                      <span className='text-emerald-500'>Json</span>이나
                      <span className='text-emerald-500'> Yaml</span>로는 불가능한 기능을 구현하기 위해서,
                      <span className='text-emerald-500'> 컴파일러</span>를 직접 작성해보기 위해서 진행한
                      프로젝트입니다.
                    </span>
                  </div>
                }>
                <div className='whitespace-pre-wrap text-base font-normal'>
                  <WorkText label='Goal' value='#B#독자적인 스크립트의 컴파일러 제작#E#' colon={true} />
                  <WorkText
                    label='Stacks'
                    value='#G#VSCode, Node.js, Prettier<br />Textmate, Regex, Oniguruma#E#'
                    colon={true}
                  />
                  <WorkText
                    label='Trobule shooting'
                    value={
                      <>
                        <WorkText
                          label='1. #B#관련 지식의 부재#E#'
                          value='#D2#저는 컴퓨터 언어가 어떻게 작동하는지 알고 싶었지만, 컴파일러나 인터프리터가 어떻게 작동하는지에 대해서는 알고 있는 게 없었습니다. 그래서 관련 지식을 찾다가 the super tiny compiler라는 깃허브 레포지터리를 발견했고, 이를 토대로 나만의 데이터 저장 언어를 만들어 보기로 결심하고 실행했습니다. 이를 통해 토큰 파싱 - AST 트리 구성 - 재배열의 단계를 거쳐 나름의 결과물을 얻을 수 있었습니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                        <WorkText
                          label='2. #B#정규표현식#E#'
                          value='#D2#이전에 작은 규모의 쇼핑몰 프로젝트를 진행하면서, 이메일과 패스워드, 그리고 닉네임을 제한하는 Regex를 작성하며 정규표현식에는 어느정도 익숙해졌다고 생각했지만, 언어마다 정규표현식의 식이 다르다는 건 알지 못해서 VSCode의 익스텐션을 작성하는 데에 큰 어려움을 겪었습니다. 이 점에 있어서는 AI도 학습하지 못한 영역이라 질문을 해도 답변해주지 못했고, 저는 순수하게 다른 언어의 문법 하이라이팅 익스텐션이 어떤 방법으로 작성되었는지를 이해한 후에 VSCode에서 사용하는 Regex의 문법에 대한 문서를 찾아내 문제를 해결할 수 있었습니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                        <WorkText
                          label='3. #B#너무 높아진 난이도#E#'
                          value='#D2#처음과는 다르게 점점 더 욕심이 생겨나, 변수나 if문을 지원하는 기능을 추가하기 시작하자, 이 스크립트는 목적성을 잃고 방황하기 시작했습니다. 계속해서 문법이 바뀌고, 리팩토링을 거듭하다가 저는 이게 Json이나 Yaml을 대체하는 무언가가 아니라 새로운 프로그래밍 언어를 컴파일링하는 작업이라는 걸 깨달았고, 관련 지식을 더 많이 공부한 뒤에 새롭게 도전하리라고 생각했습니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                      </>
                    }
                    colon={true}
                    color={false}
                  />
                </div>
              </WorkInfo>
              <WorkInfo
                index={6}
                gitLink='https://github.com/everyt/everyt-shop-next'
                workImg={['/images/Shop1.gif', '/images/Shop2.png', '/images/Shop3.png', '/images/Shop4.png']}
                workName='NEXTEA'
                workLore={
                  <div className='whitespace-pre-wrap'>
                    <span>
                      <span className='text-emerald-500'>Spring </span>기반의
                      <span className='text-emerald-500'> JPA</span>을 사용하는
                      <span className='text-emerald-500'> RESTful API</span> 백엔드를 구축해
                      <span className='text-emerald-500'> Next.js</span>로 만들어진 프론트엔드와 회원가입, 로그인 등의
                      통신을 구현한 프로젝트입니다.
                    </span>
                  </div>
                }>
                <div className='whitespace-pre-wrap text-base font-normal'>
                  <WorkText label='Goal' value='#B#풀 스택 프로젝트의 통신 성공#E#' colon={true} />
                  <WorkText
                    label='Stacks'
                    value='#G#Typescript, Prettier, Eslint<br />Next.js, React, Tailwindcss#E#'
                    colon={true}
                  />
                  <WorkText
                    label='Trobule shooting'
                    value={
                      <>
                        <WorkText
                          label='1. #B#CORS 규칙#E#'
                          value='#D2#리액트와 넥스트 앱은 포트 3000번에서, 스프링의 톰캣은 8080번에서 돌아갔기 때문에 CORS규칙에 위배되어 서로 통신을 하지 못하는 일이 일어났습니다. 이 문제를 해결하기 위해서 상당히 골치를 썩였는데, 제가 사용하던 스프링 부트의 버전이 최신인데 반해, 웹에 존재하는 레퍼런스의 대부분은 구버전이었기 때문입니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                        <WorkText
                          label='2. #B#MVC 패턴에 대한, 그 이전의 지식의 부재#E#'
                          value='#D2#스프링과 MVC패턴을 논하기 이전에, 저는 이떄 아직 프론트엔드와 백엔드의 개념조차 제대로 알고 있지 못하던 때였습니다. 따라서, 모델 뷰 컨트롤러가 무엇인지, 비즈니스 모델이 무엇인지 하나도 알지 못했었기 때문에, 관련 지식을 습득하기 위해서 도표를 그려가며 공부했었습니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                      </>
                    }
                    colon={true}
                    color={false}
                  />
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
                <div className='whitespace-pre-wrap text-base font-normal'>
                  <WorkText label='Goal' value='#B#테트리스 제작#E#' colon={true} />
                  <WorkText label='Stacks' value='#G#HTML, CSS, Javascript#E#' colon={true} />
                  <WorkText
                    label='Trobule shooting'
                    value={
                      <>
                        <WorkText
                          label='1. #B#프로그래밍 그 자체#E#'
                          value='#D2#아무것도 모르면서, 무작정 무언가를 만들어보자 하고 도전했었고, 무척이나 애를 먹었었습니다.<br />아직도 이 때를 기억하고 있습니다.<br />지금이라면 우스울 정도로 쉬운 ES6의 Rest 문법을 이해하지 못해 스택오버플라이에 질문을 올렸던 저는 비추천 6개를 받았고, 질문하는 권한을 박탈당해 몇일 후 질문을 수정해서 리뷰를 받아야 했습니다.#E#'
                          colon={true}
                          fold={true}
                          blank={false}
                        />
                      </>
                    }
                    colon={true}
                    color={false}
                  />
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
