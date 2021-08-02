/// <reference lib="webworker" />

import { keepCounting } from '../../services/long-running.helper';

addEventListener('message', ({ data }) => {
  keepCounting(num => {
    postMessage(num);
  }, 9000000000);
});
