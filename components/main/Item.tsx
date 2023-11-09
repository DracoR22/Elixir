'use client'

import { LucideIcon } from "lucide-react"

type ItemProps = {
    label: string
    onClick: () => void
    icon: LucideIcon
}

const Item = ({ label, onClick, icon: Icon }: ItemProps) => {
  return (
    <div onClick={onClick} role="button" style={{ paddingLeft: "12px" }} className="group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary-5 flex items-center text-muted-foreground font-medium">
     <Icon className="shrink-0 h-[18px]"/>
      {label}
    </div>
  )
}

export default Item
