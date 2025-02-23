"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { DigitalID } from "@/components/digital-id"
import { RegisteredList } from "@/components/registered-list"
import {getStudentById} from "@/lib/api"
import Image from "next/image"


export default function StudentDashboard() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);


  // Fetch students
  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getStudentById(id);
      setStudent(data);
    };
    fetchStudents();
  }, []);

  console.log(student);

  return (
    <div className="m-0 p-0 ">
      {/* <div className="flex  px-4 py-2">
        <div className="w-12 h-12 relative rounded-lg overflow-hidden mb-4">
          <Image
            src='/logo.png'
            alt="Photo of logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-lg text-gray-800 font-bold pl-4">ADDIS ABABA SCIENCE AND<br/>TECHNOLOGY UNIVERSITY</div>
      </div> */}

      <DigitalID student={student}/>
      <RegisteredList student={student}/>
    </div>
  );
}
