npm ci
./node_modules/.bin/pkg package.json --targets linux,win --debug  --out-path bld
ls -ltrh ./bld
