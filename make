NOTE: below process mostly works... but header of page messing up. for now, just doing:
edit index_full.html, NOT index.html
copy it to index.html
push


process was:

edit index_full, NOT index.html
commit
push to github
( can use:
	 git add index_full.html ; git commit -m "changes to index_full" ; git push origin gh-pages
)
wait until refreshed
run:
	 phantomjs scripts/phantom_load.js > index.html
edit index.html
delete section near top that says BEGIN SECTION DELETABLE AFTER HTML RENDER, until END of same section
commit
push to github
( can use:
	 git add index_full.html ; git commit -m "rendered index" ; git push origin gh-pages
)
