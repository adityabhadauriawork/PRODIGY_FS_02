import { motion } from "framer-motion";

export default function AuthLayout({

children

}){

return(

<div
className="
relative
min-h-screen
overflow-hidden
bg-[#050816]
flex
justify-center
items-center
">

<div
className="
absolute
w-[500px]
h-[500px]
rounded-full
bg-blue-600/30
blur-[140px]
-left-32
-top-24
"/>

<div
className="
absolute
w-[400px]
h-[400px]
rounded-full
bg-cyan-500/20
blur-[140px]
right-0
bottom-0
"/>

<motion.div

initial={{opacity:0,scale:.92}}

animate={{opacity:1,scale:1}}

transition={{duration:.6}}

className="
relative
z-10
w-[450px]
rounded-3xl
bg-white/5
backdrop-blur-3xl
border
border-white/10
shadow-[0_0_70px_rgba(37,99,235,.28)]
p-10
"

>

{children}

</motion.div>

</div>

)

}