APPS = src

down:
	docker compose down
.PHONY: down

install:
	npm ci
.PHONY: install

serve:
	docker compose \
				-p help_to_grow_vendor_www \
				down --remove-orphans && \
		docker compose up --remove-orphans
.PHONY: serve

uninstall:
	rm -Rf node_modules

	for dir in ${APPS}; do \
		(cd $${dir} && rm -Rf node_modules); \
  	done
.PHONY: uninstall
