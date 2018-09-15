import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'sc-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  product: any;
  selectedTab: number;

  categories = [
    {
      label: 'LATEST',
      path: '../latest'
    },
    {
      label: 'FASHION',
      path: '../fashion'
    },
    {
      label: 'FURNITURE',
      path: '../furniture'
    },
    {
      label: 'FOOD',
      path: '../food'
    },
    {
      label: 'TRAVEL',
      path: '../travel'
    }
  ];

  tabs = {
    latest: 0,
    fashion: 1,
    furniture: 2,
    food: 3,
    travel: 4
  };


  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const category = this.route.snapshot.paramMap.get('category');
    this.product = this.getProduct(category);

    this.selectedTab = this.tabs[category];
  }

  onTabChange(tabChange) {
    const category = tabChange.tab.textLabel.toLowerCase();
    this.router.navigate(
      [`../${category}`],
      {relativeTo: this.route}
      );

    this.product = this.getProduct(category);
  }

  getProduct(category) {
    const products = {
      latest: {
        image: '🎯',
        headline: 'Direct Hit',
        description: 'A dart board with dart hitting the center / bullseye region',
        price: 199.99
      },
      fashion: {
        image: '💅',
        headline: 'Nail Polish',
        description: 'A bottle of nail polish, or colored nail polish being applied to finger nails.',
        price: 35.99
      },
      furniture: {
        image: '🛋️',
        headline: 'Couch and Lamp',
        description: 'A couch, with a floor lamp next to it.',
        price: 1099.99
      },
      food: {
        image: '🍕',
        headline: 'Pizza',
        description: 'A slice of pepperoni pizza, topped with black olives on Google. WhatsApp adds green pepper, Samsung white onion.',
        price: 6.59
      },
      travel: {
        image: '⛺',
        headline: 'Tent',
        description: 'A tent, used for protection from wind and rain when camping. Often shown at night time, under stars',
        price: 599.99
      }
    };

    return products[category];
  }

}
