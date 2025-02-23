"use client"

import { useState, useEffect } from "react"
import Image from "next/image"



export function DigitalID({student}) {


  return (

<div className="rounded-xl bg-white flex flex-col items-center md:flex-row md:items-start md:p-6 md:gap-8">
  
  <div className="w-full h-[280px] relative rounded-b-2xl overflow-hidden md:w-[400px] md:h-[400px] md:rounded-xl">
    <Image
      src={student?.photoUrl || "/placeholder.svg"}
      alt={`Photo of ${student?.name}`}
      layout="fill"
      objectFit="cover"
      className="md:rounded-xl"
    />
  </div>

  <div className="flex flex-col w-full px-6 py-8 md:py-0 md:flex-1">
    
    <div className="mb-4">
      <p className="text-muted-foreground">{student?.id}</p>
      <h3 className="text-[20px] font-bold md:text-[28px]">{student?.name}</h3>
      <p className="text-muted-foreground">{student?.department}</p>
    </div>
    
    <div className="w-full h-[80px] relative overflow-hidden md:h-[100px]">
      <Image
        src={"/bar.png"}
        alt={`Bar Image for ${student?.name}`}
        layout="fill"
        objectFit="cover"
      />
    </div>

  </div>

</div>


  )
}

