/**
 * Создаёт функцию, используемую для создания других сущностей.
 *
 * Все сущности создаются единообразно, через так называемые дефайнеры, которые реализуют две сигнатуры:
 *
 *     function( path : string, config : any ) - в случае статического path лучше использовать вторую форму
 *
 *     function({ path : any }) - этот варинт добавляет $jin.definer
 *
 * Преимущества такого способа объявления сущностей в сравнении с традиционным присвоением:
 *
 *  * Автоматически создаются промежуточные пространства имён.
 *  * Каждая определенная в config функция имееет отображаемое являющееся полным путём к ней (очень удобно при отладке).
 *  * Возможно отслеживание затирания одной сущности другой (избавляет от проблем со случайным затиранием).
 *  * Возможно создание не одной сущности, а целого семейства.
 *  * Возможна регистрация одной сущности в более чем одном месте.
 *  * Каждое определение сущности не зависит от окружения и содержит полную информацию о ней (что, например, используется для генерации jsdoc/jsduck коментариев).
 *
 * Недостаток ровно один - чтобы IDE и генераторы документации понимали такие определения необходимы развесистые jsdoc/jsduck коментарии.
 *
 * @param {string} path
 * @param {function( path: string, config : object )} definer
 */
$jin.definer = function( path, definer ){
	
	var wrapper = function( defines, arg ){
		if( arguments.length > 1 ){
			if( defines == null ) return function( path ){
				return definer( path, arg )
			}
			return definer.apply( null, arguments )
		} else {
			if( typeof defines === 'function' ) defines = new defines
			for( var path in defines ){
				definer( path, defines[ path ] )
			}
		}
	}
	
	return $jin.glob( path, wrapper )
}

$jin.definer( '$jin.definer', $jin.definer )
