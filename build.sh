set -ue -o pipefail -o errtrace

DEPLOY_PATH=${DEPLOY_HASH:-local}

node node_modules/pxt-core/built/pxt.js staticpkg -r "$DEPLOY_HASH"
cp built_hexfiles/* built/packaged/$DEPLOY_PATH/hexcache/
cd built/packaged/$DEPLOY_PATH/
ln -s docs/static
cd -