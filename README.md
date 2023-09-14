// Before Node 17.x versions, It uses OpenSSL 2 version. NodeJS uses OpenSSL for hash functionality code. The OpenSSL 3 disables MD4, Due to that nodejs is broken in the latest nodejs versions.

 export NODE_OPTIONS=--openssl-legacy-provider