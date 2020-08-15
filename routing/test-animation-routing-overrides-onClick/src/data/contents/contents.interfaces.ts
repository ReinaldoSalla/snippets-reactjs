interface Item {
  title: string;
	items: Array<string>;
	firstTitle?: boolean;
}

interface Contents {
  react: Item;
  javascript: Item;
  typescript: Item;
  backend: Item;
	mobile: Item;
	ai: Item;
  projects: Item;
}

export type { Contents };