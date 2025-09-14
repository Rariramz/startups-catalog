import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export type TStartupCard = {
  _createdAt: string;
  views: number;
  author?: { _id: number; name: string };
  _id: number;
  desciption: string;
  image: string;
  category: string;
  title: string;
};

export const StartupCard = ({ post }: { post: TStartupCard }) => {
  const {
    _createdAt: createdAt,
    views,
    author: { _id: authorId, name: authorName } = {},
    title,
    category,
    desciption,
    image,
    _id: postId,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{authorName}</p>
          </Link>
          <Link href={`/startup/${postId}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/600x400"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${postId}`}>
        <p className="startup-card_desc">{desciption}</p>
        <img src={image} alt="placeholder" className="startup-card_img" />
      </Link>
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${postId}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};
