import React from "react";
import Link from "next/link";

import { NewYear } from "../interfaces";

type Props = {
    data: NewYear;
};

const ListItem = ({ data }: Props) => (
    <Link href="/newyear/[id]" as={`/newyear/${data.id}`}>
        {data.id}:{data.name}
    </Link>
);

export default ListItem;
