"use client"

import { useState, useEffect } from "react"
// import { QRCode } from "qrcode.react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"



export function DigitalID({student}) {


  return (
    // <Card className="mb-8 shadow-sm border border-gray-100 shadow-[2px_2px_8px_rgba(0,0,0,0.1)] rounded-xl bg-white">
    //   <CardHeader>
    //     <CardTitle className="text-xl">Your Digital ID</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 ">
    //       <div className="w-52 h-52 relative rounded-lg overflow-hidden mb-4">
    //         <Image
    //           src={student?.photoUrl || "/placeholder.svg"}
    //           alt={`Photo of ${student?.name}`}
    //           layout="fill"
    //           objectFit="cover"
    //         />
    //       </div>
    //       <div className="flex flex-col justify-center items-center">
    //         <p className="text-lg text-muted-foreground">{student?.id}</p>
    //         <h3 className="text-[28px] font-bold">{student?.name}</h3>
    //         <p className="text-lg  text-muted-foreground">{student?.department}</p>
    //       </div>
    //     </div>

    //   </CardContent>
    // </Card>
    <div className=" rounded-xl bg-white flex flex-col items-center">
        <div className="w-full h-[280px] relative rounded-b-2xl overflow-hidden ">
          <Image
            src={student?.photoUrl || "/placeholder.svg"}
            alt={`Photo of ${student?.name}`}
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="flex flex-col w-full px-6 py-8">
          <p className=" text-muted-foreground">{student?.id}</p>
          <h3 className="text-[20px] font-bold">{student?.name}</h3>
          <p className=" text-muted-foreground">{student?.department}</p>
        </div>

        <div className="w-[300px] h-[80px] relative  overflow-hidden mb-4">
          <Image
            src={"/bar.png"}
            alt={`Photo of ${student?.name}`}
            layout="fill"
            objectFit="cover"
          />
        </div>


  </div>
  )
}

