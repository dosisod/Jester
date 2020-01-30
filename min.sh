echo "minifying files..."

rm bin/bundle.js
minify $(tree -fi src/js/ | head -n -2 | grep -F ".js") > bin/bundle.js

rm bin/bundle.css
minify $(tree -fi src/css/ | head -n -2 | grep -F ".css") > bin/bundle.css