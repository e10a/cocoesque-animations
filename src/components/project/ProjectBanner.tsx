import { styled } from "@linaria/react";

const Outer = styled.div`
  align-items: center;
  display: flex;
  height: var(--space-8);
  left: 0px;
  margin-top: var(--space-4);
  padding: var(--space-2);
  position: absolute;
  background-image: linear-gradient(to right, rgb(168, 85, 247), rgb(236, 72, 153));
  border-radius: 0 var(--space-2) var(--space-2) 0;
`;
//  className="shadow-md bg-gradient-to-r from-purple-500 to-pink-500 z-1 absolute top-0 left-0 mt-4 flex gap-2 py-2 px-2 items-center rounded-r-md"
const Inner = styled.div`
  color: rgb(var(--rgb-white));
  font-size: var(--text-xs);
  text-transform: uppercase;
  font-weight: var(--text-bold);
  letter-spacing: 1.5px;
`;
// className="text-xs text-white font-bold uppercase tracking-wider leading-tight"
export default function ProjectBanner() {
  return (
    <Outer>
      <Inner>
        Coming Soon!
      </Inner>
    </Outer>
  );
}