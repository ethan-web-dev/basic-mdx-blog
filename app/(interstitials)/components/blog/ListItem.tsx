import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <p>{formattedDate}</p>
        </li>
    )
}
