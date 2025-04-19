export interface Itask {
  id: number;
  name: string;
  status: 'Pending' | 'In Progress' | 'Completed';
}
