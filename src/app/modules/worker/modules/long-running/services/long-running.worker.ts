/// <reference lib="webworker" />

import { crazyBusyFunction } from './long-running.helper';

addEventListener('message', ({ data }) => {
  const response = crazyBusyFunction(data);
  postMessage(response);
});
