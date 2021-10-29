#!/usr/bin/env sh
set -e

cd site
yarn build
cd ../docs
echo 'ipakit.dev' > CNAME
cd ..
echo 'Push to Github.'
