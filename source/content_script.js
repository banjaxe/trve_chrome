walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bu\b/g, "v");
	v = v.replace(/\b!\b/g, "! \m/");
	v = v.replace(/\bgod\b/g, "Satan");
	v = v.replace(/\bGod\b/g, "Satan");
	v = v.replace(/\bjesus\b/g, "Lemmy");
	v = v.replace(/\bJesus\b/g, "Lemmy");
	
	textNode.nodeValue = v;
}
