import type { PortfolioContent } from '@/types/content';
import rawContent from '@/content/content.json';

export function getContent(): PortfolioContent {
  return rawContent as PortfolioContent;
}
