
<!--#echo json="package.json" key="name" underline="=" -->
process-exitcode-atleast
========================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Set process.exitCode to at least that number.
<!--/#echo -->



API
---

This module exports one function:

### processExitCodeAtLeast(n)

Where n is the minimum exitCode to set if the old one is less than n.



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
