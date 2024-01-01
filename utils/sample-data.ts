import { NewYear } from "../interfaces";

const description = "카드를 터치 해보세요";
/** Dummy user data. */
export const sampleUserData: NewYear[] = [
    {
        id: Buffer.from("ALL").toString("base64"),
        name: "All",
        title: "모두 새해 복 많이 받으세요",
        description,
        text: "",
    },
    {
        id: Buffer.from("장서원").toString("base64"),
        name: "장서원",
        title: "서원이 새해 복 많이 받아.",
        description,
        text: "올해 휴학이 끝나고 다시 학교로 복학하는 해가 되겠네 엄마 말 잘 듣고 오빠가 집에 자주 못가서 미안하고 오빠 몫까지 효원이 하고 엄마 잘 부탁할게 사랑해",
    },
    {
        id: Buffer.from("장효원").toString("base64"),
        name: "장효원",
        title: "사랑하는 효원이 새해 복 많이 받아.",
        description,
        text: "벌써 중2병이 걸리는 이쁜 나이가 된 효원이!!\n 새해복 많이 받고 언니는 올해 다시 학교에 갈거 같아서 집이 또 한적해 질거 같아...\n그 빈 자리 우리 이쁘게 잘큰 효원이가 잘 부탁할게 오빠가 집에 자주 못가서 미안하고 사랑해~🥰",
    },
    {
        id: Buffer.from("어마마마").toString("base64"),
        name: "정희영",
        title: "사랑하는 우리 엄마💌",
        description,
        text: "엄마한테 누구보다 잘해주고 자주 가서 효도도 하고 해야 하는데.. 그렇지 못해 미안해요😭\n새해는 꼭 방문!!하고 새해 복 많이 받아요~\n올해는 건강하고 운동도 열심히 해보기!!",
    },
];
