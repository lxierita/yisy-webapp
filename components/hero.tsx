import styled from "styled-components";

const StyledSection = styled.section`
  display: grid;
  place-content: center;

  & > h1 {
    span:first-child {
      display: block;
      width: 15ch;
    }
    span:last-child {
      display: block;
      width: 17ch;
    }
  }
  @media (min-width: 300px) {
    width: 75%;
    height: auto;
    margin: 48px auto;
    & > h2 {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 700px) {
    width: 75%;
    height: auto;
    margin: 60px auto;
    & > h2 {
      font-size: 1.5rem;
    }
  }
  @media (min-width: 1100px) {
    width: 100%;
    height: 30vw;
    margin: 0;
    & > h2 {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1200px) {
    & > h2 {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1400px) {
    & > h2 {
      font-size: 1.5rem;
    }
  }
`;
export default function Hero() {
  return (
    <StyledSection>
      <h1>
        <span>Online Tax Return</span>
        <span>for Content Creators</span>
      </h1>
      <h2>
        We file taxes for self-employed, specialist content creators with online
        earnings
      </h2>
    </StyledSection>
  );
}
