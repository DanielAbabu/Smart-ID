"use client";

import { useState, useEffect, useMemo } from "react";
import { StudentList } from "@/components/student-list";
import {getAllStudents} from "@/lib/api"


export default function AdminDashboard() {
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);

  // Fetch students
  useEffect(() => {
    const fetchStudents = async () => {
      const data = await getAllStudents();
      setStudents(data);
    };
    fetchStudents();
  }, []);



  // Debounced search 
  const [debouncedSearch, setDebouncedSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300); 

    return () => clearTimeout(handler);
  }, [search]);


  // Memoized filtered students
  const filteredStudents = useMemo(() => {
    return students.filter((s) =>
      s.id.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [debouncedSearch, students]);


  return (
    <div className="w-full p-4 bg-white">
      <h2 className="text-xl my-4 font-bold">Admin Dashboard</h2>
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Search by ID"
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          className="border w-full p-2 py-2 text-sm "
        />
        <button
        className="ml-2 px-4 text-sm rounded font-bold bg-gray-600 text-white hover:bg-gray-800"
        >
          Search
        </button>
      </div>
      <ul className="mt-2">
        <StudentList students={filteredStudents}/>
      </ul>
    </div>
  );
}
