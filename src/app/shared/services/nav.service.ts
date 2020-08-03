import { Injectable } from '@angular/core';

// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  active?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})
export class NavService {
  collapseSidebar: boolean = false;

  constructor() { }

  MENUITEMS: Menu[] = [
    { path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', active: true },
    {
      title: 'Masters', icon: 'clipboard', type: 'sub', active: false, children: [
        { path: '/party', title: 'Customers', type: 'link' },
        { path: '/party', title: 'Suppliers', type: 'link' },
        {
          path: '/masters/products', title: 'Products', type: 'sub', icon: 'box', children: [
            { path: '/products/physical/product-list', title: 'Product List', type: 'link' },
            { path: '/products/physical/add-product', title: 'Add Product', type: 'link' }
          ]
        },
        { path: '/masters/transports', title: 'Transport', type: 'link' },
        { path: '/masters/hsn', title: 'HSN', type: 'link' }

      ]
    },
    { path: '/orders', title: 'Sales', icon: 'bar-chart', type: 'link', active: false },
    { path: '/orders', title: 'Purchase', icon: 'bar-chart', type: 'link', active: false },

    { path: '/reports', title: 'Report', icon: 'bar-chart', type: 'link', active: false },
    {
      title: 'Setting', icon: 'settings', type: 'sub', active: false, children: [
        { path: '/settings/profile', title: 'Profile', type: 'link' }
      ]
    },
    { path: '/invoice', title: 'Invoice', icon: 'archive', type: 'link', active: false },
    { path: '/auth/login', title: 'Logout', icon: 'log-in', type: 'link', active: false }
  ];

}
