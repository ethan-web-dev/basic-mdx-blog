import Link from "next/link"
import getFormattedDate from "@/lib/getFormattedDate"

type Props = {
    post: Meta
}

export default function ListItem({ post }: Props) {
    const { id, title, date } = post
    const formattedDate = getFormattedDate(date)

    return (
        <li className="p-6 flex flex-col justify-between h-full">
            <Link className="underline whitespace-nowrap" href={`/posts/${id}`}>{title}</Link>
            <br />
            <p className="text-sm">{formattedDate}</p>
        </li>
    )
}
