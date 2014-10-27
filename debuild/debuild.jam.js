$jin.klass({ '$jin.debuild' : [] })

$jin.atom1.prop({ '$jin.debuild..vary' : {
    pull : function(){
        var vary = Object.create( $jin.param.hash() )
        vary.env = 'web'
        return vary
    }
}})

$jin.method({ '$jin.debuild..get' : function( request ){
    var uri = $jin.uri.parse( request.url )
    var target = $jin.file( '.' + uri.path() )
    var pack = target.parent().parent()
    var build = $jin.build( $jin.uri( {path: pack.relate() , query: this.vary()} ) )

    if( /\.js$/.test( target.name() ) ){
        this.js( target.relate() )
    }

    if( /\.css$/.test( target.name() ) ){
        this.css( target.relate() )
    }

}})

$jin.atom1.prop.hash({ '$jin.debuild..js' : {
    pull : function( path ) {
        
        var target = $jin.file( path )
        var targetMap = target.parent().resolve( target.name() + '.map' )
    
        var pack = target.parent().parent()
        var build = $jin.build( $jin.uri({ path : pack.relate(), query : this.vary() }) )

        var concater = new $node[ 'concat-with-sourcemaps' ]( true, target.relate(), '\n;\n' )
        build.jsSources().forEach( function( src ){
            var srcMap = src.parent().resolve( src.name() + '.map' )
            if( srcMap.exists() ) {
                concater.add( src.relate(), src.content().toString(), srcMap.content().toString() )
            } else {
                concater.add( src.relate(), src.content().toString() )
            }
        } )

	    var map = JSON.parse( concater.sourceMap )
	    map.sourceRoot = $jin.file('.' ).relate( targetMap.parent() )
	    
        target.content( concater.content + '\n//# sourceMappingURL=' + targetMap.relate( target.parent() ) )
        targetMap.content( JSON.stringify( map ) )
        
        return target.version()
    }
}})

$jin.atom1.prop.hash({ '$jin.debuild..css' : {
    pull : function( path ) {

        var target = $jin.file( path )
        var targetMap = target.parent().resolve( target.name() + '.map' )

        var pack = target.parent().parent()
        var build = $jin.build( $jin.uri({ path : pack.relate(), query : this.vary() }) )

        var concater = new $node[ 'concat-with-sourcemaps' ]( true, target.relate(), '\n' )
        build.cssSources().forEach( function( src ){
            var srcMap = src.parent().resolve( src.name() + '.map' )
            if( srcMap.exists() ) {
                var json = JSON.parse( srcMap.content() )
                json.sourceRoot = src.parent().relate( target.parent() )
                concater.add( src.relate(), src.content().toString(), JSON.stringify( json ) )
            } else {
                concater.add( src.relate(), src.content().toString() )
            }
        } )

        target.content( concater.content + '\n/*# sourceMappingURL=' + targetMap.relate( target.parent() ) + ' */' )
        targetMap.content( concater.sourceMap )

        return target.version()
    }
}})

$jin.server.resources( 'jin/debuild', $jin.debuild() )