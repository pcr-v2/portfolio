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

  // 화면에 얼마나 보여야 "보이는 중"으로 판단할지 amount로 설정 (0 ~ 1)
  const isInView = useInView(containerRef, {
    amount: 0.7, // 40% 정도 보이면 in-view 처리
    margin: "0px 0px -20% 0px",
  });

  // 애니메이션 리셋을 위한 key
  const [playKey, setPlayKey] = React.useState(0);

  React.useEffect(() => {
    if (isInView) {
      // 화면에 다시 들어올 때마다 재생을 위해 key 증가
      setPlayKey((prev) => prev + 1);
    }
  }, [isInView]);

  return (
    <div ref={containerRef}>
      <Code
        key={playKey}
        className="w-full h-[372px]"
        code={`'use client';
 
import * as React from 'react';
  
type MyComponentProps = {
  myProps: string;
} & React.ComponentProps<'div'>;
  
function MyComponent(props: MyComponentProps) {
  return (
    <div {...props}>
      <p>“문제 해결은 코드가 아니라 기준에서 시작되며, 그 기준은 맥락과 상황을 깊게 이해하는 데서 만들어진다.”</p>
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
