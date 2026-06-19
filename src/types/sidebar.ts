export interface SidebarProps {
  mobile?: boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export interface MenuItemProp {
  icon: string;
  text: string;
}

export interface MenuItemProps extends MenuItemProp {
  size: number;
  mobile?: boolean;
}

export interface DropdownProps {
  icon: string;
  label: string;
  items: MenuItemProp[];
  defaultOpen?: boolean;
  mobile?: boolean;
}
