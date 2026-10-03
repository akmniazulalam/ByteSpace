import { cn } from '@/lib/utils';
import React from 'react'

interface ParagraphProps {
    children: React.ReactNode;
    className?: String;
}

const Paragraph = ({children, className} : ParagraphProps) => {
  return (
    <p className={cn("font-normal text-[18px] leading-[160%] text-pColor", className)}>{children}</p>
  )
}

export default Paragraph