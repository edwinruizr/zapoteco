
# mainly used when viewing translation builds locally
serve_build:
	npm run build && npm run serve

install_lint:
	npm install; npm install markdown-table-formatter -g; gem install mdl

lint:
	markdown-table-formatter **/*.md; mdl ./docs ./i18n

deploy_gh:
	USE_SSH=true npm run deploy

translate:
	npm run write-translations -- --locale es