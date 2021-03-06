// Copyright 2017-2019 @polkadot/client-runtime authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

import env from '../environment';
import index from '.';

describe('malloc', () => {
  let runtime;
  let mem;

  beforeEach(() => {
    runtime = env();
    runtime.heap.setWasmMemory({ buffer: new Uint8Array(1024 * 1024) });

    mem = index(runtime);
  });

  it('allocates space', () => {
    mem.malloc(50);

    expect(
      runtime.heap.used().allocated
    ).toEqual(50);
  });

  it('deallocates space', () => {
    mem.free(mem.malloc(666));

    expect(
      runtime.heap.used().deallocated
    ).toEqual(666);
  });
});
