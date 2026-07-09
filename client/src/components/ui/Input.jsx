export default function Input({
    icon,
    ...props
}){

return(

<div
className="
flex
items-center
gap-3
px-5
py-3
rounded-xl
border
border-slate-700
bg-slate-900/70
backdrop-blur-xl
focus-within:border-blue-500
focus-within:shadow-[0_0_20px_rgba(59,130,246,.45)]
transition-all
duration-300
">

{icon}

<input

{...props}

className="
w-full
bg-transparent
outline-none
text-white
placeholder:text-slate-500
"

/>

</div>

)

}