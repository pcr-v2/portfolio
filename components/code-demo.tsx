"use client";

import * as React from "react";
import {
  Code,
  CodeBlock,
  CodeHeader,
} from "@/components/animate-ui/components/animate/code";
import { useInView } from "framer-motion";

interface CodeDemoProps {
  duration: number;
  delay: number;
}

export const CodeDemo = ({ duration, delay }: CodeDemoProps) => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);

  // 화면에 60% 정도 보이면 in-view 처리
  const isInView = useInView(containerRef, {
    amount: 0.6,
  });

  const [playKey, setPlayKey] = React.useState(0);
  const [shouldPlay, setShouldPlay] = React.useState(false);

  React.useEffect(() => {
    if (isInView) {
      // 뷰포트 안으로 들어오면 → 재생 시작
      setShouldPlay(true);
      setPlayKey((prev) => prev + 1);
    } else {
      // 뷰포트 완전히 벗어나면 → 즉시 초기화
      setShouldPlay(false);
      setPlayKey((prev) => prev + 1);
    }
  }, [isInView]);

  return (
    <div ref={containerRef}>
      <Code
        key={playKey}
        className="w-full h-[372px]"
        code={`'use client';
 
import { useMemo } from "react";
  
type MyComponentProps = {
  myProps: string;
}
  
function MyComponent(props: MyComponentProps) {
  const mindset = useMemo(() => [
    "이유 없이 기술을 쓰지 않는 사람",
    "사용자의 하루를 상상하는 사람",
    "팀의 기준을 함께 만드는 사람",
  ], []);

  return (
    <div {...props}>
      <p>"가치를 만들어가는 개발자란,</p>
      {mindset.map((mind, index) => (
        <p key={'{mind}+{index}'}>{mind}</p>
      ))}
      <p>이라고 생각합니다."</p>
    </div>
  );
}

export { MyComponent, type MyComponentProps };`}
      >
        <CodeHeader copyButton>my-component.tsx</CodeHeader>

        <CodeBlock
          lang="tsx"
          // viewport 안에 있을 때만 타이핑 + 커서 활성화
          writing={isInView}
          cursor={isInView}
          duration={duration}
          delay={delay}
        />
      </Code>
    </div>
  );
};
