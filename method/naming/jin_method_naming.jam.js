this.$jin.method.naming = function $jin_method_naming( name, owner ){
    if( arguments.length < 2 ){
        owner = $jin.glob( name )
    }
    
    for( var key in owner ){
        if( !owner.hasOwnProperty( key ) ) continue
        
        var value = owner[ key ]
        if( Object( value ) !== value ) continue
        
        $jin.method.naming( name + '.' + key, value )
    }
    
    if( typeof owner === 'function' && !owner.displayName ){
        $jin.method.naming( name + '.', owner.prototype )
        if( !owner.displayName ) owner.displayName = name
        owner.jin_method_resolves = [ '$' + 'jin.klass..constructor' ]
    }    
}
