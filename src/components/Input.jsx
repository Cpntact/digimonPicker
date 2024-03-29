import { twMerge } from "tailwind-merge"
import { forwardRef } from "react"

const Input = forwardRef(({
    className, type, disabled, ...props
}, ref) => {
  return (
    <div>
        <input className={twMerge(`
            flex
            w-full
            bg-neutral-700
            border
            border-transparent
            px-3
            py-3
            text-sm
            file:border-0
            file:bg-transparent
            file:text-sm
            file:font-medium
            placeholder:text-neutral-400
            disabled:cursor-not-allowed
            disabled:opacity-50
            focus:outline-none

        `,className)} disabled={disabled} ref={ref} {...props} type={type} />
    </div>
  )
});

export default Input;