// ISC, Copyright 2017 Jaco Greeff
// @flow

import type { MessageInterface } from '../types';
import type { CallbackType } from './types';

const rlpDecode = require('../rlp/decode');

module.exports = function streamReader (handler: (message: MessageInterface) => any): any {
  return (read: (end: ?Error | boolean, next: CallbackType) => void): void => {
    const next = (end: ?Error | boolean, encoded?: Buffer): any => {
      if (end) {
        return end;
      }

      console.log('R', encoded);

      handler(
        rlpDecode(((encoded: any): Buffer))
      );

      read(null, next);
    };

    read(null, next);
  };
};
