import styled from "styled-components";

const IndexPage = () => {
    return (
        <Wrapper>
            <div className="404">404 Not Found</div>
        </Wrapper>
    );
};
const Wrapper = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .\404 {
        color: black;
        font-size: 50px;
        margin: 0;
    }
`;

export default IndexPage;
