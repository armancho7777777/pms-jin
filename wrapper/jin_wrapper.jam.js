$jin.wrapper = function( ){ // arguments: sourceName*, targetName
    $jin.mixin.apply( this, arguments )
    
    var name = arguments[ arguments.length - 1 ]
    return $jin.mixin( '$jin.wrapper', name )
}

$jin.mixin( '$jin.klass', '$jin.wrapper' )
$jin.property( '$jin.wrapper..raw', null )

$jin.method( '$jin.klass.exec', '$jin.wrapper.exec', function( obj ){
    if( obj instanceof this ) return obj
    if( obj.raw ) obj = obj.raw()
    return this['$jin.klass.exec']( obj )
} )

$jin.method( '$jin.klass..init', '$jin.wrapper..init', function( obj ){
    this.raw( obj )
    return this
} )