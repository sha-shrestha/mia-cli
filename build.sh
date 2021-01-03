npm install
npm ci
./node_modules/.bin/pkg package.json --targets linux --debug  --out-path bld
ls -ltrh ./bld
