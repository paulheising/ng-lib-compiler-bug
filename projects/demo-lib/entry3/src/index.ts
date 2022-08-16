// import { FooInterface2 } from 'demo-lib/entry2';

import { someValue } from './some-file';

// someValue2 implicitly inherits the type from someValue, which is
// `FooInterface2` from the other entry point. So the type is not explicitly
// imported into this file, but only into some-file.ts
// If we `ng build demo-lib` now, and check out the build output, we can see
// this import in dist/demo-lib/entry3/index.d.ts:
// export declare const someValue2: import("dist/demo-lib/entry2").FooInterface2;
// we can see, that it created a dynamic import, but take a look at the path: it
// starts with dist. This is a problem, when we want to publish the library,
// because the libraries path will not contain dist in that case, which will
// lead to build errors in the app that consumes this library
export const someValue2 = someValue;

// However, if we define the type of someValue2 explicitly here, and therefore
// also import it explicitly above, the build output will be correct
// export const someValue22: FooInterface2 = someValue;
