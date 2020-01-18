.PHONY: init
init:
	cd ..; git clone git@github.com:alphastrategies/alphastrategies.github.io.git

.PHONY: build
build:
	npm run build
	cd ../alphastrategies.github.io; git checkout master; git branch -d build-update; git hack build-update
	find ../alphastrategies.github.io -mindepth 1 -maxdepth 1 ! -name '.git' -type d -exec rm -rd {} +
	find ../alphastrategies.github.io -mindepth 1 -maxdepth 1 ! -name 'CNAME' -type f -exec rm {} +
	cp -r public/* ../alphastrategies.github.io
	cd ../alphastrategies.github.io; git add --all; git commit -m "build update"; git npr
