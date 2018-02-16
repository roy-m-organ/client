// Copyright 2017-2018 Jaco Greeff
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.
// @flow

import type { ChainConfigType } from '../types';

module.exports = ({
  name: 'Nelson',
  description: 'An initial @polkadot/client test network. Will be deprecated once the @polkadot/client aligns with the official implementations in terms of networking and features.',
  nodes: [],
  params: {
    networkId: 111
  },
  genesis: {
    author: '0x0000000000000000000000000000000000000000',
    hash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    parentHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
    stateRoot: '0x0000000000000000000000000000000000000000000000000000000000000000'
  }
}: ChainConfigType);