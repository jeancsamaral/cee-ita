import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/types/blog";
import { imageBuilder } from "@/sanity/sanity-utils";

export default function SingleBlog({ blog }: { blog: Blog }) {
  const { title, mainImage, slug, metadata, author, tags, publishedAt, tipo } = blog;

  // Function to get image source
  const getImageSrc = (image: any) => {
    // If image is a string (static path), return it directly
    if (typeof image === 'string') return image;
    // If image is a Sanity asset, use imageBuilder
    try {
      return imageBuilder(image).url();
    } catch {
      // Fallback image if both methods fail
      return '/images/blog/fallback.jpg';
    }
  };

  return (
    <>
      <div className="group relative overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark">
        <Link
          href={`/blogs/${slug?.current}`}
          className="relative block aspect-[37/22] w-full"
        >
          <Image
            src={getImageSrc(mainImage)}
            alt={title}
            fill
            className="object-cover transition-all duration-300 group-hover:rotate-3 group-hover:scale-110"
          />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href={`/blogs/${slug?.current}`}
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <p className="mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            {metadata}
          </p>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={getImageSrc(author?.image)}
                    alt={author?.name || ""}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Por {author?.name}
                </h4>
                <p className="text-xs text-body-color">{author?.bio}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Data:
              </h4>
              <p className="text-xs text-body-color dark:text-body-color-dark">
                {publishedAt &&
                  new Date(publishedAt)
                    .toDateString()
                    .split(" ")
                    .slice(1)
                    .join(" ")}
              </p>
            </div>
          </div>
          {tipo && (
            <div className="mt-4">
              <span className="inline-block rounded-full bg-blue-900/10 px-3 py-1 text-xs font-medium text-black">
                {tipo}
              </span>
            </div>
          )}
          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
