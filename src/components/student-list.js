"use client"

import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


export function StudentList({students}) {
    const router = useRouter() 

    return (
    <Card className="w-full">
        <div className="pt-4 pl-6 font-bold text-lg"> Students</div>

      <CardContent>
        <Table>
          <TableBody >
          {students.length > 0 ? (
            students.map((student) => (
              <TableRow
                key={student.id}
                onClick={() => router.push(`/student/${student.id}`)}
                className="cursor-pointer "
              >
                <TableCell className="pt-5 flex flex-col " >
                    <div className="text-gray-700 text-sm text-base font-base rounded">
                      ETS
                    </div>
                    <div className="text-gray-700 text-sm text-base font-base rounded">
                      {student.id.slice(4)}
                    </div>
                </TableCell>
                <TableCell className="pt-5 text-sm text-gray-800 ">
                  <div className="flex flex-col">
                    <div className="font-bold text-sm p-0">
                      {student.name}
                    </div>
                    <div>
                      {student.department}
                    </div>
                  </div>
                  </TableCell>
              </TableRow>
            ))) : (
              <TableRow className="text-gray-500 mt-2"> 
                <TableCell>No students found </TableCell> 
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}


   