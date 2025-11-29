import { useNavigate } from 'react-router-dom';
import { useInventoryItems, useDeleteInventoryItem } from '@/hooks/useInventory';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, Pencil, Trash2 } from 'lucide-react';

export const InventoryPage = () => {
  const navigate = useNavigate();
  const { data: inventory, isLoading } = useInventoryItems();
  const { mutate: deleteItem } = useDeleteInventoryItem();

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      deleteItem(id);
    }
  };

  if (isLoading) {
    return (
      <div className="p-4 md:p-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <div className="h-64 bg-muted rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Inventory</h1>
          <p className="text-muted-foreground mt-2">Manage your inventory items</p>
        </div>
        <Button onClick={() => navigate('/inventory/manage')} className="gap-2">
          <Plus className="h-4 w-4" />
          Create Inventory
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Items ({inventory?.length || 0})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead className="hidden md:table-cell">Description</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead className="hidden lg:table-cell">Seller</TableHead>
                  <TableHead className="hidden lg:table-cell">Last Ordered</TableHead>
                  <TableHead className="hidden sm:table-cell">Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {inventory?.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell className="hidden md:table-cell max-w-xs truncate">
                      {item.description}
                    </TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell className="hidden lg:table-cell">{item.seller}</TableCell>
                    <TableCell className="hidden lg:table-cell">
                      {new Date(item.lastOrdered).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="hidden sm:table-cell">
                      <span
                        className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                          item.status === 'In Stock'
                            ? 'bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400'
                            : item.status === 'Low Stock'
                            ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400'
                            : 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400'
                        }`}
                      >
                        {item.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => navigate(`/inventory/manage/${item.id}`)}
                        >
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          {!inventory || inventory.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No inventory items found</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => navigate('/inventory/manage')}
              >
                Create your first item
              </Button>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
};
