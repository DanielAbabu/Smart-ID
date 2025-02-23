import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"


export function RegisteredList({student}) {
  return (
    <Card className="shadow-sm border border-white shadow-[2px_2px_8px_rgba(255,255,255,1)]  rounded-xl bg-white">
      <CardHeader>
        <CardTitle>Your Registered Items</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Item</TableHead>
              <TableHead>Serial Number</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
                student?.belongings.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.serialNumber}</TableCell>
                  </TableRow>
                ))
              }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
