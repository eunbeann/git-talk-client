import LoginButton from '@/buttons/LoginButton';
import type { NextPage } from 'next';
import { Container } from 'styles/inedx';

const Home: NextPage = () => {
  return (
    <Container>
      <h2>GIT TALK</h2>
      <p>GITHUB 유저들과 채팅할 수 있는 공간</p>
      <LoginButton ariaLabel="login" type="submit" onClick={() => console.log('로그인!')}>
        GITHUB 로그인
      </LoginButton>
    </Container>
  );
};

export default Home;
