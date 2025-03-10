import styled, { css } from 'styled-components';

const Button = styled.div`
  ${({ theme }) => {
    const { colors, fontSize } = theme;
    return css`
      background-color: ${colors.primary};
      text-decoration: none;
      border: none;
      padding: 1.25rem 6.875rem;
      font-size: ${fontSize.lg};
      border-radius: 0.625rem;
      &:hover {
        cursor: pointer;
      }
      a {
        color: ${colors.white};
      }
    `;
  }}
`;

const LoginButton = () => {
  const loginUrl = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_ID}&redirect_uri=${process.env.NEXT_PUBLIC_CLIENT_URL}/api/auth/github/callback`;

  return (
    <Button>
      <a href={loginUrl}>GITHUB 로그인</a>
    </Button>
  );
};

export default LoginButton;
