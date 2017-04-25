run:
	./node_modules/.bin/gulp

build:
	./node_modules/.bin/gulp build

buildProd:
	NODE_ENV=production ./node_modules/.bin/gulp build

start:
	make build
	make

init:
	npm i

jade:
	./node_modules/.bin/gulp jade

zip:
	./node_modules/.bin/gulp zip

style:
	./node_modules/.bin/gulp style

scripts:
	./node_modules/.bin/gulp scripts

libs:
	./node_modules/.bin/gulp libs

images:
	./node_modules/.bin/gulp images

misc:
	./node_modules/.bin/gulp misc
