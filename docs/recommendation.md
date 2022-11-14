1. Excess number of http request

## How Many HTTP Requests Should Web Pages Have?

You should strive to keep the number of HTTP requests under 50. If you can get requests below 25, you’re doing amazing.

https://www.titangrowth.com/blog/reduce-http-requests-like-a-pro-120/#:~:text=How%20Many%20HTTP%20Requests%20Should,HTTP%20requests%20are%20not%20bad.

	157 - All 23.6MB, 14.90 load time )
	34 - XHR
	27 - JS
	14 - CSS
	72 - img
	7 - Font

2. Excess DOM nodes
	19376 - Total dom nodes
	
An optimal DOM tree:

	- Has less than 1500 nodes total.
	- Has a maximum depth of 32 nodes.
	- Has no parent node with more than 60 child nodes.

https://sitebulb.com/hints/performance/avoid-excessive-dom-depth/#:~:text=An%20optimal%20DOM%20tree%3A,maximum%20depth%20of%2032%20nodes.
