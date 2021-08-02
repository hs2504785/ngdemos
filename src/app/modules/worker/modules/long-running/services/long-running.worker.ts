/// <reference lib="webworker" />

import { crazyBusyFunction } from '../../services/long-running.helper';

addEventListener('message', ({ data }) => {
  const response = crazyBusyFunction(data);
  postMessage(response);
});
