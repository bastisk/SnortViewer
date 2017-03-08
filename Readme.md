#What is Snort Viewer
Snort Viewer is a simple Node.JS based webserver to display the logs of your Snort Installation (specifically the `alerts.ids` file).
#Installation & Starting Snort
##Starting Snort
Start snort to output a alerts.ids file by running it with the following parameters.
<pre>
snort -i 1 -c c:\Snort\etc\snort.conf -l c:\Snort\log
</pre>
In this example the file will be created in `C:\Snort\log\alert.ids`.

##Installing and Starting Snort Viewer
To install Snort Viewer, please run
<pre>
git clone https://github.com/bastisk/SnortViewer.git
cd SnortViewer
npm install
</pre>
You can then start the server running
<pre>
npm start
</pre>
#Configuration
Before using the server, make sure to edit the Path to your Snort alert.ids log location in `config.js`.
#Usage
You can use one of these two Routes:
* `/api` - this route delivers the results as JSON in form of `{id: Number, message: String}`
* `/`- this route displays the log as HTML page
