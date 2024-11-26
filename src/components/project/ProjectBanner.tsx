import { styled } from "@linaria/react";

const Outer = styled.div`
  align-items: center;
  border-radius: 0 var(--space-2) var(--space-2) 0;
  display: flex;
  height: var(--space-8);
  left: 0px;
  margin-top: var(--space-4);
  padding: var(--space-2);
  position: absolute;
  top: 0;
  z-index: 1;
  background-image: linear-gradient(
    var(--gradient-rb),
    var(--gradient-indigo-pink)
  );
`;
const Inner = styled.div`
  color: rgb(var(--rgb-white));
  font-size: var(--text-xs);
  text-transform: uppercase;
  font-weight: var(--text-bold);
  letter-spacing: 1.5px;
`;
export default function ProjectBanner() {
  return (
    <Outer>
      <Inner>
        Coming Soon!
      </Inner>
    </Outer>
  );
}