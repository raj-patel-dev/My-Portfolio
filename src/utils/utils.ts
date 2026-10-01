import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  tag?: string;
  team: Team[];
  link?: string;
  liveUrl?: string;
  technologies: string[];
};

export type ContentKind = "blog" | "work";

function getMDXFiles(dir: string) {
  if (!fs.existsSync(/* turbopackIgnore: true */ dir)) {
    notFound();
  }

  return fs
    .readdirSync(/* turbopackIgnore: true */ dir)
    .filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(/* turbopackIgnore: true */ filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(/* turbopackIgnore: true */ filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    tag: data.tag || [],
    team: data.team || [],
    link: data.link || "",
    liveUrl: data.liveUrl || "",
    technologies: data.technologies || [],
  };

  return { metadata, content };
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(kind: ContentKind) {
  if (kind === "blog") {
    return getMDXData(path.join(process.cwd(), "src", "app", "blog", "posts"));
  }

  return getMDXData(path.join(process.cwd(), "src", "app", "work", "projects"));
}
