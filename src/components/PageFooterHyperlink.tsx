export const PageFooterHyperlink = ({ children, path }: { children: React.ReactNode; path: string }) => {
  return (
    <a
      className="page-footer__hyperlink"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
