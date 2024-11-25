interface Project {
  slug?: string;
  displayTitle?: string;
  comingSoon?: boolean;
  coverImage?: string;
  externalLink?: string;
  accentColor?: string;
  company?: {
    logo: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    name: string;
  };
};

export default function Project({ project }: { project: Project } ) {
  const {
    slug,
    displayTitle,
    comingSoon,
    coverImage,
    externalLink,
    accentColor,
    company,
  } = project;

  const showCompanyBanner = false;

  const getProjectUrl = () => {
    const slugs = [slug];
    return `/${slugs.join("/")}`;
  };

  const handleClick = (event: React.MouseEvent) => {
    if (comingSoon) {
      event.preventDefault();
    }
  };

  return (
    <a
      role="button"
      className={`project-card group ${
        comingSoon ? "cursor-default" : "cursor-pointer"
      }`}
      href={externalLink || getProjectUrl()}
      target={externalLink ? "_blank" : ""}
      title={displayTitle}
      onClick={handleClick}
      rel="noreferrer"
    >
      <div
        className={`h-full w-full relative bg-gradient-to-br ${
          accentColor || "from-orange-500"
        } to-pink-500`}
      >
        <div
          className="absolute inset-0 z-0 bg-cover"
          style={{
            backgroundImage: `url(${
              coverImage ||
              "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
            }) `,
          }}
        ></div>
        <div className="relative z-1 flex flex-col h-full">
          <div className="relative flex-1">
            {comingSoon && (
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/30 backdrop-blur-sm group-hover:opacity-0 transition-opacity duration-300 ease-linear" />
            )}
          </div>
          {!comingSoon && showCompanyBanner && company?.logo?.fields?.file?.url && (
            <div className="z-1 absolute top-0 left-0 mt-4 flex gap-2 bg-white py-2 px-2 items-center rounded-r-md">
              <div className="size-4 -mt-px flex items-center justify-center">
                <img
                  src={company.logo.fields.file.url}
                    alt={company.logo.fields.title}
                  />
                </div>
                <div className="uppercase tracking-wider text-xs font-bold leading-tight text-slate-600">
                  {company.name}
                </div>
              </div>
            )}
          {comingSoon && (
            <div className="shadow-md bg-gradient-to-r from-purple-500 to-pink-500 z-1 absolute top-0 left-0 mt-4 flex gap-2 py-2 px-2 items-center rounded-r-md">
              <div className="text-xs text-white font-bold uppercase tracking-wider leading-tight">
                Coming Soon!
              </div>
            </div>
          )}
          <div className="min-h-24 bg-gradient-to-br from-indigo-600/90 to-teal-600/40 text-white backdrop-blur-md text-left p-4 gap-2 flex flex-col">
            <div className="font-bold leading-tight uppercase tracking-wider">
              {displayTitle}
            </div>
            <div className="font-thin leading-tight uppercase tracking-wider text-xs">
              {company?.name}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};
