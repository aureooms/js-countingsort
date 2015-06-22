
/**
 * In-place implementation for unsigned integers 0..n.
 *
 * @param {array} a The input array.
 * @param {int} ai Input array left offset.
 * @param {int} aj Input array right offset.
 * @param {array} b The counting array.
 * @param {int} bi Counting array left offset.
 * @param {int} bj Counting array right offset.
 */

let uints = function ( a , ai , aj , b , bi , bj ) {

	let ak = ai ;

	// compute histogram

	for ( ; ak < aj ; ++ak ) ++b[bi + a[ak]] ;

	// compute past last index for each key

	for ( let bk = bi + 1 ; bk < bj ; ++bk ) b[bk] += b[bk-1] ;

	// move keys

	while ( --ak >= ai ) {

		let x = a[ai] ;

		--b[x] ;

		a[ai] = a[b[x]] ;
		a[b[x]] = x ;

	}

} ;

exports.uints = uints ;
