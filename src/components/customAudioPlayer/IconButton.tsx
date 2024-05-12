import React from "react"

export default function IconButton({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      className={`rounded-full flex items-center justify-center disabled:opacity-60 ${className}`}
      {...props}
    />
  )
}
