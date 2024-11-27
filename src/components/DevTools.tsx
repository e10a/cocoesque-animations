import TimelineTracker from "@/dev-tools/TimelineTracker";
import Responsive from "@/dev-tools/Responsive";
import { styled } from "@linaria/react";

const Outer = styled.div`
  bottom: 0;
  position: fixed;
  right: 0;
  text-align: right;
  z-index: 1000;
  opacity: 0.7;
  border-top-left-radius: 0.25rem;
  max-height: 40vh;
  overflow-y: auto;
`;
const Inner = styled.div`
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  background-color: rgba(var(--color-gray-500) / 0.8);

  font-family: var(--font-mono);
  font-size: var(--text-tiniest);
  color: rgb(var(--color-white));

  display: flex;
  flex-direction: column;
`;

export default function DevTools() {
  return (
    <Outer>
      <Inner>
        <TimelineTracker />
        <Responsive />
      </Inner>
    </Outer>
  );
}
