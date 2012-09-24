/*
 * jQuery Deep Scroll Plugin
 * Examples and documentation at: www.caruccioweb.net/deep-scroll # coming soon
 * Copyright (c) 2012 Francesco Caruccio
 * Version: 1.0 (27-AUG-2012)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.org/license/
 * Requires: jQuery v1.7.1 or later
 */



==================================================
[ English ]
==================================================

To use the plugin, run the function deepScroll() in your js file or into <script> tags.
For example:

<script type="text/javascript">
    $('a').deepScroll();
</script>

you can set the speed of the scroll so:

$('a.deepScroll').deepScroll({
	animSpeed:	'fast'
});

The plugin works by associating the rel = "id" to the id of the element to be reached.
For example:

Anchor link: <p rel="test" class="deepScroll"> Text </ p>

Element to achieve: <div id="test"> ... </ div>



==================================================
[ Italiano ]
==================================================

Per usare il plugin, lancia la funzione deepScroll() nel tuo file javascript o tra i tag <script>.
Per esempio:

<script type="text/javascript">
    $('a.deepScroll').deepScroll();
</script>

Puoi settare la velocità dell'animazione dello scroll in questo modo:

$('a').deepScroll({
	animSpeed:	'fast'
});


Il plugin lavora associando il rel="id" al id dell'elemento da raggiungere.
Per esempio:

Anchor link: <p rel="test" class="deepScroll">Text</p>

Elemento da raggiungere: <div id="test">...</div>
