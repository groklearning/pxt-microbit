DEPLOY_PATH=${DEPLOY_HASH:-local}

pxt staticpkg -r "$DEPLOY_PATH"
cp built_hexfiles/* built/packaged/$DEPLOY_PATH/hexcache/
cd built/packaged/$DEPLOY_PATH/
ln -s docs/static
cd -