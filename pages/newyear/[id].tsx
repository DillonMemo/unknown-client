import { GetStaticProps, GetStaticPaths } from "next";

import { NewYear } from "../../interfaces";
import { sampleUserData } from "../../utils/sample-data";
import styled, { keyframes } from "styled-components";
import { useEffect } from "react";
import Layout from "../../components/Layout";

type Props = {
    item?: NewYear;
    errors?: string;
};

const UsersDetail = ({ item, errors }: Props) => {
    if (errors) {
        return <div className="404">404 Not Found</div>;
    }

    useEffect(() => {
        if (document) {
            const firework2 = document.querySelector(".firework2");
            const firework3 = document.querySelector(".firework3");
            const firework4 = document.querySelector(".firework4");

            if (
                firework2 instanceof HTMLDivElement &&
                firework3 instanceof HTMLDivElement &&
                firework4 instanceof HTMLDivElement
            ) {
                firework2.style.opacity = "1";
                firework3.style.opacity = "1";
                firework4.style.opacity = "1";
            }
        }
    }, []);
    return (
        <Layout title={item.title} description={item.description}>
            <NewYearCard>
                <div className="back"></div>
                <div className="front">
                    <div className="textWrapper">
                        <h1>2024</h1>
                        <h2>HAPPY NEW YEAR</h2>
                    </div>
                    <div className="firework">
                        <div className="circle circle1"></div>
                        <div className="circle circle2"></div>
                        <div className="circle circle3"></div>
                        <div className="circle circle4"></div>
                        <div className="circle circle5"></div>
                    </div>
                    <div className="firework firework2">
                        <div className="circle circle1"></div>
                        <div className="circle circle2"></div>
                        <div className="circle circle3"></div>
                        <div className="circle circle4"></div>
                        <div className="circle circle5"></div>
                    </div>
                    <div className="firework firework3">
                        <div className="circle circle1"></div>
                        <div className="circle circle2"></div>
                        <div className="circle circle3"></div>
                        <div className="circle circle4"></div>
                        <div className="circle circle5"></div>
                    </div>
                    <div className="firework firework4">
                        <div className="circle circle1"></div>
                        <div className="circle circle2"></div>
                        <div className="circle circle3"></div>
                        <div className="circle circle4"></div>
                        <div className="circle circle5"></div>
                    </div>
                    <div className="dots dot1"></div>
                    <div className="dots dot2"></div>
                    <div className="dots dot3"></div>
                    <div className="dots dot4"></div>
                    <div className="dots dot5"></div>
                    <div className="dots dot6"></div>
                    <div className="dots dot7"></div>
                    <div className="dots dot8"></div>
                </div>
                <div className="content">
                    {item.name === "All" ? (
                        <div className="text-content">
                            <picture>
                                <img src="../../static/images/newyeargif.gif" alt="gif" />
                            </picture>
                        </div>
                    ) : (
                        <div className="text-content">
                            <span>{item.text}</span>
                        </div>
                    )}
                    <div className="dots dot1"></div>
                    <div className="dots dot2"></div>
                    <div className="dots dot3"></div>
                    <div className="dots dot4"></div>
                    <div className="dots dot5"></div>
                    <div className="dots dot6"></div>
                    <div className="dots dot7"></div>
                    <div className="dots dot8"></div>
                    <div className="dots dot9"></div>
                    <div className="dots dot10"></div>
                </div>
            </NewYearCard>
        </Layout>
    );
};

export default UsersDetail;

const firework = keyframes`
    from {
        transform: scale(0);
        opacity: 1;
    }
    to {
        transform: scale(1);
        opacity: 0;
    }
`;
const dots = keyframes`
    0%{
		opacity: 1;
	}
	50%{
		opacity: 0.2;
	}
`;

