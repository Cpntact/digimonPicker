import React from 'react'

import { twMerge } from 'tailwind-merge'

function Image({src, className, children, ...props}) {
  return (
    <img src={src} className={twMerge(`rounded-lg`, className)} {...props}/> 
  )
}

export default Image