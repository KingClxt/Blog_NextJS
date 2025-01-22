import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { CrossIcon } from "lucide-react";

interface BlogProps {
  id: number;
  titre: string;
  description: string;
  image: string;
  onDelete: (id: number) => void;
}

const Blog = ({ titre, image, description, id, onDelete }: BlogProps) => {
  return (
    <Link href="/" className={` h-full relative group`}>
      <Button
        onClick={(e) => {
          e.preventDefault();
          onDelete(id);
        }}
        variant="destructive"
        className="rounded-full w-7 h-7 absolute -right-4 -top-3 z-10"
      >
        <CrossIcon className="rotate-45" />
      </Button>
      <Card className="h-full overflow-hidden group-hover:bg-zinc-200  transition-all">
        <div className="w-full h-36 relative rounded-t-xl">
          <Image fill src={image} alt="" />
        </div>
        <CardHeader>
          <CardTitle className="h-4 text-zinc-800">{titre}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zinc-600">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Blog;
