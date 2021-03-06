// Copyright 2017-2019 @polkadot/client-p2p authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import Peer from '.';

describe('createPeer', () => {
  const id = '0123456789';
  let peer;
  let peerInfo;

  beforeEach(() => {
    peerInfo = {
      id: {
        toB58String: () => id
      }
    };
    peer = new Peer({}, {}, null, peerInfo);
  });

  it('stores the peerInfo id', () => {
    expect(
      peer.id
    ).toEqual(id);
    expect(
      peer.shortId
    ).toBeDefined();
  });

  it('stores the peerInfo', () => {
    expect(
      peer.peerInfo
    ).toEqual(peerInfo);
  });
});
