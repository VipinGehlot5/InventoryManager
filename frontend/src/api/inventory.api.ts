import apiClient from './client';

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  quantity: number;
  seller: string;
  lastOrdered: string;
  category: string;
  price: number;
  status: 'In Stock' | 'Low Stock' | 'Out of Stock';
}

export interface CreateInventoryRequest {
  name: string;
  description: string;
  quantity: number;
  seller: string;
  category: string;
  price: number;
}

// Mock data
const mockInventoryData: InventoryItem[] = [
  {
    id: '1',
    name: 'Laptop Dell XPS 15',
    description: 'High-performance laptop for business use',
    quantity: 25,
    seller: 'Dell Inc.',
    lastOrdered: '2024-11-15',
    category: 'Electronics',
    price: 1299.99,
    status: 'In Stock',
  },
  {
    id: '2',
    name: 'Office Chair Ergonomic',
    description: 'Comfortable ergonomic office chair',
    quantity: 5,
    seller: 'Office Furniture Co.',
    lastOrdered: '2024-11-10',
    category: 'Furniture',
    price: 299.99,
    status: 'Low Stock',
  },
  {
    id: '3',
    name: 'Wireless Mouse Logitech',
    description: 'Wireless mouse with precision tracking',
    quantity: 0,
    seller: 'Logitech',
    lastOrdered: '2024-10-20',
    category: 'Electronics',
    price: 49.99,
    status: 'Out of Stock',
  },
  {
    id: '4',
    name: 'Standing Desk',
    description: 'Adjustable height standing desk',
    quantity: 15,
    seller: 'ErgoDesk Ltd.',
    lastOrdered: '2024-11-20',
    category: 'Furniture',
    price: 599.99,
    status: 'In Stock',
  },
  {
    id: '5',
    name: 'Monitor 27" 4K',
    description: '4K UHD monitor with HDR support',
    quantity: 8,
    seller: 'Samsung',
    lastOrdered: '2024-11-18',
    category: 'Electronics',
    price: 449.99,
    status: 'Low Stock',
  },
];

let inventoryStore = [...mockInventoryData];

export const getInventoryItems = async (): Promise<InventoryItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return inventoryStore;
};

export const getInventoryItemById = async (id: string): Promise<InventoryItem | null> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return inventoryStore.find((item) => item.id === id) || null;
};

export const createInventoryItem = async (
  data: CreateInventoryRequest
): Promise<InventoryItem> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const newItem: InventoryItem = {
    id: String(Date.now()),
    ...data,
    lastOrdered: new Date().toISOString().split('T')[0],
    status:
      data.quantity === 0 ? 'Out of Stock' : data.quantity < 10 ? 'Low Stock' : 'In Stock',
  };

  inventoryStore.push(newItem);
  return newItem;
};

export const updateInventoryItem = async (
  id: string,
  data: Partial<CreateInventoryRequest>
): Promise<InventoryItem> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const index = inventoryStore.findIndex((item) => item.id === id);
  if (index === -1) {
    throw new Error('Item not found');
  }

  const updatedItem: InventoryItem = {
    ...inventoryStore[index],
    ...data,
    status:
      (data.quantity ?? inventoryStore[index].quantity) === 0
        ? 'Out of Stock'
        : (data.quantity ?? inventoryStore[index].quantity) < 10
        ? 'Low Stock'
        : 'In Stock',
  };

  inventoryStore[index] = updatedItem;
  return updatedItem;
};

export const deleteInventoryItem = async (id: string): Promise<void> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  inventoryStore = inventoryStore.filter((item) => item.id !== id);
};
