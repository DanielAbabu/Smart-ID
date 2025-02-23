"use client";

const students = [
  {
    id: "ETS-0001-12",
    name: "Alice Johnson",
    department: "Software Engineering",
    photoUrl: "/teadybear.jpg",
    qrCode: "/qrcode1.png",
    propertySerial: "SN12345",
    belongings: [
      { id: 1, name: "HP Laptop", serialNumber: "LT1AJDIENC38932001" },
      { id: 2, name: "Smartphone", serialNumber: "SP100002" },
      { id: 3, name: "Tablet", serialNumber: "TB100003" },
    ],
  },
  {
    id: "ETS-0002-12",
    name: "Bob Smith",
    department: "Computer Science",
    photoUrl: "/teadybear.jpg",
    qrCode: "/qrcode2.png",
    propertySerial: "SN67890",
    belongings: [
      { id: 1, name: "HP Laptop", serialNumber: "LT2AJDIENC38932001" },
      { id: 2, name: "Smartwatch", serialNumber: "SW200002" },
      { id: 3, name: "Headphones", serialNumber: "HP200003" },
    ],
  },
  {
    id: "ETS-0003-12",
    name: "Charlie Brown",
    department: "Information Technology",
    photoUrl: "/teadybear.jpg",
    qrCode: "/qrcode3.png",
    propertySerial: "SN54321",
    belongings: [
      { id: 1, name: "Desktop PC", serialNumber: "DP3AJDIENC38932001" },
      { id: 2, name: "Tablet", serialNumber: "TB300002" },
      { id: 3, name: "External HDD", serialNumber: "HD300003" },
    ],
  },
  {
    id: "ETS-0004-12",
    name: "Diana Miller",
    department: "Cyber Security",
    photoUrl: "/teadybear.jpg",
    qrCode: "/qrcode4.png",
    propertySerial: "SN98765",
    belongings: [
      { id: 1, name: "HP Laptop", serialNumber: "LT4AJDIENC38932001" },
      { id: 2, name: "Smartphone", serialNumber: "SP400002" },
      { id: 3, name: "USB Drive", serialNumber: "UD400003" },
    ],
  },
  {
    id: "ETS-0005-12",
    name: "Ethan Davis",
    department: "Data Science",
    photoUrl: "/teadybear.jpg",
    qrCode: "/qrcode5.png",
    propertySerial: "SN24680",
    belongings: [
      { id: 1, name: "HP Laptop", serialNumber: "LT5AJDIENC38932001" },
      { id: 2, name: "Smartphone", serialNumber: "SP500002" },
      { id: 3, name: "Graphics Tablet", serialNumber: "GT500003" },
    ],
  },
  {
    id: "ETS-0006-12",
    name: "Fiona White",
    department: "Artificial Intelligence",
    photoUrl: "/teadybear.jpg",
    qrCode: "/qrcode6.png",
    propertySerial: "SN13579",
    belongings: [
      { id: 1, name: "HP Laptop", serialNumber: "LT6AJDIENC38932001" },
      { id: 2, name: "Smart Glasses", serialNumber: "SG600002" },
      { id: 3, name: "Drone", serialNumber: "DR600003" },
    ],
  },
  {
    id: "ETS-0007-12",
    name: "George King",
    department: "Software Engineering",
    photoUrl: "/teadybear.jpg",
    qrCode: "/qrcode7.png",
    propertySerial: "SN19283",
    belongings: [
      { id: 1, name: "HP Laptop", serialNumber: "LT7AJDIENC38932001" },
      { id: 2, name: "Smartphone", serialNumber: "SP700002" },
      { id: 3, name: "Camera", serialNumber: "CM700003" },
    ],
  },
  {
    id: "ETS-0008-12",
    name: "Hannah Lee",
    department: "Networking",
    photoUrl: "/teadybear.jpg",
    qrCode: "/qrcode8.png",
    propertySerial: "SN83746",
    belongings: [
      { id: 1, name: "Router", serialNumber: "RT8AJDIENC38932001" },
      { id: 2, name: "HP Laptop", serialNumber: "LT800002" },
      { id: 3, name: "Network Tester", serialNumber: "NT800003" },
    ],
  },
  {
    id: "ETS-0009-12",
    name: "Ian Walker",
    department: "Cloud Computing",
    photoUrl: "/teadybear.jpg",
    qrCode: "/qrcode9.png",
    propertySerial: "SN47562",
    belongings: [
      { id: 1, name: "HP Laptop", serialNumber: "LT9AJDIENC38932001" },
      { id: 2, name: "Smartphone", serialNumber: "SP900002" },
      { id: 3, name: "Server Hardware", serialNumber: "SH900003" },
    ],
  },
  {
    id: "ETS-0010-12",
    name: "Julia Adams",
    department: "Robotics",
    photoUrl: "/teadybear.jpg",
    qrCode: "/qrcode10.png",
    propertySerial: "SN15937",
    belongings: [
      { id: 1, name: "HP Laptop", serialNumber: "LT123456" },
      { id: 2, name: "Smartphone", serialNumber: "SP789012" },
      { id: 3, name: "Tablet", serialNumber: "TB345678" },
    ],
  },
];


// Mock API function for fetching a single student
export async function getStudentById(studentId) {
  return students.find((student) => student.id === studentId) || null;
}
export async function getStudentBelongingsById(studentId) {
  return students.find((student) => student.id === studentId) || null;
}
// Mock API function for fetching all students
export async function getAllStudents() {
  return students;
}
