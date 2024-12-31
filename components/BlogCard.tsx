"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "./ui/button"
import { MdArrowUpward } from "react-icons/md";
import { useRouter } from "next/navigation"
import { GradientBlob } from '@/components/ui/GradientBlob'
import { Ripple } from "./ui/Ripple"


interface BlogrProps {
  id: number
  name: string
  image: string
  specialties: string[]
  description: string
}

export function BlogCard({ id, name, image, specialties, description }: BlogrProps) {

    const router = useRouter();

    const handlePassHreff = (e: React.MouseEvent<HTMLButtonElement>) => { 
        e.preventDefault()
        router.push(`/posts/${id}`)
        console.log('pass href')
    }

  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{  opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{  duration: 0.2, type: 'spring', damping: 10, stiffness: 100 }}
    >
        <Card className="overflow-hidden rounded-md ">
            <CardHeader className="relative p-0">
                <Image
                    src={image}
                    alt={name}
                    width={400}
                    height={300}
                    className="w-full h-[350px] object-cover z-10 relative"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20" />
                <CardTitle className="absolute bottom-4 left-4 text-2xl font-bold z-30 text-white">
                    {name}
                </CardTitle>
            </CardHeader>
            <Ripple color="fuchsia" duration={0.7}>
            <CardContent className="overflow-clip relative p-4 rounded-b-md border-2 border-t-0 border-fuchsia-600 bg-black ">
                    <div className='absolute top-0 right-40 opacity-50 animate-pulse-slow' >
                        <GradientBlob colors={["#FF00A9", "#00F0FF"]} size={200} blur={60} />
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4 z-20">
                        {specialties.map((specialty, index) => (
                        <Badge key={index} className="rounded-full bg-fuchsia-600 hover:bg-fuchsia-700">
                            {specialty}
                        </Badge>
                        ))}
                    </div>
                    <CardDescription className="text-gray-300 line-clamp-2 mb-4 z-20">
                        {description}
                    </CardDescription>
                        <Button 
                        onClick={handlePassHreff}
                        variant='gooeyLeft'
                        className="border-2 border-fuchsia-600 flex items-center justify-center gap-2 group rounded-full hover:bg-primary hover:text-primary-foreground bg-primary-foreground text-primary">
                            Read More <MdArrowUpward className="w-4 h-4 rotate-45 transition-transform duration-300 group-hover:rotate-90" />
                        </Button>
            </CardContent>
            </Ripple>
        </Card>
    </motion.div>
  )
}
