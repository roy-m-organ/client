// Copyright 2017-2019 @polkadot/client-rpc authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import validateConfig from './config';

describe('validateConfig', () => {
  it('throws when path does not start with /', () => {
    expect(
      () => validateConfig({ path: 'blah' })
    ).toThrow(/valid path/);
  });

  it('throws when unknown type is found', () => {
    expect(
      () => validateConfig({ path: '/', types: ['unknown', 'http', 'ws', 'none'] })
    ).toThrow(/Invalid RPC type found: 'unknown', 'none'/);
  });
});