const NewYearCard = styled.div`
    margin: 0 1rem;
    width: 100%;
    height: 500px;
    background-color: #111426;
    color: white;
    position: relative;
    box-shadow: 4px 7px 18px -2px rgba(0, 0, 0, 0.75);

    &:hover {
        .front {
            transform: perspective(700) rotateY(-160deg);
            .textWrapper {
                opacity: 0;
                transition: all 0.6s ease-in-out;
            }
        }

        .back {
            transform: perspective(700) rotateY(-160deg);
            box-shadow: 5px 0px 20px rgba(0, 0, 0, 1);
        }
    }

    .front {
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: #111426;
        transition: all 1s ease-in-out;
        transform-origin: center left;
        transform: perspective(700) rotateY(0);
        z-index: 2;
        border: 10px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        transform-style: preserve-3d;

        .textWrapper {
            width: 100%;
            z-index: 1;
            position: relative;
            top: -20px;
            opacity: 1;
            overflow: hidden;
            transition: all 0.5s;
            transition-timing-function: cubic-bezier(0, 0.15, 1, -2.7);

            h1 {
                font-size: 80px;
            }

            h2 {
                font-size: 20px;
            }
        }

        .firework {
            width: 150px;
            height: 150px;
            position: absolute;
            border: 5px dotted #ff0000;
            border-radius: 100%;
            top: 40px;
            left: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            -webkit-animation: ${firework} 1.5s ease-in-out infinite;
            animation: ${firework} 1.5s ease-in-out infinite;
            transition-timing-function: cubic-bezier(0, 0.15, 1, -2.7);

            .circle {
                width: 90%;
                height: 90%;
                border-radius: 100%;
                border: 5px dotted #0dc200;
                position: absolute;
            }
            .circle2 {
                width: 70%;
                height: 70%;
                border-radius: 100%;
                border-color: #fff719;
            }
            .circle3 {
                width: 50%;
                height: 50%;
                border-radius: 100%;
                border-color: #ff0000;
            }
            .circle4 {
                width: 30%;
                height: 30%;
                border-radius: 100%;
                border-color: #0dc200;
            }
            .circle5 {
                width: 15%;
                height: 15%;
                border-radius: 100%;
                border-color: #ff0000;
            }
        }

        .firework2 {
            width: 110px;
            height: 110px;
            left: 140px;
            top: 100px;
            -webkit-animation-delay: 1s;
            animation-delay: 1s;
            opacity: 0;
            transition: opacity 3s ease-in-out;
        }
        .firework3 {
            width: 80px;
            height: 80px;
            left: 30px;
            top: 180px;
            -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
            opacity: 0;
            transition: opacity 0.6s ease-in-out;
        }
        .firework4 {
            width: 120px;
            height: 120px;
            left: 100px;
            top: 180px;
            -webkit-animation-delay: 0.8s;
            animation-delay: 0.8s;
            opacity: 0;
            transition: opacity 2.4s ease-in-out;
        }
    }
    .back {
        width: 100%;
        height: 100%;
        position: absolute;
        transition: all 1s ease-in-out;
        transform: perspective(700) rotateY(0);
        transform-origin: center left;
    }
    .content {
        width: 100%;
        height: 100%;
        background-color: #111426;
        color: white;
        position: absolute;
        text-align: center;
        border: 10px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        .text-content {
            margin: 0 1rem;
            font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont,
                system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
                "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji",
                "Segoe UI Symbol", sans-serif;

            span {
                white-space: pre-line;
            }
        }
        h1 {
            padding: 20px 40px;

            z-index: 1;
        }
        .dot4 {
            top: 300px;
            left: 100px;
        }
        .dot8 {
            left: 240px;
        }
        .dot9 {
            top: 100px;
            left: 90px;
            background-color: white;
        }
        .dot10 {
            top: 400px;
            left: 230px;
            background-color: white;
        }
    }

    .front,
    .content {
        .dots {
            width: 10px;
            height: 10px;
            border-radius: 100%;
            background-color: #0dc200;
            position: absolute;
            top: 0;
            transition: all 2.7s ease-in-out;
            box-shadow: 0 0 15px yellow;
            &:nth-child(even) {
                animation: ${dots} 3s ease-in-out infinite;
            }
            &:nth-child(odd) {
                animation: ${dots} 2s ease-in-out infinite;
                animation-delay: 0.2s;
            }
        }
        .dot2 {
            top: 50px;
            left: 200px;
            background-color: #ff0000;
        }
        .dot3 {
            top: 350px;
            left: 200px;
            background-color: #5f0e95;
        }
        .dot4 {
            top: 320px;
            left: 150px;
            background-color: #fff719;
        }
        .dot5 {
            top: 350px;
            left: 10px;
            background-color: #ff0000;
        }
        .dot6 {
            top: 390px;
            left: 100px;
            background-color: #0dc200;
        }
        .dot7 {
            top: 150px;
            left: 10px;
            background-color: #fff719;
        }
        .dot8 {
            top: 200px;
            left: 250px;
            background-color: #ff0000;
        }
    }
`;

export const getStaticPaths: GetStaticPaths = async () => {
    // Get the paths we want to pre-render based on users
    const paths = sampleUserData.map((user) => ({
        params: { id: user.id },
    }));
    console.log("t1", sampleUserData);

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id;
        const item = sampleUserData.find((data) => data.id === id);
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { item } };
    } catch (err: any) {
        return { props: { errors: err.message } };
    }
};
