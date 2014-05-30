$jin.test( function moment_iso( test ){
	test.equal( $jin.time( '2014' ).toString(), '2014' )
	test.equal( $jin.time( '2014-01' ).toString(), '2014-01' )
	test.equal( $jin.time( '2014-01-02' ).toString(), '2014-01-02' )
	test.equal( $jin.time( '2014-01-02T03' ).toString(), '2014-01-02T03' )
	test.equal( $jin.time( '2014-01-02T03:04' ).toString(), '2014-01-02T03:04' )
	test.equal( $jin.time( '2014-01-02T03:04:05' ).toString(), '2014-01-02T03:04:05' )
	test.equal( $jin.time( '2014-01-02T03:04:05.006' ).toString(), '2014-01-02T03:04:05.006' )
//	test.equal( $jin.time( '2014-01-02T03:04:05.006Z' ).toString(), '2014-01-02T03:04:05.006Z' )
//	test.equal( $jin.time( '2014-01-02T03:04:05.006+07' ).toString(), '2014-01-02T03:04:05.006+07' )
//	test.equal( $jin.time( '2014-01-02T03:04:05.006+07:08' ).toString(), '2014-01-02T03:04:05.006+07:08' )
//	test.equal( $jin.time( '2014-01-02T03:04:05+07:08' ).toString(), '2014-01-02T03:04:05+07:08' )
//	test.equal( $jin.time( '2014-01-02T03:04+07:08' ).toString(), '2014-01-02T03:04+07:08' )
//	test.equal( $jin.time( 'T03:04+07:08' ).toString(), 'T03:04+07:08' )
	test.equal( $jin.time( 'T03:04:05' ).toString(), 'T03:04:05' )
	test.equal( $jin.time( 'T03:04' ).toString(), 'T03:04' )
	test.equal( $jin.time( 'T03' ).toString(), 'T03' )
})

//$jin.test( function moment_iso_short( test ){
//	test.equal( $jin.time( '20140102T030405.006+0708' ).toString(), '2014-01-02T03:04:05.006+07:08' )
//})