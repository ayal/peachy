#! /usr/bin/env bash

cd ~
rm -rf pack-peachy/
cp -r peachy pack-peachy
cd pack-peachy
rm -rf .git
rm -rf node_modules
cp ../peachykey.pem key.pem
cd ..
zip -r peachy.zip pack-peachy
