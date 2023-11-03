'use client';

import WorkInfo from '@/components/WorkInfo';
import { motion } from 'framer-motion';

export default function WokrView() {
  return (
    <>
      <motion.div
        className='flex min-w-[95vw] min-h-[90vh] flex-row xl:py-24 lg:py-20 md:py-16 sm:py-8 py-4'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ ease: 'easeInOut', duration: 4 }}>
        <div className='flex min-w-[47vw] min-h-[90vh] flex-col items-baseline content-around justify-start xl:pl-24 lg:pl-20 md:pl-16 sm:pl-8 pl-4'>
          <WorkInfo
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
              <span>컴포넌트의 드릴링이 어떻게 </span>
              <span className='text-emerald-600'>Redux</span>
              <span>나 </span>
              <span className='text-emerald-600'>MobX</span>
              <span>
                같은 상태관리 라이브러리의 필요성을 불러왔는지에 대해 큰 공감을 느낄 수 있었고, 이런 소규모
                프로젝트에서는 오히려 그런 비대한 라이브러리의 도입이 오히려 독이 될 수 있다는 점도 배웠습니다.
                <br />
              </span>
              <span className='text-emerald-600'>Framer-motion</span>
              <span>의 애니메이션을 통한 반응형 웹 구현부터 </span>
              <span className='text-emerald-600'>Firebase</span>
              <span>와 </span>
              <span className='text-emerald-600'>NextAuth</span>
              <span>를 통한 </span>
              <span className='text-emerald-600'>비관계형 데이터베이스(NoSQL)</span>
              <span>를 통한 데이터 관리에서부터 목표로 했던 인피니트 스크롤과 </span>
              <span className='text-emerald-600'>OAuth2</span>
              <span> 인증을 마무리로 끝낸 프로젝트입니다.</span>
            </div>
          </WorkInfo>
          <WorkInfo
            gitLink='https://github.com/everyt/everyt-shop-next'
            workImg={['/images/Shop1.gif', '/images/Shop2.png', '/images/Shop3.png', '/images/Shop4.png']}
            workName='NEXTEA'
            workLore={
              <div className='whitespace-pre-wrap'>
                <span className='text-emerald-500'>Spring</span>
                <span>기반의 </span>
                <span className='text-emerald-500'>JPA</span>
                <span>을 사용하는 RESTful API 백엔드를 구축해</span>
                <span className='text-emerald-500'> Next.js</span>
                <span>로 만들어진 프론트엔드와 회원가입, 로그인 등의 통신을 구현한 프로젝트입니다.</span>
              </div>
            }>
            <div className='whitespace-pre-wrap'>
              <span>
                홈페이지의 디자인과 구성은 알리익스프레스를 참고했습니다.
                <br />
                웹의 통신 방법에 대해 자세히 알 수 있었습니다. 특히나{' '}
              </span>
              <span className='text-emerald-600'>JPA Securiy</span>
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
              <span>이 어떻게 생성되고 어떤 보안방식을 채택했는지에 대한 지식을 습득할 수 있었습니다.</span>
            </div>
          </WorkInfo>
          <WorkInfo
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
                <span>HTML과 CSS, JS의 기초를 다지고 나서 유튜브를 보고 따라한 웹 클론 프로젝트입니다.</span>
              </div>
            }>
            <div className='whitespace-pre-wrap'>
              <span>
                아무것도 모르면서 무작정 코드 한줄 한줄 따라 타이핑하던 그때의 노력 덕분에, 지금 제가 앞으로 나아갈
                원동력을 얻었습니다.
              </span>
            </div>
          </WorkInfo>
        </div>
        <div className='flex min-w-[47vw] min-h-[90vh] flex-col items-baseline content-around justify-start xl:pr-24 lg:pr-20 md:pr-16 sm:pr-8 pr-4'>
          <WorkInfo
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
                개발이 복잡한 네이티브 앱에 비해서 프론트엔드 웹의 형태를 그대로 앱으로 옮길 수 있다는 것에서 큰 매력을
                느꼈습니다. <br />
                또한, 웹 그 자체이다 보니
              </span>
              <span className='text-emerald-600'> Redux</span>
              <span>나 </span>
              <span className='text-emerald-600'>react-animated-cursor</span>
              <span>같은 라이브러리를 그대로 사용할 수 있었기 때문에, 안드로이드와 IOS를 지원하는 </span>
              <span className='text-emerald-600'>v2</span>
              <span>
                으로의 정식 업데이트가 이루어진다면 상당한 편의성을 가질 것으로 보입니다. <br />
                게다가{' '}
              </span>
              <span className='text-emerald-600'>rust</span>
              <span>를 기반으로, 해당 운영체제의 </span>
              <span className='text-emerald-600'>webview2</span>
              <span> 엔진을 사용하기에 </span>
              <span className='text-emerald-600'>electron</span>과는 꽤 차이가 나는 성능 최적화를 보입니다.
            </div>
          </WorkInfo>
          <WorkInfo
            gitLink='https://github.com/everyt/princess-script'
            workImg='/images/PrincessScript.png'
            workName='프린세스 스크립트'
            workLore={
              <div className='flex items-center'>
                <p className='text-emerald-500'>컴파일러</p>
                <p>를 직접 작성해보기 위해서 진행한 프로젝트입니다.</p>
              </div>
            }>
            <div className='whitespace-pre-wrap'>
              <span>
                컴퓨터 관련 학과를 나오지 못한 저로서는, 프로그래밍 언어가 어떻게 동작하는지 알 길이 막막했습니다.
                따라서, 프로그래밍 언어를 처리하는 컴파일러를 이해할 수 있는 것을 목표로 삼고 도전해{' '}
              </span>
              <span className='text-emerald-600'>컴파일러의 토큰 파싱 - AST 트리 구성 - 재배열</span>
              <span>의 단계를 구현하고, vscode의 문법 확장프로그램 또한 구현했습니다.</span>
            </div>
          </WorkInfo>
          <WorkInfo
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
                처음 자바스크립트를 접했을 때, 프로그래밍이라는 개념 자체가 너무 어려워서 이해하기 위해서 만들었습니다.
              </span>
              <span>덕분에 </span>
              <span className='text-emerald-500'>ES6</span>
              <span>
                {' '}
                이상의 문법을 습득하고, 2차원 배열에서 더 나아가 추상화된 스택을 공부할 수 있는 기반이 생겼습니다.
                <br />
                처음 스택오버플라이에 질문을 남기고 벌벌 떨었었던 기억이 나네요.
              </span>
            </div>
          </WorkInfo>
        </div>
      </motion.div>
    </>
  );
}
