# UVIC FORMULA MOTORSPORT WEBSITE
This website is hosted on the UVic network. It consists of two branches:
1. Master which holds the dev files for the website.
2. deployed-site which holds the website files.

The use of a command called `gulp deploy` builds the site into `_site` which is
then published to the `deployed-site` branch.

Do not modify the contents of `deployed-site` manually.

The dev files are broken into two parts; views and public.

Views hold all the web pages as jade files, while public holds the CSS, Images,
JavaScript, and Fonts.
