
/**
 * Stable implementation for arbitrary elements.
 *
 * @param {function} key Returns a numeric key for a given input element.
 * @param {array} a The input array.
 * @param {int} ai Input array left offset.
 * @param {int} aj Input array right offset.
 * @param {array} b The counting array.
 * @param {int} bi Counting array left offset.
 * @param {int} bj Counting array right offset.
 * @param {array} c The output array.
 * @param {int} ci Output array left offset.
 */

let elements = function ( key , a , ai , aj , b , bi , bj , c , ci ) {

	let ak = ai ;

	// compute histogram

	for ( ; ak < aj ; ++ak ) ++b[bi + key( a[ak] )] ;

	// compute past last index for each key

	for ( let bk = bi + 1 ; bk < bj ; ++bk ) b[bk] += b[bk-1] ;

	// move keys

	while ( ak > ai ) {

		let x = a[--ak] ;

		c[ci + ( --b[key( x )] ) ] = x ;

	}

} ;

exports.elements = elements ;
