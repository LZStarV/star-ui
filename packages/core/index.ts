import { shared } from '@star-ui/shared';
import './src/styles/index.scss';

/**
 * 初始化Star UI核心功能
 */
export function initStarUI() {
  shared();
  console.log('Star UI core initialized');
}
