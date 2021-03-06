this.$jin.fiberize=
$jin.proxy( { get: function( base, name ){
    if( !$node.fibers.current )
        return base[ name ]
    
    if( name === 'valueOf' ) return function( ){ return base.valueOf() }
    if( name === 'inspect' ) return function( ){ return base.inspect() }
    
    var chunks= /^(.+?)(Sync|Async|Defer)$/.exec( name )
    if( !chunks ) return base[ name ]
    
    name = chunks[ 1 ]
    if( typeof base[ name ] !== 'function' ) return base[ name ]
    
    var mod = chunks[ 2 ]
    
    if( mod === 'Sync' ) return $jin.async2sync( base[ name ] )
    if( mod === 'Defer' ) return $jin.async2defer( base[ name ] )
    if( mod === 'Async' ) return $jin.sync2async( base[ name ] )
    
    throw new Error( 'Something wrong!' )
} } )
