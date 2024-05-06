import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import LoginForm from '@/components/LoginForm/index.jsx';
import PATH from '@/constants/path.js';

function LoginPage() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(PATH.SIGN_UP);
  };

  return (
    <StyledSection>
      <StyledLoginArticle>
        <StyledLoginContainer>
          <LoginForm />
          <StyledButton onClick={onClick}>회원가입</StyledButton>
        </StyledLoginContainer>
      </StyledLoginArticle>
    </StyledSection>
  );
}

export default LoginPage;

const StyledLoginContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 392px;
  height: 90vh; /* 화면 전체 높이의 90%를 차지하도록 설정 */

  text-align: center;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledLoginArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 392px;
  height: 90vh; /* 화면 전체 높이의 90%를 차지하도록 설정 */

  text-align: center;
`;

const StyledButton = styled.button`
  border: none;
  background-color: var(--white-1);

  font-size: 14px;

  cursor: pointer;
`;