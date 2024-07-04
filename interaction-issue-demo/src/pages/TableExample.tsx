import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  TableData,
} from "@razorpay/blade/components";

type Item = {
  id: string;
  paymentId: string;
  amount: number;
  date: Date;
  method: string;
};

const nodes: Item[] = [
  ...Array.from({ length: 5 }, (_, i) => ({
    id: (i + 1).toString(),
    paymentId: `rzp${Math.floor(Math.random() * 1000000)}`,
    amount: Number((Math.random() * 10000).toFixed(2)),
    date: new Date(
      2021,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ),
    method: ["Bank Transfer", "Credit Card", "PayPal"][
      Math.floor(Math.random() * 3)
    ],
    account: Math.floor(Math.random() * 1000000000).toString(),
  })),
];

const data: TableData<Item> = {
  nodes,
};

export const TableExample = () => {
  return (
    <Table data={data}>
      {(tableData) => (
        <>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Method</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            {tableData.map((tableItem, index) => (
              <TableRow key={index} item={tableItem}>
                <TableCell>{tableItem.paymentId}</TableCell>
                <TableCell>{`₹${tableItem.amount.toString()}`}</TableCell>
                <TableCell>
                  {tableItem.date?.toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                </TableCell>
                <TableCell>{tableItem.method}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </>
      )}
    </Table>
  );
};
