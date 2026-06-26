export interface GameCardProp {
  image: string;
  title: string;
  onNavigate?: (title: string) => void;
}
