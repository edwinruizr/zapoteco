
# mainly used when viewing translation builds locally
serve_build:
	npm run build && npm run serve

install_lint:
	npm install; npm install markdown-table-formatter -g; gem install mdl

lint:
# mdl rules https://github.com/markdownlint/markdownlint/blob/main/docs/RULES.md
# ~ means ignore the rule
	markdown-table-formatter **/*.md; mdl -r~MD007,~MD013,~MD009,~MD002,~MD033 README.md ./docs ./i18n

deploy_gh:
	USE_SSH=true npm run deploy

translate:
	npm run write-translations -- --locale es