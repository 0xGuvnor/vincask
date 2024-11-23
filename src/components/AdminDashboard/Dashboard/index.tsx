import { Activity, CreditCard, DollarSign, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../ui/table";
import MetricCard from "./MetricCard";

function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Key Metrics</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Revenue"
          value="$45,231.89"
          percentageChange="+20.1% from last month"
          icon={DollarSign}
        />
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+2350</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Sales</CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+12,234</div>
            <p className="text-xs text-muted-foreground">
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Now</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+573</div>
            <p className="text-xs text-muted-foreground">
              +201 since last hour
            </p>
          </CardContent>
        </Card>
      </div>
      <h2 className="mb-4 mt-10 text-xl font-semibold">Recent Orders</h2>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Product</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">#3210</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Shipped
                </span>
              </TableCell>
              <TableCell>Olivia Martin</TableCell>
              <TableCell>Laptop Pro</TableCell>
              <TableCell className="text-right">$1,999.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3209</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                  Processing
                </span>
              </TableCell>
              <TableCell>William Kim</TableCell>
              <TableCell>Ergonomic Keyboard</TableCell>
              <TableCell className="text-right">$249.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3208</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Shipped
                </span>
              </TableCell>
              <TableCell>Sofia Davis</TableCell>
              <TableCell>4K Monitor</TableCell>
              <TableCell className="text-right">$799.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3207</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                  Cancelled
                </span>
              </TableCell>
              <TableCell>Jackson Lee</TableCell>
              <TableCell>Wireless Mouse</TableCell>
              <TableCell className="text-right">$39.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">#3206</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                  Shipped
                </span>
              </TableCell>
              <TableCell>Emma Wilson</TableCell>
              <TableCell>USB-C Hub</TableCell>
              <TableCell className="text-right">$119.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </main>
  );
}

export default Dashboard;
