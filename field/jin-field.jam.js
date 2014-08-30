/**
 * @name $jin.field
 * @class $jin.field
 * @mixins $jin.klass
 * @mixins $jin.view2
 * @returns $jin.field
 */
$jin.klass({ '$jin.field': [ '$jin.view2' ] })

/**
 * @name $jin.field#label
 * @method label
 * @member $jin.field
 */
$jin.atom.prop({ '$jin.field..label': {} })

/**
 * @name $jin.field#valueProp
 * @method valueProp
 * @member $jin.field
 */
$jin.atom.prop({ '$jin.field..valueProp': {} })

/**
 * @name $jin.field#editor
 * @method editor
 * @member $jin.field
 */
$jin.atom.prop({ '$jin.field..editor': {
	pull: function( ){
		return [ this.child( 'editor', $jin.editor ).valueProp( this.valueProp() ) ]
	}
}})
