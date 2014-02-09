$jin.klass({ '$jin.dnd.event': [ '$jin.dom.event' ] })

$jin.method({ '$jin.dnd.event..view': function( dom, x, y ){

	if( dom ){
		dom = $jin.dom( dom )
	} else {
		var autoDom = dom = $jin.doc().makeElement( 'div' )
		dom.nativeNode().style.background = 'red'
		dom.nativeNode().style.visibility = 'hidden'
		dom.parent( document.body )
		x = y =-16
	}

	try {
		this.transfer().setDragImage( dom.nativeNode(), x, y )
	} catch( e ){ }

	if( autoDom ) $jin.schedule( 0, function( ){
		autoDom.parent( null )
	} )

	return this
}})

$jin.method({ '$jin.dnd.event..effect': function( effect ){
	if( !arguments.length ) return this.transfer().dropEffect

	if( !/^(none|copy|move|link)$/.test( effect ) ){
		throw new Error( 'Wrong dnd effect (' + effect + ')' )
	}

	this.transfer().dropEffect = effect
}})

$jin.method({ '$jin.dnd.event..effectAllowed': function( effectAllowed ){
	if( !arguments.length ) return this.transfer().effectAllowed

	if( !/^(none|copy|move|link|copyMove|copyLink|linkMove|all)$/.test( effectAllowed ) ){
		throw new Error( 'Wrong dnd effectAllowed (' + effectAllowed + ')' )
	}

	this.transfer().effectAllowed = effectAllowed
}})
