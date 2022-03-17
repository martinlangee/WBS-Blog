# WBS-Blog
Final pre-exam for the WBS coding school using vanilla JavaScript and HTML.

## Description
<p>I hope I understood the wire frame correctly - but I seems to be only an approximate guideline.</p>
<p>I tried to seperate UI design from the blog entry data. So I used a JSON document in the JS file to define a list of entries. The list is further processed into HTML code. So the core static HTML file is rather small and only contains the main structural elements. If someone really want's to use this code to display a blog it should be easy to write new entries (in the JSON-strucure) or even connect a server database in later step.</p>
<p>I extensively used CSS to make it look quite ok. For instance for the hover effect of the link buttons, the responsiveness of the design, and the alternating background of the blog entries.</p>


## ToDos
### Design
* implement line breaking or scrolling when too many entries appear
### Data handling
* Get blog data from a seperate local JSON file
* Future: Fetch blog data from server via REST...
